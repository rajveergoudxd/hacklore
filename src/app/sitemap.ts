import type { MetadataRoute } from 'next'

/**
 * Generates a dynamic sitemap for the Hacklore website.
 * Next.js automatically serves this at /sitemap.xml
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hacklore.com'
    const currentDate = new Date()

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Add more routes here as your site grows, for example:
        // {
        //   url: `${baseUrl}/about`,
        //   lastModified: currentDate,
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
        // {
        //   url: `${baseUrl}/tracks`,
        //   lastModified: currentDate,
        //   changeFrequency: 'weekly',
        //   priority: 0.9,
        // },
        // {
        //   url: `${baseUrl}/register`,
        //   lastModified: currentDate,
        //   changeFrequency: 'weekly',
        //   priority: 0.9,
        // },
    ]
}
