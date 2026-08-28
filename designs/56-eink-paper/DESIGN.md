---
name: "56 电子墨水/纸感"
version: "alpha"
id: "56-eink-paper"
source: "style-templates/pages/56-eink-paper.html"
description: "电子墨水/纸感风格演示：米白纸底、高对比墨字、颗粒纹理与零动效的安静阅读界面。"
colors:
  paper-bg: "#FDFBF7"
  paper-deep: "#F5F5F5"
  ink-color: "#1A1A1A"
  pencil-grey: "#4A4A4A"
  border-color: "#E0E0E0"
  highlight: "#FFFF00"
  background: "#FDFBF7"
  on-background: "#1A1A1A"
  primary: "#1A1A1A"
  on-primary: "#FFFFFF"
  secondary: "#F5F5F5"
  on-secondary: "#1A1A1A"
  tertiary: "#FFFF00"
  on-tertiary: "#1A1A1A"
  surface: "#FDFBF7"
  on-surface: "#1A1A1A"
typography:
  display-lg:
    fontFamily: "Noto Serif SC"
    fontSize: "50px"
    fontWeight: "900"
    lineHeight: "1.35"
  headline-lg:
    fontFamily: "Noto Serif SC"
    fontSize: "56px"
    fontWeight: "900"
    lineHeight: "1.3"
  headline-md:
    fontFamily: "Noto Serif SC"
    fontSize: "36px"
    fontWeight: "900"
    lineHeight: "1.4"
  body-md:
    fontFamily: "Georgia"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Georgia"
    fontSize: "13px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".35em"
  button-md:
    fontFamily: "Georgia"
    fontSize: "15px"
    fontWeight: "600"
    lineHeight: "1"
rounded:
  DEFAULT: "10px"
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

# 56 电子墨水/纸感 Design System

## 品牌与视觉方向

电子墨水/纸感风格演示：米白纸底、高对比墨字、颗粒纹理与零动效的安静阅读界面。

视觉关键词来自页面本身：把屏幕调成 纸的温度；风格信息；安静，是一种设计；纸底墨字；颗粒纹理；按钮与控件；订一份安静的晨报；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--paper-bg` | `#FDFBF7` |
| `--paper-deep` | `#F5F5F5` |
| `--ink-color` | `#1A1A1A` |
| `--pencil-grey` | `#4A4A4A` |
| `--border-color` | `#E0E0E0` |
| `--highlight` | `#FFFF00` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FDFBF7`、`#F5F5F5`、`#1A1A1A`、`#4A4A4A`、`#E0E0E0`、`#FFFF00`、`#8A8A8A`、`#9A9A9A`。

## 字体与信息层级

字体族：**Noto Serif SC**、**Georgia**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-reading); font-size: 17px; line-height: 1.8; color: var(--ink-color); background: var(--paper-bg); overflow-x: hidden.
- `body::before`: content: ""; position: fixed; inset: 0; z-index: 50; pointer-events: none; opacity: .5; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E").
- `.eyebrow`: display: inline-block; font-size: 13px; letter-spacing: .35em; color: var(--pencil-grey); border: 1px solid var(--border-color); padding: 6px 14px; border-radius: var(--radius); margin-bottom: 22px.
- `h1`: font-weight: 900; font-size: clamp(34px,6vw,56px); line-height: 1.3; text-wrap: balance.
- `h1 mark`: background: var(--highlight); color: var(--ink-color); padding: 0 .1em.
- `h2`: font-weight: 900; font-size: clamp(26px,4vw,36px); line-height: 1.4; margin-bottom: 12px.
- `.card h3`: font-size: 19px; font-weight: 600; margin-bottom: 8px.
- `.t-display`: font-weight: 900; font-size: clamp(32px,5vw,50px); line-height: 1.35.
- `.t-h`: font-weight: 600; font-size: 27px; line-height: 1.5.
- `.t-body`: font-size: 17px; max-width: 600px.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 920px; margin: 0 auto; padding: 0 20px.
- `.hero`: padding: 64px 0 52px; border-bottom: 1px solid var(--border-color).
- `.hero-grid`: display: grid; gap: 44px; align-items: center.
- `.hero-grid`: grid-template-columns: 1.1fr .9fr.
- `.hero .lead`: margin: 20px 0 30px; max-width: 520px; color: var(--pencil-grey).
- `.hero-cta`: display: flex; gap: 14px; flex-wrap: wrap.
- `section.pad`: padding: 56px 0.
- `header,footer,.hero-cta,.controls-demo`: display: none.

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font: 600 15px/1 var(--font-reading); padding: 12px 22px; border: 1px solid var(--ink-color); border-radius: var(--radius); background: var(--ink-color); color: var(--paper-bg); cursor: pointer; text-decoration: none.
- `.btn:hover`: background: var(--paper-bg); color: var(--ink-color).
- `.btn:active`: background: var(--pencil-grey); color: var(--paper-bg).
- `.btn:disabled`: background: var(--paper-deep); border-color: var(--border-color); color: #8a8a8a; cursor: not-allowed.

### 卡片与容器

- `.card`: padding: 30px 26px; border-bottom: 1px solid var(--border-color).
- `.card:last-child`: border-bottom: none.
- `.card`: border-bottom: none; border-right: 1px solid var(--border-color).
- `.card:last-child`: border-right: none.
- `.card:hover`: background: var(--paper-deep).
- `.card .ic`: width: 46px; height: 46px; border: 1px solid var(--ink-color); border-radius: 50%; display: grid; place-items: center; margin-bottom: 16px.
- `.card h3`: font-size: 19px; font-weight: 600; margin-bottom: 8px.

### 表单与选择控件

- `.toggle-field`: display: flex; align-items: center; gap: 12px.
- `.toggle-input`: position: absolute; opacity: 0; width: 50px; height: 26px.
- `.toggle`: width: 50px; height: 26px; border: 1px solid var(--ink-color); border-radius: 999px; background: var(--paper-bg); position: relative; flex: none.
- `.toggle::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: var(--paper-bg); border: 1px solid var(--ink-color).
- `.toggle-input:checked+.toggle`: background: var(--ink-color).
- `.toggle-input:checked+.toggle::after`: left: 26px; background: var(--paper-bg); border-color: var(--paper-bg).
- `.toggle-input:focus-visible+.toggle`: outline: 2px solid var(--ink-color); outline-offset: 3px.

### 导航

- `header`: background: var(--paper-bg); border-bottom: 1px solid var(--ink-color).
- `.nav`: display: flex; align-items: center; gap: 18px; min-height: 62px; flex-wrap: wrap; padding: 8px 0.
- `.nav a.lnk`: display: none; font-size: 15px; text-decoration: none; border-bottom: 1px solid transparent; padding-bottom: 1px.
- `.nav a.lnk:hover`: border-bottom-color: var(--ink-color).
- `.nav a.lnk`: display: inline.
- `footer nav`: display: flex; gap: 20px; flex-wrap: wrap.

## 交互与动效

动效令牌：`--transition: none`。

- `:focus-visible`: outline: 2px solid var(--ink-color); outline-offset: 3px.
- `.nav a.lnk:hover`: border-bottom-color: var(--ink-color).
- `.btn:hover`: background: var(--paper-bg); color: var(--ink-color).
- `.btn:active`: background: var(--pencil-grey); color: var(--paper-bg).
- `.btn-secondary:hover`: background: var(--ink-color); color: var(--paper-bg).
- `.btn-ghost:hover`: background: var(--highlight); text-decoration: none.
- `.btn:disabled`: background: var(--paper-deep); border-color: var(--border-color); color: #8a8a8a; cursor: not-allowed.
- `.card:hover`: background: var(--paper-deep).
- `.toggle-input:checked+.toggle`: background: var(--ink-color).
- `.toggle-input:checked+.toggle::after`: left: 26px; background: var(--paper-bg); border-color: var(--paper-bg).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:720px)`、`(min-width:880px)`、`(min-width:800px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`、`print`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--ink-color); outline-offset: 3px.
- `.toggle-input:focus-visible+.toggle`: outline: 2px solid var(--ink-color); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-bottom: 2px solid var(--ink-color); background: var(--paper-deep).

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
