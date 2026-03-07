import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://thebrandboxdrycleaners.com'
const DEFAULT_IMAGE = `${SITE_URL}/image/Logo.png`

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  noIndex = false,
  schema,
}) {
  const fullTitle = title ? `${title} | The Brand Box` : 'The Brand Box - Premium Dry Cleaning & Garment Care | Chennai'
  const fullUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const rawDesc = description || 'Premium dry cleaning and garment care in Chennai. 120-hour turnaround, free pickup & delivery, eco-friendly cleaning. Visit our branches in K.K. Nagar, Ashok Nagar, T. Nagar & more.'
  const fullDescription = rawDesc.length > 160 ? rawDesc.substring(0, 157) + '...' : rawDesc

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullUrl} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      )}

      {/* Mobile & Responsive */}
      <meta name="theme-color" content="#00A1E4" />
      <meta name="format-detection" content="telephone=yes, email=yes" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* JSON-LD Schema for fast indexing */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
