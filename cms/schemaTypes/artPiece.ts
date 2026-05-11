import { defineField, defineType } from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'artPiece',
  title: 'Art Piece',
  type: 'document',
  orderings: [orderRankOrdering],
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
    orderRankField({ type: 'artPiece' })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
