---
name: "30 高管看板"
version: "alpha"
id: "30-executive-dashboard"
source: "style-templates/pages/30-executive-dashboard.html"
description: "高管看板风格演示：4–6 个大字号 KPI、趋势箭头与迷你走势线、红黄绿状态灯，一页读懂整季经营。"
colors:
  status-green: "#22C55E"
  status-yellow: "#F59E0B"
  status-red: "#EF4444"
  navy: "#003366"
  navy-deep: "#00284F"
  bg: "#F1F5F9"
  card: "#FFFFFF"
  ink: "#0F172A"
  muted: "#475569"
  line: "#E2E8F0"
  focus: "#1D4ED8"
  ok-t: "#166534"
  warn-t: "#92400E"
  bad-t: "#991B1B"
  primary: "#0F172A"
  on-primary: "#FFFFFF"
  surface: "#F1F5F9"
  on-surface: "#0F172A"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "3.5rem"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: "-.01em"
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

# 30 高管看板 Design System

## 品牌与视觉方向

高管看板风格演示：4–6 个大字号 KPI、趋势箭头与迷你走势线、红黄绿状态灯，一页读懂整季经营。

视觉关键词来自页面本身：五个数字， 看清整季生意；2026 Q2 · 核心指标；季度营收；大客户留存；重大事故；按钮与控件；订阅高管晨报；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--status-green` | `#22C55E` |
| `--status-yellow` | `#F59E0B` |
| `--status-red` | `#EF4444` |
| `--navy` | `#003366` |
| `--navy-deep` | `#00284F` |
| `--bg` | `#F1F5F9` |
| `--card` | `#FFFFFF` |
| `--ink` | `#0F172A` |
| `--muted` | `#475569` |
| `--line` | `#E2E8F0` |
| `--focus` | `#1D4ED8` |
| `--ok-t` | `#166534` |
| `--warn-t` | `#92400E` |
| `--bad-t` | `#991B1B` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#22C55E`、`#F59E0B`、`#EF4444`、`#003366`、`#00284F`、`#F1F5F9`、`#FFFFFF`、`#0F172A`、`#475569`、`#E2E8F0`、`#1D4ED8`、`#166534`、`#92400E`、`#991B1B`、`#FFF`、`#7CB8FF`、`#C7D9EE`、`#E2ECF7`、`#E8F0F9`、`#E4EDF6`、`#DBE3EC`、`#DCFCE7`、`#FEF3C7`、`#FEE2E2`。

## 字体与信息层级

字体族：**Inter**、**Noto Sans SC**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: Inter,'Noto Sans SC',system-ui,sans-serif; font-size: 16px; line-height: 1.6; color: var(--ink); background: var(--bg).
- `h1`: font-size: clamp(1.9rem,4.6vw,2.8rem); line-height: 1.25; margin-bottom: .9rem.
- `h2`: font-size: clamp(1.35rem,3vw,1.7rem); margin-bottom: .4rem.
- `.k-top h3`: font-size: 1rem; font-weight: 700; margin-right: auto.
- `.t-display`: font-size: var(--kpi-font-size); font-weight: 800; font-variant-numeric: tabular-nums; letter-spacing: -.01em.
- `.t-h`: font-size: 24px; font-weight: 700.
- `.t-body`: max-width: 36em.
- `.t-label`: font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--muted).
- `.t-meta`: font-size: .84rem; color: var(--muted).

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。
空间令牌：`--card-min-width: 280px`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 18px.
- `.hero`: padding: 3rem 0; background: linear-gradient(180deg,#E4EDF6,var(--bg)).
- `.hero-grid`: display: grid; gap: 2rem; align-items: center.
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; gap: .45rem; font: inherit; font-weight: 700; font-size: .95rem; text-decoration: none; cursor: pointer; border: 1.5px solid transparent; border-radius: 9px; padding: .62rem 1.25rem; transition: background-color .2s,color .2s,box-shadow .2s,transform .2s.
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none.

### 卡片与容器

- `.panel`: background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 1.4rem.

### 表单与选择控件

- `.switch-wrap`: display: inline-flex; align-items: center; gap: .55rem.
- `.switch`: appearance: none; -webkit-appearance: none; width: 48px; height: 27px; border-radius: 14px; background: #CBD5E1; position: relative; cursor: pointer; transition: background .2s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 21px; height: 21px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.35); transition: transform .2s.
- `.switch:checked`: background: var(--navy).
- `.switch:checked::after`: transform: translateX(21px).
- `.switch-wrap label`: font-weight: 500; cursor: pointer.
- `.field`: display: flex; flex-direction: column; gap: .35rem; margin-bottom: .95rem.

### 导航

- `.nav`: display: flex; align-items: center; gap: 1rem; height: 62px.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--focus); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: #fff; text-decoration: underline.
- `.btn-primary:hover`: background: var(--navy-deep); box-shadow: 0 8px 18px rgba(0,40,79,.3); transform: translateY(-1px).
- `.site-head .btn-primary:hover`: background: #E2ECF7; transform: none; box-shadow: none.
- `.btn-outline:hover`: background: #E8F0F9; transform: translateY(-1px).
- `.btn-ghost:hover`: color: var(--ink); background: #E2E8F0.
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none.
- `.kpi:hover`: transform: translateY(-5px); box-shadow: 0 16px 32px rgba(15,23,42,.12).
- `.switch:checked`: background: var(--navy).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:780px)`、`(min-width:920px)`、`(prefers-reduced-motion:reduce)`。
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
