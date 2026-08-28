---
name: "27 叙事驱动"
version: "alpha"
id: "27-storytelling"
source: "style-templates/pages/27-storytelling.html"
description: "叙事驱动落地页风格演示：章节式分区配色、600ms 滚动揭示与区块转场，用一个品牌故事推动情感与行动。"
colors:
  timeline-color: "#D97706"
  ch1: "#FFF7ED"
  ch1-deep: "#FFEDD5"
  a1: "#C2410C"
  a1-strong: "#9A3412"
  ch2: "#ECFDF5"
  a2: "#0F766E"
  ch3: "#EEF2FF"
  a3: "#5B21B6"
  ink: "#292524"
  soft: "#57534E"
  paper: "#FFFDF9"
  line: "#E7E5E4"
  focus: "#9A3412"
  primary: "#292524"
  on-primary: "#FFFFFF"
  surface: "#FFFDF9"
  on-surface: "#292524"
typography:
  display-lg:
    fontFamily: "Noto Serif SC"
    fontSize: "4rem"
    fontWeight: "900"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Noto Serif SC"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Noto Serif SC"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.25"
  body-md:
    fontFamily: "Noto Sans SC"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Noto Sans SC"
    fontSize: "13px"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Noto Sans SC"
    fontSize: "0.9375rem"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  DEFAULT: "4px"
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

# 27 叙事驱动 Design System

## 品牌与视觉方向

叙事驱动落地页风格演示：章节式分区配色、600ms 滚动揭示与区块转场，用一个品牌故事推动情感与行动。

视觉关键词来自页面本身：一盏灯， 照见山那边的课堂；三幕结构，把品牌讲成一场旅程；第一幕 · 山谷里的第一盏灯；第二幕 · 一间教室长成一片林；第三幕 · 星光落进孩子眼里；2019 · 一盏灯；2022 · 一片林；2026 · 一条河。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--timeline-color` | `#D97706` |
| `--ch1` | `#FFF7ED` |
| `--ch1-deep` | `#FFEDD5` |
| `--a1` | `#C2410C` |
| `--a1-strong` | `#9A3412` |
| `--ch2` | `#ECFDF5` |
| `--a2` | `#0F766E` |
| `--ch3` | `#EEF2FF` |
| `--a3` | `#5B21B6` |
| `--ink` | `#292524` |
| `--soft` | `#57534E` |
| `--paper` | `#FFFDF9` |
| `--line` | `#E7E5E4` |
| `--focus` | `#9A3412` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#D97706`、`#FFF7ED`、`#FFEDD5`、`#C2410C`、`#9A3412`、`#ECFDF5`、`#0F766E`、`#EEF2FF`、`#5B21B6`、`#292524`、`#57534E`、`#FFFDF9`、`#E7E5E4`、`#FFF`、`#7C2D12`、`#F5F5F4`、`#FDE68A`、`#F59E0B`、`#EA580C`、`#FDBA74`、`#FB923C`、`#FCD34D`、`#134E4A`、`#D1FAE5`。

## 字体与信息层级

字体族：**Noto Serif SC**、**Noto Sans SC**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--body-font); font-size: 16px; line-height: 1.7; color: var(--ink); background: var(--paper).
- `h1,h2`: font-family: var(--narrative-font); line-height: 1.25.
- `h2`: font-size: clamp(1.6rem,3.6vw,2.2rem); font-weight: 900; margin-bottom: 1rem.
- `.hero h1`: font-size: clamp(2.4rem,6.5vw,4rem); font-weight: 900; margin-bottom: 1.2rem.
- `.chapters h2,.chapters .timeline h3`: color: #134E4A.
- `.card h3`: font-family: var(--narrative-font); font-size: 1.15rem; margin-bottom: .5rem.
- `.timeline h3`: font-family: var(--narrative-font); font-size: 1.08rem.
- `.controls h2`: color: #3B2F84.
- `.t-display`: font-family: var(--narrative-font); font-weight: 900; font-size: clamp(2.5rem,6vw,4rem); line-height: 1.15.
- `.t-h`: font-family: var(--narrative-font); font-weight: 600; font-size: 28px.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `.hero`: position: relative; min-height: var(--section-min-height); display: flex; align-items: center; overflow: hidden; background: linear-gradient(180deg,var(--ch1-deep),var(--ch1) 70%); padding: var(--chapter-spacing) 0.
- `.hero-inner`: position: relative; z-index: 2; text-align: center; max-width: 760px.
- `.hero h1`: font-size: clamp(2.4rem,6.5vw,4rem); font-weight: 900; margin-bottom: 1.2rem.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; gap: .5rem; font: inherit; font-weight: 700; text-decoration: none; cursor: pointer; border: 2px solid transparent; border-radius: 999px; padding: .7rem 1.5rem; transition: transform .25s ease,box-shadow .25s ease,background-color .25s ease,color .25s ease.
- `.btn:active`: transform: translateY(1px) scale(.98); box-shadow: none.
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: background: #fff; border-radius: 18px; padding: 1.6rem; box-shadow: 0 8px 30px rgba(41,37,36,.08); border-top: 5px solid var(--a1); transition: transform .3s ease,box-shadow .3s ease.
- `.card:hover`: transform: translateY(-6px); box-shadow: 0 16px 40px rgba(41,37,36,.14).
- `.card.c2`: border-top-color: var(--a2).
- `.card.c3`: border-top-color: var(--a3).
- `.card h3`: font-family: var(--narrative-font); font-size: 1.15rem; margin-bottom: .5rem.
- `.card p`: color: var(--soft); font-size: 1rem.
- `.panel`: background: #fff; border-radius: 18px; padding: 1.8rem; box-shadow: 0 8px 30px rgba(41,37,36,.08).

### 表单与选择控件

- `.switch-wrap`: display: inline-flex; align-items: center; gap: .6rem.
- `.switch`: appearance: none; -webkit-appearance: none; width: 50px; height: 28px; border-radius: 14px; background: #D6D3D1; position: relative; cursor: pointer; transition: background .25s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; border-radius: 50%; background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,.3); transition: transform .25s.
- `.switch:checked`: background: var(--a3).
- `.switch:checked::after`: transform: translateX(22px).
- `.switch-wrap label`: font-weight: 500; cursor: pointer.
- `.field`: display: flex; flex-direction: column; gap: .4rem; margin-bottom: 1.1rem.

### 导航

- `.nav`: display: flex; align-items: center; gap: 1rem; height: 64px.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效令牌：`--reveal-duration: 600ms`。

- `:focus-visible`: outline: 3px solid var(--focus); outline-offset: 2px; border-radius: 4px.
- `.skip:focus-visible`: left: 8px.
- `.nav-links a:hover`: color: var(--a1-strong); text-decoration: underline.
- `.btn-primary:hover`: background: #7C2D12; transform: translateY(-2px); box-shadow: 0 10px 24px rgba(154,52,18,.28).
- `.btn-outline:hover`: background: var(--ch1-deep); transform: translateY(-2px).
- `.btn-ghost:hover`: color: var(--ink); background: #F5F5F4.
- `.btn:active`: transform: translateY(1px) scale(.98); box-shadow: none.
- `.btn:disabled`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.
- `.card:hover`: transform: translateY(-6px); box-shadow: 0 16px 40px rgba(41,37,36,.14).
- `.switch:checked`: background: var(--a3).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(min-width:780px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--focus); outline-offset: 2px; border-radius: 4px.
- `.skip:focus-visible`: left: 8px.
- `.input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--focus); outline-offset: 1px; border-color: var(--focus).

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
