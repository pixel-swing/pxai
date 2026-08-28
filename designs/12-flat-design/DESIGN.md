---
name: "12 扁平化设计"
version: "alpha"
id: "12-flat-design"
source: "style-templates/pages/12-flat-design.html"
description: "扁平化设计（Flat Design）风格演示：零阴影零渐变、4-6 色纯色块、简化 SVG 图标与 150-200ms 轻快微交互。"
colors:
  blue: "#2471A3"
  blue-dark: "#1D5D88"
  blue-darker: "#174A6D"
  red: "#C0392B"
  green: "#1E8449"
  orange: "#E67E22"
  ink: "#22313F"
  ink-soft: "#5D6D7E"
  bg: "#FFFFFF"
  grey: "#ECF0F1"
  background: "#FFFFFF"
  on-background: "#22313F"
  primary: "#2471A3"
  on-primary: "#FFFFFF"
  secondary: "#1E8449"
  on-secondary: "#FFFFFF"
  tertiary: "#E67E22"
  on-tertiary: "#1A252F"
  surface: "#FFFFFF"
  on-surface: "#22313F"
typography:
  display-lg:
    fontFamily: "Rubik"
    fontSize: "46px"
    fontWeight: "800"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Rubik"
    fontSize: "2rem"
    fontWeight: "800"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Rubik"
    fontSize: "1.5rem"
    fontWeight: "800"
    lineHeight: "1.25"
  body-md:
    fontFamily: "Rubik"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.7"
  label-sm:
    fontFamily: "Rubik"
    fontSize: "13px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".22em"
  button-md:
    fontFamily: "Rubik"
    fontSize: "16px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "4px"
  DEFAULT: "4px"
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

# 12 扁平化设计 Design System

## 品牌与视觉方向

扁平化设计（Flat Design）风格演示：零阴影零渐变、4-6 色纯色块、简化 SVG 图标与 150-200ms 轻快微交互。

视觉关键词来自页面本身：简单直接，一目了然；扁平三原则；零阴影零渐变；图标先行；轻快响应；按钮与控件；开始 14 天试用；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--blue` | `#2471A3` |
| `--blue-dark` | `#1D5D88` |
| `--blue-darker` | `#174A6D` |
| `--red` | `#C0392B` |
| `--green` | `#1E8449` |
| `--orange` | `#E67E22` |
| `--ink` | `#22313F` |
| `--ink-soft` | `#5D6D7E` |
| `--bg` | `#FFFFFF` |
| `--grey` | `#ECF0F1` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#2471A3`、`#1D5D88`、`#174A6D`、`#C0392B`、`#1E8449`、`#E67E22`、`#22313F`、`#5D6D7E`、`#FFFFFF`、`#ECF0F1`、`#D6DDE3`、`#4A5866`、`#EAF3F9`、`#D3E5F1`、`#F2F6F9`、`#E4ECF2`、`#EAF4FB`、`#E2E8EA`、`#BDC7CF`、`#1A252F`、`#E8EDF1`、`#31445A`、`#B9C4CD`。

## 字体与信息层级

字体族：**Rubik**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font: 16px/1.65 var(--font).
- `h1,h2,h3`: line-height: 1.25; font-weight: 800.
- `.eyebrow`: display: inline-block; background: #FFFFFF; color: var(--blue-darker); font-weight: 700; font-size: 13px; letter-spacing: .12em; text-transform: uppercase; padding: 7px 14px; border-radius: var(--radius).
- `.hero h1`: font-size: clamp(34px,6.2vw,54px); margin: 20px 0 16px; color: #FFFFFF.
- `.card h3`: font-size: 20px; margin-bottom: 8px.
- `.t-display`: font-size: clamp(32px,5.4vw,46px); font-weight: 800; line-height: 1.15.
- `.t-display em`: font-style: normal; color: var(--blue).
- `.t-heading`: font-size: 26px; font-weight: 700.
- `.t-body`: font-size: 16px; line-height: 1.7; color: var(--ink-soft); max-width: 640px.
- `.t-label`: font-size: 13px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; color: var(--green).

## 形状、间距与深度

圆角令牌：`--radius: 4px`。
阴影/海拔令牌：`--shadow: none`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 56px 0.
- `.section-sub`: color: var(--ink-soft); max-width: 600px; margin: 10px 0 30px.
- `.site-head .wrap`: display: flex; align-items: center; gap: 16px; min-height: 64px; flex-wrap: wrap; padding-top: 8px; padding-bottom: 8px.
- `.hero`: background: var(--blue); color: #FFFFFF; padding: 64px 0 72px.
- `.hero-grid`: display: grid; gap: 40px; align-items: center.
- `.hero h1`: font-size: clamp(34px,6.2vw,54px); margin: 20px 0 16px; color: #FFFFFF.
- `.hero .lead`: color: #EAF4FB; font-size: 18px; max-width: 540px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px.
- `.hero-art`: position: relative; height: 230px; width: min(100%,380px); margin: 0 auto.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 0 24px; border: 2px solid transparent; border-radius: var(--radius); font: 700 16px var(--font); cursor: pointer; text-decoration: none; transition: background var(--dur) var(--ease),color var(--dur) var(--ease),border-color var(--dur) var(--ease),opacity var(--dur) var(--ease).

### 卡片与容器

- `.card`: background: var(--grey); border-radius: var(--radius); padding: 26px; border-top: 6px solid var(--blue); transition: background var(--dur) var(--ease).
- `.card:nth-child(2)`: border-top-color: var(--green).
- `.card:nth-child(3)`: border-top-color: var(--orange).
- `.card:hover`: background: #E2E8EA.
- `.card h3`: font-size: 20px; margin-bottom: 8px.
- `.card p`: color: var(--ink-soft); font-size: 15.5px.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; font-size: 15px; font-weight: 500.
- `.switch input`: appearance: none; -webkit-appearance: none; width: 54px; height: 30px; border-radius: 999px; background: #BDC7CF; position: relative; cursor: pointer; transition: background var(--dur) var(--ease).
- `.switch input::before`: content: ""; position: absolute; top: 4px; left: 4px; width: 22px; height: 22px; border-radius: 50%; background: #FFFFFF; transition: transform var(--dur) var(--ease).
- `.switch input:checked`: background: var(--green).
- `.switch input:checked::before`: transform: translateX(24px).
- `.field`: display: flex; flex-direction: column; gap: 8px.
- `.field label`: font-size: 15px; font-weight: 700.

## 交互与动效

动效令牌：`--dur: 180ms`；`--ease: ease`。

- `:focus-visible`: outline: 3px solid var(--orange); outline-offset: 2px; border-radius: 2px.
- `.nav-links a:hover`: background: var(--blue-dark).
- `.btn-primary:hover`: background: var(--blue-dark).
- `.btn-primary:active`: background: var(--blue-darker).
- `.btn-primary:disabled`: background: #D6DDE3; color: #4A5866; cursor: not-allowed.
- `.btn-secondary:hover`: background: #EAF3F9.
- `.btn-secondary:active`: background: #D3E5F1.
- `.btn-ghost:hover`: background: #F2F6F9; text-decoration: underline; text-underline-offset: 3px.
- `.btn-ghost:active`: background: #E4ECF2.
- `.btn-invert:hover`: opacity: .88.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--orange); outline-offset: 2px; border-radius: 2px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--orange); outline-offset: 2px; border-color: var(--blue); background: #FFFFFF.

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
