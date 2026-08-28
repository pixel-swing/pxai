'use client'

import { Menu, Search, Send, Star, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { sections } from '../data/navigation'
import { NavIcon } from './NavIcon'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  return (
    <header className="site-header">
      <div className="header-main shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>PX·AI</span>
        </Link>
        <nav id="main-navigation" className={open ? 'section-nav is-open' : 'section-nav'} aria-label="内容导航">
          {sections.map((section) => (
            <Link className={active(`/${section.slug}`) ? 'active' : ''} href={`/${section.slug}`} key={section.slug} onClick={() => setOpen(false)}>
              <NavIcon name={section.icon} size={16} />{section.shortLabel}
            </Link>
          ))}
        </nav>
        <nav className="utility-nav" aria-label="辅助导航">
          <ThemeSwitcher />
          <div className="utility-actions">
            <Link className={`utility-icon${active('/search') ? ' active' : ''}`} href="/search" aria-label="搜索" title="搜索"><Search size={18} /><span className="sr-only">搜索</span></Link>
            <Link className={`utility-icon${active('/collections') ? ' active' : ''}`} href="/collections" aria-label="我的收藏" title="我的收藏"><Star size={18} /><span className="sr-only">我的收藏</span></Link>
            <Link className={`utility-icon${active('/submit') ? ' active' : ''}`} href="/submit" aria-label="发布" title="发布"><Send size={18} /><span className="sr-only">发布</span></Link>
          </div>
        </nav>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}<span className="sr-only">{open ? '关闭导航' : '打开导航'}</span>
        </button>
      </div>
      <div className="ticker" aria-hidden="true"><p>PX AI KNOWLEDGE BASE ** 学习 · 归纳 · 分享 · 收藏 ** NEW QUEST: BUILD YOUR AI MAP ** PRESS / TO SEARCH **</p></div>
    </header>
  )
}
