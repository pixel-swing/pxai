---
name: "37 销售智能看板"
version: "alpha"
id: "37-sales-intelligence"
source: "style-templates/pages/37-sales-intelligence.html"
description: "面向销售管理的智能看板风格：商机管道看板、配额仪表盘、金银铜排行榜与赢单/输单状态色。"
colors:
  won: "#16A34A"
  won-ink: "#15803D"
  lost: "#DC2626"
  lost-ink: "#B91C1C"
  progress: "#2563EB"
  blocked: "#EA580C"
  blocked-ink: "#C2410C"
  gauge-track: "#E5E7EB"
  rank-1-color: "#FFD700"
  rank-2-color: "#C0C0C0"
  rank-3-color: "#CD7F32"
  bg: "#F8FAFC"
  panel: "#FFFFFF"
  line: "#E2E8F0"
  ink: "#0F172A"
  ink-2: "#475569"
  ink-3: "#64748B"
  primary: "#0F172A"
  on-primary: "#FFFFFF"
  surface: "#F8FAFC"
  on-surface: "#0F172A"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "2.75rem"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
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
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Inter"
    fontSize: ".9375rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "14px"
  DEFAULT: "14px"
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

# 37 销售智能看板 Design System

## 品牌与视觉方向

面向销售管理的智能看板风格：商机管道看板、配额仪表盘、金银铜排行榜与赢单/输单状态色。

视觉关键词来自页面本身：从线索到 赢单 ，全程可视；季度配额达成；销售排行榜 · 本季度；风格特性；管道看板；配额仪表；金银铜排行；按钮与控件。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--won` | `#16A34A` |
| `--won-ink` | `#15803D` |
| `--lost` | `#DC2626` |
| `--lost-ink` | `#B91C1C` |
| `--progress` | `#2563EB` |
| `--blocked` | `#EA580C` |
| `--blocked-ink` | `#C2410C` |
| `--gauge-track` | `#E5E7EB` |
| `--rank-1-color` | `#FFD700` |
| `--rank-2-color` | `#C0C0C0` |
| `--rank-3-color` | `#CD7F32` |
| `--bg` | `#F8FAFC` |
| `--panel` | `#FFFFFF` |
| `--line` | `#E2E8F0` |
| `--ink` | `#0F172A` |
| `--ink-2` | `#475569` |
| `--ink-3` | `#64748B` |
| `--shadow` | `0 1px 2px rgba(15,23,42,.05),0 10px 28px rgba(15,23,42,.07)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#16A34A`、`#15803D`、`#DC2626`、`#B91C1C`、`#2563EB`、`#EA580C`、`#C2410C`、`#E5E7EB`、`#FFD700`、`#C0C0C0`、`#CD7F32`、`#F8FAFC`、`#FFFFFF`、`#E2E8F0`、`#0F172A`、`#475569`、`#64748B`、`#FFF`、`#1D4ED8`、`#94A3B8`、`#F1F5F9`、`#DBEAFE`、`#DCFCE7`、`#FFEDD5`。

## 字体与信息层级

字体族：**Plus Jakarta Sans**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--bg); color: var(--ink); font-size: 16px; line-height: 1.6.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.2; letter-spacing: -.01em.
- `.sec-head h2`: font-size: clamp(1.35rem,2.6vw,1.75rem); font-weight: 800.
- `.eyebrow`: display: inline-block; font-size: .75rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #1D4ED8; background: #DBEAFE; padding: 4px 10px; border-radius: 999px.
- `.hero h1`: font-size: clamp(1.9rem,4.6vw,3rem); font-weight: 800; margin: .9rem 0 1rem.
- `.hero h1 em`: font-style: normal; background: linear-gradient(90deg,#2563EB,#16A34A); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.board h3`: font-size: 1rem; margin-bottom: .9rem.
- `.card h3`: font-size: 1.05rem; margin-bottom: .4rem.
- `.t-display`: font-family: var(--font-display); font-size: clamp(2rem,4.5vw,2.75rem); font-weight: 800; letter-spacing: -.02em.
- `.t-heading`: font-family: var(--font-display); font-size: 1.5rem; font-weight: 800.

## 形状、间距与深度

圆角令牌：`--radius: 14px`。
阴影/海拔令牌：`--shadow: 0 1px 2px rgba(15,23,42,.05),0 10px 28px rgba(15,23,42,.07)`。

- `.wrap`: max-width: 1160px; margin: 0 auto; padding: 0 clamp(1rem,4vw,2rem).
- `section`: padding: 2.4rem 0.
- `.hero`: padding: 3rem 0 2.4rem.
- `.hero-grid`: display: grid; grid-template-columns: minmax(0,5fr) minmax(0,7fr); gap: 2rem; align-items: center.
- `.hero h1`: font-size: clamp(1.9rem,4.6vw,3rem); font-weight: 800; margin: .9rem 0 1rem.
- `.hero h1 em`: font-style: normal; background: linear-gradient(90deg,#2563EB,#16A34A); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.hero p.lead`: color: var(--ink-2); max-width: 30em; margin-bottom: 1.5rem.
- `.hero-actions`: display: flex; gap: .75rem; flex-wrap: wrap.
- `.hero-grid`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .45rem; min-height: 42px; padding: .55rem 1.2rem; font: inherit; font-size: .9375rem; font-weight: 600; border-radius: 10px; border: 1px solid transparent; cursor: pointer; transition: background-color var(--dur) var(--ease),box-shadow var(--dur) var(--ease),transform var(--dur) var(--ease).
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: background: #E2E8F0; color: #94A3B8; cursor: not-allowed; box-shadow: none; transform: none.

### 卡片与容器

- `.card`: background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); padding: 1.4rem; transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 14px 32px rgba(15,23,42,.12).
- `.card .ico`: display: grid; place-items: center; width: 42px; height: 42px; border-radius: 11px; margin-bottom: .9rem.
- `.card:nth-child(1) .ico`: background: #DBEAFE; color: #1D4ED8.
- `.card:nth-child(2) .ico`: background: #FEF3C7; color: #B45309.
- `.card:nth-child(3) .ico`: background: #DCFCE7; color: var(--won-ink).
- `.card h3`: font-size: 1.05rem; margin-bottom: .4rem.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .6rem; font-size: .9rem; font-weight: 500; cursor: pointer.
- `.switch input`: appearance: none; width: 46px; height: 26px; border-radius: 999px; background: #CBD5E1; position: relative; cursor: pointer; margin: 0; transition: background-color var(--dur) var(--ease).
- `.switch input::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(15,23,42,.3); transition: transform var(--dur) var(--ease).
- `.switch input:checked`: background: var(--won).
- `.switch input:checked::after`: transform: translateX(20px).
- `.field`: display: flex; flex-direction: column; gap: .4rem.
- `.field.full`: grid-column: 1/-1.

### 导航

- `header`: background: rgba(255,255,255,.92); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 20.
- `.nav`: display: flex; align-items: center; gap: 1rem; min-height: 60px; flex-wrap: wrap; padding: .5rem 0.
- `.nav ul`: display: flex; gap: 1.1rem; list-style: none; flex-wrap: wrap.
- `.nav ul a`: font-size: .9rem; color: var(--ink-2); padding: .3rem .15rem; border-bottom: 2px solid transparent; transition: color var(--dur) var(--ease).
- `.nav ul a:hover`: color: var(--ink); border-color: var(--progress).
- `footer nav`: display: flex; gap: 1.1rem; flex-wrap: wrap; font-size: .88rem.

## 交互与动效

动效令牌：`--dur: 240ms`；`--ease: cubic-bezier(.4,0,.2,1)`。

- `:focus-visible`: outline: 2px solid var(--progress); outline-offset: 2px; border-radius: 4px.
- `.nav ul a:hover`: color: var(--ink); border-color: var(--progress).
- `.btn-primary:hover`: background: #1D4ED8; box-shadow: 0 8px 20px rgba(37,99,235,.3).
- `.btn-secondary:hover`: border-color: #94A3B8; background: #F1F5F9.
- `.btn-ghost:hover`: background: #E2E8F0; color: var(--ink).
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: background: #E2E8F0; color: #94A3B8; cursor: not-allowed; box-shadow: none; transform: none.
- `.deal:hover`: transform: translateY(-2px); box-shadow: 0 6px 14px rgba(15,23,42,.1).
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 14px 32px rgba(15,23,42,.12).
- `.switch input:checked`: background: var(--won).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--progress); outline-offset: 2px; border-radius: 4px.
- `input:focus-visible,textarea:focus-visible`: outline: 2px solid var(--progress); outline-offset: 1px; border-color: var(--progress).

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
