import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: customDelay,
      ease: [0.22, 1, 0.36, 1], // smooth cubic bezier
    },
  }),
};

function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      aria-labelledby="mission-vision-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Background decorative blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* SEO Hidden Main Heading */}
        <h2
          id="mission-vision-heading"
          className="sr-only"
        >
          Our Mission and Vision - Premium Laundry & Dry Cleaning Service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* MISSION CARD */}
          <motion.article
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="group relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400/0 via-sky-400/10 to-sky-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative z-10">
              Our Mission
            </h3>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed relative z-10">
              To provide premium-quality laundry and dry cleaning services that
              save time while delivering exceptional garment care. We strive to
              make professional care effortless, reliable, and accessible for
              every customer.
            </p>
          </motion.article>

          {/* VISION CARD */}
          <motion.article
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.2}
            className="group relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative z-10">
              Our Vision
            </h3>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed relative z-10">
              To become the most trusted garment care brand, recognized for our
              commitment to quality, sustainability, innovation, and customer
              satisfaction across every community we serve.
            </p>
          </motion.article>

        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;
