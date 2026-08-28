# PX AI

一个用于 AI 知识归纳、分享与收藏的多目录 Next.js 基础工程。项目采用 Next.js App Router、React、TypeScript，并使用 `52-pixel-art` 视觉系统。

## 启动

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

构建结果会静态导出到 `out` 目录，可部署到任意静态站点服务。

## 目录约定

- `app`：Next.js App Router 路由、全局布局和页面元数据
- `src/components`：跨页面组件
- `src/views`：可复用的页面视图
- `src/data`：前端导航和演示数据
- `src/hooks`：收藏等客户端状态逻辑
- `src/types`：共享数据类型
- `src/utils`：搜索与数据转换工具
- `src/styles`：52 Pixel Art 全局样式
- `src/styles/themes`：由 DESIGN.md 导出的可切换主题
- `data/*`：后续 Markdown、抓取结果或 CMS 同步内容的落盘目录

新增一级栏目时，需要同步更新 `src/types/content.ts`、`src/data/navigation.ts` 和 `data` 下对应目录。动态栏目与详情路由由 `app/[section]` 自动生成。

## 切换主题

当前使用 `@google/design.md` 的 `css-vars` 格式，从 `designs/*/DESIGN.md` 批量生成 84 个可切换主题。右上角主题选择器使用每份 DESIGN.md front matter 中的中文 `name`，选择结果会保存在浏览器中。

重新生成全部主题：

```bash
npm run themes:generate
```

生成结果位于 `src/styles/themes/generated`，主题清单位于 `src/data/themeOptions.ts`，聚合入口为 `src/styles/themes/all-themes.css`。`52-pixel-art` 和 `41-cyberpunk-ui` 继续保留项目级精细适配。
