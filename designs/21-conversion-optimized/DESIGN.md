---
name: "21 转化优化"
version: "alpha"
id: "21-conversion-optimized"
source: "style-templates/pages/21-conversion-optimized.html"
description: "转化优化落地页风格演示：单一主 CTA、首屏表单聚焦、紧迫感元素与信任信号，专为试用注册与线索收集设计。"
colors:
  cta-color: "#4F46E5"
  cta-hover: "#4338CA"
  urgency: "#B91C1C"
  urgency-bg: "#FEF2F2"
  urgency-ink: "#991B1B"
  success-color: "#22C55E"
  success-ink: "#166534"
  error-color: "#EF4444"
  ink: "#0F172A"
  muted: "#475569"
  line: "#E2E8F0"
  bg: "#FFFFFF"
  bg-soft: "#F8FAFC"
  primary: "#0F172A"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#0F172A"
typography:
  display-lg:
    fontFamily: "Manrope"
    fontSize: "3.4rem"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Manrope"
    fontSize: "3.15rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "-.02em"
  headline-md:
    fontFamily: "Manrope"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "Manrope"
    fontSize: "1.06rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Manrope"
    fontSize: ".84rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Manrope"
    fontSize: "0.9375rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "12px"
  DEFAULT: "12px"
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

# 21 转化优化 Design System

## 品牌与视觉方向

转化优化落地页风格演示：单一主 CTA、首屏表单聚焦、紧迫感元素与信任信号，专为试用注册与线索收集设计。

视觉关键词来自页面本身：把每一次访问， 变成一次转化；免费领取 14 天专业版；为「提交」而设计的三件套；单一主 CTA；紧迫感元素；信任与社会证明；按钮与控件；按钮状态。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--cta-color` | `#4F46E5` |
| `--cta-hover` | `#4338CA` |
| `--urgency` | `#B91C1C` |
| `--urgency-bg` | `#FEF2F2` |
| `--urgency-ink` | `#991B1B` |
| `--success-color` | `#22C55E` |
| `--success-ink` | `#166534` |
| `--error-color` | `#EF4444` |
| `--ink` | `#0F172A` |
| `--muted` | `#475569` |
| `--line` | `#E2E8F0` |
| `--bg` | `#FFFFFF` |
| `--bg-soft` | `#F8FAFC` |
| `--focus-ring` | `3px solid #4F46E5` |
| `--shadow` | `0 20px 45px rgba(15,23,42,.14)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#4F46E5`、`#4338CA`、`#B91C1C`、`#FEF2F2`、`#991B1B`、`#22C55E`、`#166534`、`#EF4444`、`#0F172A`、`#475569`、`#E2E8F0`、`#FFFFFF`、`#F8FAFC`、`#FFF`、`#EEF2FF`、`#64748B`、`#E0E7FF`、`#FECACA`、`#15803D`、`#CBD5E1`、`#F0FDF4`、`#BBF7D0`、`#3730A3`、`#C7D2FE`。

## 字体与信息层级

字体族：**Inter**、**Manrope**、**ui-monospace**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.6; color: var(--ink); background: var(--bg).
- `h2`: font-family: var(--font-display); font-size: clamp(1.5rem,3.2vw,2rem); line-height: 1.3; letter-spacing: -.01em.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .45rem; background: var(--urgency-bg); color: var(--urgency-ink); font-size: .85rem; font-weight: 700; padding: .35rem .85rem; border-radius: 999px; border: 1px solid #FECACA.
- `h1`: font-family: var(--font-display); font-size: clamp(2.1rem,5vw,3.15rem); line-height: 1.15; letter-spacing: -.02em; margin: .9rem 0 .8rem.
- `.card h3`: font-size: 1.12rem; margin-bottom: .45rem.
- `.control-col h3`: font-size: .98rem; color: var(--ink).
- `.t-display`: font-family: var(--font-display); font-weight: 800; font-size: clamp(2.4rem,5vw,3.4rem); line-height: 1.1; letter-spacing: -.02em.
- `.t-h`: font-family: var(--font-display); font-weight: 700; font-size: 1.75rem; line-height: 1.25.
- `.t-body`: font-size: 1.06rem; max-width: 38em.
- `.t-label`: font-size: .84rem; font-weight: 700; letter-spacing: .12em; color: var(--muted).

## 形状、间距与深度

圆角令牌：`--radius: 12px`。
空间令牌：`--form-max-width: 600px`。
阴影/海拔令牌：`--shadow: 0 20px 45px rgba(15,23,42,.14)`。

- `.container`: max-width: 1080px; margin-inline: auto; padding-inline: 1.25rem.
- `section`: padding-block: 3.75rem.
- `.hero`: background: radial-gradient(60% 80% at 80% 0%,#E0E7FF 0%,rgba(224,231,255,0) 60%),linear-gradient(180deg,#EEF2FF,#FFFFFF 72%); padding-block: 4rem 3.5rem.
- `.hero-grid`: display: grid; gap: 2.5rem; align-items: center.
- `.hero-grid`: grid-template-columns: 1.1fr .9fr.
- `.hero-cta`: display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 1.5rem.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; font: inherit; font-weight: 600; border-radius: 10px; border: 2px solid transparent; cursor: pointer; text-decoration: none; padding: .7rem 1.4rem; transition: transform .15s ease,background-color .15s ease,color .15s ease.
- `.btn:disabled`: background: #E2E8F0; color: #64748B; border-color: transparent; cursor: not-allowed; transform: none.
- `.btn.loading .spinner`: display: inline-block.

### 卡片与容器

- `.card`: background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 1.6rem; box-shadow: 0 4px 14px rgba(15,23,42,.05); transition: transform .2s ease,box-shadow .2s ease.
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 14px 30px rgba(15,23,42,.1).
- `.card h3`: font-size: 1.12rem; margin-bottom: .45rem.
- `.card p`: color: var(--muted); font-size: .95rem.

### 表单与选择控件

- `.field`: margin-bottom: 1rem.
- `.input,textarea`: width: 100%; height: var(--input-height); border: 1.5px solid #CBD5E1; border-radius: 10px; padding: .6rem .9rem; font: inherit; color: var(--ink); background: #fff.
- `textarea`: height: auto; min-height: 110px; resize: vertical.
- `.input:focus-visible,textarea:focus-visible`: outline: var(--focus-ring); outline-offset: 1px; border-color: var(--cta-color).
- `.switch-row`: display: flex; align-items: center; gap: .7rem.
- `.switch-row label`: margin: 0; font-weight: 500; font-size: .95rem.
- `.switch`: appearance: none; -webkit-appearance: none; width: 48px; height: 27px; border-radius: 999px; background: #CBD5E1; position: relative; cursor: pointer; transition: background .2s; flex: none.

### 导航

- `.site-header`: position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.94); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 1rem; height: 64px.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: var(--focus-ring); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: var(--ink).
- `.btn-primary:hover`: background: var(--cta-hover); transform: scale(1.03).
- `.btn-primary:active`: transform: scale(.97).
- `.btn-secondary:hover`: background: #EEF2FF.
- `.btn-secondary:active`: transform: scale(.97).
- `.btn-ghost:hover`: background: var(--bg-soft); color: var(--ink).
- `.btn:disabled`: background: #E2E8F0; color: #64748B; border-color: transparent; cursor: not-allowed; transform: none.
- `.input:focus-visible,textarea:focus-visible`: outline: var(--focus-ring); outline-offset: 1px; border-color: var(--cta-color).
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 14px 30px rgba(15,23,42,.1).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:900px)`、`(min-width:820px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: var(--focus-ring); outline-offset: 2px; border-radius: 4px.
- `.input:focus-visible,textarea:focus-visible`: outline: var(--focus-ring); outline-offset: 1px; border-color: var(--cta-color).

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
