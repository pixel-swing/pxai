import Link from 'next/link'

export default function NotFound() {
  return <div className="shell not-found"><b>404</b><h1>这个关卡不存在</h1><p>地图上没有找到对应的知识目录。</p><Link className="pixel-button pixel-border" href="/">返回主地图</Link></div>
}
