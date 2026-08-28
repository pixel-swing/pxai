---
name: "29 热力图风格"
version: "alpha"
id: "29-heatmap"
source: "style-templates/pages/29-heatmap.html"
description: "热力图风格演示：冷（蓝）到热（红）的渐变色格矩阵、强度图例与悬停提示，让数据密度与热点一眼可见。"
colors:
  heatmap-cool: "#0080FF"
  heatmap-neutral: "#FFF3B0"
  heatmap-hot: "#E00000"
  tooltip-bg: "rgba(0,0,0,.9)"
  bg: "#F8FAFC"
  card: "#FFFFFF"
  ink: "#111827"
  muted: "#4B5563"
  line: "#E5E7EB"
  accent: "#0062C4"
  accent-deep: "#004E9E"
  focus: "#0062C4"
  primary: "#0062C4"
  on-primary: "#FFFFFF"
  surface: "#F8FAFC"
  on-surface: "#111827"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "2.9rem"
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "2.7rem"
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

# 29 热力图风格 Design System

## 品牌与视觉方向

热力图风格演示：冷（蓝）到热（红）的渐变色格矩阵、强度图例与悬停提示，让数据密度与热点一眼可见。

视觉关键词来自页面本身：让密度显形， 让 热点 自己说话；热力语言的三个要素；连续色标；悬停即知；发散色板；按钮与控件；订阅热力周报；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--heatmap-cool` | `#0080FF` |
| `--heatmap-neutral` | `#FFF3B0` |
| `--heatmap-hot` | `#E00000` |
| `--tooltip-bg` | `rgba(0,0,0,.9)` |
| `--bg` | `#F8FAFC` |
| `--card` | `#FFFFFF` |
| `--ink` | `#111827` |
| `--muted` | `#4B5563` |
| `--line` | `#E5E7EB` |
| `--accent` | `#0062C4` |
| `--accent-deep` | `#004E9E` |
| `--focus` | `#0062C4` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0080FF`、`#FFF3B0`、`#E00000`、`#F8FAFC`、`#FFFFFF`、`#111827`、`#4B5563`、`#E5E7EB`、`#0062C4`、`#004E9E`、`#FFF`、`#EFF6FF`、`#EEF2F7`、`#FF8C42`、`#5CA9FF`、`#B3D4FF`、`#FFD23F`、`#FF5A36`、`#FEF3C7`、`#CBD5E1`、`#FEF2F2`、`#991B1B`、`#FECACA`、`#0B1220`。

## 字体与信息层级

字体族：**Inter**、**Noto Sans SC**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: Inter,'Noto Sans SC',system-ui,sans-serif; font-size: 16px; line-height: 1.6; color: var(--ink); background: var(--bg); overflow-x: hidden.
- `h1`: font-size: clamp(1.9rem,4.6vw,2.7rem); line-height: 1.25; margin-bottom: .9rem.
- `h1 .hot`: background: linear-gradient(90deg,var(--heatmap-cool),#FF8C42,var(--heatmap-hot)); -webkit-background-clip: text; background-clip: text; color: transparent.
- `h2`: font-size: clamp(1.35rem,3vw,1.7rem); margin-bottom: .4rem.
- `.card h3`: font-size: 1.05rem; margin-bottom: .35rem.
- `.t-display`: font-size: clamp(2.1rem,5vw,2.9rem); font-weight: 800; background: linear-gradient(90deg,var(--heatmap-cool),var(--heatmap-hot)); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.t-h`: font-size: 24px; font-weight: 700.
- `.t-body`: max-width: 36em.
- `.t-label`: font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--muted).
- `.t-meta`: font-size: .84rem; color: var(--muted).

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。
空间令牌：`--legend-width: 220px`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 18px.
- `.hero`: padding: 2.8rem 0; background: linear-gradient(180deg,#EFF6FF,var(--bg)).
- `.hero-grid`: display: grid; gap: 1.8rem; align-items: center.
- `.hero-grid`: grid-template-columns: .9fr 1.1fr.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; gap: .45rem; font: inherit; font-weight: 700; font-size: .95rem; text-decoration: none; cursor: pointer; border: 1.5px solid transparent; border-radius: 9px; padding: .6rem 1.2rem; transition: background-color .2s,color .2s,box-shadow .2s,transform .2s.
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none.

### 卡片与容器

- `.card`: background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 1.3rem; transition: transform .2s,box-shadow .2s.
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 12px 28px rgba(17,24,39,.1).
- `.card h3`: font-size: 1.05rem; margin-bottom: .35rem.
- `.card p`: font-size: .95rem; color: var(--muted); margin-bottom: .8rem.
- `.panel`: background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 1.4rem.

### 表单与选择控件

- `.switch-wrap`: display: inline-flex; align-items: center; gap: .55rem.
- `.switch`: appearance: none; -webkit-appearance: none; width: 48px; height: 27px; border-radius: 14px; background: #CBD5E1; position: relative; cursor: pointer; transition: background .2s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 21px; height: 21px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.35); transition: transform .2s.
- `.switch:checked`: background: var(--accent).
- `.switch:checked::after`: transform: translateX(21px).
- `.switch-wrap label`: font-weight: 500; cursor: pointer.
- `.field`: display: flex; flex-direction: column; gap: .35rem; margin-bottom: .95rem.

### 导航

- `.nav`: display: flex; align-items: center; gap: 1rem; height: 60px.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--focus); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: var(--accent-deep); text-decoration: underline.
- `.btn-primary:hover`: background: var(--accent-deep); box-shadow: 0 6px 16px rgba(0,98,196,.3); transform: translateY(-1px).
- `.btn-outline:hover`: background: #EFF6FF; transform: translateY(-1px).
- `.btn-ghost:hover`: color: var(--ink); background: #EEF2F7.
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none.
- `.c:hover`: transform: scale(1.22); z-index: 6; outline: 2px solid var(--ink).
- `.c:hover::after`: content: attr(data-t); position: absolute; bottom: calc(100% + 7px); left: 50%; transform: translateX(-50%); background: var(--tooltip-bg); color: #fff; font-size: 12px; font-weight: 600; white-space: nowrap; padding: 4px 9px; border-radius: 6px; z-index: 7; pointer-events: none.
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 12px 28px rgba(17,24,39,.1).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:780px)`、`(min-width:940px)`、`(min-width:880px)`、`(max-width:560px)`、`(prefers-reduced-motion:reduce)`。
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
