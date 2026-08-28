---
name: "01 极简主义与瑞士风格"
version: "alpha"
id: "01-minimalism-swiss"
source: "style-templates/pages/01-minimalism-swiss.html"
description: "源自 1950 年代瑞士国际主义排版的极简风格：网格系统、极致留白、高对比与清晰的无衬线字体层级。"
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  primary-container: "#F5F1E8"
  on-primary-container: "#000000"
  secondary: "#808080"
  tertiary: "#D32011"
  on-tertiary: "#FFFFFF"
  neutral: "#FFFFFF"
  on-neutral: "#000000"
  surface: "#FFFFFF"
  on-surface: "#000000"
  surface-muted: "#F5F1E8"
  on-surface-muted: "#333333"
  outline: "#000000"
  outline-subtle: "#E5E0D5"
  decorative-taupe: "#B38B6D"
  disabled: "#808080"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "4.5rem"
    fontWeight: "900"
    lineHeight: "1.1"
    letterSpacing: "-0.03em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "1.125rem"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Inter"
    fontSize: "0.8125rem"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: "0.18em"
  button-md:
    fontFamily: "Inter"
    fontSize: "0.9375rem"
    fontWeight: "500"
    lineHeight: "1.4"
rounded:
  none: "0px"
  DEFAULT: "0px"
spacing:
  hairline: "1px"
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section: "5.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1.5rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1.5rem"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  card-standard:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "1.75rem"
  card-hover:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface-muted}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.9rem"
  badge-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.75rem"
  page-canvas:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
  chip-muted:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: "0.4rem 0.9rem"
  metadata-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  divider-strong:
    backgroundColor: "{colors.outline}"
    height: "1px"
  divider-subtle:
    backgroundColor: "{colors.outline-subtle}"
    height: "1px"
  poster-taupe-block:
    backgroundColor: "{colors.decorative-taupe}"
    rounded: "{rounded.none}"
  disabled-indicator:
    backgroundColor: "{colors.disabled}"
    size: "0.5rem"
---

# 01 极简主义与瑞士风格 Design System

## 品牌与视觉方向

源自 1950 年代瑞士国际主义排版的极简风格：网格系统、极致留白、高对比与清晰的无衬线字体层级。

视觉关键词来自页面本身：少即是多， 网格即 秩序 。；风格特性；12 列网格系统；极致留白；高对比字体层级；按钮与控件；表单示例；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--ink` | `#000000` |
| `--paper` | `#FFFFFF` |
| `--beige` | `#F5F1E8` |
| `--grey` | `#808080` |
| `--taupe` | `#B38B6D` |
| `--accent-color` | `#D32011` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000000`、`#FFFFFF`、`#F5F1E8`、`#808080`、`#B38B6D`、`#D32011`、`#333`、`#E5E0D5`、`#B3B3B3`。

## 字体与信息层级

字体族：**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-weight: var(--font-weight-body); background: var(--paper); color: var(--ink); font-size: 16px; line-height: 1.6.
- `.eyebrow`: font-size: .8125rem; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; color: var(--grey).
- `h1,h2,h3`: line-height: 1.15; font-weight: var(--font-weight-bold); letter-spacing: -.02em.
- `.sec-head h2`: font-size: clamp(1.5rem,3vw,2rem).
- `.hero h1`: font-size: clamp(2.5rem,6.5vw,4.5rem); font-weight: 900; letter-spacing: -.03em; margin: .75rem 0 1.25rem.
- `.hero h1 .red`: color: var(--accent-color).
- `.card h3`: font-size: 1.125rem; margin-bottom: .5rem.
- `.swatch .label`: padding: .6rem .75rem; font-size: .8125rem; border-top: var(--hairline); display: flex; justify-content: space-between; gap: .5rem.
- `.swatch .label code`: color: var(--grey).
- `.t-display`: font-size: clamp(2.5rem,5.5vw,3.5rem); font-weight: 900; letter-spacing: -.03em; line-height: 1.1.

## 形状、间距与深度

圆角令牌：`--border-radius: 0px`。
阴影/海拔令牌：`--shadow: none`。

- `.wrap`: max-width: 1200px; margin: 0 auto; padding-left: clamp(1rem,4vw,var(--spacing)); padding-right: clamp(1rem,4vw,var(--spacing)).
- `section`: border-bottom: var(--hairline).
- `.hero`: padding: clamp(3rem,7vw,5.5rem) 0.
- `.hero-grid`: display: grid; grid-template-columns: minmax(0,7fr) minmax(0,5fr); gap: var(--spacing); align-items: center.
- `.hero h1`: font-size: clamp(2.5rem,6.5vw,4.5rem); font-weight: 900; letter-spacing: -.03em; margin: .75rem 0 1.25rem.
- `.hero h1 .red`: color: var(--accent-color).
- `.hero p`: max-width: 34em; color: #333; margin-bottom: 2rem.
- `.hero-actions`: display: flex; gap: 1rem; flex-wrap: wrap.
- `.hero-grid`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; min-height: 44px; padding: .65rem 1.5rem; font: inherit; font-weight: 500; font-size: .9375rem; border: var(--hairline); border-radius: var(--border-radius); background: var(--paper); color: var(--ink); cursor: pointer; box-shadow: var(--shadow); transition: background-color var(--dur) var(--ease),color var(--dur) var(--ease).
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: background: var(--beige); color: var(--grey); border-color: var(--grey); cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: border: var(--hairline); border-left: none; margin-right: -1px; padding: 1.75rem; background: var(--paper); transition: background-color var(--dur) var(--ease).
- `.card:hover`: background: var(--beige).
- `.card svg`: margin-bottom: 1rem.
- `.card h3`: font-size: 1.125rem; margin-bottom: .5rem.
- `.card p`: font-size: .9375rem; color: #333.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .75rem; cursor: pointer; font-size: .9375rem; font-weight: 500.
- `.switch input`: appearance: none; width: 56px; height: 28px; border: var(--hairline); background: var(--paper); position: relative; cursor: pointer; margin: 0; transition: background-color var(--dur) var(--ease).
- `.switch input::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; background: var(--ink); transition: transform var(--dur) var(--ease).
- `.switch input:checked`: background: var(--beige).
- `.switch input:checked::after`: transform: translateX(28px); background: var(--accent-color).
- `.field`: display: flex; flex-direction: column; gap: .5rem.
- `.field.full`: grid-column: 1/-1.

### 导航

- `header`: border-bottom: var(--hairline); position: sticky; top: 0; background: var(--paper); z-index: 10.
- `.nav`: display: flex; align-items: center; gap: 1.5rem; min-height: 64px; flex-wrap: wrap; padding-top: .5rem; padding-bottom: .5rem.
- `.nav ul`: display: flex; gap: 1.25rem; list-style: none; flex-wrap: wrap.
- `.nav ul a`: font-size: .9375rem; border-bottom: 2px solid transparent; padding-bottom: 2px; transition: border-color var(--dur) var(--ease).
- `.nav ul a:hover`: border-color: var(--ink); color: var(--ink).
- `footer nav`: display: flex; gap: 1.25rem; flex-wrap: wrap.

## 交互与动效

动效令牌：`--dur: 220ms`；`--ease: cubic-bezier(.4,0,.2,1)`。

- `a:hover`: color: var(--accent-color).
- `:focus-visible`: outline: 2px solid var(--accent-color); outline-offset: 3px.
- `.nav ul a:hover`: border-color: var(--ink); color: var(--ink).
- `.btn-primary:hover`: background: var(--accent-color); border-color: var(--accent-color); color: var(--paper).
- `.btn-secondary:hover`: background: var(--ink); color: var(--paper).
- `.btn-ghost:hover`: color: var(--accent-color); background: var(--beige).
- `.btn:active`: transform: translateY(1px).
- `.btn:disabled`: background: var(--beige); color: var(--grey); border-color: var(--grey); cursor: not-allowed; transform: none.
- `.card:hover`: background: var(--beige).
- `.switch input:checked`: background: var(--beige).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:820px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--accent-color); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 2px solid var(--accent-color); outline-offset: 2px.

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
