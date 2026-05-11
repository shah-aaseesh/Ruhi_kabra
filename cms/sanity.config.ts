import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Ruhi Kabra',

  projectId: '3g7pzqjt',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Global Settings')
              .id('globalSettings')
              .child(
                S.document()
                  .schemaType('globalSettings')
                  .documentId('globalSettings')
              ),
            S.divider(),
            orderableDocumentListDeskItem({type: 'artPiece', title: 'Art Pieces', S, context}),
            orderableDocumentListDeskItem({type: 'writingPiece', title: 'Writing Pieces', S, context}),
            orderableDocumentListDeskItem({type: 'filmProject', title: 'Film Projects', S, context}),
            orderableDocumentListDeskItem({type: 'theatrePlay', title: 'Theatre Plays', S, context}),
          ])
      },
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
