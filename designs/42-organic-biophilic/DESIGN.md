---
name: "42 有机亲生物"
version: "alpha"
id: "42-organic-biophilic"
source: "style-templates/pages/42-organic-biophilic.html"
description: "有机亲生物风格演示：大地色系、有机曲线圆角、自然柔和阴影与流动的植物形态，传递疗愈与可持续气质。"
colors:
  forest-green: "#228B22"
  forest-deep: "#1B6E1B"
  earth-brown: "#8B4513"
  sky-blue: "#87CEEB"
  cream-bg: "#F5F5DC"
  card-bg: "#FDFBEF"
  ink: "#33261A"
  ink-soft: "#5C4A33"
  background: "#F5F5DC"
  on-background: "#33261A"
  primary: "#1B6E1B"
  on-primary: "#FFFFFF"
  secondary: "#87CEEB"
  on-secondary: "#215D7A"
  tertiary: "#8B4513"
  on-tertiary: "#FFFFFF"
  surface: "#FDFBEF"
  on-surface: "#33261A"
typography:
  display-lg:
    fontFamily: "Fraunces"
    fontSize: "54px"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Fraunces"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Fraunces"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Nunito"
    fontSize: "16.5px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Nunito"
    fontSize: "14px"
    fontWeight: "800"
    lineHeight: "1.4"
    letterSpacing: ".18em"
  button-md:
    fontFamily: "Nunito"
    fontSize: "16px"
    fontWeight: "800"
    lineHeight: "1.4"
rounded:
  organic-radius: "24px"
  DEFAULT: "24px"
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

# 42 有机亲生物 Design System

## 品牌与视觉方向

有机亲生物风格演示：大地色系、有机曲线圆角、自然柔和阴影与流动的植物形态，传递疗愈与可持续气质。

视觉关键词来自页面本身：让界面像 森林 一样 自由呼吸；核心视觉指纹；有机曲线；自然光影；大地色系；按钮与控件；预约一次森林浴；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--forest-green` | `#228B22` |
| `--forest-deep` | `#1B6E1B` |
| `--earth-brown` | `#8B4513` |
| `--sky-blue` | `#87CEEB` |
| `--cream-bg` | `#F5F5DC` |
| `--card-bg` | `#FDFBEF` |
| `--ink` | `#33261A` |
| `--ink-soft` | `#5C4A33` |
| `--shadow-soft` | `0 8px 32px rgba(0,0,0,.08)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#228B22`、`#1B6E1B`、`#8B4513`、`#87CEEB`、`#F5F5DC`、`#FDFBEF`、`#33261A`、`#5C4A33`、`#FFFFFF`、`#DAD6BC`、`#8B8670`、`#E8F0DB`、`#2E9E46`、`#A8DDF2`、`#B0703B`、`#DDF0FA`、`#2A6E8F`、`#F2E3D0`、`#FFF`、`#215D7A`、`#D8D2B8`、`#9A8F78`、`#EDEBD3`。

## 字体与信息层级

字体族：**Fraunces**、**Nunito**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--cream-bg); color: var(--ink); font-family: var(--font-body); font-size: 16.5px; line-height: 1.65; overflow-x: hidden; background-image: radial-gradient(rgba(139,69,19,.05) 1px,transparent 1px); background-size: 26px 26px.
- `h1,h2,h3`: font-family: var(--font-display); color: var(--ink).
- `h2`: font-size: clamp(24px,3.5vw,32px); margin-bottom: 10px.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; background: #E8F0DB; color: var(--forest-deep); font-weight: 800; font-size: 14px; padding: 8px 16px; border-radius: 999px; margin-bottom: 20px.
- `.hero h1`: font-size: clamp(34px,5.5vw,54px); line-height: 1.2; margin-bottom: 16px.
- `.hero h1 em`: font-style: normal; color: var(--forest-deep).
- `.card h3`: font-size: 19px; margin-bottom: 10px.
- `.t-display`: font-family: var(--font-display); font-weight: 700; font-size: clamp(36px,6vw,54px); line-height: 1.15; color: var(--forest-deep).
- `.t-h`: font-family: var(--font-display); font-weight: 600; font-size: 26px.
- `.t-body`: font-size: 16.5px; max-width: 60ch.

## 形状、间距与深度

圆角令牌：`--organic-radius: 24px`；`--blob-radius: 58% 42% 55% 45% / 52% 58% 42% 48%`。
阴影/海拔令牌：`--shadow-soft: 0 8px 32px rgba(0,0,0,.08)`。

- `.container`: max-width: 1060px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 64px 0.
- `.hero`: position: relative; padding: 80px 0 72px.
- `.hero-grid`: display: grid; gap: 44px; align-items: center.
- `.hero-grid`: grid-template-columns: 1.1fr .9fr.
- `.hero h1`: font-size: clamp(34px,5.5vw,54px); line-height: 1.2; margin-bottom: 16px.
- `.hero h1 em`: font-style: normal; color: var(--forest-deep).
- `.hero p.lead`: color: var(--ink-soft); max-width: 50ch; margin-bottom: 28px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap.

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font-family: var(--font-body); font-weight: 800; font-size: 16px; padding: 13px 26px; border-radius: 999px; border: 2px solid transparent; cursor: pointer; text-decoration: none; transition: transform .25s ease,box-shadow .25s ease,background .25s ease.
- `.btn:disabled`: background: #DAD6BC; color: #8B8670; border-color: transparent; box-shadow: none; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: var(--card-bg); padding: 30px 26px; box-shadow: var(--shadow-soft); transition: transform .3s ease,box-shadow .3s ease.
- `.card:nth-child(1)`: border-radius: 32px 22px 36px 24px.
- `.card:nth-child(2)`: border-radius: 22px 36px 24px 32px.
- `.card:nth-child(3)`: border-radius: 36px 24px 32px 22px.
- `.card:hover`: transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,.1).
- `.card .icon`: width: 52px; height: 52px; display: grid; place-items: center; border-radius: var(--blob-radius); background: #E8F0DB; color: var(--forest-deep); margin-bottom: 16px.
- `.card:nth-child(2) .icon`: background: #DDF0FA; color: #2A6E8F.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-weight: 700; font-size: 15.5px.
- `.switch input`: position: absolute; opacity: 0; width: 54px; height: 30px; cursor: pointer.
- `.switch input:checked+.slider`: background: var(--forest-deep).
- `.switch input:checked+.slider::after`: transform: translateX(24px).
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--forest-deep); outline-offset: 3px.
- `.field`: display: grid; gap: 8px.
- `input[type=text],input[type=email],textarea`: background: #FFFFFF; border: 1.5px solid #D8D2B8; border-radius: 16px; color: var(--ink); font-family: var(--font-body); font-size: 16px; padding: 13px 16px; width: 100%; transition: border-color .2s,box-shadow .2s.

### 导航

- `header`: background: rgba(245,245,220,.9); backdrop-filter: blur(8px); position: sticky; top: 0; z-index: 50; border-bottom: 1px solid rgba(34,139,34,.18).
- `.nav`: display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 14px 20px; max-width: 1060px; margin: 0 auto.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--forest-deep); outline-offset: 3px; border-radius: 8px.
- `.nav-links a:hover`: color: var(--forest-deep).
- `.btn-primary:hover`: background: var(--forest-green); transform: translateY(-3px); box-shadow: 0 14px 30px rgba(27,110,27,.3).
- `.btn-primary:active`: transform: translateY(0); box-shadow: 0 6px 14px rgba(27,110,27,.25).
- `.btn-secondary:hover`: background: rgba(34,139,34,.1).
- `.btn-secondary:active`: background: rgba(34,139,34,.18).
- `.btn-ghost:hover`: background: rgba(139,69,19,.08).
- `.btn:disabled`: background: #DAD6BC; color: #8B8670; border-color: transparent; box-shadow: none; cursor: not-allowed; transform: none.
- `.card:hover`: transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,.1).
- `.switch input:checked+.slider`: background: var(--forest-deep).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:880px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--forest-deep); outline-offset: 3px; border-radius: 8px.
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--forest-deep); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--forest-deep); box-shadow: 0 0 0 4px rgba(34,139,34,.18).

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
