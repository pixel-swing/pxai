---
name: "69 包豪斯"
version: "alpha"
id: "69-bauhaus"
source: "style-templates/pages/69-bauhaus.html"
description: "包豪斯移动端风格：三原色色块、严格几何形、硬偏移阴影与机械按压反馈。"
colors:
  color-red: "#D02020"
  color-blue: "#1040C0"
  color-yellow: "#F0C020"
  color-bg: "#F0F0F0"
  color-fg: "#121212"
  color-muted: "#E0E0E0"
  background: "#F0F0F0"
  on-background: "#121212"
  primary: "#D02020"
  on-primary: "#FFFFFF"
  secondary: "#1040C0"
  on-secondary: "#FFFFFF"
  tertiary: "#F0C020"
  on-tertiary: "#121212"
  surface: "#F0F0F0"
  on-surface: "#121212"
typography:
  display-lg:
    fontFamily: "Outfit"
    fontSize: "40px"
    fontWeight: "900"
    lineHeight: ".95"
    letterSpacing: "-.03em"
  headline-lg:
    fontFamily: "Outfit"
    fontSize: "22px"
    fontWeight: "900"
    lineHeight: "1.2"
    letterSpacing: "-.02em"
  headline-md:
    fontFamily: "Outfit"
    fontSize: "22px"
    fontWeight: "900"
    lineHeight: "1.3"
    letterSpacing: "-.02em"
  body-md:
    fontFamily: "inherit"
    fontSize: "16px"
    fontWeight: "500"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "inherit"
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".16em"
  button-md:
    fontFamily: "Outfit"
    fontSize: "15px"
    fontWeight: "900"
    lineHeight: "1.4"
    letterSpacing: ".02em"
rounded:
  radius-block: "0px"
  radius-pill: "9999px"
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

# 69 包豪斯 Design System

## 品牌与视觉方向

包豪斯移动端风格：三原色色块、严格几何形、硬偏移阴影与机械按压反馈。

视觉关键词来自页面本身：形式 追随 功能；风格档案；三个车间；几何词汇；硬阴影结构；原色配块；按钮与控件；入学登记。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--color-red` | `#D02020` |
| `--color-blue` | `#1040C0` |
| `--color-yellow` | `#F0C020` |
| `--color-bg` | `#F0F0F0` |
| `--color-fg` | `#121212` |
| `--color-muted` | `#E0E0E0` |
| `--shadow-hard` | `4px 4px 0px 0px #121212` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#D02020`、`#1040C0`、`#F0C020`、`#F0F0F0`、`#121212`、`#E0E0E0`、`#1A1A1C`、`#FFF`、`#454545`、`#666`、`#333`、`#5A5A5A`、`#B9B9B9`、`#B5B5B5`。

## 字体与信息层级

字体族：**Outfit**、**inherit**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: #1A1A1C; font-family: var(--font-display); color: var(--color-fg); font-size: 16px; line-height: 1.6; display: flex; justify-content: center; padding: 28px 12px; min-height: 100vh.
- `h2`: font-weight: 900; font-size: 22px; text-transform: uppercase; letter-spacing: -.02em; margin-bottom: 6px.
- `.eyebrow`: display: inline-block; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: .14em; background: var(--color-fg); color: var(--color-bg); padding: 6px 12px; margin-bottom: 16px.
- `.hero h1`: font-weight: var(--font-weight-hero); font-size: clamp(40px,11vw,52px); line-height: .95; text-transform: uppercase; letter-spacing: -.03em; margin-bottom: 16px.
- `.hero h1 .r`: color: var(--color-red).
- `.hero h1 .b`: color: var(--color-blue).
- `.card h3`: font-weight: 900; font-size: 17px; text-transform: uppercase.
- `.t-display`: font-weight: 900; font-size: 40px; line-height: .95; text-transform: uppercase; letter-spacing: -.03em.
- `.t-h`: font-weight: 900; font-size: 24px; text-transform: uppercase.
- `.t-body`: font-size: 16px; font-weight: 500.

## 形状、间距与深度

圆角令牌：`--radius-block: 0px`；`--radius-pill: 9999px`。
空间令牌：`--border-width: 2px`。
阴影/海拔令牌：`--shadow-hard: 4px 4px 0px 0px #121212`。

- `.phone`: width: 100%; max-width: 430px; background: var(--color-fg); border-radius: 44px; padding: 10px; box-shadow: 14px 14px 0 var(--color-red); flex: none; height: fit-content.
- `main`: display: flex; flex-direction: column.
- `section`: padding: 26px 18px; border-bottom: var(--border-width) solid var(--color-fg).
- `.hero`: padding: 30px 18px 34px.
- `.hero h1`: font-weight: var(--font-weight-hero); font-size: clamp(40px,11vw,52px); line-height: .95; text-transform: uppercase; letter-spacing: -.03em; margin-bottom: 16px.
- `.hero h1 .r`: color: var(--color-red).
- `.hero h1 .b`: color: var(--color-blue).
- `.hero .sub`: font-size: 16px; font-weight: 500; color: #333; margin-bottom: 20px; max-width: 30em.
- `.hero-actions`: display: flex; flex-direction: column; gap: 12px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font-display); font-weight: 900; font-size: 15px; text-transform: uppercase; letter-spacing: .02em; min-height: 48px; padding: 12px 22px; border: var(--border-width) solid var(--color-fg); border-radius: var(--radius-pill); background: var(--color-red); color: #FFF; cursor: pointer; text-decoration: none; box-shadow: var(--shadow-hard).
- `.btn:active`: transform: translate(2px,2px); box-shadow: none.
- `.btn.blue`: background: var(--color-blue).
- `.btn.secondary`: background: var(--color-yellow); color: var(--color-fg).
- `.btn.ghost`: background: #FFF; color: var(--color-fg).
- `.btn:disabled`: background: var(--color-muted); color: #666; box-shadow: none; cursor: not-allowed; border-color: #666.
- `.btn:disabled:active`: transform: none.

### 卡片与容器

- `.card`: background: #FFF; border: var(--border-width) solid var(--color-fg); border-radius: var(--radius-block); box-shadow: var(--shadow-hard).
- `.card:active`: transform: translate(2px,2px); box-shadow: none.
- `.card .head`: display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-bottom: var(--border-width) solid var(--color-fg).
- `.card:nth-child(1) .head`: background: var(--color-red); color: #FFF.
- `.card:nth-child(2) .head`: background: var(--color-blue); color: #FFF.
- `.card:nth-child(3) .head`: background: var(--color-yellow); color: var(--color-fg).
- `.card h3`: font-weight: 900; font-size: 17px; text-transform: uppercase.

### 表单与选择控件

- `.switch-row`: display: flex; align-items: center; gap: 12px; border: var(--border-width) solid var(--color-fg); background: #FFF; padding: 12px 14px; box-shadow: var(--shadow-hard).
- `.switch`: appearance: none; width: 60px; height: 32px; border: var(--border-width) solid var(--color-fg); background: #FFF; position: relative; cursor: pointer; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; background: var(--color-red).
- `.switch:checked`: background: var(--color-yellow).
- `.switch:checked::after`: transform: translateX(28px); background: var(--color-blue).
- `.switch-row label`: font-weight: 700; font-size: 14px; text-transform: uppercase; cursor: pointer.
- `.field`: margin-bottom: 16px.

### 导航

- `header`: border-bottom: var(--border-width) solid var(--color-fg); background: var(--color-bg).
- `nav ul`: display: flex; gap: 8px; list-style: none; padding: 0 18px 12px; flex-wrap: wrap.
- `nav ul a`: font-weight: 700; font-size: 13px; text-transform: uppercase; text-decoration: none; padding: 7px 13px; border: var(--border-width) solid var(--color-fg); border-radius: var(--radius-pill); background: #FFF.
- `nav ul a:active`: background: var(--color-yellow); transform: translate(1px,1px).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px solid var(--color-blue); outline-offset: 3px.
- `nav ul a:active`: background: var(--color-yellow); transform: translate(1px,1px).
- `.btn:active`: transform: translate(2px,2px); box-shadow: none.
- `.btn:disabled`: background: var(--color-muted); color: #666; box-shadow: none; cursor: not-allowed; border-color: #666.
- `.btn:disabled:active`: transform: none.
- `.card:active`: transform: translate(2px,2px); box-shadow: none.
- `.switch:checked`: background: var(--color-yellow).
- `.switch:checked::after`: transform: translateX(28px); background: var(--color-blue).
- `input:focus-visible,textarea:focus-visible`: outline: none; box-shadow: 4px 4px 0 var(--color-yellow); border-color: var(--color-blue).
- `footer a:active`: color: var(--color-yellow).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--color-blue); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; box-shadow: 4px 4px 0 var(--color-yellow); border-color: var(--color-blue).

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
