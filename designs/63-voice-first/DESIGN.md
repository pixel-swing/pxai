---
name: "63 语音优先多模态"
version: "alpha"
id: "63-voice-first"
source: "style-templates/pages/63-voice-first.html"
description: "语音优先多模态风格演示页：声波可视化、聆听脉冲、处理转圈与播报动画，冷静中性色与极简外壳。"
colors:
  listening-color: "#6B8FAF"
  speaking-color: "#22C55E"
  voice-accent: "#9B8FBB"
  bg: "#FAFAFA"
  surface: "#FFFFFF"
  line: "#E3E6EB"
  ink: "#26313D"
  muted: "#5B6774"
  listening-ink: "#3A5C7C"
  accent-ink: "#635789"
  speaking-ink: "#15803D"
  background: "#FAFAFA"
  on-background: "#26313D"
  primary: "#3A5C7C"
  on-primary: "#FFFFFF"
  secondary: "#9B8FBB"
  on-secondary: "#FFFFFF"
  tertiary: "#22C55E"
  on-tertiary: "#26313D"
  on-surface: "#26313D"
typography:
  display-lg:
    fontFamily: "Manrope"
    fontSize: "2.4rem"
    fontWeight: "800"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Manrope"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Manrope"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: "600"
    lineHeight: "1"
    letterSpacing: ".2em"
  button-md:
    fontFamily: "Inter"
    fontSize: "16px"
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

# 63 语音优先多模态 Design System

## 品牌与视觉方向

语音优先多模态风格演示页：声波可视化、聆听脉冲、处理转圈与播报动画，冷静中性色与极简外壳。

视觉关键词来自页面本身：开口即达， 界面退后；风格特性；声波可视化；状态即反馈；多模态协同；按钮与控件；表单示例；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--listening-color` | `#6B8FAF` |
| `--speaking-color` | `#22C55E` |
| `--voice-accent` | `#9B8FBB` |
| `--bg` | `#FAFAFA` |
| `--surface` | `#FFFFFF` |
| `--line` | `#E3E6EB` |
| `--ink` | `#26313D` |
| `--muted` | `#5B6774` |
| `--listening-ink` | `#3A5C7C` |
| `--accent-ink` | `#635789` |
| `--speaking-ink` | `#15803D` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#6B8FAF`、`#22C55E`、`#9B8FBB`、`#FAFAFA`、`#FFFFFF`、`#E3E6EB`、`#26313D`、`#5B6774`、`#3A5C7C`、`#635789`、`#15803D`、`#FFF`、`#F1EEF8`、`#EFF3F7`、`#EDF6EF`、`#BBE5C6`、`#D9D2EA`、`#CBD3DC`、`#B9C2CC`。

## 字体与信息层级

字体族：**Manrope**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font: 400 16px/1.65 var(--font-body).
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.2.
- `.eyebrow`: display: inline-block; font: 700 12px/1 var(--font-body); letter-spacing: .18em; text-transform: uppercase; color: var(--accent-ink); background: #F1EEF8; padding: 8px 14px; border-radius: 999px; margin-bottom: 20px.
- `.hero h1`: font-size: clamp(2.2rem,6vw,3.4rem); font-weight: 800; margin-bottom: 18px.
- `.hero h1 em`: font-style: normal; color: var(--listening-ink).
- `.section h2`: font-size: clamp(1.6rem,4vw,2.1rem); font-weight: 800; margin-bottom: 10px.
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.t-meta`: font: 500 13px var(--font-body); color: var(--muted); letter-spacing: .05em.
- `.t-display`: font: 800 clamp(2.4rem,6.5vw,3.2rem)/1.15 var(--font-display).
- `.t-heading`: font: 700 1.8rem/1.25 var(--font-display).

## 形状、间距与深度

圆角令牌：`--radius: 20px`。

- `.wrap`: width: min(1080px,92vw); margin-inline: auto.
- `.hero`: display: grid; gap: 40px; padding: 72px 0 56px.
- `.hero`: grid-template-columns: 1fr 1fr; align-items: center; padding: 96px 0 72px.
- `.hero h1`: font-size: clamp(2.2rem,6vw,3.4rem); font-weight: 800; margin-bottom: 18px.
- `.hero h1 em`: font-style: normal; color: var(--listening-ink).
- `.hero p.lead`: color: var(--muted); max-width: 32em; margin-bottom: 28px.
- `.hero-actions`: display: flex; flex-wrap: wrap; gap: 14px.
- `.section`: padding: 64px 0.
- `.section h2`: font-size: clamp(1.6rem,4vw,2.1rem); font-weight: 800; margin-bottom: 10px.
- `.section-sub`: color: var(--muted); margin-bottom: 32px; max-width: 40em.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 999px; border: 1px solid transparent; font: 600 16px var(--font-body); cursor: pointer; transition: transform .2s,box-shadow .2s,background .2s,color .2s,border-color .2s.
- `.btn.primary`: background: var(--listening-ink); color: #fff.
- `.btn.primary:hover`: transform: translateY(-2px); box-shadow: 0 10px 24px rgba(58,92,124,.28).
- `.btn.secondary`: background: var(--surface); color: var(--ink); border-color: var(--line).
- `.btn.secondary:hover`: border-color: var(--listening-ink); color: var(--listening-ink).
- `.btn.ghost`: background: none; color: var(--muted).
- `.btn.ghost:hover`: color: var(--ink); text-decoration: underline; text-underline-offset: 4px.

### 卡片与容器

- `.card`: background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; transition: transform .25s,box-shadow .25s.
- `.card:hover`: transform: translateY(-5px); box-shadow: 0 16px 36px rgba(38,49,61,.08).
- `.card .ico`: display: grid; place-items: center; width: 48px; height: 48px; border-radius: 14px; background: #EFF3F7; color: var(--listening-ink); margin-bottom: 16px.
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.card p`: color: var(--muted); font-size: 15px.
- `.panel`: background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; display: grid; gap: 22px.

### 表单与选择控件

- `.switch`: position: relative; display: inline-flex.
- `.switch input`: position: absolute; opacity: 0; width: 44px; height: 24px.
- `.switch label`: display: inline-flex; align-items: center; gap: 12px; font-size: 15px; cursor: pointer.
- `.switch .track`: width: 46px; height: 26px; border-radius: 999px; background: #CBD3DC; position: relative; transition: background .2s; flex: none.
- `.switch .track::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; transition: transform .2s; box-shadow: 0 1px 3px rgba(0,0,0,.25).
- `.switch input:checked+label .track`: background: var(--listening-ink).
- `.switch input:checked+label .track::after`: transform: translateX(20px).

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(250,250,250,.9); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 0.

## 交互与动效

动效令牌：`--pulse-duration: 1.5s`。

- `:focus-visible`: outline: 3px solid var(--listening-ink); outline-offset: 2px; border-radius: 6px.
- `.nav-links a:hover`: color: var(--listening-ink).
- `.btn.primary:hover`: transform: translateY(-2px); box-shadow: 0 10px 24px rgba(58,92,124,.28).
- `.btn.secondary:hover`: border-color: var(--listening-ink); color: var(--listening-ink).
- `.btn.ghost:hover`: color: var(--ink); text-decoration: underline; text-underline-offset: 4px.
- `.btn:active`: transform: translateY(0) scale(.97).
- `.btn:disabled`: opacity: .45; cursor: not-allowed.
- `.card:hover`: transform: translateY(-5px); box-shadow: 0 16px 36px rgba(38,49,61,.08).
- `.switch input:checked+label .track`: background: var(--listening-ink).
- `.switch input:checked+label .track::after`: transform: translateX(20px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--listening-ink); outline-offset: 2px; border-radius: 6px.
- `.switch input:focus-visible+label .track`: outline: 3px solid var(--listening-ink); outline-offset: 2px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--listening-ink); outline-offset: 2px; border-color: var(--listening-ink).

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
