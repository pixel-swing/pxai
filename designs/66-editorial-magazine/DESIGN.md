---
name: "66 编辑网格/杂志"
version: "alpha"
id: "66-editorial-magazine"
source: "style-templates/pages/66-editorial-magazine.html"
description: "编辑网格/杂志风格：非对称网格、衬线排印、首字下沉与拉引语的印刷级数字杂志版式。"
colors:
  ink: "#000000"
  paper: "#FFFFFF"
  accent: "#C1121F"
  byline: "#595959"
  wash: "#F2F0EB"
  background: "#FFFFFF"
  on-background: "#000000"
  primary: "#C1121F"
  on-primary: "#FFFFFF"
  secondary: "#000000"
  on-secondary: "#FFFFFF"
  tertiary: "#F2F0EB"
  on-tertiary: "#000000"
  surface: "#FFFFFF"
  on-surface: "#000000"
typography:
  display-lg:
    fontFamily: "Archivo"
    fontSize: "56px"
    fontWeight: "900"
    lineHeight: "1.05"
  headline-lg:
    fontFamily: "Archivo"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.12"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Archivo"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.12"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "Merriweather"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Archivo"
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".22em"
  button-md:
    fontFamily: "Archivo"
    fontSize: "14px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".1em"
rounded:
  DEFAULT: "0px"
spacing:
  column-gap: "2rem"
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

# 66 编辑网格/杂志 Design System

## 品牌与视觉方向

编辑网格/杂志风格：非对称网格、衬线排印、首字下沉与拉引语的印刷级数字杂志版式。

视觉关键词来自页面本身：版式即 观点 ，网格即秩序；风格档案；本期特稿；非对称网格；首字下沉与栏线；拉引语系统；按钮与控件；读者来信。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--ink` | `#000000` |
| `--paper` | `#FFFFFF` |
| `--accent` | `#C1121F` |
| `--byline` | `#595959` |
| `--wash` | `#F2F0EB` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000000`、`#FFFFFF`、`#C1121F`、`#595959`、`#F2F0EB`、`#FFF`、`#C9C5BB`、`#8A8577`、`#262626`、`#D8D4CA`、`#333`。

## 字体与信息层级

字体族：**Archivo**、**Merriweather**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--paper); color: var(--ink); font-family: var(--body-font); font-size: 17px; line-height: 1.7.
- `h1,h2,h3`: font-family: var(--heading-font); line-height: 1.12; letter-spacing: -.01em.
- `.sec-head h2`: font-size: clamp(24px,3.4vw,34px); font-weight: 900; text-transform: uppercase.
- `.hero h1`: font-size: clamp(42px,7vw,84px); font-weight: 900; text-transform: uppercase; margin: 14px 0 20px.
- `.hero h1 em`: font-style: normal; color: var(--accent).
- `.card h3`: font-size: 22px; font-weight: 700; margin-bottom: 10px.
- `.t-display`: font-family: var(--heading-font); font-weight: 900; font-size: clamp(36px,5vw,56px); text-transform: uppercase; line-height: 1.05.
- `.t-h`: font-family: var(--heading-font); font-weight: 700; font-size: 28px.
- `.t-body`: font-size: 17px; max-width: 36em.
- `.t-label`: font-family: var(--heading-font); font-weight: 700; font-size: 12px; letter-spacing: .22em; text-transform: uppercase.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。
空间令牌：`--column-gap: 2rem`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 24px.
- `section`: padding: 56px 0; border-top: var(--rule-hair).
- `.hero`: border-top: none; padding: 64px 0 48px.
- `.hero-grid`: display: grid; grid-template-columns: 7fr 5fr; gap: var(--column-gap); align-items: start.
- `.hero h1`: font-size: clamp(42px,7vw,84px); font-weight: 900; text-transform: uppercase; margin: 14px 0 20px.
- `.hero h1 em`: font-style: normal; color: var(--accent).
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap.
- `.hero-grid,.excerpt,.cards`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; font-family: var(--heading-font); font-weight: 700; font-size: 14px; letter-spacing: .1em; text-transform: uppercase; padding: 12px 22px; border: 2px solid var(--ink); background: var(--ink); color: var(--paper); cursor: pointer; text-decoration: none; transition: background .2s,color .2s,border-color .2s.
- `.btn:hover`: background: var(--accent); border-color: var(--accent); color: #fff.
- `.btn:active`: transform: translateY(1px).
- `.btn.secondary`: background: transparent; color: var(--ink).
- `.btn.secondary:hover`: background: var(--ink); color: var(--paper).
- `.btn.ghost`: border-color: transparent; background: transparent; color: var(--ink); text-decoration: underline; text-underline-offset: 6px; text-decoration-thickness: 2px.
- `.btn.ghost:hover`: color: var(--accent).

### 卡片与容器

- `.card`: border-top: var(--rule-heavy); padding-top: 18px.
- `.card .no`: font-family: var(--heading-font); font-weight: 900; font-size: 15px; color: var(--accent); letter-spacing: .1em.
- `.card svg`: display: block; margin: 14px 0 12px.
- `.card h3`: font-size: 22px; font-weight: 700; margin-bottom: 10px.
- `.card p`: color: #333; font-size: 16px.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: 12px.
- `.switch`: appearance: none; width: 56px; height: 30px; border: 2px solid var(--ink); background: var(--paper); position: relative; cursor: pointer; flex: none; transition: background .2s.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; background: var(--ink); transition: transform .2s.
- `.switch:checked`: background: var(--accent); border-color: var(--accent).
- `.switch:checked::after`: transform: translateX(26px); background: var(--paper).
- `.switch-row label`: font-family: var(--heading-font); font-weight: 700; font-size: 14px; cursor: pointer.
- `.field`: margin-bottom: 20px.

### 导航

- `header`: border-bottom: var(--rule-heavy).
- `nav ul`: display: flex; gap: 26px; list-style: none; align-items: center; flex-wrap: wrap.
- `nav a`: font-family: var(--heading-font); font-weight: 700; font-size: 14px; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; border-bottom: 2px solid transparent; padding: 4px 0; transition: border-color .2s,color .2s.
- `nav a:hover`: color: var(--accent); border-bottom-color: var(--accent).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px.
- `nav a:hover`: color: var(--accent); border-bottom-color: var(--accent).
- `.btn:hover`: background: var(--accent); border-color: var(--accent); color: #fff.
- `.btn:active`: transform: translateY(1px).
- `.btn.secondary:hover`: background: var(--ink); color: var(--paper).
- `.btn.ghost:hover`: color: var(--accent).
- `.btn:disabled`: background: var(--wash); border-color: #C9C5BB; color: #8A8577; cursor: not-allowed; transform: none.
- `.switch:checked`: background: var(--accent); border-color: var(--accent).
- `.switch:checked::after`: transform: translateX(26px); background: var(--paper).
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px.

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:860px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--accent); outline-offset: 2px.

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
