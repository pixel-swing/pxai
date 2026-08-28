---
name: "82 黏土拟态（移动端）"
version: "alpha"
id: "82-claymorphism-mobile"
source: "style-templates/pages/82-claymorphism-mobile.html"
description: "多层阴影栈、渐变糖果按钮、饱满圆角与弹簧挤压交互的黏土拟态移动端风格演示"
colors:
  bg: "#F4F1FA"
  card-bg: "rgba(255,255,255,.7)"
  text: "#332F3A"
  muted: "#635F69"
  accent: "#7C3AED"
  accent2: "#DB2777"
  success: "#10B981"
  warning: "#F59E0B"
  primary: "#7C3AED"
  on-primary: "#FFFFFF"
  surface: "#F4F1FA"
  on-surface: "#332F3A"
typography:
  display-lg:
    fontFamily: "Nunito"
    fontSize: "40px"
    fontWeight: "900"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Nunito"
    fontSize: "26px"
    fontWeight: "900"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Nunito"
    fontSize: "26px"
    fontWeight: "900"
    lineHeight: "1.3"
  body-md:
    fontFamily: "DM Sans"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "DM Sans"
    fontSize: "13px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".08em"
  button-md:
    fontFamily: "Nunito"
    fontSize: "16px"
    fontWeight: "900"
    lineHeight: "1.4"
rounded:
  radius-outer: "50px"
  radius-card: "32px"
  radius-inner: "24px"
  radius-button: "20px"
  DEFAULT: "50px"
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

# 82 黏土拟态（移动端） Design System

## 品牌与视觉方向

多层阴影栈、渐变糖果按钮、饱满圆角与弹簧挤压交互的黏土拟态移动端风格演示

视觉关键词来自页面本身：像捏黏土一样 把应用捏进手心；今日软糖任务；风格信息；风格特性；多层阴影栈 = 黏土厚度；果冻渐变按钮；玻璃黏土混合卡；按钮与控件。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#F4F1FA` |
| `--card-bg` | `rgba(255,255,255,.7)` |
| `--text` | `#332F3A` |
| `--muted` | `#635F69` |
| `--accent` | `#7C3AED` |
| `--accent2` | `#DB2777` |
| `--success` | `#10B981` |
| `--warning` | `#F59E0B` |
| `--clay` | `12px 12px 28px rgba(160,150,180,.28),-8px -8px 20px rgba(255,255,255,.95),inset 2px 2px 6px rgba(255,255,255,.85),inset -4px -6px 12px rgba(124,58,237,.06)` |
| `--clay-sm` | `8px 8px 18px rgba(160,150,180,.25),-6px -6px 14px rgba(255,255,255,.9),inset 1px 2px 4px rgba(255,255,255,.8)` |
| `--grad-btn` | `linear-gradient(180deg,#A78BFA 0%,#7C3AED 42%,#7C3AED 100%)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F4F1FA`、`#332F3A`、`#635F69`、`#7C3AED`、`#DB2777`、`#10B981`、`#F59E0B`、`#A78BFA`、`#EAE4F6`、`#F6EDF3`、`#E9E7F8`、`#FFFFFF`、`#FFF`、`#F9A8D4`、`#E6E0F2`、`#6EE7B7`、`#E2DBEF`、`#F472B6`、`#DDF5EC`、`#065F46`、`#FDEFD7`、`#92400E`、`#8B8494`。

## 字体与信息层级

字体族：**Nunito**、**DM Sans**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: linear-gradient(160deg,#EAE4F6,#F6EDF3 55%,#E9E7F8); color: var(--text); font-size: 16px; line-height: 1.6.
- `.eyebrow`: display: inline-block; font-weight: 700; font-size: 13px; color: var(--accent); background: rgba(124,58,237,.12); border-radius: 999px; padding: 8px 16px.
- `.hero h1`: font-family: var(--font-heading); font-weight: 900; font-size: 38px; line-height: 1.18; margin: 14px 0 10px.
- `.hero h1 em`: font-style: normal; color: var(--accent).
- `.mascot-card h3`: font-family: var(--font-heading); font-weight: 900; font-size: 19px.
- `h2`: font-family: var(--font-heading); font-weight: 900; font-size: 26px; margin-bottom: 6px.
- `.fcard h3`: font-family: var(--font-heading); font-weight: 900; font-size: 18px; margin-bottom: 6px.
- `.t-display`: font-family: var(--font-heading); font-weight: 900; font-size: 40px; line-height: 1.1.
- `.t-h`: font-family: var(--font-heading); font-weight: 900; font-size: 26px.
- `.t-body`: font-size: 16px; color: var(--muted).

## 形状、间距与深度

圆角令牌：`--radius-outer: 50px`；`--radius-card: 32px`；`--radius-inner: 24px`；`--radius-button: 20px`。

- `.phone`: position: relative; width: 100%; max-width: 430px; background: var(--bg); border: 6px solid #FFFFFF; border-radius: var(--radius-outer); box-shadow: 24px 24px 60px rgba(140,125,170,.35),-14px -14px 34px rgba(255,255,255,.8); overflow: hidden; overflow: clip.
- `.hero`: position: relative; padding: 30px 20px 26px; overflow: hidden.
- `.hero h1`: font-family: var(--font-heading); font-weight: 900; font-size: 38px; line-height: 1.18; margin: 14px 0 10px.
- `.hero h1 em`: font-style: normal; color: var(--accent).
- `.hero p`: color: var(--muted); font-size: 16px; max-width: 32ch.
- `.hero-actions`: display: flex; gap: 12px; margin: 20px 0 24px; flex-wrap: wrap.
- `section`: padding: 26px 20px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 56px; padding: 14px 26px; border-radius: var(--radius-button); font-family: var(--font-heading); font-weight: 900; font-size: 16px; border: none; cursor: pointer; transition: transform .35s var(--spring),box-shadow .3s,filter .2s.
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; filter: grayscale(.5).

### 卡片与容器

- `.card`: background: var(--card-bg); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1.5px solid rgba(255,255,255,.9); border-radius: var(--radius-card); box-shadow: var(--clay); padding: 22px.

### 表单与选择控件

- `.switch-line`: display: flex; align-items: center; gap: 14px; padding: 16px 18px; background: var(--card-bg); border: 1.5px solid rgba(255,255,255,.9); border-radius: var(--radius-inner); box-shadow: var(--clay-sm).
- `.switch`: appearance: none; -webkit-appearance: none; width: 58px; height: 34px; border-radius: 999px; background: #E2DBEF; box-shadow: inset 3px 3px 6px rgba(160,150,180,.4),inset -2px -2px 4px rgba(255,255,255,.9); position: relative; cursor: pointer; transition: background .3s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 4px; left: 4px; width: 26px; height: 26px; border-radius: 50%; background: #fff; box-shadow: 3px 3px 8px rgba(160,150,180,.5); transition: transform .35s var(--spring).
- `.switch:checked`: background: var(--grad-btn).
- `.switch:checked::after`: transform: translateX(24px).
- `form .field`: margin-bottom: 16px.
- `input[type=text],input[type=email],textarea`: width: 100%; min-height: 54px; background: rgba(255,255,255,.85); border: 2px solid transparent; border-radius: 18px; box-shadow: inset 3px 3px 8px rgba(160,150,180,.28),inset -2px -2px 6px rgba(255,255,255,.9); color: var(--text); font-family: var(--font-body); font-size: 15.5px; padding: 14px 16px; transition: border-color .2s,box-shadow .2s.

### 导航

- `header.nav`: position: sticky; top: 0; z-index: 9; background: rgba(244,241,250,.75); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); padding: 10px 18px 12px.
- `.tabs`: display: flex; background: #fff; border-radius: 26px; box-shadow: var(--clay-sm); padding: 8px.
- `.tabs a`: flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 8px 4px; min-height: 52px; font-size: 11px; font-weight: 700; color: var(--muted); border-radius: 18px; transition: transform .35s var(--spring).
- `.tabs a:active`: transform: scale(.9).
- `.tabs a[aria-current]`: color: #fff; background: var(--grad-btn); box-shadow: 0 8px 16px rgba(124,58,237,.35).

## 交互与动效

动效令牌：`--spring: cubic-bezier(.34,1.56,.64,1)`。

- `:focus-visible`: outline: 3px solid rgba(124,58,237,.65); outline-offset: 3px; border-radius: 8px.
- `.nav-links a:hover`: color: var(--accent); background: rgba(255,255,255,.8).
- `.nav-links a[aria-current]`: color: #fff; background: var(--grad-btn); box-shadow: var(--clay-sm).
- `.btn-primary:hover`: filter: saturate(1.15); transform: translateY(-2px).
- `.btn-primary:active`: transform: scale(.92).
- `.btn-secondary:hover`: transform: translateY(-2px).
- `.btn-secondary:active`: transform: scale(.92).
- `.btn-ghost:hover`: background: rgba(124,58,237,.1).
- `.btn-ghost:active`: transform: scale(.92).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; filter: grayscale(.5).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid rgba(124,58,237,.65); outline-offset: 3px; border-radius: 8px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px rgba(124,58,237,.18),inset 2px 2px 6px rgba(160,150,180,.2).

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
