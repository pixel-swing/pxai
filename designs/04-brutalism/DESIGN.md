---
name: "04 野兽派"
version: "alpha"
id: "04-brutalism"
source: "style-templates/pages/04-brutalism.html"
description: "野兽派（Brutalism）风格演示：零圆角、3px 粗黑边框、4px 硬偏移阴影、瞬时切换与超粗大写标题。"
colors:
  red: "#FF0000"
  blue: "#0000FF"
  yellow: "#FFFF00"
  black: "#000000"
  white: "#FFFFFF"
  green: "#00FF00"
  magenta: "#FF00FF"
  primary: "#FF0000"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
typography:
  display-lg:
    fontFamily: "Archivo Black"
    fontSize: "58px"
    fontWeight: "800"
    lineHeight: "1.05"
  headline-lg:
    fontFamily: "Archivo Black"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: ".01em"
  headline-md:
    fontFamily: "Archivo Black"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: ".01em"
  body-md:
    fontFamily: "Arial"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Courier New"
    fontSize: "14px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".22em"
  button-md:
    fontFamily: "Arial"
    fontSize: "16px"
    fontWeight: "800"
    lineHeight: "1.4"
rounded:
  radius: "0px"
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

# 04 野兽派 Design System

## 品牌与视觉方向

野兽派（Brutalism）风格演示：零圆角、3px 粗黑边框、4px 硬偏移阴影、瞬时切换与超粗大写标题。

视觉关键词来自页面本身：反精致。 直给的界面。；三条铁律；硬阴影 4×4；瞬时切换；按钮与控件；表单示例；字体级阶；Brutalism / Anti-Design / 1950s。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--border` | `var(--bw) solid #000` |
| `--shadow` | `4px 4px 0 #000` |
| `--shadow-lg` | `8px 8px 0 #000` |
| `--red` | `#FF0000` |
| `--blue` | `#0000FF` |
| `--yellow` | `#FFFF00` |
| `--black` | `#000000` |
| `--white` | `#FFFFFF` |
| `--green` | `#00FF00` |
| `--magenta` | `#FF00FF` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000`、`#FF0000`、`#0000FF`、`#FFFF00`、`#000000`、`#FFFFFF`、`#00FF00`、`#FF00FF`、`#FFF`、`#D5D5D5`、`#5A5A5A`、`#595959`、`#E6E6E6`。

## 字体与信息层级

字体族：**Archivo Black**、**Arial**、**Courier New**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); color: #000; background: #fff; font-size: 16px; line-height: 1.6; overflow-x: hidden; background-image: linear-gradient(rgba(0,0,0,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.08) 1px,transparent 1px); background-size: 40px 40px.
- `h1,h2,h3`: font-family: var(--font-display); text-transform: uppercase; line-height: 1.1; letter-spacing: .01em.
- `.eyebrow`: display: inline-block; font-family: var(--font-mono); font-weight: 700; font-size: 14px; letter-spacing: .18em; text-transform: uppercase; background: #000; color: #fff; padding: 6px 12px.
- `h1`: font-size: clamp(38px,8.5vw,80px); margin: 20px 0 18px.
- `h1 .hl`: background: var(--yellow); box-shadow: var(--shadow); padding: 0 10px; display: inline-block.
- `.hero-art .label`: position: absolute; right: 14px; bottom: 10px; font-family: var(--font-mono); font-weight: 700; font-size: 13px; text-transform: uppercase.
- `h2`: font-size: clamp(26px,4.5vw,40px); display: inline-block; background: #000; color: #fff; padding: 6px 16px; margin-bottom: 14px.
- `h3`: font-size: 20px; margin-bottom: 10px.
- `.t-display`: font-family: var(--font-display); font-size: clamp(34px,6vw,58px); text-transform: uppercase; line-height: 1.05.
- `.t-heading`: font-family: var(--font-display); font-size: 28px; text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--border-radius: 0px`。
阴影/海拔令牌：`--shadow: 4px 4px 0 #000`；`--shadow-lg: 8px 8px 0 #000`。

- `.container`: width: min(1100px,92%); margin-inline: auto.
- `.hero`: padding: 64px 0 56px; position: relative.
- `.hero-grid`: display: grid; gap: 36px; align-items: start.
- `.hero-grid`: grid-template-columns: 1.25fr .75fr.
- `.hero-actions`: display: flex; flex-wrap: wrap; gap: 18px; margin-top: 30px.
- `.hero-art`: position: relative; min-height: 280px; border: var(--border); background: #fff; box-shadow: var(--shadow-lg).
- `.hero-art .block-red`: position: absolute; left: 24px; top: 26px; width: 44%; height: 38%; background: var(--red); border: var(--border).
- `.hero-art .block-blue`: position: absolute; right: 22px; top: 20%; width: 34%; aspect-ratio: 1; border-radius: 50%; background: var(--blue); border: var(--border).
- `.hero-art .block-green`: position: absolute; left: 18%; bottom: 22px; width: 52%; height: 26%; background: var(--green); border: var(--border); transform: rotate(-3deg).
- `.hero-art .label`: position: absolute; right: 14px; bottom: 10px; font-family: var(--font-mono); font-weight: 700; font-size: 13px; text-transform: uppercase.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 8px.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; font-size: 16px; font-weight: 800; text-transform: uppercase; text-decoration: none; font-family: var(--font-body); border: var(--border); border-radius: var(--border-radius); box-shadow: var(--shadow); cursor: pointer; transition: none.
- `.btn:hover`: transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #000.
- `.btn:active`: transform: translate(4px,4px); box-shadow: 0 0 0 #000.
- `.btn:disabled`: background: #d5d5d5; color: #5a5a5a; box-shadow: none; transform: none; cursor: not-allowed; border-color: #5a5a5a.

### 卡片与容器

- `.card:nth-child(2)`: transform: rotate(1.2deg).
- `.card:nth-child(3)`: transform: rotate(-1.2deg).
- `.card`: background: #fff; border: var(--border); box-shadow: var(--shadow-lg); padding: 24px.
- `.card:hover`: background: var(--yellow); box-shadow: var(--shadow).
- `.card:nth-child(2)`: background: var(--yellow).
- `.card:nth-child(2):hover`: background: var(--green).
- `.card p`: font-size: 16px.

### 表单与选择控件

- `::selection`: background: var(--yellow).
- `.switch-input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-weight: 800; text-transform: uppercase; font-size: 15px.
- `.switch-input:checked+.switch .track`: background: var(--green).
- `.switch-input:checked+.switch .knob`: transform: translateX(28px).
- `.switch-input:focus-visible+.switch .track`: outline: var(--bw) solid var(--blue); outline-offset: 3px.
- `.field`: display: grid; gap: 8px.

### 导航

- `.site-header`: border-bottom: var(--border); background: #fff; position: sticky; top: 0; z-index: 50.
- `.nav`: display: flex; align-items: center; gap: 16px; padding: 14px 0.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 8px.

## 交互与动效

动效令牌：`--transition-duration: 0s`。

- `:focus-visible`: outline: var(--bw) solid var(--blue); outline-offset: 3px.
- `.nav-links a:hover`: background: #000; color: #fff.
- `.btn:hover`: transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #000.
- `.btn:active`: transform: translate(4px,4px); box-shadow: 0 0 0 #000.
- `.btn-secondary:focus-visible`: outline-color: var(--magenta).
- `.btn:disabled`: background: #d5d5d5; color: #5a5a5a; box-shadow: none; transform: none; cursor: not-allowed; border-color: #5a5a5a.
- `.card:hover`: background: var(--yellow); box-shadow: var(--shadow).
- `.card:nth-child(2):hover`: background: var(--green).
- `.switch-input:checked+.switch .track`: background: var(--green).
- `.switch-input:checked+.switch .knob`: transform: translateX(28px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:800px)`、`(min-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: var(--bw) solid var(--blue); outline-offset: 3px.
- `.btn-secondary:focus-visible`: outline-color: var(--magenta).
- `.switch-input:focus-visible+.switch .track`: outline: var(--bw) solid var(--blue); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: var(--bw) solid var(--blue); outline-offset: 2px; box-shadow: 4px 4px 0 var(--yellow).
- `.footer-links a:focus-visible`: outline-color: var(--yellow).

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
