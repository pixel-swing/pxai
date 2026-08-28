---
name: "44 孟菲斯设计"
version: "alpha"
id: "44-memphis"
source: "style-templates/pages/44-memphis.html"
description: "孟菲斯设计风格演示：80 年代后现代几何拼贴，三角形、波浪线与波点图案，明快撞色与倾斜排版的玩味界面。"
colors:
  memphis-pink: "#FF71CE"
  memphis-yellow: "#FFCE5C"
  memphis-teal: "#86CCCA"
  memphis-purple: "#6A7BB4"
  ink: "#111111"
  paper: "#FFF9EE"
  background: "#FFF9EE"
  on-background: "#111111"
  primary: "#FFCE5C"
  on-primary: "#111111"
  secondary: "#FF71CE"
  on-secondary: "#111111"
  tertiary: "#86CCCA"
  on-tertiary: "#111111"
  surface: "#FFFFFF"
  on-surface: "#111111"
typography:
  display-lg:
    fontFamily: "Archivo Black"
    fontSize: "56px"
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Archivo Black"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: ".01em"
  headline-md:
    fontFamily: "Archivo Black"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: ".01em"
  body-md:
    fontFamily: "DM Sans"
    fontSize: "16.5px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Archivo Black"
    fontSize: "13px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".22em"
  button-md:
    fontFamily: "Archivo Black"
    fontSize: "15px"
    fontWeight: "600"
    lineHeight: "1.4"
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

# 44 孟菲斯设计 Design System

## 品牌与视觉方向

孟菲斯设计风格演示：80 年代后现代几何拼贴，三角形、波浪线与波点图案，明快撞色与倾斜排版的玩味界面。

视觉关键词来自页面本身：把 几何 打碎， 再 拼 回一场派对；核心视觉指纹；几何拼贴；波点与波浪；明快撞色；按钮与控件；报名工作坊；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--memphis-pink` | `#FF71CE` |
| `--memphis-yellow` | `#FFCE5C` |
| `--memphis-teal` | `#86CCCA` |
| `--memphis-purple` | `#6A7BB4` |
| `--ink` | `#111111` |
| `--paper` | `#FFF9EE` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FF71CE`、`#FFCE5C`、`#86CCCA`、`#6A7BB4`、`#111111`、`#FFF9EE`、`#3D3D3D`、`#FFF`、`#E4DECF`、`#7A7466`、`#4A5788`、`#8A8574`。

## 字体与信息层级

字体族：**Archivo Black**、**DM Sans**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--paper); color: var(--ink); font-family: var(--font-body); font-size: 16.5px; line-height: 1.6; overflow-x: hidden.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.15; letter-spacing: .01em.
- `h2`: font-size: clamp(24px,4vw,34px); margin-bottom: 10px; display: inline-block; background: var(--memphis-yellow); padding: 4px 14px; border: var(--border); box-shadow: 6px 6px 0 var(--ink); transform: rotate(-1deg).
- `.eyebrow`: display: inline-block; font-weight: 700; font-size: 14px; letter-spacing: .14em; background: var(--memphis-teal); border: var(--border); padding: 7px 16px; transform: rotate(2deg); margin-bottom: 22px.
- `.hero h1`: font-size: clamp(34px,6.5vw,62px); max-width: 14em; margin-bottom: 8px.
- `.hero h1 .hl-pink`: background: var(--memphis-pink); padding: 0 10px; display: inline-block; transform: rotate(-2deg).
- `.hero h1 .hl-yellow`: background: var(--memphis-yellow); padding: 0 10px; display: inline-block; transform: rotate(1.5deg).
- `.card h3`: font-size: 19px; margin-bottom: 10px.
- `.t-display`: font-family: var(--font-display); font-size: clamp(36px,6vw,56px); line-height: 1.1.
- `.t-display em`: font-style: normal; background: var(--memphis-pink); padding: 0 8px.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。
阴影/海拔令牌：`--shadow-pink: 8px 8px 0 var(--memphis-pink)`；`--shadow-yellow: 8px 8px 0 var(--memphis-yellow)`；`--shadow-teal: 8px 8px 0 var(--memphis-teal)`。

- `.container`: max-width: 1060px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 64px 0; position: relative.
- `.hero`: padding: 76px 0 70px; overflow: hidden.
- `.hero-inner`: position: relative.
- `.hero h1`: font-size: clamp(34px,6.5vw,62px); max-width: 14em; margin-bottom: 8px.
- `.hero h1 .hl-pink`: background: var(--memphis-pink); padding: 0 10px; display: inline-block; transform: rotate(-2deg).
- `.hero h1 .hl-yellow`: background: var(--memphis-yellow); padding: 0 10px; display: inline-block; transform: rotate(1.5deg).
- `.hero p.lead`: max-width: 46ch; margin-bottom: 30px; color: #3D3D3D.
- `.hero-actions`: display: flex; gap: 16px; flex-wrap: wrap.

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font-family: var(--font-display); font-size: 15px; padding: 12px 22px; border: var(--border); cursor: pointer; text-decoration: none; color: var(--ink); background: #FFF; box-shadow: 6px 6px 0 var(--ink); transition: transform .12s,box-shadow .12s.
- `.btn:hover`: transform: translate(-2px,-2px); box-shadow: 8px 8px 0 var(--ink).
- `.btn:active`: transform: translate(4px,4px); box-shadow: 0 0 0 var(--ink).
- `.btn:disabled`: background: #E4DECF; color: #7A7466; border-color: #7A7466; box-shadow: none; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: #FFF; border: var(--border); padding: 28px 24px; transition: transform .15s.
- `.card:nth-child(1)`: box-shadow: var(--shadow-pink); transform: rotate(-1.2deg).
- `.card:nth-child(2)`: box-shadow: var(--shadow-yellow); transform: rotate(.8deg).
- `.card:nth-child(3)`: box-shadow: var(--shadow-teal); transform: rotate(-.6deg).
- `.card:hover`: transform: rotate(0) translateY(-6px).
- `.card .icon`: width: 52px; height: 52px; border: var(--border); display: grid; place-items: center; margin-bottom: 16px.
- `.card:nth-child(1) .icon`: background: var(--memphis-yellow); border-radius: 50%.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-weight: 700; font-size: 15.5px.
- `.switch input`: position: absolute; opacity: 0; width: 56px; height: 30px; cursor: pointer.
- `.switch input:checked+.slider`: background: var(--memphis-teal).
- `.switch input:checked+.slider::after`: transform: translateX(26px); background: var(--memphis-pink); outline: 3px solid var(--ink); outline-offset: -3px.
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--memphis-purple); outline-offset: 3px.
- `.field`: display: grid; gap: 8px.
- `input[type=text],input[type=email],textarea`: background: #FFF; border: var(--border); color: var(--ink); font-family: var(--font-body); font-size: 16px; padding: 12px 14px; width: 100%; transition: box-shadow .15s.

### 导航

- `header`: background: var(--paper); border-bottom: var(--border); position: sticky; top: 0; z-index: 50.
- `.nav`: display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 14px 20px; max-width: 1060px; margin: 0 auto.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--memphis-purple); outline-offset: 3px.
- `.nav-links a:hover`: border-bottom-color: var(--memphis-pink).
- `.btn:hover`: transform: translate(-2px,-2px); box-shadow: 8px 8px 0 var(--ink).
- `.btn:active`: transform: translate(4px,4px); box-shadow: 0 0 0 var(--ink).
- `.btn-ghost:hover`: background: rgba(134,204,202,.35); transform: none.
- `.btn:disabled`: background: #E4DECF; color: #7A7466; border-color: #7A7466; box-shadow: none; cursor: not-allowed; transform: none.
- `.card:hover`: transform: rotate(0) translateY(-6px).
- `.switch input:checked+.slider`: background: var(--memphis-teal).
- `.switch input:checked+.slider::after`: transform: translateX(26px); background: var(--memphis-pink); outline: 3px solid var(--ink); outline-offset: -3px.
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--memphis-purple); outline-offset: 3px.

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:760px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--memphis-purple); outline-offset: 3px.
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--memphis-purple); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; box-shadow: 5px 5px 0 var(--memphis-yellow).

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
