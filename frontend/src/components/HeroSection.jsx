import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading animation
      gsap.from(headingRef.current.children, {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      });

      // Paragraph animation
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        delay: 0.6,
        duration: 1
      });

      // Button animation
      gsap.from(btnRef.current, {
        scale: 0.8,
        opacity: 0,
        delay: 0.9,
        duration: 0.6
      });

      // Background zoom effect on scroll
      gsap.to(imageRef.current, {
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] sm:min-h-[700px] md:min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/image/hhs1.jpg"
          alt="Laundry and dry cleaning service"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30 md:bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center sm:justify-start pt-20 sm:pt-24 md:pt-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="container mx-auto max-w-7xl text-white text-center sm:text-left">

          <div
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight"
          >
          <div className="mb-2">Premium Garment Care</div>
          <div className="text-[#3EC4ED]">Done Right.</div>

          </div>

          <p
            ref={textRef}
            className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-full sm:max-w-lg md:max-w-xl mx-auto sm:mx-0"
          >
            Premium garment care with eco-friendly cleaning,
            72-hour turnaround, and doorstep pickup & delivery.
          </p>

          <div
            ref={btnRef}
            className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start"
          >
            <Link
              to="/contact"
              className="bg-[#00A1E4] hover:bg-[#3EC4ED] transition-all duration-300 px-6 sm:px-7 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl text-white text-sm sm:text-base"
            >
              Get Started <FaArrowRight className="text-xs sm:text-sm" />
            </Link>

            <Link
              to="/services"
              className="border-2 border-white text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base text-center"
            >
              Our Services
            </Link>
          </div>

          {/* Bottom Info Badges */}
          <div className="mt-8 sm:mt-9 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium shadow-md text-xs sm:text-sm whitespace-nowrap">
              ✓ 72-Hour Turnaround
            </div>
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium shadow-md text-xs sm:text-sm whitespace-nowrap">
              ✓ Free Pickup & Delivery
            </div>
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium shadow-md text-xs sm:text-sm whitespace-nowrap">
              ✓ Eco-Friendly Care
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
