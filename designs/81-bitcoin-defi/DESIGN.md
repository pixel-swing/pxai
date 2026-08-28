---
name: "81 比特币 DeFi（移动端）"
version: "alpha"
id: "81-bitcoin-defi"
source: "style-templates/pages/81-bitcoin-defi.html"
description: "虚空黑底 + 比特币橙金渐变 + 玻璃拟态导航 + 等宽数据的 Web3 DeFi 移动端风格演示"
colors:
  bg-void: "#030304"
  bg-surface: "#0F1115"
  fg: "#FFFFFF"
  fg-muted: "#94A3B8"
  border-dim: "rgba(30,41,59,.55)"
  border-lit: "rgba(148,163,184,.18)"
  accent-bitcoin: "#F7931A"
  accent-burnt: "#EA580C"
  accent-gold: "#FFD600"
  primary: "#FFFFFF"
  on-primary: "#000000"
  surface: "#030304"
  on-surface: "#FFFFFF"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "34px"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: "-.01em"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "22px"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "22px"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Space Grotesk"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius-card: "24px"
  radius-pill: "999px"
  DEFAULT: "24px"
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

# 81 比特币 DeFi（移动端） Design System

## 品牌与视觉方向

虚空黑底 + 比特币橙金渐变 + 玻璃拟态导航 + 等宽数据的 Web3 DeFi 移动端风格演示

视觉关键词来自页面本身：掌上比特币金库， 链上精度可见；风格信息；风格特性；玻璃拟态悬浮导航；等宽高精度数据；橙金辉光渐变 CTA；按钮与控件；转账示例。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg-void` | `#030304` |
| `--bg-surface` | `#0F1115` |
| `--fg` | `#FFFFFF` |
| `--fg-muted` | `#94A3B8` |
| `--border-dim` | `rgba(30,41,59,.55)` |
| `--border-lit` | `rgba(148,163,184,.18)` |
| `--accent-bitcoin` | `#F7931A` |
| `--accent-burnt` | `#EA580C` |
| `--accent-gold` | `#FFD600` |
| `--grad-cta` | `linear-gradient(135deg,var(--accent-burnt),var(--accent-bitcoin))` |
| `--grad-gold` | `linear-gradient(90deg,var(--accent-bitcoin),var(--accent-gold))` |
| `--glow` | `0 0 18px rgba(247,147,26,.45),0 6px 24px rgba(234,88,12,.35)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#030304`、`#0F1115`、`#FFFFFF`、`#94A3B8`、`#F7931A`、`#EA580C`、`#FFD600`、`#08090C`、`#0B0D12`、`#180A00`、`#1B2028`、`#3B4454`、`#0B0D11`、`#5B6776`。

## 字体与信息层级

字体族：**Space Grotesk**、**Inter**、**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: radial-gradient(1000px 600px at 50% -10%,rgba(234,88,12,.12),transparent 60%),#08090C; color: var(--fg); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; color: var(--accent-gold); border: 1px solid rgba(255,214,0,.3); border-radius: var(--radius-pill); padding: 6px 14px; background: rgba(255,214,0,.06).
- `.hero h1`: font-family: var(--font-heading); font-size: 36px; line-height: 1.15; letter-spacing: -.01em; margin: 16px 0 10px.
- `.hero h1 .grad`: background: var(--grad-gold); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.wallet .label`: font-size: 12.5px; color: var(--fg-muted); display: flex; justify-content: space-between; align-items: center.
- `h2`: font-family: var(--font-heading); font-size: 22px; letter-spacing: -.01em; margin-bottom: 6px.
- `.fcard h3`: font-family: var(--font-heading); font-size: 17px; margin-bottom: 6px.
- `.t-display`: font-family: var(--font-heading); font-size: 34px; font-weight: 700; letter-spacing: -.01em; background: var(--grad-gold); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.t-h`: font-family: var(--font-heading); font-size: 22px; font-weight: 700.
- `.t-body`: font-size: 16px; color: var(--fg-muted).

## 形状、间距与深度

圆角令牌：`--radius-card: 24px`；`--radius-pill: 999px`。

- `.phone`: position: relative; width: 100%; max-width: 430px; background: var(--bg-void); border: 1px solid rgba(148,163,184,.22); border-radius: 48px; box-shadow: 0 0 0 8px #0B0D12,0 30px 80px rgba(0,0,0,.7),0 0 60px rgba(247,147,26,.10); overflow: hidden; overflow: clip.
- `.hero`: padding: 30px 20px 26px; position: relative; background-image: linear-gradient(rgba(247,147,26,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(247,147,26,.05) 1px,transparent 1px); background-size: 50px 50px.
- `.hero h1`: font-family: var(--font-heading); font-size: 36px; line-height: 1.15; letter-spacing: -.01em; margin: 16px 0 10px.
- `.hero h1 .grad`: background: var(--grad-gold); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.hero p`: color: var(--fg-muted); font-size: 15.5px; max-width: 34ch.
- `.hero-actions`: display: flex; gap: 10px; margin: 20px 0 22px; flex-wrap: wrap.
- `section`: padding: 26px 20px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 12px 22px; border-radius: var(--radius-pill); font-family: var(--font-heading); font-weight: 700; font-size: 15px; border: 1px solid transparent; cursor: pointer; transition: transform .2s ease,box-shadow .2s ease,filter .2s ease.
- `.btn:disabled`: opacity: .4; cursor: not-allowed; box-shadow: none; filter: grayscale(.4).

### 卡片与容器

- `.card`: background: var(--bg-surface); border: 1px solid var(--border-lit); border-radius: var(--radius-card); padding: 20px.

### 表单与选择控件

- `.switch-line`: display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: var(--bg-surface); border: 1px solid var(--border-lit); border-radius: 16px.
- `.switch`: appearance: none; -webkit-appearance: none; width: 54px; height: 32px; border-radius: var(--radius-pill); background: #1B2028; border: 1px solid var(--border-lit); position: relative; cursor: pointer; transition: background .25s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #3B4454; transition: transform .25s,background .25s.
- `.switch:checked`: background: var(--grad-cta); border-color: transparent; box-shadow: 0 0 14px rgba(247,147,26,.5).
- `.switch:checked::after`: transform: translateX(22px); background: #180A00.
- `form .field`: margin-bottom: 16px.
- `input[type=text],input[type=number],textarea`: width: 100%; min-height: 50px; background: #0B0D11; border: 1px solid var(--border-lit); border-radius: 14px; color: var(--fg); font-family: var(--font-mono); font-size: 14px; padding: 13px 15px; transition: border-color .2s,box-shadow .2s.

### 导航

- `header.nav`: position: sticky; top: 0; z-index: 9; background: rgba(15,17,21,.55); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid var(--border-lit); padding: 10px 18px 12px.
- `.tabs`: display: flex.
- `.tabs a`: flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 8px 4px; min-height: 52px; font-size: 11px; color: var(--fg-muted); border-radius: 12px.
- `.tabs a[aria-current]`: color: var(--accent-bitcoin).
- `.tabs a:hover`: color: var(--accent-gold).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 2px solid var(--accent-gold); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover,.nav-links a[aria-current]`: color: var(--accent-bitcoin).
- `.btn-primary:hover`: filter: brightness(1.1); box-shadow: 0 0 26px rgba(247,147,26,.6),0 8px 30px rgba(234,88,12,.45).
- `.btn-primary:active`: transform: scale(.97).
- `.btn-surface:hover`: border-color: rgba(247,147,26,.5); color: var(--accent-bitcoin).
- `.btn-surface:active`: transform: scale(.97).
- `.btn-ghost:hover`: color: var(--accent-gold); background: rgba(247,147,26,.08).
- `.btn-ghost:active`: transform: scale(.97).
- `.btn:disabled`: opacity: .4; cursor: not-allowed; box-shadow: none; filter: grayscale(.4).
- `.fcard:hover`: border-color: rgba(247,147,26,.45); box-shadow: 0 0 24px rgba(247,147,26,.12).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--accent-gold); outline-offset: 2px; border-radius: 4px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--accent-bitcoin); box-shadow: 0 0 0 3px rgba(247,147,26,.25).

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
