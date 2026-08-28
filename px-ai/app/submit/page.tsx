import type { Metadata } from 'next'
import SubmitPage from '../../src/views/SubmitPage'

export const metadata: Metadata = { title: '分享知识' }

export default function Page() {
  return <SubmitPage />
}
