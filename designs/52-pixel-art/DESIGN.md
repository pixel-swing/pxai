---
name: "52 像素艺术"
version: "alpha"
id: "52-pixel-art"
source: "style-templates/pages/52-pixel-art.html"
description: "像素艺术风格演示：8-bit 复古像素、方块无抗锯齿、NES 有限色板与阶跃式动画。"
colors:
  ink: "#000000"
  paper: "#FCFCFC"
  bg: "#F7EFD6"
  nes-red: "#E40058"
  nes-blue: "#0058F8"
  nes-green: "#00A844"
  nes-yellow: "#F8B800"
  primary: "#E40058"
  on-primary: "#FFFFFF"
  secondary: "#0058F8"
  on-secondary: "#FFFFFF"
  tertiary: "#00A844"
  on-tertiary: "#FFFFFF"
  background: "#F7EFD6"
  on-background: "#000000"
  surface: "#FCFCFC"
  on-surface: "#000000"
typography:
  display-lg:
    fontFamily: "Press Start 2P"
    fontSize: "32px"
    fontWeight: "400"
    lineHeight: "1.5"
  headline-lg:
    fontFamily: "Press Start 2P"
    fontSize: "20px"
    fontWeight: "400"
    lineHeight: "1.6"
  headline-md:
    fontFamily: "Press Start 2P"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "1.5"
  body-md:
    fontFamily: "DotGothic16"
    fontSize: "18px"
    fontWeight: "400"
    lineHeight: "1.7"
  label-sm:
    fontFamily: "Press Start 2P"
    fontSize: "10px"
    fontWeight: "400"
    lineHeight: "1.4"
  button-md:
    fontFamily: "Press Start 2P"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "1.4"
rounded:
  DEFAULT: "0px"
spacing:
  unit: "4px"
  sm: "8px"
  md: "20px"
  lg: "32px"
  xl: "60px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 18px"
    height: "auto"
  card-standard:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.DEFAULT}"
    padding: "24px 20px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 14px"
    height: "auto"
---

# 52 像素艺术 Design System

## 品牌与视觉方向

像素艺术风格演示：8-bit 复古像素、方块无抗锯齿、NES 有限色板与阶跃式动画。

视觉关键词来自页面本身：按下开始， 回到 8-BIT 时代；风格信息；三件传家道具；方块像素；像素描边；阶跃动画；手柄按键；存档小屋。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--paper` | `#FCFCFC` |
| `--bg` | `#F7EFD6` |
| `--nes-blue` | `#0058F8` |
| `--nes-green` | `#00A844` |
| `--nes-yellow` | `#F8B800` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000000`、`#FCFCFC`、`#F7EFD6`、`#E40058`、`#0058F8`、`#00A844`、`#F8B800`、`#FFF`、`#7BC8FF`、`#9C9C9C`、`#E3E3E3`、`#FFF7DE`、`#C8C8C8`、`#767676`、`#444`、`#555`。

## 字体与信息层级

字体族：**Press Start 2P**、**DotGothic16**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 18px; line-height: 1.7; color: var(--ink); background: var(--bg); image-rendering: pixelated; -webkit-font-smoothing: none; overflow-x: hidden.
- `h1,h2,h3`: font-family: var(--font-pixel); line-height: 1.5.
- `.eyebrow`: display: inline-block; font-family: var(--font-pixel); font-size: 11px; background: var(--nes-yellow); padding: 8px 12px; margin-bottom: 24px.
- `h1`: font-size: clamp(22px,4.6vw,38px).
- `h1 .red`: color: var(--nes-red).
- `.card h3`: font-size: 13px; margin-bottom: 10px.
- `.t-display`: font-family: var(--font-pixel); font-size: clamp(20px,4vw,32px); line-height: 1.5.
- `.t-h`: font-family: var(--font-pixel); font-size: 20px; line-height: 1.6.
- `.t-body`: font-size: 18px; max-width: 560px.
- `.t-label`: font-family: var(--font-pixel); font-size: 10px; background: var(--nes-yellow); display: inline-block; padding: 6px 8px.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 1040px; margin: 0 auto; padding: 0 20px.
- `.hero`: padding: 64px 0 56px; background: var(--paper); border-bottom: var(--pixel-size) solid var(--ink).
- `.hero-grid`: display: grid; gap: 40px; align-items: center.
- `.hero-grid`: grid-template-columns: 1.15fr .85fr.
- `.hero .lead`: margin: 20px 0 30px; max-width: 520px.
- `.hero-cta`: display: flex; gap: 18px; flex-wrap: wrap.
- `section.pad`: padding: 60px 0.

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font: 400 13px/1.4 var(--font-pixel); padding: 12px 18px; cursor: pointer; text-decoration: none; border: none; background: var(--nes-red); color: #fff.
- `.btn:hover`: background: var(--ink); color: var(--nes-yellow).
- `.btn:active`: transform: translateY(var(--pixel-size)).
- `.btn:disabled`: background: #9c9c9c; color: #e3e3e3; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: var(--paper); padding: 24px 20px.
- `.card:hover`: background: #FFF7DE.
- `.card .ic`: width: 52px; height: 52px; display: grid; place-items: center; margin-bottom: 16px; color: #fff.
- `.card h3`: font-size: 13px; margin-bottom: 10px.
- `.card p`: font-size: 16px.

### 表单与选择控件

- `.toggle-field`: display: flex; align-items: center; gap: 14px.
- `.toggle-input`: position: absolute; opacity: 0; width: 56px; height: 28px.
- `.toggle`: width: 56px; height: 28px; background: #c8c8c8; position: relative; flex: none; box-shadow: 0 calc(-1*var(--pixel-size)) 0 0 var(--ink),0 var(--pixel-size) 0 0 var(--ink),calc(-1*var(--pixel-size)) 0 0 0 var(--ink),var(--pixel-size) 0 0 0 var(--ink); margin: var(--pixel-size).
- `.toggle::after`: content: ""; position: absolute; top: 4px; left: 4px; width: 20px; height: 20px; background: var(--ink).
- `.toggle-input:checked+.toggle`: background: var(--nes-green).
- `.toggle-input:checked+.toggle::after`: left: 32px; background: var(--paper).
- `.toggle-input:focus-visible+.toggle`: outline: var(--pixel-size) solid var(--nes-blue); outline-offset: 6px.

### 导航

- `header`: background: var(--paper); border-bottom: var(--pixel-size) solid var(--ink).
- `.nav`: display: flex; align-items: center; gap: 16px; min-height: 68px; flex-wrap: wrap; padding: 10px 0.
- `.nav a.lnk`: display: none; font-size: 16px; text-decoration: none; border-bottom: var(--pixel-size) solid transparent.
- `.nav a.lnk:hover`: border-bottom-color: var(--nes-red); color: var(--nes-red).
- `.nav a.lnk`: display: inline.
- `footer nav`: display: flex; gap: 20px; flex-wrap: wrap.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: var(--pixel-size) solid var(--nes-blue); outline-offset: var(--pixel-size).
- `.nav a.lnk:hover`: border-bottom-color: var(--nes-red); color: var(--nes-red).
- `.btn:hover`: background: var(--ink); color: var(--nes-yellow).
- `.btn:active`: transform: translateY(var(--pixel-size)).
- `.btn-secondary:hover`: background: var(--ink); color: #7BC8FF.
- `.btn-ghost:hover`: background: var(--ink); color: var(--paper).
- `.btn:disabled`: background: #9c9c9c; color: #e3e3e3; cursor: not-allowed; transform: none.
- `.card:hover`: background: #FFF7DE.
- `.toggle-input:checked+.toggle`: background: var(--nes-green).
- `.toggle-input:checked+.toggle::after`: left: 32px; background: var(--paper).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:860px)`、`(min-width:800px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: var(--pixel-size) solid var(--nes-blue); outline-offset: var(--pixel-size).
- `.toggle-input:focus-visible+.toggle`: outline: var(--pixel-size) solid var(--nes-blue); outline-offset: 6px.
- `input:focus-visible,textarea:focus-visible`: outline: var(--pixel-size) solid var(--nes-blue); outline-offset: 6px.
- `footer :focus-visible`: outline-color: var(--nes-yellow).

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
