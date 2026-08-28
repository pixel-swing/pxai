---
name: "28 高密度数据看板"
version: "alpha"
id: "28-data-dense-dashboard"
source: "style-templates/pages/28-data-dense-dashboard.html"
description: "高密度数据看板风格演示：12 列网格、8–12px 最小内边距、KPI 卡、纯 CSS 图表与紧凑数据表，追求最大信息密度。"
colors:
  bg: "#F5F5F5"
  card: "#FFFFFF"
  ink: "#333333"
  ink-strong: "#111827"
  muted: "#5B6472"
  line: "#E5E7EB"
  blue: "#2563EB"
  blue-deep: "#1D4ED8"
  green: "#22C55E"
  green-t: "#15803D"
  amber: "#F59E0B"
  amber-t: "#B45309"
  red: "#EF4444"
  red-t: "#B91C1C"
  focus: "#1D4ED8"
  primary: "#333333"
  on-primary: "#FFFFFF"
  surface: "#F5F5F5"
  on-surface: "#333333"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "2.5rem"
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "2.8rem"
    fontWeight: "700"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Inter"
    fontSize: "1.7rem"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Noto Sans SC"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Noto Sans SC"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".1em"
  button-md:
    fontFamily: "Noto Sans SC"
    fontSize: ".95rem"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  DEFAULT: "4px"
spacing:
  grid-gap: "8px"
  card-padding: "12px"
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

# 28 高密度数据看板 Design System

## 品牌与视觉方向

高密度数据看板风格演示：12 列网格、8–12px 最小内边距、KPI 卡、纯 CSS 图表与紧凑数据表，追求最大信息密度。

视觉关键词来自页面本身：一屏尽览， 每一像素都在传递数据；看板组件与信息密度；多组件网格；紧凑图表；高密度数据表；按钮与控件；订阅数据日报；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#F5F5F5` |
| `--card` | `#FFFFFF` |
| `--ink` | `#333333` |
| `--ink-strong` | `#111827` |
| `--muted` | `#5B6472` |
| `--line` | `#E5E7EB` |
| `--blue` | `#2563EB` |
| `--blue-deep` | `#1D4ED8` |
| `--green` | `#22C55E` |
| `--green-t` | `#15803D` |
| `--amber` | `#F59E0B` |
| `--amber-t` | `#B45309` |
| `--red` | `#EF4444` |
| `--red-t` | `#B91C1C` |
| `--focus` | `#1D4ED8` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F5F5F5`、`#FFFFFF`、`#333333`、`#111827`、`#5B6472`、`#E5E7EB`、`#2563EB`、`#1D4ED8`、`#22C55E`、`#15803D`、`#F59E0B`、`#B45309`、`#EF4444`、`#B91C1C`、`#FFF`、`#60A5FA`、`#D1D5DB`、`#EFF6FF`、`#EEF2F7`、`#E2E8F0`、`#93C5FD`、`#F9FAFB`、`#DCFCE7`、`#166534`。

## 字体与信息层级

字体族：**Inter**、**Noto Sans SC**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: Inter,'Noto Sans SC',system-ui,sans-serif; font-size: 16px; line-height: 1.6; color: var(--ink); background: var(--bg).
- `h1`: font-size: clamp(1.9rem,4.6vw,2.8rem); line-height: 1.25; color: var(--ink-strong); margin-bottom: .9rem.
- `h2`: font-size: clamp(1.35rem,3vw,1.7rem); color: var(--ink-strong); margin-bottom: .4rem.
- `.card h3`: font-size: 1.02rem; color: var(--ink-strong); margin-bottom: .3rem.
- `.t-display`: font-size: clamp(2.1rem,4.5vw,2.5rem); font-weight: 800; color: var(--ink-strong); font-variant-numeric: tabular-nums.
- `.t-h`: font-size: 20px; font-weight: 700; color: var(--ink-strong).
- `.t-body`: max-width: 36em.
- `.t-label`: font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); font-variant-numeric: tabular-nums.
- `.t-meta`: font-size: .84rem; color: var(--muted).

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。
空间令牌：`--grid-gap: 8px`；`--card-padding: 12px`；`--sidebar-width: 240px`。

- `.wrap`: max-width: 1160px; margin: 0 auto; padding: 0 16px.
- `.hero`: padding: 2.6rem 0; background: linear-gradient(180deg,#EEF2F7,var(--bg)).
- `.hero-grid`: display: grid; gap: 1.6rem; align-items: center.
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; gap: .45rem; font: inherit; font-weight: 700; font-size: .95rem; text-decoration: none; cursor: pointer; border: 1.5px solid transparent; border-radius: 8px; padding: .55rem 1.1rem; transition: background-color .18s,color .18s,box-shadow .18s,transform .18s.
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none.

### 卡片与容器

- `.card`: background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: var(--card-padding); transition: box-shadow .18s,transform .18s.
- `.card:hover`: box-shadow: 0 8px 20px rgba(17,24,39,.1); transform: translateY(-2px).
- `.card h3`: font-size: 1.02rem; color: var(--ink-strong); margin-bottom: .3rem.
- `.card>p`: font-size: .95rem; color: var(--muted); margin-bottom: .7rem.
- `.card svg.line`: display: block; width: 100%; height: 76px.
- `.panel`: background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 1.2rem.
- `.formsec .panel`: max-width: 620px.

### 表单与选择控件

- `.switch-wrap`: display: inline-flex; align-items: center; gap: .55rem.
- `.switch`: appearance: none; -webkit-appearance: none; width: 46px; height: 26px; border-radius: 13px; background: #CBD5E1; position: relative; cursor: pointer; transition: background .2s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.35); transition: transform .2s.
- `.switch:checked`: background: var(--blue).
- `.switch:checked::after`: transform: translateX(20px).
- `.switch-wrap label`: font-weight: 500; cursor: pointer.
- `.field`: display: flex; flex-direction: column; gap: .35rem; margin-bottom: .95rem.

### 导航

- `.nav`: display: flex; align-items: center; gap: 1rem; height: var(--header-height).
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--focus); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: #fff; text-decoration: underline.
- `.btn-primary:hover`: background: var(--blue-deep); box-shadow: 0 4px 12px rgba(37,99,235,.3).
- `.btn-outline:hover`: background: #EFF6FF.
- `.btn-ghost:hover`: color: var(--ink-strong); background: #E5E7EB.
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none.
- `.card:hover`: box-shadow: 0 8px 20px rgba(17,24,39,.1); transform: translateY(-2px).
- `.mbar i:hover`: background: var(--blue-deep).
- `.tblwrap tbody tr:hover`: background: #EFF6FF.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:780px)`、`(min-width:900px)`、`(min-width:820px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--focus); outline-offset: 2px; border-radius: 4px.
- `.input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--focus); outline-offset: 1px; border-color: var(--focus).

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
