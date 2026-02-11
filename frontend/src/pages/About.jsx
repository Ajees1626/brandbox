import { FaCheckCircle, FaAward, FaUsers, FaHeart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import TestimonialsSection from "../components/TestimonialsSection";

function About() {
  const values = [
    {
      icon: FaAward,
      title: "Quality First",
      description:
        "We never compromise on quality. Every garment is treated with the utmost care and attention.",
    },
    {
      icon: FaUsers,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We go the extra mile to ensure you're happy with our service.",
    },
    {
      icon: FaHeart,
      title: "Eco-Friendly",
      description:
        "We care about the environment and use eco-friendly cleaning methods whenever possible.",
    },
    {
      icon: FaCheckCircle,
      title: "Reliable Service",
      description:
        "Count on us for consistent, on-time delivery and professional service every time.",
    },
  ];

  // Dynamic counters - trigger when stats section is in view
  const [counters, setCounters] = useState({ customers: 0, turnaround: 0, satisfaction: 0 });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!statsInView) return;

    let startTime = Date.now();
    const duration = 2000; // 2 seconds animation
    const targetValues = { customers: 10000, turnaround: 72, satisfaction: 100 };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      setCounters({
        customers: Math.floor(targetValues.customers * easeOutCubic),
        turnaround: Math.floor(targetValues.turnaround * easeOutCubic),
        satisfaction: Math.floor(targetValues.satisfaction * easeOutCubic),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [statsInView]);

  // Scroll animations
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="overflow-hidden font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] md:min-h-screen text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/ahs1.jpg"
            alt="About BrandBox"
            className="w-full h-full object-cover object-center"
          />
          {/* Brand Color Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A1E4]/80 via-[#3EC4ED]/70 to-[#E4F4F9]/60"></div>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/30 md:bg-black/20"></div>
        </div>

        {/* Soft Glow Effects with Brand Colors */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#00A1E4]/20 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#3EC4ED]/20 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] rounded-full"></div>

        <div className="relative text-center px-4 sm:px-6 md:px-8 max-w-4xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 sm:mb-5 md:mb-6"
          >
            About <span className="bg-gradient-to-r from-[#00A1E4] via-[#3EC4ED] to-[#00A1E4] bg-clip-text text-transparent">BrandBox</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium drop-shadow-lg px-2 sm:px-0"
          >
            India's trusted premium laundry and dry-cleaning brand
          </motion.p>
        </div>

        {/* Bottom Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[80px] sm:h-[100px] md:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,160C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-white to-[#E4F4F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Content */}
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
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    staggerChildren: 0.02,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {"The Brand Box was founded with a simple mission — to make premium garment care accessible and convenient for everyone. In today's fast-paced world, you deserve a service you can trust.".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                    staggerChildren: 0.02,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {"With years of expertise, we combine traditional cleaning techniques with advanced technology to deliver superior results for every fabric.".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.9,
                    staggerChildren: 0.02,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {"Our team of skilled professionals ensures every garment receives precision care, hygiene, and attention to detail.".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5"
          >
            {/* Happy Customers Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Animated Background Pattern */}
              <motion.div 
                className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-[#E4F4F9]/30 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
              
              <div className="relative z-10 text-center">
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-1 sm:mb-1.5 md:mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  {counters.customers.toLocaleString()}+
                </motion.div>
                <motion.div 
                  className="text-white/95 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide px-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Happy Customers
                </motion.div>
              </div>
            </motion.div>

            {/* Average Turnaround Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gradient-to-br from-[#3EC4ED] to-[#00A1E4] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Animated Background Pattern */}
              <motion.div 
                className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-[#E4F4F9]/30 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7
                }}
              ></motion.div>
              
              <div className="relative z-10 text-center">
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-1 sm:mb-1.5 md:mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  {counters.turnaround}h
                </motion.div>
                <motion.div 
                  className="text-white/95 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide px-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Average Turnaround
                </motion.div>
              </div>
            </motion.div>

            {/* Satisfaction Rate Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gradient-to-br from-[#00A1E4] via-[#3EC4ED] to-[#00A1E4] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 border-white/20"
            >
              {/* Animated Background Pattern */}
              <motion.div 
                className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-[#00A1E4]/30 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-white/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
              
              <div className="relative z-10 text-center">
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-1 sm:mb-1.5 md:mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  {counters.satisfaction}%
                </motion.div>
                <motion.div 
                  className="text-white/95 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide px-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Satisfaction Rate
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#E4F4F9] to-[#f5fbff] p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition duration-500"
          >
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4">Our Mission</h2>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
              To provide premium-quality laundry and dry cleaning services
              that save time while delivering exceptional garment care.
              We strive to make professional care effortless and accessible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#f5fbff] to-[#E4F4F9] p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition duration-500"
          >
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4">Our Vision</h2>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
              To become the most trusted garment care service, recognized
              for our commitment to quality, sustainability, and customer
              satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY TRUST US ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-[#f8fcff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4 leading-tight px-2 sm:px-0"
            >
              Why Customers Trust Us
            </motion.h2>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-0">
              Built on reliability, excellence, and premium service standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 text-center shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3"
                >
                  <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                    <div className="bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] p-3 sm:p-4 md:p-5 rounded-full shadow-md">
                      <Icon className="text-white text-lg sm:text-xl md:text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">{value.title}</h3>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OUR JOURNEY TIMELINE ================= */}
      <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            <p className="text-[#00A1E4] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
              OUR JOURNEY
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4 leading-tight px-2 sm:px-0">
              A story of care & commitment
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-0">
              From a small idea to a trusted garment-care brand.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Background Timeline Line (Static) */}
            <div className="absolute left-6 sm:left-8 md:left-10 lg:left-12 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Animated Timeline Line (Fills on Scroll) */}
            <motion.div
              className="absolute left-6 sm:left-8 md:left-10 lg:left-12 top-0 w-0.5 bg-gradient-to-b from-[#00A1E4] via-[#3EC4ED] to-[#E4F4F9]"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {[
                {
                  year: "2019",
                  title: "BrandBox Founded",
                  description: "Started with a vision to modernize laundry and dry-cleaning services with quality and trust.",
                },
                {
                  year: "2020",
                  title: "Doorstep Services Launched",
                  description: "Introduced free pickup & delivery to make garment care effortless.",
                },
                {
                  year: "2022",
                  title: "10,000+ Happy Customers",
                  description: "Expanded operations and built long-term customer relationships.",
                },
                {
                  year: "2024",
                  title: "Premium Care Upgrade",
                  description: "Adopted eco-friendly processes and luxury finishing standards.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="relative flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8"
                >
                  {/* Timeline Marker with Animation */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="relative z-10 flex-shrink-0"
                  >
                    <motion.div
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] border-2 sm:border-3 md:border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    ></motion.div>
                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#00A1E4] opacity-0"
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    ></motion.div>
                  </motion.div>

                  {/* Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex-1 bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-2 sm:mb-2.5 md:mb-3">
                      <span className="text-[#00A1E4] font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <TestimonialsSection />

      {/* ================= CTA SECTION ================= */}
      <section className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 bg-gradient-to-br from-[#E4F4F9] via-[#E4F4F9] to-[#E4F4F9] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] bg-[#00A1E4]/10 rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px] lg:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] bg-[#3EC4ED]/10 rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px] lg:blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4 leading-tight px-2 sm:px-0"
            >
              Ready to Experience <span className="text-[#00A1E4]">Premium Care?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-9 md:mb-10 lg:mb-12 max-w-full sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Join thousands of satisfied customers who trust BrandBox for their garment care needs. 
              Book your first pickup today and experience the difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center"
              >
                Book Your Pickup Now
              </motion.a>
              
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#00A1E4] border-2 border-[#00A1E4] px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-[#00A1E4] hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                Explore Our Services
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 sm:mt-10 md:mt-11 lg:mt-12 xl:mt-14 flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-4 sm:px-0"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#00A1E4] font-bold">✓</span>
                <span>Free Pickup & Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00A1E4] font-bold">✓</span>
                <span>72-Hour Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00A1E4] font-bold">✓</span>
                <span>100% Quality Guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
