import { defineField, defineType } from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'filmProject',
  title: 'Film Project',
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
      name: 'role',
      title: 'Role / Subtitle',
      type: 'string',
      description: 'E.g., "Director & Editor" or "Documentary"',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Film Project', value: 'film' },
          { title: 'Music Video', value: 'musicVideo' },
          { title: 'Featured Film', value: 'featured' }
        ]
      },
      initialValue: 'film',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'youtubeLink',
      title: 'YouTube Link',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    orderRankField({ type: 'filmProject' })
  ]
})
