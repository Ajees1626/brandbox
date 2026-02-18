import { useEffect } from "react";
import { FaTruck, FaBoxOpen } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      title: "Pickup",
      description:
        "Schedule a convenient pickup time. We collect your laundry from your doorstep.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Delivery",
      description:
        "Get clean, pressed clothes delivered back within 72 hours.",
      icon: <FaTruck />,
    },
  ];

  useEffect(() => {
    const fadeUps = document.querySelectorAll(".fade-up");
    const reveals = document.querySelectorAll(".reveal");

    const fadeUpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeUps.forEach((el) => fadeUpObserver.observe(el));
    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      fadeUps.forEach((el) => fadeUpObserver.unobserve(el));
      reveals.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#E4F4F9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="fade-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4 sm:px-0">
            Hassle-Free Laundry in 2 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {steps.map((item, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-7 md:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#3EC4ED] mb-4 sm:mb-5 md:mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-3.5 md:mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
