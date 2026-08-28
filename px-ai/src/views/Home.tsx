import { ArrowRight, Bookmark, FolderTree, Share2 } from "lucide-react";
import Link from "next/link";
import ContentCard from "../components/ContentCard";
import { contentItems } from "../data/content";
import { sections } from "../data/navigation";
import { NavIcon } from "../components/NavIcon";

export default function Home() {
  const featured = contentItems.filter((item) => item.featured);
  return (
    <>
      <section className="hero-section">
        <div className="shell hero-grid">
          <div>
            <span className="eyebrow">WORLD 0-1 · AI KNOWLEDGE HUB</span>
            <h1>
              把 AI 知识，
              <br />
              整理成你的<span>像素地图</span>
              <i className="cursor" />
            </h1>
            <p>
              收集概念、文章、提示词、模型与实践，把零散信息归纳成可搜索、可分享、可持续更新的知识目录。
            </p>
            <div className="hero-actions">
              <Link className="pixel-button pixel-border" href="/knowledge">
                开始探索
              </Link>
              <Link
                className="pixel-button secondary pixel-border"
                href="/submit"
              >
                分享知识
              </Link>
            </div>
          </div>
          <div
            className="knowledge-console pixel-border"
            aria-label="知识库状态面板"
          >
            <div className="console-title">
              <span>PX-DATABASE</span>
              <span>ONLINE</span>
            </div>
            <div className="pixel-orbit">
              <i />
              <i />
              <i />
              <i />
              <span>AI</span>
            </div>
            <div className="progress-label">
              <span>KNOWLEDGE MAP</span>
              <span>72%</span>
            </div>
            <div className="pixel-progress">
              <i />
            </div>
            <p>8 DIRECTORIES · {contentItems.length} STARTER ITEMS</p>
          </div>
        </div>
      </section>

      <section className="shell stats-strip" aria-label="平台能力">
        <article>
          <FolderTree />
          <b>多目录归纳</b>
          <p>导航与内容目录一一对应</p>
        </article>
        <article>
          <Share2 />
          <b>知识分享</b>
          <p>保留作者、标签与来源字段</p>
        </article>
        <article>
          <Bookmark />
          <b>本地收藏</b>
          <p>无需登录即可保存阅读清单</p>
        </article>
      </section>

      <section className="shell section-block">
        <div className="section-heading">
          <div>
            <span>SELECT WORLD</span>
            <h2>选择知识目录</h2>
          </div>
          <p>每个导航对应独立数据目录，后续可分别接入 Markdown、CMS 或 API。</p>
        </div>
        <div className="directory-grid">
          {sections.map((section, index) => (
            <Link
              className="directory-card pixel-border"
              href={`/${section.slug}`}
              key={section.slug}
            >
              <span className="directory-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <NavIcon name={section.icon} size={28} />
              <h2>{section.shortLabel}</h2>
              <p>{section.description}</p>
              <small>{section.directory}</small>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="shell section-block">
        <div className="section-heading">
          <div>
            <span>FEATURED QUESTS</span>
            <h2>编辑精选</h2>
          </div>
          <Link href="/search">查看全部 →</Link>
        </div>
        <div className="content-grid">
          {featured.map((item) => (
            <ContentCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
}
