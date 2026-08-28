---
name: "85 新拟态（移动端）"
version: "alpha"
id: "85-neumorphism-mobile"
source: "style-templates/pages/85-neumorphism-mobile.html"
description: "单一陶瓷底色、双向柔光阴影、凸起与凹陷双态的新拟态（Soft UI）移动端风格演示"
colors:
  bg: "#E0E5EC"
  text: "#3D4852"
  muted: "#5D6673"
  accent-deep: "#5A50E8"
  inset-bg: "#D1D9E6"
  shadow-light: "rgba(255,255,255,.85)"
  shadow-dark: "rgba(163,177,198,.7)"
  primary: "#5A50E8"
  on-primary: "#FFFFFF"
  surface: "#E0E5EC"
  on-surface: "#3D4852"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "32px"
    fontWeight: "800"
    lineHeight: "1.15"
    letterSpacing: "-.5px"
  headline-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "24px"
    fontWeight: "800"
    lineHeight: "1.2"
    letterSpacing: "-.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "24px"
    fontWeight: "800"
    lineHeight: "1.3"
    letterSpacing: "-.5px"
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: ".14em"
  button-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "15.5px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
  radius-card: "32px"
  radius-button: "16px"
  radius-pill: "999px"
  DEFAULT: "32px"
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

# 85 新拟态（移动端） Design System

## 品牌与视觉方向

单一陶瓷底色、双向柔光阴影、凸起与凹陷双态的新拟态（Soft UI）移动端风格演示

视觉关键词来自页面本身：整块界面，从同一片 陶瓷面板上长出来；恒温旋钮；风格信息；风格特性；双向柔光阴影；凸起 ⇄ 凹陷双态；点到为止的紫罗兰；按钮与控件。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#E0E5EC` |
| `--text` | `#3D4852` |
| `--muted` | `#5D6673` |
| `--accent-deep` | `#5A50E8` |
| `--inset-bg` | `#D1D9E6` |
| `--shadow-light` | `rgba(255,255,255,.85)` |
| `--shadow-dark` | `rgba(163,177,198,.7)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#E0E5EC`、`#3D4852`、`#5D6673`、`#6B7280`、`#6C63FF`、`#5A50E8`、`#D1D9E6`、`#FFFFFF`、`#7C8694`、`#B9C3D2`。

## 字体与信息层级

字体族：**Plus Jakarta Sans**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font); background: var(--bg); color: var(--text); font-size: 16px; line-height: 1.6.
- `.eyebrow`: display: inline-block; font-weight: 700; font-size: 12px; letter-spacing: .12em; color: var(--accent-deep); padding: 8px 16px; border-radius: var(--radius-pill); box-shadow: var(--in).
- `.hero h1`: font-weight: 800; font-size: 32px; line-height: 1.16; letter-spacing: -.5px; margin: 16px 0 10px.
- `.dial-meta h3`: font-weight: 700; font-size: 17px; margin-bottom: 6px.
- `h2`: font-weight: 800; font-size: 24px; letter-spacing: -.5px; margin-bottom: 6px.
- `.fcard h3`: font-weight: 700; font-size: 16.5px; margin-bottom: 4px.
- `.t-display`: font-weight: 800; font-size: 32px; line-height: 1.15; letter-spacing: -.5px.
- `.t-h`: font-weight: 700; font-size: 24px; letter-spacing: -.3px.
- `.t-body`: font-size: 16px; color: var(--muted).
- `.t-label`: font-weight: 600; font-size: 12px; letter-spacing: .14em; color: var(--muted); text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--radius-card: 32px`；`--radius-button: 16px`；`--radius-pill: 999px`。
阴影/海拔令牌：`--shadow-light: rgba(255,255,255,.85)`；`--shadow-dark: rgba(163,177,198,.7)`。

- `.phone`: position: relative; width: 100%; max-width: 430px; background: var(--bg); border: 1px solid rgba(255,255,255,.7); border-radius: 48px; box-shadow: 20px 20px 46px var(--shadow-dark),-20px -20px 46px var(--shadow-light); overflow: hidden; overflow: clip.
- `.hero`: padding: 28px 20px 26px.
- `.hero h1`: font-weight: 800; font-size: 32px; line-height: 1.16; letter-spacing: -.5px; margin: 16px 0 10px.
- `.hero p`: color: var(--muted); font-size: 15.5px; max-width: 33ch.
- `.hero-actions`: display: flex; gap: 14px; margin: 22px 0 26px; flex-wrap: wrap.
- `section`: padding: 24px 20px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 56px; padding: 14px 24px; border-radius: var(--radius-button); font-family: var(--font); font-weight: 700; font-size: 15.5px; border: none; cursor: pointer; background: var(--bg); color: var(--text); box-shadow: var(--out); transition: box-shadow .25s var(--ease),transform .25s var(--ease),opacity .2s.
- `.btn:hover`: box-shadow: 8px 8px 16px var(--shadow-dark),-8px -8px 16px var(--shadow-light).
- `.btn:active`: transform: scale(.97); box-shadow: var(--in).
- `.btn:disabled`: opacity: .5; cursor: not-allowed; box-shadow: 2px 2px 5px var(--shadow-dark),-2px -2px 5px var(--shadow-light); transform: none.

### 卡片与容器

- `.card`: background: var(--bg); border-radius: var(--radius-card); box-shadow: var(--out); padding: 24px.

### 表单与选择控件

- `.switch-line`: display: flex; align-items: center; gap: 14px; padding: 16px 18px; border-radius: 20px; box-shadow: var(--out); margin-top: 2px.
- `.switch`: appearance: none; -webkit-appearance: none; width: 58px; height: 33px; border-radius: var(--radius-pill); background: var(--inset-bg); box-shadow: var(--in); position: relative; cursor: pointer; transition: background .25s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 3.5px; left: 4px; width: 26px; height: 26px; border-radius: 50%; background: var(--bg); box-shadow: 3px 3px 6px var(--shadow-dark),-2px -2px 5px var(--shadow-light); transition: transform .25s var(--ease),background .25s.
- `.switch:checked::after`: transform: translateX(24px); background: linear-gradient(145deg,var(--accent),var(--accent-deep)).
- `form .field`: margin-bottom: 18px.
- `input[type=text],textarea`: width: 100%; min-height: 50px; background: var(--bg); border: 1.5px solid transparent; border-radius: var(--radius-button); box-shadow: var(--in); color: var(--text); font-family: var(--font); font-size: 15.5px; padding: 13px 16px; transition: border-color .25s var(--ease),box-shadow .25s.
- `textarea`: min-height: 96px; resize: vertical.

### 导航

- `header.nav`: position: sticky; top: 0; z-index: 9; background: rgba(224,229,236,.9); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); padding: 10px 18px 14px.
- `.tabs`: display: flex; gap: 8px; border-radius: 24px; box-shadow: var(--out); padding: 8px; background: var(--bg).
- `.tabs a`: flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 8px 4px; min-height: 52px; font-size: 11px; font-weight: 600; color: var(--muted); border-radius: 16px; transition: box-shadow .25s var(--ease),color .25s.
- `.tabs a:active`: transform: scale(.96).
- `.tabs a[aria-current]`: color: var(--accent); box-shadow: var(--in); font-weight: 700.

## 交互与动效

动效令牌：`--ease: cubic-bezier(.4,0,.2,1)`。

- `:focus-visible`: outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `.nav-links a:hover`: color: var(--text); box-shadow: var(--out-sm).
- `.nav-links a[aria-current]`: color: var(--accent); box-shadow: var(--in); font-weight: 700.
- `.btn:hover`: box-shadow: 8px 8px 16px var(--shadow-dark),-8px -8px 16px var(--shadow-light).
- `.btn:active`: transform: scale(.97); box-shadow: var(--in).
- `.btn-primary:active`: box-shadow: inset 4px 4px 10px rgba(40,32,140,.55),inset -4px -4px 10px rgba(255,255,255,.25); transform: scale(.97).
- `.btn-ghost:hover`: box-shadow: var(--in).
- `.btn-ghost:active`: transform: scale(.97).
- `.btn:disabled`: opacity: .5; cursor: not-allowed; box-shadow: 2px 2px 5px var(--shadow-dark),-2px -2px 5px var(--shadow-light); transform: none.
- `.fcard:hover`: box-shadow: 9px 9px 18px var(--shadow-dark),-9px -9px 18px var(--shadow-light).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 8px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--accent); box-shadow: var(--in),0 0 0 3px rgba(108,99,255,.18).

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
