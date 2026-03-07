import SEO from '../components/SEO'
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
        description="The Brand Box offers premium dry cleaning and garment care in Chennai. 120-hour turnaround, free pickup & delivery, eco-friendly cleaning. Branches in K.K. Nagar, Ashok Nagar, T. Nagar & more."
        path="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'The Brand Box - Premium Dry Cleaning & Garment Care | Chennai',
          description: 'Premium dry cleaning and garment care in Chennai. 120-hour turnaround, free pickup & delivery.',
          url: 'https://thebrandboxdrycleaners.com/',
          isPartOf: { '@type': 'WebSite', url: 'https://thebrandboxdrycleaners.com' },
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
