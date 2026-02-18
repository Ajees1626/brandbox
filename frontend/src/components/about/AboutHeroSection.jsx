import { motion } from "framer-motion";

function AboutHeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] md:min-h-screen text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/image/ahs1.jpg"
          alt="About BrandBox"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-black/30"></div>
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30 md:bg-black/20"></div>
      </div>

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
  );
}

export default AboutHeroSection;
