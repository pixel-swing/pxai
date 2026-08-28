---
name: "05 3D 与超写实"
version: "alpha"
id: "05-3d-hyperrealism"
source: "style-templates/pages/05-3d-hyperrealism.html"
description: "3D 与超写实（3D & Hyperrealism）风格演示：深色多层阴影、1000px 透视纵深、复杂多停靠点渐变与拟真光照。"
colors:
  navy: "#001F3F"
  navy-deep: "#000E1F"
  green: "#228B22"
  burgundy: "#800020"
  gold: "#FFD700"
  silver: "#C0C0C0"
  text-color: "#EFE7D7"
  text-dim: "rgba(239,231,215,.78)"
  background: "#000E1F"
  on-background: "#EFE7D7"
  primary: "#FFD700"
  on-primary: "#241A00"
  secondary: "#C0C0C0"
  on-secondary: "#101B29"
  surface: "#062A4C"
  on-surface: "#EFE7D7"
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: "50px"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: "56px"
    fontWeight: "700"
    lineHeight: "1.18"
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: "36px"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Inter"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".22em"
  button-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "16px"
  DEFAULT: "16px"
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

# 05 3D 与超写实 Design System

## 品牌与视觉方向

3D 与超写实（3D & Hyperrealism）风格演示：深色多层阴影、1000px 透视纵深、复杂多停靠点渐变与拟真光照。

视觉关键词来自页面本身：有重量的界面， 触手可及的纵深；拟真三要素；多层真实阴影；透视与视差；材质与光泽；按钮与控件；表单示例；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--navy` | `#001F3F` |
| `--navy-deep` | `#000E1F` |
| `--green` | `#228B22` |
| `--burgundy` | `#800020` |
| `--gold` | `#FFD700` |
| `--silver` | `#C0C0C0` |
| `--text-color` | `#EFE7D7` |
| `--text-dim` | `rgba(239,231,215,.78)` |
| `--shadow-3d` | `0 2px 4px rgba(0,0,0,.45),0 10px 20px rgba(0,0,0,.4),0 28px 56px rgba(0,0,0,.35)` |
| `--shadow-3d-hover` | `0 4px 8px rgba(0,0,0,.5),0 18px 32px rgba(0,0,0,.45),0 42px 80px rgba(0,0,0,.4)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#001F3F`、`#000E1F`、`#228B22`、`#800020`、`#FFD700`、`#C0C0C0`、`#EFE7D7`、`#03294F`、`#001730`、`#FFF3B0`、`#FFE566`、`#D9A800`、`#A87E00`、`#8A6600`、`#E3B800`、`#B58F00`、`#8F7000`、`#241A00`、`#8A6D00`、`#6E5600`、`#F4F4F4`、`#DCDCDC`、`#9C9C9C`、`#7E7E7E`。

## 字体与信息层级

字体族：**Playfair Display**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); color: var(--text-color); font-size: 16px; line-height: 1.65; overflow-x: hidden; background: radial-gradient(1200px 800px at 50% -10%,rgba(64,120,192,.28),transparent 60%),
    radial-gradient(900px 700px at 90% 100%,rgba(128,0,32,.22),transparent 60%),
    linear-gradient(180deg,#03294F 0%,#001F3F 34%,#001730 68%,#000E1F 100%); background-attachment: fixed.
- `.eyebrow`: letter-spacing: .24em; font-size: 13px; font-weight: 600; color: var(--silver); text-transform: uppercase.
- `h1`: font-family: var(--font-display); font-size: clamp(34px,5.6vw,56px); line-height: 1.18; font-weight: 700; margin: 16px 0 18px.
- `h2`: font-family: var(--font-display); font-size: clamp(26px,3.6vw,36px); font-weight: 700.
- `h3`: font-family: var(--font-display); font-size: 20px; font-weight: 600; margin-bottom: 8px; color: #FFE9A8.
- `.t-display`: font-family: var(--font-display); font-size: clamp(34px,5vw,50px); font-weight: 700; line-height: 1.15.
- `.t-heading`: font-family: var(--font-display); font-size: 28px; font-weight: 600; color: #FFE9A8.
- `.t-body`: font-size: 17px; color: var(--text-dim).
- `.t-label`: font-size: 13px; letter-spacing: .22em; text-transform: uppercase; font-weight: 600; color: var(--silver).

## 形状、间距与深度

圆角令牌：`--radius: 16px`。
阴影/海拔令牌：`--shadow-3d: 0 2px 4px rgba(0,0,0,.45),0 10px 20px rgba(0,0,0,.4),0 28px 56px rgba(0,0,0,.35)`；`--shadow-3d-hover: 0 4px 8px rgba(0,0,0,.5),0 18px 32px rgba(0,0,0,.45),0 42px 80px rgba(0,0,0,.4)`。

- `.container`: width: min(1120px,92%); margin-inline: auto.
- `.hero`: padding: 80px 0 64px; position: relative.
- `.hero-grid`: display: grid; gap: 48px; align-items: center.
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.
- `.hero-actions`: display: flex; flex-wrap: wrap; gap: 16px; margin-top: 30px.
- `.section`: padding: 54px 0.
- `.section-head`: margin-bottom: 28px.
- `.section-sub`: color: var(--text-dim); margin-top: 8px; max-width: 42em.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 26px; border-radius: 12px; font-size: 16px; font-weight: 600; font-family: var(--font-body); text-decoration: none; cursor: pointer; border: 1px solid transparent; transition: transform var(--animation-duration) var(--ease),box-shadow var(--animation-duration) var(--ease),filter var(--animation-duration) var(--ease).
- `.btn:disabled`: filter: grayscale(.9) brightness(.7); cursor: not-allowed; transform: none; box-shadow: 0 2px 0 rgba(0,0,0,.4).

### 卡片与容器

- `.card`: padding: 26px; border-radius: var(--radius); background: linear-gradient(160deg,#0A3560 0%,#062A4C 36%,#04203C 70%,#03182E 100%); border: 1px solid rgba(255,215,0,.2); box-shadow: var(--shadow-3d),inset 0 1px 0 rgba(255,255,255,.14); transform: rotateX(1.5deg); transition: transform var(--animation-duration) var(--ease),box-shadow var(--animation-duration) var(--ease).
- `.card:hover`: transform: rotateX(0) translateY(-8px); box-shadow: var(--shadow-3d-hover),inset 0 1px 0 rgba(255,255,255,.18).
- `.card p`: color: var(--text-dim); font-size: 16px.

### 表单与选择控件

- `::selection`: background: rgba(255,215,0,.4).
- `.switch-input`: position: absolute; opacity: 0; width: 1px; height: 1px.
- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-size: 16px.
- `.switch-input:checked+.switch .track`: background: linear-gradient(180deg,#8F7000,#FFD700).
- `.switch-input:checked+.switch .knob`: transform: translateX(24px).
- `.switch-input:focus-visible+.switch .track`: outline: 3px solid var(--gold); outline-offset: 3px.
- `.field`: display: grid; gap: 8px.

### 导航

- `.site-header`: position: sticky; top: 0; z-index: 50; background: rgba(0,14,31,.88); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(192,192,192,.22); box-shadow: 0 8px 24px rgba(0,0,0,.45).
- `.nav`: display: flex; align-items: center; gap: 18px; padding: 14px 0.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效令牌：`--animation-duration: 350ms`；`--ease: cubic-bezier(.33,1,.5,1)`。

- `:focus-visible`: outline: 3px solid var(--gold); outline-offset: 3px; border-radius: 6px.
- `.nav-links a:hover`: color: var(--gold).
- `.btn-gold:hover`: transform: translateY(-2px); filter: brightness(1.05); box-shadow: 0 7px 0 #6e5600,0 20px 36px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.65).
- `.btn-gold:active`: transform: translateY(4px); box-shadow: 0 1px 0 #6e5600,0 6px 12px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.5).
- `.btn-silver:hover`: transform: translateY(-2px); filter: brightness(1.05); box-shadow: 0 7px 0 #5c5c5c,0 20px 36px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.8).
- `.btn-silver:active`: transform: translateY(4px); box-shadow: 0 1px 0 #5c5c5c,0 6px 12px rgba(0,0,0,.5).
- `.btn-ghost:hover`: background: rgba(255,215,0,.14); transform: translateY(-2px).
- `.btn-ghost:active`: transform: translateY(1px).
- `.btn:disabled`: filter: grayscale(.9) brightness(.7); cursor: not-allowed; transform: none; box-shadow: 0 2px 0 rgba(0,0,0,.4).
- `.card:hover`: transform: rotateX(0) translateY(-8px); box-shadow: var(--shadow-3d-hover),inset 0 1px 0 rgba(255,255,255,.18).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:800px)`、`(min-width:920px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--gold); outline-offset: 3px; border-radius: 6px.
- `.switch-input:focus-visible+.switch .track`: outline: 3px solid var(--gold); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--gold); outline-offset: 2px; border-color: rgba(255,215,0,.6).

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
