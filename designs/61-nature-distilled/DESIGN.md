---
name: "61 自然提纯"
version: "alpha"
id: "61-nature-distilled"
source: "style-templates/pages/61-nature-distilled.html"
description: "自然提纯风格：赤陶、砂色与橄榄的大地色系，配合颗粒纹理、柔和阴影和有机轮廓。"
colors:
  terracotta: "#C67B5C"
  sand-beige: "#D4C4A8"
  warm-clay: "#B5651D"
  soft-cream: "#F5F0E1"
  earth-brown: "#8B4513"
  olive-green: "#6B7B3C"
  olive-deep: "#57652F"
  warm-stone: "#9C8B7A"
  ink: "#3B2E23"
  ink-soft: "#6E5B4A"
  card-bg: "#FFFDF6"
  background: "#F5F0E1"
  on-background: "#3B2E23"
  primary: "#8B4513"
  on-primary: "#FFF8EC"
  secondary: "#6B7B3C"
  on-secondary: "#F8F6EC"
  tertiary: "#C67B5C"
  on-tertiary: "#3B2E23"
  surface: "#FFFDF6"
  on-surface: "#3B2E23"
typography:
  display-lg:
    fontFamily: "Fraunces"
    fontSize: "3rem"
    fontWeight: "600"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Fraunces"
    fontSize: "2rem"
    fontWeight: "600"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Fraunces"
    fontSize: "1.5rem"
    fontWeight: "600"
    lineHeight: "1.25"
  body-md:
    fontFamily: "Karla"
    fontSize: "1.03rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Karla"
    fontSize: ".82rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".16em"
  button-md:
    fontFamily: "Karla"
    fontSize: "1rem"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
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

# 61 自然提纯 Design System

## 品牌与视觉方向

自然提纯风格演示：赤陶、砂色与橄榄的大地色系，颗粒纹理、柔和阴影与自然缓动的手作温度界面。

视觉关键词来自页面本身：把大地的颜色， 提纯 进界面；风格信息；三种自然质感；赤陶温度；颗粒呼吸；自然缓动；按钮与控件；预订一件手作。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--terracotta` | `#C67B5C` |
| `--sand-beige` | `#D4C4A8` |
| `--warm-clay` | `#B5651D` |
| `--soft-cream` | `#F5F0E1` |
| `--earth-brown` | `#8B4513` |
| `--olive-green` | `#6B7B3C` |
| `--olive-deep` | `#57652F` |
| `--warm-stone` | `#9C8B7A` |
| `--ink` | `#3B2E23` |
| `--ink-soft` | `#6E5B4A` |
| `--card-bg` | `#FFFDF6` |
| `--shadow-soft` | `0 10px 30px rgba(87,60,38,.14)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#C67B5C`、`#D4C4A8`、`#B5651D`、`#F5F0E1`、`#8B4513`、`#6B7B3C`、`#57652F`、`#9C8B7A`、`#3B2E23`、`#6E5B4A`、`#FFFDF6`、`#FFF8EC`、`#7A3C10`、`#F8F6EC`、`#4C5829`、`#8C4A2F`、`#A9603F`、`#EADFC4`、`#7A6A50`、`#5C4326`、`#FBF7EB`、`#96856F`、`#FFF`、`#EFE7D3`。

## 字体与信息层级

字体族：**Fraunces**、**Karla**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--soft-cream); color: var(--ink); font-size: 16.5px; line-height: 1.7.
- `body::after`: content: ""; position: fixed; inset: 0; z-index: 60; pointer-events: none; mix-blend-mode: multiply; opacity: var(--grain-opacity); background: url("data:image/svg+xml; utf8,<svg xmlns='http: //www.w3.org/2000/svg' width='220' height='220'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='220' height='220' filter='url(%23g)' opacity='0.6'/></svg>").
- `h1,h2,h3`: font-family: var(--font-display); font-weight: 600; line-height: 1.25; color: var(--ink).
- `h2`: font-size: 1.7rem; margin-bottom: .5rem.
- `h2::after`: content: ""; display: block; width: 56px; height: 3px; border-radius: 3px; background: var(--terracotta); margin-top: .55rem.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .45rem; font-size: .83rem; font-weight: 700; letter-spacing: .14em; color: var(--olive-deep); border: 1px solid rgba(107,123,60,.45); border-radius: 999px; padding: .32rem .95rem; background: rgba(107,123,60,.08).
- `.hero h1`: font-size: clamp(2.2rem,6vw,3.5rem); margin: 1rem 0 .9rem.
- `.hero h1 em`: font-style: italic; color: var(--warm-clay).
- `.card h3`: font-size: 1.2rem; margin-bottom: .45rem.
- `.t-display`: font-family: var(--font-display); font-weight: 600; font-size: clamp(2rem,5vw,3rem); color: var(--earth-brown).

## 形状、间距与深度

圆角令牌：`--radius-organic: 22px 30px 26px 34px`。
阴影/海拔令牌：`--shadow-soft: 0 10px 30px rgba(87,60,38,.14)`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 1.25rem.
- `.hero`: display: grid; gap: 2.6rem; align-items: center; padding: 3.6rem 0 2.4rem.
- `.hero h1`: font-size: clamp(2.2rem,6vw,3.5rem); margin: 1rem 0 .9rem.
- `.hero h1 em`: font-style: italic; color: var(--warm-clay).
- `.hero p`: color: var(--ink-soft); max-width: 46ch; margin-bottom: 1.7rem.
- `.hero-cta`: display: flex; gap: .9rem; flex-wrap: wrap.
- `.hero`: grid-template-columns: 1.08fr .92fr; padding-top: 4.6rem.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; font-family: var(--font-body); font-weight: 700; font-size: 1rem; padding: .8rem 1.7rem; border: none; border-radius: 18px 24px 20px 26px; cursor: pointer; text-decoration: none; transition: transform var(--dur) var(--ease-natural),box-shadow var(--dur) var(--ease-natural),background var(--dur) var(--ease-natural).
- `.btn:active`: transform: translateY(0); box-shadow: 0 4px 12px rgba(87,60,38,.18).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: background: var(--card-bg); border: 1px solid rgba(156,139,122,.32); border-radius: var(--radius-organic); padding: 1.7rem 1.5rem; box-shadow: var(--shadow-soft); transition: transform var(--dur) var(--ease-natural),box-shadow var(--dur) var(--ease-natural).
- `.card:nth-child(2)`: border-radius: 30px 22px 34px 26px.
- `.card:nth-child(3)`: border-radius: 26px 34px 22px 30px.
- `.card:hover`: transform: translateY(-5px); box-shadow: 0 18px 40px rgba(87,60,38,.18).
- `.card .ico`: width: 54px; height: 54px; display: grid; place-items: center; border-radius: 20px 26px 22px 28px; background: rgba(198,123,92,.15); color: var(--earth-brown); margin-bottom: 1rem.
- `.card:nth-child(2) .ico`: background: rgba(107,123,60,.15); color: var(--olive-deep).
- `.card:nth-child(3) .ico`: background: rgba(212,196,168,.4); color: #7A6A50.

### 表单与选择控件

- `.switch`: appearance: none; -webkit-appearance: none; width: 60px; height: 33px; border-radius: 999px; background: var(--sand-beige); border: 1px solid rgba(156,139,122,.5); position: relative; cursor: pointer; transition: background var(--dur) var(--ease-natural).
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 4px; width: 25px; height: 25px; border-radius: 50%; background: var(--card-bg); box-shadow: 0 3px 8px rgba(87,60,38,.3); transition: transform var(--dur) var(--ease-natural).
- `.switch:checked`: background: var(--olive-green).
- `.switch:checked::after`: transform: translateX(26px).
- `.switch-line`: display: inline-flex; align-items: center; gap: .7rem.
- `.switch-line label`: cursor: pointer; font-weight: 500.
- `.field`: display: grid; gap: .45rem.

### 导航

- `header`: position: sticky; top: 0; z-index: 10; background: rgba(245,240,225,.88); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(156,139,122,.35).
- `.nav`: max-width: 1080px; margin: 0 auto; padding: .8rem 1.25rem; display: flex; align-items: center; gap: .9rem; flex-wrap: wrap.
- `.nav ul`: display: flex; gap: .25rem; list-style: none; margin-left: auto; flex-wrap: wrap; align-items: center.
- `.nav a.link`: color: var(--ink-soft); text-decoration: none; font-size: .95rem; font-weight: 500; padding: .35rem .7rem; border-radius: 999px; transition: color var(--dur) var(--ease-natural),background var(--dur) var(--ease-natural).
- `.nav a.link:hover`: color: var(--earth-brown); background: rgba(198,123,92,.14).

## 交互与动效

动效令牌：`--ease-natural: cubic-bezier(.25,.6,.3,1)`；`--dur: 250ms`。

- `:focus-visible`: outline: 3px solid var(--warm-clay); outline-offset: 3px; border-radius: 8px.
- `.nav a.link:hover`: color: var(--earth-brown); background: rgba(198,123,92,.14).
- `.btn-primary:hover`: transform: translateY(-3px); box-shadow: 0 16px 34px rgba(87,60,38,.22); background: #7A3C10.
- `.btn-secondary:hover`: transform: translateY(-3px); background: #4C5829.
- `.btn-ghost:hover`: background: rgba(198,123,92,.14); transform: translateY(-3px).
- `.btn:active`: transform: translateY(0); box-shadow: 0 4px 12px rgba(87,60,38,.18).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.
- `.card:hover`: transform: translateY(-5px); box-shadow: 0 18px 40px rgba(87,60,38,.18).
- `.switch:checked`: background: var(--olive-green).
- `.switch:checked::after`: transform: translateX(26px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--warm-clay); outline-offset: 3px; border-radius: 8px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--warm-clay); outline-offset: 2px; border-color: var(--warm-clay); background: #fff.

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
