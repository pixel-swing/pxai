---
name: "46 维度分层"
version: "alpha"
id: "46-dimensional-layering"
source: "style-templates/pages/46-dimensional-layering.html"
description: "维度分层风格演示：四级海拔阴影、z-index 层叠卡片、背景模糊与悬浮元素构建清晰的空间层级。"
colors:
  bg: "#F5F5F5"
  surface: "#FFFFFF"
  layer-line: "#E0E0E0"
  ink: "#17181C"
  ink-soft: "#4A4D57"
  accent: "#2563EB"
  accent-deep: "#1D4ED8"
  background: "#F5F5F5"
  on-background: "#17181C"
  primary: "#2563EB"
  on-primary: "#FFFFFF"
  secondary: "#FFFFFF"
  on-secondary: "#17181C"
  tertiary: "#6B7280"
  on-tertiary: "#FFFFFF"
  on-surface: "#17181C"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "50px"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "13.5px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Inter"
    fontSize: "15.5px"
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

# 46 维度分层 Design System

## 品牌与视觉方向

维度分层风格演示：四级海拔阴影、z-index 层叠卡片、背景模糊与悬浮元素构建清晰的空间层级。

视觉关键词来自页面本身：给平面一个 Z 轴 的理由；核心视觉指纹；四级海拔阴影；刻意的重叠；背景模糊玻璃；按钮与控件；预约产品演示；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#F5F5F5` |
| `--surface` | `#FFFFFF` |
| `--layer-line` | `#E0E0E0` |
| `--ink` | `#17181C` |
| `--ink-soft` | `#4A4D57` |
| `--accent` | `#2563EB` |
| `--accent-deep` | `#1D4ED8` |
| `--elevation-1` | `0 1px 3px rgba(0,0,0,.1)` |
| `--elevation-2` | `0 4px 6px rgba(0,0,0,.1)` |
| `--elevation-3` | `0 10px 20px rgba(0,0,0,.1)` |
| `--elevation-4` | `0 20px 40px rgba(0,0,0,.15)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F5F5F5`、`#FFFFFF`、`#E0E0E0`、`#17181C`、`#4A4D57`、`#2563EB`、`#1D4ED8`、`#FFF`、`#E5E5E5`、`#9A9DA6`、`#EDEDED`、`#6B7280`、`#3B82F6`、`#EFF6FF`、`#D5D5D5`、`#1E40AF`、`#D2D2D2`。

## 字体与信息层级

字体族：**Space Grotesk**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font-family: var(--font-body); font-size: 16px; line-height: 1.6; overflow-x: hidden; background-image: radial-gradient(rgba(23,24,28,.06) 1px,transparent 1px); background-size: 24px 24px.
- `h1,h2,h3`: font-family: var(--font-display); color: var(--ink).
- `h2`: font-size: clamp(24px,3.5vw,31px); margin-bottom: 8px; position: relative; display: inline-block.
- `h2::after`: content: ""; position: absolute; left: 0; bottom: -6px; width: 52px; height: 5px; background: var(--accent); border-radius: 3px; box-shadow: var(--elevation-2).
- `.eyebrow`: display: inline-block; background: var(--surface); color: var(--accent-deep); font-weight: 600; font-size: 13.5px; letter-spacing: .06em; padding: 7px 14px; border-radius: 999px; box-shadow: var(--elevation-1); margin-bottom: 18px.
- `.hero h1`: font-size: clamp(32px,5.2vw,50px); line-height: 1.18; margin-bottom: 16px.
- `.hero h1 .acc`: color: var(--accent).
- `.card h3`: font-size: 18px; margin-bottom: 8px.
- `.t-display`: font-family: var(--font-display); font-weight: 700; font-size: clamp(34px,5.5vw,50px); line-height: 1.15.
- `.t-h`: font-family: var(--font-display); font-weight: 700; font-size: 25px.

## 形状、间距与深度

圆角令牌：`--radius: 14px`。
阴影/海拔令牌：`--elevation-1: 0 1px 3px rgba(0,0,0,.1)`；`--elevation-2: 0 4px 6px rgba(0,0,0,.1)`；`--elevation-3: 0 10px 20px rgba(0,0,0,.1)`；`--elevation-4: 0 20px 40px rgba(0,0,0,.15)`。

- `.container`: max-width: 1060px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 62px 0.
- `.hero`: padding: 76px 0 66px.
- `.hero-grid`: display: grid; gap: 48px; align-items: center.
- `.hero-grid`: grid-template-columns: 1fr 1fr.
- `.hero h1`: font-size: clamp(32px,5.2vw,50px); line-height: 1.18; margin-bottom: 16px.
- `.hero h1 .acc`: color: var(--accent).
- `.hero p.lead`: color: var(--ink-soft); max-width: 48ch; margin-bottom: 26px.
- `.hero-actions`: display: flex; gap: 12px; flex-wrap: wrap.

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font-family: var(--font-body); font-weight: 600; font-size: 15.5px; padding: 12px 24px; border-radius: 12px; border: 1px solid transparent; cursor: pointer; text-decoration: none; transition: transform .2s,box-shadow .2s,background .2s.
- `.btn:disabled`: background: #E5E5E5; color: #9A9DA6; box-shadow: none; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: var(--surface); border-radius: var(--radius); padding: 28px 24px; box-shadow: var(--elevation-2); transition: box-shadow .25s,transform .25s; position: relative.
- `.card:hover`: box-shadow: var(--elevation-4); transform: translateY(-6px).
- `.card .lvl`: position: absolute; top: 16px; right: 16px; font-size: 11.5px; font-weight: 700; letter-spacing: .08em; color: #FFF; background: var(--accent); border-radius: 6px; padding: 3px 8px; box-shadow: var(--elevation-1).
- `.card .icon`: width: 46px; height: 46px; border-radius: 12px; background: #EFF6FF; color: var(--accent-deep); display: grid; place-items: center; margin-bottom: 14px; box-shadow: var(--elevation-1).
- `.card h3`: font-size: 18px; margin-bottom: 8px.
- `.card p`: font-size: 15px; color: var(--ink-soft).
- `.panel`: background: var(--surface); border-radius: var(--radius); box-shadow: var(--elevation-3); padding: 28px 24px; display: grid; gap: 22px.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-weight: 500; font-size: 15px.
- `.switch input`: position: absolute; opacity: 0; width: 50px; height: 28px; cursor: pointer.
- `.switch input:checked+.slider`: background: var(--accent).
- `.switch input:checked+.slider::after`: transform: translateX(22px).
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--accent); outline-offset: 2px.
- `.field`: display: grid; gap: 7px.
- `input[type=text],input[type=email],textarea`: background: var(--surface); border: 1px solid #D2D2D2; border-radius: 12px; color: var(--ink); font-family: var(--font-body); font-size: 16px; padding: 12px 14px; width: 100%; box-shadow: inset 0 1px 2px rgba(0,0,0,.05); transition: border-color .2s,box-shadow .2s.

### 导航

- `header`: position: sticky; top: 0; z-index: 60; background: rgba(255,255,255,.8); backdrop-filter: blur(var(--blur-amount)); box-shadow: var(--elevation-1).
- `.nav`: display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 13px 20px; max-width: 1060px; margin: 0 auto.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-radius: 6px.
- `.nav-links a:hover`: color: var(--accent-deep).
- `.btn-primary:hover`: background: var(--accent-deep); transform: translateY(-2px); box-shadow: 0 12px 26px rgba(37,99,235,.4).
- `.btn-primary:active`: transform: translateY(0); box-shadow: 0 3px 8px rgba(37,99,235,.35).
- `.btn-secondary:hover`: box-shadow: var(--elevation-3); transform: translateY(-2px).
- `.btn-secondary:active`: box-shadow: var(--elevation-1); transform: translateY(0).
- `.btn-ghost:hover`: background: rgba(37,99,235,.08).
- `.btn-ghost:active`: background: rgba(37,99,235,.16).
- `.btn:disabled`: background: #E5E5E5; color: #9A9DA6; box-shadow: none; cursor: not-allowed; transform: none.
- `.card:hover`: box-shadow: var(--elevation-4); transform: translateY(-6px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:900px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-radius: 6px.
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--accent); outline-offset: 2px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(37,99,235,.25),var(--elevation-1).

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
