import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'style-templates', 'pages');
const outputRoot = path.join(root, 'designs');

const decode = (value = '') => value
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/\s+/g, ' ')
  .trim();

const stripTags = (value = '') => decode(value.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' '));
const yamlString = (value) => JSON.stringify(String(value));

function parseDeclarations(body) {
  const declarations = [];
  for (const part of body.split(';')) {
    const colon = part.indexOf(':');
    if (colon < 1) continue;
    const property = part.slice(0, colon).trim();
    const value = part.slice(colon + 1).trim();
    if (property && value) declarations.push([property, value]);
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
    if (!selector || selector.startsWith('@keyframes')) continue;
    const declarations = parseDeclarations(match[2]);
    if (declarations.length) rules.push({ selector, declarations, raw: declarations.map(([k, v]) => `${k}: ${v}`).join('; ') });
  }
  return rules;
}

function extractVars(css) {
  const blocks = [...css.matchAll(/:root\s*\{([\s\S]*?)\}/gi)];
  const vars = [];
  for (const block of blocks) {
    for (const [property, value] of parseDeclarations(block[1])) {
      if (property.startsWith('--')) vars.push([property.slice(2), value]);
    }
  }
  return [...new Map(vars).entries()];
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function isColorValue(value) {
  return /(^|\s)(#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(|oklch\(|transparent\b|currentColor\b|linear-gradient\(|radial-gradient\()/i.test(value);
}

function extractLiteralColors(css) {
  return unique([...css.matchAll(/#[0-9a-fA-F]{3,8}\b/g)].map((m) => m[0].toUpperCase())).slice(0, 24);
}

function extractFonts(html, vars, css) {
  const fromGoogle = [...html.matchAll(/family=([^&"']+)/gi)]
    .flatMap((m) => decodeURIComponent(m[1]).split('|'))
    .map((v) => v.replace(/\+/g, ' ').split(':')[0].trim());
  const fromVars = vars.filter(([k]) => /(^font$|font-family|font-(body|heading|display|mono|serif|sans)$|typeface)/i.test(k)).flatMap(([, v]) => {
    const first = v.split(',')[0].replace(/["']/g, '').trim();
    return /^(inherit|system-ui|sans-serif|serif|monospace)$/i.test(first) ? [] : [first];
  });
  const fromRules = [...css.matchAll(/font-family\s*:\s*([^;}]+)/gi)].map((m) => m[1].split(',')[0].replace(/["']/g, '').trim()).filter((v) => !v.startsWith('var('));
  return unique([...fromGoogle, ...fromVars, ...fromRules]);
}

function pickRules(rules, matcher, limit = 8) {
  return rules.filter((rule) => matcher.test(rule.selector)).slice(0, limit);
}

function formatRule(rule) {
  return `- \`${rule.selector}\`: ${rule.raw}.`;
}

function extractMedia(css) {
  const queries = unique([...css.matchAll(/@media\s*([^\{]+)\{/gi)].map((m) => m[1].trim()));
  return queries;
}

function buildDesign(fileName, html) {
  const slug = path.basename(fileName, '.html');
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || slug).replace(/\s*[·|–—-]\s*风格演示.*$/i, '');
  const description = decode(html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1] || '');
  const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n');
  const rules = parseRules(css);
  const vars = extractVars(css);
  const colors = vars.filter(([, value]) => isColorValue(value));
  const literalColors = extractLiteralColors(css);
  const fonts = extractFonts(html, vars, css);
  const radius = vars.filter(([key, value]) => /radius|round/i.test(key) || (/^\d+(\.\d+)?(px|rem|em|%)$/.test(value) && /radius/i.test(key)));
  const shadows = vars.filter(([key, value]) => /shadow|elev/i.test(key) || /box-shadow/i.test(value));
  const spacing = vars.filter(([key]) => /space|gap|gutter|padding|width|container/i.test(key));
  const motion = vars.filter(([key, value]) => /dur|ease|motion|transition|spring/i.test(key) || /cubic-bezier/.test(value));
  const media = extractMedia(css);

  const typographyRules = pickRules(rules, /(^|,|\s)(body|h1|h2|h3|\.t-|\.display|\.headline|\.eyebrow|\.label)/i, 10);
  const layoutRules = pickRules(rules, /(\.wrap|\.container|\.hero|\.grid|\.phone|\.shell|\.layout|\.dashboard|main\b|section\b)/i, 10);
  const buttonRules = pickRules(rules, /(\.btn|button|\.cta|\.fab)(?![\w-])/i, 7);
  const cardRules = pickRules(rules, /(\.card|\.panel|\.tile|\.widget|\.window)(?![\w-])/i, 7);
  const inputRules = pickRules(rules, /(input|textarea|select|\.field|\.switch|\.toggle)/i, 7);
  const navigationRules = pickRules(rules, /(header|nav|navbar|sidebar|\.tabs?)(?![\w-])/i, 6);
  const feedbackRules = pickRules(rules, /(:hover|:active|:focus|:checked|:disabled|aria-current)/i, 10);
  const a11yRules = pickRules(rules, /(:focus-visible|prefers-reduced-motion|prefers-contrast)/i, 8);

  const textSamples = unique([
    ...[...html.matchAll(/<(?:h1|h2|h3)[^>]*>([\s\S]*?)<\/(?:h1|h2|h3)>/gi)].map((m) => stripTags(m[1])),
    ...[...html.matchAll(/class=["'][^"']*(?:eyebrow|sub|lead)[^"']*["'][^>]*>([\s\S]*?)<\//gi)].map((m) => stripTags(m[1])),
  ]).filter((v) => v.length > 3).slice(0, 8);

  const tokenLines = vars.length
    ? vars.map(([key, value]) => `  ${key}: ${yamlString(value)}`)
    : literalColors.map((value, i) => `  color-${String(i + 1).padStart(2, '0')}: ${yamlString(value)}`);

  const sections = [];
  sections.push('---');
  sections.push(`name: ${yamlString(title)}`);
  sections.push(`id: ${yamlString(slug)}`);
  sections.push(`source: ${yamlString(`style-templates/pages/${fileName}`)}`);
  sections.push(`description: ${yamlString(description)}`);
  sections.push('tokens:');
  sections.push(...tokenLines);
  sections.push('typefaces:');
  if (fonts.length) sections.push(...fonts.map((font) => `  - ${yamlString(font)}`));
  else sections.push('  - "system-ui"');
  sections.push('literalColors:');
  sections.push(...literalColors.map((color) => `  - ${yamlString(color)}`));
  sections.push('---', '');

  sections.push(`# ${title} Design System`, '');
  sections.push('## 品牌与视觉方向', '');
  sections.push(description || `${title} 的视觉语言以源页面为唯一事实来源。生成新界面时应延续其色彩、排版、形状与交互节奏。`, '');
  sections.push(`视觉关键词来自页面本身：${textSamples.length ? textSamples.join('；') : title}。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。`, '');

  sections.push('## 颜色系统', '');
  if (colors.length) {
    sections.push('优先使用以下语义令牌；不要在组件中另造近似色：', '');
    sections.push('| Token | Value |', '|---|---|');
    for (const [key, value] of colors) sections.push(`| \`--${key}\` | \`${value.replace(/\|/g, '\\|')}\` |`);
  } else {
    sections.push(`源页面没有声明颜色变量。按出现顺序使用主色板：${literalColors.map((v) => `\`${v}\``).join('、')}。`);
  }
  sections.push('', `辅助字面色仅在令牌无法表达的局部状态或插画中使用：${literalColors.map((v) => `\`${v}\``).join('、') || '无'}。`, '');

  sections.push('## 字体与信息层级', '');
  sections.push(`字体族：${fonts.length ? fonts.map((v) => `**${v}**`).join('、') : '**system-ui**'}。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。`, '');
  if (typographyRules.length) sections.push(...typographyRules.map(formatRule), '');

  sections.push('## 形状、间距与深度', '');
  if (radius.length) sections.push(`圆角令牌：${radius.map(([k, v]) => `\`--${k}: ${v}\``).join('；')}。`);
  else sections.push('未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。');
  if (spacing.length) sections.push(`空间令牌：${spacing.map(([k, v]) => `\`--${k}: ${v}\``).join('；')}。`);
  if (shadows.length) sections.push(`阴影/海拔令牌：${shadows.map(([k, v]) => `\`--${k}: ${v}\``).join('；')}。`);
  sections.push('');
  if (layoutRules.length) sections.push(...layoutRules.map(formatRule), '');

  sections.push('## 组件规范', '');
  const componentGroups = [
    ['操作按钮', buttonRules],
    ['卡片与容器', cardRules],
    ['表单与选择控件', inputRules],
    ['导航', navigationRules],
  ];
  for (const [label, group] of componentGroups) {
    if (!group.length) continue;
    sections.push(`### ${label}`, '', ...group.map(formatRule), '');
  }

  sections.push('## 交互与动效', '');
  if (motion.length) sections.push(`动效令牌：${motion.map(([k, v]) => `\`--${k}: ${v}\``).join('；')}。`, '');
  else sections.push('动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。', '');
  if (feedbackRules.length) sections.push(...feedbackRules.map(formatRule), '');

  sections.push('## 响应式与无障碍', '');
  sections.push(`源页面断点/用户偏好查询：${media.length ? media.map((v) => `\`${v}\``).join('、') : '未声明；新页面至少覆盖窄屏、桌面和减少动态偏好'}。`);
  sections.push('所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。');
  if (a11yRules.length) sections.push('', ...a11yRules.map(formatRule));
  sections.push('');

  sections.push('## 生成新页面时的执行规则', '');
  sections.push('1. 首先套用 front matter 中的原始令牌，再从组件规范选择最接近的现有模式。');
  sections.push('2. 保持源页面的密度、留白、对齐方式与视觉重心；内容可以变化，但视觉语法不能变化。');
  sections.push('3. 新增组件必须由现有颜色、字体、圆角、边框和阴影组合而成，禁止引入第二套设计语言。');
  sections.push('4. 交互状态至少覆盖 hover、active、focus-visible 与 disabled；触屏界面不能依赖 hover 才显示关键操作。');
  sections.push('5. 在窄屏优先重排和堆叠，不以缩小字号或压缩点击目标来维持桌面布局。');
  sections.push('');
  sections.push('## 禁止事项', '');
  sections.push('- 不要添加源页面未使用的渐变、玻璃模糊、厚重阴影或装饰性圆角。');
  sections.push('- 不要用通用组件库默认样式覆盖这里的令牌和组件状态。');
  sections.push('- 不要牺牲焦点可见性、文字对比度或减少动态偏好来追求风格效果。');
  sections.push('- 不要在同一页面混用相近但不相同的颜色、间距或圆角数值。');
  sections.push('');

  return sections.join('\n');
}

const files = fs.readdirSync(pagesDir).filter((name) => /^\d{2}-.*\.html$/i.test(name)).sort((a, b) => a.localeCompare(b, 'en'));
fs.mkdirSync(outputRoot, { recursive: true });

for (const fileName of files) {
  const html = fs.readFileSync(path.join(pagesDir, fileName), 'utf8');
  const slug = path.basename(fileName, '.html');
  const targetDir = path.join(outputRoot, slug);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'DESIGN.md'), buildDesign(fileName, html), 'utf8');
}

const index = [
  '# Design Systems',
  '',
  `Generated from ${files.length} HTML style references in \`style-templates/pages\`.`,
  '',
  ...files.map((fileName) => {
    const slug = path.basename(fileName, '.html');
    const html = fs.readFileSync(path.join(pagesDir, fileName), 'utf8');
    const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || slug).replace(/\s*[·|–—-]\s*风格演示.*$/i, '');
    return `- [${title}](./${slug}/DESIGN.md) — \`${slug}\``;
  }),
  '',
];
fs.writeFileSync(path.join(outputRoot, 'README.md'), index.join('\n'), 'utf8');

console.log(`Generated ${files.length} DESIGN.md files in ${outputRoot}`);
