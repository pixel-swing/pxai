---
name: "36 财务看板"
version: "alpha"
id: "36-financial-dashboard"
source: "style-templates/pages/36-financial-dashboard.html"
description: "面向财务报告的看板风格：深蓝信任基调、现金流瀑布图、预算差异着色、合计行与审计追踪，AAA 级对比度。"
colors:
  profit-color: "#22C55E"
  loss-color: "#EF4444"
  profit-ink: "#166534"
  loss-ink: "#B91C1C"
  trust: "#003366"
  trust-2: "#0B4A8B"
  table-header-bg: "#F3F4F6"
  bg: "#F7F8FA"
  panel: "#FFFFFF"
  line: "#E5E7EB"
  ink: "#111827"
  ink-2: "#374151"
  ink-3: "#4B5563"
  primary: "#111827"
  on-primary: "#FFFFFF"
  surface: "#F7F8FA"
  on-surface: "#111827"
typography:
  display-lg:
    fontFamily: "IBM Plex Mono"
    fontSize: "2.6rem"
    fontWeight: "600"
    lineHeight: "1.1"
    letterSpacing: "-.01em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "IBM Plex Mono"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "IBM Plex Mono"
    fontSize: ".78rem"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".1em"
  button-md:
    fontFamily: "IBM Plex Mono"
    fontSize: ".9375rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "10px"
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

# 36 财务看板 Design System

## 品牌与视觉方向

面向财务报告的看板风格：深蓝信任基调、现金流瀑布图、预算差异着色、合计行与审计追踪，AAA 级对比度。

视觉关键词来自页面本身：每一分钱，都有来处与去向；利润瀑布 · 2026 年 6 月；风格特性；瀑布分解；货币栅格；差异预警；按钮与控件；申请报表权限。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--profit-color` | `#22C55E` |
| `--loss-color` | `#EF4444` |
| `--profit-ink` | `#166534` |
| `--loss-ink` | `#B91C1C` |
| `--trust` | `#003366` |
| `--trust-2` | `#0B4A8B` |
| `--table-header-bg` | `#F3F4F6` |
| `--bg` | `#F7F8FA` |
| `--panel` | `#FFFFFF` |
| `--line` | `#E5E7EB` |
| `--ink` | `#111827` |
| `--ink-2` | `#374151` |
| `--ink-3` | `#4B5563` |
| `--shadow` | `0 1px 2px rgba(17,24,39,.06),0 6px 20px rgba(17,24,39,.06)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#22C55E`、`#EF4444`、`#166534`、`#B91C1C`、`#003366`、`#0B4A8B`、`#F3F4F6`、`#F7F8FA`、`#FFFFFF`、`#E5E7EB`、`#111827`、`#374151`、`#4B5563`、`#FFF`、`#D6E4F5`、`#8FBFEA`、`#E3EEF9`、`#9DB8D4`、`#EFF5FB`、`#9CA3AF`、`#EBF1F8`、`#D8E6F5`、`#D1D5DB`、`#FAFBFC`。

## 字体与信息层级

字体族：**Inter**、**IBM Plex Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--bg); color: var(--ink); font-size: 16px; line-height: 1.6.
- `h1,h2,h3`: line-height: 1.2; letter-spacing: -.01em.
- `.sec-head h2`: font-size: clamp(1.35rem,2.6vw,1.75rem); font-weight: 700; color: var(--trust).
- `.eyebrow`: display: inline-block; font-size: .75rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--trust); background: #D8E6F5; padding: 4px 10px; border-radius: 4px.
- `.hero h1`: font-size: clamp(1.9rem,4.6vw,2.9rem); font-weight: 800; margin: .9rem 0 1rem; color: var(--trust).
- `.board h3`: font-size: 1rem; margin-bottom: .35rem; color: var(--trust).
- `.card h3`: font-size: 1.05rem; margin-bottom: .4rem.
- `.t-display`: font-family: var(--font-num); font-size: clamp(1.9rem,4.3vw,2.6rem); font-weight: 600; letter-spacing: -.01em; color: var(--trust).
- `.t-heading`: font-size: 1.5rem; font-weight: 700; color: var(--trust).
- `.t-body`: font-size: 1rem; color: var(--ink-2).

## 形状、间距与深度

圆角令牌：`--radius: 10px`。
阴影/海拔令牌：`--shadow: 0 1px 2px rgba(17,24,39,.06),0 6px 20px rgba(17,24,39,.06)`。

- `.wrap`: max-width: 1160px; margin: 0 auto; padding: 0 clamp(1rem,4vw,2rem).
- `section`: padding: 2.4rem 0.
- `.hero`: padding: 3rem 0 2.4rem; background: linear-gradient(180deg,#EBF1F8,var(--bg)).
- `.hero-grid`: display: grid; grid-template-columns: minmax(0,5fr) minmax(0,7fr); gap: 2rem; align-items: start.
- `.hero h1`: font-size: clamp(1.9rem,4.6vw,2.9rem); font-weight: 800; margin: .9rem 0 1rem; color: var(--trust).
- `.hero p.lead`: color: var(--ink-2); max-width: 30em; margin-bottom: 1.5rem.
- `.hero-actions`: display: flex; gap: .75rem; flex-wrap: wrap.
- `.hero-grid`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .45rem; min-height: 42px; padding: .55rem 1.2rem; font: inherit; font-size: .9375rem; font-weight: 600; border-radius: 8px; border: 1px solid transparent; cursor: pointer; transition: background-color var(--dur) var(--ease),box-shadow var(--dur) var(--ease),transform var(--dur) var(--ease).
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: background: #E5E7EB; color: #9CA3AF; cursor: not-allowed; box-shadow: none; transform: none.

### 卡片与容器

- `.card`: background: var(--panel); border: 1px solid var(--line); border-top: 3px solid var(--trust); border-radius: var(--radius); box-shadow: var(--shadow); padding: 1.4rem; transition: box-shadow var(--dur) var(--ease),transform var(--dur) var(--ease).
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,51,102,.14).
- `.card .ico`: display: grid; place-items: center; width: 42px; height: 42px; border-radius: 8px; margin-bottom: .9rem; background: #D8E6F5; color: var(--trust).
- `.card:nth-child(2) .ico`: background: #DCFCE7; color: var(--profit-ink).
- `.card:nth-child(3) .ico`: background: #FEE2E2; color: var(--loss-ink).
- `.card h3`: font-size: 1.05rem; margin-bottom: .4rem.
- `.card p`: font-size: .9rem; color: var(--ink-2).

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .6rem; font-size: .9rem; font-weight: 500; cursor: pointer.
- `.switch input`: appearance: none; width: 46px; height: 26px; border-radius: 999px; background: #9CA3AF; position: relative; cursor: pointer; margin: 0; transition: background-color var(--dur) var(--ease).
- `.switch input::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(17,24,39,.35); transition: transform var(--dur) var(--ease).
- `.switch input:checked`: background: var(--trust).
- `.switch input:checked::after`: transform: translateX(20px).
- `.field`: display: flex; flex-direction: column; gap: .4rem.
- `.field.full`: grid-column: 1/-1.

### 导航

- `header`: background: var(--trust); color: #fff; position: sticky; top: 0; z-index: 20.
- `.nav`: display: flex; align-items: center; gap: 1rem; min-height: 60px; flex-wrap: wrap; padding: .5rem 0.
- `.nav ul`: display: flex; gap: 1.15rem; list-style: none; flex-wrap: wrap.
- `.nav ul a`: font-size: .9rem; color: #D6E4F5; padding: .3rem .15rem; border-bottom: 2px solid transparent; transition: color var(--dur) var(--ease).
- `.nav ul a:hover`: color: #fff; border-color: #8FBFEA.
- `header .btn-primary`: background: #fff; color: var(--trust).

## 交互与动效

动效令牌：`--dur: 200ms`；`--ease: cubic-bezier(.4,0,.2,1)`。

- `:focus-visible`: outline: 2px solid var(--trust-2); outline-offset: 2px; border-radius: 3px.
- `.nav ul a:hover`: color: #fff; border-color: #8FBFEA.
- `.btn-primary:hover`: background: var(--trust-2); box-shadow: 0 6px 16px rgba(0,51,102,.3).
- `header .btn-primary:hover`: background: #E3EEF9; box-shadow: none.
- `.btn-secondary:hover`: background: #EFF5FB; border-color: var(--trust-2).
- `.btn-ghost:hover`: background: #E5E7EB; color: var(--ink).
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: background: #E5E7EB; color: #9CA3AF; cursor: not-allowed; box-shadow: none; transform: none.
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,51,102,.14).
- `.switch input:checked`: background: var(--trust).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--trust-2); outline-offset: 2px; border-radius: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 2px solid var(--trust-2); outline-offset: 1px; border-color: var(--trust-2).

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
