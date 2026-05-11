import { useQuery } from '@tanstack/react-query'
import { sanityClient } from '../lib/sanity'

export function useGlobalSettings() {
  return useQuery({
    queryKey: ['globalSettings'],
    queryFn: async () => {
      const data = await sanityClient.fetch(`*[_type == "globalSettings"][0]`)
      return data || {}
    }
  })
}

export function useArtPieces() {
  return useQuery({
    queryKey: ['artPieces'],
    queryFn: async () => {
      return sanityClient.fetch(`*[_type == "artPiece"] | order(orderRank)`)
    }
  })
}

export function useWritings() {
  return useQuery({
    queryKey: ['writings'],
    queryFn: async () => {
      return sanityClient.fetch(`*[_type == "writingPiece"] | order(orderRank)`)
    }
  })
}

export function useWritingBySlug(slug: string) {
  return useQuery({
    queryKey: ['writing', slug],
    queryFn: async () => {
      return sanityClient.fetch(`*[_type == "writingPiece" && slug.current == $slug][0]`, { slug })
    },
    enabled: !!slug
  })
}

export function useFilmProjects() {
  return useQuery({
    queryKey: ['filmProjects'],
    queryFn: async () => {
      return sanityClient.fetch(`*[_type == "filmProject"] | order(orderRank)`)
    }
  })
}

export function useTheatrePlays() {
  return useQuery({
    queryKey: ['theatrePlays'],
    queryFn: async () => {
      return sanityClient.fetch(`*[_type == "theatrePlay"] | order(orderRank)`)
    }
  })
}
