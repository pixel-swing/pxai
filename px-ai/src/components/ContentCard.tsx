'use client'

import { Bookmark, BookmarkCheck, Clock3 } from 'lucide-react'
import Link from 'next/link'
import { getSection } from '../data/navigation'
import { useBookmarks } from '../hooks/useBookmarks'
import type { ContentItem } from '../types/content'

export default function ContentCard({ item }: { item: ContentItem }) {
  const section = getSection(item.section)
  const { isBookmarked, toggle } = useBookmarks()
  const saved = isBookmarked(item.id)

  return (
    <article className="content-card pixel-border">
      <div className="card-top"><span className="section-chip" style={{ '--accent': section?.accent } as React.CSSProperties}>{section?.shortLabel}</span><button className="bookmark-button" type="button" aria-label={saved ? '取消收藏' : '添加收藏'} aria-pressed={saved} onClick={() => toggle(item.id)}>{saved ? <BookmarkCheck /> : <Bookmark />}</button></div>
      <h2><Link href={`/${item.section}/${item.id}`}>{item.title}</Link></h2>
      <p>{item.summary}</p>
      <div className="tag-row">{item.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
      <footer><span>{item.author}</span><span><Clock3 size={15} />{item.readingMinutes} MIN</span></footer>
    </article>
  )
}
