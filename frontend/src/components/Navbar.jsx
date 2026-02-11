import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const logoTextRef = useRef(null);
  const lastScroll = useRef(0);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  // Split text into letters
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!logoTextRef.current) return;

      // Scroll Down → Hide
      if (currentScroll > lastScroll.current && currentScroll > 50) {
        gsap.to(logoTextRef.current.children, {
          y: -20,
          opacity: 0,
          stagger: 0.02,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Scroll Up → Show
      else {
        gsap.to(logoTextRef.current.children, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.4,
          ease: "power3.out",
        });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl bg-white shadow-xl rounded-2xl px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/image/Logo.png"
            alt="The Brand Box"
            className="h-8 md:h-10 w-auto"
          />

          {/* Animated Logo Text */}
          <span
            ref={logoTextRef}
            className="text-lg md:text-xl font-bold text-[#00A1E4] hidden sm:inline overflow-hidden"
          >
            {splitText("The Brand Box")}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`relative font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? "text-[#00A1E4]"
                  : "text-gray-600 hover:text-[#00A1E4]"
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#00A1E4] rounded-full"></span>
              )}
            </Link>
          ))}

          <button
            onClick={() => navigate("/contact")}
            className="bg-[#00A1E4] hover:bg-[#3EC4ED] text-white px-5 py-2 rounded-full transition duration-300 shadow-md"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 w-[90%] max-w-6xl bg-white shadow-xl rounded-2xl py-6 px-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium px-2 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "text-[#00A1E4] bg-[#E4F4F9]"
                    : "text-gray-700 hover:text-[#00A1E4] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="mt-2 bg-[#00A1E4] hover:bg-[#3EC4ED] text-white px-5 py-2 rounded-full transition duration-300 shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
