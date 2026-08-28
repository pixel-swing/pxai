---
name: "09 黏土拟态"
version: "alpha"
id: "09-claymorphism"
source: "style-templates/pages/09-claymorphism.html"
description: "黏土拟态（Claymorphism）：厚边、饱满圆角、内外双层柔和阴影与马卡龙果冻色构成的软 3D 玩具感界面。"
colors:
  peach: "#FDBCB4"
  sky: "#ADD8E6"
  mint: "#98FF98"
  lilac: "#E6E6FA"
  bg: "#FFF4EC"
  card: "#FFFBF7"
  ink: "#4A3650"
  muted: "#7A6478"
  accent: "#B23E2B"
  background: "#FFF4EC"
  on-background: "#4A3650"
  primary: "#FDBCB4"
  on-primary: "#4A3650"
  secondary: "#ADD8E6"
  on-secondary: "#4A3650"
  tertiary: "#98FF98"
  on-tertiary: "#4A3650"
  surface: "#FFFBF7"
  on-surface: "#4A3650"
typography:
  display-lg:
    fontFamily: "Nunito"
    fontSize: "44px"
    fontWeight: "900"
    lineHeight: "1.12"
  headline-lg:
    fontFamily: "Nunito"
    fontSize: "54px"
    fontWeight: "900"
    lineHeight: "1.15"
  headline-md:
    fontFamily: "Nunito"
    fontSize: "32px"
    fontWeight: "900"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Nunito"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Nunito"
    fontSize: "13px"
    fontWeight: "800"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Nunito"
    fontSize: "16px"
    fontWeight: "800"
    lineHeight: "1.4"
rounded:
  radius: "20px"
  radius-lg: "28px"
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

# 09 黏土拟态 Design System

## 品牌与视觉方向

黏土拟态（Claymorphism）：厚边、饱满圆角、内外双层柔和阴影与马卡龙果冻色构成的软 3D 玩具感界面。

视觉关键词来自页面本身：捏一捏就会回弹的黏土世界；风格信息；风格特性；内外双层阴影；厚边与饱满圆角；果冻弹性动效；按钮与控件；表单示例。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--shadow-inner` | `inset -2px -2px 8px rgba(140,86,74,.16),inset 3px 3px 8px rgba(255,255,255,.9)` |
| `--shadow-outer` | `4px 4px 8px rgba(199,124,104,.28)` |
| `--peach` | `#FDBCB4` |
| `--sky` | `#ADD8E6` |
| `--mint` | `#98FF98` |
| `--lilac` | `#E6E6FA` |
| `--bg` | `#FFF4EC` |
| `--card` | `#FFFBF7` |
| `--ink` | `#4A3650` |
| `--muted` | `#7A6478` |
| `--accent` | `#B23E2B` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FDBCB4`、`#ADD8E6`、`#98FF98`、`#E6E6FA`、`#FFF4EC`、`#FFFBF7`、`#4A3650`、`#7A6478`、`#B23E2B`、`#FFF`、`#EFE7E0`、`#8A7C84`、`#FFEDE5`、`#F3E0D4`、`#F2DCCE`、`#9A8A92`、`#F0DACB`。

## 字体与信息层级

字体族：**Nunito**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--bg); color: var(--ink); font-size: 16px; line-height: 1.65.
- `h2`: font-size: clamp(24px,3.5vw,32px); font-weight: 900; margin-bottom: 6px.
- `.eyebrow`: color: var(--accent); font-size: 13px; font-weight: 900; letter-spacing: .18em.
- `h1`: font-size: clamp(34px,6vw,54px); font-weight: 900; line-height: 1.15; margin: 10px 0 14px.
- `.card h3`: font-size: 19px; font-weight: 900; margin-bottom: 6px.
- `.t-display`: font-size: 44px; font-weight: 900; line-height: 1.12.
- `.t-h`: font-size: 28px; font-weight: 800.
- `.t-body`: font-size: 16px; max-width: 46em.
- `.t-label`: font-size: 13px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: var(--accent).

## 形状、间距与深度

圆角令牌：`--border-radius: 20px`；`--radius-lg: 28px`。
空间令牌：`--border-width: 3px`。
阴影/海拔令牌：`--shadow-inner: inset -2px -2px 8px rgba(140,86,74,.16),inset 3px 3px 8px rgba(255,255,255,.9)`；`--shadow-outer: 4px 4px 8px rgba(199,124,104,.28)`。

- `.container`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 52px 0.
- `.hero`: padding: 64px 0 44px.
- `.hero-grid`: display: grid; gap: 44px; align-items: center.
- `.grid3`: display: grid; gap: 20px.
- `.grid3`: grid-template-columns: repeat(3,1fr).
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border: var(--border-width) solid #fff; border-radius: 16px; font: 800 16px var(--font-body); color: var(--ink); cursor: pointer; text-decoration: none; background: var(--card); box-shadow: var(--shadow-inner),var(--shadow-outer); transition: transform .3s var(--bounce),box-shadow var(--press),background var(--press).
- `.btn:hover`: transform: translateY(-4px); box-shadow: var(--shadow-inner),6px 8px 14px rgba(199,124,104,.32).
- `.btn:active`: transform: scale(.95); box-shadow: var(--shadow-inner),2px 2px 4px rgba(199,124,104,.25).
- `.btn:disabled`: background: #EFE7E0; color: #8A7C84; cursor: not-allowed; transform: none; box-shadow: var(--shadow-outer).

### 卡片与容器

- `.card`: padding: 26px; transition: transform .35s var(--bounce),box-shadow var(--press).
- `.card:hover`: transform: translateY(-6px) rotate(-.6deg); box-shadow: var(--shadow-inner),6px 9px 16px rgba(199,124,104,.34).
- `.card h3`: font-size: 19px; font-weight: 900; margin-bottom: 6px.
- `.card p`: color: var(--muted); font-size: 16px.
- `.panel`: padding: 28px.

### 表单与选择控件

- `.switch`: appearance: none; -webkit-appearance: none; width: 64px; height: 36px; border-radius: 999px; background: #F3E0D4; border: 3px solid #fff; box-shadow: var(--shadow-inner); position: relative; cursor: pointer; transition: background var(--press); flex: none.
- `.switch::before`: content: ""; position: absolute; top: 2px; left: 2px; width: 26px; height: 26px; border-radius: 50%; background: #fff; box-shadow: 2px 2px 6px rgba(140,86,74,.35); transition: transform .3s var(--bounce).
- `.switch:checked`: background: var(--mint).
- `.switch:checked::before`: transform: translateX(28px).
- `.field`: display: grid; gap: 8px.
- `.field label`: font-weight: 900.
- `input[type=text],input[type=email],textarea`: font: 16px var(--font-body); color: var(--ink); background: #fff; border: 3px solid #F2DCCE; border-radius: 14px; padding: 12px 14px; box-shadow: inset 2px 2px 6px rgba(140,86,74,.08); width: 100%; transition: border-color var(--press).

### 导航

- `header`: position: sticky; top: 0; z-index: 10; background: rgba(255,244,236,.92); backdrop-filter: blur(8px).
- `.nav`: display: flex; align-items: center; gap: 12px; padding: 14px 0; flex-wrap: wrap.
- `.nav ul`: display: flex; gap: 2px; list-style: none; margin-left: auto; flex-wrap: wrap.
- `.nav ul a`: display: block; padding: 8px 12px; border-radius: 12px; color: var(--muted); text-decoration: none; font-weight: 800; transition: transform .3s var(--bounce),background var(--press),color var(--press).
- `.nav ul a:hover`: background: var(--lilac); color: var(--ink); transform: translateY(-2px).

## 交互与动效

动效令牌：`--bounce: cubic-bezier(.34,1.56,.64,1)`。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `.nav ul a:hover`: background: var(--lilac); color: var(--ink); transform: translateY(-2px).
- `.btn:hover`: transform: translateY(-4px); box-shadow: var(--shadow-inner),6px 8px 14px rgba(199,124,104,.32).
- `.btn:active`: transform: scale(.95); box-shadow: var(--shadow-inner),2px 2px 4px rgba(199,124,104,.25).
- `.btn:disabled`: background: #EFE7E0; color: #8A7C84; cursor: not-allowed; transform: none; box-shadow: var(--shadow-outer).
- `.btn-ghost:hover`: background: #FFEDE5; box-shadow: none.
- `.card:hover`: transform: translateY(-6px) rotate(-.6deg); box-shadow: var(--shadow-inner),6px 9px 16px rgba(199,124,104,.34).
- `.switch:checked`: background: var(--mint).
- `.switch:checked::before`: transform: translateX(28px).
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-color: var(--peach).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-color: var(--peach).

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
