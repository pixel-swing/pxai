import { BadgeCheck, Eye, Newspaper, Sprout, TreePine } from 'lucide-react'

const principles = [
  {
    numeral: 'I.',
    title: '可视化优先',
    description: '复杂概念尽量用图解、结构和案例展开，让知识更容易被理解。',
    icon: Eye,
  },
  {
    numeral: 'II.',
    title: '每日有新读',
    description: '替你筛过信息噪音，只留下真正值得花时间阅读的内容。',
    icon: Newspaper,
  },
  {
    numeral: 'III.',
    title: '精挑不堆砌',
    description: '每一篇都经过整理和编辑，宁可少而清楚，不做无序的信息仓库。',
    icon: BadgeCheck,
  },
]

export default function PrinciplesSection() {
  return (
    <section className="principles-section" aria-labelledby="principles-title">
      <div className="shell principles-grid">
        <aside className="principles-visual" aria-hidden="true">
          <div className="growth-scene">
            <div className="growth-particles"><i /><i /><i /><i /></div>
            <div className="growth-stage stage-seed"><span className="seed" /></div>
            <div className="growth-stage stage-sprout"><Sprout size={52} strokeWidth={2} /></div>
            <div className="growth-stage stage-sapling"><TreePine size={76} strokeWidth={1.8} /></div>
            <div className="growth-stage stage-tree"><TreePine size={132} strokeWidth={1.5} /><i /><i /><i /></div>
            <div className="growth-ground"><i /><i /><i /><i /><i /></div>
            <div className="growth-caption"><span>SEED</span><span>SPROUT</span><span>TREE</span></div>
          </div>
        </aside>

        <div className="principles-content">
          <span className="principles-kicker">§ 一些坚持</span>
          <h2 id="principles-title">我们更在乎<span>讲清楚</span>，而不是说得多。<i className="cursor principles-cursor" aria-hidden="true" /></h2>
          <blockquote>“复杂的 AI，值得被 <mark>耐心地</mark> 解释。”</blockquote>

          <div className="principles-list">
            {principles.map(({ numeral, title, description, icon: Icon }) => (
              <article key={title}>
                <div className="principle-meta"><small>{numeral}</small><Icon size={22} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
