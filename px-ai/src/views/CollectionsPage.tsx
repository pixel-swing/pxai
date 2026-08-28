'use client'

import ContentExplorer from '../components/ContentExplorer'
import { contentItems } from '../data/content'
import { useBookmarks } from '../hooks/useBookmarks'

export default function CollectionsPage() {
  const { bookmarks } = useBookmarks()
  const items = contentItems.filter((item) => bookmarks.includes(item.id))
  return <div className="shell page-shell"><header className="page-heading"><span>PLAYER INVENTORY</span><h1>我的收藏</h1><p>收藏保存在当前浏览器中，后续可替换为账户同步。</p></header><ContentExplorer items={items} emptyText="背包还是空的，去目录里收藏一些知识吧" /></div>
}
