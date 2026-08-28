---
name: "41 赛博朋克 UI"
version: "alpha"
id: "41-cyberpunk-ui"
source: "style-templates/pages/41-cyberpunk-ui.html"
description: "赛博朋克 UI 风格演示：深黑底、霓虹辉光、故障动画、扫描线与终端等宽字体的反乌托邦科幻界面。"
colors:
  bg-dark: "#0D0D0D"
  bg-panel: "#111611"
  neon-green: "#00FF00"
  neon-magenta: "#FF00FF"
  neon-cyan: "#00FFFF"
  txt: "#C9F7C9"
  txt-dim: "#8FCF8F"
  line: "#1E3A1E"
  background: "#0D0D0D"
  on-background: "#C9F7C9"
  primary: "#00FF00"
  on-primary: "#031003"
  secondary: "#00FFFF"
  on-secondary: "#031003"
  tertiary: "#FF00FF"
  on-tertiary: "#0D0D0D"
  surface: "#111611"
  on-surface: "#C9F7C9"
typography:
  display-lg:
    fontFamily: "Orbitron"
    fontSize: "56px"
    fontWeight: "900"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Orbitron"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: ".04em"
  headline-md:
    fontFamily: "Orbitron"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: ".04em"
  body-md:
    fontFamily: "JetBrains Mono"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "13px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".28em"
  button-md:
    fontFamily: "JetBrains Mono"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".12em"
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

# 41 赛博朋克 UI Design System

## 品牌与视觉方向

赛博朋克 UI 风格演示：深黑底、霓虹辉光、故障动画、扫描线与终端等宽字体的反乌托邦科幻界面。

视觉关键词来自页面本身：潜入 霓虹之城 信号永不熄灭；核心视觉指纹；霓虹辉光；故障美学；扫描线终端；按钮与控件；数据上行表单；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg-dark` | `#0D0D0D` |
| `--bg-panel` | `#111611` |
| `--neon-green` | `#00FF00` |
| `--neon-magenta` | `#FF00FF` |
| `--neon-cyan` | `#00FFFF` |
| `--txt` | `#C9F7C9` |
| `--txt-dim` | `#8FCF8F` |
| `--line` | `#1E3A1E` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#0D0D0D`、`#111611`、`#00FF00`、`#FF00FF`、`#00FFFF`、`#C9F7C9`、`#8FCF8F`、`#1E3A1E`、`#031003`、`#06140A`、`#1C231C`、`#6F7F6F`、`#2A342A`、`#EAFFEA`、`#0A0F0A`、`#101710`、`#2E4D2E`、`#3E5E3E`、`#FF7DFF`、`#274427`、`#5F7F5F`、`#6F8F6F`。

## 字体与信息层级

字体族：**Orbitron**、**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg-dark); color: var(--txt); font-family: var(--font-mono); font-size: 16px; line-height: 1.6; overflow-x: hidden.
- `body::before`: content: ""; position: fixed; inset: 0; z-index: 99; pointer-events: none; opacity: var(--scanline-opacity); background: repeating-linear-gradient(0deg,transparent 0 2px,#00FF00 2px 3px).
- `h1,h2,h3`: font-family: var(--font-display); letter-spacing: .04em.
- `h2`: font-size: clamp(22px,3.5vw,30px); color: var(--neon-green); text-shadow: 0 0 12px rgba(0,255,0,.5); margin-bottom: 28px.
- `h2::before`: content: "// "; color: var(--neon-magenta); text-shadow: 0 0 10px rgba(255,0,255,.6).
- `.eyebrow`: display: inline-block; font-size: 13px; letter-spacing: .3em; text-transform: uppercase; color: var(--neon-cyan); border: 1px solid var(--neon-cyan); padding: 6px 14px; text-shadow: 0 0 8px rgba(0,255,255,.6); margin-bottom: 20px.
- `.hero h1`: font-size: clamp(34px,6vw,58px); font-weight: 900; line-height: 1.15; color: #EAFFEA; margin-bottom: 18px.
- `.card h3`: font-size: 18px; color: #EAFFEA; margin-bottom: 10px.
- `.t-display`: font-family: var(--font-display); font-weight: 900; font-size: clamp(36px,6vw,56px); color: var(--neon-green); text-shadow: 0 0 16px rgba(0,255,0,.5); line-height: 1.1.
- `.t-h`: font-family: var(--font-display); font-weight: 600; font-size: 26px; color: #EAFFEA.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.container`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 64px 0.
- `.hero`: padding: 72px 0 64px.
- `.hero-grid`: display: grid; gap: 40px; align-items: center.
- `.hero h1`: font-size: clamp(34px,6vw,58px); font-weight: 900; line-height: 1.15; color: #EAFFEA; margin-bottom: 18px.
- `.hero p.lead`: color: var(--txt-dim); max-width: 52ch; margin-bottom: 28px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap.
- `.hero-grid`: grid-template-columns: 1.15fr .85fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font-family: var(--font-mono); font-weight: 700; font-size: 15px; letter-spacing: .12em; text-transform: uppercase; padding: 12px 22px; border: 1px solid transparent; cursor: pointer; background: none; color: var(--txt); transition: transform .15s,box-shadow .15s,background .15s.
- `.btn:disabled`: background: #1C231C; color: #6F7F6F; border-color: #2A342A; box-shadow: none; cursor: not-allowed; text-shadow: none; transform: none.

### 卡片与容器

- `.card`: background: linear-gradient(180deg,#101710,#0D0D0D); border: 1px solid var(--line); padding: 26px 22px; transition: border-color .2s,box-shadow .2s,transform .2s.
- `.card:hover`: border-color: var(--neon-green); box-shadow: 0 0 20px rgba(0,255,0,.25); transform: translateY(-4px).
- `.card .icon`: width: 46px; height: 46px; display: grid; place-items: center; border: 1px solid var(--neon-cyan); color: var(--neon-cyan); margin-bottom: 16px; box-shadow: 0 0 12px rgba(0,255,255,.25).
- `.card h3`: font-size: 18px; color: #EAFFEA; margin-bottom: 10px.
- `.card p`: font-size: 15px; color: var(--txt-dim).
- `.panel`: background: var(--bg-panel); border: 1px solid var(--line); padding: 28px 24px; display: grid; gap: 24px.

### 表单与选择控件

- `::selection`: background: var(--neon-green); color: #031003.
- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-size: 15px.
- `.switch input`: position: absolute; opacity: 0; width: 52px; height: 28px; cursor: pointer.
- `.switch input:checked+.slider`: border-color: var(--neon-green); background: rgba(0,255,0,.15).
- `.switch input:checked+.slider::after`: transform: translateX(24px); background: var(--neon-green); box-shadow: 0 0 10px rgba(0,255,0,.8).
- `.switch input:focus-visible+.slider`: outline: 2px solid var(--neon-cyan); outline-offset: 3px.
- `.field`: display: grid; gap: 8px.

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(13,13,13,.9); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 14px 20px; max-width: 1080px; margin: 0 auto.

## 交互与动效

动效令牌：`--glitch-duration: .3s`。

- `:focus-visible`: outline: 2px solid var(--neon-cyan); outline-offset: 3px.
- `.nav-links a:hover`: color: var(--neon-cyan); text-shadow: 0 0 8px rgba(0,255,255,.7).
- `.btn-primary:hover`: box-shadow: 0 0 30px rgba(0,255,0,.8); transform: translateY(-2px).
- `.btn-primary:active`: transform: translateY(1px); box-shadow: 0 0 8px rgba(0,255,0,.5).
- `.btn-secondary:hover`: background: rgba(0,255,255,.16); box-shadow: 0 0 16px rgba(0,255,255,.35).
- `.btn-secondary:active`: background: rgba(0,255,255,.25).
- `.btn-ghost:hover`: border-color: var(--neon-magenta); background: rgba(255,0,255,.08).
- `.btn-ghost:active`: background: rgba(255,0,255,.16).
- `.btn:disabled`: background: #1C231C; color: #6F7F6F; border-color: #2A342A; box-shadow: none; cursor: not-allowed; text-shadow: none; transform: none.
- `.card:hover`: border-color: var(--neon-green); box-shadow: 0 0 20px rgba(0,255,0,.25); transform: translateY(-4px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:880px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--neon-cyan); outline-offset: 3px.
- `.switch input:focus-visible+.slider`: outline: 2px solid var(--neon-cyan); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--neon-green); box-shadow: 0 0 14px rgba(0,255,0,.35).

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
