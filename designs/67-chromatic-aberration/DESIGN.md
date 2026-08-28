---
name: "67 色差/RGB 分离"
version: "alpha"
id: "67-chromatic-aberration"
source: "style-templates/pages/67-chromatic-aberration.html"
description: "色差/RGB 分离风格：红绿蓝通道错位、故障抖动、扫描线与噪点的复古科技视觉。"
colors:
  red-channel: "#FF0000"
  green-channel: "#00FF00"
  blue-channel: "#0000FF"
  cyan: "#00FFFF"
  bg: "#050505"
  panel: "#0D0D0F"
  ink: "#EAEAEA"
  dim: "#9A9A9A"
  line: "rgba(234,234,234,.18)"
  background: "#050505"
  on-background: "#EAEAEA"
  primary: "#EAEAEA"
  on-primary: "#000000"
  secondary: "#00FFFF"
  on-secondary: "#050505"
  tertiary: "#00FF00"
  on-tertiary: "#050505"
  surface: "#0D0D0F"
  on-surface: "#EAEAEA"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "54px"
    fontWeight: "700"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: ".01em"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: ".01em"
  body-md:
    fontFamily: "IBM Plex Mono"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "IBM Plex Mono"
    fontSize: "13px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".24em"
  button-md:
    fontFamily: "IBM Plex Mono"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".1em"
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

# 67 色差/RGB 分离 Design System

## 品牌与视觉方向

色差/RGB 分离风格：红绿蓝通道错位、故障抖动、扫描线与噪点的复古科技视觉。

视觉关键词来自页面本身：色 彩 通 道 正 在 分 离；风格档案；三条通道；通道错位；故障抖动；扫描线与噪点；按钮与控件；接入申请。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--red-channel` | `#FF0000` |
| `--green-channel` | `#00FF00` |
| `--blue-channel` | `#0000FF` |
| `--cyan` | `#00FFFF` |
| `--bg` | `#050505` |
| `--panel` | `#0D0D0F` |
| `--ink` | `#EAEAEA` |
| `--dim` | `#9A9A9A` |
| `--line` | `rgba(234,234,234,.18)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FF0000`、`#00FF00`、`#0000FF`、`#00FFFF`、`#050505`、`#0D0D0F`、`#EAEAEA`、`#9A9A9A`、`#1A1A1A`、`#333`、`#666`、`#FF5A5A`、`#707070`。

## 字体与信息层级

字体族：**Space Grotesk**、**IBM Plex Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font-family: var(--font-display); font-size: 17px; line-height: 1.65; overflow-x: hidden.
- `body::after`: content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 9; background: repeating-linear-gradient(0deg,rgba(255,255,255,var(--scanline-opacity)) 0 1px,transparent 1px 4px); mix-blend-mode: overlay; animation: flicker 4s steps(8) infinite.
- `h1,h2,h3`: line-height: 1.15; letter-spacing: .01em.
- `.sec-head h2`: font-size: clamp(24px,3.2vw,32px); font-weight: 700; text-transform: uppercase.
- `.eyebrow`: font-family: var(--font-mono); font-size: 13px; letter-spacing: .3em; text-transform: uppercase; color: var(--green-channel); margin-bottom: 16px.
- `.hero h1`: font-size: clamp(44px,7.4vw,86px); font-weight: 700; text-transform: uppercase; margin-bottom: 20px.
- `.card h3`: font-size: 20px; font-weight: 700; margin-bottom: 10px.
- `.t-display`: font-weight: 700; font-size: clamp(34px,5vw,54px); text-transform: uppercase.
- `.t-h`: font-weight: 700; font-size: 26px.
- `.t-body`: font-size: 17px; max-width: 36em; color: var(--ink).

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 24px.
- `section`: padding: 56px 0; border-top: 1px solid var(--line).
- `.hero`: border-top: none; padding: 80px 0 64px; position: relative.
- `.hero::before`: content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(520px 260px at 78% 22%,rgba(255,0,0,.12),transparent 60%),radial-gradient(520px 260px at 22% 78%,rgba(0,0,255,.16),transparent 60%),radial-gradient(400px 220px at 55% 55%,rgba(0,255,0,.07),transparent 60%).
- `.hero h1`: font-size: clamp(44px,7.4vw,86px); font-weight: 700; text-transform: uppercase; margin-bottom: 20px.
- `.hero .sub`: color: var(--dim); max-width: 36em; margin-bottom: 30px; font-size: 18px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-weight: 600; font-size: 14px; letter-spacing: .1em; text-transform: uppercase; padding: 12px 22px; border: 1px solid var(--ink); background: var(--ink); color: #050505; cursor: pointer; text-decoration: none; transition: transform var(--glitch-duration),box-shadow var(--glitch-duration).
- `.btn:hover`: transform: translate(-1px,-1px); box-shadow: -3px 0 rgba(255,0,0,.8),3px 0 rgba(0,255,255,.8).
- `.btn:active`: transform: translate(1px,1px); box-shadow: -1px 0 rgba(255,0,0,.8),1px 0 rgba(0,255,255,.8).
- `.btn.secondary`: background: transparent; color: var(--ink).
- `.btn.secondary:hover`: box-shadow: -3px 0 rgba(0,255,0,.7),3px 0 rgba(0,0,255,.9).
- `.btn.ghost`: border-color: transparent; background: transparent; color: var(--dim); text-decoration: underline; text-underline-offset: 6px.
- `.btn.ghost:hover`: color: var(--ink); box-shadow: none; text-shadow: -2px 0 var(--red-channel),2px 0 var(--cyan).

### 卡片与容器

- `.card`: background: var(--panel); border: 1px solid var(--line); padding: 26px; position: relative; transition: transform var(--glitch-duration),box-shadow var(--glitch-duration).
- `.card:hover`: transform: translate(-2px,-2px); box-shadow: -4px 0 rgba(255,0,0,.55),4px 0 rgba(0,255,255,.55).
- `.card svg`: color: var(--green-channel); margin-bottom: 16px; filter: drop-shadow(-1.5px 0 rgba(255,0,0,.9)) drop-shadow(1.5px 0 rgba(0,0,255,.9)).
- `.card h3`: font-size: 20px; font-weight: 700; margin-bottom: 10px.
- `.card p`: color: var(--dim); font-size: 16px.
- `.card .idx`: position: absolute; top: 18px; right: 18px; font-family: var(--font-mono); font-size: 12px; color: var(--dim).

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: 12px.
- `.switch`: appearance: none; width: 56px; height: 28px; border: 1px solid var(--ink); background: var(--bg); position: relative; cursor: pointer; flex: none; transition: box-shadow .2s.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; background: var(--ink); transition: transform .2s,background .2s.
- `.switch:checked`: box-shadow: -2px 0 rgba(255,0,0,.8),2px 0 rgba(0,255,255,.8).
- `.switch:checked::after`: transform: translateX(28px); background: var(--green-channel).
- `.switch-row label`: font-family: var(--font-mono); font-size: 14px; cursor: pointer.
- `.field`: margin-bottom: 20px.

### 导航

- `header`: position: sticky; top: 0; z-index: 10; background: rgba(5,5,5,.92); border-bottom: 1px solid var(--line); backdrop-filter: blur(6px).
- `.nav`: display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 16px 0; flex-wrap: wrap.
- `nav ul`: display: flex; gap: 22px; list-style: none; align-items: center; flex-wrap: wrap.
- `nav a`: font-family: var(--font-mono); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; text-decoration: none; color: var(--dim); transition: color .2s,text-shadow .2s.
- `nav a:hover`: color: var(--ink); text-shadow: -2px 0 var(--red-channel),2px 0 var(--cyan).

## 交互与动效

动效令牌：`--glitch-duration: .3s`。

- `:focus-visible`: outline: 2px solid var(--green-channel); outline-offset: 3px.
- `nav a:hover`: color: var(--ink); text-shadow: -2px 0 var(--red-channel),2px 0 var(--cyan).
- `.btn:hover`: transform: translate(-1px,-1px); box-shadow: -3px 0 rgba(255,0,0,.8),3px 0 rgba(0,255,255,.8).
- `.btn:active`: transform: translate(1px,1px); box-shadow: -1px 0 rgba(255,0,0,.8),1px 0 rgba(0,255,255,.8).
- `.btn.secondary:hover`: box-shadow: -3px 0 rgba(0,255,0,.7),3px 0 rgba(0,0,255,.9).
- `.btn.ghost:hover`: color: var(--ink); box-shadow: none; text-shadow: -2px 0 var(--red-channel),2px 0 var(--cyan).
- `.btn:disabled`: background: #1A1A1A; border-color: #333; color: #666; cursor: not-allowed; box-shadow: none; transform: none.
- `.card:hover`: transform: translate(-2px,-2px); box-shadow: -4px 0 rgba(255,0,0,.55),4px 0 rgba(0,255,255,.55).
- `.switch:checked`: box-shadow: -2px 0 rgba(255,0,0,.8),2px 0 rgba(0,255,255,.8).
- `.switch:checked::after`: transform: translateX(28px); background: var(--green-channel).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:820px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--green-channel); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 2px solid var(--cyan); outline-offset: 2px; box-shadow: -2px 0 rgba(255,0,0,.6),2px 0 rgba(0,0,255,.8).

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
