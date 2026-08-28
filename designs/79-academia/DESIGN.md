---
name: "79 学院派（移动端）"
version: "alpha"
id: "79-academia"
source: "style-templates/pages/79-academia.html"
description: "桃花心木、羊皮纸与黄铜构成的学院派移动端风格演示：拱顶图像、首字下沉、罗马数字、暗角与衬线排印。"
colors:
  bg: "#1C1714"
  bg-alt: "#251E19"
  fg: "#E8DFD4"
  muted: "#3D332B"
  muted-fg: "#9C8B7A"
  border: "#4A3F35"
  brass: "#C9A962"
  brass-hi: "#DBBE81"
  crimson: "#8B2635"
  primary: "#E8DFD4"
  on-primary: "#000000"
  surface: "#1C1714"
  on-surface: "#E8DFD4"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: "40px"
    fontWeight: "600"
    lineHeight: "1.12"
  headline-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: "42px"
    fontWeight: "600"
    lineHeight: "1.15"
  headline-md:
    fontFamily: "Cormorant Garamond"
    fontSize: "30px"
    fontWeight: "600"
    lineHeight: "1.2"
  body-md:
    fontFamily: "Crimson Pro"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.7"
  label-sm:
    fontFamily: "Cinzel"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".3em"
  button-md:
    fontFamily: "Cinzel"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".1em"
rounded:
  radius: "4px"
  DEFAULT: "4px"
spacing:
  pad: "24px"
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

# 79 学院派（移动端） Design System

## 品牌与视觉方向

桃花心木、羊皮纸与黄铜构成的学院派移动端风格演示：拱顶图像、首字下沉、罗马数字、暗角与衬线排印。

视觉关键词来自页面本身：典籍与 灯下 的学问；馆藏三则；双栏抄本；批注羽笔；暗角灯影；按钮与器物；致馆长的信；书房色谱。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#1C1714` |
| `--bg-alt` | `#251E19` |
| `--fg` | `#E8DFD4` |
| `--muted` | `#3D332B` |
| `--muted-fg` | `#9C8B7A` |
| `--border` | `#4A3F35` |
| `--brass` | `#C9A962` |
| `--brass-hi` | `#DBBE81` |
| `--crimson` | `#8B2635` |
| `--shadow-card` | `0 4px 10px rgba(0,0,0,.4)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#1C1714`、`#251E19`、`#E8DFD4`、`#3D332B`、`#9C8B7A`、`#4A3F35`、`#C9A962`、`#DBBE81`、`#8B2635`、`#201812`、`#120E0B`、`#0F0C09`、`#574A3C`、`#241B10`、`#8A7443`、`#41352A`、`#2E2620`、`#221B16`、`#54402C`、`#3F2F22`、`#6B4A2F`、`#463525`、`#191310`、`#A63A4B`。

## 字体与信息层级

字体族：**Cormorant Garamond**、**Crimson Pro**、**Cinzel**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: radial-gradient(120% 90% at 50% 0%,#201812 0%,#120E0B 70%); font-family: var(--font-body); color: var(--fg); display: flex; justify-content: center; padding: 36px 12px; min-height: 100vh.
- `h2`: font: 600 30px/1.2 var(--font-heading); text-align: center; margin-bottom: 26px; text-shadow: 0 2px 6px rgba(0,0,0,.5).
- `.eyebrow`: text-align: center; font: 600 12px var(--font-label); letter-spacing: .32em; color: var(--brass); margin-bottom: 16px.
- `h1`: font: 600 42px/1.15 var(--font-heading); text-align: center; text-shadow: 0 2px 8px rgba(0,0,0,.55); margin-bottom: 26px.
- `h1 em`: font-style: italic; color: var(--brass).
- `.card h3`: font: 600 22px var(--font-heading); margin-bottom: 8px.
- `.t-display`: font: 600 40px/1.12 var(--font-heading).
- `.t-h`: font: 600 26px/1.2 var(--font-heading).
- `.t-body`: font: 400 17px/1.7 var(--font-body); color: var(--muted-fg).
- `.t-label`: font: 600 12px var(--font-label); letter-spacing: .3em.

## 形状、间距与深度

圆角令牌：`--radius: 4px`。
阴影/海拔令牌：`--shadow-card: 0 4px 10px rgba(0,0,0,.4)`。

- `section`: padding: 52px var(--pad).
- `.hero`: padding-top: 36px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 12px 24px; border-radius: var(--radius); border: 1px solid #8A7443; background: linear-gradient(180deg,var(--brass-hi),var(--brass)); color: #241B10; font: 600 14px var(--font-label); letter-spacing: .1em; cursor: pointer; transition: filter var(--dur) var(--ease),transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.btn:hover`: filter: brightness(1.08); box-shadow: 0 4px 12px rgba(201,169,98,.25).
- `.btn:active`: transform: translateY(1px); filter: brightness(.95).
- `.btn.secondary`: background: transparent; color: var(--brass); border: 1px solid var(--brass).
- `.btn.secondary:hover`: background: rgba(201,169,98,.12); box-shadow: none.
- `.btn.ghost`: background: transparent; border-color: transparent; color: var(--fg); text-decoration: underline; text-underline-offset: 6px; text-decoration-color: var(--brass).
- `.btn.ghost:hover`: color: var(--brass); box-shadow: none.

### 卡片与容器

- `.card`: background: var(--bg-alt); border: 1px solid var(--border); border-top: 2px solid var(--brass); border-radius: var(--radius); padding: 26px 22px; box-shadow: var(--shadow-card); transition: transform var(--dur) var(--ease),border-color var(--dur) var(--ease).
- `.card:hover`: transform: translateY(-3px); border-color: var(--brass).
- `.card .no`: font: 600 13px var(--font-label); letter-spacing: .24em; color: var(--brass); display: block; margin-bottom: 12px.
- `.card svg`: display: block; margin-bottom: 12px.
- `.card h3`: font: 600 22px var(--font-heading); margin-bottom: 8px.
- `.card p`: color: var(--muted-fg); font-size: 16px.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: 14px; min-height: 44px; border-top: 1px solid var(--border); padding-top: 24px.
- `.switch`: appearance: none; -webkit-appearance: none; width: 58px; height: 31px; background: var(--muted); border: 1px solid var(--border); border-radius: var(--radius); position: relative; cursor: pointer; flex: none; transition: background var(--dur) var(--ease).
- `.switch::after`: content: ""; position: absolute; top: 4px; left: 4px; width: 21px; height: 21px; border-radius: 3px; background: var(--muted-fg); transition: transform var(--dur) var(--ease),background var(--dur) var(--ease).
- `.switch:checked`: background: linear-gradient(180deg,var(--brass-hi),var(--brass)).
- `.switch:checked::after`: transform: translateX(27px); background: #241B10.
- `.switch-row label`: font: 600 17px var(--font-body); cursor: pointer.
- `input[type=text],input[type=email],textarea`: width: 100%; background: var(--muted); border: 1px solid var(--border); border-radius: var(--radius); color: var(--fg); font: 500 17px var(--font-body); padding: 12px 14px; min-height: 48px; box-shadow: inset 0 2px 4px rgba(0,0,0,.35); transition: border-color var(--dur) var(--ease).

### 导航

- `header`: border-bottom: 4px double var(--border).
- `nav.links`: display: flex; border-top: 1px solid var(--border).
- `nav.links a`: flex: 1; text-align: center; padding: 13px 4px; min-height: 44px; font: 600 11px var(--font-label); letter-spacing: .2em; color: var(--muted-fg); text-decoration: none; border-right: 1px solid var(--border); transition: color var(--dur) var(--ease).
- `nav.links a:last-child`: border-right: 0.
- `nav.links a:hover`: color: var(--brass).
- `footer nav`: display: flex; justify-content: center; flex-wrap: wrap; gap: 18px; margin-bottom: 20px.

## 交互与动效

动效令牌：`--dur: .5s`；`--ease: cubic-bezier(.165,.84,.44,1)`。

- `.tabbar a[aria-current="page"]`: color: var(--brass).
- `.tabbar a:hover`: color: var(--fg).
- `.nav-cta:hover`: filter: brightness(1.08).
- `nav.links a:hover`: color: var(--brass).
- `.card:hover`: transform: translateY(-3px); border-color: var(--brass).
- `.btn:hover`: filter: brightness(1.08); box-shadow: 0 4px 12px rgba(201,169,98,.25).
- `.btn:active`: transform: translateY(1px); filter: brightness(.95).
- `.btn.secondary:hover`: background: rgba(201,169,98,.12); box-shadow: none.
- `.btn.ghost:hover`: color: var(--brass); box-shadow: none.
- `.btn:disabled`: background: var(--muted); border-color: var(--border); color: var(--muted-fg); cursor: not-allowed; filter: none; box-shadow: none.

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `input:focus-visible,textarea:focus-visible`: outline: 2px solid var(--brass); outline-offset: 2px; border-color: var(--brass).
- `a:focus-visible,button:focus-visible,.switch:focus-visible`: outline: 3px solid var(--brass); outline-offset: 3px.

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
