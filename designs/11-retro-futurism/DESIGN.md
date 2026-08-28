---
name: "11 复古未来主义"
version: "alpha"
id: "11-retro-futurism"
source: "style-templates/pages/11-retro-futurism.html"
description: "复古未来主义（Retro-Futurism）风格演示：80 年代合成波霓虹辉光、CRT 扫描线、故障艺术与等宽字体的赛博怀旧界面。"
colors:
  bg: "#000000"
  bg-deep: "#1A1A2E"
  bg-panel: "#14142B"
  neon-blue: "#0080FF"
  neon-pink: "#FF006E"
  neon-cyan: "#00FFFF"
  purple: "#5D34D0"
  gold: "#FFD700"
  silver: "#C0C0C0"
  pink-80s: "#FF10F0"
  text: "#EDEDF8"
  text-dim: "#A9ACD6"
  line: "#2E2E52"
  background: "#000000"
  on-background: "#EDEDF8"
  primary: "#00FFFF"
  on-primary: "#001518"
  secondary: "#FF006E"
  on-secondary: "#FFFFFF"
  tertiary: "#FFD700"
  on-tertiary: "#000000"
  surface: "#14142B"
  on-surface: "#EDEDF8"
typography:
  display-lg:
    fontFamily: "Orbitron"
    fontSize: "30px"
    fontWeight: "700"
    lineHeight: "1.15"
  headline-lg:
    fontFamily: "Orbitron"
    fontSize: "2rem"
    fontWeight: "700"
    lineHeight: "1.25"
    letterSpacing: ".04em"
  headline-md:
    fontFamily: "Orbitron"
    fontSize: "1.5rem"
    fontWeight: "700"
    lineHeight: "1.25"
    letterSpacing: ".04em"
  body-md:
    fontFamily: "JetBrains Mono"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.75"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "13px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".3em"
  button-md:
    fontFamily: "JetBrains Mono"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "1.4"
    letterSpacing: ".14em"
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

# 11 复古未来主义 Design System

## 品牌与视觉方向

复古未来主义（Retro-Futurism）风格演示：80 年代合成波霓虹辉光、CRT 扫描线、故障艺术与等宽字体的赛博怀旧界面。

视觉关键词来自页面本身：霓虹永不熄灭 霓虹永不熄灭 霓虹永不熄灭；信号构成；CRT 扫描线；霓虹辉光；故障艺术；按钮与控件；加入夜间频段；字体级阶。界面应保持这些内容所体现的语气和信息层级，不要混入其他风格的装饰语言。

## 颜色系统

优先使用以下语义令牌；不要在组件中另造近似色：

| Token | Value |
|---|---|
| `--bg` | `#000000` |
| `--bg-deep` | `#1A1A2E` |
| `--bg-panel` | `#14142B` |
| `--neon-blue` | `#0080FF` |
| `--neon-pink` | `#FF006E` |
| `--neon-cyan` | `#00FFFF` |
| `--purple` | `#5D34D0` |
| `--gold` | `#FFD700` |
| `--silver` | `#C0C0C0` |
| `--pink-80s` | `#FF10F0` |
| `--text` | `#EDEDF8` |
| `--text-dim` | `#A9ACD6` |
| `--line` | `#2E2E52` |

辅助字面色仅在令牌无法表达的局部状态或插画中使用：`#000000`、`#1A1A2E`、`#14142B`、`#0080FF`、`#FF006E`、`#00FFFF`、`#5D34D0`、`#FFD700`、`#C0C0C0`、`#FF10F0`、`#EDEDF8`、`#A9ACD6`、`#2E2E52`、`#001518`、`#20203A`、`#7A7DA8`、`#FFFFFF`、`#000`、`#0D0D1F`、`#0A0A18`、`#8285B0`、`#05050E`。

## 字体与信息层级

字体族：**Orbitron**、**JetBrains Mono**。标题延续源页面的字重、紧凑度和字距；正文优先保证连续阅读，标签与 eyebrow 只承载短元信息。

- `body`: background: var(--bg); color: var(--text); font: 16px/1.7 var(--font-mono).
- `body::before`: content: ""; position: fixed; inset: 0; z-index: 999; pointer-events: none; background: repeating-linear-gradient(0deg,rgba(0,0,0,var(--scanline-opacity)) 0 1px,transparent 1px 3px).
- `body::after`: content: ""; position: fixed; inset: 0; z-index: 998; pointer-events: none; background: radial-gradient(120% 90% at 50% 40%,transparent 60%,rgba(0,0,20,.5) 100%).
- `h1,h2,h3`: font-family: var(--font-display); line-height: 1.25; letter-spacing: .04em.
- `h2`: color: var(--neon-cyan); text-shadow: var(--glow) rgba(0,255,255,.4); text-transform: uppercase.
- `.eyebrow`: display: inline-block; color: var(--gold); border: 1px solid rgba(255,215,0,.45); padding: 7px 14px; font-size: 13px; letter-spacing: .2em; text-transform: uppercase; background: rgba(255,215,0,.06).
- `.hero h1`: font-size: clamp(32px,6.4vw,58px); margin: 22px 0 16px; color: #FFFFFF; text-shadow: var(--glow) rgba(0,255,255,.35).
- `.card h3`: font-size: 17px; margin-bottom: 8px; color: #FFFFFF; text-transform: uppercase; letter-spacing: .08em.
- `.t-display`: font: 700 clamp(30px,5.4vw,46px)/1.15 var(--font-display); color: #FFFFFF; text-shadow: var(--glow) rgba(0,255,255,.45).
- `.t-display em`: font-style: normal; color: var(--neon-pink); text-shadow: var(--glow) rgba(255,0,110,.55).

## 形状、间距与深度

未声明统一圆角令牌；严格复用下方组件规则中的数值，不要擅自圆润化。

- `.wrap`: max-width: 1080px; margin: 0 auto; padding: 0 20px.
- `section`: padding: 56px 0; position: relative.
- `.section-sub`: color: var(--text-dim); max-width: 580px; margin: 12px 0 30px.
- `.site-head .wrap`: display: flex; align-items: center; gap: 16px; min-height: 64px; flex-wrap: wrap; padding-top: 8px; padding-bottom: 8px.
- `.hero`: padding: 72px 0 0; overflow: hidden; background: linear-gradient(180deg,#000 0%,var(--bg-deep) 100%).
- `.hero h1`: font-size: clamp(32px,6.4vw,58px); margin: 22px 0 16px; color: #FFFFFF; text-shadow: var(--glow) rgba(0,255,255,.35).
- `.hero .lead`: color: var(--text-dim); font-size: 17px; max-width: 560px.
- `.hero-actions`: display: flex; gap: 16px; flex-wrap: wrap; margin: 30px 0 48px.
- `.hero-visual`: position: relative; height: 220px; margin-top: 8px.
- `.grid-floor`: position: absolute; left: -10%; right: -10%; bottom: 0; height: 96px; background-image: linear-gradient(rgba(0,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,255,.5) 1px,transparent 1px); background-size: 48px 24px; transform: perspective(240px) rotateX(58deg); transform-origin: bottom; animation: gridmove 1.8s linear infinite; border-top: 1px solid var(--neon-cyan); box-shadow: 0 -4px 18px rgba(0,255,255,.3).

## 组件规范

### 操作按钮

- `.btn`: display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 0 24px; border: 1px solid; background: transparent; font: 700 15px var(--font-mono); letter-spacing: .14em; text-transform: uppercase; cursor: pointer; text-decoration: none; clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px); transition: background var(--dur),color var(--dur),box-shadow var(--dur),transform var(--dur).

### 卡片与容器

- `.card`: background: var(--bg-panel); border: 1px solid var(--line); padding: 26px; position: relative; transition: border-color var(--dur),box-shadow var(--dur),transform var(--dur).
- `.card::before`: content: ""; position: absolute; top: 0; left: 0; width: 34px; height: 34px; border-top: 2px solid var(--neon-cyan); border-left: 2px solid var(--neon-cyan).
- `.card:hover`: border-color: var(--neon-pink); box-shadow: var(--glow) rgba(255,0,110,.3); transform: translateY(-3px).
- `.card h3`: font-size: 17px; margin-bottom: 8px; color: #FFFFFF; text-transform: uppercase; letter-spacing: .08em.
- `.card p`: color: var(--text-dim); font-size: 15px.

### 表单与选择控件

- `.switch`: display: inline-flex; align-items: center; gap: 12px; font-size: 14px; letter-spacing: .1em; text-transform: uppercase; color: var(--text-dim).
- `.switch input`: appearance: none; -webkit-appearance: none; width: 54px; height: 28px; background: #0D0D1F; border: 1px solid var(--line); position: relative; cursor: pointer; transition: border-color var(--dur),box-shadow var(--dur).
- `.switch input::before`: content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; background: #7A7DA8; transition: transform var(--dur),background var(--dur).
- `.switch input:checked`: border-color: var(--neon-pink); box-shadow: var(--glow) rgba(255,0,110,.4).
- `.switch input:checked::before`: transform: translateX(26px); background: var(--neon-pink).
- `.field`: display: flex; flex-direction: column; gap: 8px.
- `.field label`: font-size: 13.5px; font-weight: 700; color: var(--neon-cyan); letter-spacing: .16em; text-transform: uppercase.

## 交互与动效

动效令牌：`--dur: 300ms`。

- `:focus-visible`: outline: 3px solid var(--neon-cyan); outline-offset: 3px.
- `.nav-links a:hover`: color: var(--neon-pink); text-shadow: var(--glow) rgba(255,0,110,.6).
- `.btn-primary:hover`: box-shadow: var(--glow) rgba(0,255,255,.7),inset 0 0 12px rgba(255,255,255,.35).
- `.btn-primary:active`: transform: translate(1px,1px); box-shadow: none.
- `.btn-primary:disabled`: background: #20203A; color: #7A7DA8; border-color: var(--line); cursor: not-allowed; box-shadow: none; transform: none.
- `.btn-secondary:hover`: background: rgba(255,0,110,.14); box-shadow: var(--glow) rgba(255,0,110,.55).
- `.btn-secondary:active`: transform: translate(1px,1px).
- `.btn-ghost:hover`: color: #FFFFFF; border-color: var(--silver).
- `.btn-ghost:active`: transform: translate(1px,1px).
- `.card:hover`: border-color: var(--neon-pink); box-shadow: var(--glow) rgba(255,0,110,.3); transform: translateY(-3px).

## 响应式与无障碍

源页面断点/用户偏好查询：`(min-width:760px)`、`(prefers-reduced-motion:reduce)`。
所有交互元素必须可键盘操作；保留可见焦点；图标按钮提供可访问名称；颜色不能成为状态的唯一信号；正文和关键控件保持 WCAG AA 对比度。

- `:focus-visible`: outline: 3px solid var(--neon-cyan); outline-offset: 3px.
- `input:focus-visible,textarea:focus-visible`: outline: 3px solid var(--neon-cyan); outline-offset: 2px; border-color: var(--neon-cyan); box-shadow: var(--glow) rgba(0,255,255,.35).

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
