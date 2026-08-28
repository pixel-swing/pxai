---
name: "03 玻璃拟态"
version: "alpha"
id: "03-glassmorphism"
source: "style-templates/pages/03-glassmorphism.html"
description: "玻璃拟态（Glassmorphism）风格演示：鲜艳渐变背景上的磨砂玻璃卡片、15px 背景模糊、1px 亮边与多层景深。"
colors:
  glass-bg: "rgba(255,255,255,.14)"
  glass-bg-strong: "rgba(255,255,255,.22)"
  glass-border: "rgba(255,255,255,.28)"
  c-blue: "#0080FF"
  c-purple: "#8B00FF"
  c-pink: "#FF1493"
  c-teal: "#20B2AA"
  text-color: "#FFFFFF"
  text-dim: "rgba(255,255,255,.82)"
  primary: "#FF1493"
  on-primary: "#FFFFFF"
  secondary: "#0080FF"
  on-secondary: "#FFFFFF"
  tertiary: "#20B2AA"
  on-tertiary: "#170B44"
  background: "#170B44"
  on-background: "#FFFFFF"
  surface: "rgba(255,255,255,.14)"
  on-surface: "#FFFFFF"
  surface-container: "rgba(255,255,255,.22)"
  outline: "rgba(255,255,255,.28)"
typography:
  display-lg:
    fontFamily: "Outfit"
    fontSize: "52px"
    fontWeight: "700"
    lineHeight: "1.12"
  headline-lg:
    fontFamily: "Outfit"
    fontSize: "56px"
    fontWeight: "700"
    lineHeight: "1.16"
  headline-md:
    fontFamily: "Outfit"
    fontSize: "36px"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Inter"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".2em"
  button-md:
    fontFamily: "Inter"
    fontSize: "16px"
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

# 03 玻璃拟态 Design System

## 品牌与视觉方向

玻璃拟态（Glassmorphism）风格演示：鲜艳渐变背景上的磨砂玻璃卡片、15px 背景模糊、1px 亮边与多层景深。

视觉关键词来自页面本身：悬浮在渐变光晕之上的磨砂玻璃界面；三个视觉支柱；背景模糊；多层景深；亮边反光；按钮与控件；表单示例；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--glass-bg` | `rgba(255,255,255,.14)` |
| `--glass-bg-strong` | `rgba(255,255,255,.22)` |
| `--glass-border` | `rgba(255,255,255,.28)` |
| `--c-blue` | `#0080FF` |
| `--c-purple` | `#8B00FF` |
| `--c-pink` | `#FF1493` |
| `--c-teal` | `#20B2AA` |
| `--text-color` | `#FFFFFF` |
| `--text-dim` | `rgba(255,255,255,.82)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0080FF`、`#8B00FF`、`#FF1493`、`#20B2AA`、`#FFFFFF`、`#170B44`、`#1D0C52`、`#26094A`、`#FFF`、`#9AD1FF`、`#A5E3FF`、`#4DA9FF`、`#C77DFF`、`#FF7AC1`、`#FFD98A`、`#E8A33D`、`#CDEBFF`、`#0066E0`、`#B322C9`、`#B8FFF6`、`#3DE8DC`。

## 字体与信息层级

字体族：**Outfit**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); color: var(--text-color); font-size: 16px; line-height: 1.6; min-height: 100vh; overflow-x: hidden; background: radial-gradient(1000px 700px at 12% 6%,rgba(0,128,255,.55),transparent 62%),
    radial-gradient(900px 650px at 88% 16%,rgba(139,0,255,.5),transparent 62%),
    radial-gradient(850px 600px at 80% 88%,rgba(255,20,147,.42),transparent 62%),
    radial-gradient(700px 550px at 12% 92%,rgba(32,178,170,.38),transparent 62%),
    linear-gradient(160deg,#170B44 0%,#1D0C52 48%,#26094A 100%); background-attachment: fixed.
- `.eyebrow`: letter-spacing: .22em; font-size: 13px; font-weight: 600; color: #A5E3FF; text-transform: uppercase.
- `h1`: font-family: var(--font-display); font-size: clamp(34px,6vw,56px); line-height: 1.16; font-weight: 700; margin: 14px 0 18px.
- `h2`: font-family: var(--font-display); font-size: clamp(26px,3.6vw,36px); font-weight: 700.
- `h3`: font-size: 19px; font-family: var(--font-display); font-weight: 600; margin-bottom: 8px.
- `.t-display`: font-family: var(--font-display); font-size: clamp(36px,5vw,52px); font-weight: 700; line-height: 1.12.
- `.t-heading`: font-family: var(--font-display); font-size: 28px; font-weight: 600; line-height: 1.3.
- `.t-body`: font-size: 17px; color: var(--text-dim).
- `.t-label`: font-size: 13px; letter-spacing: .2em; text-transform: uppercase; font-weight: 600.

## 形状、间距与深度

圆角令牌：`--radius: 20px`。

- `.container`: width: min(1120px,92%); margin-inline: auto.
- `.hero`: position: relative; padding: 80px 0 56px.
- `.hero-inner`: position: relative; z-index: 1; display: grid; gap: 44px; align-items: center.
- `.hero-inner`: grid-template-columns: 1.1fr .9fr.
- `.hero-actions`: display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px.
- `.hero-card`: position: relative; overflow: hidden; padding: 26px; width: min(400px,100%); justify-self: center; transform: rotate(-3deg).
- `.hero-card::after`: content: ""; position: absolute; inset: 0; border-radius: inherit; background: linear-gradient(115deg,transparent 32%,rgba(255,255,255,.2) 46%,transparent 60%); pointer-events: none.
- `.hero-card .chip-shape`: width: 44px; height: 32px; border-radius: 8px; background: linear-gradient(135deg,#FFD98A,#E8A33D).
- `.section`: padding: 52px 0.
- `.section-head`: margin-bottom: 26px.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 14px; font-size: 16px; font-weight: 600; font-family: var(--font-body); text-decoration: none; border: 1px solid transparent; cursor: pointer; transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease),background var(--dur) var(--ease).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: padding: 26px; transition: transform var(--dur) var(--ease),background var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.card:hover`: transform: translateY(-6px); background: var(--glass-bg-strong); box-shadow: 0 16px 44px rgba(8,2,38,.45),inset 0 1px 0 rgba(255,255,255,.4).
- `.card p`: color: var(--text-dim); font-size: 16px.

### 表单与选择控件

- `::selection`: background: rgba(139,0,255,.55); color: #fff.
- `.switch-input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-size: 16px.
- `.switch-input:checked+.switch .track`: background: linear-gradient(135deg,#0080FF,#8B00FF).
- `.switch-input:checked+.switch .knob`: transform: translateX(22px).
- `.switch-input:focus-visible+.switch .track`: outline: 3px solid #9AD1FF; outline-offset: 3px.
- `.field`: display: grid; gap: 8px.

### 导航

- `.site-header`: position: sticky; top: 12px; z-index: 50; width: min(1120px,94%); margin: 12px auto 0.
- `.nav`: display: flex; align-items: center; gap: 18px; padding: 10px 18px; border-radius: 16px.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效令牌：`--dur: 250ms`；`--ease: cubic-bezier(.4,0,.2,1)`。

- `:focus-visible`: outline: 3px solid #9AD1FF; outline-offset: 3px; border-radius: 6px.
- `.nav-links a:hover`: color: #fff.
- `.card:hover`: transform: translateY(-6px); background: var(--glass-bg-strong); box-shadow: 0 16px 44px rgba(8,2,38,.45),inset 0 1px 0 rgba(255,255,255,.4).
- `.btn-primary:hover`: transform: translateY(-2px); box-shadow: 0 14px 32px rgba(139,0,255,.5),inset 0 1px 0 rgba(255,255,255,.3).
- `.btn-primary:active`: transform: translateY(1px) scale(.98); box-shadow: 0 4px 12px rgba(139,0,255,.4).
- `.btn-glass:hover`: background: var(--glass-bg-strong); transform: translateY(-2px).
- `.btn-glass:active`: transform: translateY(1px).
- `.btn-ghost:hover`: background: rgba(255,255,255,.12); transform: translateY(-2px).
- `.btn-ghost:active`: transform: translateY(1px).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:920px)`、`(min-width:780px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid #9AD1FF; outline-offset: 3px; border-radius: 6px.
- `.switch-input:focus-visible+.switch .track`: outline: 3px solid #9AD1FF; outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid #9AD1FF; outline-offset: 2px; border-color: rgba(255,255,255,.65).

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
