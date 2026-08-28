import ContentExplorer from '../components/ContentExplorer'
import { contentItems } from '../data/content'

export default function SearchPage() {
  return <div className="shell page-shell"><header className="page-heading"><span>GLOBAL SEARCH</span><h1>搜索知识库</h1><p>跨目录检索标题、摘要和标签。</p></header><ContentExplorer items={contentItems} /></div>
}
