import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Change useCdn to false for development to ensure fresh data
  useCdn: false, 
  // Add this to help with modern Next.js fetch behavior
  perspective: 'published',
})