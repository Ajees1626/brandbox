import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [selectedBranch, setSelectedBranch] = useState({
    name: 'Chennai - Head Office',
    address: 'T. Nagar, Chennai - 600017',
    coords: '13.0475,80.2319', // T. Nagar coordinates
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="overflow-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] md:min-h-screen text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/chs1.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/image/hhs1.jpg'
            }}
          />
          {/* Brand Color Overlay Gradient */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/30 md:bg-black/20"></div>
        </div>

        {/* Soft Glow Effects with Brand Colors */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#00A1E4]/20 blur-[100px] sm:blur-[120px] md:blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#3EC4ED]/20 blur-[100px] sm:blur-[120px] md:blur-[140px] rounded-full"></div>

        <div className="relative text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-4xl z-10 pt-20 sm:pt-24 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight mb-4 sm:mb-5 md:mb-6"
          >
            Contact <span className="bg-gradient-to-r from-[#00A1E4] via-[#3EC4ED] to-[#00A1E4] bg-clip-text text-transparent">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium drop-shadow-lg px-2 sm:px-0"
          >
            Get in touch with us. We're here to help with all your laundry and dry cleaning needs.
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

      {/* Contact Form & Details */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">We usually reply within business hours.</p>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#00A1E4] focus:border-[#00A1E4] transition-all"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#00A1E4] focus:border-[#00A1E4] transition-all"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#00A1E4] focus:border-[#00A1E4] transition-all"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#00A1E4] focus:border-[#00A1E4] transition-all resize-none"
                    placeholder="Message *"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] text-white px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Details & Branches */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Phone Card */}
              <div className="bg-gradient-to-br from-[#E4F4F9] to-[#C3F0FF] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#00A1E4] rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <FaPhone className="text-white text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">PHONE</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">+91 99520 50527</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-[#E4F4F9] to-[#C3F0FF] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#00A1E4] rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <FaEnvelope className="text-white text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">EMAIL</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">care@brandbox.com</p>
                  </div>
                </div>
              </div>

              {/* Our Branches */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Our Branches</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { 
                      name: 'Chennai - Head Office', 
                      address: 'T. Nagar, Chennai - 600017',
                      coords: '13.0475,80.2319',
                      query: 'T+Nagar,+Chennai,+Tamil+Nadu+600017'
                    },
                    { 
                      name: 'Velachery', 
                      address: 'Velachery Main Road',
                      coords: '12.9716,80.2206',
                      query: 'Velachery+Main+Road,+Chennai'
                    },
                    { 
                      name: 'Anna Nagar', 
                      address: '2nd Avenue, Anna Nagar',
                      coords: '13.0850,80.2101',
                      query: '2nd+Avenue,+Anna+Nagar,+Chennai'
                    },
                    { 
                      name: 'Tambaram', 
                      address: 'GST Road, Tambaram',
                      coords: '12.9249,80.1000',
                      query: 'GST+Road,+Tambaram,+Chennai'
                    },
                    { 
                      name: 'OMR', 
                      address: 'Sholinganallur, OMR',
                      coords: '12.8996,80.2209',
                      query: 'Sholinganallur,+OMR,+Chennai'
                    },
                    { 
                      name: 'Porur', 
                      address: 'Mount Poonamallee Road',
                      coords: '13.0358,80.1569',
                      query: 'Mount+Poonamallee+Road,+Porur,+Chennai'
                    },
                  ].map((branch, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setSelectedBranch(branch)}
                      className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border-2 transition-all cursor-pointer ${
                        selectedBranch.name === branch.name
                          ? 'border-[#00A1E4] shadow-lg bg-[#E4F4F9]'
                          : 'border-gray-100 hover:border-[#00A1E4]/50 hover:shadow-lg'
                      }`}
                    >
                      <h3 className="font-bold text-gray-900 text-xs sm:text-sm md:text-base mb-1">{branch.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{branch.address}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <motion.div
            key={selectedBranch.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 sm:mb-4 md:mb-5 text-center px-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{selectedBranch.name}</h3>
              <p className="text-sm sm:text-base text-gray-600">{selectedBranch.address}</p>
            </div>
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2699!2d${selectedBranch.coords.split(',')[1]}!3d${selectedBranch.coords.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c5c5c5c5c5%3A0x3a5266c5c5c5c5c5!2s${selectedBranch.query || 'T+Nagar,+Chennai'}!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`BrandBox Location - ${selectedBranch.name}`}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
