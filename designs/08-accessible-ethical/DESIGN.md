---
name: "08 无障碍与伦理设计"
version: "alpha"
id: "08-accessible-ethical"
source: "style-templates/pages/08-accessible-ethical.html"
description: "无障碍与伦理设计风格演示：WCAG AAA 高对比、18px 起步大字号、3-4px 焦点环、44×44 触控目标与拒绝暗黑模式的伦理承诺。"
colors:
  bg: "#FFFFFF"
  surface: "#F2F5F8"
  ink: "#1A1A1A"
  ink-soft: "#40505C"
  primary: "#0B4F8A"
  primary-dark: "#093F6E"
  primary-tint: "#E8F1F9"
  success: "#1B5E20"
  error: "#B10E1E"
  warn-ink: "#6B4A00"
  warn-bg: "#FFF3D6"
  line: "#C7D3DD"
  background: "#FFFFFF"
  on-background: "#1A1A1A"
  on-primary: "#FFFFFF"
  on-surface: "#1A1A1A"
typography:
  display-lg:
    fontFamily: "Atkinson Hyperlegible"
    fontSize: "44px"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Atkinson Hyperlegible"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Atkinson Hyperlegible"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.25"
  body-md:
    fontFamily: "Atkinson Hyperlegible"
    fontSize: "18px"
    fontWeight: "400"
    lineHeight: "1.7"
  label-sm:
    fontFamily: "Atkinson Hyperlegible"
    fontSize: "16px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".18em"
  button-md:
    fontFamily: "Atkinson Hyperlegible"
    fontSize: "18px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "8px"
  DEFAULT: "8px"
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

# 08 无障碍与伦理设计 Design System

## 品牌与视觉方向

无障碍与伦理设计风格演示：WCAG AAA 高对比、18px 起步大字号、3-4px 焦点环、44×44 触控目标与拒绝暗黑模式的伦理承诺。

视觉关键词来自页面本身：人人可用， 才是好设计；三条不妥协的底线；七比一对比；键盘全可达；伦理承诺；按钮与控件；联系市民服务台；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#FFFFFF` |
| `--surface` | `#F2F5F8` |
| `--ink` | `#1A1A1A` |
| `--ink-soft` | `#40505C` |
| `--primary` | `#0B4F8A` |
| `--primary-dark` | `#093F6E` |
| `--primary-tint` | `#E8F1F9` |
| `--success` | `#1B5E20` |
| `--error` | `#B10E1E` |
| `--warn-ink` | `#6B4A00` |
| `--warn-bg` | `#FFF3D6` |
| `--line` | `#C7D3DD` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FFFFFF`、`#F2F5F8`、`#1A1A1A`、`#40505C`、`#0B4F8A`、`#093F6E`、`#E8F1F9`、`#1B5E20`、`#B10E1E`、`#6B4A00`、`#FFF3D6`、`#C7D3DD`、`#062F53`、`#E1E6EB`、`#4A5866`、`#D3E5F3`、`#E9F3EA`、`#FBEAEB`、`#5A6572`。

## 字体与信息层级

字体族：**Atkinson Hyperlegible**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font: 18px/1.65 var(--font).
- `h1,h2,h3`: line-height: 1.25; font-weight: 700.
- `.eyebrow`: display: inline-block; color: var(--primary); font-weight: 700; font-size: 16px; letter-spacing: .08em; border: 2px solid var(--primary); border-radius: 999px; padding: 6px 16px; background: var(--bg).
- `.hero h1`: font-size: clamp(34px,6vw,52px); margin: 20px 0 16px.
- `.card h3`: font-size: 21px; margin-bottom: 8px.
- `.t-display`: font-size: clamp(32px,5vw,44px); font-weight: 700; line-height: 1.15.
- `.t-display em`: font-style: normal; color: var(--primary).
- `.t-heading`: font-size: 28px; font-weight: 700.
- `.t-body`: font-size: 18px; line-height: 1.7; color: var(--ink-soft); max-width: 640px.
- `.t-label`: font-size: 16px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--primary-dark).

## 形状、间距与深度

圆角令牌：`--radius: 8px`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 56px 0.
- `.section-sub`: color: var(--ink-soft); max-width: 620px; margin: 10px 0 30px.
- `.site-head .wrap`: display: flex; align-items: center; gap: 16px; min-height: 72px; flex-wrap: wrap; padding-top: 8px; padding-bottom: 8px.
- `.hero`: background: var(--surface); padding: 64px 0.
- `.hero-grid`: display: grid; gap: 40px; align-items: center.
- `.hero h1`: font-size: clamp(34px,6vw,52px); margin: 20px 0 16px.
- `.hero .lead`: color: var(--ink-soft); font-size: 19px; max-width: 560px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px.
- `.hero-grid`: grid-template-columns: 1.1fr .9fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: var(--touch-target); min-width: var(--touch-target); padding: 0 24px; border-radius: var(--radius); border: 2px solid transparent; font: 700 18px var(--font); cursor: pointer; text-decoration: none; transition: background var(--dur),color var(--dur),border-color var(--dur).

### 卡片与容器

- `.card`: background: var(--bg); border: 2px solid var(--line); border-left: 6px solid var(--primary); border-radius: var(--radius); padding: 26px; transition: border-color var(--dur).
- `.card:hover`: border-color: var(--primary).
- `.card h3`: font-size: 21px; margin-bottom: 8px.
- `.card p`: color: var(--ink-soft); font-size: 17px.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; font-size: 17px; font-weight: 700.
- `.switch input`: appearance: none; -webkit-appearance: none; width: 58px; height: 32px; border-radius: 999px; background: #E1E6EB; border: 2px solid var(--ink-soft); position: relative; cursor: pointer; transition: background var(--dur),border-color var(--dur).
- `.switch input::before`: content: ""; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; border-radius: 50%; background: var(--ink-soft); transition: transform var(--dur),background var(--dur).
- `.switch input:checked`: background: var(--success); border-color: var(--success).
- `.switch input:checked::before`: transform: translateX(26px); background: #FFFFFF.
- `.field`: display: flex; flex-direction: column; gap: 8px.
- `.field label`: font-size: 18px; font-weight: 700.

## 交互与动效

动效令牌：`--dur: 200ms`。

- `:focus-visible`: outline: var(--focus-ring) solid var(--primary); outline-offset: 2px; border-radius: 4px.
- `.skip-link:focus`: left: 0.
- `.nav-links a:hover`: background: var(--primary-tint); color: var(--primary-dark).
- `.btn-primary:hover`: background: var(--primary-dark).
- `.btn-primary:active`: background: #062F53.
- `.btn-primary:disabled`: background: #E1E6EB; color: #4A5866; cursor: not-allowed.
- `.btn-secondary:hover`: background: var(--primary-tint).
- `.btn-secondary:active`: background: #D3E5F3.
- `.btn-ghost:hover`: background: var(--primary-tint).
- `.btn-ghost:active`: background: #D3E5F3.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: var(--focus-ring) solid var(--primary); outline-offset: 2px; border-radius: 4px.
- `input:focus-visible,textarea:focus-visible`: outline: var(--focus-ring) solid var(--primary); outline-offset: 2px; border-color: var(--primary).

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
