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
