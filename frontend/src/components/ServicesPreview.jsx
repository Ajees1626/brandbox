import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaTshirt,
  FaFire,
  FaHandSparkles,
  FaTshirt as FaLaundry,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServicesPreview() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const services = [
    {
      icon: FaTshirt,
      title: "Dry Cleaning",
      description:
        "Luxury fabric-safe dry cleaning with advanced stain removal technology.",
    },
    {
      icon: FaLaundry,
      title: "Premium Laundry",
      description:
        "High-quality wash & fold using eco-friendly premium detergents.",
    },
    {
      icon: FaFire,
      title: "Steam Press",
      description:
        "Crisp, wrinkle-free ironing for business and casual wear.",
    },
    {
      icon: FaHandSparkles,
      title: "Sanitize Wash",
      description:
        "Advanced hygienic treatment perfect for kids & sensitive skin.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Set initial state (important for smooth animation)
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 120,
        scale: 0.8,
        rotateY: 15
      });

      // Advanced Reveal Animation
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        duration: 1.4,
        stagger: {
          each: 0.2,
          from: "center"
        },
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        }
      });

    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('/image/h1.jpg')",
      }}
    >
      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-[#00A1E4]/80 to-black/10"></div>

      {/* Soft Glow Effect */}
      <div className="absolute top-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-blue-500/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-cyan-400/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight">
            Premium Care for Every Fabric
          </h2>
          <p className="text-gray-300 max-w-full sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Experience world-class laundry and dry cleaning services designed
            for elegance, hygiene, and ultimate convenience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={addToRefs}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 
                rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 text-white shadow-xl sm:shadow-2xl 
                hover:scale-105 transition-all duration-500"
              >
                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center">
                    <div className="bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] p-3 sm:p-4 md:p-5 rounded-full shadow-lg">
                      <Icon className="text-2xl sm:text-2.5xl md:text-3xl text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-center mb-3 sm:mb-3.5 md:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-center text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    {service.description}
                  </p>

                  <div className="text-center mt-6 sm:mt-7 md:mt-8">
                    <Link
                      to="/services"
                      className="text-[#3EC4ED] hover:text-white transition font-medium text-sm sm:text-base"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-18 lg:mt-20">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] 
            text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full shadow-xl sm:shadow-2xl 
            hover:scale-110 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
