---
name: "26 信任与权威"
version: "alpha"
id: "26-trust-authority"
source: "style-templates/pages/26-trust-authority.html"
description: "信任与权威落地页风格：认证徽章、安全指示、专家资历与可验证的案例指标，面向金融、医疗与企业级软件。"
colors:
  trust-color: "#1E40AF"
  trust-deep: "#1E3A8A"
  security-green: "#059669"
  metric-highlight: "#F59E0B"
  gold: "#B45309"
  silver: "#94A3B8"
  ink: "#0F172A"
  muted: "#475569"
  bg: "#F8FAFC"
  surface: "#FFFFFF"
  line: "#E2E8F0"
  primary: "#0F172A"
  on-primary: "#FFFFFF"
  on-surface: "#0F172A"
typography:
  display-lg:
    fontFamily: "Source Serif 4"
    fontSize: "46px"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-lg:
    fontFamily: "Source Serif 4"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.25"
  headline-md:
    fontFamily: "Source Serif 4"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.25"
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
    letterSpacing: ".12em"
  button-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "1"
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

# 26 信任与权威 Design System

## 品牌与视觉方向

信任与权威落地页风格：认证徽章、安全指示、专家资历与可验证的案例指标，面向金融、医疗与企业级软件。

视觉关键词来自页面本身：把每一份信任， 落在可核验的凭证上；权威感的三块基石；资质与奖项；安全与合规；案例与指标；按钮与控件；申请免费安全评估；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--trust-color` | `#1E40AF` |
| `--trust-deep` | `#1E3A8A` |
| `--security-green` | `#059669` |
| `--metric-highlight` | `#F59E0B` |
| `--gold` | `#B45309` |
| `--silver` | `#94A3B8` |
| `--ink` | `#0F172A` |
| `--muted` | `#475569` |
| `--bg` | `#F8FAFC` |
| `--surface` | `#FFFFFF` |
| `--line` | `#E2E8F0` |
| `--card-shadow` | `0 4px 6px rgba(0,0,0,.1)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#1E40AF`、`#1E3A8A`、`#059669`、`#F59E0B`、`#B45309`、`#94A3B8`、`#0F172A`、`#475569`、`#F8FAFC`、`#FFFFFF`、`#E2E8F0`、`#FFF`、`#BFDBFE`、`#EFF6FF`、`#ECFDF5`、`#A7F3D0`、`#CBD5E1`、`#DBEAFE`、`#93C5FD`。

## 字体与信息层级

字体族：**Source Serif 4**、**Inter**、**ui-monospace**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); font-size: 16px; line-height: 1.65; color: var(--ink); background: var(--bg).
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.25.
- `h2`: font-size: clamp(24px,3.4vw,32px); margin-bottom: 8px.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; letter-spacing: .1em; color: var(--trust-color); background: #fff; border: 1px solid #BFDBFE; padding: 6px 12px; border-radius: 999px.
- `.hero h1`: font-size: clamp(32px,4.8vw,50px); margin: 18px 0 14px.
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.t-display`: font-family: var(--font-display); font-weight: 700; font-size: clamp(32px,5vw,46px); line-height: 1.2.
- `.t-h`: font-family: var(--font-display); font-weight: 700; font-size: 28px.
- `.t-body`: font-size: 16px; max-width: 60ch.
- `.t-label`: font-size: 13px; font-weight: 600; letter-spacing: .12em; color: var(--trust-color); text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--radius: 12px`。
阴影/海拔令牌：`--card-shadow: 0 4px 6px rgba(0,0,0,.1)`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 20px.
- `.hero`: padding: 64px 0 48px; background: linear-gradient(180deg,#EFF6FF 0%,var(--bg) 70%).
- `.hero-grid`: display: grid; grid-template-columns: 1fr; gap: 36px; align-items: center.
- `.hero h1`: font-size: clamp(32px,4.8vw,50px); margin: 18px 0 14px.
- `.hero p`: color: var(--muted); font-size: 18px; max-width: 54ch.
- `.hero-cta`: display: flex; flex-wrap: wrap; gap: 12px; margin: 26px 0.
- `.hero-grid`: grid-template-columns: 1.05fr .95fr.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; font: 600 16px/1 var(--font-body); padding: 13px 22px; border-radius: 8px; border: 1.5px solid transparent; cursor: pointer; text-decoration: none; transition: background .2s,transform .2s,box-shadow .2s.
- `.btn:active`: transform: translateY(0) scale(.98).
- `.btn[disabled]`: opacity: .45; cursor: not-allowed; transform: none; box-shadow: none.

### 卡片与容器

- `.card`: background: var(--surface); border: 1px solid var(--line); border-top: 3px solid var(--trust-color); border-radius: var(--radius); padding: 26px; box-shadow: var(--card-shadow); transition: transform .2s,box-shadow .2s.
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 10px 24px rgba(15,23,42,.12).
- `.card .ic`: width: 46px; height: 46px; border-radius: 50%; display: grid; place-items: center; background: #EFF6FF; color: var(--trust-color); margin-bottom: 14px.
- `.card h3`: font-size: 19px; margin-bottom: 8px.
- `.card p`: color: var(--muted); font-size: 15px.
- `.card .proof`: margin-top: 14px; display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: var(--security-green); background: #ECFDF5; border: 1px solid #A7F3D0; padding: 4px 10px; border-radius: 999px.

### 表单与选择控件

- `.field`: margin-bottom: 18px.
- `.input,textarea`: width: 100%; font: 400 16px/1.5 var(--font-body); color: var(--ink); background: #fff; border: 1.5px solid #CBD5E1; border-radius: 8px; padding: 12px 14px; transition: border-color .2s,box-shadow .2s.
- `.input:hover,textarea:hover`: border-color: var(--silver).
- `.input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--trust-color); box-shadow: 0 0 0 4px rgba(30,64,175,.15).

### 导航

- `header`: position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.95); border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 20px; height: 68px.
- `.nav ul`: display: flex; gap: 20px; list-style: none; margin-left: auto.
- `.nav ul a`: color: var(--muted); text-decoration: none; font-weight: 500; font-size: 15px.
- `.nav ul a:hover`: color: var(--trust-color).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--trust-color); outline-offset: 2px; border-radius: 4px.
- `.nav ul a:hover`: color: var(--trust-color).
- `.btn-primary:hover`: background: var(--trust-deep); transform: translateY(-1px).
- `.btn-outline:hover`: border-color: var(--trust-color).
- `.btn-ghost:hover`: color: var(--trust-color); background: #EFF6FF.
- `.btn:active`: transform: translateY(0) scale(.98).
- `.cert:hover`: transform: translateY(-2px); box-shadow: var(--card-shadow); border-color: var(--gold).
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 10px 24px rgba(15,23,42,.12).
- `.tgl:checked+.tgl-lab .track`: background: var(--security-green).
- `.tgl:checked+.tgl-lab .track::after`: translate: 22px 0.

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:820px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--trust-color); outline-offset: 2px; border-radius: 4px.
- `.tgl:focus-visible+.tgl-lab .track`: outline: 3px solid var(--trust-color); outline-offset: 2px.
- `.input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--trust-color); box-shadow: 0 0 0 4px rgba(30,64,175,.15).

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
