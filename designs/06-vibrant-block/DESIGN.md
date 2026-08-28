---
name: "06 高饱和分块"
version: "alpha"
id: "06-vibrant-block"
source: "style-templates/pages/06-vibrant-block.html"
description: "高饱和分块（Vibrant & Block-based）风格演示：霓虹撞色大色块、48px 大间距、32px+ 大字号与持续滚动的动态图案。"
colors:
  neon-green: "#39FF14"
  purple: "#BF00FF"
  purple-text: "#D24DFF"
  pink: "#FF1493"
  cyan: "#00FFFF"
  orange: "#FFAA00"
  pink-alt: "#FF006E"
  lime: "#CCFF00"
  ink: "#0A0A0A"
  bg: "#0D0A14"
  panel: "#171226"
  text-color: "#F4F1FA"
  text-dim: "rgba(244,241,250,.8)"
  background: "#0D0A14"
  on-background: "#F4F1FA"
  primary: "#39FF14"
  on-primary: "#0A0A0A"
  secondary: "#BF00FF"
  on-secondary: "#0A0A0A"
  tertiary: "#FF1493"
  on-tertiary: "#0A0A0A"
  surface: "#171226"
  on-surface: "#F4F1FA"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "64px"
    fontWeight: "700"
    lineHeight: "1.05"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "84px"
    fontWeight: "700"
    lineHeight: "1.04"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "44px"
    fontWeight: "700"
    lineHeight: "1.1"
  body-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Space Grotesk"
    fontSize: "14px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".24em"
  button-md:
    fontFamily: "Space Grotesk"
    fontSize: "17px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "24px"
  DEFAULT: "24px"
spacing:
  block-gap: "48px"
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

# 06 高饱和分块 Design System

## 品牌与视觉方向

高饱和分块（Vibrant & Block-based）风格演示：霓虹撞色大色块、48px 大间距、32px+ 大字号与持续滚动的动态图案。

视觉关键词来自页面本身：大色块 ， 大字号 ， 大能量 。；三块高能积木；霓虹撞色；块状布局；动态图案；按钮与控件；表单示例；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--neon-green` | `#39FF14` |
| `--purple` | `#BF00FF` |
| `--purple-text` | `#D24DFF` |
| `--pink` | `#FF1493` |
| `--cyan` | `#00FFFF` |
| `--orange` | `#FFAA00` |
| `--pink-alt` | `#FF006E` |
| `--lime` | `#CCFF00` |
| `--ink` | `#0A0A0A` |
| `--bg` | `#0D0A14` |
| `--panel` | `#171226` |
| `--text-color` | `#F4F1FA` |
| `--text-dim` | `rgba(244,241,250,.8)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#39FF14`、`#BF00FF`、`#D24DFF`、`#FF1493`、`#00FFFF`、`#FFAA00`、`#FF006E`、`#CCFF00`、`#0A0A0A`、`#0D0A14`、`#171226`、`#F4F1FA`、`#3A3547`、`#9B94AC`、`#FFF`、`#080611`。

## 字体与信息层级

字体族：**Space Grotesk**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--bg); color: var(--text-color); font-size: 18px; line-height: 1.6; overflow-x: hidden.
- `body::before`: content: ""; position: fixed; inset: 0; z-index: 0; pointer-events: none; background-image: radial-gradient(rgba(255,255,255,.07) 2px,transparent 2px); background-size: 28px 28px; animation: drift 16s linear infinite.
- `.eyebrow`: display: inline-block; font-family: var(--font-display); font-weight: 700; font-size: 14px; letter-spacing: .2em; text-transform: uppercase; color: var(--ink); background: var(--orange); padding: 8px 16px; border-radius: 999px.
- `h1`: font-family: var(--font-display); font-size: clamp(40px,9vw,84px); line-height: 1.04; font-weight: 700; margin: 22px 0 18px; letter-spacing: -.01em.
- `h1 .w-green`: color: var(--neon-green).
- `h1 .w-cyan`: color: var(--cyan).
- `h1 .w-pink`: color: var(--pink).
- `h2`: font-family: var(--font-display); font-size: clamp(32px,5vw,44px); font-weight: 700; line-height: 1.1.
- `h3`: font-family: var(--font-display); font-size: 26px; font-weight: 700; margin-bottom: 10px.
- `.t-display`: font-family: var(--font-display); font-size: clamp(40px,6vw,64px); font-weight: 700; line-height: 1.05; color: var(--neon-green).

## 形状、间距与深度

圆角令牌：`--radius: 24px`。
空间令牌：`--block-gap: 48px`。

- `main,header,footer`: position: relative; z-index: 1.
- `.container`: width: min(1140px,92%); margin-inline: auto.
- `section`: scroll-snap-align: start; scroll-margin-top: 88px.
- `.hero`: padding: 88px 0 64px.
- `.hero-grid`: display: grid; gap: var(--block-gap); align-items: center.
- `.hero-grid`: grid-template-columns: 1.15fr .85fr.
- `.hero-actions`: display: flex; flex-wrap: wrap; gap: 18px; margin-top: 34px.
- `.hero-art`: display: grid; grid-template-columns: repeat(2,1fr); grid-auto-rows: 120px; gap: 20px.
- `.hero-art .b`: border-radius: var(--radius).
- `.section`: padding: 72px 0.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 8px.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 14px 28px; border-radius: 999px; font-family: var(--font-display); font-size: 17px; font-weight: 700; text-decoration: none; border: 3px solid transparent; cursor: pointer; transition: background var(--dur) var(--ease),color var(--dur) var(--ease),transform var(--dur) var(--ease),border-color var(--dur) var(--ease).
- `.btn:disabled`: background: #3A3547; color: #9B94AC; cursor: not-allowed; transform: none; border-color: transparent.

### 表单与选择控件

- `::selection`: background: var(--pink); color: #0A0A0A.
- `.switch-input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch`: display: inline-flex; align-items: center; gap: 14px; cursor: pointer; font-size: 17px; font-weight: 700.
- `.switch-input:checked+.switch .track`: background: var(--neon-green); border-color: var(--neon-green).
- `.switch-input:checked+.switch .knob`: transform: translateX(28px); background: var(--ink).
- `.switch-input:focus-visible+.switch .track`: outline: 3px solid var(--cyan); outline-offset: 3px.
- `.field`: display: grid; gap: 9px.

### 导航

- `main,header,footer`: position: relative; z-index: 1.
- `.site-header`: position: sticky; top: 0; z-index: 60; background: rgba(13,10,20,.92); border-bottom: 2px solid rgba(244,241,250,.14).
- `.nav`: display: flex; align-items: center; gap: 16px; padding: 14px 0.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 8px.

## 交互与动效

动效令牌：`--dur: 250ms`；`--ease: cubic-bezier(.4,0,.2,1)`。

- `:focus-visible`: outline: 3px solid var(--cyan); outline-offset: 3px; border-radius: 8px.
- `.nav-links a:hover`: background: var(--neon-green); color: var(--ink).
- `.btn-primary:hover`: background: var(--cyan); transform: translateY(-3px).
- `.btn-primary:active`: transform: translateY(1px) scale(.97).
- `.btn-secondary:hover`: background: var(--pink); transform: translateY(-3px).
- `.btn-secondary:active`: transform: translateY(1px) scale(.97).
- `.btn-ghost:hover`: background: var(--text-color); color: var(--ink); transform: translateY(-3px).
- `.btn-ghost:active`: transform: translateY(1px).
- `.btn:disabled`: background: #3A3547; color: #9B94AC; cursor: not-allowed; transform: none; border-color: transparent.
- `.block:hover`: transform: rotate(-1.2deg) scale(1.02).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:820px)`、`(min-width:940px)`、`(min-width:860px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--cyan); outline-offset: 3px; border-radius: 8px.
- `.switch-input:focus-visible+.switch .track`: outline: 3px solid var(--cyan); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--cyan); outline-offset: 2px; border-color: var(--cyan).

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
