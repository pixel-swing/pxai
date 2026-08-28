---
name: "45 蒸汽波"
version: "alpha"
id: "45-vaporwave"
source: "style-templates/pages/45-vaporwave.html"
description: "蒸汽波风格演示：粉青紫日落渐变、条纹落日、透视霓虹网格与 VHS 扫描线，复古未来主义的梦核氛围。"
colors:
  vapor-pink: "#FF71CE"
  vapor-cyan: "#01CDFE"
  vapor-mint: "#05FFA1"
  vapor-purple: "#B967FF"
  bg-deep: "#150B33"
  bg-panel: "rgba(255,255,255,.05)"
  ink: "#F2E9FF"
  ink-dim: "#C9B8E8"
  grid-color: "rgba(255,255,255,.1)"
  line: "rgba(185,103,255,.35)"
  primary: "#F2E9FF"
  on-primary: "#000000"
  surface: "#150B33"
  on-surface: "#F2E9FF"
typography:
  display-lg:
    fontFamily: "Audiowide"
    fontSize: "52px"
    fontWeight: "800"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Audiowide"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: ".05em"
  headline-md:
    fontFamily: "Audiowide"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: ".05em"
  body-md:
    fontFamily: "Exo 2"
    fontSize: "16.5px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Exo 2"
    fontSize: "13.5px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".4em"
  button-md:
    fontFamily: "Exo 2"
    fontSize: "15.5px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".12em"
rounded:
  DEFAULT: "6px"
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

# 45 蒸汽波 Design System

## 品牌与视觉方向

蒸汽波风格演示：粉青紫日落渐变、条纹落日、透视霓虹网格与 VHS 扫描线，复古未来主义的梦核氛围。

视觉关键词来自页面本身：日落被调成了 粉青紫三色；核心视觉指纹；日落渐变；透视网格；VHS 质感；按钮与控件；加入黄昏歌单；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--vapor-pink` | `#FF71CE` |
| `--vapor-cyan` | `#01CDFE` |
| `--vapor-mint` | `#05FFA1` |
| `--vapor-purple` | `#B967FF` |
| `--bg-deep` | `#150B33` |
| `--bg-panel` | `rgba(255,255,255,.05)` |
| `--ink` | `#F2E9FF` |
| `--ink-dim` | `#C9B8E8` |
| `--grid-color` | `rgba(255,255,255,.1)` |
| `--line` | `rgba(185,103,255,.35)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FF71CE`、`#01CDFE`、`#05FFA1`、`#B967FF`、`#150B33`、`#F2E9FF`、`#C9B8E8`、`#2A0E4F`、`#24063E`、`#2A2145`、`#7A6F99`、`#3A2F5C`、`#FFD9F3`、`#000`、`#FFFFFF`、`#241448`、`#8A7BAE`、`#9B8CC0`。

## 字体与信息层级

字体族：**Audiowide**、**Exo 2**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg-deep); color: var(--ink); font-family: var(--font-body); font-size: 16.5px; line-height: 1.65; overflow-x: hidden.
- `body::before`: content: ""; position: fixed; inset: 0; z-index: 99; pointer-events: none; opacity: .07; background: repeating-linear-gradient(0deg,transparent 0 3px,#01CDFE 3px 4px).
- `h1,h2,h3`: font-family: var(--font-display); letter-spacing: .05em.
- `h2`: font-size: clamp(22px,3.5vw,30px); margin-bottom: 10px; background: linear-gradient(90deg,var(--vapor-pink),var(--vapor-cyan)); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline-block; filter: drop-shadow(0 0 10px rgba(255,113,206,.4)).
- `.eyebrow`: display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: .3em; text-transform: uppercase; color: var(--vapor-mint); border: 1px solid var(--vapor-mint); border-radius: 6px; padding: 7px 14px; text-shadow: 0 0 8px rgba(5,255,161,.6); margin-bottom: 20px.
- `.hero h1`: font-size: clamp(32px,6vw,56px); line-height: 1.2; margin-bottom: 18px; background: linear-gradient(180deg,#FFD9F3 0%,var(--vapor-pink) 38%,var(--vapor-cyan) 62%,var(--vapor-purple) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 var(--glow-intensity) rgba(255,113,206,.45)).
- `.win h3`: font-size: 16.5px; margin-bottom: 10px; color: #FFFFFF; letter-spacing: .08em.
- `.t-display`: font-family: var(--font-display); font-size: clamp(34px,6vw,52px); line-height: 1.15; background: linear-gradient(90deg,var(--vapor-pink),var(--vapor-cyan),var(--vapor-mint)); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 12px rgba(1,205,254,.4)).
- `.t-h`: font-family: var(--font-display); font-size: 24px; color: #FFFFFF; letter-spacing: .1em.
- `.t-body`: font-size: 16.5px; max-width: 60ch.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.container`: max-width: 1060px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 64px 0.
- `.hero`: position: relative; overflow: hidden; padding: 84px 0 120px; background: linear-gradient(180deg,rgba(255,113,206,.32),rgba(1,205,254,.16) 55%,rgba(185,103,255,.24) 80%,var(--bg-deep)).
- `.hero-grid`: display: grid; gap: 44px; align-items: center; position: relative; z-index: 2.
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.
- `.hero h1`: font-size: clamp(32px,6vw,56px); line-height: 1.2; margin-bottom: 18px; background: linear-gradient(180deg,#FFD9F3 0%,var(--vapor-pink) 38%,var(--vapor-cyan) 62%,var(--vapor-purple) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 var(--glow-intensity) rgba(255,113,206,.45)).
- `.hero p.lead`: color: var(--ink-dim); max-width: 48ch; margin-bottom: 28px.
- `.hero-actions`: display: flex; gap: 14px; flex-wrap: wrap.
- `.gridfloor`: position: absolute; left: -40%; right: -40%; bottom: -2px; height: 44%; z-index: 1; pointer-events: none; background-image: linear-gradient(var(--grid-color) 1px,transparent 1px),linear-gradient(90deg,var(--grid-color) 1px,transparent 1px); background-size: 44px 44px; transform: perspective(340px) rotateX(58deg); transform-origin: top; animation: gridmove 3s linear infinite; -webkit-mask-image: linear-gradient(180deg,transparent,#000 22%); mask-image: linear-gradient(180deg,transparent,#000 22%).

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font-family: var(--font-body); font-weight: 700; font-size: 15.5px; letter-spacing: .12em; text-transform: uppercase; padding: 12px 24px; border-radius: 6px; border: 1px solid transparent; cursor: pointer; text-decoration: none; transition: transform .2s,box-shadow .2s,background .2s.
- `.btn:disabled`: background: #2A2145; color: #7A6F99; border-color: #3A2F5C; box-shadow: none; text-shadow: none; cursor: not-allowed; transform: none.

### 卡片与容器

- `.panel`: background: var(--bg-panel); border: 1px solid var(--line); border-radius: 10px; padding: 28px 24px; display: grid; gap: 24px.

### 表单与选择控件

- `::selection`: background: var(--vapor-pink); color: #2A0E4F.
- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-weight: 600; font-size: 15px.
- `.switch input`: position: absolute; opacity: 0; width: 54px; height: 28px; cursor: pointer.
- `.switch input:checked+.slider`: background: linear-gradient(90deg,rgba(255,113,206,.4),rgba(1,205,254,.4)).
- `.switch input:checked+.slider::after`: transform: translateX(26px); background: var(--vapor-mint); box-shadow: 0 0 10px rgba(5,255,161,.8).
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--vapor-mint); outline-offset: 3px.
- `.field`: display: grid; gap: 8px.

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(21,11,51,.85); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 14px 20px; max-width: 1060px; margin: 0 auto.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--vapor-mint); outline-offset: 3px.
- `.nav-links a:hover`: color: var(--vapor-mint); text-shadow: 0 0 10px rgba(5,255,161,.7).
- `.btn-primary:hover`: box-shadow: 0 0 26px rgba(255,113,206,.85); transform: translateY(-2px).
- `.btn-primary:active`: transform: translateY(1px); box-shadow: 0 0 8px rgba(255,113,206,.5).
- `.btn-secondary:hover`: background: rgba(1,205,254,.18); box-shadow: 0 0 var(--glow-intensity) rgba(1,205,254,.4).
- `.btn-secondary:active`: background: rgba(1,205,254,.28).
- `.btn-ghost:hover`: background: rgba(5,255,161,.1); text-shadow: 0 0 10px rgba(5,255,161,.7).
- `.btn-ghost:active`: background: rgba(5,255,161,.18).
- `.btn:disabled`: background: #2A2145; color: #7A6F99; border-color: #3A2F5C; box-shadow: none; text-shadow: none; cursor: not-allowed; transform: none.
- `.win:hover`: transform: translateY(-5px); box-shadow: 0 0 22px rgba(185,103,255,.35).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:900px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--vapor-mint); outline-offset: 3px.
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--vapor-mint); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--vapor-pink); box-shadow: 0 0 14px rgba(255,113,206,.4).

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
