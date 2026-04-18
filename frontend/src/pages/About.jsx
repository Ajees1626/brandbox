import SEO from "../components/SEO";
import { SITE_URL, buildKeywords } from "../utils/seoConfig";
import TestimonialsSection from "../components/TestimonialsSection";
import {
  AboutHeroSection,
  WhoWeAreSection,
  MissionVisionSection,
  WhyTrustUsSection,
  OurJourneySection,
  AboutCTASection,
} from "../components/about";

function About() {
  return (
    <div className="overflow-hidden font-sans">
      <SEO
        title="About Us"
        description="About The Brand Box — Brand Box dry cleaning Chennai since 2012. Learn our story: the brand box, thebrandboxdrycleaning, trusted garment care across Chennai."
        path="/about"
        keywords={buildKeywords('about The Brand Box, brand story')}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About The Brand Box — Brand Box Dry Cleaning',
          url: `${SITE_URL}/about`,
          description:
            'The Brand Box dry cleaners — our journey, mission, and quality since 2012 in Chennai.',
          isPartOf: { '@type': 'WebSite', name: 'The Brand Box', url: SITE_URL },
          about: {
            '@type': 'LocalBusiness',
            name: 'The Brand Box Dry Cleaners',
            alternateName: ['The Brand Box', 'Brand Box dry cleaning', 'thebrandboxdrycleaning'],
            url: SITE_URL,
          },
          inLanguage: 'en-IN',
        }}
      />
      <AboutHeroSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <WhyTrustUsSection />
      <OurJourneySection />
      <TestimonialsSection />
      <AboutCTASection />
    </div>
  );
}

export default About;
