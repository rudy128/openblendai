import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'techIcon',
  title: 'Tech Icon',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Chains', value: 'chains' },
          { title: 'Tools', value: 'tools' },
          { title: 'Services', value: 'services' },
          { title: 'Web', value: 'web' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Database', value: 'database' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'Cloud', value: 'cloud' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order within category',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
  },
});
