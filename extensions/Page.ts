import { Node, mergeAttributes } from '@tiptap/core'

export const Page = Node.create({
  name: 'page',

  group: 'block',

  content: 'block+', // A page contains blocks (paragraphs, headings, etc.)

  defining: true, // Helps ProseMirror understand this is a structural node

  isolating: true, // Prevents content from being merged across pages automatically

  parseHTML() {
    return [
      { tag: 'div[data-type="page"]' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'page', class: 'page-node' }), 0]
  },
})