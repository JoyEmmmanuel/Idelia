/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  // Wrapping in a fragment or a simple div can sometimes help React 19 
  // handle the transition to the Sanity Studio interface better.
  return (
    <div className="min-h-screen">
      <NextStudio config={config} />
    </div>
  )
}