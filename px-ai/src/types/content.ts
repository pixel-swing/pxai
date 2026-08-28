export type SectionSlug = 'knowledge' | 'articles' | 'prompts' | 'projects' | 'models' | 'benchmarks' | 'daily' | 'tutorials'

export type NavIcon = 'sparkles' | 'book' | 'article' | 'terminal' | 'blocks' | 'brain' | 'chart' | 'newspaper' | 'graduation'

export interface SectionConfig {
  slug: SectionSlug
  label: string
  shortLabel: string
  description: string
  directory: string
  icon: NavIcon
  accent: string
}

export interface ContentItem {
  id: string
  section: SectionSlug
  title: string
  summary: string
  tags: string[]
  author: string
  updatedAt: string
  readingMinutes: number
  featured?: boolean
  body: string[]
}
