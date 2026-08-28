'use client'

import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { filterContent, getTags } from '../utils/content'
import type { ContentItem } from '../types/content'
import ContentCard from './ContentCard'

export default function ContentExplorer({ items, emptyText = '暂无匹配内容' }: { items: ContentItem[]; emptyText?: string }) {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('全部')
  const tags = useMemo(() => getTags(items), [items])
  const filtered = useMemo(() => filterContent(items, query, tag), [items, query, tag])

  return (
    <>
      <div className="explorer-tools pixel-border">
        <label className="search-field"><Search aria-hidden="true" /><span className="sr-only">搜索内容</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="输入关键词 / 标签..." /></label>
        <div className="filter-row" aria-label="标签筛选">{tags.map((item) => <button className={tag === item ? 'active' : ''} type="button" onClick={() => setTag(item)} key={item}>{item}</button>)}</div>
      </div>
      {filtered.length ? <div className="content-grid">{filtered.map((item) => <ContentCard item={item} key={item.id} />)}</div> : <div className="empty-state pixel-border"><b>404</b><p>{emptyText}</p></div>}
    </>
  )
}
