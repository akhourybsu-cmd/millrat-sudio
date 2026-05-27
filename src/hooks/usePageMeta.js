import { useEffect } from 'react'

/**
 * Sets document.title and meta description on each page.
 * For full per-page OG meta (social previews), migrate to Next.js or add react-helmet-async.
 * See /docs/integrations.md for details.
 */
export function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc && description) metaDesc.setAttribute('content', description)
  }, [title, description])
}
