import { execFileSync } from 'node:child_process'
import { mkdir, readdir, readFile, unlink, writeFile } from 'node:fs/promises'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse as parseYaml } from 'yaml'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectDir = resolve(scriptDir, '..')
const designsDir = resolve(projectDir, '../designs')
const outputDir = resolve(projectDir, 'src/styles/themes/tokens')
const cliPath = resolve(projectDir, 'node_modules/@google/design.md/dist/index.js')
const optionsPath = resolve(projectDir, 'src/data/themeOptions.ts')
const importsPath = resolve(projectDir, 'src/styles/themes/all-themes.css')

const kebab = (value) => String(value)
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/[^a-zA-Z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
  .toLowerCase()

function readFrontMatter(markdown, source) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) throw new Error(`${source} has no YAML front matter`)
  const data = parseYaml(match[1])
  if (!data || typeof data !== 'object') throw new Error(`${source} has invalid YAML front matter`)
  return data
}

function cssString(value) {
  const text = String(value ?? '').trim()
  if (!text) return ''
  if (/^(?:serif|sans-serif|monospace|system-ui|cursive|fantasy|ui-)/i.test(text)) return text
  if (text.includes(',')) return text
  return `'${text.replaceAll("'", "\\'")}'`
}

function flattenFonts(value, path = [], result = []) {
  if (!value || typeof value !== 'object') return result
  for (const [key, child] of Object.entries(value)) {
    if (key === 'fontFamily' && typeof child === 'string') {
      result.push({ path: path.join('.').toLowerCase(), value: child })
    } else if (child && typeof child === 'object') {
      flattenFonts(child, [...path, key], result)
    }
  }
  return result
}

function rankName(name, candidates) {
  const normalized = kebab(name)
  for (let index = 0; index < candidates.length; index += 1) {
    const candidate = candidates[index]
    if (normalized === candidate) return index * 10
    if (`-${normalized}-`.includes(`-${candidate}-`)) return index * 10 + 5
  }
  return Number.POSITIVE_INFINITY
}

function pickToken(keys, candidates, fallback) {
  const ranked = keys
    .map((key, index) => ({ key, index, score: rankName(key, candidates) }))
    .filter(({ score }) => Number.isFinite(score))
    .sort((a, b) => a.score - b.score || a.index - b.index)
  return ranked[0]?.key ?? fallback
}

function variable(section, key) {
  return key ? `var(--${section}-${kebab(key)})` : null
}

function parseColor(color) {
  if (Array.isArray(color)) return color
  const text = String(color ?? '').trim()
  const hexMatch = text.match(/^#([\da-f]{3}|[\da-f]{6}|[\da-f]{8})$/i)
  if (hexMatch) {
    let hex = hexMatch[1]
    if (hex.length === 3) hex = [...hex].map((part) => part + part).join('')
    return [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255)
      .concat(hex.length === 8 ? parseInt(hex.slice(6), 16) / 255 : 1)
  }
  const rgbMatch = text.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i)
  if (!rgbMatch) return null
  return [Number(rgbMatch[1]) / 255, Number(rgbMatch[2]) / 255, Number(rgbMatch[3]) / 255, rgbMatch[4] === undefined ? 1 : Number(rgbMatch[4])]
}

function composite(foreground, background) {
  if (!foreground || !background) return null
  return [0, 1, 2].map((index) => foreground[index] * foreground[3] + background[index] * (1 - foreground[3])).concat(1)
}

function luminance(color) {
  const parsed = Array.isArray(color) ? color : parseColor(color)
  if (!parsed || parsed[3] < 1) return null
  const channels = parsed.slice(0, 3)
    .map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

function contrast(colorA, colorB, backdrop = null) {
  let foreground = parseColor(colorA)
  let background = parseColor(colorB)
  const base = parseColor(backdrop)
  if (!foreground || !background) return null
  if (background[3] < 1) {
    if (!base || base[3] < 1) return null
    background = composite(background, base)
  }
  if (foreground[3] < 1) foreground = composite(foreground, background)
  const a = luminance(foreground)
  const b = luminance(background)
  if (a === null || b === null) return null
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
}

function onColor(color) {
  const parsed = parseColor(color)
  if (!parsed || parsed[3] < 1) return '#000000'
  return contrast('#000000', color) >= contrast('#ffffff', color) ? '#000000' : '#ffffff'
}

function sameColor(colorA, colorB) {
  const a = parseColor(colorA)
  const b = parseColor(colorB)
  if (a && b) return a.every((channel, index) => Math.abs(channel - b[index]) < 0.0001)
  return String(colorA).trim().toLowerCase() === String(colorB).trim().toLowerCase()
}

function aliases(frontMatter, id) {
  const colors = frontMatter.colors && typeof frontMatter.colors === 'object' ? frontMatter.colors : {}
  const spacing = frontMatter.spacing && typeof frontMatter.spacing === 'object' ? frontMatter.spacing : {}
  const colorKeys = Object.keys(colors).filter((key) => typeof colors[key] === 'string')
  const spacingKeys = Object.keys(spacing).filter((key) => typeof spacing[key] === 'string')
  const firstColor = colorKeys[0]
  const color = (candidates, fallbackKey, literal) => variable('color', pickToken(colorKeys, candidates, fallbackKey ?? firstColor)) ?? literal

  let bgKey = pickToken(colorKeys, ['background', 'page-background', 'canvas', 'bg', 'bg-deep', 'background-deep', 'navy-deep', 'deep', 'base', 'neutral', 'surface'], firstColor)
  let surfaceKey = pickToken(colorKeys, ['surface', 'paper', 'card', 'panel', 'container', 'surface-muted', 'neutral', 'background'], bgKey)
  const inkKey = pickToken(colorKeys, ['text-color', 'text-primary', 'foreground', 'on-background', 'on-surface', 'on-neutral', 'text', 'ink'], firstColor)
  const primaryKey = pickToken(colorKeys, ['primary', 'accent', 'brand'], firstColor)
  const secondaryKey = pickToken(colorKeys, ['secondary', 'accent-secondary', 'primary'], primaryKey)
  const tertiaryKey = pickToken(colorKeys, ['tertiary', 'accent-tertiary', 'secondary', 'primary'], secondaryKey)
  const strokeKey = pickToken(spacingKeys, ['stroke', 'hairline', 'pixel'], null)
  const strokeValue = strokeKey ? String(spacing[strokeKey]).trim() : ''
  const pixelAlias = id === '52-pixel-art'
    ? variable('spacing', pickToken(spacingKeys, ['unit', 'pixel', 'hairline', 'xxs', 'xs'], null)) ?? '4px'
    : id === '04-brutalism'
      ? '3px'
      : (/^(?:0?\.\d+|[12])px$/i.test(strokeValue) ? variable('spacing', strokeKey) : '1px')

  // Keep the explicit text/ink intent and repair the canvas instead. Glass
  // systems often declare only translucent surfaces, which are not valid page
  // backgrounds on their own.
  if ((contrast(colors[inkKey], colors[bgKey]) ?? 0) < 4.5) {
    const readableBackground = colorKeys
      .filter((key) => parseColor(colors[key])?.[3] === 1 && key !== inkKey)
      .map((key, index) => ({
        key,
        index,
        ratio: contrast(colors[inkKey], colors[key]) ?? 0,
        semantic: rankName(key, ['background', 'page-background', 'canvas', 'bg', 'deep', 'base', 'neutral', 'surface', 'panel']),
      }))
      .filter(({ ratio }) => ratio >= 4.5)
      .sort((a, b) => (Number.isFinite(a.semantic) ? a.semantic : 1000) - (Number.isFinite(b.semantic) ? b.semantic : 1000) || a.index - b.index)[0]
    if (readableBackground) bgKey = readableBackground.key
  }

  let bgAlias = variable('color', bgKey) ?? '#f5f5f5'
  let bgColor = colors[bgKey]
  if ((contrast(colors[inkKey], bgColor) ?? 0) < 4.5) {
    const inkLum = luminance(colors[inkKey])
    const anchorKey = primaryKey ?? firstColor
    const contrastColor = inkLum !== null && inkLum > 0.5 ? '#000000' : '#ffffff'
    bgAlias = `color-mix(in srgb, ${variable('color', anchorKey)} 20%, ${contrastColor} 80%)`
    const anchor = parseColor(colors[anchorKey]) ?? parseColor(contrastColor)
    const target = parseColor(contrastColor)
    bgColor = [0, 1, 2].map((index) => anchor[index] * 0.2 + target[index] * 0.8).concat(1)
  }

  // A global ink token is used on both the page and cards in PX AI. If the
  // declared surface is unreadable (or identical to the page), prefer a nearby
  // panel/container color from the source palette that preserves contrast.
  const needsSurfaceAlternative = sameColor(colors[surfaceKey], bgColor)
    || (contrast(colors[inkKey], colors[surfaceKey], bgColor) ?? 0) < 4.5
  if (needsSurfaceAlternative) {
    const bgLum = luminance(colors[bgKey])
    const alternative = colorKeys
      .filter((key) => key !== bgKey && !sameColor(colors[key], colors[bgKey]))
      .map((key, index) => ({
        key,
        index,
        ratio: contrast(colors[inkKey], colors[key], bgColor) ?? 0,
        semantic: rankName(key, ['panel', 'card', 'container', 'surface-muted', 'surface-alt', 'surface', 'paper', 'navy', 'neutral']),
        distance: bgLum === null || luminance(colors[key]) === null ? 1 : Math.abs(bgLum - luminance(colors[key])),
      }))
      .filter(({ ratio }) => ratio >= 4.5)
      .sort((a, b) => (Number.isFinite(a.semantic) ? a.semantic : 1000) - (Number.isFinite(b.semantic) ? b.semantic : 1000) || a.distance - b.distance || a.index - b.index)[0]
    if (alternative) surfaceKey = alternative.key
  }

  // These structural themes intentionally use the same white token for canvas
  // and cards. Their separation comes from black rules, not tinted surfaces.
  if (id === '01-minimalism-swiss' || id === '04-brutalism') {
    surfaceKey = pickToken(colorKeys, ['surface'], surfaceKey)
  }

  let paperAlias = variable('color', surfaceKey) ?? '#ffffff'
  if (id !== '01-minimalism-swiss' && id !== '04-brutalism' && sameColor(colors[surfaceKey], bgColor)) {
    const inkLum = luminance(colors[inkKey])
    const contrastColor = inkLum !== null && inkLum > 0.5 ? '#000000' : '#ffffff'
    paperAlias = `color-mix(in srgb, ${variable('color', surfaceKey)} 94%, ${contrastColor} 6%)`
  }

  const fonts = flattenFonts(frontMatter.typography)
  const displayFont = fonts.slice().sort((a, b) => rankName(a.path, ['display', 'headline', 'title', 'heading', 'label']) - rankName(b.path, ['display', 'headline', 'title', 'heading', 'label']))[0]?.value
  const bodyFont = fonts.slice().sort((a, b) => rankName(a.path, ['body', 'paragraph', 'copy', 'label', 'display']) - rankName(b.path, ['body', 'paragraph', 'copy', 'label', 'display']))[0]?.value
  const bgLuminance = luminance(bgColor)
  const redKey = pickToken(colorKeys, ['red', 'error', 'danger', 'destructive', 'pink', 'magenta', 'tertiary', 'primary'], tertiaryKey)
  const blueKey = pickToken(colorKeys, ['blue', 'cyan', 'info', 'link', 'secondary', 'primary'], secondaryKey)
  const greenKey = pickToken(colorKeys, ['green', 'mint', 'lime', 'success', 'positive', 'tertiary', 'primary'], tertiaryKey)
  const yellowKey = pickToken(colorKeys, ['yellow', 'warning', 'gold', 'amber', 'orange', 'purple', 'violet', 'accent', 'secondary'], secondaryKey)
  const borderKey = id === '01-minimalism-swiss'
    ? pickToken(colorKeys, ['outline'], secondaryKey)
    : id === '04-brutalism'
      ? pickToken(colorKeys, ['black'], inkKey)
      : pickToken(colorKeys, ['outline-subtle', 'border-subtle', 'divider', 'border', 'line', 'outline'], secondaryKey)

  return [
    `  --pixel: ${pixelAlias};`,
    `  --ink: ${variable('color', inkKey) ?? '#111111'};`,
    `  --paper: ${paperAlias};`,
    `  --bg: ${bgAlias};`,
    `  --red: ${variable('color', redKey) ?? '#d93025'};`,
    `  --blue: ${variable('color', blueKey) ?? '#1a73e8'};`,
    `  --green: ${variable('color', greenKey) ?? '#188038'};`,
    `  --yellow: ${variable('color', yellowKey) ?? '#f9ab00'};`,
    `  --on-red: ${onColor(colors[redKey])};`,
    `  --on-blue: ${onColor(colors[blueKey])};`,
    `  --on-green: ${onColor(colors[greenKey])};`,
    `  --on-yellow: ${onColor(colors[yellowKey])};`,
    `  --on-accent: ${onColor(colors[primaryKey])};`,
    `  --muted: ${color(['on-surface-muted', 'text-muted', 'text-secondary', 'muted', 'disabled', 'secondary', 'on-surface'], inkKey, '#666666')};`,
    `  --soft-line: ${variable('color', borderKey) ?? '#d0d0d0'};`,
    `  --border: ${variable('color', borderKey) ?? '#d0d0d0'};`,
    `  --hover-surface: ${color(['surface-hover', 'hover', 'surface-muted', 'primary-container', 'secondary-container', 'surface'], surfaceKey, '#f0f0f0')};`,
    `  --placeholder: ${color(['placeholder', 'disabled', 'text-muted', 'on-surface-muted', 'muted', 'secondary'], inkKey, '#777777')};`,
    `  --font-pixel: ${cssString(displayFont) || "'Press Start 2P'"}, 'Microsoft YaHei', sans-serif;`,
    `  --font-body: ${cssString(bodyFont ?? displayFont) || 'system-ui'}, 'Microsoft YaHei', sans-serif;`,
    ...(bgLuminance !== null && bgLuminance < 0.18 ? ['  color-scheme: dark;'] : []),
  ].join('\n')
}

function scopeExport(css, id, aliasBlock) {
  const selector = `[data-theme='${id}']`
  const rootPattern = /:root\s*\{([\s\S]*?)\}\s*$/
  const match = css.trim().match(rootPattern)
  if (!match) throw new Error('css-vars output did not contain a :root block')
  return `${selector} {${match[1].trimEnd()}\n\n  /* PX AI application theme contract. */\n${aliasBlock}\n}\n`
}

async function main() {
  await mkdir(outputDir, { recursive: true })
  const entries = (await readdir(designsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, 'en', { numeric: true }))

  const generated = []
  const failures = []
  for (const entry of entries) {
    const designPath = join(designsDir, entry.name, 'DESIGN.md')
    try {
      const markdown = await readFile(designPath, 'utf8')
      const frontMatter = readFrontMatter(markdown, relative(projectDir, designPath))
      const id = kebab(frontMatter.id || entry.name)
      if (!id) throw new Error('front matter id is empty')
      const cliCss = execFileSync(process.execPath, [cliPath, 'export', '--format', 'css-vars', designPath], {
        cwd: projectDir,
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024,
      })
      const output = `/* Generated from designs/${entry.name}/DESIGN.md. Do not edit manually. */\n${scopeExport(cliCss, id, aliases(frontMatter, id))}`
      await writeFile(join(outputDir, `${id}.css`), output, 'utf8')
      generated.push({ id, name: String(frontMatter.name || id) })
    } catch (error) {
      failures.push({ design: entry.name, message: error instanceof Error ? error.message : String(error) })
    }
  }

  generated.sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }))
  const expectedFiles = new Set(generated.map(({ id }) => `${id}.css`))
  for (const filename of await readdir(outputDir)) {
    if (filename.endsWith('.css') && !expectedFiles.has(filename)) {
      await unlink(join(outputDir, filename))
    }
  }

  const optionLines = generated.map(({ id, name }) => `  { id: ${JSON.stringify(id)}, name: ${JSON.stringify(name)} },`)
  await writeFile(optionsPath, `// Generated by scripts/generate-all-themes.mjs. Do not edit manually.\nexport const themeOptions = [\n${optionLines.join('\n')}\n] as const\n\nexport type ThemeId = (typeof themeOptions)[number]['id']\n`, 'utf8')

  const importLines = generated.map(({ id }) => `@import './tokens/${id}.css';`)
  await writeFile(importsPath, `/* Generated by scripts/generate-all-themes.mjs. Do not edit manually. */\n${importLines.join('\n')}\n`, 'utf8')

  console.log(`Generated ${generated.length} theme(s) in ${relative(projectDir, outputDir)}.`)
  if (failures.length) {
    console.error(`Failed ${failures.length} theme(s):`)
    for (const failure of failures) console.error(`- ${failure.design}: ${failure.message}`)
    process.exitCode = 1
  }
}

await main()
