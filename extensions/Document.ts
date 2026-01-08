import Document from '@tiptap/extension-document'

export const CustomDocument = Document.extend({
  content: 'page+', // Our document must consist of one or more pages
})