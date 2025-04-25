import {TagIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const footerContentType = defineType({
  name: 'footerContent',
  title: 'Footer Content',
  type: 'document',
  icon: TagIcon, 
  fields: [
    defineField({
          name: 'phoneNumbers',
          title: 'Phone Numbers',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: {type: 'phone'}})],
        }),
  
  ],
})
