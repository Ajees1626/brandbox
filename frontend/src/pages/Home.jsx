import SEO from '../components/SEO'
import { SITE_URL, buildKeywords, BRAND_SHORT } from '../utils/seoConfig'
import HeroSection from '../components/HeroSection'
import QuickStats from '../components/QuickStats'
import HowItWorks from '../components/HowItWorks'
import ServicesPreview from '../components/ServicesPreview'
import WhyChooseUs from '../components/WhyChooseUs'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <div>
      <SEO
        title="Premium Dry Cleaning & Garment Care | Chennai"
        description="The Brand Box — Brand Box dry cleaning in Chennai (thebrandboxdrycleaning). Premium garment care, 120-hour turnaround, free pickup & delivery. Branches: K.K. Nagar, Ashok Nagar, Adyar, T. Nagar & more."
        path="/"
        keywords={buildKeywords('home, The Brand Box official')}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: SITE_URL,
              name: BRAND_SHORT,
              alternateName: [
                'Brand Box Dry Cleaning',
                'The Brand Box Dry Cleaners',
                'thebrandboxdrycleaning',
                'TheBrandBox dry cleaning',
              ],
              description:
                'The Brand Box — premium dry cleaning and garment care in Chennai. Brand Box dry cleaning.',
              publisher: { '@id': `${SITE_URL}/#business` },
              inLanguage: 'en-IN',
            },
            {
              '@type': 'WebPage',
              '@id': `${SITE_URL}/#webpage`,
              url: `${SITE_URL}/`,
              name: `${BRAND_SHORT} — Premium Dry Cleaning Chennai`,
              description:
                'The Brand Box offers Brand Box dry cleaning and garment care in Chennai.',
              isPartOf: { '@id': `${SITE_URL}/#website` },
              about: { '@id': `${SITE_URL}/#business` },
              inLanguage: 'en-IN',
            },
            {
              '@type': 'LocalBusiness',
              '@id': `${SITE_URL}/#business`,
              name: 'The Brand Box Dry Cleaners',
              alternateName: [
                'The Brand Box',
                'Brand Box Dry Cleaning',
                'thebrandboxdrycleaning',
              ],
              url: SITE_URL,
              telephone: '+91 99520 50527',
              image: `${SITE_URL}/image/Logo.png`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chennai',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
              },
              areaServed: { '@type': 'City', name: 'Chennai' },
            },
          ],
        }}
      />
      <HeroSection />
      <QuickStats />
      <HowItWorks />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home
