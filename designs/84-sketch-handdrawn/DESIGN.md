---
name: "84 手绘草图（移动端）"
version: "alpha"
id: "84-sketch-handdrawn"
source: "style-templates/pages/84-sketch-handdrawn.html"
description: "暖纸底、歪扭圆角、硬偏移阴影、胶带图钉与涂鸦箭头的手绘草图移动端风格演示"
colors:
  bg: "#FDFBF7"
  old-paper: "#E5E0D8"
  card-bg: "#FFFFFF"
  text: "#2D2D2D"
  accent-red: "#FF4D4D"
  red-ink: "#C93030"
  accent-blue: "#2D5DA1"
  postit: "#FFF9C4"
  background: "#E5E0D8"
  on-background: "#2D2D2D"
  primary: "#FFF9C4"
  on-primary: "#2D2D2D"
  secondary: "#FF4D4D"
  on-secondary: "#FFFFFF"
  tertiary: "#2D5DA1"
  on-tertiary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#2D2D2D"
typography:
  display-lg:
    fontFamily: "Kalam"
    fontSize: "34px"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-lg:
    fontFamily: "Kalam"
    fontSize: "27px"
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: "Kalam"
    fontSize: "27px"
    fontWeight: "700"
    lineHeight: "1.3"
  body-md:
    fontFamily: "Patrick Hand"
    fontSize: "17px"
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Kalam"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".06em"
  button-md:
    fontFamily: "Kalam"
    fontSize: "16.5px"
    fontWeight: "700"
    lineHeight: "1.4"
rounded:
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

# 84 手绘草图（移动端） Design System

## 品牌与视觉方向

暖纸底、歪扭圆角、硬偏移阴影、胶带图钉与涂鸦箭头的手绘草图移动端风格演示

视觉关键词来自页面本身：先别管像素， 画出来 再说；风格信息；风格特性；歪扭圆角 + 手写字；硬偏移阴影；胶带、图钉与涂鸦；按钮与控件；涂鸦投稿。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#FDFBF7` |
| `--old-paper` | `#E5E0D8` |
| `--card-bg` | `#FFFFFF` |
| `--text` | `#2D2D2D` |
| `--accent-red` | `#FF4D4D` |
| `--red-ink` | `#C93030` |
| `--accent-blue` | `#2D5DA1` |
| `--postit` | `#FFF9C4` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FDFBF7`、`#E5E0D8`、`#FFFFFF`、`#2D2D2D`、`#FF4D4D`、`#C93030`、`#2D5DA1`、`#FFF9C4`、`#FFF`、`#FBF7EC`、`#FFF3A3`、`#EFEBE2`、`#4A463F`、`#8A857C`。

## 字体与信息层级

字体族：**Kalam**、**Patrick Hand**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: repeating-linear-gradient(45deg,rgba(45,45,45,.028) 0 2px,transparent 2px 8px),var(--old-paper); color: var(--text); font-size: 17px; line-height: 1.6.
- `.eyebrow`: display: inline-block; font-family: var(--font-heading); font-size: 14px; background: var(--postit); border: 2px solid var(--text); border-radius: 4px 14px 6px 12px; padding: 6px 14px; transform: rotate(-2deg); box-shadow: 3px 3px 0 var(--text).
- `.hero h1`: font-family: var(--font-heading); font-weight: 700; font-size: 36px; line-height: 1.25; margin: 18px 0 8px.
- `.hero h1 .scribble`: position: relative; display: inline-block; color: var(--red-ink).
- `.hero h1 .scribble svg`: position: absolute; left: 0; bottom: -8px; width: 100%; height: 12px.
- `h2`: font-family: var(--font-heading); font-weight: 700; font-size: 27px; margin-bottom: 4px.
- `.fcard h3`: font-family: var(--font-heading); font-weight: 700; font-size: 19px; margin-bottom: 4px.
- `.t-display`: font-family: var(--font-heading); font-weight: 700; font-size: 34px; line-height: 1.2.
- `.t-h`: font-family: var(--font-heading); font-weight: 700; font-size: 24px.
- `.t-body`: font-size: 17px.

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。
空间令牌：`--border-width: 3px`。
阴影/海拔令牌：`--shadow-offset: 4px 4px 0 var(--text)`。

- `.phone`: position: relative; width: 100%; max-width: 430px; background: radial-gradient(rgba(45,45,45,.05) 1px,transparent 1px) 0 0/16px 16px,var(--bg); border: var(--border-width) solid var(--text); border-radius: 46px 38px 44px 40px; box-shadow: 10px 10px 0 var(--text); overflow: hidden; overflow: clip.
- `.hero`: position: relative; padding: 30px 20px 26px.
- `.hero h1`: font-family: var(--font-heading); font-weight: 700; font-size: 36px; line-height: 1.25; margin: 18px 0 8px.
- `.hero h1 .scribble`: position: relative; display: inline-block; color: var(--red-ink).
- `.hero h1 .scribble svg`: position: absolute; left: 0; bottom: -8px; width: 100%; height: 12px.
- `.hero p`: max-width: 32ch; font-size: 17.5px.
- `.hero-actions`: position: relative; display: flex; gap: 12px; margin: 20px 0 26px; flex-wrap: wrap.
- `section`: padding: 26px 20px.

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 12px 22px; font-family: var(--font-heading); font-weight: 700; font-size: 16.5px; color: var(--text); background: var(--card-bg); border: var(--border-width) solid var(--text); border-radius: var(--wobble-a); box-shadow: var(--shadow-offset); cursor: pointer; transition: transform .12s ease,box-shadow .12s ease,background .15s.
- `.btn:hover`: background: #FBF7EC.
- `.btn:active`: transform: translate(4px,4px); box-shadow: 0 0 0 var(--text).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: 2px 2px 0 rgba(45,45,45,.4); transform: none; background: #EFEBE2; border-style: dotted.

### 卡片与容器

- `.card`: position: relative; background: var(--card-bg); border: var(--border-width) solid var(--text); border-radius: var(--wobble-a); box-shadow: var(--shadow-offset); padding: 20px.

### 表单与选择控件

- `.switch-line`: display: flex; align-items: center; gap: 14px; padding: 14px 16px; background: #fff; border: var(--border-width) solid var(--text); border-radius: var(--wobble-b); box-shadow: var(--shadow-offset).
- `.switch`: appearance: none; -webkit-appearance: none; width: 60px; height: 34px; border: 2.5px solid var(--text); border-radius: 18px 14px 16px 12px; background: #fff; position: relative; cursor: pointer; transition: background .2s; flex: none.
- `.switch::after`: content: ""; position: absolute; top: 2px; left: 3px; width: 24px; height: 24px; border-radius: 50% 46% 52% 48%; background: var(--text); transition: transform .2s ease.
- `.switch:checked`: background: var(--postit).
- `.switch:checked::after`: transform: translateX(24px) rotate(20deg).
- `form .field`: margin-bottom: 18px.
- `input[type=text],textarea`: width: 100%; min-height: 52px; background: #fff; border: 2.5px solid var(--text); border-radius: var(--wobble-b); font-family: var(--font-body); font-size: 17px; color: var(--text); padding: 12px 15px; transition: border-color .15s,box-shadow .15s.

### 导航

- `header.nav`: position: sticky; top: 0; z-index: 9; background: rgba(253,251,247,.94); border-bottom: var(--border-width) solid var(--text); padding: 10px 18px 12px.
- `.tabs`: display: flex.
- `.tabs a`: flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 8px 4px; min-height: 56px; font-family: var(--font-heading); font-size: 12.5px; border-radius: var(--wobble-c).
- `.tabs a:hover`: background: #fff.
- `.tabs a[aria-current]`: background: var(--postit); border: 2px solid var(--text); box-shadow: 2px 2px 0 var(--text).

## 交互与动效

动效只用于解释状态变化；没有明确令牌时使用 160–240ms 的短过渡，并避免改变布局。

- `:focus-visible`: outline: 3px dashed var(--accent-blue); outline-offset: 3px.
- `.nav-links a:hover`: border-color: var(--text); background: #fff.
- `.nav-links a[aria-current]`: background: var(--postit); border: 2px solid var(--text); box-shadow: 3px 3px 0 var(--text).
- `.btn:hover`: background: #FBF7EC.
- `.btn:active`: transform: translate(4px,4px); box-shadow: 0 0 0 var(--text).
- `.btn-primary:hover`: background: #FFF3A3.
- `.btn-ghost:hover`: background: rgba(255,255,255,.7).
- `.btn-ghost:active`: transform: translate(2px,2px).
- `.btn:disabled`: opacity: .45; cursor: not-allowed; box-shadow: 2px 2px 0 rgba(45,45,45,.4); transform: none; background: #EFEBE2; border-style: dotted.
- `.fcard:hover`: transform: rotate(0) translateY(-3px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px dashed var(--accent-blue); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--accent-blue); box-shadow: 4px 4px 0 var(--accent-blue); color: var(--accent-blue).

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
