import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSection, sections } from '../../src/data/navigation'
import SectionPage from '../../src/views/SectionPage'

type Props = { params: Promise<{ section: string }> }

export function generateStaticParams() {
  return sections.map((section) => ({ section: section.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section: slug } = await params
  const section = getSection(slug)
  return section ? { title: section.label, description: section.description } : {}
}

export default async function Page({ params }: Props) {
  const { section: slug } = await params
  const section = getSection(slug)
  if (!section) notFound()
  return <SectionPage section={section} />
}
