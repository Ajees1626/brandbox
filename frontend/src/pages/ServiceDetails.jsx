import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa'
import SEO from '../components/SEO'
import { getServiceBySlug } from '../utils/serviceUtils'
import serviceDetailsData from '../data/serviceDetailsData.json'
import branchesData from '../data/branchesData.json'

function ServiceDetails() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const details = service ? serviceDetailsData[slug] : null

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[#00A1E4] hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const processImages = details?.processImages || [
    { src: service.image, label: 'Process' },
    { src: '/image/2.jpg', label: 'Step 2' },
    { src: '/image/3.jpg', label: 'Step 3' },
  ]
  const fullDescription = details?.fullDescription || service.description
  const results = details?.results || service.features

  return (
    <div className="overflow-hidden font-sans bg-white">
      <SEO
        title={service.title}
        description={fullDescription}
        path={`/services/${slug}`}
        image={typeof service.image === 'string' && service.image.startsWith('http') ? service.image : `https://thebrandboxdrycleaners.com${service.image}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: fullDescription,
          provider: { '@type': 'LocalBusiness', name: 'The Brand Box Dry Cleaners' },
          url: `https://thebrandboxdrycleaners.com/services/${slug}`,
          image: typeof service.image === 'string' && service.image.startsWith('http') ? service.image : `https://thebrandboxdrycleaners.com${service.image}`,
        }}
      />
      {/* Hero Section */}
      <section className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a9?w=800'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50" />
        </div>

        <div className="relative h-full flex flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-white/90 mt-1 max-w-2xl"
          >
            {service.description}
          </motion.p>
          <Link
            to="/services"
            className="mt-4 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm sm:text-base w-fit"
          >
            <FaArrowLeft className="text-sm" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Main content: Left images | Right details */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Working process images (small) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* First/main image - slightly larger */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a9?w=800'
                    }}
                  />
                </div>
                {/* Small process images */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {processImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-20 sm:h-24 md:h-28 object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a9?w=400'
                        }}
                      />
                      <p className="text-[10px] sm:text-xs text-center py-1 bg-gray-100 text-gray-600 font-medium">
                        {img.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Details, paragraph, points, results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              {/* Full description paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                {fullDescription}
              </p>

              {/* Features / Points */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#00A1E4] font-bold mt-0.5 text-sm sm:text-base shrink-0">
                        ■
                      </span>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#E4F4F9] to-[#C3F0FF] border border-[#00A1E4]/20">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Key Results
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#00A1E4] font-bold mt-0.5 shrink-0">✓</span>
                      <span className="text-sm sm:text-base text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Branches Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-[#E4F4F9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <p className="text-[#00A1E4] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
              Our Locations
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Visit Us at Our <span className="text-[#00A1E4]">Branches</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Available at all our branches. Book online or visit in person.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {branchesData.map((branch, index) => (
              <motion.a
                key={index}
                href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-[#00A1E4]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#00A1E4]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00A1E4]/20 transition-colors">
                  <FaMapMarkerAlt className="text-[#00A1E4] text-xl sm:text-2xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#00A1E4] transition-colors text-sm sm:text-base">
                    {branch.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{branch.address}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-10"
          >
            <Link
              to="/services#branches"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              <FaMapMarkerAlt />
              View All Branches
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetails
