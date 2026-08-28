---
name: "68 复古胶片"
version: "alpha"
id: "68-vintage-analog"
source: "style-templates/pages/68-vintage-analog.html"
description: "复古胶片风格：胶片颗粒、褪色暖调、漏光与拍立得相框的模拟时代怀旧视觉。"
colors:
  cream: "#F5E6C8"
  sepia: "#D4A574"
  teal: "#4A7B7C"
  teal-deep: "#3A6162"
  pink: "#E8B4B8"
  ink: "#3D2B1F"
  ink-soft: "#6B5744"
  paper: "#FDF6E6"
  light-leak-color: "rgba(255,200,100,.2)"
  warm-tint: "#F5E6C8"
  background: "#F5E6C8"
  on-background: "#3D2B1F"
  primary: "#4A7B7C"
  on-primary: "#FFFFFF"
  secondary: "#E8B4B8"
  on-secondary: "#3D2B1F"
  tertiary: "#D4A574"
  on-tertiary: "#3D2B1F"
  surface: "#FDF6E6"
  on-surface: "#3D2B1F"
typography:
  display-lg:
    fontFamily: "Fraunces"
    fontSize: "54px"
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Fraunces"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-md:
    fontFamily: "Fraunces"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.15"
  body-md:
    fontFamily: "Karla"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Special Elite"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".16em"
  button-md:
    fontFamily: "Karla"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "8px"
  DEFAULT: "8px"
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

# 68 复古胶片 Design System

## 品牌与视觉方向

复古胶片风格：胶片颗粒、褪色暖调、漏光与拍立得相框的模拟时代怀旧视觉。

视觉关键词来自页面本身：把时间冲洗成 一卷暖色底片；风格档案；冲印工艺；银盐颗粒；漏光与暖调；拍立得相框；按钮与控件；冲印预约。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--cream` | `#F5E6C8` |
| `--sepia` | `#D4A574` |
| `--teal` | `#4A7B7C` |
| `--teal-deep` | `#3A6162` |
| `--pink` | `#E8B4B8` |
| `--ink` | `#3D2B1F` |
| `--ink-soft` | `#6B5744` |
| `--paper` | `#FDF6E6` |
| `--light-leak-color` | `rgba(255,200,100,.2)` |
| `--warm-tint` | `#F5E6C8` |
| `--shadow` | `0 10px 24px rgba(61,43,31,.18)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F5E6C8`、`#D4A574`、`#4A7B7C`、`#3A6162`、`#E8B4B8`、`#3D2B1F`、`#6B5744`、`#FDF6E6`、`#DFA0A5`、`#CBBFA8`、`#9C917C`、`#7A705D`、`#FBF3E4`、`#E9C89A`、`#5C8D8E`、`#F0C9CC`、`#FFFBF0`、`#98876F`。

## 字体与信息层级

字体族：**Fraunces**、**Karla**、**Special Elite**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--cream); color: var(--ink); font-family: var(--font-body); font-size: 17px; line-height: 1.7; overflow-x: hidden.
- `body::before`: content: ""; position: fixed; inset: 0; z-index: 8; pointer-events: none; opacity: var(--grain-opacity); background-image: url('data:image/svg+xml; utf8,<svg xmlns="http: //www.w3.org/2000/svg" width="180" height="180"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2"/><feColorMatrix type="saturate" values="0"/></filter><rect width="180" height="180" filter="url(%23n)" opacity="0.55"/></svg>').
- `body::after`: content: ""; position: fixed; inset: -20%; z-index: 7; pointer-events: none; mix-blend-mode: screen; background: radial-gradient(46% 34% at 84% 8%,var(--light-leak-color),transparent 70%),radial-gradient(30% 26% at 6% 88%,rgba(232,180,184,.25),transparent 70%); animation: leak 9s ease-in-out infinite alternate.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.15.
- `.sec-head h2`: font-size: clamp(26px,3.4vw,36px); font-weight: 800.
- `.eyebrow`: font-family: var(--font-type); font-size: 14px; letter-spacing: .18em; text-transform: uppercase; color: var(--teal-deep); margin-bottom: 14px.
- `.hero h1`: font-size: clamp(40px,6.4vw,72px); font-weight: 800; margin-bottom: 18px.
- `.hero h1 em`: font-style: italic; font-weight: 500; color: var(--teal-deep).
- `.card h3`: font-size: 21px; font-weight: 800; margin-bottom: 10px.
- `.t-display`: font-family: var(--font-display); font-weight: 800; font-size: clamp(34px,5vw,54px).

## 形状、间距与深度

圆角令牌：`--radius: 8px`。
阴影/海拔令牌：`--shadow: 0 10px 24px rgba(61,43,31,.18)`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 24px.
- `section`: padding: 56px 0; border-top: 2px dashed rgba(61,43,31,.28).
- `.hero`: border-top: none; padding: 72px 0 56px.
- `.hero-grid`: display: grid; grid-template-columns: 6fr 5fr; gap: 44px; align-items: center.
- `.hero h1`: font-size: clamp(40px,6.4vw,72px); font-weight: 800; margin-bottom: 18px.
- `.hero h1 em`: font-style: italic; font-weight: 500; color: var(--teal-deep).
- `.hero .sub`: color: var(--ink-soft); max-width: 32em; margin-bottom: 28px; font-size: 18px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap; align-items: center.
- `.hero-grid`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-weight: 700; font-size: 15px; padding: 12px 24px; border: 2px solid var(--ink); border-radius: var(--radius); background: var(--teal); color: #FDF6E6; cursor: pointer; text-decoration: none; box-shadow: 3px 3px 0 rgba(61,43,31,.75); transition: transform .25s ease,box-shadow .25s ease,background .25s.
- `.btn:hover`: background: var(--teal-deep); transform: translate(-1px,-1px); box-shadow: 4px 4px 0 rgba(61,43,31,.75).
- `.btn:active`: transform: translate(2px,2px); box-shadow: 1px 1px 0 rgba(61,43,31,.75).
- `.btn.secondary`: background: var(--pink); color: var(--ink).
- `.btn.secondary:hover`: background: #DFA0A5.
- `.btn.ghost`: background: transparent; border-color: transparent; box-shadow: none; color: var(--teal-deep); text-decoration: underline; text-underline-offset: 6px.
- `.btn.ghost:hover`: color: var(--ink); transform: none.

### 卡片与容器

- `.card`: background: var(--paper); border: 1px solid rgba(61,43,31,.3); border-radius: var(--radius); padding: 26px; box-shadow: var(--shadow); position: relative; transition: transform .3s ease.
- `.card:nth-child(1)`: transform: rotate(-1deg).
- `.card:nth-child(3)`: transform: rotate(1.2deg).
- `.card:hover`: transform: rotate(0) translateY(-4px).
- `.card::before`: content: ""; position: absolute; top: -10px; left: 50%; transform: translateX(-50%) rotate(-2deg); width: 88px; height: 22px; background: rgba(212,165,116,.55); border: 1px dashed rgba(61,43,31,.35).
- `.card svg`: color: var(--teal-deep); margin-bottom: 14px.
- `.card h3`: font-size: 21px; font-weight: 800; margin-bottom: 10px.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: 12px.
- `.switch`: appearance: none; width: 58px; height: 30px; border: 2px solid var(--ink); border-radius: 999px; background: var(--paper); position: relative; cursor: pointer; flex: none; transition: background .25s.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: var(--sepia); border: 1px solid var(--ink); transition: transform .25s.
- `.switch:checked`: background: var(--teal).
- `.switch:checked::after`: transform: translateX(27px); background: var(--cream).
- `.switch-row label`: font-weight: 700; font-size: 15px; cursor: pointer.
- `.field`: margin-bottom: 20px.

### 导航

- `header`: background: var(--paper); border-bottom: 2px solid var(--ink); box-shadow: 0 2px 0 rgba(61,43,31,.15).
- `.nav`: display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 16px 0; flex-wrap: wrap.
- `nav ul`: display: flex; gap: 22px; list-style: none; align-items: center; flex-wrap: wrap.
- `nav a`: font-weight: 700; font-size: 15px; text-decoration: none; color: var(--ink-soft); transition: color .25s.
- `nav a:hover`: color: var(--teal-deep); text-decoration: underline; text-underline-offset: 5px; text-decoration-style: wavy.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--teal); outline-offset: 3px.
- `nav a:hover`: color: var(--teal-deep); text-decoration: underline; text-underline-offset: 5px; text-decoration-style: wavy.
- `.btn:hover`: background: var(--teal-deep); transform: translate(-1px,-1px); box-shadow: 4px 4px 0 rgba(61,43,31,.75).
- `.btn:active`: transform: translate(2px,2px); box-shadow: 1px 1px 0 rgba(61,43,31,.75).
- `.btn.secondary:hover`: background: #DFA0A5.
- `.btn.ghost:hover`: color: var(--ink); transform: none.
- `.btn:disabled`: background: #CBBFA8; border-color: #9C917C; color: #7A705D; box-shadow: none; cursor: not-allowed; transform: none.
- `.card:hover`: transform: rotate(0) translateY(-4px).
- `.switch:checked`: background: var(--teal).
- `.switch:checked::after`: transform: translateX(27px); background: var(--cream).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:860px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--teal); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--teal); outline-offset: 2px.

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
