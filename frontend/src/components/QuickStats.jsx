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

      /* ================= PREMIUM CARD REVEAL ================= */

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ================= COUNTER ANIMATION - Runs every time section is in view ================= */

      const runCounters = () => {
        statsRef.current.forEach((el, index) => {
          if (!el) return;
          const counterEl = el.querySelector(".counter");
          if (!counterEl) return;

          counterEl.innerText = "0" + stats[index].suffix;
          let obj = { val: 0 };

          gsap.to(obj, {
            val: stats[index].value,
            duration: 2.2,
            delay: index * 0.2,
            ease: "power2.out",
            onUpdate: function () {
              const formatted = Math.floor(obj.val).toLocaleString();
              counterEl.innerText = formatted + stats[index].suffix;
            },
          });
        });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: runCounters,
        onEnterBack: runCounters,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Company Performance Statistics"
      className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#00A1E4] via-[#3EC4ED] to-[#00A1E4] overflow-hidden"
    >
      {/* Animated Glow Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-white rounded-full blur-3xl animate-pulse bottom-[-120px] right-[-100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">

          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/20"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 counter tracking-tight">
                0
              </div>

              <h3 className="text-gray-100 text-sm md:text-base lg:text-lg font-medium tracking-wide">
                {stat.label}
              </h3>

              {/* Subtle underline animation */}
              <div className="mt-3 h-[2px] w-0 bg-white mx-auto transition-all duration-500 group-hover:w-16"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default QuickStats;
