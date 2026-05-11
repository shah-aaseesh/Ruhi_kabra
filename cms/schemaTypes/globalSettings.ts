import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutMe',
      title: 'About Me',
      type: 'text',
      description: 'The short bio that appears on the home page.',
    }),
    defineField({
      name: 'location',
      title: 'Current Location',
      type: 'string',
      description: 'E.g., "Pune, Maharashtra"',
    }),
    defineField({
      name: 'university',
      title: 'University',
      type: 'string',
      description: 'E.g., "Ashoka University"',
    }),
    defineField({
      name: 'marqueeText',
      title: 'Marquee Text',
      type: 'string',
      description: 'Text that scrolls horizontally. E.g., "FILMMAKER • ARTIST • WRITER"',
    })
  ]
})
