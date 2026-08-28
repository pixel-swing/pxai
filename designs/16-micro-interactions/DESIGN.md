---
name: "16 微交互"
version: "alpha"
id: "16-micro-interactions"
source: "style-templates/pages/16-micro-interactions.html"
description: "微交互（Micro-interactions）风格演示：50–100ms 轻快小动画、按压回弹、加载旋转器与成功 / 错误反馈态。"
colors:
  bg: "#F6F7FB"
  card: "#FFFFFF"
  ink: "#1B1F2E"
  muted: "#4C5265"
  line: "rgba(27,31,46,.1)"
  primary: "#2563EB"
  primary-deep: "#1D4ED8"
  success: "#22C55E"
  success-ink: "#15803D"
  success-bg: "#DCFCE7"
  error: "#EF4444"
  error-ink: "#B91C1C"
  error-bg: "#FEE2E2"
  amber: "#F59E0B"
  amber-ink: "#92400E"
  amber-bg: "#FEF3C7"
  background: "#F6F7FB"
  on-background: "#1B1F2E"
  on-primary: "#FFFFFF"
  secondary: "#7C3AED"
  on-secondary: "#FFFFFF"
  tertiary: "#22C55E"
  on-tertiary: "#052E16"
  surface: "#FFFFFF"
  on-surface: "#1B1F2E"
typography:
  display-lg:
    fontFamily: "Manrope"
    fontSize: "1.95rem"
    fontWeight: "800"
    lineHeight: "1.2"
  headline-lg:
    fontFamily: "Manrope"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.22"
  headline-md:
    fontFamily: "Manrope"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.22"
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "Inter"
    fontSize: ".8125rem"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".13em"
  button-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "16px"
  DEFAULT: "16px"
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

# 16 微交互 Design System

## 品牌与视觉方向

微交互（Micro-interactions）风格演示：50–100ms 轻快小动画、按压回弹、加载旋转器与成功 / 错误反馈态。

视觉关键词来自页面本身：小动作， 大体验；实时反馈演示；风格特性；50–100ms 瞬时响应；加载与过程反馈；成功 / 错误反馈态；按钮与控件；表单示例 · 反馈态演示。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#F6F7FB` |
| `--card` | `#FFFFFF` |
| `--ink` | `#1B1F2E` |
| `--muted` | `#4C5265` |
| `--line` | `rgba(27,31,46,.1)` |
| `--primary` | `#2563EB` |
| `--primary-deep` | `#1D4ED8` |
| `--success` | `#22C55E` |
| `--success-ink` | `#15803D` |
| `--success-bg` | `#DCFCE7` |
| `--error` | `#EF4444` |
| `--error-ink` | `#B91C1C` |
| `--error-bg` | `#FEE2E2` |
| `--amber` | `#F59E0B` |
| `--amber-ink` | `#92400E` |
| `--amber-bg` | `#FEF3C7` |
| `--shadow` | `0 4px 14px rgba(27,31,46,.07)` |
| `--shadow-hover` | `0 8px 22px rgba(27,31,46,.12)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F6F7FB`、`#FFFFFF`、`#1B1F2E`、`#4C5265`、`#2563EB`、`#1D4ED8`、`#22C55E`、`#15803D`、`#DCFCE7`、`#EF4444`、`#B91C1C`、`#FEE2E2`、`#F59E0B`、`#92400E`、`#FEF3C7`、`#FFF`、`#7C3AED`、`#E8EAF2`、`#CDD1DE`、`#3730A3`、`#E0E7FF`、`#4F46E5`、`#787E93`、`#E7E9F2`。

## 字体与信息层级

字体族：**Manrope**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.65; color: var(--ink); background: var(--bg); min-width: 320px.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.22.
- `.btn-submit.is-loading .label,.btn-submit.is-success .label`: visibility: hidden.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .5rem; padding: .45rem 1rem; border-radius: 999px; font: 600 .8rem/1 var(--font-body); letter-spacing: .12em; text-transform: uppercase; color: var(--primary); background: rgba(37,99,235,.09); border: 1px solid rgba(37,99,235,.3).
- `.hero h1`: font-size: clamp(2.2rem,5.6vw,3.5rem); font-weight: 800; margin: 1rem 0 .9rem.
- `.hero h1 em`: font-style: normal; color: var(--primary).
- `.demo-card h3`: font-size: 1.05rem.
- `.card h3`: font-size: 1.2rem; margin: .9rem 0 .5rem.
- `.t-display`: font: 800 clamp(1.95rem,4.4vw,2.5rem)/1.2 var(--font-display).
- `.t-heading`: font: 700 1.7rem/1.3 var(--font-display).

## 形状、间距与深度

圆角令牌：`--radius: 16px`。
阴影/海拔令牌：`--shadow: 0 4px 14px rgba(27,31,46,.07)`；`--shadow-hover: 0 8px 22px rgba(27,31,46,.12)`。

- `.container`: width: min(1080px,92%); margin-inline: auto.
- `.hero`: padding: 3.8rem 0 3rem.
- `.hero-grid`: display: grid; gap: 2.4rem; align-items: center.
- `.hero h1`: font-size: clamp(2.2rem,5.6vw,3.5rem); font-weight: 800; margin: 1rem 0 .9rem.
- `.hero h1 em`: font-style: normal; color: var(--primary).
- `.hero p`: color: var(--muted); max-width: 33em; margin-bottom: 1.6rem.
- `.hero-actions`: display: flex; gap: .9rem; flex-wrap: wrap.
- `section`: padding: 2.6rem 0.
- `.section-title`: font-size: clamp(1.5rem,3.4vw,2.1rem); margin-bottom: .4rem.
- `.section-sub`: color: var(--muted); margin-bottom: 1.8rem; max-width: 42em.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; padding: .75rem 1.5rem; border-radius: 12px; font: 600 1rem var(--font-body); cursor: pointer; text-decoration: none; border: 1.5px solid transparent; transition: transform var(--dur-fast) ease,box-shadow var(--dur) ease,background-color var(--dur) ease,border-color var(--dur) ease,color var(--dur) ease.
- `.btn:active`: transform: scale(.96).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: padding: 1.7rem 1.5rem; border-radius: var(--radius); background: var(--card); border: 1px solid var(--line); box-shadow: var(--shadow); transition: transform var(--dur) ease,box-shadow var(--dur) ease,border-color var(--dur) ease.
- `.card:hover`: transform: translateY(-3px); box-shadow: var(--shadow-hover); border-color: rgba(37,99,235,.35).
- `.card h3`: font-size: 1.2rem; margin: .9rem 0 .5rem.
- `.card p`: font-size: .95rem; color: var(--muted).
- `.card:hover .card-icon`: transform: scale(1.08).
- `.panel`: padding: 1.7rem 1.5rem; border-radius: var(--radius); background: var(--card); border: 1px solid var(--line); box-shadow: var(--shadow).

### 表单与选择控件

- `.switch-input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch`: display: inline-flex; align-items: center; gap: .7rem; cursor: pointer; font-weight: 600.
- `.switch-track`: position: relative; width: 56px; height: 30px; border-radius: 15px; background: #CDD1DE; transition: background var(--dur) ease.
- `.switch-knob`: position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #fff; box-shadow: 0 2px 5px rgba(27,31,46,.3); transition: transform var(--dur) var(--pop).
- `.switch-input:checked+.switch .switch-track`: background: var(--success).
- `.switch-input:checked+.switch .switch-knob`: transform: translateX(26px).
- `.switch-input:focus-visible+.switch .switch-track`: outline: 3px solid var(--primary); outline-offset: 3px.

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.88); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid var(--line).
- `nav`: display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; padding: .85rem 0.

## 交互与动效

动效令牌：`--dur-fast: 70ms`；`--dur: 90ms`；`--pop: cubic-bezier(.34,1.56,.64,1)`。

- `:focus-visible`: outline: 3px solid var(--primary); outline-offset: 2px; border-radius: 6px.
- `.nav-links a:hover`: background: rgba(37,99,235,.09).
- `.nav-links a:active`: transform: scale(.95).
- `.btn-primary:hover`: background: var(--primary-deep); transform: translateY(-1px); box-shadow: 0 9px 20px rgba(37,99,235,.36).
- `.btn-secondary:hover`: border-color: rgba(37,99,235,.5); transform: translateY(-1px).
- `.btn-ghost:hover`: background: rgba(37,99,235,.09).
- `.btn:active`: transform: scale(.96).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.
- `.icon-btn:hover`: transform: rotate(8deg) translateY(-1px); border-color: rgba(37,99,235,.5); color: var(--primary).
- `.icon-btn:active`: transform: scale(.9).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--primary); outline-offset: 2px; border-radius: 6px.
- `.switch-input:focus-visible+.switch .switch-track`: outline: 3px solid var(--primary); outline-offset: 3px.
- `.field input:focus-visible,.field textarea:focus-visible`: outline: 3px solid var(--primary); outline-offset: 1px; border-color: var(--primary).
- `.is-error input:focus-visible`: outline-color: var(--error).

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
