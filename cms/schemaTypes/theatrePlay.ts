import { defineField, defineType } from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'theatrePlay',
  title: 'Theatre Play',
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
      name: 'dates',
      title: 'Dates',
      type: 'string',
      description: 'E.g., "April 2024"',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'youtubeLink',
      title: 'YouTube Link',
      type: 'url',
    }),
    defineField({
      name: 'driveLink',
      title: 'Google Drive Link',
      type: 'url',
    }),
    orderRankField({ type: 'theatrePlay' })
  ]
})
