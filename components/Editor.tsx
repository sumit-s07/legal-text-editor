'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h2>Petition for Alien Relative</h2>
      <p><strong>To:</strong> USCIS<br><strong>From:</strong> John Doe</p>
      <p>Subject: Immediate Relative Petition</p>
      <p>Dear Sir/Madam,</p>
      <p>I am writing to formally petition...</p>
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg focus:outline-none max-w-none',
      },
    },
    immediatelyRender: false, // <--- ADD THIS LINE HERE
  })

  if (!editor) return null

  return (
    <div className="flex flex-col items-center">
      {/* THE PAGE */}
      <div 
        className="print-container bg-white shadow-xl border border-gray-200 flex flex-col"
        style={{
          width: '8.5in',
          height: '11in',
          padding: '1in',
          marginBottom: '2rem'
        }}
      >
        <EditorContent editor={editor} className="h-full w-full" />
      </div>

      <div className="no-print mt-2 text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
        Page 1 of 1 <span className="text-lb-600 mx-2">•</span> US Letter
      </div>
    </div>
  )
}