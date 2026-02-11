import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function QuickStats() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { value: 10000, label: "Customers Served", suffix: "+" },
    { value: 72, label: "Standard Turnaround", suffix: "h" },
    { value: 100, label: "Satisfaction Rate", suffix: "%" },
    { value: 5, label: "Average Rating", suffix: "★" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + Slide Animation with ScrollTrigger
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Counter Animation
      statsRef.current.forEach((el, index) => {
        if (!el) return;
        
        let obj = { val: 0 };
        gsap.to(obj, {
          val: stats[index].value,
          duration: 2,
          delay: 0.3 + index * 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            if (el && el.querySelector(".counter")) {
              el.querySelector(".counter").innerText =
                Math.floor(obj.val) + stats[index].suffix;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-r from-[#00A1E4] via-[#3EC4ED] to-[#00A1E4] overflow-hidden"
    >
      {/* Glow Background Effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white,_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/20"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-2.5 md:mb-3 counter leading-tight">
                0
              </div>
              <div className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg tracking-wide leading-tight sm:leading-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickStats;
