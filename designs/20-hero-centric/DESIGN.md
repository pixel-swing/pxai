---
name: "20 主视觉优先"
version: "alpha"
id: "20-hero-centric"
source: "style-templates/pages/20-hero-centric.html"
description: "主视觉优先落地页风格演示：100vh 全屏 Hero、直击痛点的大标题、高对比明黄 CTA、深靛渐变背景与滚动揭示动效。"
colors:
  indigo-deep: "#1E1B4B"
  indigo: "#312E81"
  violet: "#6D28D9"
  link: "#4F46E5"
  cta: "#FACC15"
  cta-hover: "#FDE047"
  ink: "#1E1B4B"
  ink-soft: "#475569"
  bg: "#FFFFFF"
  bg-alt: "#F8FAFC"
  line: "#E2E8F0"
  primary: "#1E1B4B"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#1E1B4B"
typography:
  display-lg:
    fontFamily: "Sora"
    fontSize: "3.4rem"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Sora"
    fontSize: "2rem"
    fontWeight: "800"
    lineHeight: "1.12"
    letterSpacing: "-.02em"
  headline-md:
    fontFamily: "Sora"
    fontSize: "2.1rem"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "Sora"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Sora"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Sora"
    fontSize: "0.9375rem"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "14px"
  DEFAULT: "14px"
spacing:
  unit: "8px"
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "0.65rem 1.5rem"
    height: "44px"
  card-standard:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.DEFAULT}"
    padding: "1.5rem"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "0.75rem 1rem"
    height: "44px"
---

# 20 主视觉优先 Design System

## 品牌与视觉方向

主视觉优先落地页风格演示：100vh 全屏 Hero、直击痛点的大标题、高对比明黄 CTA、深靛渐变背景与滚动揭示动效。

视觉关键词来自页面本身：把产品的第一眼，变成用户的下一步；本周转化漏斗；风格信息；为什么选择主视觉优先；首屏即卖点；高对比 CTA；滚动揭示；按钮与控件。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--text-shadow` | `0 2px 4px rgba(0,0,0,.3)` |
| `--indigo-deep` | `#1E1B4B` |
| `--indigo` | `#312E81` |
| `--violet` | `#6D28D9` |
| `--link` | `#4F46E5` |
| `--cta` | `#FACC15` |
| `--cta-hover` | `#FDE047` |
| `--ink` | `#1E1B4B` |
| `--ink-soft` | `#475569` |
| `--bg` | `#FFFFFF` |
| `--bg-alt` | `#F8FAFC` |
| `--line` | `#E2E8F0` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#1E1B4B`、`#312E81`、`#6D28D9`、`#4F46E5`、`#FACC15`、`#FDE047`、`#475569`、`#FFFFFF`、`#F8FAFC`、`#E2E8F0`、`#FFF`、`#E0E7FF`、`#EEF2FF`、`#C7D2FE`、`#94A3B8`、`#000`、`#818CF8`、`#EAB308`、`#CBD5E1`、`#FEF9C3`、`#713F12`、`#A5B4FC`。

## 字体与信息层级

字体族：**Inter**、**Sora**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: margin: 0; font-family: var(--font-body); font-size: 17px; line-height: 1.65; color: var(--ink); background: var(--bg).
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 15px; color: #FDE047; background: rgba(250,204,21,.14); border: 1px solid rgba(250,204,21,.45); border-radius: 999px; padding: 7px 16px.
- `h1`: font-family: var(--font-display); font-weight: 800; font-size: var(--headline-size); line-height: 1.12; letter-spacing: -.02em; margin: 22px 0 16px; text-shadow: var(--text-shadow).
- `.mock h3`: font-family: var(--font-display); font-size: 16px; color: #E0E7FF; margin: 0 0 14px; font-weight: 600.
- `h2`: font-family: var(--font-display); font-weight: 700; font-size: clamp(1.6rem,3.2vw,2.1rem); letter-spacing: -.01em; margin: 0 0 8px.
- `.card h3`: font-family: var(--font-display); font-size: 20px; margin: 0 0 8px.
- `.t-display`: font-family: var(--font-display); font-weight: 800; font-size: clamp(2.3rem,5vw,3.4rem); line-height: 1.1; letter-spacing: -.02em.
- `.t-heading`: font-family: var(--font-display); font-weight: 700; font-size: 28px; line-height: 1.25.
- `.t-body`: font-size: 17px.
- `.t-label`: font-weight: 600; font-size: 14px; letter-spacing: .14em; text-transform: uppercase; color: var(--indigo).

## 形状、间距与深度

圆角令牌：`--radius: 14px`。
空间令牌：`--cta-padding: 1rem 2rem`。
阴影/海拔令牌：`--text-shadow: 0 2px 4px rgba(0,0,0,.3)`。

- `.hero :focus-visible`: outline-color: var(--cta).
- `.wrap`: max-width: 1140px; margin: 0 auto; padding: 0 22px.
- `.hero`: min-height: var(--hero-min-height); display: flex; align-items: center; position: relative; overflow: hidden; color: #fff; background: linear-gradient(160deg,var(--indigo-deep) 0%,var(--indigo) 45%,var(--violet) 100%); padding: 120px 0 90px.
- `.hero::before`: content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px); background-size: 48px 48px; -webkit-mask-image: radial-gradient(ellipse at 50% 38%,#000 25%,transparent 72%); mask-image: radial-gradient(ellipse at 50% 38%,#000 25%,transparent 72%).
- `.hero-grid`: display: grid; gap: 52px; align-items: center; position: relative.
- `.hero .sub`: max-width: 32em; color: #C7D2FE; font-size: 18px; margin: 0 0 32px; text-shadow: var(--text-shadow).
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 38px.
- `section`: padding: 64px 0.
- `.hero-grid`: grid-template-columns: 1.1fr .9fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: var(--cta-padding); border-radius: 999px; border: 2px solid transparent; font: inherit; font-weight: 700; cursor: pointer; text-decoration: none; transition: transform .25s ease,background-color .25s,box-shadow .25s,border-color .25s.
- `.btn:active`: transform: scale(.97).
- `.btn[disabled]`: background: #E2E8F0; color: #94A3B8; cursor: not-allowed; transform: none; animation: none; border-color: transparent.

### 卡片与容器

- `.card`: background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 28px; box-shadow: 0 6px 20px -12px rgba(30,27,75,.25); position: relative; overflow: hidden; transition: transform .25s ease,box-shadow .25s ease.
- `.card::before`: content: ""; position: absolute; inset: 0 0 auto 0; height: 4px; background: linear-gradient(90deg,var(--violet),var(--link),var(--cta)).
- `.card:hover`: transform: translateY(-5px); box-shadow: 0 18px 34px -16px rgba(30,27,75,.35).
- `.card .ico`: width: 54px; height: 54px; border-radius: 14px; display: grid; place-items: center; background: #EEF2FF; color: var(--indigo); margin-bottom: 16px.
- `.card h3`: font-family: var(--font-display); font-size: 20px; margin: 0 0 8px.
- `.card p`: margin: 0; color: var(--ink-soft); font-size: 16px.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; font-weight: 600.
- `.switch input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch input:checked + .track`: background: var(--link).
- `.switch input:checked + .track::after`: left: 28px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--link); outline-offset: 3px.
- `.field`: margin-bottom: 20px.
- `.field label`: display: block; font-weight: 700; font-size: 15px; margin-bottom: 7px.

### 导航

- `header`: position: absolute; inset: 0 0 auto 0; z-index: 10.
- `.nav`: display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; padding: 18px 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--link); outline-offset: 3px; border-radius: 8px.
- `.hero :focus-visible`: outline-color: var(--cta).
- `.nav-links a:hover`: color: #fff; background: rgba(255,255,255,.12).
- `.btn:active`: transform: scale(.97).
- `.btn-cta:hover`: background: var(--cta-hover); transform: scale(1.05).
- `.btn-outline:hover`: border-color: #fff; background: rgba(255,255,255,.1); transform: scale(1.05).
- `.btn-primary:hover`: background: var(--indigo-deep); transform: scale(1.05).
- `.btn-secondary:hover`: background: #E0E7FF.
- `.btn-ghost:hover`: background: #EEF2FF.
- `.card:hover`: transform: translateY(-5px); box-shadow: 0 18px 34px -16px rgba(30,27,75,.35).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:920px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--link); outline-offset: 3px; border-radius: 8px.
- `.hero :focus-visible`: outline-color: var(--cta).
- `.switch input:focus-visible + .track`: outline: 3px solid var(--link); outline-offset: 3px.

## 生成新页面时的执行规则

1. 首先套用 front matter 中的原始令牌，再从组件规范选择最接近的现有模式。
2. 保持源页面的密度、留白、对齐方式与视觉重心；内容可以变化，但视觉语法不能变化。
3. 新增组件必须由现有颜色、字体、圆角、边框和阴影组合而成，禁止引入第二套设计语言。
4. 交互状态至少覆盖 hover、active、focus-visible 与 disabled；触屏界面不能依赖 hover 才显示关键操作。
5. 在窄屏优先重排和堆叠，不以缩小字号或压缩点击目标来维持桌面布局。

## 禁止事项

- 不要添加源页面未使用的渐变、玻璃模糊、厚重阴影或装饰性圆角。
- 不要用通用组件库默认样式覆盖这里的令牌和组件状态。
- 不要牺牲焦点可见性、文字对比度或减少动态偏好来追求风格效果。
- 不要在同一页面混用相近但不相同的颜色、间距或圆角数值。
