import type { ContentItem } from '../types/content'

export function filterContent(items: ContentItem[], query: string, tag = '全部') {
  const normalized = query.trim().toLocaleLowerCase()
  return items.filter((item) => {
    const matchesTag = tag === '全部' || item.tags.includes(tag)
    const haystack = `${item.title} ${item.summary} ${item.tags.join(' ')}`.toLocaleLowerCase()
    return matchesTag && (!normalized || haystack.includes(normalized))
  })
}

export function getTags(items: ContentItem[]) {
  return ['全部', ...Array.from(new Set(items.flatMap((item) => item.tags)))]
}
