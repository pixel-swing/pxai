---
name: "22 功能富展示"
version: "alpha"
id: "22-feature-rich"
source: "style-templates/pages/22-feature-rich.html"
description: "功能富展示落地页风格演示：3–4 列功能卡网格、图标先行、收益优先文案与交替分区，适合企业级 SaaS 与复杂产品。"
colors:
  brand: "#2563EB"
  brand-deep: "#1D4ED8"
  feature: "#7C3AED"
  benefit: "#047857"
  benefit-bg: "#ECFDF5"
  problem: "#C2410C"
  problem-bg: "#FFF7ED"
  ink: "#0F172A"
  muted: "#475569"
  line: "#E2E8F0"
  bg: "#FFFFFF"
  bg-alt: "#F1F5F9"
  primary: "#2563EB"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#0F172A"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "3.4rem"
    fontWeight: "700"
    lineHeight: "1.12"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "3.2rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "2.05rem"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.06rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Space Grotesk"
    fontSize: ".84rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Space Grotesk"
    fontSize: "0.9375rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  card-radius: "12px"
  DEFAULT: "12px"
spacing:
  card-padding: "2rem"
  grid-gap: "2rem"
  section-padding: "4rem"
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

# 22 功能富展示 Design System

## 品牌与视觉方向

功能富展示落地页风格演示：3–4 列功能卡网格、图标先行、收益优先文案与交替分区，适合企业级 SaaS 与复杂产品。

视觉关键词来自页面本身：每一项功能， 都为增长而生；功能网格：让能力自己说话；模块化功能网格；收益优先的文案；问题—方案配对；按钮与控件；按钮状态；预约 1 对 1 产品演示。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--brand` | `#2563EB` |
| `--brand-deep` | `#1D4ED8` |
| `--feature` | `#7C3AED` |
| `--benefit` | `#047857` |
| `--benefit-bg` | `#ECFDF5` |
| `--problem` | `#C2410C` |
| `--problem-bg` | `#FFF7ED` |
| `--ink` | `#0F172A` |
| `--muted` | `#475569` |
| `--line` | `#E2E8F0` |
| `--bg` | `#FFFFFF` |
| `--bg-alt` | `#F1F5F9` |
| `--shadow-sm` | `0 2px 8px rgba(15,23,42,.06)` |
| `--shadow-lg` | `0 16px 34px rgba(15,23,42,.12)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#2563EB`、`#1D4ED8`、`#7C3AED`、`#047857`、`#ECFDF5`、`#C2410C`、`#FFF7ED`、`#0F172A`、`#475569`、`#E2E8F0`、`#FFFFFF`、`#F1F5F9`、`#FFF`、`#EFF6FF`、`#64748B`、`#DBEAFE`、`#1E40AF`、`#EDE9FE`、`#6D28D9`、`#D1FAE5`、`#FFEDD5`、`#CBD5E1`、`#5B21B6`、`#A7F3D0`。

## 字体与信息层级

字体族：**Inter**、**Space Grotesk**、**ui-monospace**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.65; color: var(--ink); background: var(--bg).
- `h2`: font-family: var(--font-display); font-size: clamp(1.5rem,3.2vw,2.05rem); line-height: 1.3.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .45rem; background: #DBEAFE; color: #1E40AF; font-size: .85rem; font-weight: 700; padding: .35rem .9rem; border-radius: 999px.
- `h1`: font-family: var(--font-display); font-size: clamp(2.1rem,5vw,3.2rem); line-height: 1.15; letter-spacing: -.01em; margin: 1rem 0 .8rem.
- `.card h3`: font-family: var(--font-display); font-size: 1.15rem; margin-bottom: .5rem.
- `.control-col h3`: font-size: .98rem.
- `.t-display`: font-family: var(--font-display); font-weight: 700; font-size: clamp(2.4rem,5vw,3.4rem); line-height: 1.12.
- `.t-h`: font-family: var(--font-display); font-weight: 700; font-size: 1.75rem; line-height: 1.25.
- `.t-body`: font-size: 1.06rem; max-width: 38em.
- `.t-label`: font-size: .84rem; font-weight: 700; letter-spacing: .12em; color: var(--muted).

## 形状、间距与深度

圆角令牌：`--card-radius: 12px`。
空间令牌：`--card-padding: 2rem`；`--grid-gap: 2rem`；`--section-padding: 4rem`。
阴影/海拔令牌：`--shadow-sm: 0 2px 8px rgba(15,23,42,.06)`；`--shadow-lg: 0 16px 34px rgba(15,23,42,.12)`。

- `.container`: max-width: 1120px; margin-inline: auto; padding-inline: 1.25rem.
- `section`: padding-block: var(--section-padding).
- `.hero`: background: linear-gradient(180deg,#EFF6FF,#FFFFFF 70%); padding-block: 4.5rem 4rem.
- `.hero-grid`: display: grid; gap: 3rem; align-items: center.
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.
- `.hero-cta`: display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 1.6rem.
- `.hero-points`: display: flex; flex-wrap: wrap; gap: .6rem 1.4rem; margin-top: 1.6rem.
- `.hero-points span`: display: inline-flex; align-items: center; gap: .4rem; font-size: .9rem; font-weight: 600; color: var(--muted).
- `.hero-points svg`: color: var(--benefit).

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; font: inherit; font-weight: 600; border-radius: 10px; border: 2px solid transparent; cursor: pointer; text-decoration: none; padding: .7rem 1.4rem; transition: transform .2s ease,background-color .2s ease,box-shadow .2s ease.
- `.btn:disabled`: background: #E2E8F0; color: #64748B; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.tile`: background: #fff; border: 1px solid var(--line); border-radius: 14px; box-shadow: var(--shadow-sm); padding: 1.1rem; display: grid; gap: .6rem; animation: float 6s ease-in-out infinite.
- `.tile:nth-child(2)`: animation-delay: -1.6s; margin-top: 1.2rem.
- `.tile:nth-child(3)`: animation-delay: -3.2s; margin-bottom: 1.2rem.
- `.tile:nth-child(4)`: animation-delay: -4.8s.
- `.card`: background: #fff; border: 1px solid var(--line); border-radius: var(--card-radius); padding: var(--card-padding); box-shadow: var(--shadow-sm); transition: transform .25s ease,box-shadow .25s ease.
- `.card:hover`: transform: var(--hover-transform); box-shadow: var(--shadow-lg).
- `.card h3`: font-family: var(--font-display); font-size: 1.15rem; margin-bottom: .5rem.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: .7rem.
- `.switch`: appearance: none; -webkit-appearance: none; width: 48px; height: 27px; border-radius: 999px; background: #CBD5E1; position: relative; cursor: pointer; transition: background .2s; flex: none.
- `.switch::after`: content: ""; position: absolute; left: 3px; top: 3px; width: 21px; height: 21px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.25); transition: transform .2s.
- `.switch:checked`: background: var(--brand).
- `.switch:checked::after`: transform: translateX(21px).
- `.switch-row label`: font-weight: 500; font-size: .95rem.
- `.field`: margin-bottom: 1rem.

### 导航

- `.site-header`: position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.94); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 1rem; height: 66px.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--brand); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: var(--brand-deep).
- `.btn-primary:hover`: background: var(--brand-deep); transform: var(--hover-transform); box-shadow: 0 10px 20px rgba(37,99,235,.28).
- `.btn-primary:active`: transform: translateY(0) scale(.97).
- `.btn-secondary:hover`: background: #EFF6FF; transform: var(--hover-transform).
- `.btn-ghost:hover`: background: var(--bg-alt); color: var(--ink).
- `.btn:disabled`: background: #E2E8F0; color: #64748B; cursor: not-allowed; transform: none; box-shadow: none.
- `.card:hover`: transform: var(--hover-transform); box-shadow: var(--shadow-lg).
- `.switch:checked`: background: var(--brand).
- `.switch:checked::after`: transform: translateX(21px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:800px)`、`(min-width:920px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--brand); outline-offset: 2px; border-radius: 4px.
- `.input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--brand); outline-offset: 1px; border-color: var(--brand).

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
