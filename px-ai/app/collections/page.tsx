import type { Metadata } from 'next'
import CollectionsPage from '../../src/views/CollectionsPage'

export const metadata: Metadata = { title: '我的收藏' }

export default function Page() {
  return <CollectionsPage />
}
