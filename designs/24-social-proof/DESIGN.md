---
name: "24 社会认同导向"
version: "alpha"
id: "24-social-proof"
source: "style-templates/pages/24-social-proof.html"
description: "社会认同导向落地页风格演示：带头像的客户证言、Logo 信任墙、星级评分与滚动增长指标，让口碑替产品说话。"
colors:
  trust: "#1D4ED8"
  trust-deep: "#1E40AF"
  growth: "#15803D"
  star-color: "#FBBF24"
  testimonial-bg: "#F9FAFB"
  ink: "#111827"
  muted: "#4B5563"
  line: "#E5E7EB"
  bg: "#FFFFFF"
  primary: "#111827"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#111827"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "3.4rem"
    fontWeight: "800"
    lineHeight: "1.12"
  headline-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "3.15rem"
    fontWeight: "700"
    lineHeight: "1.16"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "1.06rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: ".84rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "0.9375rem"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "14px"
  DEFAULT: "14px"
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

# 24 社会认同导向 Design System

## 品牌与视觉方向

社会认同导向落地页风格演示：带头像的客户证言、Logo 信任墙、星级评分与滚动增长指标，让口碑替产品说话。

视觉关键词来自页面本身：别只听我们说， 听听客户怎么讲；让口碑替你完成销售的三要素；真实证言前置；客户 Logo 信任墙；数字滚动指标；按钮与控件；按钮状态；领取你所在行业的客户案例。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--trust` | `#1D4ED8` |
| `--trust-deep` | `#1E40AF` |
| `--growth` | `#15803D` |
| `--star-color` | `#FBBF24` |
| `--testimonial-bg` | `#F9FAFB` |
| `--ink` | `#111827` |
| `--muted` | `#4B5563` |
| `--line` | `#E5E7EB` |
| `--bg` | `#FFFFFF` |
| `--blockquote-border` | `4px solid #1D4ED8` |
| `--shadow` | `0 4px 14px rgba(17,24,39,.06)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#1D4ED8`、`#1E40AF`、`#15803D`、`#FBBF24`、`#F9FAFB`、`#111827`、`#4B5563`、`#E5E7EB`、`#FFFFFF`、`#FFF`、`#EFF6FF`、`#6B7280`、`#DBEAFE`、`#2563EB`、`#7C3AED`、`#0EA5E9`、`#16A34A`、`#0D9488`、`#F59E0B`、`#DC2626`、`#DB2777`、`#EDE9FE`、`#6D28D9`、`#DCFCE7`。

## 字体与信息层级

字体族：**Inter**、**Plus Jakarta Sans**、**ui-monospace**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.65; color: var(--ink); background: var(--bg).
- `h2`: font-family: var(--font-display); font-size: clamp(1.5rem,3.2vw,2rem); line-height: 1.3.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .45rem; background: #DBEAFE; color: var(--trust-deep); font-size: .85rem; font-weight: 700; padding: .35rem .95rem; border-radius: 999px.
- `h1`: font-family: var(--font-display); font-size: clamp(2.1rem,5vw,3.15rem); line-height: 1.16; letter-spacing: -.01em; margin: 1rem 0 .8rem.
- `.card h3`: font-size: 1.12rem; margin-bottom: .45rem.
- `.control-col h3`: font-size: .98rem.
- `.t-display`: font-family: var(--font-display); font-weight: 800; font-size: clamp(2.4rem,5vw,3.4rem); line-height: 1.12.
- `.t-h`: font-family: var(--font-display); font-weight: 700; font-size: 1.75rem; line-height: 1.25.
- `.t-body`: font-size: 1.06rem; max-width: 38em.
- `.t-label`: font-size: .84rem; font-weight: 700; letter-spacing: .12em; color: var(--muted).

## 形状、间距与深度

圆角令牌：`--radius: 14px`。
阴影/海拔令牌：`--shadow: 0 4px 14px rgba(17,24,39,.06)`。

- `.container`: max-width: 1080px; margin-inline: auto; padding-inline: 1.25rem.
- `section`: padding-block: 3.75rem.
- `.hero`: background: linear-gradient(180deg,#EFF6FF,#FFFFFF 60%); padding-block: 4.2rem 3.5rem; text-align: center.
- `.hero-inner`: max-width: 820px; margin-inline: auto.
- `.hero-cta`: display: flex; flex-wrap: wrap; justify-content: center; gap: .8rem; margin-top: 1.6rem.

## 组件规范

### 操作按钮

- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: .5rem; font: inherit; font-weight: 600; border-radius: 10px; border: 2px solid transparent; cursor: pointer; text-decoration: none; padding: .7rem 1.4rem; transition: transform .18s ease,background-color .18s ease,box-shadow .18s ease.
- `.btn:disabled`: background: #E5E7EB; color: #6B7280; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 1.6rem; box-shadow: var(--shadow); transition: transform .2s ease,box-shadow .2s ease.
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 16px 32px rgba(17,24,39,.1).
- `.card h3`: font-size: 1.12rem; margin-bottom: .45rem.
- `.card>p`: color: var(--muted); font-size: .95rem.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: .7rem.
- `.switch`: appearance: none; -webkit-appearance: none; width: 48px; height: 27px; border-radius: 999px; background: #D1D5DB; position: relative; cursor: pointer; transition: background .2s; flex: none.
- `.switch::after`: content: ""; position: absolute; left: 3px; top: 3px; width: 21px; height: 21px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.25); transition: transform .2s.
- `.switch:checked`: background: var(--growth).
- `.switch:checked::after`: transform: translateX(21px).
- `.switch-row label`: font-weight: 500; font-size: .95rem; margin: 0.
- `.field`: margin-bottom: 1rem.

### 导航

- `.site-header`: position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.94); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 1rem; height: 66px.
- `.nav>.btn`: margin-left: auto.
- `.nav>.btn`: margin-left: 0.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--trust); outline-offset: 2px; border-radius: 4px.
- `.nav-links a:hover`: color: var(--trust).
- `.btn-primary:hover`: background: var(--trust-deep); transform: translateY(-2px); box-shadow: 0 10px 20px rgba(29,78,216,.25).
- `.btn-primary:active`: transform: translateY(0) scale(.97).
- `.btn-secondary:hover`: background: #EFF6FF.
- `.btn-ghost:hover`: background: var(--testimonial-bg); color: var(--ink).
- `.btn:disabled`: background: #E5E7EB; color: #6B7280; cursor: not-allowed; transform: none; box-shadow: none.
- `.logos li:hover`: color: var(--ink); filter: none.
- `.card:hover`: transform: translateY(-4px); box-shadow: 0 16px 32px rgba(17,24,39,.1).
- `.switch:checked`: background: var(--growth).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:800px)`、`(prefers-reduced-motion:no-preference)`、`(min-width:760px)`、`(min-width:820px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--trust); outline-offset: 2px; border-radius: 4px.
- `.input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--trust); outline-offset: 1px; border-color: var(--trust).

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
