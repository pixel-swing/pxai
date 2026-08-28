---
name: "34 预测分析"
version: "alpha"
id: "34-predictive-analytics"
source: "style-templates/pages/34-predictive-analytics.html"
description: "AI 驱动的预测分析看板风格：虚线预测线、置信区间阴影带、异常点脉冲告警与情景切换开关。"
colors:
  anomaly-color: "#F59E0B"
  prediction-color: "#8B5CF6"
  ai-accent: "#6366F1"
  actual-color: "#0284C7"
  actual-bright: "#38BDF8"
  bg: "#0F172A"
  panel: "#1E293B"
  panel-2: "#16213A"
  line: "rgba(148,163,184,.22)"
  ink: "#F1F5F9"
  ink-2: "#B6C2D4"
  ink-3: "#94A3B8"
  primary: "#F1F5F9"
  on-primary: "#000000"
  surface: "#0F172A"
  on-surface: "#F1F5F9"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2.75rem"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Space Grotesk"
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
    letterSpacing: ".14em"
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

# 34 预测分析 Design System

## 品牌与视觉方向

AI 驱动的预测分析看板风格：虚线预测线、置信区间阴影带、异常点脉冲告警与情景切换开关。

视觉关键词来自页面本身：看见下一季度的 曲线走向；月度营收 · 实际 vs 预测；风格特性；虚线预测线；置信区间；异常脉冲；按钮与控件；订阅预测简报。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--anomaly-color` | `#F59E0B` |
| `--prediction-color` | `#8B5CF6` |
| `--ai-accent` | `#6366F1` |
| `--actual-color` | `#0284C7` |
| `--actual-bright` | `#38BDF8` |
| `--bg` | `#0F172A` |
| `--panel` | `#1E293B` |
| `--panel-2` | `#16213A` |
| `--line` | `rgba(148,163,184,.22)` |
| `--ink` | `#F1F5F9` |
| `--ink-2` | `#B6C2D4` |
| `--ink-3` | `#94A3B8` |
| `--shadow` | `0 12px 32px rgba(2,6,23,.5)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F59E0B`、`#8B5CF6`、`#6366F1`、`#0284C7`、`#38BDF8`、`#0F172A`、`#1E293B`、`#16213A`、`#F1F5F9`、`#B6C2D4`、`#94A3B8`、`#FFF`、`#243050`、`#2A3650`、`#64748B`、`#C7D2FE`、`#A5B4FC`、`#DDE3F0`、`#C4B5FD`、`#FCD34D`、`#334155`、`#CBD5E1`、`#3B4A66`、`#0F1B33`。

## 字体与信息层级

字体族：**Space Grotesk**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--bg); color: var(--ink); font-size: 16px; line-height: 1.65; background-image: radial-gradient(60rem 30rem at 80% -10%,rgba(99,102,241,.16),transparent 60%),radial-gradient(40rem 24rem at 0% 20%,rgba(139,92,246,.12),transparent 60%).
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.2; letter-spacing: -.01em.
- `.sec-head h2`: font-size: clamp(1.35rem,2.6vw,1.75rem).
- `.eyebrow`: display: inline-flex; align-items: center; gap: .45rem; font-size: .75rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #C7D2FE; background: rgba(99,102,241,.18); border: 1px solid rgba(99,102,241,.45); padding: 4px 10px; border-radius: 999px.
- `.hero h1`: font-size: clamp(1.9rem,4.6vw,3rem); font-weight: 700; margin: 1rem 0.
- `.hero h1 .grad`: background: linear-gradient(90deg,var(--actual-bright),var(--prediction-color)); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.board-head h3`: font-size: 1rem.
- `.card h3`: font-size: 1.05rem; margin-bottom: .4rem.
- `.t-display`: font-family: var(--font-display); font-size: clamp(2rem,4.5vw,2.75rem); font-weight: 700; letter-spacing: -.02em.
- `.t-heading`: font-family: var(--font-display); font-size: 1.5rem; font-weight: 700.

## 形状、间距与深度

圆角令牌：`--radius: 14px`。
空间令牌：`--scenario-toggle-width: 48px`。
阴影/海拔令牌：`--shadow: 0 12px 32px rgba(2,6,23,.5)`。

- `.wrap`: max-width: 1160px; margin: 0 auto; padding: 0 clamp(1rem,4vw,2rem).
- `section`: padding: 2.4rem 0.
- `.hero`: padding: 3.2rem 0 2.6rem.
- `.hero-grid`: display: grid; grid-template-columns: minmax(0,5fr) minmax(0,7fr); gap: 2rem; align-items: center.
- `.hero h1`: font-size: clamp(1.9rem,4.6vw,3rem); font-weight: 700; margin: 1rem 0.
- `.hero h1 .grad`: background: linear-gradient(90deg,var(--actual-bright),var(--prediction-color)); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.hero p.lead`: color: var(--ink-2); max-width: 30em; margin-bottom: 1.6rem.
- `.hero-actions`: display: flex; gap: .75rem; flex-wrap: wrap.
- `.grid-l`: stroke: rgba(148,163,184,.14).
- `.hero-grid`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .45rem; min-height: 42px; padding: .55rem 1.2rem; font: inherit; font-size: .9375rem; font-weight: 600; border-radius: 10px; border: 1px solid transparent; cursor: pointer; transition: box-shadow var(--dur) var(--ease),background-color var(--dur) var(--ease),transform var(--dur) var(--ease).
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: background: #2A3650; color: #64748B; cursor: not-allowed; box-shadow: none; transform: none.

### 卡片与容器

- `.card`: background: linear-gradient(180deg,rgba(148,163,184,.06),transparent 40%),var(--panel); border: 1px solid var(--line); border-radius: var(--radius); padding: 1.4rem; transition: transform var(--dur) var(--ease),border-color var(--dur) var(--ease).
- `.card:hover`: transform: translateY(-3px); border-color: rgba(139,92,246,.6).
- `.card .ico`: display: grid; place-items: center; width: 42px; height: 42px; border-radius: 11px; margin-bottom: .9rem; background: rgba(99,102,241,.16); color: #A5B4FC; border: 1px solid rgba(99,102,241,.4).
- `.card:nth-child(2) .ico`: background: rgba(139,92,246,.16); color: #C4B5FD; border-color: rgba(139,92,246,.4).
- `.card:nth-child(3) .ico`: background: rgba(245,158,11,.14); color: #FCD34D; border-color: rgba(245,158,11,.4).
- `.card h3`: font-size: 1.05rem; margin-bottom: .4rem.
- `.card p`: font-size: .9rem; color: var(--ink-2).

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .6rem; font-size: .9rem; font-weight: 500; cursor: pointer.
- `.switch input`: appearance: none; width: var(--scenario-toggle-width); height: 26px; border-radius: 999px; background: #334155; border: 1px solid var(--line); position: relative; cursor: pointer; margin: 0; transition: background-color var(--dur) var(--ease).
- `.switch input::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: #CBD5E1; transition: transform var(--dur) var(--ease),background-color var(--dur) var(--ease).
- `.switch input:checked`: background: var(--prediction-color).
- `.switch input:checked::after`: transform: translateX(22px); background: #fff.
- `.field`: display: flex; flex-direction: column; gap: .4rem.
- `.field.full`: grid-column: 1/-1.

### 导航

- `header`: position: sticky; top: 0; z-index: 20; background: rgba(15,23,42,.85); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 1rem; min-height: 62px; flex-wrap: wrap; padding: .5rem 0.
- `.nav ul`: display: flex; gap: 1.15rem; list-style: none; flex-wrap: wrap.
- `.nav ul a`: font-size: .9rem; color: var(--ink-2); padding: .3rem .15rem; transition: color var(--dur) var(--ease).
- `.nav ul a:hover`: color: var(--actual-bright).
- `footer nav`: display: flex; gap: 1.1rem; flex-wrap: wrap; font-size: .88rem; color: var(--ink-2).

## 交互与动效

动效令牌：`--dur: 260ms`；`--ease: cubic-bezier(.4,0,.2,1)`。

- `:focus-visible`: outline: 2px solid var(--actual-bright); outline-offset: 2px; border-radius: 4px.
- `.nav ul a:hover`: color: var(--actual-bright).
- `.btn-primary:hover`: box-shadow: 0 0 0 1px rgba(139,92,246,.6),0 8px 24px rgba(99,102,241,.45).
- `.btn-secondary:hover`: border-color: var(--prediction-color); background: #243050.
- `.btn-ghost:hover`: color: var(--ink); background: rgba(148,163,184,.12).
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: background: #2A3650; color: #64748B; cursor: not-allowed; box-shadow: none; transform: none.
- `.card:hover`: transform: translateY(-3px); border-color: rgba(139,92,246,.6).
- `.switch input:checked`: background: var(--prediction-color).
- `.switch input:checked::after`: transform: translateX(22px); background: #fff.

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--actual-bright); outline-offset: 2px; border-radius: 4px.
- `input:focus-visible,textarea:focus-visible`: outline: 2px solid var(--prediction-color); outline-offset: 1px; border-color: var(--prediction-color).

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
