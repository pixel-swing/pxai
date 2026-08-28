'use client'

import { useEffect, useState } from 'react'
import { themeOptions } from '../data/themeOptions'

const DEFAULT_THEME = '52-pixel-art'
const STORAGE_KEY = 'px-ai-theme'
const LEGACY_THEMES: Record<string, string> = {
  cyberpunk: '41-cyberpunk-ui',
  'pixel-art': DEFAULT_THEME,
}
const themeIds = new Set<string>(themeOptions.map(({ id }) => id))

function normalizeTheme(theme: string | null) {
  const normalized = theme ? (LEGACY_THEMES[theme] ?? theme) : DEFAULT_THEME
  return themeIds.has(normalized) ? normalized : DEFAULT_THEME
}

function applyTheme(theme: string) {
  if (theme === DEFAULT_THEME) delete document.documentElement.dataset.theme
  else document.documentElement.dataset.theme = theme === '41-cyberpunk-ui' ? 'cyberpunk' : theme
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(DEFAULT_THEME)

  useEffect(() => {
    const nextTheme = normalizeTheme(localStorage.getItem(STORAGE_KEY))
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }, [])

  function changeTheme(nextTheme: string) {
    setTheme(nextTheme)
    localStorage.setItem(STORAGE_KEY, nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <label className="theme-switcher">
      <span className="sr-only">主题</span>
      <select value={theme} onChange={(event) => changeTheme(event.target.value)} aria-label="切换界面主题">
        {themeOptions.map(({ id, name }) => (
          <option value={id} key={id}>{name}</option>
        ))}
      </select>
    </label>
  )
}
