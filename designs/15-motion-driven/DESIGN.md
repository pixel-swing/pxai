---
name: "15 动效驱动"
version: "alpha"
id: "15-motion-driven"
source: "style-templates/pages/15-motion-driven.html"
description: "动效驱动（Motion-Driven）风格演示：滚动揭示、3–5 层视差、300–400ms GPU 加速入场动效与页面过渡。"
colors:
  bg: "#F6F7FB"
  card: "#FFFFFF"
  ink: "#14162B"
  muted: "#4B5069"
  indigo: "#4F46E5"
  magenta: "#D946EF"
  purple: "#A21CAF"
  success: "#22C55E"
  error: "#EF4444"
  background: "#F6F7FB"
  on-background: "#14162B"
  primary: "#4F46E5"
  on-primary: "#FFFFFF"
  secondary: "#D946EF"
  on-secondary: "#FFFFFF"
  tertiary: "#22C55E"
  on-tertiary: "#052E16"
  surface: "#FFFFFF"
  on-surface: "#14162B"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "Inter"
    fontSize: ".8125rem"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "20px"
  DEFAULT: "20px"
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

# 15 动效驱动 Design System

## 品牌与视觉方向

动效驱动（Motion-Driven）风格演示：滚动揭示、3–5 层视差、300–400ms GPU 加速入场动效与页面过渡。

视觉关键词来自页面本身：滚动一寸， 叙事一层；风格特性；滚动揭示；3–5 层视差；300–400ms 入场；按钮与控件；表单示例 · 加入体验计划；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#F6F7FB` |
| `--card` | `#FFFFFF` |
| `--ink` | `#14162B` |
| `--muted` | `#4B5069` |
| `--indigo` | `#4F46E5` |
| `--magenta` | `#D946EF` |
| `--purple` | `#A21CAF` |
| `--success` | `#22C55E` |
| `--error` | `#EF4444` |
| `--shadow` | `0 6px 18px rgba(20,22,43,.08)` |
| `--shadow-lift` | `0 18px 40px rgba(20,22,43,.16)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F6F7FB`、`#FFFFFF`、`#14162B`、`#4B5069`、`#4F46E5`、`#D946EF`、`#A21CAF`、`#22C55E`、`#EF4444`、`#FFF`、`#C9CBDA`、`#3730A3`、`#E0E7FF`、`#14532D`、`#DCFCE7`、`#7F1D1D`、`#FEE2E2`、`#7A7F99`、`#E6E8F4`、`#C7CBE3`。

## 字体与信息层级

字体族：**Space Grotesk**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.65; color: var(--ink); background: var(--bg); min-width: 320px; overflow-x: hidden.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.2.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .5rem; padding: .45rem 1rem; border-radius: 999px; font: 600 .8rem/1 var(--font-body); letter-spacing: .12em; text-transform: uppercase; color: var(--indigo); background: rgba(79,70,229,.1); border: 1px solid rgba(79,70,229,.35).
- `.hero h1`: font-size: clamp(2.3rem,6vw,4rem); font-weight: 700; margin: 1.1rem 0 .9rem.
- `.hero h1 em`: font-style: normal; background: linear-gradient(90deg,var(--indigo),var(--magenta)); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.card h3`: font-size: 1.25rem; margin: .9rem 0 .5rem.
- `.t-display`: font: 700 clamp(2rem,4.6vw,2.75rem)/1.15 var(--font-display).
- `.t-heading`: font: 600 1.75rem/1.3 var(--font-display).
- `.t-body`: font: 400 1rem/1.65 var(--font-body).
- `.t-label`: font: 600 .8125rem/1.4 var(--font-body); letter-spacing: .14em; text-transform: uppercase; color: var(--indigo).

## 形状、间距与深度

圆角令牌：`--radius: 20px`。
阴影/海拔令牌：`--shadow: 0 6px 18px rgba(20,22,43,.08)`；`--shadow-lift: 0 18px 40px rgba(20,22,43,.16)`。

- `.container`: width: min(1100px,92%); margin-inline: auto.
- `.hero`: position: relative; padding: 5rem 0 4.5rem; min-height: 82vh; display: flex; align-items: center; overflow: hidden.
- `.hero-art`: position: absolute; inset: 0; pointer-events: none.
- `.hero-inner`: position: relative; z-index: 1; max-width: 720px.
- `.hero h1`: font-size: clamp(2.3rem,6vw,4rem); font-weight: 700; margin: 1.1rem 0 .9rem.
- `.hero h1 em`: font-style: normal; background: linear-gradient(90deg,var(--indigo),var(--magenta)); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.hero p`: color: var(--muted); max-width: 34em; margin-bottom: 1.7rem.
- `.hero-actions`: display: flex; gap: .9rem; flex-wrap: wrap.
- `section`: padding: 2.8rem 0.
- `.section-title`: font-size: clamp(1.5rem,3.4vw,2.15rem); margin-bottom: .4rem.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; padding: .8rem 1.6rem; border-radius: 12px; font: 600 1rem var(--font-body); cursor: pointer; text-decoration: none; border: 2px solid transparent; transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease),background-color var(--dur) ease,color var(--dur) ease.
- `.btn:active`: transform: translateY(0) scale(.97).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: position: relative; padding: 1.8rem 1.6rem; border-radius: var(--radius); background: var(--card); border: 1px solid rgba(20,22,43,.07); box-shadow: var(--shadow); overflow: hidden; transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.card::before`: content: ""; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: linear-gradient(90deg,var(--indigo),var(--magenta)); transform: scaleX(0); transform-origin: 0 50%; transition: transform var(--dur) var(--ease).
- `.card:hover`: transform: translateY(-6px); box-shadow: var(--shadow-lift).
- `.card:hover::before`: transform: scaleX(1).
- `.card h3`: font-size: 1.25rem; margin: .9rem 0 .5rem.
- `.card p`: font-size: .95rem; color: var(--muted).
- `.panel`: padding: 1.8rem 1.6rem; border-radius: var(--radius); background: var(--card); border: 1px solid rgba(20,22,43,.07); box-shadow: var(--shadow).

### 表单与选择控件

- `.switch-input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch`: display: inline-flex; align-items: center; gap: .7rem; cursor: pointer; font-weight: 600.
- `.switch-track`: position: relative; width: 60px; height: 32px; border-radius: 16px; background: #C9CBDA; transition: background var(--dur) ease.
- `.switch-knob`: position: absolute; top: 3px; left: 3px; width: 26px; height: 26px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(20,22,43,.3); transition: transform var(--dur) var(--ease).
- `.switch-input:checked+.switch .switch-track`: background: linear-gradient(90deg,var(--indigo),var(--purple)).
- `.switch-input:checked+.switch .switch-knob`: transform: translateX(28px).
- `.switch-input:focus-visible+.switch .switch-track`: outline: 3px solid var(--indigo); outline-offset: 3px.

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(246,247,251,.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(20,22,43,.08).
- `nav`: display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; padding: .85rem 0.

## 交互与动效

动效令牌：`--dur: 350ms`；`--ease: cubic-bezier(.22,.9,.3,1)`。

- `:focus-visible`: outline: 3px solid var(--indigo); outline-offset: 3px; border-radius: 6px.
- `.nav-links a:hover::after`: transform: scaleX(1).
- `.btn-primary:hover`: transform: translateY(-3px); box-shadow: 0 16px 34px rgba(162,28,175,.4).
- `.btn-secondary:hover`: transform: translateY(-3px); box-shadow: var(--shadow-lift).
- `.btn-ghost:hover`: background: var(--ink); color: #fff.
- `.btn:active`: transform: translateY(0) scale(.97).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.
- `.card:hover`: transform: translateY(-6px); box-shadow: var(--shadow-lift).
- `.card:hover::before`: transform: scaleX(1).
- `.switch-input:checked+.switch .switch-track`: background: linear-gradient(90deg,var(--indigo),var(--purple)).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--indigo); outline-offset: 3px; border-radius: 6px.
- `.switch-input:focus-visible+.switch .switch-track`: outline: 3px solid var(--indigo); outline-offset: 3px.
- `.field input:focus-visible,.field textarea:focus-visible`: outline: 3px solid var(--indigo); outline-offset: 2px; border-color: var(--indigo); box-shadow: 0 8px 22px rgba(79,70,229,.18).

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
