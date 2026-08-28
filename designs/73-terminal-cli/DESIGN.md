---
name: "73 终端命令行（移动端）"
version: "alpha"
id: "73-terminal-cli"
source: "style-templates/pages/73-terminal-cli.html"
description: "终端命令行移动端风格：OLED 纯黑、矩阵绿等宽字、扫描线、闪烁光标与开机日志的黑客终端界面。"
colors:
  bg: "#050505"
  fg-primary: "#33FF00"
  fg-amber: "#FFB000"
  fg-muted: "#1A3D1A"
  fg-dim: "#9BE58A"
  fg-error: "#FF3333"
  border: "#33FF00"
  background: "#050505"
  on-background: "#33FF00"
  primary: "#33FF00"
  on-primary: "#000000"
  secondary: "#FFB000"
  on-secondary: "#050505"
  tertiary: "#FF3333"
  on-tertiary: "#050505"
  surface: "#050505"
  on-surface: "#33FF00"
typography:
  display-lg:
    fontFamily: "JetBrains Mono"
    fontSize: "26px"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: ".04em"
  headline-lg:
    fontFamily: "JetBrains Mono"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: ".08em"
  headline-md:
    fontFamily: "JetBrains Mono"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: ".08em"
  body-md:
    fontFamily: "JetBrains Mono"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".2em"
  button-md:
    fontFamily: "JetBrains Mono"
    fontSize: "14px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".08em"
rounded:
  radius: "0px"
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

# 73 终端命令行（移动端） Design System

## 品牌与视觉方向

终端命令行移动端风格：OLED 纯黑、矩阵绿等宽字、扫描线、闪烁光标与开机日志的黑客终端界面。

视觉关键词来自页面本身：> 你好，操作员；风格档案；核心模块；指令即界面；扫描线荧幕；开机日志叙事；按钮与控件；接入申请。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#050505` |
| `--fg-primary` | `#33FF00` |
| `--fg-amber` | `#FFB000` |
| `--fg-muted` | `#1A3D1A` |
| `--fg-dim` | `#9BE58A` |
| `--fg-error` | `#FF3333` |
| `--border` | `#33FF00` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#050505`、`#33FF00`、`#FFB000`、`#1A3D1A`、`#9BE58A`、`#FF3333`、`#000`、`#0D0D0D`、`#1E1E1E`、`#2E5C2E`、`#020202`、`#2E7A1E`。

## 字体与信息层级

字体族：**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: #000; font-family: var(--font); color: var(--fg-primary); font-size: 16px; line-height: 1.55; display: flex; justify-content: center; padding: 28px 12px; min-height: 100vh.
- `h2`: font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px.
- `h2::before`: content: "## "; color: var(--fg-dim).
- `.eyebrow`: font-size: 12px; letter-spacing: .2em; color: var(--fg-amber); text-transform: uppercase; margin-bottom: 12px.
- `.hero h1`: font-size: clamp(24px,6.6vw,30px); font-weight: 700; line-height: 1.25; text-transform: uppercase; letter-spacing: .02em; margin-bottom: 12px.
- `.card:active p,.card:active .ascii,.card:active h3,.card:active svg`: color: #050505.
- `.card h3`: font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em.
- `.t-display`: font-weight: 700; font-size: 26px; text-transform: uppercase; letter-spacing: .04em.
- `.t-h`: font-weight: 700; font-size: 18px; text-transform: uppercase.
- `.t-body`: font-size: 16px; color: var(--fg-primary).

## 形状、间距与深度

圆角令牌：`--radius: 0px`。

- `.phone`: width: 100%; max-width: 430px; background: #0D0D0D; border: 1px solid #1E1E1E; border-radius: 44px!important; padding: 10px; flex: none; height: fit-content; box-shadow: 0 0 60px rgba(51,255,0,.09),0 24px 50px rgba(0,0,0,.8).
- `main`: display: flex; flex-direction: column.
- `section`: padding: 22px 16px; border-bottom: 1px dashed var(--fg-muted).
- `.hero`: padding: 24px 16px.
- `.hero h1`: font-size: clamp(24px,6.6vw,30px); font-weight: 700; line-height: 1.25; text-transform: uppercase; letter-spacing: .02em; margin-bottom: 12px.
- `.hero .sub`: font-size: 13.5px; color: var(--fg-dim); margin-bottom: 16px.
- `.hero-actions`: display: flex; flex-direction: column; gap: 10px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font); font-weight: 700; font-size: 14px; letter-spacing: .08em; text-transform: uppercase; min-height: 48px; padding: 12px 18px; border: 1px solid var(--border); background: var(--bg); color: var(--fg-primary); cursor: pointer; text-decoration: none.
- `.btn::before`: content: "[ ".
- `.btn::after`: content: " ]".
- `.btn:hover`: background: rgba(51,255,0,.08).
- `.btn:active`: background: var(--fg-primary)!important; color: #050505!important.
- `.btn.secondary`: color: var(--fg-amber); border-color: var(--fg-amber).
- `.btn.secondary:hover`: background: rgba(255,176,0,.08).

### 卡片与容器

- `.card`: border: 1px solid var(--border); background: rgba(51,255,0,.03).
- `.card:active`: background: var(--fg-primary); color: #050505.
- `.card:active p,.card:active .ascii,.card:active h3,.card:active svg`: color: #050505.
- `.card .head`: display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-bottom: 1px dashed var(--fg-muted).
- `.card svg`: flex: none; color: var(--fg-primary).
- `.card h3`: font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em.
- `.card p`: padding: 10px 12px 4px; font-size: 13px; color: var(--fg-dim).

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; justify-content: space-between; gap: 12px; border: 1px solid var(--fg-muted); padding: 12px 14px; background: rgba(51,255,0,.03).
- `.switch`: appearance: none; width: 64px; height: 28px; border: 1px solid var(--border); background: var(--bg); position: relative; cursor: pointer; flex: none.
- `.switch::before`: content: "OFF"; position: absolute; right: 6px; top: 50%; transform: translateY(-50%); font-size: 10px; color: var(--fg-dim); font-family: var(--font).
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; background: var(--fg-muted).
- `.switch:checked`: background: rgba(51,255,0,.12).
- `.switch:checked::before`: content: "ON"; left: 8px; right: auto; color: var(--fg-primary).
- `.switch:checked::after`: transform: translateX(38px); background: var(--fg-primary).

### 导航

- `header`: border-bottom: 1px solid var(--border); background: var(--bg).
- `nav ul`: display: flex; list-style: none; border-top: 1px dashed var(--fg-muted).
- `nav ul li`: flex: 1; border-right: 1px dashed var(--fg-muted).
- `nav ul li:last-child`: border-right: none.
- `nav ul a`: display: block; text-align: center; font-size: 12px; font-weight: 700; text-decoration: none; padding: 11px 4px; letter-spacing: .08em.
- `nav ul a::before`: content: "./".

## 交互与动效

动效令牌：`--blink-duration: 500ms`。

- `:focus-visible`: outline: 2px solid var(--fg-amber); outline-offset: 3px.
- `nav ul a:active,.brand:active`: background: var(--fg-primary); color: #050505.
- `.btn:hover`: background: rgba(51,255,0,.08).
- `.btn:active`: background: var(--fg-primary)!important; color: #050505!important.
- `.btn.secondary:hover`: background: rgba(255,176,0,.08).
- `.btn.secondary:active`: background: var(--fg-amber)!important; color: #050505!important.
- `.btn.ghost:hover`: color: var(--fg-primary); background: transparent.
- `.btn:disabled`: color: #2E5C2E; border-color: #1A3D1A; cursor: not-allowed; background: var(--bg)!important.
- `.card:active`: background: var(--fg-primary); color: #050505.
- `.card:active p,.card:active .ascii,.card:active h3,.card:active svg`: color: #050505.

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--fg-amber); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--fg-primary); box-shadow: 0 0 0 1px var(--fg-primary),0 0 14px rgba(51,255,0,.25).

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
