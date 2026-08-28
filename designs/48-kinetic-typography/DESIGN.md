---
name: "48 动态排版"
version: "alpha"
id: "48-kinetic-typography"
source: "style-templates/pages/48-kinetic-typography.html"
description: "动态排版风格：逐字入场动画、打字与形变效果、background-clip 渐变文字，让文字成为主角。"
colors:
  bg: "#0B0B14"
  surface: "#14141F"
  line: "rgba(255,255,255,.12)"
  ink: "#EDEEF6"
  muted: "#A9AFC6"
  c1: "#FF3CAC"
  c2: "#8B5CF6"
  c3: "#22D3EE"
  background: "#0B0B14"
  on-background: "#EDEEF6"
  primary: "#8B5CF6"
  on-primary: "#FFFFFF"
  secondary: "#22D3EE"
  on-secondary: "#0B0B14"
  tertiary: "#FF3CAC"
  on-tertiary: "#0B0B14"
  on-surface: "#EDEEF6"
typography:
  display-lg:
    fontFamily: "Noto Sans SC"
    fontSize: "4rem"
    fontWeight: "900"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Noto Sans SC"
    fontSize: "1.6rem"
    fontWeight: "900"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Noto Sans SC"
    fontSize: "1.6rem"
    fontWeight: "900"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Space Grotesk"
    fontSize: ".8rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".3em"
  button-md:
    fontFamily: "Noto Sans SC"
    fontSize: ".95rem"
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

# 48 动态排版 Design System

## 品牌与视觉方向

动态排版风格：逐字入场动画、打字与形变效果、background-clip 渐变文字，让文字成为主角。

视觉关键词来自页面本身：让文字，自己动起来 让 文 字 ， 自 己 动 起 来；核心特性；逐字动画；打字与形变；渐变文字；按钮与控件；订阅动效周刊；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#0B0B14` |
| `--surface` | `#14141F` |
| `--line` | `rgba(255,255,255,.12)` |
| `--ink` | `#EDEEF6` |
| `--muted` | `#A9AFC6` |
| `--c1` | `#FF3CAC` |
| `--c2` | `#8B5CF6` |
| `--c3` | `#22D3EE` |
| `--gradient-text` | `linear-gradient(90deg,var(--c1),var(--c2),var(--c3))` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0B0B14`、`#14141F`、`#EDEEF6`、`#A9AFC6`、`#FF3CAC`、`#8B5CF6`、`#22D3EE`、`#2A2A3D`、`#FFF`、`#0F0F1A`、`#7C82A0`。

## 字体与信息层级

字体族：**Noto Sans SC**、**Space Grotesk**、**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font-family: var(--font-body); font-size: 16px; line-height: 1.7.
- `h2`: font-size: 1.6rem; font-weight: 900; margin-bottom: 1.4rem.
- `.eyebrow`: font: 700 .8rem var(--font-disp); letter-spacing: .25em; text-transform: uppercase; color: var(--c3).
- `.hero h1`: font-size: clamp(2.4rem,7.5vw,4.8rem); font-weight: 900; line-height: 1.12; margin: 1rem 0 1.2rem.
- `.card h3`: font-size: 1.15rem; font-weight: 900; margin: .8rem 0 .4rem.
- `.t-display`: font-size: clamp(2.4rem,6vw,4rem); font-weight: 900; line-height: 1.1.
- `.t-h`: font-size: 1.8rem; font-weight: 700.
- `.t-body`: font-size: 1rem; color: var(--muted); max-width: 40em.
- `.t-label`: font: 700 .8rem var(--font-disp); letter-spacing: .3em; text-transform: uppercase; color: var(--c3).

## 形状、间距与深度

圆角令牌：`--radius: 14px`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 3.5rem 0.
- `.hero`: padding: 5rem 0 3.5rem; text-align: left.
- `.hero h1`: font-size: clamp(2.4rem,7.5vw,4.8rem); font-weight: 900; line-height: 1.12; margin: 1rem 0 1.2rem.
- `.hero .sub`: color: var(--muted); max-width: 36em; font-size: 1.05rem.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: .5rem; font: 700 .95rem var(--font-body); padding: .7rem 1.3rem; border-radius: 999px; border: 1px solid transparent; cursor: pointer; transition: transform .25s,box-shadow .25s,border-color .25s,background-position .5s.
- `.btn:active`: transform: translateY(1px) scale(.98).
- `.btn:disabled`: opacity: .4; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: position: relative; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 1.6rem; overflow: hidden; transition: transform .3s ease,border-color .3s ease.
- `.card::before`: content: ""; position: absolute; inset: 0 0 auto 0; height: 3px; background: var(--gradient-text); background-size: 200% 100%; animation: gradShift 6s linear infinite.
- `.card:hover`: transform: translateY(-4px); border-color: rgba(139,92,246,.5).
- `.card svg`: color: var(--c3).
- `.card h3`: font-size: 1.15rem; font-weight: 900; margin: .8rem 0 .4rem.
- `.card p`: color: var(--muted); font-size: .95rem.
- `.grad,.card::before,.btn-primary`: background-position: 0 0.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .6rem; cursor: pointer; font-size: .95rem; font-weight: 500.
- `.switch input`: position: absolute; opacity: 0; width: 48px; height: 26px; cursor: pointer.
- `.switch input:checked + .track`: background: linear-gradient(90deg,var(--c2),var(--c3)).
- `.switch input:checked + .track::after`: transform: translateX(22px).
- `.switch input:focus-visible + .track`: outline: 3px solid var(--c3); outline-offset: 2px.
- `.field`: display: grid; gap: .45rem.
- `input[type=text],input[type=email],textarea`: width: 100%; background: #0F0F1A; border: 1px solid var(--line); border-radius: 10px; color: var(--ink); font: 400 1rem var(--font-body); padding: .72rem .9rem; transition: border-color .2s.

### 导航

- `header`: position: sticky; top: 0; z-index: 20; background: rgba(11,11,20,.85); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 1.2rem; height: 64px.
- `.nav ul`: display: flex; gap: 1.25rem; list-style: none; margin-left: auto.

## 交互与动效

动效令牌：`--text-animation-duration: 1s`；`--morph-duration: 0.5s`。

- `a:hover`: color: var(--c3).
- `:focus-visible`: outline: 3px solid var(--c3); outline-offset: 2px; border-radius: 4px.
- `.btn-primary:hover`: background-position: 100% 0; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(139,92,246,.4).
- `.btn-secondary:hover`: border-color: var(--c3); transform: translateY(-2px).
- `.btn-ghost:hover`: background: rgba(34,211,238,.1).
- `.btn:active`: transform: translateY(1px) scale(.98).
- `.btn:disabled`: opacity: .4; cursor: not-allowed; transform: none; box-shadow: none.
- `.card:hover`: transform: translateY(-4px); border-color: rgba(139,92,246,.5).
- `.switch input:checked + .track`: background: linear-gradient(90deg,var(--c2),var(--c3)).
- `.switch input:checked + .track::after`: transform: translateX(22px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:860px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--c3); outline-offset: 2px; border-radius: 4px.
- `.switch input:focus-visible + .track`: outline: 3px solid var(--c3); outline-offset: 2px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--c3); outline-offset: 1px; border-color: var(--c3).

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
