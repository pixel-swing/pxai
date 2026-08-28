---
name: "78 粗体排版（移动海报）"
version: "alpha"
id: "78-bold-typography"
source: "style-templates/pages/78-bold-typography.html"
description: "近黑底、暖白字、朱红强调的移动海报式粗体排版风格演示：巨型标题、紧字距、下划线 CTA、零圆角与瞬时过渡。"
colors:
  bg: "#0A0A0A"
  fg: "#FAFAFA"
  muted: "#1A1A1A"
  muted-fg: "#A3A3A3"
  muted-raw: "#737373"
  accent: "#FF3D00"
  accent-fg: "#0A0A0A"
  border: "#262626"
  primary: "#FF3D00"
  on-primary: "#FFFFFF"
  surface: "#0A0A0A"
  on-surface: "#FAFAFA"
typography:
  display-lg:
    fontFamily: "Inter Tight"
    fontSize: "56px"
    fontWeight: "800"
    lineHeight: "1.02"
    letterSpacing: "-.035em"
  headline-lg:
    fontFamily: "Inter Tight"
    fontSize: "48px"
    fontWeight: "800"
    lineHeight: "1.04"
    letterSpacing: "-.035em"
  headline-md:
    fontFamily: "Inter Tight"
    fontSize: "26px"
    fontWeight: "800"
    lineHeight: "1.15"
    letterSpacing: "-.02em"
  body-md:
    fontFamily: "Inter"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".22em"
  button-md:
    fontFamily: "Inter Tight"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".02em"
rounded:
  radius: "0px"
  DEFAULT: "0px"
spacing:
  pad: "24px"
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

# 78 粗体排版（移动海报） Design System

## 品牌与视觉方向

近黑底、暖白字、朱红强调的移动海报式粗体排版风格演示：巨型标题、紧字距、下划线 CTA、零圆角与瞬时过渡。

视觉关键词来自页面本身：字体 即 Poster 即海报；版面三原则；标题即画面；贴边出血；瞬时反馈；按钮与控件；订阅纸上电台；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#0A0A0A` |
| `--fg` | `#FAFAFA` |
| `--muted` | `#1A1A1A` |
| `--muted-fg` | `#A3A3A3` |
| `--muted-raw` | `#737373` |
| `--accent` | `#FF3D00` |
| `--accent-fg` | `#0A0A0A` |
| `--border` | `#262626` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0A0A0A`、`#FAFAFA`、`#1A1A1A`、`#A3A3A3`、`#737373`、`#FF3D00`、`#262626`、`#E9E6E0`、`#CFCBC2`、`#141414`、`#33302B`、`#4A4A4A`。

## 字体与信息层级

字体族：**Inter Tight**、**Inter**、**JetBrains Mono**、**Playfair Display**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: #E9E6E0; font-family: var(--font-body); color: var(--fg); display: flex; justify-content: center; padding: 36px 12px; min-height: 100vh.
- `body::before`: content: "BOLD/78"; position: fixed; top: 8px; left: 16px; font: 900 17vw/1 var(--font-primary); color: transparent; -webkit-text-stroke: 1px #CFCBC2; letter-spacing: -.04em; pointer-events: none; z-index: 0.
- `h2`: font: 800 26px/1.15 var(--font-primary); letter-spacing: -.02em; margin-bottom: 28px.
- `h2::before`: content: attr(data-no) " — "; font: 500 12px var(--font-mono); color: var(--accent); letter-spacing: .15em; display: block; margin-bottom: 10px.
- `.eyebrow`: font: 500 12px var(--font-mono); letter-spacing: .22em; text-transform: uppercase; color: var(--accent); margin-bottom: 20px.
- `h1`: font: 800 clamp(48px,14.5vw,72px)/1.04 var(--font-primary); letter-spacing: -.035em; text-transform: uppercase; margin-left: -2px.
- `h1 em`: font: italic 700 .82em var(--font-display); text-transform: none; letter-spacing: 0; color: var(--accent).
- `.card h3`: font: 700 19px var(--font-primary); letter-spacing: -.01em; margin-bottom: 8px.
- `.t-display`: font: 800 56px/1.02 var(--font-primary); letter-spacing: -.035em.
- `.t-h`: font: 700 28px/1.15 var(--font-primary); letter-spacing: -.02em.

## 形状、间距与深度

圆角令牌：`--radius: 0px`。

- `section`: padding: 56px var(--pad); border-bottom: 1px solid var(--border).
- `.hero`: padding: 56px 0 0; border-bottom: 1px solid var(--border).
- `.hero-inner`: padding: 0 var(--pad).

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 12px 22px; border: 1px solid var(--fg); background: var(--fg); color: var(--bg); font: 700 15px var(--font-primary); letter-spacing: .02em; cursor: pointer; border-radius: var(--radius); transition: background var(--dur) var(--ease),color var(--dur) var(--ease),border-color var(--dur) var(--ease).
- `.btn:hover`: background: var(--accent); border-color: var(--accent); color: var(--accent-fg).
- `.btn:active`: background: var(--fg); border-color: var(--fg); color: var(--bg).
- `.btn.secondary`: background: transparent; color: var(--fg).
- `.btn.secondary:hover`: background: var(--fg); color: var(--bg).
- `.btn.ghost`: background: transparent; border: 0; color: var(--accent); padding: 12px 2px; border-bottom: 3px solid var(--accent).
- `.btn.ghost:hover`: color: var(--fg); border-color: var(--fg).

### 卡片与容器

- `.card`: background: var(--muted); border: 1px solid var(--border); padding: 24px; transition: border-color var(--dur) var(--ease).
- `.card:hover`: border-color: var(--fg).
- `.card .no`: font: 500 12px var(--font-mono); color: var(--accent); letter-spacing: .15em; display: block; margin-bottom: 14px.
- `.card svg`: display: block; margin-bottom: 14px.
- `.card h3`: font: 700 19px var(--font-primary); letter-spacing: -.01em; margin-bottom: 8px.
- `.card p`: color: var(--muted-fg); font-size: 16px.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: 14px; min-height: 44px; border-top: 1px solid var(--border); padding-top: 22px.
- `.switch`: appearance: none; -webkit-appearance: none; width: 58px; height: 30px; background: var(--muted); border: 1px solid var(--border); position: relative; cursor: pointer; flex: none; transition: background var(--dur) var(--ease).
- `.switch::after`: content: ""; position: absolute; top: 4px; left: 4px; width: 20px; height: 20px; background: var(--muted-fg); transition: transform var(--dur) var(--ease),background var(--dur) var(--ease).
- `.switch:checked`: background: var(--accent).
- `.switch:checked::after`: transform: translateX(28px); background: var(--bg).
- `.switch-row label`: font: 600 15px var(--font-body); cursor: pointer.
- `input[type=text],input[type=email],textarea`: width: 100%; background: transparent; border: 0; border-bottom: 1px solid var(--border); color: var(--fg); font: 500 17px var(--font-body); padding: 12px 0; min-height: 48px; border-radius: var(--radius); transition: border-color var(--dur) var(--ease).

### 导航

- `header`: border-bottom: 1px solid var(--border).
- `nav.links`: display: flex; border-top: 1px solid var(--border).
- `nav.links a`: flex: 1; text-align: center; padding: 13px 4px; min-height: 44px; font: 500 11px var(--font-mono); letter-spacing: .16em; text-transform: uppercase; color: var(--muted-fg); text-decoration: none; border-right: 1px solid var(--border); transition: color var(--dur) var(--ease),background var(--dur) var(--ease).
- `nav.links a:last-child`: border-right: 0.
- `nav.links a:hover`: color: var(--fg); background: var(--muted).
- `footer nav`: display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 22px.

## 交互与动效

动效令牌：`--dur: 200ms`；`--ease: cubic-bezier(.25,0,0,1)`。

- `.tabbar a[aria-current="page"]`: color: var(--accent); border-top-color: var(--accent).
- `.tabbar a:hover`: color: var(--fg).
- `.nav-cta:hover`: color: var(--fg); border-color: var(--fg).
- `nav.links a:hover`: color: var(--fg); background: var(--muted).
- `.card:hover`: border-color: var(--fg).
- `.btn:hover`: background: var(--accent); border-color: var(--accent); color: var(--accent-fg).
- `.btn:active`: background: var(--fg); border-color: var(--fg); color: var(--bg).
- `.btn.secondary:hover`: background: var(--fg); color: var(--bg).
- `.btn.ghost:hover`: color: var(--fg); border-color: var(--fg).
- `.btn:disabled,.btn[disabled]`: background: var(--muted); border-color: var(--border); color: var(--muted-raw); cursor: not-allowed.

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`、`(max-width:374px)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `input:focus-visible,textarea:focus-visible`: outline: none; border-bottom: 3px solid var(--accent).
- `a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible,.switch:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px.

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
