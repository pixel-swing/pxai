---
name: "49 视差叙事"
version: "alpha"
id: "49-parallax-storytelling"
source: "style-templates/pages/49-parallax-storytelling.html"
description: "视差叙事风格演示：滚动驱动的多层景深、电影式章节与渐进式内容揭示。"
colors:
  sky-deep: "#0B1B33"
  sky-mid: "#24406B"
  dusk: "#FF8C5A"
  gold: "#F5C97B"
  mist: "#F6F1E7"
  paper: "#FBF8F2"
  ink: "#1C2A42"
  ink-soft: "#445470"
  background: "#FBF8F2"
  on-background: "#1C2A42"
  primary: "#FF8C5A"
  on-primary: "#331608"
  secondary: "#F5C97B"
  on-secondary: "#331608"
  tertiary: "#24406B"
  on-tertiary: "#F6F1E7"
  surface: "#FBF8F2"
  on-surface: "#1C2A42"
typography:
  display-lg:
    fontFamily: "Noto Serif SC"
    fontSize: "54px"
    fontWeight: "900"
    lineHeight: "1.25"
  headline-lg:
    fontFamily: "Noto Serif SC"
    fontSize: "66px"
    fontWeight: "900"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Noto Serif SC"
    fontSize: "40px"
    fontWeight: "900"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Noto Serif SC"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Noto Serif SC"
    fontSize: "13px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".3em"
  button-md:
    fontFamily: "Inter"
    fontSize: "15px"
    fontWeight: "600"
    lineHeight: "1"
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

# 49 视差叙事 Design System

## 品牌与视觉方向

视差叙事风格演示：滚动驱动的多层景深、电影式章节与渐进式内容揭示。

视觉关键词来自页面本身：让页面像电影， 随滚动缓缓展开；风格信息；三种镜头语言；多层景深；滚动触发；渐进揭示；按钮与控件；预约一次叙事咨询。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--sky-deep` | `#0B1B33` |
| `--sky-mid` | `#24406B` |
| `--dusk` | `#FF8C5A` |
| `--gold` | `#F5C97B` |
| `--mist` | `#F6F1E7` |
| `--paper` | `#FBF8F2` |
| `--ink` | `#1C2A42` |
| `--ink-soft` | `#445470` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0B1B33`、`#24406B`、`#FF8C5A`、`#F5C97B`、`#F6F1E7`、`#FBF8F2`、`#1C2A42`、`#445470`、`#FFF`、`#331608`、`#07132A`、`#7A4A3F`、`#FFF8`、`#FFF6`、`#FFF7`、`#FFF5`、`#FFF4`、`#31517E`、`#203A5F`、`#152743`、`#0C1830`、`#E9E2D4`、`#B4530F`、`#ECE5D8`。

## 字体与信息层级

字体族：**Inter**、**Noto Serif SC**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 17px; line-height: 1.7; color: var(--ink); background: var(--paper); overflow-x: hidden.
- `.eyebrow`: display: inline-block; font-size: 13px; font-weight: 600; letter-spacing: .35em; text-transform: uppercase; color: var(--gold); border: 1px solid rgba(245,201,123,.5); padding: 6px 14px; border-radius: 999px; margin-bottom: 22px.
- `h1`: font-family: var(--font-display); font-weight: 900; font-size: clamp(38px,7vw,66px); line-height: 1.25; text-wrap: balance.
- `h2`: font-family: var(--font-display); font-weight: 900; font-size: clamp(28px,4vw,40px); line-height: 1.3; margin-bottom: 14px.
- `.card h3`: font-family: var(--font-display); font-size: 20px; margin-bottom: 8px.
- `.t-display`: font-family: var(--font-display); font-weight: 900; font-size: clamp(34px,5vw,54px); line-height: 1.25.
- `.t-h`: font-family: var(--font-display); font-weight: 600; font-size: 28px; line-height: 1.35.
- `.t-body`: font-size: 17px; max-width: 560px.
- `.t-label`: font-size: 13px; font-weight: 600; letter-spacing: .3em; color: #8a3d0c.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `.hero .btn-secondary`: color: var(--mist); border-color: var(--mist).
- `.hero .btn-secondary:hover`: background: var(--mist); color: var(--ink).
- `.hero`: position: relative; min-height: var(--section-height); display: grid; place-items: center; color: var(--mist); text-align: center; overflow: hidden; background: var(--sky-deep).
- `.hero-copy`: position: relative; z-index: 2; padding: 120px 20px 90px; max-width: 760px.
- `.hero p.lead`: margin: 20px auto 32px; max-width: 560px; font-size: 18px; color: #e9e2d4.
- `.hero-cta`: display: flex; gap: 14px; justify-content: center; flex-wrap: wrap.
- `section.pad`: padding: 88px 0.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; font: 600 15px/1 var(--font-body); padding: 12px 22px; border-radius: 999px; border: 2px solid transparent; cursor: pointer; text-decoration: none; transition: transform var(--transition-duration) var(--ease),box-shadow var(--transition-duration) var(--ease),background var(--transition-duration) var(--ease).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: background: #fff; border-radius: 20px; padding: 30px 26px; box-shadow: 0 2px 6px rgba(28,42,66,.06),0 18px 40px -18px rgba(28,42,66,.18); border: 1px solid #ece5d8; transition: transform var(--transition-duration) var(--ease),box-shadow var(--transition-duration) var(--ease).
- `.card:hover`: transform: translateY(-8px); box-shadow: 0 2px 6px rgba(28,42,66,.06),0 30px 56px -20px rgba(28,42,66,.28).
- `.card .ic`: width: 52px; height: 52px; border-radius: 14px; display: grid; place-items: center; background: linear-gradient(135deg,var(--sky-mid),var(--sky-deep)); color: var(--gold); margin-bottom: 18px.
- `.card h3`: font-family: var(--font-display); font-size: 20px; margin-bottom: 8px.
- `.card p`: font-size: 16px; color: var(--ink-soft).
- `.card code`: font-size: 13px; background: var(--mist); padding: 2px 7px; border-radius: 6px; color: #8a3d0c.

### 表单与选择控件

- `.toggle-field`: display: flex; align-items: center; gap: 12px.
- `.toggle-input`: position: absolute; opacity: 0; width: 44px; height: 26px.
- `.toggle`: width: 52px; height: 30px; border-radius: 999px; background: #cfc6b6; position: relative; transition: background var(--transition-duration) var(--ease); flex: none.
- `.toggle::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.25); transition: transform var(--transition-duration) var(--ease).
- `.toggle-input:checked+.toggle`: background: linear-gradient(120deg,var(--dusk),var(--gold)).
- `.toggle-input:checked+.toggle::after`: transform: translateX(22px).
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid var(--dusk); outline-offset: 3px.

### 导航

- `header`: position: fixed; inset: 0 0 auto; z-index: 50; background: rgba(11,27,51,.72); backdrop-filter: blur(10px); color: var(--mist).
- `.nav`: display: flex; align-items: center; gap: 18px; height: 64px.
- `.nav a.lnk`: text-decoration: none; font-size: 15px; opacity: .85; display: none.
- `.nav a.lnk:hover`: opacity: 1; text-decoration: underline; text-underline-offset: 6px; text-decoration-color: var(--dusk).
- `.nav a.lnk`: display: inline.
- `footer nav`: display: flex; gap: 20px; flex-wrap: wrap.

## 交互与动效

动效令牌：`--transition-duration: 600ms`；`--ease: cubic-bezier(.22,.61,.36,1)`。

- `:focus-visible`: outline: 3px solid var(--dusk); outline-offset: 3px; border-radius: 4px.
- `.skip:focus-visible`: top: 0.
- `.nav a.lnk:hover`: opacity: 1; text-decoration: underline; text-underline-offset: 6px; text-decoration-color: var(--dusk).
- `.btn-primary:hover`: transform: translateY(-3px); box-shadow: 0 12px 28px rgba(255,140,90,.35).
- `.btn-primary:active`: transform: translateY(0) scale(.98).
- `.btn-secondary:hover`: background: var(--ink); color: var(--mist).
- `.hero .btn-secondary:hover`: background: var(--mist); color: var(--ink).
- `.btn-ghost:hover`: color: var(--ink).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.
- `.card:hover`: transform: translateY(-8px); box-shadow: 0 2px 6px rgba(28,42,66,.06),0 30px 56px -20px rgba(28,42,66,.28).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:720px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--dusk); outline-offset: 3px; border-radius: 4px.
- `.skip:focus-visible`: top: 0.
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid var(--dusk); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--dusk); box-shadow: 0 0 0 4px rgba(255,140,90,.25).

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
