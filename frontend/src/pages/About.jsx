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
