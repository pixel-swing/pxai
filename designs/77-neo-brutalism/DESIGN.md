---
name: "77 新野兽派（移动端）"
version: "alpha"
id: "77-neo-brutalism"
source: "style-templates/pages/77-neo-brutalism.html"
description: "新野兽派移动端风格演示：奶油底、4px 黑边、硬偏移阴影、机械按压与微旋转波普贴纸。"
colors:
  bg: "#FFFDF5"
  ink: "#000000"
  red: "#FF6B6B"
  yellow: "#FFD93D"
  violet: "#C4B5FD"
  white: "#FFFFFF"
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface: "#FFFDF5"
  on-surface: "#000000"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "42px"
    fontWeight: "700"
    lineHeight: "1.05"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "44px"
    fontWeight: "700"
    lineHeight: "1.1"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "28px"
    fontWeight: "700"
    lineHeight: "1.15"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Space Grotesk"
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: "2px"
  button-md:
    fontFamily: "Space Grotesk"
    fontSize: "17px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "0px"
  radius-pill: "999px"
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

# 77 新野兽派（移动端） Design System

## 品牌与视觉方向

新野兽派移动端风格演示：奶油底、4px 黑边、硬偏移阴影、机械按压与微旋转波普贴纸。

视觉关键词来自页面本身：大胆一点， 贴纸 拍上去；三件套路，一眼上头；硬影偏移；机械按压；贴纸拼贴；按钮与控件；来都来了，留个名；波普配色板。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#FFFDF5` |
| `--ink` | `#000000` |
| `--red` | `#FF6B6B` |
| `--yellow` | `#FFD93D` |
| `--violet` | `#C4B5FD` |
| `--white` | `#FFFFFF` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FFFDF5`、`#000000`、`#FF6B6B`、`#FFD93D`、`#C4B5FD`、`#FFFFFF`、`#000`、`#52525B`。

## 字体与信息层级

字体族：**Space Grotesk**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); font-weight: 500; background: var(--violet); background-image: radial-gradient(#000 1.2px,transparent 1.3px); background-size: 20px 20px; color: var(--ink); line-height: 1.6; display: flex; justify-content: center; padding: 22px 10px 44px.
- `.eyebrow`: display: inline-block; background: var(--red); border: 3px solid var(--ink); padding: 7px 12px; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; box-shadow: var(--off-sm) var(--off-sm) 0 var(--ink).
- `h1`: font-size: clamp(34px,10.5vw,44px); line-height: 1.1; font-weight: 700; margin: 18px 0 12px.
- `h1 mark`: background: var(--yellow); color: var(--ink); padding: 0 6px; box-shadow: inset 0 -3px 0 var(--ink).
- `h2`: font-size: 28px; font-weight: 700; line-height: 1.15; margin: 10px 0 20px.
- `.card h3`: font-size: 20px; font-weight: 700; margin-bottom: 6px.
- `.t-display`: font-size: 42px; font-weight: 700; line-height: 1.05.
- `.t-title`: font-size: 24px; font-weight: 700; line-height: 1.2.
- `.t-body`: font-size: 17px; line-height: 1.6.
- `.t-label`: font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--radius: 0`；`--radius-pill: 999px`。

- `.phone`: width: 100%; max-width: 430px; background: var(--bg); border: var(--bw) solid var(--ink); border-radius: 44px; overflow: clip; box-shadow: 10px 10px 0 var(--ink).
- `.hero`: padding: 32px 22px 34px; position: relative.
- `.hero-card`: background: var(--white); border: var(--bw) solid var(--ink); box-shadow: var(--off-lg) var(--off-lg) 0 var(--ink); padding: 26px 20px; transform: rotate(-1deg); position: relative.
- `.hero-actions`: display: flex; gap: 14px; margin-top: 22px; flex-wrap: wrap.
- `.hero .pop`: position: absolute; pointer-events: none.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 56px; padding: 14px 20px; background: var(--white); color: var(--ink); border: var(--bw) solid var(--ink); border-radius: var(--radius); font: inherit; font-weight: 700; font-size: 17px; cursor: pointer; text-decoration: none; box-shadow: var(--off) var(--off) 0 var(--ink); transition: transform var(--press) linear,box-shadow var(--press) linear,background var(--press) linear.
- `.btn:hover`: transform: translate(-2px,-2px); box-shadow: 8px 8px 0 var(--ink).
- `.btn:active`: transform: translate(6px,6px); box-shadow: 0 0 0 var(--ink).
- `.btn:disabled`: background: var(--white); border-style: dashed; box-shadow: none; opacity: .45; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: border: var(--bw) solid var(--ink); padding: 20px; margin-bottom: 18px; box-shadow: var(--off) var(--off) 0 var(--ink); transition: transform 120ms linear.
- `.card.c1`: background: var(--white); transform: rotate(-1deg).
- `.card.c2`: background: var(--violet); transform: rotate(1.5deg).
- `.card.c3`: background: var(--yellow); transform: rotate(-.5deg).
- `.card:hover`: transform: rotate(0).
- `.card h3`: font-size: 20px; font-weight: 700; margin-bottom: 6px.
- `.card p`: font-size: 16px.

### 表单与选择控件

- `.field`: margin-bottom: 16px.
- `.field label`: display: block; font-size: 14px; font-weight: 700; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px.
- `.field input,.field textarea`: width: 100%; min-height: 52px; background: var(--bg); border: 3px solid var(--ink); border-radius: var(--radius); color: var(--ink); font: inherit; font-size: 16px; font-weight: 500; padding: 12px 14px; transition: background var(--press) linear.
- `.field textarea`: min-height: 110px; resize: vertical.
- `.field input::placeholder,.field textarea::placeholder`: color: #52525B.
- `.field input:focus-visible,.field textarea:focus-visible`: background: var(--yellow).

### 导航

- `.nav`: display: flex; align-items: center; flex-wrap: wrap; gap: 2px; padding: 6px 14px 10px.
- `.tab`: display: flex; flex-direction: column; align-items: center; gap: 4px; text-decoration: none; color: var(--ink); font-size: 12px; font-weight: 700; min-width: 64px; min-height: 56px; padding: 2px 4px.
- `.tab .t-ico`: width: 36px; height: 30px; display: grid; place-items: center; border: 2px solid transparent.
- `.tab[aria-current="page"] .t-ico`: background: var(--yellow); border-color: var(--ink); box-shadow: 2px 2px 0 var(--ink).
- `.tab:hover .t-ico`: border-color: var(--ink).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--ink); outline-offset: 3px.
- `.nav-link:hover`: text-decoration: underline; text-decoration-thickness: 3px; text-underline-offset: 4px.
- `.nav-cta:active`: transform: translate(4px,4px); box-shadow: 0 0 0 var(--ink).
- `.btn:hover`: transform: translate(-2px,-2px); box-shadow: 8px 8px 0 var(--ink).
- `.btn:active`: transform: translate(6px,6px); box-shadow: 0 0 0 var(--ink).
- `.btn-ghost:hover`: transform: none; box-shadow: none; background: var(--yellow).
- `.btn-ghost:active`: transform: translate(2px,2px).
- `.btn:disabled`: background: var(--white); border-style: dashed; box-shadow: none; opacity: .45; cursor: not-allowed; transform: none.
- `.card:hover`: transform: rotate(0).
- `.sw:checked`: background: var(--yellow).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--ink); outline-offset: 3px.
- `.field input:focus-visible,.field textarea:focus-visible`: background: var(--yellow).

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
