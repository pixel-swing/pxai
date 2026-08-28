'use client'

import { ArrowLeft, Bookmark, BookmarkCheck, Clock3 } from 'lucide-react'
import Link from 'next/link'
import { contentItems } from '../data/content'
import { getSection } from '../data/navigation'
import { useBookmarks } from '../hooks/useBookmarks'
import NotFound from './NotFound'

export default function ContentDetail({ slug, id }: { slug: string; id: string }) {
  const item = contentItems.find((entry) => entry.section === slug && entry.id === id)
  const { isBookmarked, toggle } = useBookmarks()
  if (!item) return <NotFound />
  const section = getSection(item.section)
  const saved = isBookmarked(item.id)
  return <article className="shell detail-page"><Link className="back-link" href={`/${item.section}`}><ArrowLeft />返回{section?.label}</Link><header><span>{section?.label} / {item.updatedAt}</span><h1>{item.title}</h1><p>{item.summary}</p><div className="detail-meta"><span>{item.author}</span><span><Clock3 />{item.readingMinutes} MIN</span><button type="button" onClick={() => toggle(item.id)}>{saved ? <BookmarkCheck /> : <Bookmark />}{saved ? '已收藏' : '收藏'}</button></div></header><div className="article-body pixel-border">{item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h2>NEXT SAVE POINT</h2><p>当前是内容详情页基础模板。可以继续接入 Markdown 渲染、目录锚点、引用来源、评论和分享卡片。</p></div></article>
}
