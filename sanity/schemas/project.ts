import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'fr', title: 'French', type: 'string' },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'fr', title: 'French', type: 'text' },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Reference to category for glow color',
    }),
    defineField({
      name: 'categoryLegacy',
      title: 'Category (Legacy)',
      type: 'string',
      options: {
        list: [
          { title: 'Crypto Wallet', value: 'crypto-wallet' },
          { title: 'Exchange', value: 'exchange' },
          { title: 'DeFi', value: 'defi' },
          { title: 'NFT', value: 'nft' },
          { title: 'Blockchain', value: 'blockchain' },
          { title: 'Smart Contract', value: 'smart-contract' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which projects appear on the page',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
      description: 'Link to the live project website',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
      description: 'Image gallery for the project details page (e.g., phone mockups)',
    }),
    defineField({
      name: 'task',
      title: 'Task',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'fr', title: 'French', type: 'text' },
      ],
      description: 'Description of the project task/objective',
    }),
    defineField({
      name: 'result',
      title: 'Result',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'fr', title: 'French', type: 'text' },
      ],
      description: 'Description of the project result/outcome',
    }),
    defineField({
      name: 'developmentTime',
      title: 'Development Time',
      type: 'string',
      description: 'e.g., "1 month", "2 weeks"',
    }),
    defineField({
      name: 'stack',
      title: 'Technology Stack',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
      description: 'Technologies used in this project',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage',
      category: 'category',
    },
    prepare(selection: { title?: string; media?: any; category?: string }) {
      const { category } = selection;
      return {
        ...selection,
        subtitle: category ? `Category: ${category}` : 'No category',
      };
    },
  },
});
