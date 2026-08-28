---
name: "65 网格渐变/极光进化"
version: "alpha"
id: "65-gradient-mesh"
source: "style-templates/pages/65-gradient-mesh.html"
description: "网格渐变/极光进化风格：多色网格渐变流动、虹彩微光与全息质感的创意品牌界面。"
colors:
  mesh-1: "#00FFFF"
  mesh-2: "#FF00FF"
  mesh-3: "#FFFF00"
  mesh-4: "#0066FF"
  mesh-5: "#00FF66"
  bg: "#0B0817"
  surface: "rgba(255,255,255,.06)"
  surface-solid: "#171226"
  fg: "#F4F2FB"
  muted: "#B9B3CC"
  border: "rgba(255,255,255,.14)"
  accent: "#B36BFF"
  background: "#0B0817"
  on-background: "#F4F2FB"
  primary: "#00FFFF"
  on-primary: "#0B0817"
  secondary: "#FF00FF"
  on-secondary: "#0B0817"
  tertiary: "#00FF66"
  on-tertiary: "#0B0817"
  on-surface: "#F4F2FB"
typography:
  display-lg:
    fontFamily: "Sora"
    fontSize: "4rem"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Sora"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Sora"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
  body-md:
    fontFamily: "Noto Sans SC"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.7"
  label-sm:
    fontFamily: "Noto Sans SC"
    fontSize: "13px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".06em"
  button-md:
    fontFamily: "Noto Sans SC"
    fontSize: "0.9375rem"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "18px"
  DEFAULT: "18px"
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

# 65 网格渐变/极光进化 Design System

## 品牌与视觉方向

网格渐变/极光进化风格：多色网格渐变流动、虹彩微光与全息质感的创意品牌界面。

视觉关键词来自页面本身：让色彩像 极光 一样 在页面上流动；核心特性；多点网格渐变；10 秒流动呼吸；虹彩全息微光；按钮与控件；抢先体验；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--mesh-1` | `#00FFFF` |
| `--mesh-2` | `#FF00FF` |
| `--mesh-3` | `#FFFF00` |
| `--mesh-4` | `#0066FF` |
| `--mesh-5` | `#00FF66` |
| `--bg` | `#0B0817` |
| `--surface` | `rgba(255,255,255,.06)` |
| `--surface-solid` | `#171226` |
| `--fg` | `#F4F2FB` |
| `--muted` | `#B9B3CC` |
| `--border` | `rgba(255,255,255,.14)` |
| `--accent` | `#B36BFF` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#00FFFF`、`#FF00FF`、`#FFFF00`、`#0066FF`、`#00FF66`、`#0B0817`、`#171226`、`#F4F2FB`、`#B9B3CC`、`#B36BFF`、`#FFF`、`#8D86A6`、`#7D7595`。

## 字体与信息层级

字体族：**Sora**、**Noto Sans SC**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: margin: 0; background: var(--bg); color: var(--fg); font-family: "Noto Sans SC",Sora,-apple-system,"Microsoft YaHei",sans-serif; line-height: 1.7; font-size: 16px; overflow-x: hidden.
- `h1,h2,h3`: line-height: 1.2; margin: 0; font-family: Sora,"Noto Sans SC",sans-serif.
- `.eyebrow`: display: inline-flex; gap: 8px; align-items: center; font-size: 13px; font-weight: 700; letter-spacing: .06em; color: var(--fg); background: var(--surface); border: 1px solid var(--border); padding: 7px 14px; border-radius: 999px; backdrop-filter: blur(8px).
- `.eyebrow svg`: width: 14px; height: 14px; color: var(--mesh-1).
- `.hero h1`: font-size: clamp(2.3rem,6vw,4rem); font-weight: 800; letter-spacing: -.02em; margin: 22px auto 16px; max-width: 16ch.
- `.sec-head h2`: font-size: 1.6rem; font-weight: 800.
- `.card h3`: font-size: 1.05rem; font-weight: 700; margin-bottom: 8px.
- `.type-row .label`: font-size: 12.5px; color: var(--muted); min-width: 150px; font-weight: 600.

## 形状、间距与深度

圆角令牌：`--radius: 18px`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 2.
- `.hero`: padding: 96px 0 64px; text-align: center.
- `.hero h1`: font-size: clamp(2.3rem,6vw,4rem); font-weight: 800; letter-spacing: -.02em; margin: 22px auto 16px; max-width: 16ch.
- `.hero p.lead`: color: var(--muted); max-width: 52ch; margin: 0 auto 30px.
- `.hero-cta`: display: flex; gap: 14px; justify-content: center; flex-wrap: wrap.
- `section`: padding: 44px 0.
- `.hero`: padding: 64px 0 44px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; font: inherit; font-weight: 700; padding: 13px 24px; border-radius: 999px; min-height: 44px; transition: transform .25s ease,box-shadow .25s ease,opacity .2s.
- `.btn:disabled`: opacity: .4; cursor: not-allowed; transform: none; box-shadow: none; animation: none.

### 卡片与容器

- `.card`: position: relative; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px; backdrop-filter: blur(12px); overflow: hidden; transition: transform .25s ease,border-color .25s ease.
- `.card::before`: content: ""; position: absolute; inset: 0 0 auto 0; height: 2px; opacity: .85; background: linear-gradient(90deg,var(--mesh-1),var(--mesh-2),var(--mesh-3)).
- `.card:hover`: transform: translateY(-5px); border-color: rgba(255,255,255,.32).
- `.card .icon`: width: 46px; height: 46px; border-radius: 12px; display: grid; place-items: center; margin-bottom: 14px; background: linear-gradient(135deg,color-mix(in srgb,var(--mesh-1) 30%,transparent),color-mix(in srgb,var(--mesh-2) 30%,transparent)); border: 1px solid var(--border).
- `.card .icon svg`: width: 22px; height: 22px; color: var(--fg).
- `.card h3`: font-size: 1.05rem; font-weight: 700; margin-bottom: 8px.
- `.card p`: color: var(--muted); font-size: 14.5px; margin: 0.

### 表单与选择控件

- `.switch`: position: relative; display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-weight: 600; font-size: 14.5px.
- `.switch input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch input:checked+.track`: background: linear-gradient(90deg,var(--mesh-1),var(--mesh-4)).
- `.switch input:checked+.track::after`: transform: translateX(22px).
- `.switch input:focus-visible+.track`: outline: 3px solid var(--mesh-1); outline-offset: 3px.
- `.field`: margin-bottom: 18px.
- `.field label`: display: block; font-weight: 700; font-size: 14.5px; margin-bottom: 8px.

### 导航

- `header`: position: sticky; top: 0; z-index: 10; background: rgba(11,8,23,.6); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border).
- `.nav`: display: flex; align-items: center; gap: 20px; height: 64px.
- `footer nav`: display: flex; gap: 16px.
- `footer nav a:hover`: color: var(--fg).

## 交互与动效

动效令牌：`--flow-duration: 10s`。

- `:focus-visible`: outline: 3px solid var(--mesh-1); outline-offset: 3px; border-radius: 6px.
- `.nav-links a:hover`: color: var(--fg).
- `.btn-primary:hover`: transform: translateY(-2px); box-shadow: 0 12px 34px rgba(0,255,200,.4).
- `.btn-primary:active`: transform: scale(.97).
- `.btn-secondary:hover`: border-color: rgba(255,255,255,.4).
- `.btn-ghost:hover`: border-color: var(--border).
- `.btn:disabled`: opacity: .4; cursor: not-allowed; transform: none; box-shadow: none; animation: none.
- `.card:hover`: transform: translateY(-5px); border-color: rgba(255,255,255,.32).
- `.switch input:checked+.track`: background: linear-gradient(90deg,var(--mesh-1),var(--mesh-4)).
- `.switch input:checked+.track::after`: transform: translateX(22px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:640px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--mesh-1); outline-offset: 3px; border-radius: 6px.
- `.switch input:focus-visible+.track`: outline: 3px solid var(--mesh-1); outline-offset: 3px.
- `.field input:focus-visible,.field textarea:focus-visible`: outline: 3px solid var(--mesh-1); outline-offset: 0; border-color: var(--mesh-1).

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
