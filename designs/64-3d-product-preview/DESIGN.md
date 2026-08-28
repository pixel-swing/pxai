---
name: "64 3D 产品预览"
version: "alpha"
id: "64-3d-product-preview"
source: "style-templates/pages/64-3d-product-preview.html"
description: "3D 产品预览风格：360° 旋转、材质切换、热点标注与 AR 预览的电商产品展示界面。"
colors:
  canvas-bg: "#F5F5F5"
  surface: "#FFFFFF"
  bg: "#E8E8E8"
  fg: "#1A1A1A"
  muted: "#5C6470"
  border: "#DDE1E6"
  hotspot: "#3B82F6"
  accent: "#2563EB"
  accent-dark: "#1D4ED8"
  background: "#E8E8E8"
  on-background: "#1A1A1A"
  primary: "#2563EB"
  on-primary: "#FFFFFF"
  secondary: "#1A1A1A"
  on-secondary: "#FFFFFF"
  tertiary: "#D97706"
  on-tertiary: "#FFFFFF"
  on-surface: "#1A1A1A"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "3.2rem"
    fontWeight: "900"
    lineHeight: "1.1"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Inter"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
  body-md:
    fontFamily: "Noto Sans SC"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "Noto Sans SC"
    fontSize: "13px"
    fontWeight: "700"
    lineHeight: "1.4"
  button-md:
    fontFamily: "Noto Sans SC"
    fontSize: "0.9375rem"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "14px"
  DEFAULT: "14px"
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

# 64 3D 产品预览 Design System

## 品牌与视觉方向

3D 产品预览风格：360° 旋转、材质切换、热点标注与 AR 预览的电商产品展示界面。

视觉关键词来自页面本身：把产品拿在手里看， 360° 每一面都真实；核心特性；拖拽 360° 旋转；材质与配色即时切换；AR 实景放置；按钮与控件；预约到店体验；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--canvas-bg` | `#F5F5F5` |
| `--surface` | `#FFFFFF` |
| `--bg` | `#E8E8E8` |
| `--fg` | `#1A1A1A` |
| `--muted` | `#5C6470` |
| `--border` | `#DDE1E6` |
| `--hotspot` | `#3B82F6` |
| `--accent` | `#2563EB` |
| `--accent-dark` | `#1D4ED8` |
| `--shadow-stage` | `0 24px 48px rgba(26,26,26,.18)` |
| `--shadow-card` | `0 2px 6px rgba(26,26,26,.06),0 12px 28px rgba(26,26,26,.08)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F5F5F5`、`#FFFFFF`、`#E8E8E8`、`#1A1A1A`、`#5C6470`、`#DDE1E6`、`#3B82F6`、`#2563EB`、`#1D4ED8`、`#FFF`、`#E3E3E3`、`#000`、`#374151`、`#D97706`、`#C7CCD4`、`#FAFBFC`、`#9AA1AC`。

## 字体与信息层级

字体族：**Inter**、**Noto Sans SC**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: margin: 0; background: linear-gradient(180deg,#FFFFFF,var(--bg)); color: var(--fg); font-family: "Noto Sans SC",Inter,-apple-system,"Microsoft YaHei",sans-serif; line-height: 1.65; font-size: 16px.
- `h1,h2,h3`: line-height: 1.2; margin: 0.
- `.eyebrow`: display: inline-flex; gap: 8px; align-items: center; font-size: 13px; font-weight: 700; color: var(--accent); background: rgba(37,99,235,.08); border: 1px solid rgba(37,99,235,.25); padding: 6px 12px; border-radius: 999px.
- `.hero h1`: font-size: clamp(2rem,4.6vw,3.2rem); font-weight: 900; letter-spacing: -.02em; margin: 16px 0 12px.
- `.sec-head h2`: font-size: 1.5rem; font-weight: 800; letter-spacing: -.01em.
- `.card h3`: font-size: 1.05rem; font-weight: 700; margin-bottom: 6px.
- `.type-row .label`: font-size: 12.5px; color: var(--muted); min-width: 150px; font-weight: 600.

## 形状、间距与深度

圆角令牌：`--radius: 14px`。
阴影/海拔令牌：`--shadow-stage: 0 24px 48px rgba(26,26,26,.18)`；`--shadow-card: 0 2px 6px rgba(26,26,26,.06),0 12px 28px rgba(26,26,26,.08)`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 24px.
- `.hero`: padding: 56px 0 40px; display: grid; gap: 40px; grid-template-columns: 1fr; align-items: center.
- `.hero`: grid-template-columns: 1.05fr .95fr; padding: 72px 0 56px.
- `.hero h1`: font-size: clamp(2rem,4.6vw,3.2rem); font-weight: 900; letter-spacing: -.02em; margin: 16px 0 12px.
- `.hero p.lead`: color: var(--muted); max-width: 46ch; margin: 0 0 24px.
- `.hero-cta`: display: flex; gap: 12px; flex-wrap: wrap.
- `section`: padding: 34px 0.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; font: inherit; font-weight: 700; padding: 12px 22px; border-radius: 999px; transition: transform .2s ease,box-shadow .2s ease,background .2s ease; min-height: 44px.
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.
- `.btn svg`: width: 17px; height: 17px.
- `.orbit button`: width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--border); background: #fff; cursor: pointer; display: grid; place-items: center; transition: border-color .15s,transform .15s.
- `.orbit button:hover`: border-color: var(--accent); transform: translateY(-2px).

### 卡片与容器

- `.card`: background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; box-shadow: var(--shadow-card); transition: transform .2s ease,box-shadow .2s ease.
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 16px 34px rgba(26,26,26,.12).
- `.card .icon`: width: 46px; height: 46px; border-radius: 12px; background: rgba(37,99,235,.1); display: grid; place-items: center; margin-bottom: 14px.
- `.card .icon svg`: width: 22px; height: 22px; color: var(--accent).
- `.card h3`: font-size: 1.05rem; font-weight: 700; margin-bottom: 6px.
- `.card p`: color: var(--muted); font-size: 14.5px; margin: 0.

### 表单与选择控件

- `.mats input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.mats input:focus-visible+label`: outline: 3px solid var(--hotspot); outline-offset: 3px.
- `.mats input:checked+label`: box-shadow: 0 0 0 3px var(--accent).
- `.switch`: position: relative; display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-weight: 600; font-size: 14.5px.
- `.switch input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch input:checked+.track`: background: var(--accent).
- `.switch input:checked+.track::after`: transform: translateX(20px).

### 导航

- `header`: position: sticky; top: 0; z-index: 10; background: rgba(255,255,255,.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border).
- `.nav`: display: flex; align-items: center; gap: 20px; height: 62px.
- `footer nav`: display: flex; gap: 16px.
- `footer nav a:hover`: color: var(--fg).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--hotspot); outline-offset: 3px; border-radius: 6px.
- `.nav-links a:hover`: color: var(--fg).
- `.btn-primary:hover`: background: var(--accent-dark); transform: translateY(-2px).
- `.btn-primary:active`: transform: scale(.97).
- `.btn-secondary:hover`: opacity: .88.
- `.btn-ghost:hover`: border-color: var(--fg).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.
- `.stage:hover .product`: animation-play-state: paused.
- `.mats label:hover`: transform: scale(1.12).
- `.mats input:focus-visible+label`: outline: 3px solid var(--hotspot); outline-offset: 3px.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:920px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--hotspot); outline-offset: 3px; border-radius: 6px.
- `.mats input:focus-visible+label`: outline: 3px solid var(--hotspot); outline-offset: 3px.
- `.switch input:focus-visible+.track`: outline: 3px solid var(--hotspot); outline-offset: 3px.
- `.field input:focus-visible,.field textarea:focus-visible`: outline: 3px solid var(--hotspot); outline-offset: 0; border-color: var(--accent).

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
