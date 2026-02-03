'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

// Define which types should only ever have ONE document (Singletons)
const singletonTypes = new Set(['settings'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema: {
    ...schema,
    // This hides the 'settings' from the "Create New Document" (+) menu
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    // This removes the 'Delete' and 'Duplicate' options for settings
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})