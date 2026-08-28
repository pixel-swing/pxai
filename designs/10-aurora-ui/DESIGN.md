---
name: "10 极光 UI"
version: "alpha"
id: "10-aurora-ui"
source: "style-templates/pages/10-aurora-ui.html"
description: "极光 UI（Aurora UI）：北极光式流动网格渐变、8–12 秒循环动画、screen 混合模式与霓虹互补色的大气氛围界面。"
colors:
  g-blue: "#0080FF"
  g-magenta: "#FF1493"
  g-cyan: "#00FFFF"
  g-purple: "#7B2FFF"
  bg: "#0B1026"
  ink: "#F2F6FF"
  muted: "#A9B4D8"
  surface: "rgba(255,255,255,.06)"
  line: "rgba(255,255,255,.16)"
  background: "#0B1026"
  on-background: "#F2F6FF"
  primary: "#0080FF"
  on-primary: "#FFFFFF"
  secondary: "#FF1493"
  on-secondary: "#FFFFFF"
  tertiary: "#00FFFF"
  on-tertiary: "#0B1026"
  on-surface: "#F2F6FF"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "46px"
    fontWeight: "700"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "56px"
    fontWeight: "700"
    lineHeight: "1.12"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "32px"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".2em"
  button-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "18px"
  DEFAULT: "18px"
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

# 10 极光 UI Design System

## 品牌与视觉方向

极光 UI（Aurora UI）：北极光式流动网格渐变、8–12 秒循环动画、screen 混合模式与霓虹互补色的大气氛围界面。

视觉关键词来自页面本身：让界面像 极光 一样缓缓流动；风格信息；风格特性；流动网格渐变；8–12 秒循环动画；混合模式叠加；按钮与控件；表单示例。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--g-blue` | `#0080FF` |
| `--g-magenta` | `#FF1493` |
| `--g-cyan` | `#00FFFF` |
| `--g-purple` | `#7B2FFF` |
| `--bg` | `#0B1026` |
| `--ink` | `#F2F6FF` |
| `--muted` | `#A9B4D8` |
| `--surface` | `rgba(255,255,255,.06)` |
| `--line` | `rgba(255,255,255,.16)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0080FF`、`#FF1493`、`#00FFFF`、`#7B2FFF`、`#0B1026`、`#F2F6FF`、`#A9B4D8`、`#0057D6`、`#D6006F`、`#FFF`、`#7C86A8`、`#7BE8FF`、`#FF9AD1`、`#C9B1FF`。

## 字体与信息层级

字体族：**Space Grotesk**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--bg); color: var(--ink); font-size: 16px; line-height: 1.65; overflow-x: hidden.
- `body::before,body::after`: content: ""; position: fixed; inset: -25%; z-index: -1; pointer-events: none; mix-blend-mode: var(--blend-mode); filter: blur(64px) saturate(var(--color-saturation)).
- `body::before`: background: radial-gradient(38% 45% at 22% 28%,rgba(0,128,255,.55),transparent 62%),radial-gradient(32% 42% at 78% 18%,rgba(255,20,147,.4),transparent 60%),radial-gradient(42% 50% at 62% 80%,rgba(0,255,255,.28),transparent 62%); animation: aurora 12s ease-in-out infinite alternate.
- `body::after`: background: radial-gradient(30% 38% at 30% 76%,rgba(123,47,255,.45),transparent 60%),radial-gradient(26% 30% at 70% 50%,rgba(0,128,255,.3),transparent 60%); animation: aurora2 8s ease-in-out infinite alternate.
- `h2`: font-family: var(--font-display); font-size: clamp(24px,3.5vw,32px); margin-bottom: 6px.
- `.eyebrow`: color: var(--g-cyan); font-size: 13px; font-weight: 600; letter-spacing: .22em; text-transform: uppercase.
- `h1`: font-family: var(--font-display); font-size: clamp(34px,6vw,56px); line-height: 1.12; margin: 12px 0 16px.
- `.card h3`: font-family: var(--font-display); font-size: 19px; margin-bottom: 6px.
- `.t-display`: font-family: var(--font-display); font-size: 46px; font-weight: 700; line-height: 1.1.
- `.t-h`: font-family: var(--font-display); font-size: 26px; font-weight: 700.

## 形状、间距与深度

圆角令牌：`--radius: 18px`。

- `.container`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 56px 0.
- `.hero`: padding: 72px 0 48px.
- `.hero-grid`: display: grid; gap: 44px; align-items: center.
- `.grid3`: display: grid; gap: 20px.
- `.grid3`: grid-template-columns: repeat(3,1fr).
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 999px; border: 1px solid transparent; font: 600 16px var(--font-body); color: var(--ink); cursor: pointer; text-decoration: none; transition: transform .3s ease,box-shadow .3s ease,background-position .5s ease,border-color .3s ease.
- `.btn:active`: transform: scale(.97).
- `.btn:disabled`: background: rgba(255,255,255,.06); color: #7C86A8; box-shadow: none; cursor: not-allowed; transform: none; border-color: var(--line).

### 卡片与容器

- `.card`: padding: 26px; transition: transform .4s ease,border-color .4s ease,box-shadow .4s ease.
- `.card:hover`: transform: translateY(-6px); border-color: rgba(0,255,255,.4); box-shadow: inset 0 1px 0 rgba(255,255,255,.18),0 18px 50px rgba(0,128,255,.28).
- `.card h3`: font-family: var(--font-display); font-size: 19px; margin-bottom: 6px.
- `.card p`: color: var(--muted); font-size: 16px.
- `.panel`: padding: 28px.

### 表单与选择控件

- `.switch`: appearance: none; -webkit-appearance: none; width: 60px; height: 32px; border-radius: 999px; background: rgba(255,255,255,.1); border: 1px solid var(--line); position: relative; cursor: pointer; transition: background .3s ease,box-shadow .3s ease; flex: none.
- `.switch::before`: content: ""; position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #fff; transition: transform .3s ease.
- `.switch:checked`: background: linear-gradient(90deg,var(--g-blue),var(--g-magenta)); box-shadow: 0 0 18px rgba(255,20,147,.45).
- `.switch:checked::before`: transform: translateX(28px).
- `.field`: display: grid; gap: 8px.
- `.field label`: font-weight: 600.
- `input[type=text],input[type=email],textarea`: font: 16px var(--font-body); color: var(--ink); background: rgba(255,255,255,.05); border: 1px solid var(--line); border-radius: 12px; padding: 12px 14px; width: 100%; transition: border-color .3s ease,box-shadow .3s ease.

### 导航

- `header`: position: sticky; top: 0; z-index: 10; background: rgba(11,16,38,.72); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 12px; padding: 14px 0; flex-wrap: wrap.
- `.nav ul`: display: flex; gap: 2px; list-style: none; margin-left: auto; flex-wrap: wrap.
- `.nav ul a`: display: block; padding: 8px 12px; border-radius: 10px; color: var(--muted); text-decoration: none; font-weight: 600; transition: color .3s ease,background .3s ease.
- `.nav ul a:hover`: color: var(--ink); background: rgba(255,255,255,.08).

## 交互与动效

动效令牌：`--animation-duration: 10s`。

- `:focus-visible`: outline: 3px solid var(--g-cyan); outline-offset: 3px; border-radius: 6px.
- `.nav ul a:hover`: color: var(--ink); background: rgba(255,255,255,.08).
- `.btn:active`: transform: scale(.97).
- `.btn-primary:hover`: background-position: 95% 95%; transform: translateY(-2px); box-shadow: 0 14px 40px rgba(255,20,147,.4).
- `.btn-secondary:hover`: border-color: var(--g-cyan); box-shadow: 0 0 22px rgba(0,255,255,.25); transform: translateY(-2px).
- `.btn-ghost:hover`: background: rgba(0,255,255,.08).
- `.btn:disabled`: background: rgba(255,255,255,.06); color: #7C86A8; box-shadow: none; cursor: not-allowed; transform: none; border-color: var(--line).
- `.card:hover`: transform: translateY(-6px); border-color: rgba(0,255,255,.4); box-shadow: inset 0 1px 0 rgba(255,255,255,.18),0 18px 50px rgba(0,128,255,.28).
- `.switch:checked`: background: linear-gradient(90deg,var(--g-blue),var(--g-magenta)); box-shadow: 0 0 18px rgba(255,20,147,.45).
- `.switch:checked::before`: transform: translateX(28px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--g-cyan); outline-offset: 3px; border-radius: 6px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--g-cyan); outline-offset: 2px; border-color: var(--g-cyan); box-shadow: 0 0 20px rgba(0,255,255,.2).

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
