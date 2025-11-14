import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name (e.g., gear, key, graph)',
    }),
    defineField({
      name: 'priceString',
      title: 'Price',
      type: 'string',
      description: 'e.g., "from 2,000 $"',
    }),
    defineField({
      name: 'durationString',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "7-14 days"',
    }),
    defineField({
      name: 'hasTag',
      title: 'Has Tag',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'tagText',
      title: 'Tag Text',
      type: 'string',
      description: 'e.g., "Ready-made solution available"',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'priceString',
    },
  },
});
