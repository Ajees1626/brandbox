import { FaCheckCircle, FaAward, FaUsers, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

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

// Container animation (stagger effect)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// Card animation (zoom + rotate effect)
const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

function WhyTrustUsSection() {
  return (
    <section
      aria-labelledby="why-trust-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8fcff] to-white py-16 sm:py-20 lg:py-28"
    >
      {/* Decorative background blur */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* SEO Hidden Heading */}
        <h2 id="why-trust-heading" className="sr-only">
          Why Customers Trust Our Premium Laundry & Dry Cleaning Services
        </h2>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Customers Trust Us
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Built on reliability, excellence, and premium service standards.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={index}
                variants={cardVariants}
                className="group relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
              >
                {/* Shine hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease]"></div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] p-5 rounded-full shadow-lg"
                  >
                    <Icon className="text-white text-2xl" />
                  </motion.div>
                </div>

                {/* Content */}
                <h4 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>

                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyTrustUsSection;
