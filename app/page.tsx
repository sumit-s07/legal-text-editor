// Notice the imports point to the root components folder
import Editor from '@/components/Editor'
import AppLayout from '@/components/AppLayout'

export default function Home() {
  return (
    <AppLayout>
      <Editor />
    </AppLayout>
  )
}