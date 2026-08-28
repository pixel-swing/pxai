import type { Metadata } from 'next'
import SearchPage from '../../src/views/SearchPage'

export const metadata: Metadata = { title: '搜索' }

export default function Page() {
  return <SearchPage />
}
