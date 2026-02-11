import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CTASection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(leftRef.current, {
        opacity: 0,
        x: -80,
        duration: 1.1,
        ease: "power3.out",
      }).from(
        rightRef.current,
        {
          opacity: 0,
          x: 80,
          duration: 1.1,
          ease: "power3.out",
        },
        "-=0.7"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef7ff] via-[#E4F4F9] to-[#e6f4ff]"></div>

      {/* Soft Moving Glow */}
      <div className="absolute -top-20 sm:-top-24 md:-top-32 -left-20 sm:-left-24 md:-left-32 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#00A1E4]/10 blur-[120px] sm:blur-[150px] md:blur-[180px] rounded-full"></div>
      <div className="absolute -bottom-20 sm:-bottom-24 md:-bottom-32 -right-20 sm:-right-24 md:-right-32 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-cyan-400/10 blur-[120px] sm:blur-[150px] md:blur-[180px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Glass Container */}
        <div className="bg-white/60 backdrop-blur-2xl border border-white/40 
        rounded-2xl sm:rounded-3xl lg:rounded-[40px] shadow-lg sm:shadow-xl md:shadow-[0_20px_80px_rgba(0,0,0,0.08)] 
        px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 lg:py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div ref={leftRef} className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
                Elevate Your <span className="text-[#00A1E4]">Garment Care</span> Experience
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-full md:max-w-lg mx-auto md:mx-0 px-2 sm:px-0">
                Discover premium laundry solutions crafted with precision,
                eco-conscious technology, and unmatched attention to detail.
                Your fabrics deserve excellence.
              </p>
            </div>

            {/* RIGHT ACTION AREA */}
            <div ref={rightRef} className="flex flex-col gap-4 sm:gap-5 md:gap-6">

              <Link
                to="/contact"
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl
                bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED]
                text-white font-semibold text-sm sm:text-base md:text-lg
                shadow-lg sm:shadow-xl transition-all duration-300
                hover:shadow-2xl hover:-translate-y-1 text-center"
              >
                Book Premium Pickup
              </Link>

              <Link
                to="/services"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl
                border-2 border-[#00A1E4]/40
                text-[#00A1E4] font-semibold text-sm sm:text-base md:text-lg
                backdrop-blur-md bg-white/40
                transition-all duration-300
                hover:bg-[#00A1E4] hover:text-white
                hover:-translate-y-1 text-center"
              >
                Explore Our Services
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
