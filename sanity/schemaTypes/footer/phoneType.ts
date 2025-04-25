import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const phoneType = defineType({
  name: 'phone',
  title: 'Phone',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
   
  ],
})
