import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = '3g7pzqjt'
export const dataset = 'production'
export const apiVersion = '2024-03-01'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !import.meta.env.DEV, // Bypass CDN in development for instant updates
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => {
  return builder.image(source)
}
