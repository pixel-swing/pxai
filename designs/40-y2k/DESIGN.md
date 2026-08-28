---
name: "40 Y2K 千禧美学"
version: "alpha"
id: "40-y2k"
source: "style-templates/pages/40-y2k.html"
description: "Y2K 千禧美学风格演示：霓虹粉与赛博青、镀铬金属渐变、泡泡糖光泽按钮、星星闪烁与虹彩描边的 2000 年代复古未来主义。"
colors:
  neon-pink: "#FF69B4"
  neon-cyan: "#00FFFF"
  chrome-silver: "#C0C0C0"
  y2k-purple: "#9400D3"
  pink-deep: "#C71585"
  pink-ink: "#A31473"
  ink: "#2E0A47"
  ink-2: "#5A2678"
  ink-3: "#6B4A86"
  card: "rgba(255,255,255,.82)"
  background: "#EEDFFF"
  on-background: "#2E0A47"
  primary: "#C71585"
  on-primary: "#FFFFFF"
  secondary: "#00FFFF"
  on-secondary: "#2E0A47"
  tertiary: "#9400D3"
  on-tertiary: "#FFFFFF"
  surface: "rgba(255,255,255,.82)"
  on-surface: "#2E0A47"
typography:
  display-lg:
    fontFamily: "Orbitron"
    fontSize: "2.7rem"
    fontWeight: "900"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: "Orbitron"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: ".01em"
  headline-md:
    fontFamily: "Orbitron"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: ".01em"
  body-md:
    fontFamily: "Nunito"
    fontSize: "1rem"
    fontWeight: "600"
    lineHeight: "1.6"
  label-sm:
    fontFamily: "Orbitron"
    fontSize: ".75rem"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".2em"
  button-md:
    fontFamily: "Nunito"
    fontSize: ".95rem"
    fontWeight: "800"
    lineHeight: "1.4"
rounded:
  radius: "22px"
  DEFAULT: "22px"
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

# 40 Y2K 千禧美学 Design System

## 品牌与视觉方向

Y2K 千禧美学风格演示：霓虹粉与赛博青、镀铬金属渐变、泡泡糖光泽按钮、星星闪烁与虹彩描边的 2000 年代复古未来主义。

视觉关键词来自页面本身：回到 2000 年， 那个 闪闪发光 的未来；风格特性；镀铬金属；泡泡形态；星光辉光；按钮与控件；加入千禧俱乐部；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--neon-pink` | `#FF69B4` |
| `--neon-cyan` | `#00FFFF` |
| `--chrome-silver` | `#C0C0C0` |
| `--y2k-purple` | `#9400D3` |
| `--pink-deep` | `#C71585` |
| `--pink-ink` | `#A31473` |
| `--ink` | `#2E0A47` |
| `--ink-2` | `#5A2678` |
| `--ink-3` | `#6B4A86` |
| `--glossy-gradient` | `linear-gradient(180deg,rgba(255,255,255,.9) 0%,rgba(255,255,255,0) 52%)` |
| `--chrome` | `linear-gradient(180deg,#FFFFFF 0%,#D9D9E3 38%,#9FA0AC 50%,#DDDDE8 64%,#FFFFFF 100%)` |
| `--iri` | `linear-gradient(135deg,var(--neon-pink),var(--neon-cyan) 50%,var(--y2k-purple))` |
| `--bg` | `linear-gradient(135deg,#FFD9F3 0%,#EEDFFF 48%,#D6F6FF 100%)` |
| `--card` | `rgba(255,255,255,.82)` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#FF69B4`、`#00FFFF`、`#C0C0C0`、`#9400D3`、`#C71585`、`#A31473`、`#2E0A47`、`#5A2678`、`#6B4A86`、`#FFFFFF`、`#D9D9E3`、`#9FA0AC`、`#DDDDE8`、`#FFD9F3`、`#EEDFFF`、`#D6F6FF`、`#FFF`、`#FFB7E0`、`#FF8AC8`、`#8E8FA0`、`#D9CBE3`、`#8A7699`、`#C8FBFF`、`#FFD86B`。

## 字体与信息层级

字体族：**Orbitron**、**Nunito**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: font-family: var(--font-body); background: var(--bg) fixed; color: var(--ink); font-size: 16px; line-height: 1.65.
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.2; letter-spacing: .01em.
- `.sec-head h2`: font-size: clamp(1.25rem,2.6vw,1.65rem); font-weight: 700; color: var(--ink).
- `.sec-head h2::after`: content: ""; display: block; width: 72px; height: 4px; border-radius: 99px; background: var(--iri); margin-top: .4rem.
- `.eyebrow`: display: inline-flex; align-items: center; gap: .4rem; font-family: var(--font-display); font-size: .72rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--ink); background: linear-gradient(90deg,rgba(255,105,180,.3),rgba(0,255,255,.3)); border: 1px solid rgba(148,0,211,.4); padding: 5px 12px; border-radius: 999px.
- `.hero h1`: font-size: clamp(2rem,5.2vw,3.3rem); font-weight: 900; margin: 1rem 0; color: var(--ink).
- `.hero h1 .grad`: background: linear-gradient(90deg,var(--pink-deep),var(--y2k-purple)); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 var(--glow-blur) rgba(255,105,180,.5)).
- `.card h3`: font-size: 1.02rem; margin-bottom: .45rem.
- `.t-display`: font-family: var(--font-display); font-size: clamp(1.9rem,4.4vw,2.7rem); font-weight: 900; background: linear-gradient(180deg,#6B7080 0%,#2E0A47 40%,#8E8FA0 52%,#3D1152 100%); -webkit-background-clip: text; background-clip: text; color: transparent.
- `.t-heading`: font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: var(--pink-deep); text-shadow: 0 0 12px rgba(255,105,180,.4).

## 形状、间距与深度

圆角令牌：`--radius: 22px`。

- `.wrap`: max-width: 1120px; margin: 0 auto; padding: 0 clamp(1rem,4vw,2rem).
- `section`: padding: 2.5rem 0.
- `.hero`: padding: 3.2rem 0 2.6rem; position: relative; overflow: hidden.
- `.hero-grid`: display: grid; grid-template-columns: minmax(0,6fr) minmax(0,5fr); gap: 2rem; align-items: center; position: relative.
- `.hero h1`: font-size: clamp(2rem,5.2vw,3.3rem); font-weight: 900; margin: 1rem 0; color: var(--ink).
- `.hero h1 .grad`: background: linear-gradient(90deg,var(--pink-deep),var(--y2k-purple)); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 var(--glow-blur) rgba(255,105,180,.5)).
- `.hero p.lead`: color: var(--ink-2); font-weight: 600; max-width: 30em; margin-bottom: 1.6rem.
- `.hero-actions`: display: flex; gap: .9rem; flex-wrap: wrap.
- `.hero-grid`: grid-template-columns: 1fr.

## 组件规范

### 操作按钮

- `.btn`: position: relative; display: inline-flex; align-items: center; justify-content: center; gap: .5rem; min-height: 46px; padding: .6rem 1.4rem; font: inherit; font-size: .95rem; font-weight: 800; border-radius: 999px; border: 2px solid transparent; cursor: pointer; overflow: hidden; transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.btn::before`: content: ""; position: absolute; inset: 2px 2px 45% 2px; border-radius: 999px; background: var(--glossy-gradient); pointer-events: none.
- `.btn:active`: transform: translateY(1px) scale(.99).
- `.btn:disabled`: background: #D9CBE3; color: #8A7699; box-shadow: none; transform: none; cursor: not-allowed.
- `.btn:disabled::before`: display: none.

### 卡片与容器

- `.card`: position: relative; background: var(--card); border: 2px solid transparent; background-image: linear-gradient(var(--card),var(--card)),var(--iri); background-origin: border-box; background-clip: padding-box,border-box; border-radius: var(--radius); padding: 1.5rem; transition: transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease).
- `.card:hover`: transform: translateY(-5px); box-shadow: 0 0 var(--glow-blur) rgba(255,105,180,.55),0 14px 30px rgba(148,0,211,.2).
- `.card .ico`: display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; margin-bottom: 1rem; background: radial-gradient(circle at 32% 26%,#fff,#FFB7E0 45%,var(--neon-pink)); color: var(--ink); box-shadow: 0 0 8px rgba(255,105,180,.6).
- `.card:nth-child(2) .ico`: background: var(--chrome); box-shadow: 0 0 8px rgba(160,160,180,.8).
- `.card:nth-child(3) .ico`: background: radial-gradient(circle at 32% 26%,#fff,#C8FBFF 45%,#38E8F5); box-shadow: 0 0 8px rgba(0,255,255,.6).
- `.card h3`: font-size: 1.02rem; margin-bottom: .45rem.
- `.card p`: font-size: .92rem; color: var(--ink-2); font-weight: 600.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: .6rem; font-size: .9rem; font-weight: 800; cursor: pointer.
- `.switch input`: appearance: none; width: 52px; height: 28px; border-radius: 999px; background: #D8C7E6; border: 1px solid #B49BCB; position: relative; cursor: pointer; margin: 0; transition: background var(--dur) var(--ease).
- `.switch input::after`: content: ""; position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; border-radius: 50%; background: radial-gradient(circle at 32% 26%,#fff 0%,#E8E8F0 55%,#B9B9C8 100%); box-shadow: 0 1px 4px rgba(46,10,71,.4); transition: transform var(--dur) var(--ease).
- `.switch input:checked`: background: linear-gradient(90deg,var(--neon-pink),#7FE9F5).
- `.switch input:checked::after`: transform: translateX(24px).
- `.field`: display: flex; flex-direction: column; gap: .4rem.
- `.field.full`: grid-column: 1/-1.

### 导航

- `header`: position: sticky; top: 0; z-index: 20; background: rgba(255,240,251,.8); backdrop-filter: blur(10px); border-bottom: 2px solid transparent; border-image: linear-gradient(90deg,var(--neon-pink),var(--neon-cyan),var(--y2k-purple)) 1.
- `.nav`: display: flex; align-items: center; gap: 1rem; min-height: 62px; flex-wrap: wrap; padding: .5rem 0.
- `.nav ul`: display: flex; gap: 1rem; list-style: none; flex-wrap: wrap.
- `.nav ul a`: font-size: .9rem; font-weight: 800; color: var(--ink-2); padding: .25rem .3rem; transition: color var(--dur) var(--ease),text-shadow var(--dur) var(--ease).
- `.nav ul a:hover`: color: var(--pink-deep); text-shadow: 0 0 var(--glow-blur) rgba(255,105,180,.8).
- `footer nav`: display: flex; gap: 1.1rem; flex-wrap: wrap; font-size: .88rem; font-weight: 700.

## 交互与动效

动效令牌：`--dur: 280ms`；`--ease: cubic-bezier(.34,1.4,.4,1)`。

- `:focus-visible`: outline: 3px solid var(--y2k-purple); outline-offset: 3px; border-radius: 8px.
- `.nav ul a:hover`: color: var(--pink-deep); text-shadow: 0 0 var(--glow-blur) rgba(255,105,180,.8).
- `.btn-primary:hover`: transform: translateY(-2px) scale(1.03); box-shadow: 0 0 var(--glow-blur) rgba(255,105,180,.9),0 8px 20px rgba(199,21,133,.4).
- `.btn-secondary:hover`: transform: translateY(-2px); box-shadow: 0 0 var(--glow-blur) rgba(0,255,255,.75).
- `.btn-ghost:hover`: background: rgba(255,105,180,.14); box-shadow: 0 0 var(--glow-blur) rgba(255,105,180,.5).
- `.btn:active`: transform: translateY(1px) scale(.99).
- `.btn:disabled`: background: #D9CBE3; color: #8A7699; box-shadow: none; transform: none; cursor: not-allowed.
- `.btn:disabled::before`: display: none.
- `.card:hover`: transform: translateY(-5px); box-shadow: 0 0 var(--glow-blur) rgba(255,105,180,.55),0 14px 30px rgba(148,0,211,.2).
- `.switch input:checked`: background: linear-gradient(90deg,var(--neon-pink),#7FE9F5).

## 响应式与无障碍

源页面断点/用户偏好查询：`(max-width:900px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--y2k-purple); outline-offset: 3px; border-radius: 8px.
- `input:focus-visible,textarea:focus-visible`: outline: none; border-color: var(--pink-deep); box-shadow: 0 0 0 3px rgba(255,105,180,.35),0 0 var(--glow-blur) rgba(255,105,180,.45).

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
