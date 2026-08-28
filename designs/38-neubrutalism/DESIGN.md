---
name: "38 新野兽派"
version: "alpha"
id: "38-neubrutalism"
source: "style-templates/pages/38-neubrutalism.html"
description: "新野兽派（Neubrutalism）风格演示：3px 硬黑边框、4px 硬偏移阴影、高饱和撞色、零渐变零模糊、超粗大写标题。"
colors:
  shadow-color: "#000"
  yellow: "#FFEB3B"
  red: "#FF5252"
  blue: "#2196F3"
  mint: "#4ECDC4"
  mustard: "#FFDB58"
  coral: "#FF6B6B"
  ink: "#000000"
  paper: "#F9F2E0"
  card: "#FFFFFF"
  background: "#F9F2E0"
  on-background: "#000000"
  primary: "#FFEB3B"
  on-primary: "#000000"
  secondary: "#FF5252"
  on-secondary: "#000000"
  tertiary: "#4ECDC4"
  on-tertiary: "#000000"
  surface: "#FFFFFF"
  on-surface: "#000000"
typography:
  display-lg:
    fontFamily: "Archivo Black"
    fontSize: "3rem"
    fontWeight: "800"
    lineHeight: "1.05"
  headline-lg:
    fontFamily: "Archivo Black"
    fontSize: "2rem"
    fontWeight: "400"
    lineHeight: "1.12"
    letterSpacing: ".01em"
  headline-md:
    fontFamily: "Archivo Black"
    fontSize: "1.5rem"
    fontWeight: "400"
    lineHeight: "1.12"
    letterSpacing: ".01em"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "1rem"
    fontWeight: "500"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Space Grotesk"
    fontSize: ".8rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Space Grotesk"
    fontSize: ".95rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".03em"
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

# 38 新野兽派 Design System

## 品牌与视觉方向

新野兽派（Neubrutalism）风格演示：3px 硬黑边框、4px 硬偏移阴影、高饱和撞色、零渐变零模糊、超粗大写标题。

视觉关键词来自页面本身：粗野一点， 诚实 一点， 大声 一点；风格特性；高饱和撞色；按钮与控件；报名工作坊；字体级阶；General · No.38 · Neubrutalism；3px 硬黑边框、4px 硬偏移阴影、绝不使用渐变与模糊——把结构裸露出来，用高饱和撞色说话。丑得可爱，但每个像素都在干活。。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--shadow-color` | `#000` |
| `--yellow` | `#FFEB3B` |
| `--red` | `#FF5252` |
| `--blue` | `#2196F3` |
| `--mint` | `#4ECDC4` |
| `--mustard` | `#FFDB58` |
| `--coral` | `#FF6B6B` |
| `--ink` | `#000000` |
| `--paper` | `#F9F2E0` |
| `--card` | `#FFFFFF` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000`、`#FFEB3B`、`#FF5252`、`#2196F3`、`#4ECDC4`、`#FFDB58`、`#FF6B6B`、`#000000`、`#F9F2E0`、`#FFFFFF`、`#C9C2B0`、`#5A564B`、`#57534E`、`#FFFDF3`、`#B8B2A2`。

## 字体与信息层级

字体族：**Archivo Black**、**Space Grotesk**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--paper); color: var(--ink); font-size: 16px; line-height: 1.6.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.12; text-transform: uppercase; letter-spacing: .01em; font-weight: 400.
- `.sec-head h2`: font-size: clamp(1.2rem,2.6vw,1.6rem).
- `.eyebrow`: display: inline-block; background: var(--ink); color: var(--yellow); font-weight: 700; font-size: .78rem; letter-spacing: .16em; text-transform: uppercase; padding: .35rem .8rem; transform: rotate(-1.5deg).
- `.hero h1`: font-size: clamp(2.2rem,6.5vw,4rem); margin: 1rem 0.
- `.hero h1 .hl-r`: background: var(--red); color: var(--ink); padding: 0 .18em; border: var(--bd); box-shadow: 4px 4px 0 var(--ink); display: inline-block.
- `.hero h1 .hl-b`: background: var(--blue); padding: 0 .18em; border: var(--bd); box-shadow: 4px 4px 0 var(--ink); display: inline-block.
- `.card h3`: font-size: 1rem; margin-bottom: .5rem.
- `.t-display`: font-family: var(--font-display); font-size: clamp(2rem,5vw,3rem); text-transform: uppercase; line-height: 1.05.
- `.t-heading`: font-family: var(--font-display); font-size: 1.5rem; text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--radius: 0px`。
空间令牌：`--border-width: 3px`。
阴影/海拔令牌：`--shadow-offset: 4px`；`--shadow-color: #000`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 clamp(1rem,4vw,2rem).
- `section`: padding: 2.6rem 0.
- `.hero`: padding: 3.2rem 0; background: var(--paper).
- `.hero-grid`: display: grid; grid-template-columns: minmax(0,7fr) minmax(0,5fr); gap: 2rem; align-items: center.
- `.hero h1`: font-size: clamp(2.2rem,6.5vw,4rem); margin: 1rem 0.
- `.hero h1 .hl-r`: background: var(--red); color: var(--ink); padding: 0 .18em; border: var(--bd); box-shadow: 4px 4px 0 var(--ink); display: inline-block.
- `.hero h1 .hl-b`: background: var(--blue); padding: 0 .18em; border: var(--bd); box-shadow: 4px 4px 0 var(--ink); display: inline-block.
- `.hero p.lead`: font-size: 1.05rem; font-weight: 500; max-width: 32em; margin-bottom: 1.6rem; background: var(--card); border: var(--bd); padding: .8rem 1rem; box-shadow: var(--hard).
- `.hero-actions`: display: flex; gap: 1rem; flex-wrap: wrap.
- `.hero-grid`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; min-height: 46px; padding: .6rem 1.3rem; font-family: var(--font-body); font-size: .95rem; font-weight: 700; text-transform: uppercase; letter-spacing: .03em; border: var(--bd); border-radius: var(--radius); box-shadow: var(--hard); cursor: pointer.
- `.btn:hover`: transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--ink).
- `.btn:active`: transform: translate(3px,3px); box-shadow: 1px 1px 0 var(--ink).
- `.btn:disabled`: background: #C9C2B0; color: #5A564B; box-shadow: none; transform: none; cursor: not-allowed; border-color: #5A564B.

### 卡片与容器

- `.card`: border: var(--bd); box-shadow: var(--hard-lg); padding: 1.4rem; background: var(--card).
- `.card:nth-child(1)`: background: var(--mustard).
- `.card:nth-child(2)`: background: var(--card).
- `.card:nth-child(3)`: background: var(--mint).
- `.card:hover`: transform: translate(-3px,-3px); box-shadow: 10px 10px 0 var(--ink).
- `.card .ico`: display: grid; place-items: center; width: 46px; height: 46px; background: var(--card); border: var(--bd); box-shadow: 3px 3px 0 var(--ink); margin-bottom: 1rem.
- `.card:nth-child(2) .ico`: background: var(--red).

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .7rem; font-weight: 700; font-size: .9rem; text-transform: uppercase; cursor: pointer.
- `.switch input`: appearance: none; width: 58px; height: 30px; border: var(--bd); background: var(--card); position: relative; cursor: pointer; margin: 0; box-shadow: 3px 3px 0 var(--ink).
- `.switch input::after`: content: ""; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: var(--ink).
- `.switch input:checked`: background: var(--yellow).
- `.switch input:checked::after`: transform: translateX(28px); background: var(--red); border: 2px solid var(--ink).
- `.field`: display: flex; flex-direction: column; gap: .45rem.
- `.field.full`: grid-column: 1/-1.

### 导航

- `header`: background: var(--yellow); border-bottom: var(--bd); position: sticky; top: 0; z-index: 20.
- `.nav`: display: flex; align-items: center; gap: 1rem; min-height: 64px; flex-wrap: wrap; padding: .6rem 0.
- `.nav ul`: display: flex; gap: .5rem; list-style: none; flex-wrap: wrap.
- `.nav ul a`: display: inline-block; font-size: .85rem; font-weight: 700; text-transform: uppercase; border: var(--bd); background: var(--card); padding: .32rem .7rem; box-shadow: 3px 3px 0 var(--ink).
- `.nav ul a:hover`: background: var(--mint); transform: translate(-2px,-2px); box-shadow: 5px 5px 0 var(--ink).
- `.nav ul a:active`: transform: translate(2px,2px); box-shadow: 1px 1px 0 var(--ink).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px dashed var(--ink); outline-offset: 3px.
- `.nav ul a:hover`: background: var(--mint); transform: translate(-2px,-2px); box-shadow: 5px 5px 0 var(--ink).
- `.nav ul a:active`: transform: translate(2px,2px); box-shadow: 1px 1px 0 var(--ink).
- `.btn:hover`: transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--ink).
- `.btn-ghost:hover`: background: var(--mustard); box-shadow: none; transform: none.
- `.btn:active`: transform: translate(3px,3px); box-shadow: 1px 1px 0 var(--ink).
- `.btn-ghost:active`: transform: none.
- `.btn:disabled`: background: #C9C2B0; color: #5A564B; box-shadow: none; transform: none; cursor: not-allowed; border-color: #5A564B.
- `.card:hover`: transform: translate(-3px,-3px); box-shadow: 10px 10px 0 var(--ink).
- `.switch input:checked`: background: var(--yellow).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px dashed var(--ink); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--blue); outline-offset: 0; background: var(--card).

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
