---
name: "60 触感形变 UI"
version: "alpha"
id: "60-tactile-deformable"
source: "style-templates/pages/60-tactile-deformable.html"
description: "触感数字与可形变 UI：果冻挤压、弹簧回弹，以及铬金属和黏土材质的可按压界面。"
colors:
  chrome: "#C0C0C0"
  jelly-pink: "#FF9ECD"
  soft-blue: "#87CEEB"
  clay: "#FFD9C7"
  violet: "#6D28D9"
  violet-deep: "#4C1D95"
  ink: "#2A2140"
  ink-soft: "#5B5175"
  bg1: "#EAF4FB"
  bg2: "#FDEFF7"
  background: "#EAF4FB"
  on-background: "#2A2140"
  primary: "#6D28D9"
  on-primary: "#FFFFFF"
  secondary: "#FF9ECD"
  on-secondary: "#4A1030"
  tertiary: "#87CEEB"
  on-tertiary: "#2A2140"
  surface: "#FFFFFF"
  on-surface: "#2A2140"
typography:
  display-lg:
    fontFamily: "Baloo 2"
    fontSize: "3rem"
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Baloo 2"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.22"
  headline-md:
    fontFamily: "Baloo 2"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.22"
  body-md:
    fontFamily: "Nunito"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Nunito"
    fontSize: ".82rem"
    fontWeight: "800"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Baloo 2"
    fontSize: "1.02rem"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius: "26px"
  DEFAULT: "26px"
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

# 60 触感数字/可形变 UI Design System

## 品牌与视觉方向

触感数字/可形变 UI 风格演示：果冻挤压、弹簧回弹、铬金属与黏土材质的可按压界面。

视觉关键词来自页面本身：按下去会 回弹 的界面；风格信息；三种可形变材质；果冻 Jelly；铬金属 Chrome；黏土 Clay；按钮与控件；预约触感体验。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--chrome` | `#C0C0C0` |
| `--jelly-pink` | `#FF9ECD` |
| `--soft-blue` | `#87CEEB` |
| `--clay` | `#FFD9C7` |
| `--violet` | `#6D28D9` |
| `--violet-deep` | `#4C1D95` |
| `--ink` | `#2A2140` |
| `--ink-soft` | `#5B5175` |
| `--bg1` | `#EAF4FB` |
| `--bg2` | `#FDEFF7` |
| `--material-glossy` | `linear-gradient(135deg,rgba(255,255,255,.95) 0%,rgba(255,255,255,0) 60%)` |
| `--depth-shadow` | `0 10px 30px rgba(42,33,64,.2)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#C0C0C0`、`#FF9ECD`、`#87CEEB`、`#FFD9C7`、`#6D28D9`、`#4C1D95`、`#2A2140`、`#5B5175`、`#EAF4FB`、`#FDEFF7`、`#8B5CF6`、`#FFF`、`#FFC1E0`、`#F172B4`、`#4A1030`、`#F8F9FB`、`#C6CAD2`、`#EEF0F4`、`#ADB2BD`、`#E7E9EF`、`#23262D`、`#FFB7DB`、`#E8639F`、`#C0C4CC`。

## 字体与信息层级

字体族：**Baloo 2**、**Nunito**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: linear-gradient(160deg,var(--bg1),var(--bg2) 70%); color: var(--ink); font-size: 16px; line-height: 1.65; overflow-x: hidden.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.22; color: var(--ink).
- `h2`: font-size: 1.65rem; margin-bottom: .5rem.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .4rem; font-size: .85rem; font-weight: 700; letter-spacing: .1em; color: var(--violet-deep); background: rgba(255,255,255,.7); border-radius: 999px; padding: .35rem 1rem; box-shadow: 0 4px 14px rgba(42,33,64,.12).
- `.hero h1`: font-size: clamp(2.2rem,6vw,3.6rem); margin: .9rem 0 .8rem.
- `.hero h1 em`: font-style: normal; color: var(--violet).
- `.card h3`: font-size: 1.18rem; margin-bottom: .45rem.
- `.t-display`: font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem,5vw,3rem); color: var(--violet).
- `.t-title`: font-family: var(--font-display); font-weight: 700; font-size: 1.75rem.
- `.t-body`: font-size: 1rem.

## 形状、间距与深度

圆角令牌：`--radius: 26px`。
阴影/海拔令牌：`--depth-shadow: 0 10px 30px rgba(42,33,64,.2)`。

- `.wrap`: max-width: 1100px; margin: 0 auto; padding: 0 1.25rem.
- `.hero`: display: grid; gap: 2.4rem; align-items: center; padding: 3.4rem 0 2.2rem.
- `.hero h1`: font-size: clamp(2.2rem,6vw,3.6rem); margin: .9rem 0 .8rem.
- `.hero h1 em`: font-style: normal; color: var(--violet).
- `.hero p`: color: var(--ink-soft); max-width: 44ch; margin-bottom: 1.6rem.
- `.hero-cta`: display: flex; gap: .9rem; flex-wrap: wrap.
- `.hero`: grid-template-columns: 1.05fr .95fr; padding-top: 4.4rem.

## 组件规范

### 操作按钮

- `.btn`: position: relative; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; gap: .5rem; border: none; border-radius: 999px; padding: .85rem 1.8rem; font-family: var(--font-display); font-weight: 700; font-size: 1.02rem; cursor: pointer; text-decoration: none; box-shadow: var(--depth-shadow); transition: transform var(--bounce-duration) var(--spring),box-shadow var(--bounce-duration) var(--spring),filter .2s.
- `.btn::before`: content: ""; position: absolute; inset: 0; border-radius: inherit; background: var(--material-glossy); pointer-events: none.
- `.btn:hover`: transform: scale(1.06) translateY(-2px).
- `.btn:active`: transform: scale(var(--press-scale),.88); box-shadow: 0 4px 12px rgba(42,33,64,.18),inset 0 4px 10px rgba(42,33,64,.28); filter: brightness(.96).
- `.btn:disabled`: opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; filter: grayscale(.4).

### 卡片与容器

- `.card`: position: relative; overflow: hidden; border-radius: var(--radius); padding: 1.7rem 1.5rem; box-shadow: var(--depth-shadow); transition: transform var(--bounce-duration) var(--spring),box-shadow var(--bounce-duration) var(--spring); cursor: pointer.
- `.card::before`: content: ""; position: absolute; inset: 0; background: var(--material-glossy); pointer-events: none.
- `.card:hover`: transform: scale(1.03) translateY(-4px).
- `.card:active`: transform: scale(.96,.92); box-shadow: 0 4px 12px rgba(42,33,64,.16),inset 0 4px 12px rgba(42,33,64,.22).
- `.card .ico`: width: 54px; height: 54px; display: grid; place-items: center; border-radius: 18px; background: rgba(255,255,255,.65); color: var(--violet-deep); box-shadow: 0 6px 14px rgba(42,33,64,.15); margin-bottom: 1rem.
- `.card h3`: font-size: 1.18rem; margin-bottom: .45rem.
- `.card p`: color: #4A3F63; font-size: .95rem; position: relative.

### 表单与选择控件

- `.switch`: appearance: none; -webkit-appearance: none; width: 62px; height: 34px; border-radius: 999px; background: #D8D2E8; position: relative; cursor: pointer; box-shadow: inset 0 3px 8px rgba(42,33,64,.25); transition: background .3s.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 4px; width: 28px; height: 28px; border-radius: 50%; background: radial-gradient(circle at 32% 28%,#fff 0 18%,#F2EFF9 60%,#D9D4E8); box-shadow: 0 4px 10px rgba(42,33,64,.3); transition: transform var(--bounce-duration) var(--spring).
- `.switch:checked`: background: linear-gradient(160deg,#8B5CF6,var(--violet)).
- `.switch:checked::after`: transform: translateX(26px).
- `.switch:active::after`: transform: scale(1.15,.85).
- `.switch:checked:active::after`: transform: translateX(26px) scale(1.15,.85).
- `.switch-line`: display: inline-flex; align-items: center; gap: .7rem.

### 导航

- `header`: position: sticky; top: 0; z-index: 10; background: rgba(255,255,255,.72); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(109,40,217,.12).
- `.nav`: max-width: 1100px; margin: 0 auto; padding: .7rem 1.25rem; display: flex; align-items: center; gap: .9rem; flex-wrap: wrap.
- `.nav ul`: display: flex; gap: .3rem; list-style: none; margin-left: auto; flex-wrap: wrap; align-items: center.
- `.nav a.link`: color: var(--ink-soft); text-decoration: none; font-size: .95rem; font-weight: 600; padding: .35rem .7rem; border-radius: 999px; display: inline-block; transition: transform var(--bounce-duration) var(--spring),background .2s,color .2s.
- `.nav a.link:hover`: color: var(--violet-deep); background: rgba(109,40,217,.1); transform: scale(1.08).
- `.nav a.link:active`: transform: scale(.92).

## 交互与动效

动效令牌：`--bounce-duration: 400ms`；`--spring: cubic-bezier(.34,1.56,.64,1)`。

- `:focus-visible`: outline: 3px solid var(--violet); outline-offset: 3px; border-radius: 10px.
- `.nav a.link:hover`: color: var(--violet-deep); background: rgba(109,40,217,.1); transform: scale(1.08).
- `.nav a.link:active`: transform: scale(.92).
- `.btn:hover`: transform: scale(1.06) translateY(-2px).
- `.btn:active`: transform: scale(var(--press-scale),.88); box-shadow: 0 4px 12px rgba(42,33,64,.18),inset 0 4px 10px rgba(42,33,64,.28); filter: brightness(.96).
- `.btn-ghost:hover`: background: rgba(255,255,255,.9).
- `.btn:disabled`: opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; filter: grayscale(.4).
- `.chip:hover`: transform: scale(1.06).
- `.card:hover`: transform: scale(1.03) translateY(-4px).
- `.card:active`: transform: scale(.96,.92); box-shadow: 0 4px 12px rgba(42,33,64,.16),inset 0 4px 12px rgba(42,33,64,.22).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--violet); outline-offset: 3px; border-radius: 10px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--violet); outline-offset: 2px; border-color: var(--violet); transform: scale(1.01).

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
