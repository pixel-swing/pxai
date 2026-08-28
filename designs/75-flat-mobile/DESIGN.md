---
name: "75 扁平移动端（触控优先）"
version: "alpha"
id: "75-flat-mobile"
source: "style-templates/pages/75-flat-mobile.html"
description: "扁平移动端风格演示：色块分区、零阴影、纯色图标容器与 scale 0.97 即时按压反馈。"
colors:
  bg: "#FFFFFF"
  surface: "#F3F4F6"
  fg: "#111827"
  muted: "#4B5563"
  primary: "#2563EB"
  primary-bright: "#3B82F6"
  primary-dark: "#1D4ED8"
  secondary: "#047857"
  secondary-bright: "#10B981"
  accent: "#F59E0B"
  border: "#E5E7EB"
  on-primary: "#FFFFFF"
  on-surface: "#111827"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "40px"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: "-.5px"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "38px"
    fontWeight: "800"
    lineHeight: "1.15"
    letterSpacing: "-.5px"
  headline-md:
    fontFamily: "Inter"
    fontSize: "26px"
    fontWeight: "800"
    lineHeight: "1.2"
    letterSpacing: "-.5px"
  body-md:
    fontFamily: "Inter"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: "1.5px"
  button-md:
    fontFamily: "Inter"
    fontSize: "17px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius-sm: "6px"
  radius-md: "12px"
  radius-pill: "999px"
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

# 75 扁平移动端（触控优先） Design System

## 品牌与视觉方向

扁平移动端风格演示：色块分区、零阴影、纯色图标容器与 scale 0.97 即时按压反馈。

视觉关键词来自页面本身：色块构建层级 触控即时回应；为什么选扁平；色块分区；即时按压；极速渲染；按钮与控件；预约演示；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#FFFFFF` |
| `--surface` | `#F3F4F6` |
| `--fg` | `#111827` |
| `--muted` | `#4B5563` |
| `--primary` | `#2563EB` |
| `--primary-bright` | `#3B82F6` |
| `--primary-dark` | `#1D4ED8` |
| `--secondary` | `#047857` |
| `--secondary-bright` | `#10B981` |
| `--accent` | `#F59E0B` |
| `--border` | `#E5E7EB` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FFFFFF`、`#F3F4F6`、`#111827`、`#4B5563`、`#2563EB`、`#3B82F6`、`#1D4ED8`、`#047857`、`#10B981`、`#F59E0B`、`#E5E7EB`、`#DBEAFE`、`#FFF`、`#1E40AF`、`#EFF6FF`、`#1F2937`、`#065F46`、`#6B7280`、`#9CA3AF`、`#D1FAE5`、`#D1D5DB`。

## 字体与信息层级

字体族：**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); background: #DBEAFE; color: var(--fg); line-height: 1.6; display: flex; justify-content: center; padding: 22px 10px 44px.
- `.eyebrow`: display: inline-block; background: #1E40AF; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 8px 12px; border-radius: var(--radius-pill).
- `h1`: font-size: clamp(30px,9vw,38px); line-height: 1.15; letter-spacing: -.5px; font-weight: 800; margin: 16px 0 12px; position: relative.
- `h2`: font-size: 26px; font-weight: 800; letter-spacing: -.5px; line-height: 1.2; margin: 6px 0 18px.
- `.card h3`: font-size: 18px; font-weight: 800; margin-bottom: 6px.
- `.t-display`: font-size: 40px; font-weight: 800; letter-spacing: -.5px; line-height: 1.1.
- `.t-title`: font-size: 24px; font-weight: 700; line-height: 1.25.
- `.t-body`: font-size: 17px; line-height: 1.6.
- `.t-label`: font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase.
- `.tab .t-ico`: width: 32px; height: 32px; border-radius: var(--radius-sm); display: grid; place-items: center; color: var(--muted).

## 形状、间距与深度

圆角令牌：`--radius-sm: 6px`；`--radius-md: 12px`；`--radius-pill: 999px`。
阴影/海拔令牌：`--shadow: none`。

- `.hero :focus-visible`: outline-color: #fff.
- `.phone`: width: 100%; max-width: 430px; background: var(--bg); border: 8px solid var(--fg); border-radius: 48px; overflow: clip; box-shadow: var(--shadow).
- `.hero`: position: relative; overflow: hidden; background: var(--primary); color: #fff; padding: 40px 22px 44px.
- `.hero-actions`: display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap; position: relative.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 56px; padding: 14px 22px; font: inherit; font-weight: 700; font-size: 17px; border: 0; border-radius: var(--radius-sm); cursor: pointer; text-decoration: none; box-shadow: var(--shadow); transition: transform var(--press) linear,background 150ms ease,color 150ms ease.
- `.btn:active`: transform: scale(.97).
- `.btn:disabled`: background: var(--border); color: #6B7280; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: var(--bg); border-radius: var(--radius-md); padding: 20px; margin-bottom: 12px; box-shadow: var(--shadow).
- `.card h3`: font-size: 18px; font-weight: 800; margin-bottom: 6px.
- `.card p`: color: var(--muted); font-size: 16px.

### 表单与选择控件

- `.field`: margin-bottom: 16px.
- `.field label`: display: block; font-size: 14px; font-weight: 700; margin-bottom: 8px.
- `.field input,.field textarea`: width: 100%; min-height: 52px; background: var(--bg); border: 2px solid transparent; border-radius: var(--radius-sm); color: var(--fg); font: inherit; font-size: 16px; padding: 13px 14px.
- `.field textarea`: min-height: 110px; resize: vertical.
- `.field input::placeholder,.field textarea::placeholder`: color: #6B7280.
- `.field input:focus-visible,.field textarea:focus-visible`: border-color: var(--primary); outline-offset: 0.

### 导航

- `.nav`: display: flex; align-items: center; flex-wrap: wrap; gap: 2px; padding: 6px 14px 10px.
- `.tab`: display: flex; flex-direction: column; align-items: center; gap: 3px; text-decoration: none; color: var(--muted); font-size: 12px; font-weight: 600; padding: 6px 10px; min-width: 64px; min-height: 56px; border-radius: var(--radius-sm); transition: transform var(--press) linear.
- `.tab:active`: transform: scale(.97).
- `.tab .t-ico`: width: 32px; height: 32px; border-radius: var(--radius-sm); display: grid; place-items: center; color: var(--muted).
- `.tab[aria-current="page"]`: color: var(--primary).
- `.tab[aria-current="page"] .t-ico`: background: var(--primary); color: #fff.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--primary-dark); outline-offset: 2px.
- `.hero :focus-visible`: outline-color: #fff.
- `.nav-link:hover`: color: var(--primary); background: var(--surface).
- `.nav-cta:hover`: background: var(--primary-dark).
- `.nav-cta:active`: transform: scale(.97).
- `.btn:active`: transform: scale(.97).
- `.btn-inv:hover`: background: #EFF6FF.
- `.btn-line:hover`: background: #1D4ED8.
- `.btn-primary:hover`: background: var(--primary-dark).
- `.btn-secondary:hover`: background: #065F46.

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--primary-dark); outline-offset: 2px.
- `.hero :focus-visible`: outline-color: #fff.
- `.field input:focus-visible,.field textarea:focus-visible`: border-color: var(--primary); outline-offset: 0.

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
