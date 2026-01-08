'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Page } from '@/extensions/Page'
import { CustomDocument } from '@/extensions/Document'

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false, // 1. Disable the default Document
      }),
      CustomDocument,    // 2. Add our custom Document
      Page,              // 3. Add our Page node
    ],
    // 4. Update initial content to match the new schema (must be wrapped in a page)
    content: `
      <div data-type="page">
        <h2>Petition for Alien Relative</h2>
        <p><strong>To:</strong> USCIS<br><strong>From:</strong> John Doe</p>
        <p>Subject: Immediate Relative Petition</p>
        <p>Dear Sir/Madam,</p>
        <p>I am writing to formally petition...</p>
      </div>
    `,
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <div className="flex flex-col items-center">
      {/* REMOVED THE WRAPPER DIV STYLING 
         The editor now renders the pages directly via CSS (.page-node)
      */}
      <div className="print-container flex flex-col items-center w-full">
        <EditorContent editor={editor} />
      </div>

      <div className="no-print mt-2 text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
        Page 1 of 1 <span className="text-lb-600 mx-2">•</span> US Letter
      </div>
    </div>
  )
}