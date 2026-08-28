---
name: "25 交互式产品演示"
version: "alpha"
id: "25-interactive-demo"
source: "style-templates/pages/25-interactive-demo.html"
description: "交互式产品演示落地页风格：内嵌产品模型、播放遮罩、分步引导与悬停揭示，为 SaaS 与开发者工具打造的演示范式。"
colors:
  brand: "#4F46E5"
  brand-deep: "#4338CA"
  interface: "#0EA5E9"
  highlight: "#F59E0B"
  ink: "#111827"
  muted: "#4B5563"
  bg: "#F7F7FB"
  surface: "#FFFFFF"
  line: "#E5E7EB"
  overlay-bg: "rgba(0,0,0,.7)"
  primary: "#4F46E5"
  on-primary: "#FFFFFF"
  on-surface: "#111827"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "48px"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "1"
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

# 25 交互式产品演示 Design System

## 品牌与视觉方向

交互式产品演示落地页风格：内嵌产品模型、播放遮罩、分步引导与悬停揭示，为 SaaS 与开发者工具打造的演示范式。

视觉关键词来自页面本身：别只是介绍产品， 让访客 亲手体验 它；分步引导，悬停揭示；悬停即揭示；内嵌产品走查；平滑缩放交互；按钮与控件；预约 1:1 产品演示；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--brand` | `#4F46E5` |
| `--brand-deep` | `#4338CA` |
| `--interface` | `#0EA5E9` |
| `--highlight` | `#F59E0B` |
| `--ink` | `#111827` |
| `--muted` | `#4B5563` |
| `--bg` | `#F7F7FB` |
| `--surface` | `#FFFFFF` |
| `--line` | `#E5E7EB` |
| `--overlay-bg` | `rgba(0,0,0,.7)` |
| `--shadow` | `0 14px 34px rgba(17,24,39,.10)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#4F46E5`、`#4338CA`、`#0EA5E9`、`#F59E0B`、`#111827`、`#4B5563`、`#F7F7FB`、`#FFFFFF`、`#E5E7EB`、`#FFF`、`#C7D2FE`、`#EEF2FF`、`#0F172A`、`#1E293B`、`#F87171`、`#FBBF24`、`#34D399`、`#94A3B8`、`#1E1B4B`、`#92400E`、`#CBD5E1`、`#FEF3C7`、`#FDE68A`、`#D97706`。

## 字体与信息层级

字体族：**Space Grotesk**、**Inter**、**ui-monospace**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.65; color: var(--ink); background: var(--bg).
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.2.
- `h2`: font-size: clamp(24px,3.4vw,32px); margin-bottom: 8px.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; letter-spacing: .12em; color: var(--brand); background: #EEF2FF; border: 1px solid #C7D2FE; padding: 6px 12px; border-radius: 999px.
- `.hero h1`: font-size: clamp(34px,5.2vw,54px); margin: 18px 0 14px.
- `.hero h1 em`: font-style: normal; color: var(--brand).
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.t-display`: font-family: var(--font-display); font-weight: 700; font-size: clamp(34px,5vw,48px); line-height: 1.15.
- `.t-h`: font-family: var(--font-display); font-weight: 700; font-size: 28px.
- `.t-body`: font-size: 16px; color: var(--ink); max-width: 60ch.

## 形状、间距与深度

圆角令牌：`--radius: 16px`。
阴影/海拔令牌：`--shadow: 0 14px 34px rgba(17,24,39,.10)`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 20px.
- `.hero`: padding: 64px 0 56px.
- `.hero-grid`: display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center.
- `.hero h1`: font-size: clamp(34px,5.2vw,54px); margin: 18px 0 14px.
- `.hero h1 em`: font-style: normal; color: var(--brand).
- `.hero p`: color: var(--muted); font-size: 18px; max-width: 52ch.
- `.hero-cta`: display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px.
- `.hero-grid`: grid-template-columns: 1.05fr 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; font: 600 16px/1 var(--font-body); padding: 13px 22px; border-radius: 12px; border: 1.5px solid transparent; cursor: pointer; text-decoration: none; transition: transform var(--transition-duration),background var(--transition-duration),box-shadow var(--transition-duration).
- `.btn:active`: transform: translateY(0) scale(.97).
- `.btn[disabled]`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.panel`: background: rgba(255,255,255,.06); border-radius: 10px; padding: 12px; display: flex; flex-direction: column; gap: 10px.
- `.card`: position: relative; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; box-shadow: 0 4px 14px rgba(17,24,39,.05); transition: transform var(--transition-duration),box-shadow var(--transition-duration).
- `.card:hover`: transform: translateY(-4px); box-shadow: var(--shadow).
- `.card .ic`: width: 46px; height: 46px; border-radius: 12px; display: grid; place-items: center; background: #EEF2FF; color: var(--brand); margin-bottom: 14px.
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.card p`: color: var(--muted); font-size: 15px.
- `.card .stepno`: position: absolute; top: 22px; right: 22px; width: var(--step-indicator-size); height: var(--step-indicator-size); border-radius: 50%; border: 2px solid var(--highlight); color: #92400E; font-weight: 700; font-size: 14px; display: grid; place-items: center.

### 表单与选择控件

- `.field`: margin-bottom: 18px.
- `.input,textarea`: width: 100%; font: 400 16px/1.5 var(--font-body); color: var(--ink); background: var(--bg); border: 1.5px solid var(--line); border-radius: 12px; padding: 12px 14px; transition: border-color var(--transition-duration),box-shadow var(--transition-duration).
- `.input:hover,textarea:hover`: border-color: #A5B4FC.
- `.input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--brand); box-shadow: 0 0 0 4px rgba(79,70,229,.18).

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.9); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 20px; height: 64px.
- `.nav ul`: display: flex; gap: 18px; list-style: none; margin-left: auto.
- `.nav ul a`: color: var(--muted); text-decoration: none; font-weight: 500; font-size: 15px; transition: color var(--transition-duration).
- `.nav ul a:hover`: color: var(--brand).

## 交互与动效

动效令牌：`--transition-duration: 300ms`。

- `:focus-visible`: outline: 3px solid var(--brand); outline-offset: 2px; border-radius: 6px.
- `.nav ul a:hover`: color: var(--brand).
- `.btn-primary:hover`: background: var(--brand-deep); transform: translateY(-2px).
- `.btn-outline:hover`: border-color: var(--brand); transform: translateY(-2px).
- `.btn-ghost:hover`: color: var(--brand); background: #EEF2FF.
- `.btn:active`: transform: translateY(0) scale(.97).
- `.play:hover`: transform: translate(0,-2px) scale(1.06); background: rgba(0,0,0,.82).
- `.spot:hover .tip`: opacity: 1.
- `.card:hover`: transform: translateY(-4px); box-shadow: var(--shadow).
- `.card:hover .more,.card:focus-within .more`: opacity: 1; transform: none.

## 响应式与无障碍

源页面断点/用户偏好查询：`(hover:none)`、`(min-width:820px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--brand); outline-offset: 2px; border-radius: 6px.
- `.tgl:focus-visible+.tgl-lab .track`: outline: 3px solid var(--brand); outline-offset: 2px.
- `.input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--brand); box-shadow: 0 0 0 4px rgba(79,70,229,.18).

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
