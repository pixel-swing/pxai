'use client'

import { FormEvent, useState } from 'react'

export default function SubmitPage() {
  const [saved, setSaved] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSaved(true) }
  return <div className="shell page-shell"><header className="page-heading"><span>NEW KNOWLEDGE QUEST</span><h1>分享一条知识</h1><p>这是干净的投稿入口骨架，后续可连接审核工作流与内容数据库。</p></header>{saved ? <div className="submit-success pixel-border"><b>SAVE COMPLETE!</b><p>投稿已暂存为演示状态。</p><button className="pixel-button" type="button" onClick={() => setSaved(false)}>继续投稿</button></div> : <form className="submit-form pixel-border" onSubmit={submit}><label>内容标题<input name="title" placeholder="例如：轻松理解 RAG" required /></label><label>所属目录<select name="section" defaultValue="knowledge">{sectionsForSelect.map(([value,label]) => <option value={value} key={value}>{label}</option>)}</select></label><label>摘要<textarea name="summary" placeholder="用两三句话说明这条知识解决什么问题……" required /></label><label>来源链接<input name="source" type="url" placeholder="https://" /></label><button className="pixel-button" type="submit">写入存档</button></form>}</div>
}

const sectionsForSelect = [['knowledge','AI 知识'],['articles','AI 文章'],['prompts','AI 提示词'],['projects','AI 作品'],['models','AI 模型'],['benchmarks','AI 评估'],['daily','AI 日报'],['tutorials','AI 教程']]
