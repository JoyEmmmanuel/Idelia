// schemaTypes/settings.ts
import { defineType, defineField } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({ 
      name: 'lagosFee', 
      title: 'Lagos Delivery Fee (₦)', 
      type: 'number',
      description: 'Standard delivery rate for addresses within Lagos.'
    }),
    defineField({ 
      name: 'interstateFee', 
      title: 'Interstate Delivery Fee (₦)', 
      type: 'number',
      description: 'Rate for deliveries to Abuja, PH, and other states.'
    }),
    defineField({ 
      name: 'supportWhatsapp', 
      title: 'Support WhatsApp Number', 
      type: 'string',
      description: 'Format: 2347014760004 (No plus sign or spaces)'
    }),
  ],
})