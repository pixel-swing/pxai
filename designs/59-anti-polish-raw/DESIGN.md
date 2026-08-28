---
name: "59 反精致/生涩美学"
version: "alpha"
id: "59-anti-polish-raw"
source: "style-templates/pages/59-anti-polish-raw.html"
description: "反精致/生涩美学风格演示：手绘线条、扫描纸张纹理、微旋抖动与零平滑过渡的真实手作感界面。"
colors:
  paper-bg: "#FAFAF8"
  pencil: "#4A4A4A"
  marker: "#1A1A1A"
  kraft: "#C4A77D"
  tape: "rgba(196,167,125,.55)"
  aged: "#EDE6D6"
  paper-white: "#FFFFFF"
  placeholder: "#8A8A85"
  primary: "#1A1A1A"
  on-primary: "#FAFAF8"
  primary-container: "#EDE6D6"
  on-primary-container: "#1A1A1A"
  secondary: "#FFFFFF"
  on-secondary: "#1A1A1A"
  secondary-container: "#EDE6D6"
  on-secondary-container: "#1A1A1A"
  tertiary: "#C4A77D"
  on-tertiary: "#1A1A1A"
  background: "#FAFAF8"
  on-background: "#1A1A1A"
  surface: "#FFFFFF"
  on-surface: "#1A1A1A"
  surface-container: "#EDE6D6"
  outline: "#4A4A4A"
typography:
  display-lg:
    fontFamily: "ZCOOL KuaiLe"
    fontSize: "2.9rem"
    fontWeight: "400"
    lineHeight: "1.3"
    letterSpacing: ".02em"
  headline-lg:
    fontFamily: "ZCOOL KuaiLe"
    fontSize: "1.7rem"
    fontWeight: "400"
    lineHeight: "1.3"
    letterSpacing: ".02em"
  headline-md:
    fontFamily: "ZCOOL KuaiLe"
    fontSize: "1.2rem"
    fontWeight: "400"
    lineHeight: "1.3"
    letterSpacing: ".02em"
  body-md:
    fontFamily: "Patrick Hand"
    fontSize: "1.0625rem"
    fontWeight: "400"
    lineHeight: "1.65"
  label-sm:
    fontFamily: "Patrick Hand"
    fontSize: ".9rem"
    fontWeight: "400"
    lineHeight: "1.4"
    letterSpacing: ".16em"
  button-md:
    fontFamily: "ZCOOL KuaiLe"
    fontSize: "1.05rem"
    fontWeight: "400"
    lineHeight: "1.65"
rounded:
  DEFAULT: "2px"
  demo: "6px"
spacing:
  unit: ".25rem"
  sm: ".7rem"
  md: "1.25rem"
  lg: "1.6rem"
  xl: "2.8rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "0.65rem 1.5rem"
    height: "auto"
  card-standard:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.DEFAULT}"
    padding: "1.5rem 1.4rem 1.3rem"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: ".7rem .9rem"
    height: "auto"
---

# 59 反精致/生涩美学 Design System

## 品牌与视觉方向

反精致/生涩美学风格演示：手绘线条、扫描纸张纹理、微旋抖动与零平滑过渡的真实手作感界面。

视觉关键词来自页面本身：故意不完美， 才像人做的；风格信息；核心特性；手绘线框；扫描纸纹；贴纸拼贴；按钮与控件；投稿一页草稿。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--paper-bg` | `#FAFAF8` |
| `--pencil` | `#4A4A4A` |
| `--marker` | `#1A1A1A` |
| `--kraft` | `#C4A77D` |
| `--tape` | `rgba(196,167,125,.55)` |
| `--aged` | `#EDE6D6` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FAFAF8`、`#4A4A4A`、`#1A1A1A`、`#C4A77D`、`#EDE6D6`、`#FFF`、`#8A8A85`。

语义映射必须遵循原页面的实际用途：

| Role | Source token | Value |
|---|---|---|
| 页面背景 | `paper-bg` / `background` | `#FAFAF8` |
| 普通卡片、表单、次按钮 | `paper-white` / `surface` / `secondary` | `#FFFFFF` |
| 页眉、禁用态、次级容器 | `aged` / `surface-container` | `#EDE6D6` |
| 主文字、主按钮 | `marker` / `primary` | `#1A1A1A` |
| 正文、边框、硬阴影 | `pencil` / `outline` | `#4A4A4A` |
| hover 强调、胶带、不规则下划线 | `kraft` / `tertiary` | `#C4A77D` |

不要把 `paper-bg` 与白色卡片表面合并；原页面通过这两个非常接近但不同的颜色保留纸张层次。

## 字体与信息层级

字体族必须采用源页面的两套完整字体栈：标题与按钮使用 `"ZCOOL KuaiLe","Patrick Hand","Comic Sans MS",cursive`，正文使用 `"Patrick Hand",system-ui,-apple-system,"Microsoft YaHei",sans-serif`。所有标题均为 `400` 常规字重，不使用粗体模拟马克笔；标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--paper-bg); color: var(--marker); font-size: 17px; line-height: 1.65; overflow-x: hidden.
- `body::before`: content: ""; position: fixed; inset: 0; z-index: 50; pointer-events: none; mix-blend-mode: multiply; opacity: var(--texture-opacity); background: url("data:image/svg+xml; utf8,<svg xmlns='http: //www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='240' height='240' filter='url(%23n)' opacity='0.55'/></svg>").
- `h1,h2,h3`: font-family: var(--font-hand); font-weight: 400; line-height: 1.3; letter-spacing: .02em.
- `h2`: font-size: 1.7rem; display: inline-block; transform: rotate(-.8deg); border-bottom: 3px solid var(--marker); border-radius: 2px; padding-bottom: .15rem; margin-bottom: .6rem.
- `.eyebrow`: display: inline-block; font-size: .9rem; color: var(--marker); background: var(--tape); padding: .25rem .9rem; transform: rotate(-2deg); border-radius: 2px.
- `.hero h1`: font-size: clamp(2.1rem,6.5vw,3.4rem); margin: .8rem 0 .7rem.
- `.hero h1 mark`: background: linear-gradient(transparent 55%,var(--kraft) 55%); color: inherit; padding: 0 .1em.
- `.card h3`: font-size: 1.2rem; margin-bottom: .4rem.
- `.t-display`: font-family: var(--font-hand); font-size: clamp(2rem,5vw,2.9rem); transform: rotate(-.6deg); display: inline-block.
- `.t-title`: font-family: var(--font-hand); font-size: 1.7rem.
- `.t-body`: font-size: 1.02rem.
- `.t-label`: font-family: "Patrick Hand", cursive; font-size: .9rem; letter-spacing: .16em; color: var(--pencil); text-transform: uppercase.

## 形状、间距与深度

禁止把形状简化为普通 `2px` 圆角。源页面依靠两套极端、不对称的椭圆圆角模拟手绘抖动，必须作为原始令牌保留：

- `--wobble: 255px 15px 225px 15px / 15px 225px 15px 255px`.
- `--wobble2: 15px 225px 15px 255px / 255px 15px 225px 15px`.
- `--texture-opacity: .3`；扫描噪点覆盖整页，`position: fixed; inset: 0; z-index: 50; pointer-events: none; mix-blend-mode: multiply`.
- 深度只使用硬边偏移阴影，主色来自 `--pencil` 或其透明版本；禁止模糊发光。

- `.wrap`: max-width: 1020px; margin: 0 auto; padding: 0 1.25rem.
- `.hero`: display: grid; gap: 2.2rem; align-items: center; padding: 3.2rem 0 2rem.
- `.hero h1`: font-size: clamp(2.1rem,6.5vw,3.4rem); margin: .8rem 0 .7rem.
- `.hero h1 mark`: background: linear-gradient(transparent 55%,var(--kraft) 55%); color: inherit; padding: 0 .1em.
- `.hero p`: color: var(--pencil); max-width: 46ch; margin-bottom: 1.5rem.
- `.hero-cta`: display: flex; gap: .9rem; flex-wrap: wrap.
- `.hero`: grid-template-columns: 1.1fr .9fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-block; font-family: var(--font-hand); font-size: 1.05rem; padding: .65rem 1.5rem; border: 2px solid var(--marker); border-radius: var(--wobble2); background: #fff; color: var(--marker); cursor: pointer; text-decoration: none; box-shadow: 3px 3px 0 var(--pencil).
- `.btn:hover`: transform: translate(2px,2px) rotate(-1deg); box-shadow: 1px 1px 0 var(--pencil).
- `.btn:active`: transform: translate(3px,3px) rotate(.5deg); box-shadow: none.
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; background: var(--aged); color: var(--pencil).
- `.btn-primary:hover`: background: var(--kraft); color: var(--marker).
- `.btn-secondary:hover`: background: var(--aged).
- `.btn-ghost`: background: transparent; border-style: dashed; border-color: var(--pencil); color: var(--pencil); box-shadow: none.
- `.btn-ghost:hover`: border-color: var(--marker); color: var(--marker); background: #fff.
- `.btn-sm`: padding: .4rem 1rem; font-size: .95rem.

### 卡片与容器

- `.card`: position: relative; background: #fff; border: 2px solid var(--marker); border-radius: var(--wobble); padding: 1.5rem 1.4rem 1.3rem; box-shadow: 4px 5px 0 rgba(74,74,74,.28).
- `.card:nth-child(1)`: transform: rotate(-.7deg).
- `.card:nth-child(2)`: transform: rotate(.9deg); border-radius: var(--wobble2).
- `.card:nth-child(3)`: transform: rotate(-.4deg).
- `.card::after`: content: ""; position: absolute; top: -12px; right: 26px; width: 70px; height: 22px; background: var(--tape); transform: rotate(4deg).
- `.card:hover`: animation: jitter .3s steps(2) infinite.
- `.card .ico`: display: inline-grid; place-items: center; width: 50px; height: 50px; border: 2px solid var(--marker); border-radius: 4px 40px 6px 44px/40px 5px 44px 6px; background: var(--aged); color: var(--marker); margin-bottom: .9rem; transform: rotate(-2deg).
- `.polaroid`: background: #fff; border: 2px solid var(--marker); border-radius: var(--wobble); padding: 1rem; transform: rotate(1.6deg); box-shadow: 5px 6px 0 rgba(74,74,74,.25); max-width: 340px.
- `.polaroid::before`: top: -14px; left: 34px; width: 92px; height: 28px; background: var(--tape); transform: rotate(-5deg); border-inline: 1px dashed rgba(26,26,26,.25).
- `.scribble`: height: 190px; border: 2px dashed var(--pencil); border-radius: 8px 120px 10px 140px/120px 8px 140px 12px; background: repeating-linear-gradient(45deg,transparent 0 7px,rgba(74,74,74,.16) 7px 9px).
- `.chip`: border: 2px solid var(--marker); border-radius: 2px 14px 4px 16px/14px 3px 16px 4px; background: #fff; padding: .35rem .9rem; box-shadow: 2px 2px 0 rgba(74,74,74,.3). Odd children rotate `-1.2deg`; even children rotate `1deg` and use `--aged`.
- `.demo`: border: 2px dashed var(--pencil); border-radius: 6px; padding: 1.6rem 1.4rem; background: rgba(255,255,255,.6); display: grid; gap: 1.4rem.

### 表单与选择控件

- `.switch`: appearance: none; -webkit-appearance: none; width: 60px; height: 32px; border: 2px solid var(--marker); border-radius: 4px 18px 6px 20px/18px 5px 20px 6px; background: #fff; position: relative; cursor: pointer.
- `.switch::after`: content: ""; position: absolute; top: 2px; left: 3px; width: 22px; height: 22px; background: var(--pencil); border-radius: 3px 10px 4px 12px/10px 4px 12px 5px; transform: rotate(-3deg).
- `.switch:checked`: background: var(--aged).
- `.switch:checked::after`: left: auto; right: 3px; background: var(--kraft); border: 1px solid var(--marker); transform: rotate(4deg).
- `.switch-line`: display: inline-flex; align-items: center; gap: .7rem.
- `.switch-line label`: cursor: pointer.
- `.field`: display: grid; gap: .4rem.
- `form`: background: #fff; border: 2px solid var(--marker); border-radius: var(--wobble2); padding: 1.7rem 1.4rem; box-shadow: 5px 5px 0 rgba(74,74,74,.25); display: grid; gap: 1.2rem; transform: rotate(.3deg).
- `input[type="text"], input[type="email"], textarea`: background: var(--paper-bg); border: 2px solid var(--pencil); border-radius: 3px 16px 4px 18px/16px 4px 18px 5px; padding: .7rem .9rem.
- Placeholder color is exactly `#8A8A85`; focused fields switch to `#fff` and retain the dashed focus ring.
- `.badge`: font-family: var(--font-hand); font-size: .9rem; border: 2px solid var(--marker); border-radius: 2px; background: var(--kraft); padding: .25rem .8rem; transform: rotate(-2deg); box-shadow: 2px 2px 0 rgba(26,26,26,.35).

### 导航

- `header`: background: var(--aged); border-bottom: 2px solid var(--marker).
- `.nav`: max-width: 1020px; margin: 0 auto; padding: .7rem 1.25rem; display: flex; align-items: center; gap: .8rem; flex-wrap: wrap.
- `.nav ul`: display: flex; gap: .2rem; list-style: none; margin-left: auto; flex-wrap: wrap; align-items: center.
- `.nav a.link`: color: var(--pencil); text-decoration: underline wavy var(--kraft) 2px; text-underline-offset: 4px; padding: .3rem .55rem; font-size: 1rem.
- `.nav a.link:hover`: color: var(--marker); background: var(--kraft); text-decoration: none; transform: rotate(1deg).

### 配色样本

- `.sw`: background: #fff; border: 2px solid var(--marker); border-radius: 3px 20px 5px 22px/20px 4px 22px 5px; overflow: hidden; box-shadow: 3px 3px 0 rgba(74,74,74,.25).
- 奇数样本旋转 `-.8deg`，偶数样本旋转 `.7deg`；色块高度 `80px`，底边 `2px solid var(--marker)`.

## 交互与动效

这是反精致风格的硬性规则：`* { transition: none !important; }`。所有状态切换都是 `0ms`，禁止补充任何 easing 或 `160–240ms` 通用过渡。唯一允许的连续动效是源页面已有的两步 jitter 抖动；它只在 polaroid 与 card 的 hover 状态出现。

- `:focus-visible`: outline: 3px dashed var(--marker); outline-offset: 3px.
- `.nav a.link:hover`: color: var(--marker); background: var(--kraft); text-decoration: none; transform: rotate(1deg).
- `.btn:hover`: transform: translate(2px,2px) rotate(-1deg); box-shadow: 1px 1px 0 var(--pencil).
- `.btn:active`: transform: translate(3px,3px) rotate(.5deg); box-shadow: none.
- `.btn-primary:hover`: background: var(--kraft); color: var(--marker).
- `.btn-secondary:hover`: background: var(--aged).
- `.btn-ghost:hover`: border-color: var(--marker); color: var(--marker); background: #fff.
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; background: var(--aged); color: var(--pencil).
- `.polaroid:hover`: animation: jitter .28s steps(2) infinite.
- `.card:hover`: animation: jitter .3s steps(2) infinite.
- `@keyframes jitter`: `0% { rotate(1.6deg) translate(0,0) }`; `50% { rotate(.4deg) translate(1px,-1px) }`; `100% { rotate(2.2deg) translate(-1px,1px) }`.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px dashed var(--marker); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px dashed var(--marker); outline-offset: 2px; background: #fff.

## 生成新页面时的执行规则

1. 首先套用 front matter 中的原始令牌，再从组件规范选择最接近的现有模式。
2. 保持源页面的密度、留白、对齐方式与视觉重心；内容可以变化，但视觉语法不能变化。
3. 新增组件必须由现有颜色、字体、圆角、边框和阴影组合而成，禁止引入第二套设计语言。
4. 交互状态至少覆盖 hover、active、focus-visible 与 disabled；触屏界面不能依赖 hover 才显示关键操作。
5. 在窄屏优先重排和堆叠，不以缩小字号或压缩点击目标来维持桌面布局。

## 禁止事项

- 不要添加源页面未使用的渐变。仅允许源页面已有的 mark 下划线 `linear-gradient`、scribble 斜线 `repeating-linear-gradient` 与扫描噪点；禁止玻璃模糊、柔和投影、发光或规则化的大圆角。
- 不要用通用组件库默认样式覆盖这里的令牌和组件状态。
- 不要牺牲焦点可见性、文字对比度或减少动态偏好来追求风格效果。
- 不要在同一页面混用相近但不相同的颜色、间距或圆角数值。
- 不要把标题设为粗体，不要把 `--wobble`/`--wobble2` 替换成普通圆角，不要为任何状态添加平滑过渡。
