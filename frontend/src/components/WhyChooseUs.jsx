import { FaTruck, FaClock, FaLeaf, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function WhyChooseUs() {
  const features = [
    {
      icon: FaTruck,
      title: "Free Pickup & Delivery",
      description:
        "Convenient doorstep pickup and delivery across the city.",
    },
    {
      icon: FaClock,
      title: "72-Hour Turnaround",
      description:
        "Quick service without compromising garment quality.",
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly Care",
      description:
        "Responsible cleaning methods safe for fabric and planet.",
    },
    {
      icon: FaCheckCircle,
      title: "Premium Quality Checks",
      description:
        "Each item is inspected, pressed, and packed with precision.",
    },
  ];

  /* Animation Variants */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-slate-50 via-[#E4F4F9] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 lg:mb-20"
        >
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Premium Care, Designed for Busy Lives
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
            Reliable service, consistent quality, and complete peace of mind —
            crafted for modern lifestyles.
          </p>
        </motion.header>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg 
                hover:shadow-2xl transition-all duration-500 border border-gray-100 
                hover:border-[#00A1E4]/30 overflow-hidden"
              >
                {/* Soft Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A1E4]/5 to-[#3EC4ED]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] 
                      p-4 rounded-full shadow-lg"
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
