---
name: "23 极简直达"
version: "alpha"
id: "23-minimal-direct"
source: "style-templates/pages/23-minimal-direct.html"
description: "极简直达落地页风格演示：单列布局、大量留白、唯一 CTA、直接文案与极快加载，适合独立产品与微型 SaaS。"
colors:
  color-text: "#1A1A1A"
  color-muted: "#4A4A4A"
  color-bg: "#FFFFFF"
  accent: "#0B5FFF"
  accent-deep: "#0949C6"
  line: "#E5E5E5"
  primary: "#0B5FFF"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#1A1A1A"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "2.9rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "3.4rem"
    fontWeight: "700"
    lineHeight: "1.14"
    letterSpacing: "-.02em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "1.55rem"
    fontWeight: "700"
    lineHeight: "1.35"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "ui-monospace"
    fontSize: "1.06rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "ui-monospace"
    fontSize: ".82rem"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "ui-monospace"
    fontSize: "1rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "6px"
  DEFAULT: "6px"
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

# 23 极简直达 Design System

## 品牌与视觉方向

极简直达落地页风格演示：单列布局、大量留白、唯一 CTA、直接文案与极快加载，适合独立产品与微型 SaaS。

视觉关键词来自页面本身：更少的元素， 更快的决定。；三个克制的设计决定；单列阅读流；唯一的 CTA；为速度而生；按钮与控件；按钮状态；只需 30 秒，马上开始。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--color-text` | `#1A1A1A` |
| `--color-muted` | `#4A4A4A` |
| `--color-bg` | `#FFFFFF` |
| `--accent` | `#0B5FFF` |
| `--accent-deep` | `#0949C6` |
| `--line` | `#E5E5E5` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#1A1A1A`、`#4A4A4A`、`#FFFFFF`、`#0B5FFF`、`#0949C6`、`#E5E5E5`、`#FFF`、`#083A9E`、`#F0F0F0`、`#8A8A8A`、`#D4D4D4`、`#C9C9C9`。

## 字体与信息层级

字体族：**Inter**、**ui-monospace**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: var(--font-size-body); line-height: var(--line-height); color: var(--color-text); background: var(--color-bg).
- `h2`: font-size: 1.55rem; line-height: 1.35; font-weight: 700; letter-spacing: -.01em.
- `.eyebrow`: font-size: .86rem; font-weight: 600; color: var(--color-muted); letter-spacing: .14em.
- `h1`: font-size: clamp(2.3rem,7vw,3.4rem); line-height: 1.14; letter-spacing: -.02em; font-weight: 700; margin: 1.1rem 0 1.2rem.
- `.card h3`: font-size: 1.12rem; margin-bottom: .35rem.
- `.control-col h3`: font-size: .98rem.
- `.t-display`: font-weight: 700; font-size: clamp(2.1rem,5vw,2.9rem); line-height: 1.15; letter-spacing: -.02em.
- `.t-h`: font-weight: 600; font-size: 1.55rem; line-height: 1.3.
- `.t-body`: font-size: 1.06rem; max-width: 36em.
- `.t-label`: font-size: .82rem; font-weight: 500; letter-spacing: .12em; color: var(--color-muted).

## 形状、间距与深度

圆角令牌：`--radius: 6px`。
空间令牌：`--content-max-width: 680px`。

- `.wrap`: max-width: var(--content-max-width); margin-inline: auto; padding-inline: 1.5rem.
- `section`: padding-block: var(--spacing-large).
- `.hero`: padding-block: var(--spacing-huge) var(--spacing-large); text-align: left.
- `.hero-cta`: display: flex; flex-wrap: wrap; align-items: center; gap: 1.2rem; margin-top: 2.2rem.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; font: inherit; font-weight: 600; border-radius: var(--radius); border: 1px solid transparent; cursor: pointer; text-decoration: none; padding: .65rem 1.3rem; font-size: 1rem; transition: background-color .15s ease,color .15s ease,border-color .15s ease.
- `.btn:disabled`: background: #F0F0F0; color: #8A8A8A; border-color: transparent; cursor: not-allowed; text-decoration: none.

### 卡片与容器

- `.card`: display: flex; gap: 1.1rem; align-items: flex-start; border: 1px solid var(--line); border-radius: var(--radius); padding: 1.5rem; transition: border-color .15s ease.
- `.card:hover`: border-color: var(--color-text).
- `.card svg`: color: var(--color-text); margin-top: .2rem.
- `.card h3`: font-size: 1.12rem; margin-bottom: .35rem.
- `.card p`: color: var(--color-muted); font-size: 1rem.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: .7rem.
- `.switch`: appearance: none; -webkit-appearance: none; width: 46px; height: 26px; border-radius: 999px; background: #D4D4D4; position: relative; cursor: pointer; transition: background .15s; flex: none.
- `.switch::after`: content: ""; position: absolute; left: 3px; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,.3); transition: transform .15s.
- `.switch:checked`: background: var(--color-text).
- `.switch:checked::after`: transform: translateX(20px).
- `.switch-row label`: font-weight: 500; font-size: .95rem; margin: 0.
- `.field`: margin-bottom: 1.1rem.

### 导航

- `header`: border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 1rem; height: 64px.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: var(--color-text); text-decoration: underline.
- `.btn-accent:hover`: background: var(--accent-deep).
- `.btn-accent:active`: background: #083A9E.
- `.btn-outline:hover`: background: var(--color-text); color: #fff.
- `.btn-plain:hover`: color: var(--color-text).
- `.btn:disabled`: background: #F0F0F0; color: #8A8A8A; border-color: transparent; cursor: not-allowed; text-decoration: none.
- `.textlink:hover`: color: var(--accent-deep).
- `.card:hover`: border-color: var(--color-text).
- `.switch:checked`: background: var(--color-text).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:640px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px; border-radius: 4px.
- `.input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent); outline-offset: 1px; border-color: var(--accent).

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
