import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'artPiece',
  title: 'Art Piece',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Use this to manually order the pieces (lower numbers come first)',
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
