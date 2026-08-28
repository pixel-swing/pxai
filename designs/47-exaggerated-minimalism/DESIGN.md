---
name: "47 夸张极简"
version: "alpha"
id: "47-exaggerated-minimalism"
source: "style-templates/pages/47-exaggerated-minimalism.html"
description: "夸张极简风格：超大字号、900 字重、黑白对比与单一强调色，用极致留白发出声明。"
colors:
  color-primary: "#000000"
  color-bg: "#FFFFFF"
  accent: "#FF4D00"
  neutral: "#F5F5F5"
  background: "#FFFFFF"
  on-background: "#000000"
  primary: "#000000"
  on-primary: "#FFFFFF"
  secondary: "#FF4D00"
  on-secondary: "#000000"
  tertiary: "#F5F5F5"
  on-tertiary: "#000000"
  surface: "#FFFFFF"
  on-surface: "#000000"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "3.5rem"
    fontWeight: "900"
    lineHeight: ".95"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "2.6rem"
    fontWeight: "900"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Inter"
    fontSize: "2.6rem"
    fontWeight: "900"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Inter"
    fontSize: "1.05rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: ".8rem"
    fontWeight: "900"
    lineHeight: "1.4"
    letterSpacing: ".35em"
  button-md:
    fontFamily: "Inter"
    fontSize: ".95rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".04em"
rounded:
  DEFAULT: "0px"
spacing:
  spacing: "2rem"
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

# 47 夸张极简 Design System

## 品牌与视觉方向

夸张极简风格：超大字号、900 字重、黑白对比与单一强调色，用极致留白发出声明。

视觉关键词来自页面本身：少， 即是 宣言。；三条 铁律；超大字号；极致留白；单一强调色；按钮与 控件；发起 合作；配色 板。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--color-primary` | `#000000` |
| `--color-bg` | `#FFFFFF` |
| `--accent` | `#FF4D00` |
| `--neutral` | `#F5F5F5` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000000`、`#FFFFFF`、`#FF4D00`、`#F5F5F5`、`#000`、`#FFF`、`#595959`、`#D4D4D4`、`#A8A8A8`。

## 字体与信息层级

字体族：**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--color-bg); color: var(--color-primary); font-family: var(--font-body); font-size: 17px; line-height: 1.6.
- `h2`: font-size: clamp(1.6rem,4vw,2.6rem); font-weight: var(--type-weight); letter-spacing: var(--tracking); text-transform: uppercase; margin-bottom: 2.5rem.
- `h2 span`: color: var(--accent).
- `.eyebrow`: display: inline-block; font-weight: 700; font-size: .85rem; letter-spacing: .35em; text-transform: uppercase; margin-bottom: 3rem.
- `.eyebrow::before`: content: ""; display: inline-block; width: 3em; height: 2px; background: var(--accent); vertical-align: middle; margin-right: 1em.
- `.hero h1`: font-size: var(--type-giant); font-weight: var(--type-weight); letter-spacing: var(--tracking); line-height: .95; text-transform: uppercase.
- `.hero h1 .accent`: color: var(--accent).
- `.hero h1 .outline`: color: transparent; -webkit-text-stroke: 2px #000.
- `.card h3`: font-size: 1.5rem; font-weight: 900; letter-spacing: var(--tracking); text-transform: uppercase; margin-bottom: .8rem.
- `.t-display`: font-size: var(--type-giant); font-weight: var(--type-weight); letter-spacing: var(--tracking); line-height: .95; text-transform: uppercase.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 1200px; margin: 0 auto; padding: 0 24px.
- `section`: padding: var(--spacing-huge) 0; border-bottom: 1px solid #000.
- `.hero`: padding: var(--spacing-huge) 0.
- `.hero h1`: font-size: var(--type-giant); font-weight: var(--type-weight); letter-spacing: var(--tracking); line-height: .95; text-transform: uppercase.
- `.hero h1 .accent`: color: var(--accent).
- `.hero h1 .outline`: color: transparent; -webkit-text-stroke: 2px #000.
- `.hero p`: max-width: 26em; font-size: 1.1rem; margin: 3rem 0.
- `.herofoot`: display: flex; justify-content: flex-end; margin-top: 4rem.
- `.herofoot svg`: color: var(--accent).

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: .5rem; font: 700 .95rem var(--font-body); text-transform: uppercase; letter-spacing: .04em; padding: .9rem 1.8rem; border: 2px solid #000; border-radius: 0; cursor: pointer; transition: background .2s,color .2s,transform .2s.
- `.btn:active`: transform: translate(2px,2px).
- `.btn:disabled`: opacity: .35; cursor: not-allowed; transform: none; background: #000; color: #fff.

### 卡片与容器

- `.card`: padding: 3rem 2rem; border-bottom: 2px solid #000; transition: background .2s,color .2s.
- `.card:last-child`: border-bottom: 0.
- `.card:hover`: background: #000; color: #fff.
- `.card:hover .num`: color: var(--accent).
- `.card svg`: display: block; margin-bottom: 1.5rem.
- `.card h3`: font-size: 1.5rem; font-weight: 900; letter-spacing: var(--tracking); text-transform: uppercase; margin-bottom: .8rem.
- `.card p`: font-size: 1rem; max-width: 30em.

### 表单与选择控件

- `::selection`: background: var(--accent); color: #000.
- `.switch`: display: inline-flex; align-items: center; gap: .7rem; cursor: pointer; font-weight: 700; font-size: .9rem; text-transform: uppercase.
- `.switch input`: position: absolute; opacity: 0; width: 56px; height: 30px; cursor: pointer.
- `.switch input:checked + .track::after`: transform: translateX(26px); background: var(--accent).
- `.switch input:focus-visible + .track`: outline: 3px solid var(--accent); outline-offset: 3px.
- `.field`: display: grid; gap: .7rem.
- `input[type=text],input[type=email],textarea`: width: 100%; border: 0; border-bottom: 2px solid #000; border-radius: 0; background: transparent; font: 400 1.15rem var(--font-body); padding: .6rem 0; color: #000; transition: border-color .2s.

### 导航

- `header`: border-bottom: 1px solid #000; background: var(--color-bg); position: sticky; top: 0; z-index: 10.
- `.nav`: display: flex; align-items: center; gap: 1.5rem; height: 72px.
- `.nav ul`: display: flex; gap: 1.5rem; list-style: none; margin-left: auto.
- `.nav ul a`: font-weight: 700; font-size: .9rem; text-transform: uppercase; letter-spacing: .02em; border-bottom: 2px solid transparent; transition: border-color .2s.
- `.nav ul a:hover`: border-bottom-color: var(--accent).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px.
- `.nav ul a:hover`: border-bottom-color: var(--accent).
- `.btn-primary:hover`: background: var(--accent); border-color: var(--accent); color: #000.
- `.btn-secondary:hover`: background: #000; color: #fff.
- `.btn-ghost:hover`: text-decoration-color: var(--accent).
- `.btn:active`: transform: translate(2px,2px).
- `.btn:disabled`: opacity: .35; cursor: not-allowed; transform: none; background: #000; color: #fff.
- `.card:hover`: background: #000; color: #fff.
- `.card:hover .num`: color: var(--accent).
- `.switch input:checked + .track::after`: transform: translateX(26px); background: var(--accent).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:860px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--accent); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent); outline-offset: 4px; border-bottom-color: var(--accent).

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
