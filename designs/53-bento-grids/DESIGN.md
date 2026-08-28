---
name: "53 便当网格"
version: "alpha"
id: "53-bento-grids"
source: "style-templates/pages/53-bento-grids.html"
description: "便当网格（Bento Grids）风格演示：Apple 式模块化卡片、大小穿插的栅格与柔和阴影。"
colors:
  card-bg: "#FFFFFF"
  page-bg: "#F5F5F7"
  text: "#1D1D1F"
  text-soft: "#55555C"
  accent: "#0066CC"
  background: "#F5F5F7"
  on-background: "#1D1D1F"
  primary: "#0066CC"
  on-primary: "#FFFFFF"
  secondary: "#5E5CE6"
  on-secondary: "#FFFFFF"
  tertiary: "#34C759"
  on-tertiary: "#0A3D1B"
  surface: "#FFFFFF"
  on-surface: "#1D1D1F"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "52px"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: "-.03em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "58px"
    fontWeight: "800"
    lineHeight: "1.12"
    letterSpacing: "-.03em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "38px"
    fontWeight: "800"
    lineHeight: "1.3"
    letterSpacing: "-.02em"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Inter"
    fontSize: "15px"
    fontWeight: "600"
    lineHeight: "1"
rounded:
  card-radius: "24px"
  DEFAULT: "24px"
spacing:
  grid-gap: "20px"
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

# 53 便当网格 Design System

## 品牌与视觉方向

便当网格（Bento Grids）风格演示：Apple 式模块化卡片、大小穿插的栅格与柔和阴影。

视觉关键词来自页面本身：像便当一样， 把内容装进格子里；2×2 主格；1×1 小格；自动重排；风格信息；为什么用便当网格；不等大栅格；圆角与柔影。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--card-bg` | `#FFFFFF` |
| `--page-bg` | `#F5F5F7` |
| `--text` | `#1D1D1F` |
| `--text-soft` | `#55555C` |
| `--accent` | `#0066CC` |
| `--shadow` | `0 1px 2px rgba(0,0,0,.04),0 10px 30px -12px rgba(0,0,0,.10)` |
| `--shadow-hover` | `0 2px 4px rgba(0,0,0,.05),0 22px 44px -14px rgba(0,0,0,.16)` |
| `--border` | `1px solid rgba(0,0,0,.05)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FFFFFF`、`#F5F5F7`、`#1D1D1F`、`#55555C`、`#0066CC`、`#FFF`、`#0055AA`、`#E4E4E9`、`#8E8E93`、`#0A84FF`、`#5E5CE6`、`#BF5AF2`、`#D6D6DB`、`#34C759`、`#1B7A3D`、`#EFEFF2`。

## 字体与信息层级

字体族：**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); font-size: 16px; line-height: 1.65; color: var(--text); background: var(--page-bg).
- `.eyebrow`: display: inline-block; font-size: 13px; font-weight: 600; letter-spacing: .14em; color: var(--accent); background: rgba(0,102,204,.10); padding: 7px 14px; border-radius: 999px; margin-bottom: 18px.
- `h1`: font-size: clamp(34px,6vw,58px); font-weight: 800; letter-spacing: -.03em; line-height: 1.12; text-wrap: balance.
- `.b-big h3`: font-size: clamp(22px,3vw,30px); font-weight: 800; letter-spacing: -.02em; line-height: 1.2.
- `.b-mini h3`: font-size: 15.5px; font-weight: 700.
- `h2`: font-size: clamp(26px,4vw,38px); font-weight: 800; letter-spacing: -.02em; margin-bottom: 10px.
- `.card h3`: font-size: 18px; font-weight: 700; margin: 14px 0 6px.
- `.t-display`: font-size: clamp(32px,5vw,52px); font-weight: 800; letter-spacing: -.03em; line-height: 1.1.
- `.t-h`: font-size: 26px; font-weight: 700; letter-spacing: -.01em.
- `.t-body`: font-size: 16px; max-width: 560px.

## 形状、间距与深度

圆角令牌：`--card-radius: 24px`。
空间令牌：`--grid-gap: 20px`。
阴影/海拔令牌：`--shadow: 0 1px 2px rgba(0,0,0,.04),0 10px 30px -12px rgba(0,0,0,.10)`；`--shadow-hover: 0 2px 4px rgba(0,0,0,.05),0 22px 44px -14px rgba(0,0,0,.16)`。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `.hero`: padding: 72px 0 30px; text-align: center.
- `.hero .lead`: margin: 18px auto 30px; max-width: 560px; font-size: 18px; color: var(--text-soft).
- `.hero-cta`: display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 52px.
- `section.pad`: padding: 64px 0.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; font: 600 15px/1 var(--font); padding: 12px 22px; border-radius: 999px; border: 1px solid transparent; cursor: pointer; text-decoration: none; transition: transform .3s var(--ease),box-shadow .3s var(--ease),background .3s var(--ease).
- `.btn:disabled`: background: #E4E4E9; color: #8E8E93; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.tile`: background: var(--card-bg); border-radius: var(--card-radius); border: var(--border); box-shadow: var(--shadow); padding: 26px; transition: transform .3s var(--ease),box-shadow .3s var(--ease).
- `.tile:hover`: transform: scale(1.02); box-shadow: var(--shadow-hover).
- `.tile .ic`: width: 42px; height: 42px; border-radius: 12px; display: grid; place-items: center; background: var(--page-bg); color: var(--accent); flex: none.
- `.card h3`: font-size: 18px; font-weight: 700; margin: 14px 0 6px.
- `.card p`: font-size: 15px; color: var(--text-soft).
- `.tile:hover,.btn-primary:hover`: transform: none.

### 表单与选择控件

- `.toggle-field`: display: flex; align-items: center; gap: 12px.
- `.toggle-input`: position: absolute; opacity: 0; width: 52px; height: 32px.
- `.toggle`: width: 52px; height: 32px; border-radius: 999px; background: #D6D6DB; position: relative; transition: background .3s var(--ease); flex: none.
- `.toggle::after`: content: ""; position: absolute; top: 2px; left: 2px; width: 28px; height: 28px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.2); transition: transform .3s var(--ease).
- `.toggle-input:checked+.toggle`: background: #34C759.
- `.toggle-input:checked+.toggle::after`: transform: translateX(20px).
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid var(--accent); outline-offset: 3px.

### 导航

- `header`: position: sticky; top: 0; z-index: 40; background: rgba(245,245,247,.82); backdrop-filter: blur(14px); border-bottom: var(--border).
- `.nav`: display: flex; align-items: center; gap: 20px; height: 60px.
- `.nav a.lnk`: display: none; font-size: 14.5px; font-weight: 500; color: var(--text-soft); text-decoration: none.
- `.nav a.lnk:hover`: color: var(--text).
- `.nav a.lnk`: display: inline.
- `footer nav`: display: flex; gap: 20px; flex-wrap: wrap.

## 交互与动效

动效令牌：`--ease: cubic-bezier(.32,.72,.28,1)`。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `.nav a.lnk:hover`: color: var(--text).
- `.btn-primary:hover`: background: #0055aa; transform: scale(1.02); box-shadow: 0 10px 24px -8px rgba(0,102,204,.5).
- `.btn-primary:active`: transform: scale(.97).
- `.btn-secondary:hover`: transform: scale(1.02); box-shadow: var(--shadow-hover).
- `.btn-ghost:hover`: background: rgba(0,102,204,.08).
- `.btn:disabled`: background: #E4E4E9; color: #8E8E93; cursor: not-allowed; transform: none; box-shadow: none.
- `.tile:hover`: transform: scale(1.02); box-shadow: var(--shadow-hover).
- `.toggle-input:checked+.toggle`: background: #34C759.
- `.toggle-input:checked+.toggle::after`: transform: translateX(20px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:720px)`、`(min-width:860px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `.toggle-input:focus-visible+.toggle`: outline: 3px solid var(--accent); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; background: #fff; border-color: var(--accent); box-shadow: 0 0 0 4px rgba(0,102,204,.18).

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
