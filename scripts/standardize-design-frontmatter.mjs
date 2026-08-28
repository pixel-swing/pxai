import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesRoot = path.join(root, 'style-templates', 'pages');
const designsRoot = path.join(root, 'designs');
const skip = new Set(process.argv.slice(2));

const decode = (value = '') => value
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/\s+/g, ' ')
  .trim();

const quote = (value) => JSON.stringify(String(value));
const cleanName = (value) => value.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '') || 'token';

function parseDeclarations(body) {
  const declarations = new Map();
  for (const part of body.split(';')) {
    const colon = part.indexOf(':');
    if (colon < 1) continue;
    const property = part.slice(0, colon).trim();
    const value = part.slice(colon + 1).trim();
    if (property && value) declarations.set(property, value);
  }
  return declarations;
}

function parseRules(css) {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const rules = [];
  const pattern = /([^{}]+)\{([^{}]*)\}/g;
  let match;
  while ((match = pattern.exec(clean))) {
    const selector = match[1].trim().replace(/\s+/g, ' ');
    const declarations = parseDeclarations(match[2]);
    if (selector && declarations.size) rules.push({ selector, declarations });
  }
  return rules;
}

function extractVars(css) {
  const result = new Map();
  for (const block of css.matchAll(/:root\s*\{([\s\S]*?)\}/gi)) {
    for (const [property, value] of parseDeclarations(block[1])) {
      if (property.startsWith('--')) result.set(cleanName(property.slice(2)), value);
    }
  }
  return result;
}

function isLiteralColor(value) {
  return /^(#[0-9a-f]{3,8}|rgba?\([^;]+\)|hsla?\([^;]+\)|oklch\([^;]+\)|lab\([^;]+\)|lch\([^;]+\)|color\([^;]+\))$/i.test(value.trim());
}

function literalColors(css) {
  return [...new Set([...css.matchAll(/#[0-9a-fA-F]{3,8}\b/g)].map((m) => m[0].toUpperCase()))];
}

function contrastText(color) {
  const match = /^#([0-9a-f]{6})$/i.exec(color);
  if (!match) return '#FFFFFF';
  const channels = [0, 2, 4].map((i) => parseInt(match[1].slice(i, i + 2), 16) / 255);
  const luminance = channels.map((c) => c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
    .reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
  return luminance > 0.45 ? '#000000' : '#FFFFFF';
}

function firstValue(map, candidates) {
  for (const candidate of candidates) {
    if (map.has(candidate)) return map.get(candidate);
  }
  for (const [key, value] of map) {
    if (candidates.some((candidate) => key.includes(candidate))) return value;
  }
  return undefined;
}

function buildColors(vars, css) {
  const colors = new Map([...vars].filter(([, value]) => isLiteralColor(value)));
  const literals = literalColors(css);
  const primary = firstValue(colors, ['primary', 'accent', 'accent-color', 'brand', 'brand-color', 'ink', 'fg'])
    || literals.find((value) => !/^#(?:fff(?:fff)?|000(?:000)?)$/i.test(value))
    || '#000000';
  const surface = firstValue(colors, ['surface', 'background', 'bg', 'paper', 'canvas', 'card'])
    || (contrastText(primary) === '#FFFFFF' ? '#FFFFFF' : '#000000');
  const onSurface = firstValue(colors, ['on-surface', 'foreground', 'fg', 'ink', 'text', 'text-primary']) || contrastText(surface);
  if (!colors.has('primary')) colors.set('primary', primary);
  if (!colors.has('on-primary')) colors.set('on-primary', contrastText(primary));
  if (!colors.has('surface')) colors.set('surface', surface);
  if (!colors.has('on-surface')) colors.set('on-surface', onSurface);
  return colors;
}

function resolveVar(value, vars) {
  const match = /^var\(--([^)]+)\)$/.exec(value?.trim() || '');
  return match ? vars.get(cleanName(match[1])) || value : value;
}

function fontFamilies(html, vars, css) {
  const google = [...html.matchAll(/family=([^&"']+)/gi)]
    .flatMap((m) => decodeURIComponent(m[1]).split('|'))
    .map((value) => value.replace(/\+/g, ' ').split(':')[0].trim());
  const variableFonts = [...vars].filter(([key]) => /(^font$|font-family|font-(body|heading|display|mono|serif|sans)$|typeface)/i.test(key))
    .map(([, value]) => value.split(',')[0].replace(/["']/g, '').trim());
  const direct = [...css.matchAll(/font-family\s*:\s*([^;}]+)/gi)]
    .map((m) => resolveVar(m[1], vars))
    .map((value) => value.split(',')[0].replace(/["']/g, '').trim())
    .filter((value) => !value.startsWith('var('));
  return [...new Set([...google, ...variableFonts, ...direct].filter(Boolean))];
}

function findRule(rules, candidates) {
  for (const candidate of candidates) {
    const exact = rules.find((rule) => rule.selector.split(',').map((part) => part.trim()).includes(candidate));
    if (exact) return exact;
  }
  for (const candidate of candidates) {
    const loose = rules.find((rule) => rule.selector.includes(candidate));
    if (loose) return loose;
  }
  return undefined;
}

function dimensions(value) {
  return [...String(value || '').matchAll(/-?\d*\.?\d+(?:px|rem|em)/gi)].map((m) => m[0]);
}

function typeToken(rule, fallback, vars, families, preferBody = false) {
  const declarations = rule?.declarations || new Map();
  const shorthand = declarations.get('font') || '';
  const sizeValue = declarations.get('font-size');
  const sizeMatches = dimensions(sizeValue);
  const shorthandSize = dimensions(shorthand)[0];
  const fontSize = sizeMatches.at(-1) || shorthandSize || fallback.fontSize;
  const declaredWeight = resolveVar(declarations.get('font-weight'), vars);
  const weight = /^([1-9]00)$/.test(declaredWeight || '')
    ? declaredWeight
    : shorthand.match(/\b([1-9]00)\b/)?.[1] || fallback.fontWeight;
  const lineHeight = declarations.get('line-height') || shorthand.match(/\/\s*([\d.]+(?:px|rem|em)?)/)?.[1] || fallback.lineHeight;
  const spacing = declarations.get('letter-spacing');
  let family = resolveVar(declarations.get('font-family'), vars);
  if (!family) {
    const familyVar = shorthand.match(/var\(--([^)]+)\)/)?.[1];
    family = familyVar ? vars.get(cleanName(familyVar)) : undefined;
  }
  family = family?.split(',')[0].replace(/["']/g, '').trim();
  if (!family || family.startsWith('var(')) family = families[preferBody && families.length > 1 ? 1 : 0] || 'system-ui';
  const token = { fontFamily: family, fontSize, fontWeight: String(weight), lineHeight: String(lineHeight) };
  if (spacing && /^-?\d*\.?\d+(?:px|rem|em)$/.test(spacing)) token.letterSpacing = spacing;
  return token;
}

function buildTypography(html, vars, css, rules) {
  const families = fontFamilies(html, vars, css);
  return new Map([
    ['display-lg', typeToken(findRule(rules, ['.t-display', '.display', '.hero h1', 'h1']), { fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1' }, vars, families)],
    ['headline-lg', typeToken(findRule(rules, ['h1', '.t-heading', '.headline-lg', 'h2']), { fontSize: '2rem', fontWeight: '700', lineHeight: '1.2' }, vars, families)],
    ['headline-md', typeToken(findRule(rules, ['h2', 'h3', '.t-title', '.headline-md']), { fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.3' }, vars, families)],
    ['body-md', typeToken(findRule(rules, ['.t-body', 'body', 'p']), { fontSize: '1rem', fontWeight: '400', lineHeight: '1.6' }, vars, families, true)],
    ['label-sm', typeToken(findRule(rules, ['.t-label', '.eyebrow', 'label', '.label']), { fontSize: '0.8125rem', fontWeight: '500', lineHeight: '1.4' }, vars, families, true)],
    ['button-md', typeToken(findRule(rules, ['.btn', 'button', '.cta']), { fontSize: '0.9375rem', fontWeight: '600', lineHeight: '1.4' }, vars, families, true)],
  ]);
}

function isDimension(value) {
  return /^-?\d*\.?\d+(?:px|rem|em)$/.test(String(value).trim());
}

function buildRounded(vars, rules) {
  const rounded = new Map();
  for (const [key, value] of vars) {
    const normalized = value === '0' ? '0px' : value;
    if (/radius|rounded/i.test(key) && isDimension(normalized)) rounded.set(key.replace(/^border-/, ''), normalized);
  }
  if (!rounded.size) {
    const candidates = rules.flatMap((rule) => [...rule.declarations].filter(([key]) => key === 'border-radius').map(([, value]) => value));
    const value = candidates.map((item) => item === '0' ? '0px' : item).find(isDimension) || '0px';
    rounded.set('DEFAULT', value);
  } else if (!rounded.has('DEFAULT')) {
    rounded.set('DEFAULT', rounded.values().next().value);
  }
  return rounded;
}

function buildSpacing(vars) {
  const spacing = new Map();
  for (const [key, value] of vars) {
    if (/(^spacing$|space|gap|gutter|padding|^pad$)/i.test(key) && isDimension(value)) spacing.set(key, value);
  }
  if (!spacing.size) spacing.set('unit', '8px');
  if (!spacing.has('sm')) spacing.set('sm', '8px');
  if (!spacing.has('md')) spacing.set('md', '16px');
  if (!spacing.has('lg')) spacing.set('lg', '32px');
  return spacing;
}

function writeTypography(lines, typography) {
  lines.push('typography:');
  for (const [name, values] of typography) {
    lines.push(`  ${name}:`);
    for (const [key, value] of Object.entries(values)) lines.push(`    ${key}: ${quote(value)}`);
  }
}

function buildFrontmatter(slug, html, css) {
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || slug).replace(/\s*[·|–—-]\s*风格演示.*$/i, '');
  const description = decode(html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1] || '');
  const vars = extractVars(css);
  const rules = parseRules(css);
  const colors = buildColors(vars, css);
  const typography = buildTypography(html, vars, css, rules);
  const rounded = buildRounded(vars, rules);
  const spacing = buildSpacing(vars);
  const onPrimary = colors.has('on-primary') ? 'on-primary' : 'on-surface';
  const surface = colors.has('surface') ? 'surface' : 'primary';
  const onSurface = colors.has('on-surface') ? 'on-surface' : onPrimary;
  const defaultRadius = rounded.has('DEFAULT') ? 'DEFAULT' : rounded.keys().next().value;

  const lines = ['---', `name: ${quote(title)}`, 'version: "alpha"', `id: ${quote(slug)}`, `source: ${quote(`style-templates/pages/${slug}.html`)}`, `description: ${quote(description)}`, 'colors:'];
  for (const [name, value] of colors) lines.push(`  ${name}: ${quote(value)}`);
  writeTypography(lines, typography);
  lines.push('rounded:');
  for (const [name, value] of rounded) lines.push(`  ${name}: ${quote(value)}`);
  lines.push('spacing:');
  for (const [name, value] of spacing) lines.push(`  ${name}: ${quote(value)}`);
  lines.push(
    'components:',
    '  button-primary:',
    '    backgroundColor: "{colors.primary}"',
    `    textColor: "{colors.${onPrimary}}"`,
    '    typography: "{typography.button-md}"',
    `    rounded: "{rounded.${defaultRadius}}"`,
    '    padding: "0.65rem 1.5rem"',
    '    height: "44px"',
    '  card-standard:',
    `    backgroundColor: "{colors.${surface}}"`,
    `    textColor: "{colors.${onSurface}}"`,
    `    rounded: "{rounded.${defaultRadius}}"`,
    '    padding: "1.5rem"',
    '  input-field:',
    `    backgroundColor: "{colors.${surface}}"`,
    `    textColor: "{colors.${onSurface}}"`,
    '    typography: "{typography.body-md}"',
    `    rounded: "{rounded.${defaultRadius}}"`,
    '    padding: "0.75rem 1rem"',
    '    height: "44px"',
    '---',
  );
  return lines.join('\n');
}

function replaceFrontmatter(markdown, frontmatter) {
  const match = /^---\r?\n[\s\S]*?\r?\n---\r?\n/.exec(markdown);
  if (!match) throw new Error('Missing YAML front matter');
  return `${frontmatter}\n${markdown.slice(match[0].length).replace(/^\r?\n*/, '\n')}`;
}

const designDirs = fs.readdirSync(designsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, 'en'));

let changed = 0;
for (const slug of designDirs) {
  if (skip.has(slug)) continue;
  const designPath = path.join(designsRoot, slug, 'DESIGN.md');
  const htmlPath = path.join(pagesRoot, `${slug}.html`);
  const markdown = fs.readFileSync(designPath, 'utf8');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((match) => match[1]).join('\n');
  fs.writeFileSync(designPath, replaceFrontmatter(markdown, buildFrontmatter(slug, html, css)), 'utf8');
  changed += 1;
}

console.log(`Standardized ${changed} DESIGN.md files; skipped ${[...skip].join(', ') || 'none'}.`);
