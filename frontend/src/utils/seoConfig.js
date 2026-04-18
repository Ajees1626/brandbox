/** Site-wide SEO constants — brand terms for Google & meta */
export const SITE_URL = 'https://thebrandboxdrycleaners.com'

export const BRAND_FULL = 'The Brand Box Dry Cleaners'
export const BRAND_SHORT = 'The Brand Box'

/** Core search phrases the business wants to rank for */
export const CORE_BRAND_KEYWORDS = [
  'thebrandboxdrycleaning',
  'the brand box',
  'brand box dry cleaning',
  'The Brand Box dry cleaners',
  'Brand Box Chennai',
  'The Brand Box Chennai',
  'dry cleaning Chennai',
  'garment care Chennai',
  'premium dry cleaning',
  'K.K. Nagar dry cleaning',
  'T. Nagar dry cleaning',
  'Adyar dry cleaning',
].join(', ')

export function buildKeywords(pageSpecific = '') {
  const extra = pageSpecific?.trim()
  return extra ? `${CORE_BRAND_KEYWORDS}, ${extra}` : CORE_BRAND_KEYWORDS
}
