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

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-slate-50 via-[#E4F4F9] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2 sm:px-0">
            Premium Care, Designed for Busy Lives
          </h2>
          <p className="text-gray-600 max-w-full sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-0 leading-relaxed">
            Reliable service, consistent quality, and complete peace of mind —
            crafted for modern lifestyles.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 shadow-md sm:shadow-lg md:shadow-xl 
                hover:shadow-2xl transition-all duration-500 
                border border-gray-100 hover:border-[#00A1E4]/30"
              >
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] 
                    p-3 sm:p-3.5 md:p-4 lg:p-5 rounded-full shadow-md"
                  >
                    <Icon className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl" />
                  </motion.div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3 md:mb-3.5 lg:mb-4 text-gray-900 text-center leading-tight">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
