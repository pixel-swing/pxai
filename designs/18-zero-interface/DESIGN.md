---
name: "18 零界面"
version: "alpha"
id: "18-zero-interface"
source: "style-templates/pages/18-zero-interface.html"
description: "零界面风格演示：极简可见 UI、中性柔和背景、语音与手势示意、AI 预测与渐进披露的环境计算界面。"
colors:
  bg: "#FAFAFA"
  bg-alt: "#F0F0F0"
  bg-warm: "#F5F1E8"
  ink: "#1C1C1E"
  ink-soft: "#4B5563"
  line: "#E4E4E7"
  ok-bg: "#DCFCE7"
  ok-ink: "#14532D"
  err-bg: "#FEE2E2"
  err-ink: "#7F1D1D"
  background: "#FAFAFA"
  on-background: "#1C1C1E"
  primary: "#1C1C1E"
  on-primary: "#FFFFFF"
  secondary: "#4B5563"
  on-secondary: "#FFFFFF"
  tertiary: "#14532D"
  on-tertiary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#1C1C1E"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "3.2rem"
    fontWeight: "600"
    lineHeight: "1.1"
    letterSpacing: "-.015em"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "3.6rem"
    fontWeight: "600"
    lineHeight: "1.15"
    letterSpacing: "-.015em"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.9rem"
    fontWeight: "600"
    lineHeight: "1.3"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Space Grotesk"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".16em"
  button-md:
    fontFamily: "Space Grotesk"
    fontSize: "0.9375rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "20px"
  DEFAULT: "20px"
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

# 18 零界面 Design System

## 品牌与视觉方向

零界面风格演示：极简可见 UI、中性柔和背景、语音与手势示意、AI 预测与渐进披露的环境计算界面。

视觉关键词来自页面本身：最好的界面，是几乎看不见的界面；风格信息；看不见的三种能力；语音优先；手势直达；情境预测；按钮与控件；表单示例。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#FAFAFA` |
| `--bg-alt` | `#F0F0F0` |
| `--bg-warm` | `#F5F1E8` |
| `--ink` | `#1C1C1E` |
| `--ink-soft` | `#4B5563` |
| `--line` | `#E4E4E7` |
| `--ok-bg` | `#DCFCE7` |
| `--ok-ink` | `#14532D` |
| `--err-bg` | `#FEE2E2` |
| `--err-ink` | `#7F1D1D` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FAFAFA`、`#F0F0F0`、`#F5F1E8`、`#1C1C1E`、`#4B5563`、`#E4E4E7`、`#DCFCE7`、`#14532D`、`#FEE2E2`、`#7F1D1D`、`#000`、`#FFF`、`#9CA3AF`、`#FFFFFF`、`#D4D4D8`。

## 字体与信息层级

字体族：**Inter**、**Space Grotesk**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: margin: 0; font-family: var(--font-body); font-size: 17px; line-height: 1.7; color: var(--ink); background: var(--bg).
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-soft).
- `h1`: font-family: var(--font-display); font-weight: 600; font-size: clamp(2.1rem,5.5vw,3.6rem); line-height: 1.15; letter-spacing: -.015em; max-width: 17em; margin: 22px auto 18px.
- `h2`: font-family: var(--font-display); font-weight: 600; font-size: clamp(1.5rem,3vw,1.9rem); letter-spacing: -.01em; margin: 0 0 8px.
- `.card h3`: font-family: var(--font-display); font-weight: 600; font-size: 20px; margin: 0 0 8px.
- `.t-display`: font-family: var(--font-display); font-weight: 600; font-size: clamp(2.2rem,5vw,3.2rem); line-height: 1.1; letter-spacing: -.015em.
- `.t-heading`: font-family: var(--font-display); font-weight: 600; font-size: 26px; line-height: 1.25.
- `.t-body`: font-size: 17px.
- `.t-label`: font-weight: 600; font-size: 14px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft).

## 形状、间距与深度

圆角令牌：`--radius: 20px`。

- `.wrap`: max-width: 1040px; margin: 0 auto; padding: 0 22px.
- `.hero`: padding: 84px 0 72px; text-align: center; background: linear-gradient(180deg,var(--bg) 0%,var(--bg-warm) 130%).
- `.hero .sub`: max-width: 34em; margin: 0 auto 34px; color: var(--ink-soft).
- `.hero-actions`: display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 52px.
- `section`: padding: 64px 0.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 46px; padding: 10px 26px; border-radius: 999px; border: 1.5px solid transparent; font: inherit; font-weight: 600; cursor: pointer; text-decoration: none; transition: background-color .3s,border-color .3s,transform .15s.
- `.btn:active`: transform: scale(.98).
- `.btn[disabled]`: background: var(--bg-alt); color: #9CA3AF; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 30px; box-shadow: 0 1px 2px rgba(28,28,30,.04); transition: box-shadow var(--reveal),transform var(--reveal).
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 14px 30px -18px rgba(28,28,30,.25).
- `.card .ico`: width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; background: var(--bg-warm); color: var(--ink); margin-bottom: 18px.
- `.card h3`: font-family: var(--font-display); font-weight: 600; font-size: 20px; margin: 0 0 8px.
- `.card p`: margin: 0; color: var(--ink-soft); font-size: 16px.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; font-weight: 500.
- `.switch input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch input:checked + .track`: background: var(--ink).
- `.switch input:checked + .track::after`: left: 27px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--ink); outline-offset: 3px.
- `.field`: margin-bottom: 26px.
- `.field label`: display: block; font-weight: 600; font-size: 15px; color: var(--ink-soft); margin-bottom: 6px.

### 导航

- `header`: position: sticky; top: 0; z-index: 20; background: rgba(250,250,250,.85); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; padding: 14px 0.

## 交互与动效

动效令牌：`--reveal: 400ms cubic-bezier(.25,.8,.35,1)`。

- `:focus-visible`: outline: 3px solid var(--ink); outline-offset: 3px; border-radius: 8px.
- `.nav-links a:hover`: color: var(--ink); background: var(--bg-alt).
- `.btn:active`: transform: scale(.98).
- `.btn-primary:hover`: background: #000.
- `.btn-secondary:hover`: border-color: var(--ink).
- `.btn-ghost:hover`: background: var(--bg-alt); color: var(--ink).
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 14px 30px -18px rgba(28,28,30,.25).
- `.switch input:checked + .track`: background: var(--ink).
- `.switch input:checked + .track::after`: left: 27px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--ink); outline-offset: 3px.

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--ink); outline-offset: 3px; border-radius: 8px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--ink); outline-offset: 3px.
- `input[type=text]:focus-visible,textarea:focus-visible`: border-bottom-color: var(--ink); outline-offset: 6px.

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
