---
name: "14 液态玻璃"
version: "alpha"
id: "14-liquid-glass"
source: "style-templates/pages/14-liquid-glass.html"
description: "液态玻璃（Liquid Glass）风格演示：虹彩渐变、SVG 湍流形变、动态模糊与色像差，400–600ms 流体缓动。"
colors:
  bg: "#070A1C"
  ink: "#F2F5FF"
  muted: "#AAB6DC"
  pink: "#FF2E88"
  violet: "#7C4DFF"
  cyan: "#00E0FF"
  mint: "#38FFC3"
  glass: "rgba(255,255,255,.09)"
  glass-hi: "rgba(255,255,255,.16)"
  border-color: "rgba(255,255,255,.26)"
  background: "#070A1C"
  on-background: "#F2F5FF"
  primary: "#00E0FF"
  on-primary: "#04122A"
  secondary: "#FF2E88"
  on-secondary: "#FFFFFF"
  tertiary: "#38FFC3"
  on-tertiary: "#04122A"
  surface: "rgba(255,255,255,.09)"
  on-surface: "#F2F5FF"
typography:
  display-lg:
    fontFamily: "Outfit"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-lg:
    fontFamily: "Outfit"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.22"
  headline-md:
    fontFamily: "Outfit"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.22"
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "Inter"
    fontSize: ".8125rem"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "22px"
  DEFAULT: "22px"
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

# 14 液态玻璃 Design System

## 品牌与视觉方向

液态玻璃（Liquid Glass）风格演示：虹彩渐变、SVG 湍流形变、动态模糊与色像差，400–600ms 流体缓动。

视觉关键词来自页面本身：让界面如液体般流动；风格特性；虹彩渐变；SVG 液态形变；动态模糊与色像差；按钮与控件；表单示例 · 申请内测；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#070A1C` |
| `--ink` | `#F2F5FF` |
| `--muted` | `#AAB6DC` |
| `--pink` | `#FF2E88` |
| `--violet` | `#7C4DFF` |
| `--cyan` | `#00E0FF` |
| `--mint` | `#38FFC3` |
| `--glass` | `rgba(255,255,255,.09)` |
| `--glass-hi` | `rgba(255,255,255,.16)` |
| `--border-color` | `rgba(255,255,255,.26)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#070A1C`、`#F2F5FF`、`#AAB6DC`、`#FF2E88`、`#7C4DFF`、`#00E0FF`、`#38FFC3`、`#04122A`、`#7DF3FF`、`#FFFFFF`、`#CFE7FF`、`#8E9AC4`。

## 字体与信息层级

字体族：**Outfit**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.65; color: var(--ink); background: var(--bg); min-width: 320px; overflow-x: hidden.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.22.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .5rem; padding: .45rem 1rem; border-radius: 999px; font: 600 .8rem/1 var(--font-body); letter-spacing: .14em; text-transform: uppercase; color: var(--mint); background: rgba(56,255,195,.1); border: 1px solid rgba(56,255,195,.4).
- `.hero h1`: font-size: clamp(2.2rem,5.8vw,3.7rem); font-weight: 700; margin: 1.1rem 0 .9rem.
- `.card h3`: font-size: 1.25rem; margin: .9rem 0 .5rem.
- `.t-display`: font: 700 clamp(2rem,4.6vw,2.6rem)/1.2 var(--font-display).
- `.t-heading`: font: 600 1.75rem/1.3 var(--font-display).
- `.t-body`: font: 400 1rem/1.65 var(--font-body); color: var(--ink).
- `.t-label`: font: 600 .8125rem/1.4 var(--font-body); letter-spacing: .14em; text-transform: uppercase; color: var(--mint).

## 形状、间距与深度

圆角令牌：`--radius: 22px`。

- `.container`: width: min(1100px,92%); margin-inline: auto.
- `.hero`: padding: 4rem 0 3rem.
- `.hero-grid`: display: grid; gap: 2.6rem; align-items: center.
- `.hero h1`: font-size: clamp(2.2rem,5.8vw,3.7rem); font-weight: 700; margin: 1.1rem 0 .9rem.
- `.hero p`: color: var(--muted); max-width: 32em; margin-bottom: 1.7rem.
- `.hero-actions`: display: flex; gap: .9rem; flex-wrap: wrap.
- `.hero-visual`: position: relative; min-height: 320px; display: grid; place-items: center.
- `.hero-chip`: position: absolute; bottom: 8%; right: 4%; padding: .6rem 1rem; font: 600 .85rem var(--font-body); border-radius: 999px; animation: floaty 6s ease-in-out infinite.
- `section`: padding: 2.7rem 0.
- `.section-title`: font-size: clamp(1.5rem,3.4vw,2.15rem); margin-bottom: .4rem.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; padding: .8rem 1.6rem; border-radius: 999px; font: 600 1rem var(--font-body); cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: transform var(--morph-duration) var(--ease),box-shadow var(--morph-duration) var(--ease),background-position var(--morph-duration) var(--ease),border-color var(--morph-duration) var(--ease).
- `.btn:active`: transform: translateY(1px) scale(.985).
- `.btn:disabled`: opacity: .4; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: padding: 1.8rem 1.6rem; transition: transform var(--morph-duration) var(--ease),border-color var(--morph-duration) var(--ease),box-shadow var(--morph-duration) var(--ease).
- `.card:hover`: transform: translateY(-6px); border-color: rgba(255,255,255,.45); box-shadow: 0 22px 60px rgba(3,6,24,.6),0 0 30px rgba(0,224,255,.18),inset 0 1px 0 rgba(255,255,255,.4).
- `.card h3`: font-size: 1.25rem; margin: .9rem 0 .5rem.
- `.card p`: font-size: .95rem; color: var(--muted).
- `.panel`: padding: 1.8rem 1.6rem.

### 表单与选择控件

- `.switch-input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch`: display: inline-flex; align-items: center; gap: .7rem; cursor: pointer; font-weight: 600.
- `.switch-track`: position: relative; width: 64px; height: 32px; border-radius: 16px; background: var(--glass); border: 1px solid var(--border-color); transition: background var(--morph-duration) var(--ease),box-shadow var(--morph-duration) var(--ease).
- `.switch-knob`: position: absolute; top: 2px; left: 2px; width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(160deg,#FFFFFF,#CFE7FF); box-shadow: 0 2px 8px rgba(3,6,24,.55); transition: transform var(--morph-duration) var(--ease).
- `.switch-input:checked+.switch .switch-track`: background: linear-gradient(100deg,rgba(56,255,195,.5),rgba(0,224,255,.5)); box-shadow: 0 0 18px rgba(0,224,255,.45).
- `.switch-input:checked+.switch .switch-knob`: transform: translateX(32px).
- `.switch-input:focus-visible+.switch .switch-track`: outline: 3px solid var(--cyan); outline-offset: 3px.

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(9,12,32,.55); backdrop-filter: blur(16px) saturate(150%); -webkit-backdrop-filter: blur(16px) saturate(150%); border-bottom: 1px solid rgba(255,255,255,.14).
- `nav`: display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; padding: .85rem 0.

## 交互与动效

动效令牌：`--morph-duration: 500ms`；`--ease: cubic-bezier(.3,.9,.25,1)`。

- `:focus-visible`: outline: 3px solid var(--cyan); outline-offset: 3px; border-radius: 6px.
- `.nav-links a:hover`: border-color: var(--border-color); background: var(--glass).
- `.btn-primary:hover`: background-position: 95% 0; transform: translateY(-2px); box-shadow: 0 14px 38px rgba(56,255,195,.42),inset 0 1px 0 rgba(255,255,255,.6).
- `.btn-secondary:hover`: background: rgba(255,255,255,.24); transform: translateY(-2px).
- `.btn-ghost:hover`: border-color: var(--cyan); box-shadow: 0 0 20px rgba(0,224,255,.3).
- `.btn:active`: transform: translateY(1px) scale(.985).
- `.btn:disabled`: opacity: .4; cursor: not-allowed; transform: none; box-shadow: none.
- `.card:hover`: transform: translateY(-6px); border-color: rgba(255,255,255,.45); box-shadow: 0 22px 60px rgba(3,6,24,.6),0 0 30px rgba(0,224,255,.18),inset 0 1px 0 rgba(255,255,255,.4).
- `.switch-input:checked+.switch .switch-track`: background: linear-gradient(100deg,rgba(56,255,195,.5),rgba(0,224,255,.5)); box-shadow: 0 0 18px rgba(0,224,255,.45).
- `.switch-input:checked+.switch .switch-knob`: transform: translateX(32px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--cyan); outline-offset: 3px; border-radius: 6px.
- `.switch-input:focus-visible+.switch .switch-track`: outline: 3px solid var(--cyan); outline-offset: 3px.
- `.field input:focus-visible,.field textarea:focus-visible`: outline: 3px solid var(--cyan); outline-offset: 2px; box-shadow: 0 0 24px rgba(0,224,255,.25).

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
