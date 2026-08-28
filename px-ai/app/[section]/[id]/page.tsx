import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { contentItems } from '../../../src/data/content'
import ContentDetail from '../../../src/views/ContentDetail'

type Props = { params: Promise<{ section: string; id: string }> }

export function generateStaticParams() {
  return contentItems.map((item) => ({ section: item.section, id: item.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, id } = await params
  const item = contentItems.find((entry) => entry.section === section && entry.id === id)
  return item ? { title: item.title, description: item.summary } : {}
}

export default async function Page({ params }: Props) {
  const { section, id } = await params
  const item = contentItems.find((entry) => entry.section === section && entry.id === id)
  if (!item) notFound()
  return <ContentDetail slug={section} id={id} />
}
