---
name: "62 交互光标设计"
version: "alpha"
id: "62-interactive-cursor"
source: "style-templates/pages/62-interactive-cursor.html"
description: "交互光标设计风格演示页：自定义光标、悬停变形、磁吸按钮、光标拖尾与 mix-blend-mode 反色反馈，触屏设备自动回退系统指针。"
colors:
  bg: "#0F0F12"
  surface: "#17171C"
  line: "#2B2B33"
  ink: "#F5F5F7"
  muted: "#ACACB6"
  accent: "#C9F73A"
  magnet: "#8B7CFF"
  click: "#FF6B4A"
  background: "#0F0F12"
  on-background: "#F5F5F7"
  primary: "#C9F73A"
  on-primary: "#000000"
  secondary: "#8B7CFF"
  on-secondary: "#0F0F12"
  tertiary: "#FF6B4A"
  on-tertiary: "#0F0F12"
  on-surface: "#F5F5F7"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2.6rem"
    fontWeight: "700"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.15"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "1"
    letterSpacing: ".22em"
  button-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "16px"
  DEFAULT: "16px"
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

# 62 交互光标设计 Design System

## 品牌与视觉方向

交互光标设计风格演示页：自定义光标、悬停变形、磁吸按钮、光标拖尾与 mix-blend-mode 反色反馈，触屏设备自动回退系统指针。

视觉关键词来自页面本身：光标即界面， 指针即表达；风格特性；悬停变形；磁吸引力；光标拖尾；按钮与控件；表单示例；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#0F0F12` |
| `--surface` | `#17171C` |
| `--line` | `#2B2B33` |
| `--ink` | `#F5F5F7` |
| `--muted` | `#ACACB6` |
| `--accent` | `#C9F73A` |
| `--magnet` | `#8B7CFF` |
| `--click` | `#FF6B4A` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0F0F12`、`#17171C`、`#2B2B33`、`#F5F5F7`、`#ACACB6`、`#C9F73A`、`#8B7CFF`、`#FF6B4A`、`#FFF`、`#56565F`、`#B9AEFF`、`#131318`、`#4A4A55`、`#7D7D88`。

## 字体与信息层级

字体族：**Space Grotesk**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font: 400 16px/1.65 var(--font-body); overflow-x: hidden.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.15.
- `body.has-cursor,body.has-cursor a,body.has-cursor button,body.has-cursor input,body.has-cursor textarea,body.has-cursor label`: cursor: none.
- `body.has-cursor .cursor-layer`: display: block.
- `body.is-hover .cursor-ring span`: transform: scale(var(--cursor-hover-scale)).
- `body.is-pressed .cursor-ring span`: transform: scale(.8); border-color: var(--click).
- `body.trail-off .cursor-trail`: display: none.
- `.eyebrow`: display: inline-block; font: 600 12px/1 var(--font-body); letter-spacing: .18em; text-transform: uppercase; color: var(--accent); border: 1px solid var(--line); padding: 8px 14px; border-radius: 999px; margin-bottom: 20px.
- `.hero h1`: font-size: clamp(2.2rem,6vw,3.6rem); margin-bottom: 18px.
- `.hero h1 em`: font-style: normal; color: var(--accent).

## 形状、间距与深度

圆角令牌：`--radius: 16px`。

- `.wrap`: width: min(1120px,92vw); margin-inline: auto.
- `.hero`: display: grid; gap: 40px; padding: 72px 0 56px.
- `.hero`: grid-template-columns: 1.05fr .95fr; align-items: center; padding: 96px 0 72px.
- `.hero h1`: font-size: clamp(2.2rem,6vw,3.6rem); margin-bottom: 18px.
- `.hero h1 em`: font-style: normal; color: var(--accent).
- `.hero p.lead`: color: var(--muted); max-width: 34em; margin-bottom: 28px.
- `.hero-actions`: display: flex; flex-wrap: wrap; gap: 14px; align-items: center.
- `.section`: padding: 64px 0.
- `.section h2`: font-size: clamp(1.6rem,4vw,2.2rem); margin-bottom: 10px.
- `.section-sub`: color: var(--muted); margin-bottom: 32px; max-width: 40em.

## 组件规范

### 操作按钮

- `body.has-cursor,body.has-cursor a,body.has-cursor button,body.has-cursor input,body.has-cursor textarea,body.has-cursor label`: cursor: none.
- `.btn`: display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 999px; border: 1px solid transparent; font: 600 16px var(--font-body); transition: transform .2s,box-shadow .2s,background .2s,color .2s,border-color .2s.
- `.btn.primary`: background: var(--accent); color: #0F0F12; border-color: var(--accent).
- `.btn.primary:hover`: transform: translateY(-2px); box-shadow: 0 10px 30px rgba(201,247,58,.25).
- `.btn.secondary`: background: transparent; color: var(--ink); border-color: var(--line).
- `.btn.secondary:hover`: border-color: var(--accent); color: var(--accent).
- `.btn.ghost`: background: none; color: var(--muted).

### 卡片与容器

- `.card`: background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; transition: transform .25s,border-color .25s.
- `.card:hover`: transform: translateY(-6px); border-color: var(--accent).
- `.card .ico`: display: grid; place-items: center; width: 48px; height: 48px; border-radius: 12px; border: 1px solid var(--line); color: var(--accent); margin-bottom: 16px.
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.card p`: color: var(--muted); font-size: 15px.
- `.panel`: background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; display: grid; gap: 22px.

### 表单与选择控件

- `body.has-cursor,body.has-cursor a,body.has-cursor button,body.has-cursor input,body.has-cursor textarea,body.has-cursor label`: cursor: none.
- `.switch`: position: relative; display: inline-flex.
- `.switch input`: position: absolute; opacity: 0; width: 44px; height: 24px.
- `.switch label`: display: inline-flex; align-items: center; gap: 12px; font-size: 15px; color: var(--ink).
- `.switch .track`: width: 46px; height: 26px; border-radius: 999px; background: var(--line); position: relative; transition: background .2s; flex: none.
- `.switch .track::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: var(--ink); transition: transform .2s.
- `.switch input:checked+label .track`: background: var(--accent).

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(15,15,18,.85); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: var(--accent).
- `.btn.primary:hover`: transform: translateY(-2px); box-shadow: 0 10px 30px rgba(201,247,58,.25).
- `.btn.secondary:hover`: border-color: var(--accent); color: var(--accent).
- `.btn.ghost:hover`: color: var(--ink); text-decoration: underline; text-underline-offset: 4px.
- `.btn:active`: transform: translateY(0) scale(.97).
- `.btn:disabled`: opacity: .4; filter: grayscale(1); pointer-events: none.
- `.magnet-btn:hover`: background: var(--accent); color: #0F0F12.
- `.card:hover`: transform: translateY(-6px); border-color: var(--accent).
- `.switch input:checked+label .track`: background: var(--accent).

## 响应式与无障碍

源页面断点/用户偏好查询：`(hover:hover) and (pointer:fine)`、`(min-width:760px)`、`(min-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-radius: 4px.
- `.switch input:focus-visible+label .track`: outline: 3px solid var(--accent); outline-offset: 2px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-color: var(--accent).

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
