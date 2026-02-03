// schemaTypes/product.ts
import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Wigs',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Product Name', type: 'string' }),
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'This is the primary image shown on the product page and shop list.',
    }),
    defineField({ name: 'description', title: 'Benefit-focused Description', type: 'text' }),
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Enter the price in Naira (do not include commas or currency symbols)',
    },
    defineField({
      name: 'variants',
      title: 'Wig Variants',
      type: 'array',
      of: [{ type: 'productVariant' }] // This links to the code above!
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['active', 'inactive'] },
      initialValue: 'active'
    }),

defineField({
  name: 'isMasterpiece',
  title: 'Is this a Masterpiece?',
  description: 'If turned on, this wig will appear in the rotating homepage section.',
  type: 'boolean',
  initialValue: false
}),

{
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {
    source: 'name', // This automatically creates the slug from the product name
    maxLength: 96,
  },
  validation: (Rule) => Rule.required(),
},

  ],
})