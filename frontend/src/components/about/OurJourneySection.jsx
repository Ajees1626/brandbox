import { motion } from "framer-motion";

const milestones = [
  {
    year: "2019",
    title: "BrandBox Founded",
    description:
      "Started with a vision to modernize laundry and dry-cleaning services with quality and trust.",
  },
  {
    year: "2020",
    title: "Doorstep Services Launched",
    description:
      "Introduced free pickup & delivery to make garment care effortless.",
  },
  {
    year: "2022",
    title: "10,000+ Happy Customers",
    description:
      "Expanded operations and built long-term customer relationships.",
  },
  {
    year: "2024",
    title: "Premium Care Upgrade",
    description:
      "Adopted eco-friendly processes and luxury finishing standards.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 80,
    },
  },
};

function OurJourneySection() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="relative bg-gradient-to-b from-white to-[#f8fcff] py-20 lg:py-28 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100 opacity-30 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* SEO Hidden Heading */}
        <h2 id="journey-heading" className="sr-only">
          Our Company Journey and Growth Timeline
        </h2>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#00A1E4] font-semibold uppercase tracking-widest text-sm mb-4">
            Our Journey
          </p>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A Story of Care & Commitment
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            From a small idea to becoming a trusted premium garment-care brand.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gray-200"></div>

          <motion.div
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#00A1E4] to-[#3EC4ED]"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-14"
          >
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={index}
                  variants={cardVariants}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] shadow-lg"
                      whileHover={{ scale: 1.3 }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                      <span className="text-[#00A1E4] font-bold text-xl block mb-2">
                        {milestone.year}
                      </span>

                      <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h4>

                      <p className="text-gray-600 leading-relaxed text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurJourneySection;
