---
name: "07 深色模式（OLED）"
version: "alpha"
id: "07-dark-mode-oled"
source: "style-templates/pages/07-dark-mode-oled.html"
description: "OLED 深色模式风格演示：纯黑背景、极简辉光、霓虹强调与 7:1 高对比排版，为夜间使用与 OLED 屏幕省电而生。"
colors:
  bg-black: "#000000"
  bg-dark-grey: "#121212"
  bg-midnight: "#0A0E27"
  text-primary: "#FFFFFF"
  text-secondary: "#B8BCC8"
  accent-neon: "#39FF14"
  accent-blue: "#0080FF"
  accent-gold: "#FFD700"
  accent-purple: "#BF00FF"
  accent-purple-text: "#D966FF"
  border: "#26262E"
  background: "#000000"
  on-background: "#FFFFFF"
  primary: "#39FF14"
  on-primary: "#001200"
  secondary: "#0080FF"
  on-secondary: "#FFFFFF"
  tertiary: "#FFD700"
  on-tertiary: "#000000"
  surface: "#121212"
  on-surface: "#FFFFFF"
  surface-container: "#0A0E27"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "34px"
    fontWeight: "700"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.7"
  label-sm:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".22em"
  button-md:
    fontFamily: "Inter"
    fontSize: "16px"
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

# 07 深色模式（OLED） Design System

## 品牌与视觉方向

OLED 深色模式风格演示：纯黑背景、极简辉光、霓虹强调与 7:1 高对比排版，为夜间使用与 OLED 屏幕省电而生。

视觉关键词来自页面本身：纯黑之上， 霓虹为引；为什么选择 OLED 深色；纯黑省电；夜视护眼；霓虹聚焦；按钮与控件；夜间订阅；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg-black` | `#000000` |
| `--bg-dark-grey` | `#121212` |
| `--bg-midnight` | `#0A0E27` |
| `--text-primary` | `#FFFFFF` |
| `--text-secondary` | `#B8BCC8` |
| `--accent-neon` | `#39FF14` |
| `--accent-blue` | `#0080FF` |
| `--accent-gold` | `#FFD700` |
| `--accent-purple` | `#BF00FF` |
| `--accent-purple-text` | `#D966FF` |
| `--border` | `#26262E` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000000`、`#121212`、`#0A0E27`、`#FFFFFF`、`#B8BCC8`、`#39FF14`、`#0080FF`、`#FFD700`、`#BF00FF`、`#D966FF`、`#26262E`、`#17171A`、`#001200`、`#5AFF3D`、`#2FD80E`、`#1C1C1F`、`#8A8A93`、`#1F1F23`、`#050507`、`#1B1B1F`、`#101014`、`#1B2140`、`#2A3155`、`#9FA8CC`。

## 字体与信息层级

字体族：**Inter**、**Space Grotesk**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg-black); color: var(--text-primary); font: 16px/1.65 var(--font-body).
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.2.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; color: var(--accent-gold); font: 600 14px var(--font-body); letter-spacing: .14em; text-transform: uppercase; border: 1px solid rgba(255,215,0,.35); border-radius: 999px; padding: 7px 14px; background: rgba(255,215,0,.06).
- `.hero h1`: font-size: clamp(34px,6.4vw,56px); font-weight: 700; margin: 20px 0 16px.
- `.hero h1 .neon`: color: var(--accent-neon); text-shadow: var(--glow-minimal) rgba(57,255,20,.55).
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.t-display`: font: 700 clamp(34px,5.5vw,48px)/1.1 var(--font-display).
- `.t-display em`: font-style: normal; color: var(--accent-blue); text-shadow: var(--glow-minimal) rgba(0,128,255,.45).
- `.t-heading`: font: 700 28px/1.25 var(--font-display).
- `.t-body`: font: 400 16px/1.7 var(--font-body); color: var(--text-secondary); max-width: 640px.

## 形状、间距与深度

圆角令牌：`--radius: 12px`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 56px 0.
- `.section-sub`: color: var(--text-secondary); max-width: 560px; margin: 10px 0 30px.
- `.site-head .wrap`: display: flex; align-items: center; gap: 18px; min-height: 64px; flex-wrap: wrap; padding-top: 8px; padding-bottom: 8px.
- `.hero`: padding: 64px 0 72px; background: radial-gradient(60% 50% at 80% 0%,rgba(10,14,39,.9) 0%,var(--bg-black) 70%).
- `.hero-grid`: display: grid; gap: 44px; align-items: center.
- `.hero h1`: font-size: clamp(34px,6.4vw,56px); font-weight: 700; margin: 20px 0 16px.
- `.hero h1 .neon`: color: var(--accent-neon); text-shadow: var(--glow-minimal) rgba(57,255,20,.55).
- `.hero .lead`: color: var(--text-secondary); font-size: 18px; max-width: 520px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 0 22px; border-radius: 10px; border: 1px solid transparent; font: 600 16px var(--font-body); cursor: pointer; text-decoration: none; transition: background var(--dur) var(--ease),color var(--dur),box-shadow var(--dur),border-color var(--dur),transform var(--dur).

### 卡片与容器

- `.card`: background: var(--bg-dark-grey); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px; transition: border-color var(--dur),transform var(--dur) var(--ease).
- `.card:hover`: border-color: #3C3C46; transform: translateY(-3px).
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.card p`: color: var(--text-secondary); font-size: 15.5px.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; font-size: 15px; color: var(--text-secondary).
- `.switch input`: appearance: none; -webkit-appearance: none; width: 52px; height: 28px; border-radius: 999px; background: #1C1C1F; border: 1px solid var(--border); position: relative; cursor: pointer; transition: background var(--dur),border-color var(--dur).
- `.switch input::before`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #8A8A93; transition: transform var(--dur) var(--ease),background var(--dur).
- `.switch input:checked`: background: rgba(57,255,20,.16); border-color: var(--accent-neon).
- `.switch input:checked::before`: transform: translateX(24px); background: var(--accent-neon).
- `.field`: display: flex; flex-direction: column; gap: 8px.
- `.field label`: font-size: 15px; font-weight: 600; color: var(--text-secondary).

## 交互与动效

动效令牌：`--dur: 240ms`；`--ease: cubic-bezier(.4,0,.2,1)`。

- `:focus-visible`: outline: 3px solid var(--accent-blue); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: var(--text-primary); background: #17171A.
- `.btn-primary:hover`: background: #5AFF3D; box-shadow: var(--glow-minimal) rgba(57,255,20,.45).
- `.btn-primary:active`: transform: translateY(1px); background: #2FD80E; box-shadow: none.
- `.btn-primary:disabled`: background: #1C1C1F; color: #8A8A93; border-color: var(--border); cursor: not-allowed; box-shadow: none; transform: none.
- `.btn-secondary:hover`: background: rgba(0,128,255,.12); box-shadow: var(--glow-minimal) rgba(0,128,255,.35).
- `.btn-secondary:active`: background: rgba(0,128,255,.22); transform: translateY(1px).
- `.btn-ghost:hover`: color: var(--text-primary); background: #17171A.
- `.btn-ghost:active`: background: #1F1F23; transform: translateY(1px).
- `.card:hover`: border-color: #3C3C46; transform: translateY(-3px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent-blue); outline-offset: 2px; border-radius: 4px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent-blue); outline-offset: 2px; border-color: var(--accent-blue).

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
