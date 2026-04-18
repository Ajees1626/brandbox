import { Helmet } from 'react-helmet-async'
import { SITE_URL, BRAND_FULL, BRAND_SHORT, buildKeywords } from '../utils/seoConfig'

const DEFAULT_IMAGE = `${SITE_URL}/image/Logo.png`

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  noIndex = false,
  schema,
  keywords,
}) {
  const keywordContent = keywords ?? buildKeywords()
  const fullTitle = title
    ? `${title} | ${BRAND_SHORT} — Brand Box Dry Cleaning Chennai`
    : `${BRAND_SHORT} — Premium Dry Cleaning Chennai | Brand Box Dry Cleaning`
  const fullUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const rawDesc =
    description ||
    `${BRAND_SHORT} (Brand Box dry cleaning) offers premium garment care in Chennai. The Brand Box — thebrandboxdrycleaning: 120-hour turnaround, pickup & delivery.`
  const fullDescription = rawDesc.length > 160 ? rawDesc.substring(0, 157) + '...' : rawDesc

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywordContent} />
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <link rel="canonical" href={fullUrl} />
      <link rel="alternate" hrefLang="en-in" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}
      <meta name="googlebot" content="index, follow" />

      <meta name="theme-color" content="#00A1E4" />
      <meta name="format-detection" content="telephone=yes, email=yes" />
      <meta name="author" content={BRAND_FULL} />
      <meta name="publisher" content={BRAND_FULL} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content={`${BRAND_SHORT} — Brand Box Dry Cleaning`} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
