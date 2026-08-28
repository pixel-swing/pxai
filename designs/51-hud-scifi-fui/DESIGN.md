---
name: "51 HUD 科幻界面"
version: "alpha"
id: "51-hud-scifi-fui"
source: "style-templates/pages/51-hud-scifi-fui.html"
description: "HUD / Sci-Fi FUI 风格演示：1px 霓虹细线、辉光扫描、等宽字体与全息化数据界面。"
colors:
  hud-color: "#00FFFF"
  bg-color: "rgba(0,10,20,0.9)"
  bg-solid: "#01070D"
  panel: "rgba(0,22,34,0.62)"
  line: "rgba(0,255,255,0.38)"
  line-soft: "rgba(0,255,255,0.16)"
  text: "#BDEDF5"
  background: "#01070D"
  on-background: "#BDEDF5"
  primary: "#00FFFF"
  on-primary: "#000000"
  secondary: "#0080FF"
  on-secondary: "#FFFFFF"
  tertiary: "#FF0000"
  on-tertiary: "#FFFFFF"
  surface: "rgba(0,22,34,0.62)"
  on-surface: "#BDEDF5"
typography:
  display-lg:
    fontFamily: "Orbitron"
    fontSize: "46px"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: ".1em"
  headline-lg:
    fontFamily: "Orbitron"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: ".08em"
  headline-md:
    fontFamily: "Orbitron"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: ".08em"
  body-md:
    fontFamily: "Share Tech Mono"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Share Tech Mono"
    fontSize: "12px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".4em"
  button-md:
    fontFamily: "Share Tech Mono"
    fontSize: "14px"
    fontWeight: "700"
    lineHeight: "1"
    letterSpacing: ".14em"
rounded:
  DEFAULT: "0px"
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

# 51 HUD 科幻界面 Design System

## 品牌与视觉方向

HUD / Sci-Fi FUI 风格演示：1px 霓虹细线、辉光扫描、等宽字体与全息化数据界面。

视觉关键词来自页面本身：一切数据， 悬浮于视野之上；风格信息；核心子系统；细线与角标；扫描与辉光；等宽读数；按钮与控件；申请通讯链路。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--hud-color` | `#00FFFF` |
| `--bg-color` | `rgba(0,10,20,0.9)` |
| `--bg-solid` | `#01070D` |
| `--panel` | `rgba(0,22,34,0.62)` |
| `--line` | `rgba(0,255,255,0.38)` |
| `--line-soft` | `rgba(0,255,255,0.16)` |
| `--text` | `#BDEDF5` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#00FFFF`、`#0080FF`、`#FF0000`、`#333333`、`#01070D`、`#BDEDF5`、`#001318`、`#7BFFFF`、`#5F6D73`、`#7FD8E6`、`#8FDCE9`、`#3A5A63`、`#FF6B6B`、`#547A84`、`#6FB6C4`。

## 字体与信息层级

字体族：**Orbitron**、**Share Tech Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); font-size: 16px; line-height: 1.7; color: var(--text); background: var(--bg-solid); background-image: linear-gradient(var(--line-soft) 1px,transparent 1px),linear-gradient(90deg,var(--line-soft) 1px,transparent 1px); background-size: 44px 44px; overflow-x: hidden.
- `body::before`: content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 60; background: repeating-linear-gradient(0deg,rgba(0,255,255,.028) 0 1px,transparent 1px 3px).
- `body::after`: content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 59; background: radial-gradient(120% 90% at 50% 40%,transparent 55%,rgba(0,4,8,.8) 100%).
- `h1,h2,h3`: font-family: var(--font-display); letter-spacing: .08em; color: var(--hud-color); text-shadow: var(--glow) rgba(0,255,255,.75).
- `.eyebrow`: display: inline-block; font-size: 12px; letter-spacing: .4em; color: var(--holo-blue); border: 1px solid rgba(0,128,255,.5); padding: 6px 12px; margin-bottom: 20px.
- `h1`: font-size: clamp(30px,5.6vw,52px); line-height: 1.2; text-wrap: balance.
- `h2`: font-size: clamp(22px,3.4vw,32px); margin-bottom: 12px.
- `.card h3`: font-size: 17px; margin-bottom: 8px.
- `.t-display`: font-family: var(--font-display); font-size: clamp(30px,5vw,46px); color: var(--hud-color); text-shadow: var(--glow) rgba(0,255,255,.7); letter-spacing: .1em.
- `.t-h`: font-family: var(--font-display); font-size: 24px; color: var(--hud-color).

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 1100px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 1.
- `.hero`: padding: 72px 0 56px.
- `.hero-grid`: display: grid; gap: 36px; align-items: center.
- `.hero-grid`: grid-template-columns: 1.2fr .8fr.
- `.hero .lead`: margin: 18px 0 30px; max-width: 520px.
- `.hero-cta`: display: flex; gap: 14px; flex-wrap: wrap.
- `section.pad`: padding: 64px 0.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; font: 700 14px/1 var(--font); letter-spacing: .14em; padding: 13px 22px; cursor: pointer; text-decoration: none; border: var(--line-width) solid var(--hud-color); background: var(--hud-color); color: #001318; clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px); transition: box-shadow .2s linear,background .2s linear,color .2s linear.
- `.btn:hover`: box-shadow: 0 0 14px rgba(0,255,255,.65),inset 0 0 8px rgba(255,255,255,.35).
- `.btn:active`: background: #7BFFFF; box-shadow: 0 0 4px rgba(0,255,255,.5).
- `.btn:disabled`: background: transparent; border-color: var(--grid-line); color: #5f6d73; cursor: not-allowed; box-shadow: none; text-shadow: none.

### 卡片与容器

- `.panel`: position: relative; background: var(--panel); border: var(--line-width) solid var(--line).
- `.panel::before,.panel::after`: content: ""; position: absolute; width: 14px; height: 14px; pointer-events: none.
- `.panel::before`: top: -2px; left: -2px; border-top: 2px solid var(--hud-color); border-left: 2px solid var(--hud-color).
- `.panel::after`: bottom: -2px; right: -2px; border-bottom: 2px solid var(--hud-color); border-right: 2px solid var(--hud-color).
- `.card`: padding: 26px 22px; transition: box-shadow .2s linear,transform .2s linear.
- `.card:hover`: box-shadow: 0 0 18px rgba(0,255,255,.28); transform: translateY(-4px).
- `.card .ic`: width: 46px; height: 46px; border: var(--line-width) solid var(--line); display: grid; place-items: center; color: var(--hud-color); margin-bottom: 16px; filter: drop-shadow(0 0 4px rgba(0,255,255,.6)).

### 表单与选择控件

- `.toggle-field`: display: flex; align-items: center; gap: 12px.
- `.toggle-input`: position: absolute; opacity: 0; width: 58px; height: 26px.
- `.toggle`: width: 58px; height: 26px; border: var(--line-width) solid var(--line); position: relative; background: rgba(0,0,0,.5); flex: none.
- `.toggle::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 22px; height: 18px; background: #3a5a63; transition: left .15s linear,background .15s linear.
- `.toggle-input:checked+.toggle::after`: left: 31px; background: var(--hud-color); box-shadow: var(--glow) var(--hud-color).
- `.toggle-input:focus-visible+.toggle`: outline: 2px solid var(--hud-color); outline-offset: 3px.
- `.toggle-field label`: margin: 0; font-size: 14px; letter-spacing: .1em.

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: var(--bg-color); backdrop-filter: blur(6px); border-bottom: var(--line-width) solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 18px; height: 60px.
- `.nav a.lnk`: display: none; font-size: 14px; text-decoration: none; letter-spacing: .12em; border-bottom: 1px solid transparent; padding: 4px 2px.
- `.nav a.lnk:hover`: color: var(--hud-color); border-bottom-color: var(--hud-color); text-shadow: var(--glow) rgba(0,255,255,.6).
- `.nav a.lnk`: display: inline.
- `footer nav`: display: flex; gap: 20px; flex-wrap: wrap.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 2px solid var(--hud-color); outline-offset: 3px; box-shadow: var(--glow) var(--hud-color).
- `.nav a.lnk:hover`: color: var(--hud-color); border-bottom-color: var(--hud-color); text-shadow: var(--glow) rgba(0,255,255,.6).
- `.btn:hover`: box-shadow: 0 0 14px rgba(0,255,255,.65),inset 0 0 8px rgba(255,255,255,.35).
- `.btn:active`: background: #7BFFFF; box-shadow: 0 0 4px rgba(0,255,255,.5).
- `.btn-secondary:hover`: background: rgba(0,255,255,.12).
- `.btn-ghost:hover`: color: var(--hud-color).
- `.btn:disabled`: background: transparent; border-color: var(--grid-line); color: #5f6d73; cursor: not-allowed; box-shadow: none; text-shadow: none.
- `.card:hover`: box-shadow: 0 0 18px rgba(0,255,255,.28); transform: translateY(-4px).
- `.toggle-input:checked+.toggle::after`: left: 31px; background: var(--hud-color); box-shadow: var(--glow) var(--hud-color).
- `.toggle-input:focus-visible+.toggle`: outline: 2px solid var(--hud-color); outline-offset: 3px.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:880px)`、`(min-width:800px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--hud-color); outline-offset: 3px; box-shadow: var(--glow) var(--hud-color).
- `.toggle-input:focus-visible+.toggle`: outline: 2px solid var(--hud-color); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--hud-color); box-shadow: 0 0 10px rgba(0,255,255,.35),inset 0 0 6px rgba(0,255,255,.15).

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
