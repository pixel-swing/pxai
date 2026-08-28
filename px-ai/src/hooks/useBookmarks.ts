'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'px-ai-bookmarks'
const EVENT_NAME = 'px-ai-bookmarks-change'

function readBookmarks(): string[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') }
  catch { return [] }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([])

  useEffect(() => {
    const sync = () => setBookmarks(readBookmarks())
    sync()
    window.addEventListener(EVENT_NAME, sync)
    window.addEventListener('storage', sync)
    return () => { window.removeEventListener(EVENT_NAME, sync); window.removeEventListener('storage', sync) }
  }, [])

  function toggle(id: string) {
    const next = bookmarks.includes(id) ? bookmarks.filter((item) => item !== id) : [...bookmarks, id]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setBookmarks(next)
    window.dispatchEvent(new Event(EVENT_NAME))
  }

  return { bookmarks, toggle, isBookmarked: (id: string) => bookmarks.includes(id) }
}
