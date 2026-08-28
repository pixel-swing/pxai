---
name: "55 空间 UI（VisionOS）"
version: "alpha"
id: "55-spatial-ui-visionos"
source: "style-templates/pages/55-spatial-ui-visionos.html"
description: "VisionOS 空间 UI 风格演示：磨砂玻璃悬浮窗口、纵深层级、注视悬停与沉浸式环境。"
colors:
  glass-bg: "rgba(255,255,255,0.16)"
  glass-bg-strong: "rgba(255,255,255,0.24)"
  text: "#FFFFFF"
  text-soft: "rgba(255,255,255,0.78)"
  active-blue: "#66B8FF"
  active-teal: "#5AE0C8"
  background: "#10162E"
  on-background: "#FFFFFF"
  primary: "#66B8FF"
  on-primary: "#FFFFFF"
  secondary: "#5AE0C8"
  on-secondary: "#0A3A4A"
  tertiary: "rgba(255,255,255,0.24)"
  on-tertiary: "#FFFFFF"
  surface: "rgba(255,255,255,0.16)"
  on-surface: "#FFFFFF"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "48px"
    fontWeight: "800"
    lineHeight: "1.12"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "54px"
    fontWeight: "800"
    lineHeight: "1.15"
    letterSpacing: "-.02em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "36px"
    fontWeight: "800"
    lineHeight: "1.3"
    letterSpacing: "-.01em"
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
    letterSpacing: ".2em"
  button-md:
    fontFamily: "Inter"
    fontSize: "15px"
    fontWeight: "600"
    lineHeight: "1"
rounded:
  window-radius: "28px"
  card-radius: "24px"
  DEFAULT: "28px"
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

# 55 空间 UI（VisionOS） Design System

## 品牌与视觉方向

VisionOS 空间 UI 风格演示：磨砂玻璃悬浮窗口、纵深层级、注视悬停与沉浸式环境。

视觉关键词来自页面本身：界面悬浮在 你的房间里；风格信息；纵深的三种语言；磨砂玻璃；注视悬停；阴影述深；按钮与控件；申请空间体验。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--glass-bg` | `rgba(255,255,255,0.16)` |
| `--glass-bg-strong` | `rgba(255,255,255,0.24)` |
| `--glass-border` | `1px solid rgba(255,255,255,0.32)` |
| `--depth-shadow` | `0 8px 32px rgba(0,0,0,0.28),0 24px 64px rgba(0,0,0,0.22)` |
| `--depth-shadow-near` | `0 16px 48px rgba(0,0,0,0.38),0 40px 90px rgba(0,0,0,0.28)` |
| `--text` | `#FFFFFF` |
| `--text-soft` | `rgba(255,255,255,0.78)` |
| `--active-blue` | `#66B8FF` |
| `--active-teal` | `#5AE0C8` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FFFFFF`、`#66B8FF`、`#5AE0C8`、`#10162E`、`#0C1226`、`#1B2247`、`#233A5E`、`#1C4B54`、`#04263A`、`#0A3A4A`、`#FFF`、`#BFF5E8`。

## 字体与信息层级

字体族：**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); font-size: 16px; line-height: 1.65; color: var(--text); min-height: 100vh; overflow-x: hidden; background: #10162E linear-gradient(180deg,#0C1226 0%,#1B2247 34%,#233A5E 62%,#1C4B54 100%); background-attachment: fixed.
- `body::before,body::after`: content: ""; position: fixed; z-index: -1; border-radius: 50%; filter: blur(70px); pointer-events: none.
- `body::before`: width: 56vmax; height: 56vmax; top: -16vmax; left: -14vmax; background: radial-gradient(circle,rgba(120,90,220,.55),transparent 65%); animation: drift 16s ease-in-out infinite alternate.
- `body::after`: width: 48vmax; height: 48vmax; bottom: -12vmax; right: -12vmax; background: radial-gradient(circle,rgba(60,190,170,.45),transparent 65%); animation: drift 20s ease-in-out infinite alternate-reverse.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; letter-spacing: .12em; color: var(--active-teal); background: rgba(90,224,200,.14); border: 1px solid rgba(90,224,200,.4); padding: 7px 14px; border-radius: 999px; margin-bottom: 20px.
- `h1`: font-size: clamp(32px,5.6vw,54px); font-weight: 800; letter-spacing: -.02em; line-height: 1.15; text-wrap: balance; text-shadow: 0 2px 24px rgba(0,0,0,.35).
- `h2`: font-size: clamp(25px,3.8vw,36px); font-weight: 800; letter-spacing: -.01em; margin-bottom: 10px; text-shadow: 0 2px 18px rgba(0,0,0,.3).
- `.card h3`: font-size: 18px; font-weight: 700; margin-bottom: 6px.
- `.t-display`: font-size: clamp(30px,5vw,48px); font-weight: 800; letter-spacing: -.02em; line-height: 1.12.
- `.t-h`: font-size: 25px; font-weight: 700.

## 形状、间距与深度

圆角令牌：`--window-radius: 28px`；`--card-radius: 24px`。
阴影/海拔令牌：`--depth-shadow: 0 8px 32px rgba(0,0,0,0.28),0 24px 64px rgba(0,0,0,0.22)`；`--depth-shadow-near: 0 16px 48px rgba(0,0,0,0.38),0 40px 90px rgba(0,0,0,0.28)`。

- `.wrap`: max-width: 1060px; margin: 0 auto; padding: 0 20px.
- `.hero`: padding: 72px 0 40px; perspective: 1200px.
- `.hero .lead`: margin: 16px auto 30px; max-width: 560px; font-size: 17.5px; color: var(--text-soft).
- `.hero-cta`: display: flex; gap: 14px; justify-content: center; flex-wrap: wrap.
- `section.pad`: padding: 56px 0.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; font: 600 15px/1 var(--font); padding: 13px 24px; border-radius: 999px; cursor: pointer; text-decoration: none; color: var(--text); background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.35); backdrop-filter: blur(20px) saturate(160%); transition: transform .3s var(--ease),background .3s var(--ease),box-shadow .3s var(--ease).
- `.btn:hover`: transform: scale(var(--focus-scale)); background: rgba(255,255,255,.3); box-shadow: 0 10px 30px rgba(0,0,0,.3).
- `.btn:active`: transform: scale(.97).
- `.btn:disabled`: background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.14); color: rgba(255,255,255,.42); cursor: not-allowed; transform: none; box-shadow: none.
- `.gaze:hover,.btn:hover`: transform: none.
- `.glass,.btn`: background: rgba(30,42,72,.88).

### 卡片与容器

- `.window`: position: relative; border-radius: var(--window-radius); padding: clamp(28px,5vw,56px); text-align: center.
- `.card`: padding: 26px.
- `.card .ic`: width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.3); color: var(--text); margin-bottom: 16px.
- `.card h3`: font-size: 18px; font-weight: 700; margin-bottom: 6px.
- `.card p`: font-size: 15px; color: var(--text-soft).

### 表单与选择控件

- `.toggle-field`: display: flex; align-items: center; gap: 12px.
- `.toggle-input`: position: absolute; opacity: 0; width: 54px; height: 32px.
- `.toggle`: width: 54px; height: 32px; border-radius: 999px; background: rgba(255,255,255,.2); border: 1px solid rgba(255,255,255,.3); position: relative; transition: background .3s var(--ease),box-shadow .3s var(--ease); flex: none.
- `.toggle::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #fff; box-shadow: 0 3px 10px rgba(0,0,0,.35); transition: transform .3s var(--ease).
- `.toggle-input:checked+.toggle`: background: linear-gradient(120deg,var(--active-blue),var(--active-teal)); box-shadow: 0 0 18px rgba(90,224,200,.5).
- `.toggle-input:checked+.toggle::after`: transform: translateX(22px).
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid rgba(255,255,255,.95); outline-offset: 3px.

### 导航

- `header`: position: sticky; top: 14px; z-index: 50; padding: 0 20px.
- `.nav`: max-width: 1060px; margin: 0 auto; display: flex; align-items: center; gap: 16px; padding: 10px 18px; border-radius: 999px.
- `.nav a.lnk`: display: none; font-size: 14.5px; font-weight: 500; color: var(--text-soft); text-decoration: none; padding: 8px 14px; border-radius: 999px; transition: background .3s var(--ease),color .3s var(--ease).
- `.nav a.lnk:hover`: background: rgba(255,255,255,.18); color: var(--text).
- `.nav a.lnk`: display: inline.
- `footer nav`: display: flex; gap: 18px; flex-wrap: wrap.

## 交互与动效

动效令牌：`--ease: cubic-bezier(.3,.8,.3,1)`。

- `:focus-visible`: outline: 3px solid rgba(255,255,255,.95); outline-offset: 3px; border-radius: 12px.
- `.gaze:hover`: transform: scale(var(--focus-scale)); background: var(--glass-bg-strong); box-shadow: var(--depth-shadow-near),inset 0 1px 0 rgba(255,255,255,.45).
- `.nav a.lnk:hover`: background: rgba(255,255,255,.18); color: var(--text).
- `.btn:hover`: transform: scale(var(--focus-scale)); background: rgba(255,255,255,.3); box-shadow: 0 10px 30px rgba(0,0,0,.3).
- `.btn:active`: transform: scale(.97).
- `.btn-primary:hover`: box-shadow: 0 12px 36px rgba(90,200,230,.45).
- `.btn-ghost:hover`: color: var(--text); background: rgba(255,255,255,.12).
- `.btn:disabled`: background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.14); color: rgba(255,255,255,.42); cursor: not-allowed; transform: none; box-shadow: none.
- `.orb:hover`: color: #0A3A4A; background: linear-gradient(140deg,rgba(102,184,255,.9),rgba(90,224,200,.85)).
- `.toggle-input:checked+.toggle`: background: linear-gradient(120deg,var(--active-blue),var(--active-teal)); box-shadow: 0 0 18px rgba(90,224,200,.5).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:820px)`、`(min-width:780px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid rgba(255,255,255,.95); outline-offset: 3px; border-radius: 12px.
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid rgba(255,255,255,.95); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--active-blue); background: rgba(255,255,255,.2); box-shadow: 0 0 0 4px rgba(102,184,255,.3).

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
