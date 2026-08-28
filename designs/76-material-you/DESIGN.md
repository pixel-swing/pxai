---
name: "76 Material You（MD3 移动端）"
version: "alpha"
id: "76-material-you"
source: "style-templates/pages/76-material-you.html"
description: "Material You（MD3）移动端风格演示：胶囊按钮、状态层叠加、浮动标签输入、FAB 与色调表面。"
colors:
  md3-bg: "#FFFBFE"
  md3-on-surface: "#1C1B1F"
  md3-on-variant: "#49454F"
  md3-primary: "#6750A4"
  md3-on-primary: "#FFFFFF"
  md3-primary-container: "#EADDFF"
  md3-on-primary-container: "#21005D"
  md3-sec-container: "#E8DEF8"
  md3-on-sec-container: "#1D192B"
  md3-tertiary: "#7D5260"
  md3-tert-container: "#FFD8E4"
  md3-on-tert-container: "#31111D"
  md3-surface-container: "#F3EDF7"
  md3-field: "#E7E0EC"
  md3-outline: "#79747E"
  md3-outline-var: "#CAC4D0"
  primary: "#6750A4"
  on-primary: "#FFFFFF"
  surface: "#FFFBFE"
  on-surface: "#1C1B1F"
typography:
  display-lg:
    fontFamily: "Roboto"
    fontSize: "40px"
    fontWeight: "400"
    lineHeight: "1.12"
  headline-lg:
    fontFamily: "Roboto"
    fontSize: "40px"
    fontWeight: "400"
    lineHeight: "1.18"
  headline-md:
    fontFamily: "Roboto"
    fontSize: "26px"
    fontWeight: "500"
    lineHeight: "1.25"
  body-md:
    fontFamily: "Roboto"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Roboto"
    fontSize: "12px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".8px"
  button-md:
    fontFamily: "Roboto"
    fontSize: "15px"
    fontWeight: "500"
    lineHeight: "1.4"
rounded:
  radius-pill: "999px"
  radius-lg: "28px"
  radius-md: "16px"
  DEFAULT: "999px"
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

# 76 Material You（MD3 移动端） Design System

## 品牌与视觉方向

Material You（MD3）移动端风格演示：胶囊按钮、状态层叠加、浮动标签输入、FAB 与色调表面。

视觉关键词来自页面本身：色彩因你而生， 表面随调而变；三层色调语言；色调表面；状态层叠加；强调缓动；按钮与控件；加入测试计划；MD3 色彩令牌。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--md3-bg` | `#FFFBFE` |
| `--md3-on-surface` | `#1C1B1F` |
| `--md3-on-variant` | `#49454F` |
| `--md3-primary` | `#6750A4` |
| `--md3-on-primary` | `#FFFFFF` |
| `--md3-primary-container` | `#EADDFF` |
| `--md3-on-primary-container` | `#21005D` |
| `--md3-sec-container` | `#E8DEF8` |
| `--md3-on-sec-container` | `#1D192B` |
| `--md3-tertiary` | `#7D5260` |
| `--md3-tert-container` | `#FFD8E4` |
| `--md3-on-tert-container` | `#31111D` |
| `--md3-surface-container` | `#F3EDF7` |
| `--md3-field` | `#E7E0EC` |
| `--md3-outline` | `#79747E` |
| `--md3-outline-var` | `#CAC4D0` |
| `--elev-3` | `0 4px 8px 3px rgba(0,0,0,.15),0 1px 3px rgba(0,0,0,.3)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FFFBFE`、`#1C1B1F`、`#49454F`、`#6750A4`、`#FFFFFF`、`#EADDFF`、`#21005D`、`#E8DEF8`、`#1D192B`、`#7D5260`、`#FFD8E4`、`#31111D`、`#F3EDF7`、`#E7E0EC`、`#79747E`、`#CAC4D0`、`#FFF`、`#E6E0E9`。

## 字体与信息层级

字体族：**Roboto**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); background: #E8DEF8; color: var(--md3-on-surface); line-height: 1.6; display: flex; justify-content: center; padding: 22px 10px 44px.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 6px; background: var(--md3-primary-container); color: var(--md3-on-primary-container); font-size: 13px; font-weight: 500; padding: 8px 14px; border-radius: var(--radius-pill); position: relative.
- `h1`: font-size: clamp(32px,9.5vw,40px); line-height: 1.18; font-weight: 400; margin: 16px 0 12px; position: relative.
- `h1 strong`: font-weight: 700; color: var(--md3-primary).
- `h2`: font-size: 26px; font-weight: 500; line-height: 1.25; margin: 6px 0 18px.
- `.card h3`: font-size: 19px; font-weight: 700; margin-bottom: 6px.
- `.t-display`: font-size: 40px; font-weight: 400; line-height: 1.12.
- `.t-title`: font-size: 26px; font-weight: 500; line-height: 1.25.
- `.t-body`: font-size: 17px; line-height: 1.6.
- `.t-label`: font-size: 12px; font-weight: 500; letter-spacing: .8px.

## 形状、间距与深度

圆角令牌：`--radius-pill: 999px`；`--radius-lg: 28px`；`--radius-md: 16px`。
空间令牌：`--md3-primary-container: #EADDFF`；`--md3-on-primary-container: #21005D`；`--md3-sec-container: #E8DEF8`；`--md3-on-sec-container: #1D192B`；`--md3-tert-container: #FFD8E4`；`--md3-on-tert-container: #31111D`；`--md3-surface-container: #F3EDF7`。
阴影/海拔令牌：`--elev-3: 0 4px 8px 3px rgba(0,0,0,.15),0 1px 3px rgba(0,0,0,.3)`。

- `.phone`: width: 100%; max-width: 430px; background: var(--md3-bg); border: 10px solid #1C1B1F; border-radius: 52px; overflow: clip; box-shadow: 0 24px 48px rgba(103,80,164,.30).
- `.hero`: position: relative; overflow: hidden; background: var(--md3-surface-container); padding: 40px 22px 44px; border-radius: 0 0 var(--radius-lg) var(--radius-lg).
- `.hero-actions`: display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap; position: relative.

## 组件规范

### 操作按钮

- `.btn-filled:focus-visible,.fab:focus-visible`: outline-color: var(--md3-on-surface).
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 12px 24px; border: 0; border-radius: var(--radius-pill); font: inherit; font-size: 15px; font-weight: 500; cursor: pointer; text-decoration: none; transition: transform 100ms var(--ease),box-shadow var(--dur) var(--ease).
- `.btn:active`: transform: scale(.95).
- `.btn:disabled`: background: rgba(28,27,31,.12); color: rgba(28,27,31,.38); cursor: not-allowed; transform: none.
- `.fab`: width: 56px; height: 56px; border: 0; border-radius: var(--radius-md); background: var(--md3-tertiary); color: #fff; display: grid; place-items: center; cursor: pointer; box-shadow: var(--elev-3); transform: translateY(-64px); transition: transform 100ms var(--ease).
- `.fab:active`: transform: translateY(-64px) scale(.95).

### 卡片与容器

- `.card`: border-radius: var(--radius-lg); padding: 20px; margin-bottom: 12px.
- `.card.c1`: background: var(--md3-sec-container); color: var(--md3-on-sec-container).
- `.card.c2`: background: var(--md3-surface-container).
- `.card.c3`: background: #FFFFFF; box-shadow: 0 1px 3px 1px rgba(0,0,0,.12).
- `.card h3`: font-size: 19px; font-weight: 700; margin-bottom: 6px.
- `.card p`: font-size: 16px; color: var(--md3-on-variant).
- `.card.c1 p`: color: var(--md3-on-sec-container).

### 表单与选择控件

- `.tf input,.tf textarea`: width: 100%; min-height: 56px; background: var(--md3-field); border: 0; border-bottom: 1px solid var(--md3-outline); border-radius: 4px 4px 0 0; padding: 24px 16px 8px; font: inherit; font-size: 16px; color: var(--md3-on-surface); caret-color: var(--md3-primary).
- `.tf textarea`: min-height: 112px; resize: vertical.
- `.tf input::placeholder,.tf textarea::placeholder`: color: transparent.
- `.tf input:focus,.tf textarea:focus`: box-shadow: inset 0 -2px 0 0 var(--md3-primary).
- `.tf input:focus-visible,.tf textarea:focus-visible`: outline: 2px solid var(--md3-primary); outline-offset: 1px; border-radius: 4px.
- `.tf :is(input,textarea):focus ~ label,.tf :is(input,textarea):not(:placeholder-shown) ~ label`: top: 7px; font-size: 12px.
- `.tf :is(input,textarea):focus ~ label`: color: var(--md3-primary).

### 导航

- `.nav`: display: flex; align-items: center; flex-wrap: wrap; gap: 2px; padding: 6px 14px 10px.
- `.navbar`: position: sticky; bottom: 0; z-index: 40; background: var(--md3-surface-container); display: flex; justify-content: space-around; padding: 10px 8px 20px.
- `.navbar::after`: content: ""; position: absolute; bottom: 6px; left: 50%; transform: translateX(-50%); width: 112px; height: 4px; border-radius: 2px; background: var(--md3-on-surface); opacity: .85.

## 交互与动效

动效令牌：`--ease: cubic-bezier(.2,0,0,1)`；`--dur: 250ms`。

- `:focus-visible`: outline: 3px solid var(--md3-primary); outline-offset: 2px.
- `.btn-filled:focus-visible,.fab:focus-visible`: outline-color: var(--md3-on-surface).
- `.sl:hover::after`: opacity: .08.
- `.sl:active::after`: opacity: .14.
- `.nav-link:hover`: background: var(--md3-surface-container); color: var(--md3-on-surface).
- `.btn:active`: transform: scale(.95).
- `.btn:disabled`: background: rgba(28,27,31,.12); color: rgba(28,27,31,.38); cursor: not-allowed; transform: none.
- `.sw:checked`: background: var(--md3-primary); border-color: var(--md3-primary).
- `.sw:checked::before`: transform: translateX(24px); background: #fff.
- `.fab:active`: transform: translateY(-64px) scale(.95).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--md3-primary); outline-offset: 2px.
- `.btn-filled:focus-visible,.fab:focus-visible`: outline-color: var(--md3-on-surface).
- `.tf input:focus-visible,.tf textarea:focus-visible`: outline: 2px solid var(--md3-primary); outline-offset: 1px; border-radius: 4px.

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
