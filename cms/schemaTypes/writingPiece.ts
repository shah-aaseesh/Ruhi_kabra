import { defineField, defineType } from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'writingPiece',
  title: 'Writing Piece',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'E.g. essay, prose, personal',
      options: {
        list: ['essay', 'prose', 'personal', 'poetry']
      }
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short description of the writing piece',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'entryType',
      title: 'Entry Type',
      type: 'string',
      options: {
        list: [
          { title: 'External Link', value: 'external' },
          { title: 'Blog Post (Internal)', value: 'internal' }
        ],
        layout: 'radio'
      },
      initialValue: 'external',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      hidden: ({ document }) => document?.entryType !== 'external',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      hidden: ({ document }) => document?.entryType !== 'internal',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional cover image for the writing piece',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ],
      hidden: ({ document }) => document?.entryType !== 'internal',
    }),
    orderRankField({ type: 'writingPiece' })
  ]
})
