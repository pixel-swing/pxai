---
name: "50 瑞士现代主义 2.0"
version: "alpha"
id: "50-swiss-modernism-2"
source: "style-templates/pages/50-swiss-modernism-2.html"
description: "瑞士现代主义 2.0 风格演示：严格 12 栏网格、数学化间距、非对称构图与单一强调色。"
colors:
  color-text: "#000000"
  color-bg: "#FFFFFF"
  color-surface: "#F5F5F5"
  accent: "#E30613"
  background: "#FFFFFF"
  on-background: "#000000"
  primary: "#E30613"
  on-primary: "#FFFFFF"
  secondary: "#F5F5F5"
  on-secondary: "#000000"
  tertiary: "#000000"
  on-tertiary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "64px"
    fontWeight: "900"
    lineHeight: "1.05"
    letterSpacing: "-.03em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "92px"
    fontWeight: "900"
    lineHeight: "1.04"
    letterSpacing: "-.03em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "40px"
    fontWeight: "900"
    lineHeight: "1.2"
    letterSpacing: "-.02em"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.7"
  label-sm:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".35em"
  button-md:
    fontFamily: "Inter"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1"
rounded:
  DEFAULT: "0px"
spacing:
  grid-gap: "1rem"
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

# 50 瑞士现代主义 2.0 Design System

## 品牌与视觉方向

瑞士现代主义 2.0 风格演示：严格 12 栏网格、数学化间距、非对称构图与单一强调色。

视觉关键词来自页面本身：秩序， 即是美。；风格信息；三条铁律；严格网格；数学间距；层级即装饰；按钮与控件；申请版式手册。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--color-text` | `#000000` |
| `--color-bg` | `#FFFFFF` |
| `--color-surface` | `#F5F5F5` |
| `--accent` | `#E30613` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000000`、`#FFFFFF`、`#F5F5F5`、`#E30613`、`#FFF`、`#000`、`#767676`、`#1A1A1A`、`#444`、`#D4D4D4`。

## 字体与信息层级

字体族：**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-primary); font-size: 16px; line-height: 1.6; color: var(--color-text); background: var(--color-bg).
- `.eyebrow`: display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: .35em; margin-bottom: calc(var(--base-unit)*3).
- `.eyebrow::before`: content: ""; display: inline-block; width: 32px; height: 13px; background: var(--accent); margin-right: 12px; vertical-align: -1px.
- `h1`: font-weight: 900; font-size: clamp(44px,8vw,92px); line-height: 1.04; letter-spacing: -.03em; text-wrap: balance.
- `h2`: font-weight: 900; font-size: clamp(26px,4vw,40px); letter-spacing: -.02em; line-height: 1.2.
- `.card h3`: font-size: 19px; font-weight: 700; margin-bottom: calc(var(--base-unit)).
- `.t-display`: font-weight: 900; font-size: clamp(36px,6vw,64px); line-height: 1.05; letter-spacing: -.03em.
- `.t-h`: font-weight: 700; font-size: 28px; line-height: 1.25.
- `.t-body`: font-size: 16px; line-height: 1.7; max-width: 560px.
- `.t-label`: font-size: 12px; font-weight: 700; letter-spacing: .35em.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。
空间令牌：`--grid-gap: 1rem`。

- `.wrap`: max-width: 1160px; margin: 0 auto; padding: 0 calc(var(--base-unit)*3).
- `.grid`: display: grid; grid-template-columns: repeat(var(--grid-columns),1fr); gap: var(--grid-gap).
- `.hero`: padding: calc(var(--base-unit)*10) 0 calc(var(--base-unit)*8); border-bottom: var(--rule).
- `.hero .lead`: font-size: 18px; line-height: 1.7; margin-top: calc(var(--base-unit)*3).
- `.hero-cta`: display: flex; gap: calc(var(--base-unit)*2); flex-wrap: wrap; margin-top: calc(var(--base-unit)*4).
- `.hero-meta`: border-top: var(--rule); padding-top: calc(var(--base-unit)*2); font-size: 14px; line-height: 1.7; margin-top: calc(var(--base-unit)*5).
- `.hero-meta strong`: display: block; font-weight: 700.
- `.grid-viz`: margin-top: calc(var(--base-unit)*6); height: 120px; background: repeating-linear-gradient(90deg,var(--color-surface) 0,var(--color-surface) calc((100% - 11*var(--grid-gap))/12),transparent 0,transparent calc((100% - 11*var(--grid-gap))/12 + var(--grid-gap))); position: relative.
- `.grid-viz i`: position: absolute; top: 0; left: calc(8*(100% + var(--grid-gap))/12); width: calc((100% - 11*var(--grid-gap))/12); height: 56px; background: var(--accent).
- `section.pad`: padding: calc(var(--base-unit)*9) 0; border-bottom: var(--rule).

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font: 700 15px/1 var(--font-primary); padding: 14px 26px; border: 2px solid var(--color-text); background: var(--color-text); color: #fff; text-decoration: none; cursor: pointer; border-radius: 0; transition: none.
- `.btn:hover`: background: var(--accent); border-color: var(--accent).
- `.btn:active`: background: #000; border-color: #000.
- `.btn:disabled`: background: var(--color-surface); border-color: #767676; color: #767676; cursor: not-allowed.

### 卡片与容器

- `.card`: border-top: 4px solid var(--color-text); background: var(--color-bg); padding: calc(var(--base-unit)*3) 0.
- `.card:hover`: border-top-color: var(--accent).
- `.card .ic`: width: 48px; height: 48px; border: var(--rule); display: grid; place-items: center; margin: calc(var(--base-unit)*2) 0.
- `.card h3`: font-size: 19px; font-weight: 700; margin-bottom: calc(var(--base-unit)).
- `.card p`: font-size: 16px; line-height: 1.7; color: #1a1a1a.
- `.card .idx`: font-weight: 900; font-size: 14px; color: var(--accent); letter-spacing: .1em.

### 表单与选择控件

- `.toggle-field`: display: flex; align-items: center; gap: 12px.
- `.toggle-input`: position: absolute; opacity: 0; width: 48px; height: 24px.
- `.toggle`: width: 48px; height: 24px; border: 2px solid var(--color-text); background: var(--color-bg); position: relative; flex: none.
- `.toggle::after`: content: ""; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: var(--color-text).
- `.toggle-input:checked+.toggle::after`: left: auto; right: 2px; background: var(--accent).
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid var(--accent); outline-offset: 2px.
- `.toggle-field label`: margin: 0; font-weight: 500.

### 导航

- `header`: border-bottom: var(--rule); background: var(--color-bg); position: sticky; top: 0; z-index: 20.
- `.nav`: display: flex; align-items: center; gap: calc(var(--base-unit)*3); height: 64px.
- `.nav a.lnk`: display: none; text-decoration: none; font-size: 15px; font-weight: 500; border-bottom: 2px solid transparent; padding-bottom: 2px.
- `.nav a.lnk:hover`: border-bottom-color: var(--accent).
- `.nav a.lnk`: display: inline.
- `footer nav`: display: flex; gap: 24px; flex-wrap: wrap.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px.
- `.nav a.lnk:hover`: border-bottom-color: var(--accent).
- `.btn:hover`: background: var(--accent); border-color: var(--accent).
- `.btn:active`: background: #000; border-color: #000.
- `.btn-secondary:hover`: background: var(--color-text); color: #fff; border-color: var(--color-text).
- `.btn-ghost:hover`: color: var(--accent).
- `.btn:disabled`: background: var(--color-surface); border-color: #767676; color: #767676; cursor: not-allowed.
- `.card:hover`: border-top-color: var(--accent).
- `.toggle-input:checked+.toggle::after`: left: auto; right: 2px; background: var(--accent).
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid var(--accent); outline-offset: 2px.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:820px)`、`(min-width:760px)`、`(max-width:819px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px.
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid var(--accent); outline-offset: 2px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent); outline-offset: 0; border-color: var(--accent).
- `footer :focus-visible`: outline-color: #fff.

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
