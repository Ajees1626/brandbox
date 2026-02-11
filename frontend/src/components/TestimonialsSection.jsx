import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      quote: "Exceptional service! Clothes come back fresh and perfectly packed every time.",
      author: "Rahul Kumar",
      role: "Regular Customer",
    },
    {
      quote: "Pickup and delivery is super smooth. Premium wash quality.",
      author: "Aishwarya S",
      role: "Working Professional",
    },
    {
      quote: "Reliable and hygienic service. Truly impressive sanitize wash.",
      author: "Mohammed Ali",
      role: "Business Owner",
    },
    {
      quote: "My white shirts look brand new every time!",
      author: "Karthik R",
      role: "Entrepreneur",
    },
    {
      quote: "Fast turnaround and very professional service.",
      author: "Divya P",
      role: "IT Employee",
    },
    {
      quote: "Very impressed with packaging and care.",
      author: "Sanjay M",
      role: "Corporate Client",
    },
    {
      quote: "Eco-friendly process is a big plus point.",
      author: "Nivetha L",
      role: "Home Maker",
    },
    {
      quote: "Affordable and premium quality at the same time.",
      author: "Arjun V",
      role: "Student",
    },
    {
      quote: "Customer support is extremely responsive.",
      author: "Farhan A",
      role: "Startup Founder",
    },
    {
      quote: "Best laundry service I've ever used!",
      author: "Meera K",
      role: "Designer",
    },
  ];

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // GSAP Animation when index changes
  useEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-[#E4F4F9] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-blue-400/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-cyan-300/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight px-2 sm:px-0">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-0">
          Trusted by thousands of happy customers for premium garment care.
        </p>

        {/* Animated Card */}
        <div
          ref={cardRef}
          className="relative bg-white/70 backdrop-blur-xl 
          border border-white/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 
          shadow-xl sm:shadow-2xl transition-all duration-500"
        >
          <TestimonialCard {...testimonials[index]} />
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-9 lg:mt-10 gap-2 sm:gap-2.5 md:gap-3 flex-wrap px-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? "bg-[#00A1E4] w-6 sm:w-7 md:w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
