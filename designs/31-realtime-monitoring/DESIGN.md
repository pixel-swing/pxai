---
name: "31 实时监控"
version: "alpha"
id: "31-realtime-monitoring"
source: "style-templates/pages/31-realtime-monitoring.html"
description: "实时监控风格：脉冲状态灯、流式图表与告警高亮，面向 DevOps 与实时分析看板。"
colors:
  bg: "#0B1220"
  surface: "#111A2E"
  surface-2: "#0E1626"
  line: "rgba(148,163,184,.18)"
  ink: "#E6EDF7"
  muted: "#9FB0C7"
  live-indicator: "#22C55E"
  warning-color: "#FFA500"
  critical-color: "#DC2626"
  critical-text: "#F87171"
  info: "#3B82F6"
  info-text: "#60A5FA"
  primary: "#E6EDF7"
  on-primary: "#000000"
  on-surface: "#E6EDF7"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "3.5rem"
    fontWeight: "800"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Inter"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "JetBrains Mono"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: ".78rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Inter"
    fontSize: ".95rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "12px"
  DEFAULT: "12px"
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

# 31 实时监控 Design System

## 品牌与视觉方向

实时监控风格：脉冲状态灯、流式图表与告警高亮，面向 DevOps 与实时分析看板。

视觉关键词来自页面本身：毫秒级 实时监控 ，让每一次波动都被看见；核心特性；脉冲状态灯；流式图表；告警高亮；按钮与控件；新建告警规则；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#0B1220` |
| `--surface` | `#111A2E` |
| `--surface-2` | `#0E1626` |
| `--line` | `rgba(148,163,184,.18)` |
| `--ink` | `#E6EDF7` |
| `--muted` | `#9FB0C7` |
| `--live-indicator` | `#22C55E` |
| `--warning-color` | `#FFA500` |
| `--critical-color` | `#DC2626` |
| `--critical-text` | `#F87171` |
| `--info` | `#3B82F6` |
| `--info-text` | `#60A5FA` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0B1220`、`#111A2E`、`#0E1626`、`#E6EDF7`、`#9FB0C7`、`#22C55E`、`#FFA500`、`#DC2626`、`#F87171`、`#3B82F6`、`#60A5FA`、`#04230F`、`#33415C`、`#FFF`、`#6B7A93`。

## 字体与信息层级

字体族：**Inter**、**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font-family: var(--font-body); font-size: 16px; line-height: 1.6.
- `h2`: font-size: 1.5rem; font-weight: 700; margin-bottom: 1.25rem.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .5rem; font: 700 .78rem var(--font-mono); letter-spacing: .12em; color: var(--live-indicator); border: 1px solid rgba(34,197,94,.35); padding: .35rem .7rem; border-radius: 999px; text-transform: uppercase.
- `.hero h1`: font-size: clamp(2rem,5.5vw,3.4rem); font-weight: 800; line-height: 1.2; margin: 1rem 0.
- `.hero h1 em`: font-style: normal; color: var(--live-indicator).
- `.card h3`: font-size: 1.1rem; margin: .7rem 0 .4rem.
- `.t-display`: font-size: clamp(2.2rem,5vw,3.5rem); font-weight: 800; line-height: 1.15.
- `.t-h`: font-size: 1.75rem; font-weight: 700.
- `.t-body`: font-size: 1rem; color: var(--muted); max-width: 40em.
- `.t-label`: font: 700 .78rem var(--font-mono); letter-spacing: .12em; text-transform: uppercase; color: var(--live-indicator).

## 形状、间距与深度

圆角令牌：`--radius: 12px`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 3rem 0.
- `.hero`: padding: 4rem 0 3rem.
- `.hero-grid`: display: grid; gap: 2.5rem.
- `.hero h1`: font-size: clamp(2rem,5.5vw,3.4rem); font-weight: 800; line-height: 1.2; margin: 1rem 0.
- `.hero h1 em`: font-style: normal; color: var(--live-indicator).
- `.hero p`: color: var(--muted); max-width: 34em; margin-bottom: 1.5rem.
- `.hero-grid`: grid-template-columns: 1.05fr 1fr; align-items: center.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: .5rem; font: 600 .95rem var(--font-body); padding: .65rem 1.15rem; border-radius: 10px; border: 1px solid transparent; cursor: pointer; transition: transform .2s,filter .2s,border-color .2s,background .2s.
- `.btn:active`: transform: translateY(1px) scale(.98).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; filter: none.

### 卡片与容器

- `.card`: background: var(--surface); border: 1px solid var(--line); border-left: 3px solid var(--ac,var(--live-indicator)); border-radius: var(--radius); padding: 1.4rem; transition: transform .2s,box-shadow .2s.
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 0 24px color-mix(in srgb,var(--ac) 25%,transparent).
- `.card svg`: color: var(--ac).
- `.card h3`: font-size: 1.1rem; margin: .7rem 0 .4rem.
- `.card p`: color: var(--muted); font-size: .95rem.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .6rem; cursor: pointer; font-size: .95rem.
- `.switch input`: position: absolute; opacity: 0; width: 46px; height: 26px; cursor: pointer.
- `.switch input:checked + .track`: background: var(--live-indicator).
- `.switch input:checked + .track::after`: transform: translateX(20px).
- `.switch input:focus-visible + .track`: outline: 3px solid var(--info-text); outline-offset: 2px.
- `.field`: display: grid; gap: .45rem.
- `input[type=text],input[type=number],textarea`: width: 100%; background: var(--surface-2); border: 1px solid var(--line); border-radius: 8px; color: var(--ink); font: 400 1rem var(--font-body); padding: .7rem .85rem; transition: border-color .2s.

### 导航

- `header`: position: sticky; top: 0; z-index: var(--alert-z-index); background: rgba(11,18,32,.88); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 1rem; height: 64px.
- `.nav ul`: display: flex; gap: 1.25rem; list-style: none; margin-left: auto.

## 交互与动效

动效令牌：`--toast-duration: 5s`。

- `a:hover`: color: var(--ink).
- `:focus-visible`: outline: 3px solid var(--info-text); outline-offset: 2px; border-radius: 4px.
- `.btn-primary:hover`: filter: brightness(1.12); transform: translateY(-1px).
- `.btn-secondary:hover`: border-color: var(--info-text).
- `.btn-ghost:hover`: background: rgba(59,130,246,.12).
- `.btn:active`: transform: translateY(1px) scale(.98).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; filter: none.
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 0 24px color-mix(in srgb,var(--ac) 25%,transparent).
- `.switch input:checked + .track`: background: var(--live-indicator).
- `.switch input:checked + .track::after`: transform: translateX(20px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:860px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--info-text); outline-offset: 2px; border-radius: 4px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--info-text); outline-offset: 2px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--info-text); outline-offset: 1px; border-color: var(--info).

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
