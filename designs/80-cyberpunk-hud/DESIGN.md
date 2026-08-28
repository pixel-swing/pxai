---
name: "80 赛博朋克移动 HUD"
version: "alpha"
id: "80-cyberpunk-hud"
source: "style-templates/pages/80-cyberpunk-hud.html"
description: "虚空黑底与霓虹绿、品红、赛博青构成的移动 HUD 风格演示：斜切角、扫描线、CRT 闪烁、故障动画与终端提示符输入。"
colors:
  bg: "#0A0A0F"
  card: "#12121A"
  fg: "#E0E0E0"
  muted: "#1C1C2E"
  muted-fg: "#9A9AB0"
  accent: "#00FF88"
  accent2: "#FF00FF"
  accent3: "#00D4FF"
  border: "#2A2A3A"
  destructive: "#FF3366"
  primary: "#00FF88"
  on-primary: "#000000"
  surface: "#0A0A0F"
  on-surface: "#E0E0E0"
typography:
  display-lg:
    fontFamily: "Orbitron"
    fontSize: "36px"
    fontWeight: "900"
    lineHeight: "1.15"
    letterSpacing: ".03em"
  headline-lg:
    fontFamily: "Orbitron"
    fontSize: "30px"
    fontWeight: "900"
    lineHeight: "1.22"
    letterSpacing: ".04em"
  headline-md:
    fontFamily: "Orbitron"
    fontSize: "21px"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: ".06em"
  body-md:
    fontFamily: "JetBrains Mono"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "11px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".3em"
  button-md:
    fontFamily: "JetBrains Mono"
    fontSize: "13px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".14em"
rounded:
  radius: "0px"
  DEFAULT: "0px"
spacing:
  pad: "22px"
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

# 80 赛博朋克移动 HUD Design System

## 品牌与视觉方向

虚空黑底与霓虹绿、品红、赛博青构成的移动 HUD 风格演示：斜切角、扫描线、CRT 闪烁、故障动画与终端提示符输入。

视觉关键词来自页面本身：夜城作战界面；核心模块；斜切角几何；扫描线与微闪；故障位移；按钮与控件；接入申请；霓虹色域。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#0A0A0F` |
| `--card` | `#12121A` |
| `--fg` | `#E0E0E0` |
| `--muted` | `#1C1C2E` |
| `--muted-fg` | `#9A9AB0` |
| `--accent` | `#00FF88` |
| `--accent2` | `#FF00FF` |
| `--accent3` | `#00D4FF` |
| `--border` | `#2A2A3A` |
| `--destructive` | `#FF3366` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0A0A0F`、`#12121A`、`#E0E0E0`、`#1C1C2E`、`#9A9AB0`、`#00FF88`、`#FF00FF`、`#00D4FF`、`#2A2A3A`、`#FF3366`、`#050508`、`#0D0D14`、`#66FFB8`、`#8A8AA0`、`#7A7A92`。

## 字体与信息层级

字体族：**Orbitron**、**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: #050508 radial-gradient(60% 40% at 50% 0%,rgba(0,255,136,.07),transparent 70%); background-image: linear-gradient(rgba(0,255,136,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.04) 1px,transparent 1px); background-size: 44px 44px; font-family: var(--font-body); color: var(--fg); display: flex; justify-content: center; padding: 36px 12px; min-height: 100vh.
- `h2`: font: 700 21px/1.3 var(--font-heading); letter-spacing: .06em; margin-bottom: 24px; text-transform: uppercase.
- `h2::before`: content: "// " attr(data-no); display: block; font: 500 11px var(--font-body); letter-spacing: .24em; color: var(--accent3); margin-bottom: 8px.
- `.eyebrow`: font: 500 12px var(--font-body); letter-spacing: .3em; color: var(--accent); text-shadow: 0 0 8px rgba(0,255,136,.7); margin-bottom: 18px.
- `h1`: font: 900 clamp(30px,8.6vw,38px)/1.22 var(--font-heading); letter-spacing: .04em; text-transform: uppercase; margin-bottom: 20px.
- `.card h3`: font: 700 16px var(--font-heading); letter-spacing: .05em; margin-bottom: 8px; text-transform: uppercase.
- `.t-display`: font: 900 36px/1.15 var(--font-heading); letter-spacing: .03em; text-shadow: 0 0 14px rgba(0,255,136,.45); color: var(--accent).
- `.t-h`: font: 700 23px/1.25 var(--font-heading); letter-spacing: .05em.
- `.t-body`: font: 400 16px/1.65 var(--font-body); color: var(--muted-fg).
- `.t-label`: font: 500 11px var(--font-body); letter-spacing: .3em; color: var(--accent2).

## 形状、间距与深度

圆角令牌：`--radius: 0px`。

- `section`: padding: 50px var(--pad); border-bottom: 1px solid var(--border).

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 12px 22px; border: 0; background: var(--accent); color: var(--bg); font: 700 13px var(--font-body); letter-spacing: .14em; cursor: pointer; clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px); box-shadow: 0 0 18px rgba(0,255,136,.5); transition: background var(--dur) var(--ease),transform var(--dur) var(--ease).
- `.btn:hover`: background: #66FFB8.
- `.btn:active`: transform: scale(.97) translateY(1px).
- `.btn.secondary`: background: transparent; color: var(--accent2); box-shadow: inset 0 0 0 1px var(--accent2),0 0 14px rgba(255,0,255,.28).
- `.btn.secondary:hover`: background: rgba(255,0,255,.12).
- `.btn.ghost`: background: transparent; color: var(--accent3); box-shadow: none; text-decoration: underline; text-underline-offset: 6px.
- `.btn.ghost:hover`: background: rgba(0,212,255,.08).

### 卡片与容器

- `.card`: padding: 24px 20px.
- `.card .tag`: font: 500 10px var(--font-body); letter-spacing: .24em; color: var(--accent3); display: block; margin-bottom: 12px.
- `.card svg`: display: block; margin-bottom: 12px; filter: drop-shadow(0 0 6px rgba(0,255,136,.6)).
- `.card h3`: font: 700 16px var(--font-heading); letter-spacing: .05em; margin-bottom: 8px; text-transform: uppercase.
- `.card p`: color: var(--muted-fg); font-size: 15px.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: 14px; min-height: 44px; border-top: 1px solid var(--border); padding-top: 24px.
- `.switch`: appearance: none; -webkit-appearance: none; width: 58px; height: 30px; background: var(--muted); border: 1px solid var(--border); position: relative; cursor: pointer; flex: none; clip-path: polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px); transition: background var(--dur) var(--ease).
- `.switch::after`: content: ""; position: absolute; top: 4px; left: 4px; width: 20px; height: 20px; background: var(--muted-fg); transition: transform var(--dur) var(--ease),background var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.switch:checked`: background: rgba(0,255,136,.18); border-color: var(--accent).
- `.switch:checked::after`: transform: translateX(28px); background: var(--accent); box-shadow: 0 0 10px rgba(0,255,136,.9).
- `.switch-row label`: font: 500 15px var(--font-body); cursor: pointer.
- `input[type=text],input[type=email],textarea`: width: 100%; background: #0D0D14; border: 1px solid var(--border); color: var(--fg); font: 500 16px var(--font-body); padding: 12px 14px; min-height: 48px; caret-color: var(--accent); clip-path: polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px); transition: border-color var(--dur) var(--ease),box-shadow var(--dur) var(--ease).

### 导航

- `header`: border-bottom: 1px solid var(--border).
- `nav.links`: display: flex; border-top: 1px solid var(--border).
- `nav.links a`: flex: 1; text-align: center; padding: 13px 4px; min-height: 44px; font: 500 11px var(--font-body); letter-spacing: .22em; color: var(--muted-fg); text-decoration: none; border-right: 1px solid var(--border); transition: color var(--dur) var(--ease),background var(--dur) var(--ease).
- `nav.links a:last-child`: border-right: 0.
- `nav.links a:hover`: color: var(--accent); background: rgba(0,255,136,.06).
- `footer nav`: display: flex; flex-wrap: wrap; gap: 18px; margin-bottom: 20px.

## 交互与动效

动效令牌：`--dur: .18s`；`--ease: cubic-bezier(.2,0,0,1)`。

- `.tabbar a[aria-current="page"]`: color: var(--accent); border-top-color: var(--accent); text-shadow: 0 0 8px rgba(0,255,136,.8).
- `.tabbar a:hover`: color: var(--fg).
- `.nav-cta:hover`: background: #66FFB8.
- `nav.links a:hover`: color: var(--accent); background: rgba(0,255,136,.06).
- `.btn:hover`: background: #66FFB8.
- `.btn:active`: transform: scale(.97) translateY(1px).
- `.btn.secondary:hover`: background: rgba(255,0,255,.12).
- `.btn.ghost:hover`: background: rgba(0,212,255,.08).
- `.btn:disabled`: background: var(--muted); color: #8A8AA0; box-shadow: none; cursor: not-allowed; transform: none.
- `.switch:checked`: background: rgba(0,255,136,.18); border-color: var(--accent).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent),0 0 16px rgba(0,255,136,.35).
- `a:focus-visible,button:focus-visible,.switch:focus-visible`: outline: 2px solid var(--accent); outline-offset: 3px.

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
