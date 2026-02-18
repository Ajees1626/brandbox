import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function AboutCTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#E4F4F9] via-white to-[#E4F4F9] py-20 lg:py-28"
    >
      {/* Premium Glow Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00A1E4]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#3EC4ED]/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        
        {/* SEO Hidden H2 */}
        <h2 id="cta-heading" className="sr-only">
          Book Premium Laundry and Dry Cleaning Service
        </h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-[#00A1E4] text-sm font-semibold mb-4">
            Get Started Today
          </p>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Experience{" "}
            <span className="bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] bg-clip-text text-transparent">
              Premium Garment Care?
            </span>
          </h3>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of satisfied customers who trust BrandBox for
            professional laundry and dry-cleaning services. Book your first
            pickup today and feel the difference.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(0,161,228,0.4)",
                "0 0 25px rgba(0,161,228,0.6)",
                "0 0 0px rgba(0,161,228,0.4)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="rounded-full"
          >
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
            >
              Book Your Pickup
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="inline-block border-2 border-[#00A1E4] text-[#00A1E4] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#00A1E4] hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Points */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-gray-600 text-sm sm:text-base"
        >
          {[
            "Free Pickup & Delivery",
            "72-Hour Turnaround",
            "100% Quality Guarantee",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#00A1E4] font-bold">✓</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTASection;
