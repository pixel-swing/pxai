---
name: "58 仿生/有机 2.0"
version: "alpha"
id: "58-biomimetic-2"
source: "style-templates/pages/58-biomimetic-2.html"
description: "仿生/有机 2.0 风格演示：细胞流体形态、呼吸缩放动画、生物荧光配色与流动渐变的生成式界面。"
colors:
  cellular-pink: "#FF9999"
  chlorophyll: "#00FF41"
  bioluminescent: "#00FFFF"
  deep-ocean: "#001E3C"
  abyss: "#001228"
  coral: "#FF7F50"
  ink: "#E9F7F0"
  ink-dim: "#AFCCC3"
  btn-ink: "#00250F"
  primary: "#E9F7F0"
  on-primary: "#000000"
  surface: "#000000"
  on-surface: "#E9F7F0"
typography:
  display-lg:
    fontFamily: "Quicksand"
    fontSize: "3rem"
    fontWeight: "700"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Quicksand"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Quicksand"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.25"
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: ".82rem"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Quicksand"
    fontSize: "1rem"
    fontWeight: "700"
    lineHeight: "1.4"
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

# 58 仿生/有机 2.0 Design System

## 品牌与视觉方向

仿生/有机 2.0 风格演示：细胞流体形态、呼吸缩放动画、生物荧光配色与流动渐变的生成式界面。

视觉关键词来自页面本身：让界面像细胞一样呼吸生长；风格信息；核心特性；细胞形态；呼吸律动；生成生长；按钮与控件；加入培育计划。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--cellular-pink` | `#FF9999` |
| `--chlorophyll` | `#00FF41` |
| `--bioluminescent` | `#00FFFF` |
| `--deep-ocean` | `#001E3C` |
| `--abyss` | `#001228` |
| `--coral` | `#FF7F50` |
| `--ink` | `#E9F7F0` |
| `--ink-dim` | `#AFCCC3` |
| `--btn-ink` | `#00250F` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FF9999`、`#00FF41`、`#00FFFF`、`#001E3C`、`#001228`、`#FF7F50`、`#E9F7F0`、`#AFCCC3`、`#00250F`、`#7CFFB0`、`#C85E5E`、`#7FA098`、`#7E9A91`。

## 字体与信息层级

字体族：**Quicksand**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--deep-ocean); color: var(--ink); font-size: 16px; line-height: 1.65; overflow-x: hidden.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.25.
- `h2`: font-size: 1.6rem; margin-bottom: .5rem; color: var(--ink).
- `.eyebrow`: display: inline-flex; align-items: center; gap: .45rem; font-size: .85rem; letter-spacing: .12em; color: var(--bioluminescent); border: 1px solid rgba(0,255,255,.4); border-radius: 999px; padding: .3rem .9rem; background: rgba(0,255,255,.06).
- `.hero h1`: font-size: clamp(2.1rem,6vw,3.5rem); margin: .9rem 0 .8rem; background: linear-gradient(100deg,var(--bioluminescent),var(--chlorophyll) 45%,var(--cellular-pink)); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.card h3`: font-size: 1.15rem; margin-bottom: .45rem.
- `.t-display`: font-family: var(--font-display); font-weight: 700; font-size: clamp(2rem,5vw,3rem); color: var(--bioluminescent).
- `.t-title`: font-family: var(--font-display); font-weight: 600; font-size: 1.75rem.
- `.t-body`: font-size: 1rem; color: var(--ink).
- `.t-label`: font-size: .82rem; letter-spacing: .14em; color: var(--chlorophyll); text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--radius-cell: 38% 62% 55% 45%/48% 40% 60% 52%`。

- `.wrap`: max-width: 1100px; margin: 0 auto; padding: 0 1.25rem.
- `.hero`: display: grid; gap: 2.4rem; align-items: center; padding: 3.6rem 0 2.4rem.
- `.hero h1`: font-size: clamp(2.1rem,6vw,3.5rem); margin: .9rem 0 .8rem; background: linear-gradient(100deg,var(--bioluminescent),var(--chlorophyll) 45%,var(--cellular-pink)); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.hero p`: color: var(--ink-dim); max-width: 44ch; margin-bottom: 1.6rem.
- `.hero-cta`: display: flex; gap: .9rem; flex-wrap: wrap.
- `.hero`: grid-template-columns: 1.1fr .9fr; padding-top: 4.5rem.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; font-family: var(--font-display); font-weight: 700; font-size: 1rem; padding: .78rem 1.6rem; border: 1px solid transparent; cursor: pointer; text-decoration: none; border-radius: 48% 52% 46% 54%/56% 44% 58% 42%; transition: transform .45s var(--morph-ease),box-shadow .45s var(--morph-ease),border-radius .45s var(--morph-ease),background-color .3s.
- `.btn:active`: transform: scale(.96).
- `.btn:disabled`: opacity: .4; cursor: not-allowed; box-shadow: none; transform: none.

### 卡片与容器

- `.card`: position: relative; padding: 1.6rem 1.5rem; border: 1px solid rgba(0,255,255,.24); border-radius: 30px 46px 34px 50px/44px 30px 50px 36px; background: linear-gradient(160deg,rgba(0,255,255,.08),rgba(255,153,153,.05) 70%); backdrop-filter: blur(6px); transition: transform .5s var(--morph-ease),box-shadow .5s var(--morph-ease).
- `.card:hover`: transform: translateY(-6px) scale(1.015); box-shadow: 0 14px 44px rgba(0,255,255,.18).
- `.card .ico`: width: 52px; height: 52px; display: grid; place-items: center; border-radius: 46% 54% 50% 50%/54% 46% 52% 48%; background: rgba(0,255,65,.12); border: 1px solid rgba(0,255,65,.4); color: var(--chlorophyll); margin-bottom: 1rem; animation: breathe var(--breathing-duration) ease-in-out infinite.
- `.card h3`: font-size: 1.15rem; margin-bottom: .45rem.
- `.card p`: color: var(--ink-dim); font-size: .95rem.

### 表单与选择控件

- `.switch`: appearance: none; -webkit-appearance: none; width: 58px; height: 32px; border-radius: 999px; background: rgba(175,204,195,.25); border: 1px solid rgba(0,255,255,.35); position: relative; cursor: pointer; transition: background .35s var(--morph-ease).
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 4px; width: 24px; height: 24px; border-radius: 52% 48% 55% 45%/48% 52% 45% 55%; background: var(--ink-dim); transition: transform .4s var(--morph-ease),background .35s.
- `.switch:checked`: background: rgba(0,255,65,.3).
- `.switch:checked::after`: transform: translateX(25px); background: var(--chlorophyll); box-shadow: 0 0 14px rgba(0,255,65,.7).
- `.switch-line`: display: inline-flex; align-items: center; gap: .7rem.
- `.switch-line label`: cursor: pointer.
- `.field`: display: grid; gap: .45rem.

### 导航

- `header`: position: sticky; top: 0; z-index: 10; background: rgba(0,18,40,.78); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,255,255,.18).
- `.nav`: max-width: 1100px; margin: 0 auto; padding: .75rem 1.25rem; display: flex; align-items: center; gap: .9rem; flex-wrap: wrap.
- `.nav ul`: display: flex; gap: .35rem; list-style: none; margin-left: auto; flex-wrap: wrap; align-items: center.
- `.nav a.link`: color: var(--ink-dim); text-decoration: none; font-size: .94rem; padding: .3rem .65rem; border-radius: 999px.
- `.nav a.link:hover`: color: var(--bioluminescent); background: rgba(0,255,255,.08).

## 交互与动效

动效令牌：`--breathing-duration: 4s`；`--morph-ease: cubic-bezier(.4,0,.2,1)`。

- `:focus-visible`: outline: 3px solid var(--bioluminescent); outline-offset: 2px; border-radius: 6px.
- `.nav a.link:hover`: color: var(--bioluminescent); background: rgba(0,255,255,.08).
- `.btn-primary:hover`: transform: scale(1.05); border-radius: 52% 48% 58% 42%/44% 56% 42% 58%; box-shadow: 0 0 40px rgba(0,255,65,.55).
- `.btn-secondary:hover`: background: rgba(0,255,255,.2); transform: scale(1.04).
- `.btn-ghost:hover`: background: rgba(255,153,153,.12); transform: scale(1.04).
- `.btn:active`: transform: scale(.96).
- `.btn:disabled`: opacity: .4; cursor: not-allowed; box-shadow: none; transform: none.
- `.card:hover`: transform: translateY(-6px) scale(1.015); box-shadow: 0 14px 44px rgba(0,255,255,.18).
- `.switch:checked`: background: rgba(0,255,65,.3).
- `.switch:checked::after`: transform: translateX(25px); background: var(--chlorophyll); box-shadow: 0 0 14px rgba(0,255,65,.7).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--bioluminescent); outline-offset: 2px; border-radius: 6px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--chlorophyll); outline-offset: 2px; border-color: var(--chlorophyll).

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
