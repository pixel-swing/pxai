---
name: "13 拟物化"
version: "alpha"
id: "13-skeuomorphism"
source: "style-templates/pages/13-skeuomorphism.html"
description: "拟物化（Skeuomorphism）风格演示：木纹、皮革与金属材质，8–12 段渐变、多层写实阴影与 300–500ms 拟真触感动效。"
colors:
  wood: "#8B5A2B"
  wood-deep: "#66391B"
  leather: "#56351D"
  leather-deep: "#472A15"
  brass: "#D9A32F"
  brass-deep: "#9C6F14"
  silver: "#C0C0C0"
  paper: "#F0E6D2"
  paper-hi: "#FBF4E3"
  ink: "#2B1D12"
  ink-soft: "#5A4632"
  cream: "#FBF3E2"
  background: "#F0E6D2"
  on-background: "#2B1D12"
  primary: "#D9A32F"
  on-primary: "#3A2606"
  secondary: "#8B5A2B"
  on-secondary: "#FBF3E2"
  tertiary: "#C0C0C0"
  on-tertiary: "#2A2A2A"
  surface: "#F0E6D2"
  on-surface: "#2B1D12"
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: "2rem"
    fontWeight: "800"
    lineHeight: "1.2"
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.25"
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
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "12px"
  DEFAULT: "12px"
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

# 13 拟物化 Design System

## 品牌与视觉方向

拟物化（Skeuomorphism）风格演示：木纹、皮革与金属材质，8–12 段渐变、多层写实阴影与 300–500ms 拟真触感动效。

视觉关键词来自页面本身：触手可及的 真实质感；风格特性；写实材质纹理；多层写实阴影；拟真触感动效；按钮与控件；表单示例 · 预约工坊参观；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--wood` | `#8B5A2B` |
| `--wood-deep` | `#66391B` |
| `--leather` | `#56351D` |
| `--leather-deep` | `#472A15` |
| `--brass` | `#D9A32F` |
| `--brass-deep` | `#9C6F14` |
| `--silver` | `#C0C0C0` |
| `--paper` | `#F0E6D2` |
| `--paper-hi` | `#FBF4E3` |
| `--ink` | `#2B1D12` |
| `--ink-soft` | `#5A4632` |
| `--cream` | `#FBF3E2` |
| `--shadow-real` | `0 1px 2px rgba(43,29,18,.28),0 4px 8px rgba(43,29,18,.22),0 14px 28px rgba(43,29,18,.18)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#8B5A2B`、`#66391B`、`#56351D`、`#472A15`、`#D9A32F`、`#9C6F14`、`#C0C0C0`、`#F0E6D2`、`#FBF4E3`、`#2B1D12`、`#5A4632`、`#FBF3E2`、`#F4EAD6`、`#EADCBE`、`#8A5A2E`、`#7B4B28`、`#3A2606`、`#F7DC8A`、`#D9A62B`、`#BC8818`、`#EFC95E`、`#E5B83F`、`#C99420`、`#C6911C`。

## 字体与信息层级

字体族：**Playfair Display**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.65; color: var(--ink); background: var(--noise),linear-gradient(180deg,#F4EAD6,#EADCBE); min-width: 320px.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.25.
- `.eyebrow`: display: inline-block; font: 600 .8rem/1 var(--font-body); letter-spacing: .14em; text-transform: uppercase; color: #6B4A17; background: linear-gradient(180deg,#F6E7BF,#EAD79F); border: 1px solid #C9AE6C; border-radius: 999px; padding: .45rem .9rem; box-shadow: inset 0 1px 0 rgba(255,255,255,.8),0 1px 2px rgba(43,29,18,.25).
- `.hero h1`: font-size: clamp(2.1rem,5.5vw,3.4rem); font-weight: 800; margin: 1rem 0 .8rem; text-shadow: 0 1px 0 rgba(255,255,255,.6),0 2px 3px rgba(43,29,18,.18).
- `.card h3`: color: #F5EAD0; font-size: 1.25rem; margin: .9rem 0 .5rem.
- `.t-display`: font: 800 clamp(2rem,4.5vw,2.5rem)/1.2 var(--font-display).
- `.t-heading`: font: 700 1.75rem/1.3 var(--font-display).
- `.t-body`: font: 400 1rem/1.65 var(--font-body).
- `.t-label`: font: 600 .8125rem/1.4 var(--font-body); letter-spacing: .12em; text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--radius: 12px`。
阴影/海拔令牌：`--shadow-real: 0 1px 2px rgba(43,29,18,.28),0 4px 8px rgba(43,29,18,.22),0 14px 28px rgba(43,29,18,.18)`。

- `.container`: width: min(1080px,92%); margin-inline: auto.
- `.hero`: padding: 3.5rem 0 3rem.
- `.hero-grid`: display: grid; gap: 2.5rem; align-items: center.
- `.hero h1`: font-size: clamp(2.1rem,5.5vw,3.4rem); font-weight: 800; margin: 1rem 0 .8rem; text-shadow: 0 1px 0 rgba(255,255,255,.6),0 2px 3px rgba(43,29,18,.18).
- `.hero p`: color: var(--ink-soft); max-width: 34em; margin-bottom: 1.6rem.
- `.hero-actions`: display: flex; gap: .9rem; flex-wrap: wrap.
- `.hero-visual`: display: grid; justify-items: center; gap: 1.2rem.
- `section`: padding: 2.6rem 0.
- `.section-title`: font-size: clamp(1.5rem,3.4vw,2.1rem); margin-bottom: .4rem.
- `.section-sub`: color: var(--ink-soft); margin-bottom: 1.8rem; max-width: 40em.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: .5rem; padding: .75rem 1.5rem; border-radius: 10px; border: 1px solid rgba(60,38,8,.55); font: 600 1rem var(--font-body); cursor: pointer; text-decoration: none; transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease),filter var(--dur) var(--ease).
- `.btn:active`: transform: translateY(1px); box-shadow: inset 0 3px 6px rgba(43,29,18,.45),0 1px 2px rgba(43,29,18,.3).
- `.btn:disabled`: filter: saturate(.25) opacity(.55); opacity: .55; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: position: relative; padding: 1.8rem 1.6rem; border-radius: var(--radius); border: 1px solid #38220F; color: #E4D4B4; background: var(--noise),radial-gradient(130% 150% at 18% 0%,#6B452A 0%,var(--leather) 48%,var(--leather-deep) 100%); box-shadow: inset 0 1px 0 rgba(255,236,190,.18),inset 0 -8px 16px rgba(0,0,0,.4),0 3px 6px rgba(43,29,18,.32),0 14px 28px rgba(43,29,18,.3); transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.card::before`: content: ""; position: absolute; inset: 9px; border: 2px dashed rgba(240,225,195,.38); border-radius: 8px; pointer-events: none.
- `.card:hover`: transform: translateY(-4px); box-shadow: inset 0 1px 0 rgba(255,236,190,.18),inset 0 -8px 16px rgba(0,0,0,.4),0 6px 10px rgba(43,29,18,.34),0 22px 44px rgba(43,29,18,.34).
- `.card h3`: color: #F5EAD0; font-size: 1.25rem; margin: .9rem 0 .5rem.
- `.card p`: font-size: .95rem.
- `.panel`: padding: 1.8rem 1.6rem; border-radius: var(--radius); border: 1px solid #D8C6A2; background: var(--noise),linear-gradient(180deg,var(--paper-hi),#F1E5CB); box-shadow: inset 0 2px 0 rgba(255,255,255,.9),var(--shadow-real).

### 表单与选择控件

- `.switch-input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch`: display: inline-flex; align-items: center; gap: .7rem; cursor: pointer; font-weight: 600.
- `.switch-track`: position: relative; width: 64px; height: 32px; border-radius: 16px; background: linear-gradient(180deg,#D8C7A0,#C4B084); box-shadow: inset 0 2px 5px rgba(43,29,18,.42),inset 0 -1px 0 rgba(255,255,255,.6); transition: background var(--dur) var(--ease).
- `.switch-knob`: position: absolute; top: 2px; left: 2px; width: 28px; height: 28px; border-radius: 50%; background: radial-gradient(circle at 35% 30%,#FDFDFD,#D9D9D9 55%,#BDBDBD); box-shadow: 0 2px 4px rgba(43,29,18,.45),inset 0 1px 0 rgba(255,255,255,.9); transition: transform var(--dur) var(--ease).
- `.switch-input:checked+.switch .switch-track`: background: linear-gradient(180deg,#8F6A1D,#D9A32F).
- `.switch-input:checked+.switch .switch-knob`: transform: translateX(32px).
- `.switch-input:focus-visible+.switch .switch-track`: outline: 3px solid var(--brass); outline-offset: 3px.

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: var(--noise),repeating-linear-gradient(92deg,rgba(30,16,6,.16) 0 3px,rgba(30,16,6,0) 3px 9px,rgba(255,226,170,.07) 9px 11px,rgba(30,16,6,0) 11px 19px),linear-gradient(180deg,#8A5A2E 0%,#7B4B28 45%,var(--wood-deep) 100%); box-shadow: inset 0 1px 0 rgba(255,224,168,.35),inset 0 -3px 6px rgba(0,0,0,.35),0 4px 10px rgba(43,29,18,.4).
- `nav`: display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; padding: .8rem 0.

## 交互与动效

动效令牌：`--dur: 400ms`；`--ease: cubic-bezier(.25,.7,.3,1)`。

- `:focus-visible`: outline: 3px solid var(--brass); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: background: rgba(0,0,0,.22); box-shadow: inset 0 1px 3px rgba(0,0,0,.4).
- `.btn-primary:hover`: filter: brightness(1.07); transform: translateY(-1px).
- `.btn-secondary:hover`: filter: brightness(1.05); transform: translateY(-1px).
- `.btn-ghost:hover`: background: rgba(139,90,43,.1).
- `.btn:active`: transform: translateY(1px); box-shadow: inset 0 3px 6px rgba(43,29,18,.45),0 1px 2px rgba(43,29,18,.3).
- `.btn:disabled`: filter: saturate(.25) opacity(.55); opacity: .55; cursor: not-allowed; transform: none.
- `.dial:hover .dial-needle`: transform: translate(-50%,-100%) rotate(112deg).
- `.card:hover`: transform: translateY(-4px); box-shadow: inset 0 1px 0 rgba(255,236,190,.18),inset 0 -8px 16px rgba(0,0,0,.4),0 6px 10px rgba(43,29,18,.34),0 22px 44px rgba(43,29,18,.34).
- `.switch-input:checked+.switch .switch-track`: background: linear-gradient(180deg,#8F6A1D,#D9A32F).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:720px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--brass); outline-offset: 2px; border-radius: 4px.
- `.switch-input:focus-visible+.switch .switch-track`: outline: 3px solid var(--brass); outline-offset: 3px.
- `.field input:focus-visible,.field textarea:focus-visible`: outline: 3px solid var(--brass); outline-offset: 1px.

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
