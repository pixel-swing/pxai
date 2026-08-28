---
name: "02 新拟态"
version: "alpha"
id: "02-neumorphism"
source: "style-templates/pages/02-neumorphism.html"
description: "新拟态（Neumorphism / Soft UI）：单色浅底上的双向柔和阴影，让控件像从表面轻轻挤出或压入，柔软而克制。"
colors:
  color-light: "#F5F5F5"
  bg: "#E6ECF3"
  color-primary: "#C8E0F4"
  color-pink: "#F5E0E8"
  ink: "#2C3549"
  text: "#3D4A5C"
  muted: "#5B6A80"
  accent: "#33608D"
  primary: "#33608D"
  on-primary: "#FFFFFF"
  surface: "#E6ECF3"
  on-surface: "#2C3549"
typography:
  display-lg:
    fontFamily: "Nunito"
    fontSize: "3rem"
    fontWeight: "800"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Nunito"
    fontSize: "2rem"
    fontWeight: "800"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Nunito"
    fontSize: "1.5rem"
    fontWeight: "800"
    lineHeight: "1.2"
  body-md:
    fontFamily: "Nunito"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Nunito"
    fontSize: ".8125rem"
    fontWeight: "800"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Nunito"
    fontSize: ".9375rem"
    fontWeight: "800"
    lineHeight: "1.4"
rounded:
  radius: "14px"
  radius-lg: "22px"
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

# 02 新拟态 Design System

## 品牌与视觉方向

新拟态（Neumorphism / Soft UI）：单色浅底上的双向柔和阴影，让控件像从表面轻轻挤出或压入，柔软而克制。

视觉关键词来自页面本身：从表面轻轻挤出的柔软界面；风格特性；双向柔和阴影；凸起与凹陷；柔和单色粉彩；按钮与控件；表单示例；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--color-light` | `#F5F5F5` |
| `--bg` | `#E6ECF3` |
| `--bg-grad` | `linear-gradient(145deg,#F0F5FA,#DDE4EC)` |
| `--color-primary` | `#C8E0F4` |
| `--color-pink` | `#F5E0E8` |
| `--shadow-soft-1` | `-6px -6px 14px rgba(255,255,255,.85)` |
| `--shadow-soft-2` | `6px 6px 14px rgba(96,114,140,.28)` |
| `--shadow-inset` | `inset 4px 4px 9px rgba(96,114,140,.28),inset -4px -4px 9px rgba(255,255,255,.85)` |
| `--ink` | `#2C3549` |
| `--text` | `#3D4A5C` |
| `--muted` | `#5B6A80` |
| `--accent` | `#33608D` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F5F5F5`、`#E6ECF3`、`#F0F5FA`、`#DDE4EC`、`#C8E0F4`、`#F5E0E8`、`#2C3549`、`#3D4A5C`、`#5B6A80`、`#33608D`、`#204568`、`#D3E6F7`、`#BCD6EC`、`#16344F`、`#93A1B5`、`#8C3A5C`、`#FBEAF1`、`#F0D6E0`、`#8896AB`。

## 字体与信息层级

字体族：**Nunito**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--bg); color: var(--text); font-size: 16px; line-height: 1.65.
- `h1,h2,h3`: color: var(--ink); line-height: 1.2; font-weight: 800.
- `h2`: font-size: clamp(1.4rem,3vw,1.85rem); margin-bottom: 1.75rem; display: flex; align-items: center; gap: .75rem.
- `h2::before`: content: ""; width: 14px; height: 14px; border-radius: 50%; background: var(--bg-grad); box-shadow: var(--shadow-raised).
- `.eyebrow`: display: inline-block; padding: .45rem 1.1rem; border-radius: 999px; font-size: .8125rem; font-weight: 800; letter-spacing: .12em; color: var(--accent); background: var(--bg-grad); box-shadow: var(--shadow-inset); margin-bottom: 1.25rem.
- `.hero h1`: font-size: clamp(2.1rem,5.5vw,3.4rem); margin-bottom: 1.1rem.
- `.card h3`: font-size: 1.1rem; margin-bottom: .5rem.
- `.swatch .label`: padding-top: .7rem; font-size: .8125rem; font-weight: 700; color: var(--ink); display: flex; justify-content: space-between; gap: .5rem.
- `.swatch .label code`: color: var(--muted); font-weight: 400.
- `.t-display`: font-size: clamp(2.2rem,5vw,3rem); font-weight: 800; color: var(--ink); line-height: 1.15.

## 形状、间距与深度

圆角令牌：`--border-radius: 14px`；`--radius-lg: 22px`。
阴影/海拔令牌：`--shadow-soft-1: -6px -6px 14px rgba(255,255,255,.85)`；`--shadow-soft-2: 6px 6px 14px rgba(96,114,140,.28)`；`--shadow-raised: var(--shadow-soft-1),var(--shadow-soft-2)`；`--shadow-inset: inset 4px 4px 9px rgba(96,114,140,.28),inset -4px -4px 9px rgba(255,255,255,.85)`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 clamp(1rem,4vw,2rem).
- `section`: padding: clamp(2.25rem,5vw,3.5rem) 0.
- `.hero`: padding-top: clamp(2.5rem,6vw,4.5rem).
- `.hero-grid`: display: grid; grid-template-columns: minmax(0,1.15fr) minmax(0,.85fr); gap: clamp(2rem,5vw,3.5rem); align-items: center.
- `.hero h1`: font-size: clamp(2.1rem,5.5vw,3.4rem); margin-bottom: 1.1rem.
- `.hero p`: max-width: 32em; margin-bottom: 2rem.
- `.hero-actions`: display: flex; gap: 1.1rem; flex-wrap: wrap.
- `.hero-grid`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; min-height: 46px; padding: .7rem 1.6rem; font: inherit; font-weight: 800; font-size: .9375rem; color: var(--text); background: var(--bg-grad); border: none; border-radius: var(--border-radius); box-shadow: var(--shadow-raised); cursor: pointer; transition: box-shadow var(--dur) var(--ease),transform var(--dur) var(--ease),color var(--dur) var(--ease).
- `.btn:hover`: color: var(--accent).
- `.btn:active`: box-shadow: var(--shadow-inset); transform: scale(.98).
- `.btn:disabled`: color: #93A1B5; box-shadow: var(--shadow-inset); cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: var(--bg-grad); border-radius: var(--radius-lg); box-shadow: var(--shadow-raised); padding: 1.75rem; transition: transform var(--dur) var(--ease).
- `.card:hover`: transform: translateY(-4px).
- `.card .icon`: width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; color: var(--accent); box-shadow: var(--shadow-inset); margin-bottom: 1.1rem.
- `.card h3`: font-size: 1.1rem; margin-bottom: .5rem.
- `.card p`: font-size: .9375rem; color: var(--muted).

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .8rem; cursor: pointer; font-weight: 800; color: var(--ink).
- `.switch input`: appearance: none; width: 60px; height: 32px; border-radius: 999px; background: var(--bg); box-shadow: var(--shadow-inset); position: relative; cursor: pointer; margin: 0; transition: background-color var(--dur) var(--ease).
- `.switch input::after`: content: ""; position: absolute; top: 4px; left: 4px; width: 24px; height: 24px; border-radius: 50%; background: var(--bg-grad); box-shadow: 2px 2px 5px rgba(96,114,140,.35),-2px -2px 5px rgba(255,255,255,.9); transition: transform var(--dur) var(--ease).
- `.switch input:checked`: background: #BCD6EC.
- `.switch input:checked::after`: transform: translateX(28px).
- `.field`: display: grid; gap: .55rem.
- `input[type=text],input[type=email],textarea`: font: inherit; font-size: 1rem; color: var(--text); width: 100%; padding: .85rem 1.1rem; border: none; border-radius: var(--border-radius); background: var(--bg); box-shadow: var(--shadow-inset).

### 导航

- `header`: padding: 1rem 0; position: sticky; top: 0; z-index: 10; background: rgba(230,236,243,.92).
- `.nav`: display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; background: var(--bg-grad); border-radius: 999px; box-shadow: var(--shadow-raised); padding: .7rem 1.4rem.
- `.nav ul`: display: flex; gap: 1.1rem; list-style: none; flex-wrap: wrap.
- `.nav ul a`: color: var(--muted); font-weight: 700; font-size: .9375rem; transition: color var(--dur) var(--ease).
- `.nav ul a:hover`: color: var(--accent).
- `footer nav`: display: flex; gap: 1.25rem; flex-wrap: wrap.

## 交互与动效

动效令牌：`--dur: 150ms`；`--ease: ease-out`。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 6px.
- `.nav ul a:hover`: color: var(--accent).
- `.btn:hover`: color: var(--accent).
- `.btn:active`: box-shadow: var(--shadow-inset); transform: scale(.98).
- `.btn-primary:hover`: color: #16344F.
- `.btn-ghost:hover`: box-shadow: var(--shadow-raised).
- `.btn:disabled`: color: #93A1B5; box-shadow: var(--shadow-inset); cursor: not-allowed; transform: none.
- `.card:hover`: transform: translateY(-4px).
- `.switch input:checked`: background: #BCD6EC.
- `.switch input:checked::after`: transform: translateX(28px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:820px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 6px.
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
