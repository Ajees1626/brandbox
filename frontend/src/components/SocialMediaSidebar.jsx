import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, label: "Facebook", url: "https://facebook.com", color: "#1877F2" },
  { icon: FaInstagram, label: "Instagram", url: "https://instagram.com", color: "#E4405F" },
  { icon: FaTwitter, label: "Twitter", url: "https://twitter.com", color: "#1DA1F2" },
  { icon: FaWhatsapp, label: "WhatsApp", url: "https://wa.me/919876543210", color: "#25D366" },
  { icon: FaLinkedinIn, label: "LinkedIn", url: "https://linkedin.com", color: "#0A66C2" },
];

function SocialMediaSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showOpenButton, setShowOpenButton] = useState(false);
  const panelRef = useRef(null);

  // After 10 seconds: show open button + auto-open panel
  useEffect(() => {
    if (hasAutoOpened) return;
    const timer = setTimeout(() => {
      setShowOpenButton(true);
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  // Animate panel: left-to-right open, right-to-left close
  useEffect(() => {
    if (!panelRef.current) return;

    gsap.to(panelRef.current, {
      x: isOpen ? 0 : "-100%",
      duration: 0.4,
      ease: "power3.out",
    });
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      {/* Open button - hidden for 10 sec, then shows when closed */}
      {showOpenButton && (
        <button
          onClick={handleOpen}
          aria-label="Open social media"
          className={`
            fixed left-0 top-1/2 -translate-y-1/2 z-9998
            w-8 h-14 sm:w-9 sm:h-20 md:w-10 md:h-24 flex items-center justify-center
            min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0
            bg-[#00A1E4] hover:bg-[#3EC4ED] active:bg-[#0090cc] text-white
            rounded-r-md sm:rounded-r-lg shadow-lg transition-all duration-300
            touch-manipulation
            ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <FaChevronRight className="text-base sm:text-lg md:text-xl" />
        </button>
      )}

      {/* Social media panel - slides left to right when open */}
      <div
        ref={panelRef}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-9999 -translate-x-full"
        style={{ willChange: "transform" }}
      >
        <div className="flex flex-col bg-white/95 backdrop-blur-md shadow-xl rounded-r-xl sm:rounded-r-2xl border border-gray-200/50 overflow-hidden min-w-[52px] sm:min-w-[56px]">
          {/* Social icons - vertical stack */}
          <div className="flex flex-col py-2 px-2 sm:py-3 sm:px-3 gap-0.5 sm:gap-1">
            {socialLinks.map(({ icon: Icon, label, url, color }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg hover:scale-110 active:scale-95 transition-transform duration-200 min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0 touch-manipulation"
                style={{ color }}
              >
                <Icon className="text-lg sm:text-xl" />
              </a>
            ))}
          </div>

          {/* Close button - just < , below LinkedIn */}
          <button
            onClick={handleClose}
            aria-label="Close social media"
            className="flex items-center justify-center w-full py-2.5 sm:py-3 min-h-[44px] md:min-h-0 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 hover:text-[#00A1E4] transition-colors text-lg sm:text-xl font-medium border-t border-gray-200/50 touch-manipulation"
          >
            &lt;
          </button>
        </div>
      </div>
    </>
  );
}

export default SocialMediaSidebar;
