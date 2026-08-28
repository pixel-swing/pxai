---
name: "19 进化柔性 UI"
version: "alpha"
id: "19-soft-ui-evolution"
source: "style-templates/pages/19-soft-ui-evolution.html"
description: "进化柔性 UI 风格演示：改良新拟态——柔和双层阴影、8–12px 圆角、200–300ms 动效与 4.5:1+ 对比度的可用性升级。"
colors:
  bg: "#E9EFF6"
  card: "#FBFDFF"
  ink: "#1F2A37"
  ink-soft: "#43566B"
  line: "#C9D7E4"
  accent: "#0F609B"
  accent-deep: "#0B4A73"
  accent-soft: "#D9EBF8"
  pastel-blue: "#87CEEB"
  pastel-pink: "#FFB6C1"
  pastel-green: "#90EE90"
  primary: "#0F609B"
  on-primary: "#FFFFFF"
  surface: "#E9EFF6"
  on-surface: "#1F2A37"
typography:
  display-lg:
    fontFamily: "Nunito"
    fontSize: "3rem"
    fontWeight: "800"
    lineHeight: "1.12"
  headline-lg:
    fontFamily: "Nunito"
    fontSize: "3.4rem"
    fontWeight: "800"
    lineHeight: "1.15"
  headline-md:
    fontFamily: "Nunito"
    fontSize: "1.95rem"
    fontWeight: "800"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Nunito"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Nunito"
    fontSize: "14px"
    fontWeight: "800"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Nunito"
    fontSize: "0.9375rem"
    fontWeight: "800"
    lineHeight: "1.4"
rounded:
  radius: "10px"
  radius-lg: "16px"
  DEFAULT: "10px"
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

# 19 进化柔性 UI Design System

## 品牌与视觉方向

进化柔性 UI 风格演示：改良新拟态——柔和双层阴影、8–12px 圆角、200–300ms 动效与 4.5:1+ 对比度的可用性升级。

视觉关键词来自页面本身：柔和的深度，清晰的层级；今日步数；正念时刻；风格信息；进化了什么；改良双层阴影；对比度达标；200–300ms 微动效。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#E9EFF6` |
| `--card` | `#FBFDFF` |
| `--ink` | `#1F2A37` |
| `--ink-soft` | `#43566B` |
| `--line` | `#C9D7E4` |
| `--accent` | `#0F609B` |
| `--accent-deep` | `#0B4A73` |
| `--accent-soft` | `#D9EBF8` |
| `--pastel-blue` | `#87CEEB` |
| `--pastel-pink` | `#FFB6C1` |
| `--pastel-green` | `#90EE90` |
| `--shadow-raise` | `0 2px 4px rgba(31,42,55,.08),0 12px 28px -12px rgba(31,42,55,.22)` |
| `--shadow-press` | `inset 0 2px 6px rgba(31,42,55,.14)` |
| `--highlight` | `inset 0 1px 0 rgba(255,255,255,.9)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#E9EFF6`、`#FBFDFF`、`#1F2A37`、`#43566B`、`#C9D7E4`、`#0F609B`、`#0B4A73`、`#D9EBF8`、`#87CEEB`、`#FFB6C1`、`#90EE90`、`#F2F7FC`、`#FFF`、`#1573B4`、`#BFD9EC`、`#CCE3F5`、`#D7DFE8`、`#7C8A99`、`#DDE7F1`、`#D9EFFA`、`#FFE3E9`、`#93283C`、`#DFF7DF`、`#1C5E2A`。

## 字体与信息层级

字体族：**Nunito**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: margin: 0; font-family: var(--font); font-size: 17px; line-height: 1.65; color: var(--ink); background: var(--bg).
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; font-weight: 800; font-size: 15px; color: var(--accent-deep); background: var(--accent-soft); border-radius: 999px; padding: 7px 16px; box-shadow: var(--highlight).
- `h1`: font-weight: 800; font-size: clamp(2.2rem,5.2vw,3.4rem); line-height: 1.15; margin: 20px 0 14px.
- `.soft-card h3`: margin: 0 0 6px; font-size: 18px.
- `h2`: font-weight: 800; font-size: clamp(1.55rem,3vw,1.95rem); margin: 0 0 8px.
- `.card h3`: font-size: 20px; margin: 0 0 8px.
- `.t-display`: font-weight: 800; font-size: clamp(2.2rem,5vw,3rem); line-height: 1.12.
- `.t-heading`: font-weight: 800; font-size: 26px; line-height: 1.25.
- `.t-body`: font-size: 17px.
- `.t-label`: font-weight: 800; font-size: 14px; letter-spacing: .12em; text-transform: uppercase; color: var(--accent-deep).

## 形状、间距与深度

圆角令牌：`--border-radius: 10px`；`--radius-lg: 16px`。
阴影/海拔令牌：`--shadow-raise: 0 2px 4px rgba(31,42,55,.08),0 12px 28px -12px rgba(31,42,55,.22)`；`--shadow-press: inset 0 2px 6px rgba(31,42,55,.14)`。

- `.wrap`: max-width: 1100px; margin: 0 auto; padding: 0 20px.
- `.hero`: padding: 64px 0 72px.
- `.hero-grid`: display: grid; gap: 44px; align-items: center.
- `.hero p`: max-width: 33em; color: var(--ink-soft); margin: 0 0 30px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap.
- `section`: padding: 60px 0.
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 46px; padding: 10px 24px; border-radius: var(--border-radius); border: 1.5px solid transparent; font: inherit; font-weight: 800; cursor: pointer; text-decoration: none; transition: transform var(--duration) var(--ease),box-shadow var(--duration) var(--ease),background-color var(--duration).
- `.btn:active`: transform: translateY(0); box-shadow: var(--shadow-press).
- `.btn[disabled]`: background: #D7DFE8; color: #7C8A99; box-shadow: none; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: linear-gradient(180deg,var(--card),#F3F8FD); border: 1px solid #fff; border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--shadow-raise),var(--highlight); transition: transform var(--duration) var(--ease),box-shadow var(--duration) var(--ease).
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 4px 8px rgba(31,42,55,.08),0 20px 36px -14px rgba(31,42,55,.28),var(--highlight).
- `.card .ico`: width: 54px; height: 54px; border-radius: 14px; display: grid; place-items: center; margin-bottom: 16px; box-shadow: var(--highlight).
- `.card h3`: font-size: 20px; margin: 0 0 8px.
- `.card p`: margin: 0; color: var(--ink-soft); font-size: 16px.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; font-weight: 700.
- `.switch input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch input:checked + .track`: background: linear-gradient(180deg,#1573B4,var(--accent)).
- `.switch input:checked + .track::after`: left: 30px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--accent); outline-offset: 3px.
- `.field`: margin-bottom: 20px.
- `.field label`: display: block; font-weight: 800; font-size: 15px; margin-bottom: 7px.

### 导航

- `header`: background: linear-gradient(180deg,#F2F7FC,var(--bg)); border-bottom: 1px solid #fff.
- `.nav`: display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; padding: 16px 0.

## 交互与动效

动效令牌：`--duration: 240ms`；`--ease: cubic-bezier(.33,1,.45,1)`。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `.nav-links a:hover`: color: var(--accent-deep); background: rgba(255,255,255,.75).
- `.btn-primary:hover`: transform: translateY(-2px); box-shadow: 0 4px 8px rgba(15,96,155,.35),0 16px 28px -10px rgba(15,96,155,.6).
- `.btn-secondary:hover`: transform: translateY(-2px); background: #CCE3F5.
- `.btn-ghost:hover`: background: rgba(15,96,155,.08).
- `.btn:active`: transform: translateY(0); box-shadow: var(--shadow-press).
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 4px 8px rgba(31,42,55,.08),0 20px 36px -14px rgba(31,42,55,.28),var(--highlight).
- `.switch input:checked + .track`: background: linear-gradient(180deg,#1573B4,var(--accent)).
- `.switch input:checked + .track::after`: left: 30px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--accent); outline-offset: 3px.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--accent); outline-offset: 3px.

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
