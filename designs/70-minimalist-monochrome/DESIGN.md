---
name: "70 极简黑白"
version: "alpha"
id: "70-minimalist-monochrome"
source: "style-templates/pages/70-minimalist-monochrome.html"
description: "极简黑白移动端风格：纯黑纯白、零圆角、无阴影，以排印与瞬时反色构建深度。"
colors:
  color-bg: "#FFFFFF"
  color-fg: "#000000"
  color-muted: "#F5F5F5"
  color-muted-fg: "#525252"
  color-border: "#000000"
  color-border-light: "#E5E5E5"
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: "44px"
    fontWeight: "900"
    lineHeight: ".92"
    letterSpacing: "-.03em"
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: "24px"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-.01em"
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: "24px"
    fontWeight: "700"
    lineHeight: "1.3"
    letterSpacing: "-.01em"
  body-md:
    fontFamily: "Source Serif 4"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".26em"
  button-md:
    fontFamily: "JetBrains Mono"
    fontSize: "14px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".1em"
rounded:
  radius: "0px"
  DEFAULT: "0px"
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

# 70 极简黑白 Design System

## 品牌与视觉方向

极简黑白移动端风格：纯黑纯白、零圆角、无阴影，以排印与瞬时反色构建深度。

视觉关键词来自页面本身：黑白 之外 皆冗余；风格档案；三条戒律；瞬时反色；4px 分界线；按钮与控件；订阅登记；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--color-bg` | `#FFFFFF` |
| `--color-fg` | `#000000` |
| `--color-muted` | `#F5F5F5` |
| `--color-muted-fg` | `#525252` |
| `--color-border` | `#000000` |
| `--color-border-light` | `#E5E5E5` |
| `--border-hairline` | `1px solid #E5E5E5` |
| `--border-thin` | `1px solid #000000` |
| `--border-thick` | `2px solid #000000` |
| `--border-heavy` | `4px solid #000000` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FFFFFF`、`#000000`、`#F5F5F5`、`#525252`、`#E5E5E5`、`#EBEBEB`、`#8C8C8C`、`#1A1A1A`、`#262626`、`#6E6E6E`、`#BFBFBF`、`#333`。

## 字体与信息层级

字体族：**Playfair Display**、**Source Serif 4**、**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: #EBEBEB; font-family: var(--font-body); color: var(--color-fg); font-size: 16px; line-height: 1.65; display: flex; justify-content: center; padding: 28px 12px; min-height: 100vh.
- `h2`: font-family: var(--font-display); font-weight: 700; font-size: 24px; letter-spacing: -.01em; margin-bottom: 4px.
- `.hero h1`: font-family: var(--font-display); font-weight: 900; font-size: clamp(56px,17vw,74px); line-height: .9; letter-spacing: -.04em; margin: 10px 0 18px.
- `.hero h1 em`: font-style: italic; font-weight: 500.
- `.card h3`: font-family: var(--font-display); font-weight: 700; font-size: 19px.
- `.t-display`: font-family: var(--font-display); font-weight: 900; font-size: 44px; line-height: .92; letter-spacing: -.03em.
- `.t-h`: font-family: var(--font-display); font-weight: 700; font-size: 25px.
- `.t-body`: font-size: 16px; color: #1A1A1A.
- `.t-label`: font-family: var(--font-mono); font-weight: 700; font-size: 12px; letter-spacing: .26em; text-transform: uppercase.

## 形状、间距与深度

圆角令牌：`--radius: 0px`。
阴影/海拔令牌：`--shadow: none`。

- `.phone`: width: 100%; max-width: 430px; background: var(--color-fg); border-radius: 44px!important; padding: 10px; flex: none; height: fit-content.
- `main`: display: flex; flex-direction: column.
- `section`: padding: 28px 18px; border-bottom: var(--border-thin).
- `.hero`: padding: 36px 18px 30px; border-bottom: var(--border-heavy).
- `.hero h1`: font-family: var(--font-display); font-weight: 900; font-size: clamp(56px,17vw,74px); line-height: .9; letter-spacing: -.04em; margin: 10px 0 18px.
- `.hero h1 em`: font-style: italic; font-weight: 500.
- `.hero .sub`: font-size: 16.5px; color: #1A1A1A; margin-bottom: 22px.
- `.hero-actions`: display: flex; flex-direction: column; gap: 12px.
- `.hero-rule`: display: flex; justify-content: space-between; align-items: center; margin-top: 26px; padding-top: 12px; border-top: var(--border-thin); font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: var(--color-muted-fg).

## 组件规范

### 操作按钮

- `.menu-word:active,a:active,button:active`: background: var(--color-fg)!important; color: var(--color-bg)!important.
- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font-mono); font-weight: 700; font-size: 14px; letter-spacing: .1em; text-transform: uppercase; min-height: 56px; padding: 14px 22px; border: var(--border-thick); background: var(--color-fg); color: var(--color-bg); cursor: pointer; text-decoration: none; box-shadow: var(--shadow).
- `.btn:active`: background: var(--color-bg)!important; color: var(--color-fg)!important.
- `.btn.secondary`: background: var(--color-bg); color: var(--color-fg).
- `.btn.secondary:active`: background: var(--color-fg)!important; color: var(--color-bg)!important.
- `.btn.ghost`: border: none; background: transparent; color: var(--color-fg); text-decoration: underline; text-underline-offset: 6px; text-decoration-thickness: 2px; min-height: 44px.
- `.btn:disabled`: background: var(--color-muted); color: #8C8C8C; border-color: var(--color-border-light); cursor: not-allowed.

### 卡片与容器

- `.card`: padding: 20px 16px; border-bottom: var(--border-thin); background: var(--color-bg).
- `.card:last-child`: border-bottom: none.
- `.card:active`: background: var(--color-fg); color: var(--color-bg).
- `.card:active p`: color: var(--color-bg).
- `.card:active svg`: color: var(--color-bg).
- `.card .row`: display: flex; align-items: center; gap: 12px; margin-bottom: 10px.
- `.card svg`: color: var(--color-fg); flex: none.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; justify-content: space-between; gap: 12px; border: var(--border-thin); padding: 14px; background: var(--color-bg).
- `.switch`: appearance: none; width: 60px; height: 30px; border: var(--border-thick); background: var(--color-bg); position: relative; cursor: pointer; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: var(--color-fg).
- `.switch:checked`: background: var(--color-fg).
- `.switch:checked::after`: transform: translateX(30px); background: var(--color-bg).
- `.switch-row label`: font-family: var(--font-mono); font-weight: 700; font-size: 13px; letter-spacing: .1em; text-transform: uppercase; cursor: pointer.
- `.field`: margin-bottom: 18px.

### 导航

- `header`: border-bottom: var(--border-heavy); background: var(--color-bg).
- `nav ul`: display: flex; list-style: none; border-top: var(--border-thin).
- `nav ul li`: flex: 1; border-right: var(--border-thin).
- `nav ul li:last-child`: border-right: none.
- `nav ul a`: display: block; text-align: center; font-family: var(--font-mono); font-size: 12px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; text-decoration: none; padding: 12px 4px.

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 2px solid var(--color-fg); outline-offset: 3px.
- `.menu-word:active,a:active,button:active`: background: var(--color-fg)!important; color: var(--color-bg)!important.
- `.btn:active`: background: var(--color-bg)!important; color: var(--color-fg)!important.
- `.btn.secondary:active`: background: var(--color-fg)!important; color: var(--color-bg)!important.
- `.btn:disabled`: background: var(--color-muted); color: #8C8C8C; border-color: var(--color-border-light); cursor: not-allowed.
- `.btn:disabled:active`: background: var(--color-muted)!important; color: #8C8C8C!important.
- `.card:active`: background: var(--color-fg); color: var(--color-bg).
- `.card:active p`: color: var(--color-bg).
- `.card:active svg`: color: var(--color-bg).
- `.switch:checked`: background: var(--color-fg).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 2px solid var(--color-fg); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border: 3px solid var(--color-fg); padding: 12px.

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
