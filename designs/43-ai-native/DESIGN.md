---
name: "43 AI 原生 UI"
version: "alpha"
id: "43-ai-native"
source: "style-templates/pages/43-ai-native.html"
description: "AI 原生 UI 风格演示：极简界面框架、会话式布局、流式文本、三点打字指示与上下文卡片，为智能助手而生。"
colors:
  ai-accent: "#6366F1"
  ai-accent-deep: "#4F46E5"
  success: "#10B981"
  bg: "#F5F5F5"
  surface: "#FFFFFF"
  user-bubble-bg: "#E0E7FF"
  ai-bubble-bg: "#F9FAFB"
  ink: "#1F2937"
  ink-soft: "#4B5563"
  line: "#E5E7EB"
  background: "#F5F5F5"
  on-background: "#1F2937"
  primary: "#4F46E5"
  on-primary: "#FFFFFF"
  secondary: "#10B981"
  on-secondary: "#FFFFFF"
  tertiary: "#8B5CF6"
  on-tertiary: "#FFFFFF"
  on-surface: "#1F2937"
typography:
  display-lg:
    fontFamily: "Sora"
    fontSize: "50px"
    fontWeight: "700"
    lineHeight: "1.15"
    letterSpacing: "-.01em"
  headline-lg:
    fontFamily: "Sora"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Sora"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "13.5px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Inter"
    fontSize: "15.5px"
    fontWeight: "600"
    lineHeight: "1.4"
rounded:
  radius: "16px"
  DEFAULT: "16px"
spacing:
  message-gap: "16px"
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

# 43 AI 原生 UI Design System

## 品牌与视觉方向

AI 原生 UI 风格演示：极简界面框架、会话式布局、流式文本、三点打字指示与上下文卡片，为智能助手而生。

视觉关键词来自页面本身：把整个界面 交给 一场对话；核心视觉指纹；会话式布局；流式文本；上下文卡片；按钮与控件；申请早期体验；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--ai-accent` | `#6366F1` |
| `--ai-accent-deep` | `#4F46E5` |
| `--success` | `#10B981` |
| `--bg` | `#F5F5F5` |
| `--surface` | `#FFFFFF` |
| `--user-bubble-bg` | `#E0E7FF` |
| `--ai-bubble-bg` | `#F9FAFB` |
| `--ink` | `#1F2937` |
| `--ink-soft` | `#4B5563` |
| `--line` | `#E5E7EB` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#6366F1`、`#4F46E5`、`#10B981`、`#F5F5F5`、`#FFFFFF`、`#E0E7FF`、`#F9FAFB`、`#1F2937`、`#4B5563`、`#E5E7EB`、`#8B5CF6`、`#FFF`、`#4338CA`、`#EEF2FF`、`#9CA3AF`、`#312E81`、`#3730A3`、`#D1D5DB`、`#D1FAE5`、`#065F46`、`#6B7280`。

## 字体与信息层级

字体族：**Sora**、**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--ink); font-family: var(--font-body); font-size: 16px; line-height: 1.6; overflow-x: hidden.
- `h1,h2,h3`: font-family: var(--font-display); color: var(--ink).
- `h2`: font-size: clamp(23px,3.4vw,30px); margin-bottom: 8px.
- `.eyebrow`: display: inline-flex; align-items: center; gap: 8px; background: #EEF2FF; color: var(--ai-accent-deep); font-weight: 600; font-size: 13.5px; padding: 7px 14px; border-radius: 999px; margin-bottom: 18px.
- `.eyebrow .pulse`: width: 8px; height: 8px; border-radius: 50%; background: var(--success); animation: pulse 2s ease-in-out infinite.
- `.hero h1`: font-size: clamp(32px,5vw,48px); line-height: 1.2; margin-bottom: 16px; letter-spacing: -.01em.
- `.hero h1 .grad`: background: linear-gradient(90deg,var(--ai-accent),#8B5CF6); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.card h3`: font-size: 17.5px; margin-bottom: 8px.
- `.t-display`: font-family: var(--font-display); font-weight: 700; font-size: clamp(34px,5.5vw,50px); line-height: 1.15; letter-spacing: -.01em.
- `.t-h`: font-family: var(--font-display); font-weight: 600; font-size: 25px.

## 形状、间距与深度

圆角令牌：`--radius: 16px`。
空间令牌：`--message-gap: 16px`。

- `.container`: max-width: 1060px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 60px 0.
- `.hero`: padding: 72px 0 60px.
- `.hero-grid`: display: grid; gap: 40px; align-items: center.
- `.hero-grid`: grid-template-columns: 1fr 1fr.
- `.hero h1`: font-size: clamp(32px,5vw,48px); line-height: 1.2; margin-bottom: 16px; letter-spacing: -.01em.
- `.hero h1 .grad`: background: linear-gradient(90deg,var(--ai-accent),#8B5CF6); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.hero p.lead`: color: var(--ink-soft); max-width: 48ch; margin-bottom: 26px.
- `.hero-actions`: display: flex; gap: 12px; flex-wrap: wrap.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-weight: 600; font-size: 15.5px; padding: 11px 22px; border-radius: 12px; border: 1px solid transparent; cursor: pointer; text-decoration: none; transition: background .2s,box-shadow .2s,transform .2s.
- `.btn:disabled`: background: #E5E7EB; color: #9CA3AF; box-shadow: none; cursor: not-allowed; transform: none.

### 卡片与容器

- `.card`: background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px 22px; transition: box-shadow .25s,transform .25s.
- `.card:hover`: box-shadow: 0 10px 30px rgba(17,24,39,.08); transform: translateY(-3px).
- `.card .icon`: width: 44px; height: 44px; border-radius: 12px; background: #EEF2FF; color: var(--ai-accent-deep); display: grid; place-items: center; margin-bottom: 14px.
- `.card h3`: font-size: 17.5px; margin-bottom: 8px.
- `.card p`: font-size: 15px; color: var(--ink-soft).
- `.panel`: background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 28px 24px; display: grid; gap: 22px.

### 表单与选择控件

- `.chat-input`: display: flex; gap: 10px; padding: 12px; border-top: 1px solid var(--line); background: var(--surface).
- `.chat-input input`: flex: 1; height: var(--input-height); border: 1px solid var(--line); border-radius: 12px; padding: 0 14px; font-size: 15px; font-family: var(--font-body); color: var(--ink).
- `.chat-input input:focus-visible`: outline: none; border-color: var(--ai-accent); box-shadow: 0 0 0 3px rgba(99,102,241,.25).
- `.switch`: display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-weight: 500; font-size: 15px.
- `.switch input`: position: absolute; opacity: 0; width: 50px; height: 28px; cursor: pointer.
- `.switch input:checked+.slider`: background: var(--ai-accent-deep).
- `.switch input:checked+.slider::after`: transform: translateX(22px).

### 导航

- `header`: background: rgba(255,255,255,.85); backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 50; border-bottom: 1px solid var(--line).
- `.nav`: display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 13px 20px; max-width: 1060px; margin: 0 auto.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--ai-accent); outline-offset: 2px; border-radius: 6px.
- `.nav-links a:hover`: color: var(--ai-accent-deep).
- `.btn-primary:hover`: background: #4338CA; transform: translateY(-1px).
- `.btn-primary:active`: transform: translateY(0); box-shadow: 0 2px 6px rgba(79,70,229,.3).
- `.btn-secondary:hover`: border-color: var(--ai-accent); color: var(--ai-accent-deep).
- `.btn-secondary:active`: background: #EEF2FF.
- `.btn-ghost:hover`: background: #EEF2FF.
- `.btn-ghost:active`: background: #E0E7FF.
- `.btn:disabled`: background: #E5E7EB; color: #9CA3AF; box-shadow: none; cursor: not-allowed; transform: none.
- `.chat-input input:focus-visible`: outline: none; border-color: var(--ai-accent); box-shadow: 0 0 0 3px rgba(99,102,241,.25).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:900px)`、`(min-width:760px)`、`(prefers-reduced-motion: reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--ai-accent); outline-offset: 2px; border-radius: 6px.
- `.chat-input input:focus-visible`: outline: none; border-color: var(--ai-accent); box-shadow: 0 0 0 3px rgba(99,102,241,.25).
- `.switch input:focus-visible+.slider`: outline: 3px solid var(--ai-accent); outline-offset: 2px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--ai-accent); box-shadow: 0 0 0 3px rgba(99,102,241,.25).

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
