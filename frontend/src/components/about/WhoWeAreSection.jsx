import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function WhoWeAreSection() {
  const [counters, setCounters] = useState({ customers: 0, turnaround: 0, satisfaction: 0 });
  const statsRef = useRef(null);
  const ref = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  useEffect(() => {
    if (!statsInView) return;
    let startTime = Date.now();
    const duration = 2000;
    const targetValues = { customers: 10000, turnaround: 72, satisfaction: 100 };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      setCounters({
        customers: Math.floor(targetValues.customers * easeOutCubic),
        turnaround: Math.floor(targetValues.turnaround * easeOutCubic),
        satisfaction: Math.floor(targetValues.satisfaction * easeOutCubic),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [statsInView]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-white to-[#E4F4F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="space-y-4 sm:space-y-5 md:space-y-6"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900"
            initial="hidden"
            animate={controls}
          >
            {"Who We Are".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.05, duration: 0.3, ease: "easeOut" } },
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {[
            { text: "The Brand Box was founded with a simple mission — to make premium garment care accessible and convenient for everyone. In today's fast-paced world, you deserve a service you can trust.", delay: 0.5 },
            { text: "With years of expertise, we combine traditional cleaning techniques with advanced technology to deliver superior results for every fabric.", delay: 0.7 },
            { text: "Our team of skilled professionals ensures every garment receives precision care, hygiene, and attention to detail.", delay: 0.9 },
          ].map((para, pIdx) => (
            <motion.p
              key={pIdx}
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: para.delay, staggerChildren: 0.02, delayChildren: 0.1 } },
              }}
            >
              {para.text.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5"
        >
          {[
            { value: counters.customers.toLocaleString() + "+", label: "Happy Customers", gradient: "from-[#00A1E4] to-[#3EC4ED]", delay: 0.1 },
            { value: counters.turnaround + "h", label: "Average Turnaround", gradient: "from-[#3EC4ED] to-[#00A1E4]", delay: 0.2 },
            { value: counters.satisfaction + "%", label: "Satisfaction Rate", gradient: "from-[#00A1E4] via-[#3EC4ED] to-[#00A1E4]", delay: 0.3, border: true },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${stat.border ? "border-2 border-white/20" : ""}`}
            >
              <motion.div
                className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-[#E4F4F9]/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              ></motion.div>
              <div className="relative z-10 text-center">
                <motion.div
                  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold text-white mb-1 sm:mb-1.5 md:mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-white/95 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide px-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
