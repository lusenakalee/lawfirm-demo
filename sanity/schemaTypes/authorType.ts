import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'PracticeHead',
      title: 'Practice Head',
      type: 'string',
    }),
    defineField({
      name: 'Email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email(),
    }),
    defineField({
      name: 'YOR',
      title: 'Year of Registration',
      type: 'string',
    }),
    defineField({
      name: 'Qualifications',
      title: 'Qualifications',
      type: 'string',
    }),
    defineField({
      name: 'Status',
      title: 'Status',
      type: 'string',
    }),
    defineField({
      name: 'MainPracticeAreas',
      title: 'Main Practice Areas',
      type: 'text',
    }),
   
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
