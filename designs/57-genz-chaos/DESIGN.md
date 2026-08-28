---
name: "57 Z 世代混沌/极繁主义"
version: "alpha"
id: "57-genz-chaos"
source: "style-templates/pages/57-genz-chaos.html"
description: "Z 世代混沌极繁风格演示：撞色荧光、贴纸拼贴、跑马灯与故意失控但可用的排版。"
colors:
  chaos-pink: "#FF00FF"
  chaos-green: "#00FF00"
  chaos-yellow: "#FFFF00"
  chaos-blue: "#0000FF"
  ink: "#0D0D0D"
  paper: "#FFFDF2"
  primary: "#0D0D0D"
  on-primary: "#FFFFFF"
  surface: "#FFFDF2"
  on-surface: "#0D0D0D"
typography:
  display-lg:
    fontFamily: "Archivo Black"
    fontSize: "48px"
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Archivo Black"
    fontSize: "76px"
    fontWeight: "700"
    lineHeight: "1.05"
  headline-md:
    fontFamily: "Archivo Black"
    fontSize: "44px"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "16.5px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Archivo Black"
    fontSize: "12px"
    fontWeight: "500"
    lineHeight: "1.4"
  button-md:
    fontFamily: "Space Grotesk"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1"
rounded:
  DEFAULT: "0px"
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

# 57 Z 世代混沌/极繁主义 Design System

## 品牌与视觉方向

Z 世代混沌极繁风格演示：撞色荧光、贴纸拼贴、跑马灯与故意失控但可用的排版。

视觉关键词来自页面本身：吵一点 才有人看 极繁不道歉；风格信息；三件套，缺一不可；撞色不商量；贴纸拼贴；永动跑马灯；按钮堆放区；投稿信箱。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--chaos-pink` | `#FF00FF` |
| `--chaos-green` | `#00FF00` |
| `--chaos-yellow` | `#FFFF00` |
| `--chaos-blue` | `#0000FF` |
| `--ink` | `#0D0D0D` |
| `--paper` | `#FFFDF2` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FF00FF`、`#00FF00`、`#FFFF00`、`#0000FF`、`#0D0D0D`、`#FFFDF2`、`#FFF`、`#CFCFC4`、`#77776B`、`#FFF6D8`、`#F4FFEF`、`#FFF3FE`、`#F1F6FF`、`#7C7C70`、`#FFFBE0`、`#55554A`、`#4A4A42`、`#D9D9CD`。

## 字体与信息层级

字体族：**Archivo Black**、**Space Grotesk**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16.5px; line-height: 1.65; color: var(--ink); background: var(--paper); overflow-x: hidden; filter: saturate(var(--saturate)).
- `.eyebrow`: display: inline-block; font-weight: 700; font-size: 14px; background: var(--chaos-blue); color: #fff; padding: 7px 14px; border: 3px solid var(--ink); transform: rotate(1.6deg); margin-bottom: 24px; box-shadow: 4px 4px 0 var(--chaos-yellow).
- `h1`: font-family: var(--font-loud); font-size: clamp(38px,8vw,76px); line-height: 1.05; text-transform: uppercase.
- `h1 .a`: color: var(--chaos-pink); -webkit-text-stroke: 2px var(--ink); display: inline-block; transform: rotate(-2deg).
- `h1 .b`: background: var(--chaos-yellow); box-shadow: 6px 6px 0 var(--chaos-blue); display: inline-block; padding: 0 10px; transform: rotate(1.2deg).
- `h1 .c`: color: #fff; -webkit-text-stroke: 2px var(--ink); text-shadow: 5px 5px 0 var(--chaos-green).
- `h2`: font-family: var(--font-loud); font-size: clamp(26px,4.6vw,44px); text-transform: uppercase; display: inline-block; background: var(--ink); color: var(--chaos-green); padding: 8px 16px; transform: rotate(-1deg); margin-bottom: 14px.
- `.card h3`: font-family: var(--font-loud); font-size: 18px; margin-bottom: 8px.
- `.t-display`: font-family: var(--font-loud); font-size: clamp(28px,5vw,48px); line-height: 1.1; text-transform: uppercase; color: var(--chaos-pink); -webkit-text-stroke: 1.5px var(--ink).
- `.t-h`: font-family: var(--font-loud); font-size: 24px; background: var(--chaos-yellow); display: inline; padding: 0 6px; box-decoration-break: clone.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `.hero`: position: relative; padding: 76px 0 90px; background: repeating-linear-gradient(45deg,var(--paper) 0 34px,#FFF6D8 34px 68px); border-bottom: 4px solid var(--ink); overflow: hidden.
- `.hero-inner`: position: relative; z-index: 2; max-width: 760px.
- `.hero .lead`: margin: 24px 0 32px; max-width: 520px; font-size: 18px; font-weight: 500; background: var(--paper); border: 3px solid var(--ink); padding: 14px 16px; box-shadow: 6px 6px 0 var(--ink); transform: rotate(-.6deg).
- `.hero-cta`: display: flex; gap: 18px; flex-wrap: wrap.
- `section.pad`: padding: 68px 0; position: relative.

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font: 700 15px/1 var(--font-body); padding: 14px 22px; border: 3px solid var(--ink); background: var(--chaos-yellow); color: var(--ink); cursor: pointer; text-decoration: none; box-shadow: 5px 5px 0 var(--ink); transition: transform .12s,box-shadow .12s.
- `.btn:hover`: transform: rotate(-2deg) scale(1.04); box-shadow: 7px 7px 0 var(--chaos-pink).
- `.btn:active`: transform: translate(4px,4px); box-shadow: 1px 1px 0 var(--ink).
- `.btn:disabled`: background: #cfcfc4; color: #77776b; border-color: #77776b; box-shadow: none; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: border: 3px solid var(--ink); padding: 26px 22px; background: var(--paper); position: relative.
- `.card.c1`: box-shadow: 8px 8px 0 var(--chaos-pink); transform: rotate(-1.4deg).
- `.card.c2`: box-shadow: 8px 8px 0 var(--chaos-blue); transform: rotate(1.8deg); background: #F4FFEF.
- `.card.c3`: box-shadow: 8px 8px 0 var(--chaos-green); transform: rotate(-.8deg); background: #FFF3FE.
- `.card:hover`: animation: jitter .5s steps(2,start) infinite.
- `.card .ic`: width: 52px; height: 52px; border: 3px solid var(--ink); display: grid; place-items: center; margin-bottom: 16px; background: var(--chaos-yellow).
- `.card.c2 .ic`: background: var(--chaos-green).

### 表单与选择控件

- `.toggle-field`: display: flex; align-items: center; gap: 12px.
- `.toggle-input`: position: absolute; opacity: 0; width: 60px; height: 32px.
- `.toggle`: width: 60px; height: 32px; border: 3px solid var(--ink); background: var(--paper); position: relative; flex: none; box-shadow: 3px 3px 0 var(--ink).
- `.toggle::after`: content: ""; position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: var(--ink); transition: left .12s.
- `.toggle-input:checked+.toggle`: background: var(--chaos-green).
- `.toggle-input:checked+.toggle::after`: left: 30px; background: var(--chaos-pink).
- `.toggle-input:focus-visible+.toggle`: outline: 4px dashed var(--chaos-blue); outline-offset: 4px.

### 导航

- `header`: background: var(--paper); border-bottom: 4px solid var(--ink); position: relative; z-index: 30.
- `.nav`: display: flex; align-items: center; gap: 16px; min-height: 66px; flex-wrap: wrap; padding: 10px 0.
- `.nav a.lnk`: display: none; font-weight: 700; font-size: 15px; text-decoration: none; padding: 6px 10px; border: 2px solid transparent.
- `.nav a.lnk:hover`: border-color: var(--ink); background: var(--chaos-green); transform: rotate(2deg).
- `.nav a.lnk`: display: inline-block.
- `footer nav`: display: flex; gap: 18px; flex-wrap: wrap.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 4px dashed var(--chaos-blue); outline-offset: 3px.
- `.nav a.lnk:hover`: border-color: var(--ink); background: var(--chaos-green); transform: rotate(2deg).
- `.btn:hover`: transform: rotate(-2deg) scale(1.04); box-shadow: 7px 7px 0 var(--chaos-pink).
- `.btn:active`: transform: translate(4px,4px); box-shadow: 1px 1px 0 var(--ink).
- `.btn-secondary:hover`: box-shadow: 7px 7px 0 var(--chaos-blue).
- `.btn-ghost:hover`: background: var(--chaos-green).
- `.btn:disabled`: background: #cfcfc4; color: #77776b; border-color: #77776b; box-shadow: none; cursor: not-allowed; transform: none.
- `.card:hover`: animation: jitter .5s steps(2,start) infinite.
- `.toggle-input:checked+.toggle`: background: var(--chaos-green).
- `.toggle-input:checked+.toggle::after`: left: 30px; background: var(--chaos-pink).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(max-width:760px)`、`(min-width:820px)`、`(min-width:780px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 4px dashed var(--chaos-blue); outline-offset: 3px.
- `.toggle-input:focus-visible+.toggle`: outline: 4px dashed var(--chaos-blue); outline-offset: 4px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--chaos-pink); box-shadow: 5px 5px 0 var(--chaos-yellow),5px 5px 0 3px var(--ink).
- `footer :focus-visible`: outline-color: var(--chaos-yellow).

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
