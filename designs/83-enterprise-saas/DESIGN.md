---
name: "83 企业级 SaaS（移动端）"
version: "alpha"
id: "83-enterprise-saas"
source: "style-templates/pages/83-enterprise-saas.html"
description: "靛紫渐变 CTA、彩色卡片阴影、浮动标签输入与骨架屏的企业级 SaaS 移动端风格演示"
colors:
  bg: "#F8FAFC"
  surface: "#FFFFFF"
  text: "#0F172A"
  muted: "#64748B"
  primary: "#4F46E5"
  secondary: "#7C3AED"
  success: "#10B981"
  border: "#E2E8F0"
  on-primary: "#FFFFFF"
  on-surface: "#0F172A"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "32px"
    fontWeight: "800"
    lineHeight: "1.12"
    letterSpacing: "-.02em"
  headline-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "22px"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "22px"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.5"
  label-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".1em"
  button-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "15.5px"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius-card: "16px"
  radius-pill: "999px"
  radius-input: "8px"
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

# 83 企业级 SaaS（移动端） Design System

## 品牌与视觉方向

靛紫渐变 CTA、彩色卡片阴影、浮动标签输入与骨架屏的企业级 SaaS 移动端风格演示

视觉关键词来自页面本身：把整个后台 装进 一部手机；风格信息；风格特性；靛紫渐变操作层；彩色卡片阴影；骨架屏与浮动标签；按钮与控件；开通企业账号。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#F8FAFC` |
| `--surface` | `#FFFFFF` |
| `--text` | `#0F172A` |
| `--muted` | `#64748B` |
| `--primary` | `#4F46E5` |
| `--secondary` | `#7C3AED` |
| `--success` | `#10B981` |
| `--border` | `#E2E8F0` |
| `--shadow-card` | `0 4px 16px rgba(79,70,229,.08),0 1px 3px rgba(79,70,229,.06)` |
| `--grad` | `linear-gradient(135deg,var(--primary),var(--secondary))` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#F8FAFC`、`#FFFFFF`、`#0F172A`、`#64748B`、`#4F46E5`、`#7C3AED`、`#10B981`、`#E2E8F0`、`#EDF1F9`、`#E9ECF6`、`#DDE3EE`、`#FFF`、`#EEF2FF`、`#C7D2FE`、`#F5F7FF`、`#E0E7FF`、`#047857`、`#ECFDF5`、`#CBD5E1`、`#4338CA`、`#F1F5F9`、`#475569`、`#94A3B8`。

## 字体与信息层级

字体族：**Plus Jakarta Sans**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); background: linear-gradient(180deg,#EDF1F9,#E9ECF6); color: var(--text); font-size: 16px; line-height: 1.55.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 7px; font-weight: 700; font-size: 12px; letter-spacing: .06em; color: var(--primary); background: #EEF2FF; border: 1px solid #E0E7FF; border-radius: var(--radius-pill); padding: 7px 14px.
- `.hero h1`: font-weight: 800; font-size: 32px; line-height: 1.15; letter-spacing: -.02em; margin: 14px 0 10px.
- `.hero h1 .grad`: background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.kpi .label`: font-size: 13px; font-weight: 600; color: var(--muted).
- `h2`: font-weight: 700; font-size: 22px; letter-spacing: -.01em; line-height: 1.2; margin-bottom: 6px.
- `.fcard h3`: font-weight: 700; font-size: 16.5px; margin-bottom: 4px.
- `.t-display`: font-weight: 800; font-size: 32px; line-height: 1.12; letter-spacing: -.02em.
- `.t-h`: font-weight: 700; font-size: 24px; line-height: 1.2; letter-spacing: -.01em.
- `.t-body`: font-size: 16px; color: var(--muted); line-height: 1.5.

## 形状、间距与深度

圆角令牌：`--radius-card: 16px`；`--radius-pill: 999px`；`--radius-input: 8px`。
阴影/海拔令牌：`--shadow-card: 0 4px 16px rgba(79,70,229,.08),0 1px 3px rgba(79,70,229,.06)`。

- `.phone`: position: relative; width: 100%; max-width: 430px; background: var(--bg); border: 1px solid #DDE3EE; border-radius: 44px; box-shadow: 0 0 0 8px #FFFFFF,0 34px 70px rgba(51,65,155,.22); overflow: hidden; overflow: clip.
- `.hero`: padding: 28px 20px 26px; background: radial-gradient(480px 260px at 80% -10%,rgba(124,58,237,.10),transparent 60%),radial-gradient(420px 240px at 0% 0%,rgba(79,70,229,.08),transparent 60%).
- `.hero h1`: font-weight: 800; font-size: 32px; line-height: 1.15; letter-spacing: -.02em; margin: 14px 0 10px.
- `.hero h1 .grad`: background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.hero p`: color: var(--muted); font-size: 15.5px; max-width: 34ch.
- `.hero-actions`: display: grid; gap: 10px; margin: 20px 0 24px.
- `section`: padding: 24px 20px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 13px 24px; border-radius: var(--radius-pill); font-family: var(--font); font-weight: 600; font-size: 15.5px; border: 1.5px solid transparent; cursor: pointer; transition: transform .18s ease,box-shadow .2s,background .2s,color .2s.
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none.

### 卡片与容器

- `.card`: background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); box-shadow: var(--shadow-card); padding: 18px.

### 表单与选择控件

- `.switch-line`: display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); box-shadow: var(--shadow-card).
- `.switch`: appearance: none; -webkit-appearance: none; width: 52px; height: 31px; border-radius: var(--radius-pill); background: #CBD5E1; position: relative; cursor: pointer; transition: background .25s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 25px; height: 25px; border-radius: 50%; background: #fff; box-shadow: 0 2px 5px rgba(15,23,42,.25); transition: transform .25s ease.
- `.switch:checked`: background: var(--grad).
- `.switch:checked::after`: transform: translateX(21px).
- `.ffield input`: width: 100%; min-height: 58px; padding: 26px 14px 9px; background: var(--surface); border: 1.5px solid var(--border); border-radius: var(--radius-input); font: inherit; font-size: 15.5px; color: var(--text); transition: border-color .2s,box-shadow .2s.
- `.ffield input:focus-visible`: outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(79,70,229,.16).

### 导航

- `header.nav`: position: sticky; top: 0; z-index: 9; background: rgba(248,250,252,.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); padding: 10px 18px 12px.
- `.tabs`: display: flex.
- `.tabs a`: flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 7px 4px; min-height: 54px; font-size: 11px; font-weight: 600; color: var(--muted); border-radius: 12px; transition: transform .18s.
- `.tabs a:active`: transform: scale(.94).
- `.tabs .tic`: width: 34px; height: 26px; border-radius: 9px; display: grid; place-items: center.
- `.tabs a[aria-current]`: color: var(--primary); font-weight: 700.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 2px solid var(--primary); outline-offset: 2px; border-radius: 6px.
- `.nav-links a:hover`: color: var(--primary); background: #EEF2FF.
- `.nav-links a[aria-current]`: color: var(--primary); background: #EEF2FF.
- `.btn-primary:hover`: box-shadow: 0 10px 26px rgba(79,70,229,.42).
- `.btn-primary:active`: transform: scale(.97).
- `.btn-secondary:hover`: border-color: #C7D2FE; background: #F5F7FF.
- `.btn-secondary:active`: transform: scale(.97).
- `.btn-ghost:hover`: background: #EEF2FF.
- `.btn-ghost:active`: transform: scale(.97).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: none; transform: none.

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--primary); outline-offset: 2px; border-radius: 6px.
- `.ffield input:focus-visible`: outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(79,70,229,.16).
- `.tfield textarea:focus-visible`: outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(79,70,229,.16).

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
