import type { SectionConfig } from '../types/content'

export const sections: SectionConfig[] = [
  { slug: 'knowledge', label: 'AI 知识', shortLabel: '知识', description: '把复杂概念拆成可理解、可连接的知识卡片。', directory: 'data/knowledge', icon: 'book', accent: 'var(--blue)' },
  { slug: 'articles', label: 'AI 文章', shortLabel: '文章', description: '经过编辑整理的观点、实践和深度长文。', directory: 'data/articles', icon: 'article', accent: 'var(--red)' },
  { slug: 'prompts', label: 'AI 提示词', shortLabel: '提示词', description: '收藏、拆解并复用优秀提示词与 Agent 工作流。', directory: 'data/prompts', icon: 'terminal', accent: 'var(--blue)' },
  { slug: 'projects', label: 'AI 作品', shortLabel: '作品', description: '分享值得体验的应用、开源项目和创作案例。', directory: 'data/projects', icon: 'blocks', accent: 'var(--red)' },
  { slug: 'models', label: 'AI 模型', shortLabel: '模型', description: '记录模型能力、参数、价格与适用边界。', directory: 'data/models', icon: 'brain', accent: 'var(--blue)' },
  { slug: 'benchmarks', label: 'AI 评估', shortLabel: '评估', description: '理解基准、指标与模型能力的真实边界。', directory: 'data/benchmarks', icon: 'chart', accent: 'var(--red)' },
  { slug: 'daily', label: 'AI 日报', shortLabel: '日报', description: '每日精选行业动态、产品更新和研究进展。', directory: 'data/daily', icon: 'newspaper', accent: 'var(--blue)' },
  { slug: 'tutorials', label: 'AI 教程', shortLabel: '教程', description: '从入门到实战的体系化学习路径。', directory: 'data/tutorials', icon: 'graduation', accent: 'var(--red)' },
]

export const getSection = (slug?: string) => sections.find((item) => item.slug === slug)
