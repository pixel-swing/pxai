import type { ContentItem } from '../types/content'

export const contentItems: ContentItem[] = [
  { id: 'understand-token', section: 'knowledge', title: '轻松理解 Token', summary: '从切词、上下文窗口和计费三个角度理解模型眼里的最小单位。', tags: ['入门', 'LLM'], author: 'PX 编辑部', updatedAt: '2026-08-24', readingMinutes: 6, featured: true, body: ['Token 是模型读取与生成信息时使用的基本单位，它不完全等于一个汉字或一个英文单词。', '理解 Token，有助于判断上下文容量、输出长度和 API 成本。'] },
  { id: 'context-engineering', section: 'knowledge', title: 'Context Engineering 是什么', summary: '把模型每次工作时看到的信息设计成稳定、可复用的系统。', tags: ['Agent', '上下文'], author: '林深', updatedAt: '2026-08-22', readingMinutes: 9, featured: true, body: ['上下文工程关注的不是一句提示词，而是任务执行过程中信息如何进入、更新与退出上下文。', '好的上下文系统会控制信息密度、来源可信度与生命周期。'] },
  { id: 'agent-repository', section: 'articles', title: '如何设计对 Agent 友好的代码仓库', summary: '让智能体更容易定位规则、验证改动并安全完成长任务。', tags: ['Agent', '工程化'], author: '周原', updatedAt: '2026-08-20', readingMinutes: 12, featured: true, body: ['清晰的目录、邻近的规则和快速验证路径，会直接影响 Agent 的工作质量。', '仓库应当让约束可发现，让反馈足够快，并避免重复真相源。'] },
  { id: 'system-prompt-pattern', section: 'prompts', title: '系统提示词的六层结构', summary: '从身份、目标、边界、工具、流程到输出，拆解稳定提示词的骨架。', tags: ['System Prompt', '方法论'], author: 'PX Lab', updatedAt: '2026-08-19', readingMinutes: 8, body: ['优秀系统提示词通常先定义职责，再定义约束和完成标准。', '工具说明应靠近使用条件，输出协议应具体且可验证。'] },
  { id: 'local-rag-notes', section: 'projects', title: 'Local RAG Notes', summary: '一个面向个人知识库的本地检索与引用实验。', tags: ['RAG', '开源'], author: '陈一', updatedAt: '2026-08-18', readingMinutes: 4, body: ['项目将 Markdown 笔记切分并建立本地向量索引。', '回答始终附带原文引用，适合个人研究资料整理。'] },
  { id: 'model-comparison', section: 'models', title: '主流推理模型速查表', summary: '用上下文、工具能力、推理速度和成本建立选择基线。', tags: ['模型对比', '推理'], author: 'PX 编辑部', updatedAt: '2026-08-17', readingMinutes: 7, body: ['模型选型需要结合任务复杂度、延迟预算和工具调用可靠性。', '基础工程只提供内容结构，真实参数应通过独立数据源持续更新。'] },
  { id: 'benchmark-basics', section: 'benchmarks', title: '读懂模型评测基准', summary: '为什么高分不等于好用，以及如何识别测试集污染。', tags: ['Benchmark', '评估'], author: '苏木', updatedAt: '2026-08-15', readingMinutes: 10, body: ['评测分数只在明确数据集、提示方式和采样参数时有可比性。', '实际选型还需要加入领域样本、人工偏好和稳定性测试。'] },
  { id: 'daily-0827', section: 'daily', title: 'AI 日报 · 08 月 27 日', summary: '今日模型、Agent 工具和开源社区的重要变化。', tags: ['日报', '行业'], author: 'PX Daily', updatedAt: '2026-08-27', readingMinutes: 5, body: ['这是用于演示目录与详情页的数据样本。', '后续可以接入自动抓取、编辑审核和定时发布流程。'] },
  { id: 'build-first-agent', section: 'tutorials', title: '从零构建第一个工具调用 Agent', summary: '用一个清晰的小项目理解循环、工具、观察和终止条件。', tags: ['Agent', '实战'], author: '顾川', updatedAt: '2026-08-14', readingMinutes: 18, body: ['教程从最小循环开始，再逐步加入工具定义、结构化结果和失败恢复。', '每一阶段都提供独立验证点，方便学习者定位问题。'] },
]
