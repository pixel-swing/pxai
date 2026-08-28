import ContentExplorer from '../components/ContentExplorer'
import { contentItems } from '../data/content'
import type { SectionConfig } from '../types/content'

export default function SectionPage({ section }: { section: SectionConfig }) {
  const items = contentItems.filter((item) => item.section === section.slug)
  return <div className="shell page-shell"><header className="page-heading"><span>DIRECTORY / {section.slug.toUpperCase()}</span><h1>{section.label}</h1><p>{section.description}</p><code>{section.directory}</code></header><ContentExplorer items={items} emptyText="这个目录还没有匹配的知识卡片" /></div>
}
