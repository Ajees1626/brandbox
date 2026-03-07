import SEO from "../components/SEO";
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
        description="Learn about The Brand Box - Chennai's trusted premium dry cleaning and garment care brand. Our journey, mission, and commitment to quality since 2012."
        path="/about"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About The Brand Box Dry Cleaners',
          url: 'https://thebrandboxdrycleaners.com/about',
          description: 'Our journey, mission, and commitment to quality since 2012.',
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
