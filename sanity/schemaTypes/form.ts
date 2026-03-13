import {defineField, defineType} from 'sanity'

export const form = defineType({
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    defineField({
      name: 'formName',
      title: 'Form Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageLocation',
      title: 'Page Location',
      type: 'string',
      description: 'e.g., contact-page, pricing-page',
    }),
    defineField({
      name: 'keapEmbedCode',
      title: 'Keap Embed Code',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
