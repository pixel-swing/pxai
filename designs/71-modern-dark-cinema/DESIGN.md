---
name: "71 现代深色（影院移动端）"
version: "alpha"
id: "71-modern-dark-cinema"
source: "style-templates/pages/71-modern-dark-cinema.html"
description: "现代深色影院移动端风格：深邃渐变底、环境光斑、毛玻璃导航与靛蓝辉光的沉浸式暗色体验。"
colors:
  bg-deep: "#020203"
  bg-base: "#050506"
  bg-elevated: "#0a0a0c"
  surface: "rgba(255,255,255,.05)"
  foreground: "#EDEDEF"
  foreground-muted: "#8A8F98"
  accent: "#5E6AD2"
  accent-glow: "rgba(94,106,210,.2)"
  border: "rgba(255,255,255,.08)"
  primary: "#5E6AD2"
  on-primary: "#FFFFFF"
  on-surface: "#EDEDEF"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "38px"
    fontWeight: "800"
    lineHeight: "1.05"
    letterSpacing: "-.03em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "22px"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.02em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "22px"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: "-.02em"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".2em"
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

# 71 现代深色（影院移动端） Design System

## 品牌与视觉方向

现代深色影院移动端风格：深邃渐变底、环境光斑、毛玻璃导航与靛蓝辉光的沉浸式暗色体验。

视觉关键词来自页面本身：灯光暗下， 故事亮起；风格档案；三重氛围装置；环境光斑；毛玻璃层；靛蓝辉光；按钮与控件；会员申请。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg-deep` | `#020203` |
| `--bg-base` | `#050506` |
| `--bg-elevated` | `#0a0a0c` |
| `--surface` | `rgba(255,255,255,.05)` |
| `--foreground` | `#EDEDEF` |
| `--foreground-muted` | `#8A8F98` |
| `--accent` | `#5E6AD2` |
| `--accent-glow` | `rgba(94,106,210,.2)` |
| `--border` | `rgba(255,255,255,.08)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#020203`、`#050506`、`#0A0A0C`、`#EDEDEF`、`#8A8F98`、`#5E6AD2`、`#0A0A0F`、`#8B5ED2`、`#3D6CD2`、`#6E7AE8`、`#4A55B8`、`#FFF`、`#6B77E0`、`#5A5E66`、`#A5AEFF`、`#1A1E4A`、`#8B93F8`、`#AEB4FF`、`#C9CCDA`、`#E0576B`、`#6C7078`、`#C9CCD4`。

## 字体与信息层级

字体族：**Inter**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg-deep); font-family: var(--font); color: var(--foreground); font-size: 16px; line-height: 1.65; display: flex; justify-content: center; padding: 28px 12px; min-height: 100vh.
- `body::before`: content: ""; position: fixed; inset: 0; pointer-events: none; background: radial-gradient(60% 40% at 50% 0%,rgba(94,106,210,.08),transparent 70%).
- `h2`: font-weight: 700; font-size: 22px; letter-spacing: -.02em; margin-bottom: 4px.
- `.hero h1`: font-weight: 800; font-size: clamp(34px,9.4vw,42px); line-height: 1.08; letter-spacing: -.03em; margin: 10px 0 14px.
- `.hero h1 .glowtext`: background: linear-gradient(120deg,#A5AEFF,#5E6AD2); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.card h3`: font-size: 17px; font-weight: 700; margin-bottom: 7px.
- `.t-display`: font-weight: 800; font-size: 38px; line-height: 1.05; letter-spacing: -.03em.
- `.t-h`: font-weight: 700; font-size: 23px; letter-spacing: -.01em.
- `.t-body`: font-size: 16px; color: #C9CCD4.
- `.t-label`: font-size: 12px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: #AEB4FF.

## 形状、间距与深度

圆角令牌：`--foreground: #EDEDEF`；`--foreground-muted: #8A8F98`；`--radius: 16px`。
阴影/海拔令牌：`--bg-elevated: #0a0a0c`。

- `.phone`: width: 100%; max-width: 430px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 48px; padding: 10px; flex: none; height: fit-content; position: relative; z-index: 1; box-shadow: 0 0 80px rgba(94,106,210,.16),0 30px 60px rgba(0,0,0,.6).
- `main`: display: flex; flex-direction: column.
- `section`: padding: 28px 18px; border-bottom: 1px solid var(--border).
- `.hero`: padding: 34px 18px 30px.
- `.hero h1`: font-weight: 800; font-size: clamp(34px,9.4vw,42px); line-height: 1.08; letter-spacing: -.03em; margin: 10px 0 14px.
- `.hero h1 .glowtext`: background: linear-gradient(120deg,#A5AEFF,#5E6AD2); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.hero .sub`: font-size: 15.5px; color: var(--foreground-muted); margin-bottom: 22px.
- `.hero-actions`: display: flex; flex-direction: column; gap: 12px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font); font-weight: 700; font-size: 15px; min-height: 52px; padding: 14px 22px; border: 1px solid transparent; border-radius: var(--radius); background: var(--accent); color: #FFF; cursor: pointer; text-decoration: none; position: relative; box-shadow: 0 0 24px var(--accent-glow),0 8px 20px rgba(0,0,0,.4); transition: transform .5s var(--easing),box-shadow .5s var(--easing),background .3s.
- `.btn:hover`: background: #6B77E0; box-shadow: 0 0 34px rgba(94,106,210,.32),0 10px 24px rgba(0,0,0,.45).
- `.btn:active`: transform: scale(.97).
- `.btn.secondary`: background: var(--surface); border-color: var(--border); color: var(--foreground); box-shadow: none; backdrop-filter: blur(8px).
- `.btn.secondary:hover`: background: rgba(255,255,255,.09).
- `.btn.ghost`: background: transparent; color: var(--accent); box-shadow: none.
- `.btn.ghost:hover`: background: rgba(94,106,210,.1).

### 卡片与容器

- `.card`: background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px; position: relative; overflow: hidden; backdrop-filter: blur(10px); transition: transform .5s var(--easing),border-color .5s var(--easing).
- `.card::before`: content: ""; position: absolute; top: 0; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent).
- `.card:hover`: transform: translateY(-3px); border-color: rgba(94,106,210,.45).
- `.card:active`: transform: scale(.97).
- `.card .ic`: width: 42px; height: 42px; border-radius: 12px; background: rgba(94,106,210,.14); border: 1px solid rgba(94,106,210,.3); display: grid; place-items: center; margin-bottom: 12px; box-shadow: 0 0 16px var(--accent-glow).
- `.card svg`: color: #AEB4FF.
- `.card h3`: font-size: 17px; font-weight: 700; margin-bottom: 7px.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; justify-content: space-between; gap: 12px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 16px; backdrop-filter: blur(8px).
- `.switch`: appearance: none; width: 54px; height: 30px; border-radius: 99px; background: rgba(255,255,255,.12); border: 1px solid var(--border); position: relative; cursor: pointer; flex: none; transition: background .4s var(--easing).
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; border-radius: 50%; background: #C9CCDA; transition: transform .4s var(--easing),background .4s.
- `.switch:checked`: background: var(--accent); box-shadow: 0 0 16px var(--accent-glow).
- `.switch:checked::after`: transform: translateX(24px); background: #FFF.
- `.switch-row label`: font-size: 14.5px; font-weight: 500; cursor: pointer.
- `.field`: margin-bottom: 16px.

### 导航

- `header`: position: sticky; top: 0; z-index: 5; background: rgba(10,10,15,.55); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid var(--border).
- `nav ul`: display: flex; gap: 6px; list-style: none; padding: 0 14px 12px; flex-wrap: wrap.
- `nav ul a`: font-size: 13px; font-weight: 500; color: var(--foreground-muted); text-decoration: none; padding: 7px 13px; border-radius: 99px; border: 1px solid transparent; transition: all .45s var(--easing).
- `nav ul a:hover`: color: var(--foreground); background: var(--surface); border-color: var(--border).

## 交互与动效

动效令牌：`--easing: cubic-bezier(.16,1,.3,1)`。

- `:focus-visible`: outline: 2px solid var(--accent); outline-offset: 3px.
- `nav ul a:hover`: color: var(--foreground); background: var(--surface); border-color: var(--border).
- `.btn:hover`: background: #6B77E0; box-shadow: 0 0 34px rgba(94,106,210,.32),0 10px 24px rgba(0,0,0,.45).
- `.btn:active`: transform: scale(.97).
- `.btn.secondary:hover`: background: rgba(255,255,255,.09).
- `.btn.ghost:hover`: background: rgba(94,106,210,.1).
- `.btn:disabled`: background: rgba(255,255,255,.04); color: #5A5E66; border-color: var(--border); box-shadow: none; cursor: not-allowed; transform: none.
- `.card:hover`: transform: translateY(-3px); border-color: rgba(94,106,210,.45).
- `.card:active`: transform: scale(.97).
- `.switch:checked`: background: var(--accent); box-shadow: 0 0 16px var(--accent-glow).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--accent); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow).

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
