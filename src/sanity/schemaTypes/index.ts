import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { productVariant } from './productVariant'
import { settings } from './settings'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, productVariant, settings],
}
