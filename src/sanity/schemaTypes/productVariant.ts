// schemaTypes/productVariant.ts
import { defineType, defineField } from 'sanity'

export const productVariant = defineType({
  name: 'productVariant',
  title: 'Wig Variant',
  type: 'object',
  fields: [
    defineField({ name: 'length', title: 'Length (e.g. 12")', type: 'string' }),
    defineField({ name: 'color', title: 'Color', type: 'string' }),
    defineField({ name: 'price', title: 'Price (₦)', type: 'number' }),
    defineField({ name: 'stock', title: 'Stock Quantity', type: 'number' }),
    defineField({ name: 'sku', title: 'SKU', type: 'string' }),
    defineField({
      name: 'images',
      title: 'Variant Images',
      type: 'array',
      of: [{ type: 'image',
        options: {
        hotspot: true // This enables the magic "target" button
      }
       }]
    }),
  ],
})