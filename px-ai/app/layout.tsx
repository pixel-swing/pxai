import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Header from '../src/components/Header'
import PrinciplesSection from '../src/components/PrinciplesSection'
import '../src/styles/app.css'

export const metadata: Metadata = {
  title: {
    default: 'PX AI · 像素知识地图',
    template: '%s · PX AI',
  },
  description: 'AI 知识归纳、分享与收藏平台。',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('px-ai-theme');if(t==='cyberpunk')t='41-cyberpunk-ui';else if(t==='pixel-art')t='52-pixel-art';if(t&&t!=='52-pixel-art'){document.documentElement.dataset.theme=t==='41-cyberpunk-ui'?'cyberpunk':t}else{delete document.documentElement.dataset.theme}}catch(e){}" }} />
      </head>
      <body>
        <div className="app-shell">
          <a className="skip-link" href="#content">跳到主要内容</a>
          <Header />
          <main id="content">{children}</main>
          <PrinciplesSection />
          <footer className="site-footer">
            <div className="shell footer-grid">
              <div><b>PX·AI</b><p>把零散信息整理成可复用的 AI 知识地图。</p></div>
              <p>GAME SAVE · 2026</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
