---
name: "17 包容性设计"
version: "alpha"
id: "17-inclusive-design"
source: "style-templates/pages/17-inclusive-design.html"
description: "包容性设计风格演示：WCAG AAA 7:1 高对比、符号与图案双重编码、4px 可见焦点环、大字号与全键盘可达的普适界面。"
colors:
  color-text: "#111827"
  color-muted: "#374151"
  color-bg: "#FFFFFF"
  color-surface: "#F3F4F6"
  color-primary: "#1E40AF"
  color-primary-dark: "#16308C"
  color-success: "#166534"
  color-error: "#991B1B"
  color-warn: "#92400E"
  focus-color: "#1E40AF"
  line: "#D1D5DB"
  background: "#FFFFFF"
  on-background: "#111827"
  primary: "#1E40AF"
  on-primary: "#FFFFFF"
  secondary: "#166534"
  on-secondary: "#FFFFFF"
  tertiary: "#92400E"
  on-tertiary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#111827"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "3rem"
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "3.5rem"
    fontWeight: "800"
    lineHeight: "1.15"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "2rem"
    fontWeight: "800"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".04em"
  button-md:
    fontFamily: "Inter"
    fontSize: "0.9375rem"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "8px"
  DEFAULT: "8px"
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

# 17 包容性设计 Design System

## 品牌与视觉方向

包容性设计风格演示：WCAG AAA 7:1 高对比、符号与图案双重编码、4px 可见焦点环、大字号与全键盘可达的普适界面。

视觉关键词来自页面本身：为每一个人设计，一个都不能少；风格信息；核心特性；7:1 高对比；非纯色指示；键盘 · 读屏 · 触觉；按钮与控件；表单示例。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--color-text` | `#111827` |
| `--color-muted` | `#374151` |
| `--color-bg` | `#FFFFFF` |
| `--color-surface` | `#F3F4F6` |
| `--color-primary` | `#1E40AF` |
| `--color-primary-dark` | `#16308C` |
| `--color-success` | `#166534` |
| `--color-error` | `#991B1B` |
| `--color-warn` | `#92400E` |
| `--focus-color` | `#1E40AF` |
| `--line` | `#D1D5DB` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#111827`、`#374151`、`#FFFFFF`、`#F3F4F6`、`#1E40AF`、`#16308C`、`#166534`、`#991B1B`、`#92400E`、`#D1D5DB`、`#FFF`、`#EFF3FE`、`#E5E7EB`、`#6B7280`、`#F0FDF4`、`#FFFBEB`、`#FEF2F2`、`#F9FAFB`、`#93C5FD`、`#DBEAFE`。

## 字体与信息层级

字体族：**Atkinson Hyperlegible**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: margin: 0; font-family: var(--font-body); font-size: 18px; line-height: 1.65; color: var(--color-text); background: var(--color-bg).
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; font-weight: 700; color: var(--color-primary); background: #EFF3FE; border: 2px solid var(--color-primary); border-radius: 999px; padding: 6px 16px; font-size: 16px.
- `h1`: font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem,5.5vw,3.5rem); line-height: 1.15; letter-spacing: -.01em; margin: 20px 0 16px.
- `h2`: font-family: var(--font-display); font-weight: 800; font-size: clamp(1.6rem,3vw,2rem); margin: 0 0 8px.
- `.card h3`: font-family: var(--font-display); font-size: 22px; margin: 0 0 8px.
- `.t-display`: font-family: var(--font-display); font-weight: 800; font-size: clamp(2.4rem,5vw,3rem); line-height: 1.1.
- `.t-heading`: font-family: var(--font-display); font-weight: 700; font-size: 28px; line-height: 1.25.
- `.t-body`: font-size: 18px.
- `.t-label`: font-weight: 700; font-size: 16px; letter-spacing: .04em.

## 形状、间距与深度

圆角令牌：`--radius: 8px`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 20px.
- `.hero`: padding: 56px 0 64px; background: linear-gradient(180deg,#fff 0%,#F3F4F6 100%); border-bottom: 3px solid var(--color-text).
- `.hero-grid`: display: grid; gap: 40px; align-items: center.
- `.hero p`: max-width: 36em; color: var(--color-muted); margin: 0 0 28px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap.
- `section`: padding: 56px 0.
- `.hero-grid`: grid-template-columns: 1.1fr .9fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: var(--touch-target); padding: 10px 24px; border-radius: var(--radius); border: 2px solid transparent; font: inherit; font-weight: 700; cursor: pointer; text-decoration: none; transition: background-color .2s,color .2s,transform .1s.
- `.btn:active`: transform: translateY(1px).
- `.btn[disabled]`: background: #E5E7EB; color: #6B7280; border-color: #E5E7EB; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: #fff; border: 3px solid var(--color-text); border-radius: 14px; padding: 26px; box-shadow: 6px 6px 0 rgba(30,64,175,.15); transition: transform .2s,box-shadow .2s.
- `.card:hover`: transform: translateY(-4px); box-shadow: 8px 10px 0 rgba(30,64,175,.2).
- `.card .ico`: width: 56px; height: 56px; border-radius: 12px; display: grid; place-items: center; background: #EFF3FE; color: var(--color-primary); border: 2px solid var(--color-primary); margin-bottom: 16px.
- `.card h3`: font-family: var(--font-display); font-size: 22px; margin: 0 0 8px.
- `.card p`: margin: 0; color: var(--color-muted).
- `.card,.demo-panel`: box-shadow: none.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; min-height: var(--touch-target); cursor: pointer; font-weight: 700.
- `.switch input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch input:checked + .track`: background: var(--color-primary); border-color: var(--color-primary).
- `.switch input:checked + .track::before`: content: "开"; left: 13px; right: auto; color: #fff.
- `.switch input:checked + .track::after`: left: 42px; background: #fff.
- `.switch input:focus-visible + .track`: outline: var(--focus-ring) solid var(--focus-color); outline-offset: 3px.
- `.field`: margin-bottom: 22px.

### 导航

- `header`: border-bottom: 3px solid var(--color-text); background: var(--color-bg).
- `.nav`: display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; padding: 14px 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: var(--focus-ring) solid var(--focus-color); outline-offset: 3px; border-radius: 6px.
- `.skip:focus-visible`: top: 12px.
- `.nav-links a:hover`: background: var(--color-surface); text-decoration: underline.
- `.btn-primary:hover`: background: var(--color-primary-dark).
- `.btn-secondary:hover`: background: #EFF3FE.
- `.btn-ghost:hover`: background: var(--color-surface).
- `.btn:active`: transform: translateY(1px).
- `.card:hover`: transform: translateY(-4px); box-shadow: 8px 10px 0 rgba(30,64,175,.2).
- `.switch input:checked + .track`: background: var(--color-primary); border-color: var(--color-primary).
- `.switch input:checked + .track::before`: content: "开"; left: 13px; right: auto; color: #fff.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:900px)`、`(prefers-reduced-motion:reduce)`、`(forced-colors:active)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: var(--focus-ring) solid var(--focus-color); outline-offset: 3px; border-radius: 6px.
- `.skip:focus-visible`: top: 12px.
- `.switch input:focus-visible + .track`: outline: var(--focus-ring) solid var(--focus-color); outline-offset: 3px.
- `:focus-visible`: scroll-margin-top: 20px.

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
