import type { APIRoute } from "astro";

import galleryInfo from '@/data/meta-gallery.json'

export const GET: APIRoute = ({ request }) => {
  const { url } = request
  const searchParams = new URL(url).searchParams
  
  const offset = Number(searchParams.get('offset') ?? '0')

  const editionInfo = galleryInfo

  return new Response(JSON.stringify(editionInfo.slice(offset))
  )
}