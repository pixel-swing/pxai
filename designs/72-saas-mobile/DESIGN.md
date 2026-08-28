---
name: "72 SaaS 移动端（高科技精品）"
version: "alpha"
id: "72-saas-mobile"
source: "style-templates/pages/72-saas-mobile.html"
description: "SaaS 移动端高科技精品风格：暖白画布、电光蓝渐变按钮、脉冲徽章与弹簧动效的商务级移动界面。"
colors:
  bg: "#FAFAFA"
  fg: "#0F172A"
  muted: "#F1F5F9"
  muted-fg: "#5B6472"
  accent: "#0052FF"
  accent-sec: "#4D7CFF"
  card: "#FFFFFF"
  border: "#E2E8F0"
  primary: "#0052FF"
  on-primary: "#FFFFFF"
  surface: "#FAFAFA"
  on-surface: "#0F172A"
typography:
  display-lg:
    fontFamily: "Calistoga"
    fontSize: "36px"
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Calistoga"
    fontSize: "23px"
    fontWeight: "400"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Calistoga"
    fontSize: "23px"
    fontWeight: "400"
    lineHeight: "1.3"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Inter"
    fontSize: "15px"
    fontWeight: "700"
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

# 72 SaaS 移动端（高科技精品） Design System

## 品牌与视觉方向

SaaS 移动端高科技精品风格：暖白画布、电光蓝渐变按钮、脉冲徽章与弹簧动效的商务级移动界面。

视觉关键词来自页面本身：把整个团队的指标， 装进 一只口袋；风格档案；精品三件套；实时指标流；弹簧动效；企业级安全；按钮与控件；开通试用。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#FAFAFA` |
| `--fg` | `#0F172A` |
| `--muted` | `#F1F5F9` |
| `--muted-fg` | `#5B6472` |
| `--accent` | `#0052FF` |
| `--accent-sec` | `#4D7CFF` |
| `--card` | `#FFFFFF` |
| `--border` | `#E2E8F0` |
| `--shadow` | `0 4px 10px rgba(15,23,42,.08),0 1px 3px rgba(15,23,42,.06)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FAFAFA`、`#0F172A`、`#F1F5F9`、`#5B6472`、`#0052FF`、`#4D7CFF`、`#FFFFFF`、`#E2E8F0`、`#E8EDF4`、`#0041CC`、`#FFF`、`#C6D2E4`、`#96A0AE`、`#0A8754`、`#D7DEE9`、`#334155`、`#8C96A5`。

## 字体与信息层级

字体族：**Calistoga**、**Inter**、**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: #E8EDF4; font-family: var(--font-body); color: var(--fg); font-size: 16px; line-height: 1.65; display: flex; justify-content: center; padding: 28px 12px; min-height: 100vh.
- `h2`: font-family: var(--font-display); font-weight: 400; font-size: 23px; letter-spacing: -.01em; margin-bottom: 4px.
- `.hero h1`: font-family: var(--font-display); font-weight: 400; font-size: clamp(34px,9.4vw,42px); line-height: 1.12; letter-spacing: -.01em; margin-bottom: 14px.
- `.hero h1 .blue`: color: var(--accent).
- `.card h3`: font-size: 17px; font-weight: 700; margin-bottom: 7px.
- `.t-display`: font-family: var(--font-display); font-size: 36px; line-height: 1.1.
- `.t-h`: font-weight: 700; font-size: 22px; letter-spacing: -.01em.
- `.t-body`: font-size: 16px; color: #334155.
- `.t-label`: font-family: var(--font-mono); font-weight: 600; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #0041CC.

## 形状、间距与深度

圆角令牌：`--radius: 16px`。
阴影/海拔令牌：`--shadow: 0 4px 10px rgba(15,23,42,.08),0 1px 3px rgba(15,23,42,.06)`。

- `.phone`: width: 100%; max-width: 430px; background: #0F172A; border-radius: 48px; padding: 10px; flex: none; height: fit-content; box-shadow: 0 40px 80px rgba(15,23,42,.35).
- `main>section`: animation: rise .7s var(--spring) both.
- `main>section:nth-child(1)`: animation-delay: .05s.
- `main>section:nth-child(2)`: animation-delay: .14s.
- `main>section:nth-child(3)`: animation-delay: .23s.
- `main>section:nth-child(4)`: animation-delay: .32s.
- `main>section:nth-child(5)`: animation-delay: .41s.
- `main>section:nth-child(6)`: animation-delay: .5s.
- `main>section:nth-child(7)`: animation-delay: .59s.
- `main`: display: flex; flex-direction: column.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font-body); font-weight: 700; font-size: 15px; min-height: 56px; padding: 15px 24px; border: none; border-radius: var(--radius); background: linear-gradient(135deg,var(--accent),var(--accent-sec)); color: #FFF; cursor: pointer; text-decoration: none; box-shadow: 0 8px 20px rgba(0,82,255,.28),0 2px 6px rgba(0,82,255,.2); transition: transform .35s var(--spring),box-shadow .35s var(--spring).
- `.btn:hover`: transform: translateY(-2px); box-shadow: 0 12px 26px rgba(0,82,255,.34).
- `.btn:active`: transform: scale(.96).
- `.btn.secondary`: background: var(--card); color: var(--fg); border: 1px solid var(--border); box-shadow: var(--shadow).
- `.btn.secondary:hover`: border-color: #C6D2E4.
- `.btn.ghost`: background: transparent; color: var(--accent); box-shadow: none.
- `.btn.ghost:hover`: background: rgba(0,82,255,.07); transform: none.

### 卡片与容器

- `.card`: background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); padding: 20px; transition: transform .35s var(--spring),box-shadow .35s var(--spring).
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 10px 24px rgba(15,23,42,.1).
- `.card:active`: transform: scale(.97).
- `.card .ic`: width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg,rgba(0,82,255,.1),rgba(77,124,255,.14)); border: 1px solid rgba(0,82,255,.18); display: grid; place-items: center; margin-bottom: 12px.
- `.card svg`: color: var(--accent).
- `.card h3`: font-size: 17px; font-weight: 700; margin-bottom: 7px.
- `.card p`: font-size: 14.5px; color: var(--muted-fg).

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; justify-content: space-between; gap: 12px; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); padding: 14px 16px.
- `.switch`: appearance: none; width: 54px; height: 30px; border-radius: 99px; background: #D7DEE9; position: relative; cursor: pointer; flex: none; transition: background .35s var(--spring).
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #FFF; box-shadow: 0 2px 5px rgba(15,23,42,.25); transition: transform .35s var(--spring).
- `.switch:checked`: background: linear-gradient(135deg,var(--accent),var(--accent-sec)).
- `.switch:checked::after`: transform: translateX(24px).
- `.switch-row label`: font-size: 14.5px; font-weight: 600; cursor: pointer.
- `.field`: margin-bottom: 16px.

### 导航

- `header`: position: sticky; top: 0; z-index: 5; background: rgba(250,250,250,.72); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid var(--border).
- `nav ul`: display: flex; gap: 6px; list-style: none; padding: 0 14px 12px; flex-wrap: wrap.
- `nav ul a`: font-size: 13px; font-weight: 600; color: var(--muted-fg); text-decoration: none; padding: 7px 13px; border-radius: 99px; transition: all .3s var(--spring).
- `nav ul a:hover`: color: var(--accent); background: rgba(0,82,255,.07).

## 交互与动效

动效令牌：`--spring: cubic-bezier(.34,1.56,.64,1)`。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px.
- `nav ul a:hover`: color: var(--accent); background: rgba(0,82,255,.07).
- `.btn:hover`: transform: translateY(-2px); box-shadow: 0 12px 26px rgba(0,82,255,.34).
- `.btn:active`: transform: scale(.96).
- `.btn.secondary:hover`: border-color: #C6D2E4.
- `.btn.ghost:hover`: background: rgba(0,82,255,.07); transform: none.
- `.btn:disabled`: background: var(--muted); color: #96A0AE; box-shadow: none; cursor: not-allowed; transform: none.
- `.card:hover`: transform: translateY(-3px); box-shadow: 0 10px 24px rgba(15,23,42,.1).
- `.card:active`: transform: scale(.97).
- `.switch:checked`: background: linear-gradient(135deg,var(--accent),var(--accent-sec)).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--accent); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px rgba(0,82,255,.14).

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
