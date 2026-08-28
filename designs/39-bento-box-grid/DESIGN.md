---
name: "39 便当盒网格"
version: "alpha"
id: "39-bento-box-grid"
source: "style-templates/pages/39-bento-box-grid.html"
description: "便当盒网格（Bento Box Grid）风格演示：Apple 式模块化不等大卡片、24px 圆角、柔和阴影、#F5F5F7 中性底与 1.02 悬停缩放。"
colors:
  card-bg: "#FFFFFF"
  page-bg: "#F5F5F7"
  accent: "#0071E3"
  accent-deep: "#0055AB"
  ink: "#1D1D1F"
  ink-2: "#4B4B50"
  ink-3: "#6E6E73"
  line: "#E8E8ED"
  background: "#F5F5F7"
  on-background: "#1D1D1F"
  primary: "#0071E3"
  on-primary: "#FFFFFF"
  secondary: "#6E3FF3"
  on-secondary: "#FFFFFF"
  tertiary: "#34C759"
  on-tertiary: "#0A3818"
  surface: "#FFFFFF"
  on-surface: "#1D1D1F"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "2.8rem"
    fontWeight: "900"
    lineHeight: "1.1"
    letterSpacing: "-.03em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "-.022em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "-.022em"
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: ".78rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".1em"
  button-md:
    fontFamily: "Inter"
    fontSize: ".95rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  card-radius: "24px"
  DEFAULT: "24px"
spacing:
  grid-gap: "16px"
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

# 39 便当盒网格 Design System

## 品牌与视觉方向

便当盒网格（Bento Box Grid）风格演示：Apple 式模块化不等大卡片、24px 圆角、柔和阴影、#F5F5F7 中性底与 1.02 悬停缩放。

视觉关键词来自页面本身：像便当一样，把信息装进恰当的格子；风格特性；不等大跨度；24px 圆角；克制的动效；按钮与控件；申请模板；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--card-bg` | `#FFFFFF` |
| `--page-bg` | `#F5F5F7` |
| `--shadow` | `0 4px 6px rgba(0,0,0,.05)` |
| `--shadow-hover` | `0 12px 28px rgba(0,0,0,.09)` |
| `--accent` | `#0071E3` |
| `--accent-deep` | `#0055AB` |
| `--ink` | `#1D1D1F` |
| `--ink-2` | `#4B4B50` |
| `--ink-3` | `#6E6E73` |
| `--line` | `#E8E8ED` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FFFFFF`、`#F5F5F7`、`#0071E3`、`#0055AB`、`#1D1D1F`、`#4B4B50`、`#6E6E73`、`#E8E8ED`、`#FFF`、`#D2D2D7`、`#A1A1A6`、`#6E3FF3`、`#E1EFFF`、`#EAE4FF`、`#5B34C7`、`#E4F6E9`、`#1B7A38`、`#34C759`、`#FBFBFD`。

## 字体与信息层级

字体族：**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--page-bg); color: var(--ink); font-size: 16px; line-height: 1.6.
- `h1,h2,h3`: line-height: 1.15; letter-spacing: -.022em.
- `.sec-head h2`: font-size: clamp(1.4rem,2.8vw,1.9rem); font-weight: 800.
- `.tile .t-k`: font-size: .78rem; font-weight: 600; color: var(--ink-3); letter-spacing: .02em.
- `.tile .t-v`: font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 800; letter-spacing: -.03em; margin-top: .25rem.
- `.tile.dark .t-k`: color: #A1A1A6.
- `.tile.grad .t-k`: color: rgba(255,255,255,.8).
- `.eyebrow`: display: inline-block; font-size: .78rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent-deep); background: #E1EFFF; padding: 5px 12px; border-radius: 999px.
- `.hero h1`: font-size: clamp(2.1rem,5.5vw,3.4rem); font-weight: 900; margin: 1rem auto .9rem; max-width: 16em.
- `.card h3`: font-size: 1.1rem; font-weight: 700; margin-bottom: .4rem.

## 形状、间距与深度

圆角令牌：`--card-radius: 24px`。
空间令牌：`--grid-gap: 16px`。
阴影/海拔令牌：`--shadow: 0 4px 6px rgba(0,0,0,.05)`；`--shadow-hover: 0 12px 28px rgba(0,0,0,.09)`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 clamp(1rem,4vw,2rem).
- `section`: padding: 2.4rem 0.
- `.hero`: padding: 3.2rem 0 2.4rem; text-align: center.
- `.hero h1`: font-size: clamp(2.1rem,5.5vw,3.4rem); font-weight: 900; margin: 1rem auto .9rem; max-width: 16em.
- `.hero p.lead`: color: var(--ink-2); max-width: 36em; margin: 0 auto 1.6rem.
- `.hero-actions`: display: flex; gap: .8rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2.2rem.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .45rem; min-height: 44px; padding: .6rem 1.35rem; font: inherit; font-size: .95rem; font-weight: 600; border-radius: 999px; border: 1px solid transparent; cursor: pointer; transition: background-color var(--dur) var(--ease),transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.btn:active`: transform: scale(.98).
- `.btn:disabled`: background: #E8E8ED; color: #A1A1A6; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.tile`: background: var(--card-bg); border-radius: var(--card-radius); box-shadow: var(--shadow); padding: 1.3rem; overflow: hidden; position: relative; transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.tile:hover`: transform: scale(var(--hover-scale)); box-shadow: var(--shadow-hover).
- `.tile .t-k`: font-size: .78rem; font-weight: 600; color: var(--ink-3); letter-spacing: .02em.
- `.tile .t-v`: font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 800; letter-spacing: -.03em; margin-top: .25rem.
- `.tile.dark`: background: #1D1D1F; color: #F5F5F7.
- `.tile.dark .t-k`: color: #A1A1A6.
- `.tile.grad`: background: linear-gradient(135deg,#0071E3,#6E3FF3); color: #fff.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .6rem; font-size: .9rem; font-weight: 500; cursor: pointer.
- `.switch input`: appearance: none; width: 50px; height: 30px; border-radius: 999px; background: #D2D2D7; position: relative; cursor: pointer; margin: 0; transition: background-color var(--dur) var(--ease).
- `.switch input::after`: content: ""; position: absolute; top: 2px; left: 2px; width: 26px; height: 26px; border-radius: 50%; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,.2); transition: transform var(--dur) var(--ease).
- `.switch input:checked`: background: #34C759.
- `.switch input:checked::after`: transform: translateX(20px).
- `.field`: display: flex; flex-direction: column; gap: .4rem.
- `.field.full`: grid-column: 1/-1.

### 导航

- `header`: background: rgba(245,245,247,.85); backdrop-filter: blur(14px); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 20.
- `.nav`: display: flex; align-items: center; gap: 1rem; min-height: 58px; flex-wrap: wrap; padding: .4rem 0.
- `.nav ul`: display: flex; gap: 1.2rem; list-style: none; flex-wrap: wrap.
- `.nav ul a`: font-size: .88rem; color: var(--ink-2); transition: color var(--dur) var(--ease).
- `.nav ul a:hover`: color: var(--ink).
- `footer nav`: display: flex; gap: 1.1rem; flex-wrap: wrap; font-size: .88rem; color: var(--ink-2).

## 交互与动效

动效令牌：`--dur: 280ms`；`--ease: cubic-bezier(.32,.72,.32,1)`。

- `:focus-visible`: outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `.nav ul a:hover`: color: var(--ink).
- `.btn-primary:hover`: background: var(--accent-deep); transform: scale(var(--hover-scale)).
- `.btn-secondary:hover`: border-color: #A1A1A6; transform: scale(var(--hover-scale)).
- `.btn-ghost:hover`: background: #E8E8ED.
- `.btn:active`: transform: scale(.98).
- `.btn:disabled`: background: #E8E8ED; color: #A1A1A6; cursor: not-allowed; transform: none; box-shadow: none.
- `.tile:hover`: transform: scale(var(--hover-scale)); box-shadow: var(--shadow-hover).
- `.card:hover`: transform: scale(var(--hover-scale)); box-shadow: var(--shadow-hover).
- `.switch input:checked`: background: #34C759.

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:900px)`、`(max-width:600px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `input:focus-visible,textarea:focus-visible`: outline: 2px solid var(--accent); outline-offset: 0; border-color: var(--accent); background: #fff.

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
