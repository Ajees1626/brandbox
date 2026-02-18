import { useState } from 'react'
import {
  FaTshirt,
  FaFire,
  FaHandSparkles,
  FaCouch,
  FaGem,
  FaCrown,
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import CTASection from '../components/CTASection'
import servicesData from '../data/servicesData.json'

const iconMap = {
  FaTshirt,
  FaFire,
  FaHandSparkles,
  FaCouch,
  FaGem,
  FaCrown,
}

function Services() {
  const [activeTab, setActiveTab] = useState('services') // 'services' | 'exclusive'

  const currentServices = activeTab === 'services' ? servicesData.services : servicesData.exclusiveServices

  const pricing = [
    { item: 'Shirt', price: '$3.50', itemType: 'Standard', note: 'Professional service included' },
    { item: 'Pants', price: '$4.50', itemType: 'Standard', note: 'Professional service included' },
    { item: 'Suit (2-piece)', price: '$12.00', itemType: 'Premium', note: 'Premium care included' },
    { item: 'Dress', price: '$8.00', itemType: 'Standard', note: 'Professional service included' },
    { item: 'Jacket', price: '$6.00', itemType: 'Standard', note: 'Professional service included' },
    { item: 'Curtains (per panel)', price: '$15.00', itemType: 'Premium', note: 'Deep cleaning included' },
  ]

  return (
    <div className="overflow-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] md:min-h-screen text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/shs1.jpg"
            alt="Our Services"
            className="w-full h-full object-cover object-center"
          />
          {/* Brand Color Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-black/30"></div>
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
            Our <span className="bg-gradient-to-r from-[#00A1E4] via-[#3EC4ED] to-[#00A1E4] bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium drop-shadow-lg px-2 sm:px-0"
          >
            Comprehensive laundry and dry cleaning solutions for all your garment care needs
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

      {/* ================= TAB BUTTONS ================= */}
      <section className="relative -mt-4 sm:-mt-6 z-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 flex justify-center">
          <div className="flex bg-white rounded-full shadow-xl p-1.5 sm:p-2 border border-gray-100">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#00A1E4] hover:bg-gray-50'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('exclusive')}
              className={`px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 ${
                activeTab === 'exclusive'
                  ? 'bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#00A1E4] hover:bg-gray-50'
              }`}
            >
              Exclusive Services
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES DETAIL SECTION (Alternating Image + Text) ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {currentServices.map((service, index) => {
                const Icon = iconMap[service.icon] || FaTshirt
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 flex flex-col ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 items-center`}
                  >
                    {/* Image Section */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                      className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a9?w=800'
                        }}
                      />
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#00A1E4] rounded-lg p-2 sm:p-2.5 md:p-3 shadow-lg">
                        <Icon className="text-white text-lg sm:text-xl md:text-2xl" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className="w-full md:w-1/2 space-y-3 sm:space-y-4"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">{service.description}</p>

                      <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 mt-4 sm:mt-5 md:mt-6">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 + idx * 0.1 }}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <span className="text-[#00A1E4] font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">■</span>
                            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                        className="h-0.5 sm:h-1 bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] rounded-full mt-4 sm:mt-5 md:mt-6"
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ================= PRICING PREVIEW (LIGHT THEME) ================= */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#E0F7FF] via-[#C3F0FF] to-[#A0E4FF] text-gray-900 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#3EC4ED]/10 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#3EC4ED]/10 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-3.5 md:mb-4 leading-tight px-2 sm:px-0">
              Transparent <span className="text-[#3EC4ED]">Pricing</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-0">
              Fair, competitive prices with no hidden fees. Quality service at affordable rates.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-5xl mx-auto">
            {pricing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-md sm:shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer border border-[#3EC4ED]/30"
              >
                {/* Badge / Plan Type */}
                <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#3EC4ED] text-white font-bold rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm shadow-md">
                    {item.itemType || "Standard"}
                  </div>
                </div>

                {/* Item Name */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-3.5 md:mb-4 mt-3 sm:mt-4 text-center">
                  {item.item}
                </h3>

                {/* Price */}
                <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#3EC4ED] text-center">
                  {item.price}
                </p>

                {/* Note */}
                <p className="text-gray-600 mt-3 sm:mt-3.5 md:mt-4 text-center text-xs sm:text-sm md:text-base">
                  {item.note || "Professional service included"}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Small Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-gray-600 mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm md:text-base px-4 sm:px-0"
          >
            *Prices may vary for specialty items. Contact us for custom quotes.
          </motion.p>
        </div>
      </section>

      {/* ================= OUR BRANCHES SECTION ================= */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-[#E4F4F9] to-white overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#00A1E4]/5 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#3EC4ED]/5 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            <p className="text-[#00A1E4] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
              Our Locations
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-3.5 md:mb-4 leading-tight px-2 sm:px-0">
              Visit Us at Our <span className="text-[#00A1E4]">Branches</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-0">
              We're conveniently located across Chennai to serve you better.
            </p>
          </motion.div>

          {/* Branches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Chennai - Head Office',
                address: 'T. Nagar, Chennai - 600017',
                image: '/image/location.webp',
              },
              {
                name: 'Velachery',
                address: 'Velachery Main Road',
                image: '/image/location.webp',
              },
              {
                name: 'Anna Nagar',
                address: '2nd Avenue, Anna Nagar',
                image: '/image/location.webp',
              },
              {
                name: 'Tambaram',
                address: 'GST Road, Tambaram',
                image: '/image/location.webp',
              },
              {
                name: 'OMR',
                address: 'Sholinganallur, OMR',
                image: '/image/location.webp',
              },
              {
                name: 'Porur',
                address: 'Mount Poonamallee Road',
                image: '/image/location.webp',
              },
            ].map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#00A1E4]/30 overflow-hidden"
              >
                {/* Branch Image */}
                <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 relative overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800'
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Branch Info */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2 group-hover:text-[#00A1E4] transition-colors leading-tight">
                    {branch.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{branch.address}</p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] rounded-b-xl sm:rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8 sm:mt-10 md:mt-11 lg:mt-12"
          >
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-4 sm:px-0">
              Can't visit us?{' '}
              <span className="text-[#00A1E4] font-semibold">
                We offer free pickup & delivery!
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <CTASection />
    </div>
  )
}

export default Services
