import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const footerLinks = {
    services: [
      { path: "/services", label: "Dry Cleaning" },
      { path: "/services", label: "Stain Removing" },
      { path: "/services", label: "Bleaching" },
      { path: "/services", label: "Roll Polishing" },
      { path: "/services", label: "Roll Pressing" },
    ],
    exclusiveServices: [
      { path: "/services", label: "Bridal Lehanga" },
      { path: "/services", label: "Bridal Gowns" },
      { path: "/services", label: "Bridal Sarees" },
      { path: "/services", label: "Blazers" },
    ],
    company: [
      { path: "/about", label: "About Us" },
      { path: "/services", label: "Services" },
      { path: "/contact", label: "Contact" },
    ],
  };

  return (
    <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10">
      <footer
        className="
        relative overflow-hidden
        w-full max-w-7xl mx-auto
        rounded-2xl sm:rounded-3xl
        px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-16
        shadow-xl sm:shadow-2xl
        border border-white/10
        bg-gradient-to-br 
        from-[#bae4f1] 
        via-[#bae4f1] 
        to-[#bae4f1]
        text-gray-800
      "
      >
        {/* BIG Background Brand Text - Bottom, full width, responsive (no overflow) */}
        <h1
          className="
          absolute 
          bottom-0 
          left-1/2 
          -translate-x-1/2 
          w-full
          text-center 
          font-extrabold 
          tracking-[0.02em] 
          text-[#00A1E4]/25 
          sm:text-[#00A1E4]/30 
          md:text-[#00A1E4]/35 
          lg:text-[#00A1E4]/40
          pointer-events-none
          select-none
          block
          leading-none
          whitespace-nowrap
        "
          style={{ fontSize: 'clamp(3rem, 13vw, 15rem)' }}
          aria-hidden="true"
        >
          BRANDBOX
        </h1>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">

          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-5">
              <img 
                src="/image/Logo.png" 
                alt="The Brand Box Logo" 
                className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed max-w-md sm:max-w-none">
              Premium care at your doorstep. Luxury laundry & dry cleaning
              services designed for modern lifestyles.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-[#3EC4ED] transition duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusive Services */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">
              Exclusive Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {footerLinks.exclusiveServices.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-[#3EC4ED] transition duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-[#3EC4ED] transition duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">
              Contact Us
            </h4>
            <div className="space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm md:text-base">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaPhone className="text-[#00A1E4] text-sm sm:text-base md:text-lg flex-shrink-0" />
                <span className="text-gray-700 break-all">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <FaEnvelope className="text-[#00A1E4] text-sm sm:text-base md:text-lg flex-shrink-0" />
                <span className="text-gray-700 break-all">info@brandbox.com</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <FaMapMarkerAlt className="text-[#00A1E4] text-sm sm:text-base md:text-lg flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="relative z-10 border-t border-gray-300/30 mt-8 sm:mt-10 md:mt-12 lg:mt-14 pt-4 sm:pt-5 md:pt-6 text-center text-xs sm:text-sm md:text-base text-gray-700">
          © {new Date().getFullYear()} The Brand Box Dry Cleaning. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
