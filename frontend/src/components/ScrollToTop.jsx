import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Instant scroll for route changes
    })
    setIsVisible(false) // Hide button when on new page
  }, [location.pathname])

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-8 lg:bottom-12 lg:right-10 z-50 
                     bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] 
                     text-white 
                     p-3 sm:p-3.5 md:p-4 
                     rounded-full 
                     shadow-lg hover:shadow-2xl 
                     transition-all duration-300 
                     hover:scale-110 active:scale-95
                     flex items-center justify-center
                     group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-sm sm:text-base md:text-lg lg:text-xl transition-transform duration-300 group-hover:-translate-y-1" />
          
          {/* Ripple effect on hover */}
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
