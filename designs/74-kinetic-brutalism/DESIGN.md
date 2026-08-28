---
name: "74 动态野兽派（移动端）"
version: "alpha"
id: "74-kinetic-brutalism"
source: "style-templates/pages/74-kinetic-brutalism.html"
description: "动态野兽派移动端风格演示：酸性黄跑马灯、大写巨字、2px 边框、零圆角与卡片反色泛滥。"
colors:
  bg: "#09090B"
  fg: "#FAFAFA"
  muted: "#27272A"
  muted-fg: "#A1A1AA"
  accent: "#DFE104"
  accent-fg: "#000000"
  border: "#3F3F46"
  primary: "#DFE104"
  on-primary: "#000000"
  surface: "#09090B"
  on-surface: "#FAFAFA"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "44px"
    fontWeight: "700"
    lineHeight: ".95"
    letterSpacing: "-1px"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "64px"
    fontWeight: "700"
    lineHeight: ".95"
    letterSpacing: "-1px"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "30px"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "-.5px"
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
    letterSpacing: "3px"
  button-md:
    fontFamily: "Space Grotesk"
    fontSize: "16px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: "1.5px"
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

# 74 动态野兽派（移动端） Design System

## 品牌与视觉方向

动态野兽派移动端风格演示：酸性黄跑马灯、大写巨字、2px 边框、零圆角与卡片反色泛滥。

视觉关键词来自页面本身：动力全开 粗野上场；运动系统；无限跑马灯；反色泛滥；触觉节拍；按钮与控件；现场报名；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#09090B` |
| `--fg` | `#FAFAFA` |
| `--muted` | `#27272A` |
| `--muted-fg` | `#A1A1AA` |
| `--accent` | `#DFE104` |
| `--accent-fg` | `#000000` |
| `--border` | `#3F3F46` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#09090B`、`#FAFAFA`、`#27272A`、`#A1A1AA`、`#DFE104`、`#000000`、`#3F3F46`、`#000`。

## 字体与信息层级

字体族：**Space Grotesk**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); font-weight: 500; background: var(--accent); color: var(--fg); line-height: 1.6; display: flex; justify-content: center; padding: 22px 10px 44px.
- `.eyebrow`: display: inline-block; background: var(--accent); color: #000; font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; padding: 7px 10px; border: 2px solid #000.
- `h1`: font-size: clamp(46px,15vw,64px); line-height: .95; letter-spacing: -1px; text-transform: uppercase; font-weight: 700; margin: 18px 0 14px.
- `h1 .hollow`: color: transparent; -webkit-text-stroke: 2.5px var(--accent).
- `h2`: font-size: 30px; text-transform: uppercase; letter-spacing: -.5px; line-height: 1.15; margin: 6px 0 18px.
- `.card h3`: font-size: 20px; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 6px.
- `.t-display`: font-size: 44px; font-weight: 700; line-height: .95; text-transform: uppercase; letter-spacing: -1px.
- `.t-title`: font-size: 26px; font-weight: 700; line-height: 1.2.
- `.t-body`: font-size: 17px; line-height: 1.6.
- `.t-label`: font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--radius: 0`。

- `.phone`: width: 100%; max-width: 430px; background: var(--bg); border: 3px solid #000; border-radius: 44px; overflow: clip; box-shadow: 10px 10px 0 #000; position: relative.
- `.hero`: padding: 36px 22px 30px; border-bottom: var(--bw) solid var(--border); overflow: hidden.
- `.hero-inner`: transform-origin: 50% 0.
- `.hero-actions`: display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 13px 20px; font: inherit; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1.5px; border: 2px solid var(--fg); border-radius: var(--radius); background: transparent; color: var(--fg); cursor: pointer; text-decoration: none; transition: background var(--press) linear,color var(--press) linear,border-color var(--press) linear.
- `.btn:disabled`: background: var(--muted); border-color: var(--muted); color: var(--muted-fg); cursor: not-allowed.

### 卡片与容器

- `.card`: border: 2px solid var(--fg); padding: 18px; margin-bottom: 12px; cursor: pointer; transition: background var(--press) linear,color var(--press) linear,border-color var(--press) linear.
- `.card:hover`: border-color: var(--accent).
- `.card:active`: background: var(--accent); border-color: var(--accent); color: #000.
- `.card:active .icon-box`: border-color: #000; color: #000.
- `.card:active p`: color: #000.
- `.card h3`: font-size: 20px; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 6px.
- `.card p`: color: var(--muted-fg); font-size: 16px.

### 表单与选择控件

- `::selection`: background: var(--accent); color: #000.
- `.field`: margin-bottom: 16px.
- `.field label`: display: block; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px.
- `.field input,.field textarea`: width: 100%; min-height: 52px; background: var(--bg); border: 2px solid var(--border); border-radius: var(--radius); color: var(--fg); font: inherit; font-size: 16px; padding: 13px 14px.
- `.field textarea`: min-height: 110px; resize: vertical.
- `.field input::placeholder,.field textarea::placeholder`: color: var(--muted-fg).
- `.field input:focus-visible,.field textarea:focus-visible`: border-color: var(--fg).

### 导航

- `.nav`: display: flex; align-items: center; flex-wrap: wrap; gap: 2px; padding: 6px 14px.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px.
- `.nav-link:hover`: background: var(--fg); color: #000.
- `.nav-cta:hover`: background: var(--fg); border-color: var(--fg).
- `.nav-cta:active`: background: var(--bg); color: var(--accent).
- `.card:hover`: border-color: var(--accent).
- `.card:active`: background: var(--accent); border-color: var(--accent); color: #000.
- `.card:active .icon-box`: border-color: #000; color: #000.
- `.card:active p`: color: #000.
- `.btn-primary:hover`: background: var(--fg); border-color: var(--fg).
- `.btn-primary:active`: background: var(--bg); color: var(--accent); border-color: var(--accent).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px.
- `.btn-primary:focus-visible`: outline-color: var(--fg).
- `.field input:focus-visible,.field textarea:focus-visible`: border-color: var(--fg).

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
