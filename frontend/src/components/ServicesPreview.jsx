import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaTshirt,
  FaFire,
  FaHandSparkles,
  FaCouch,
  FaGem,
  FaCrown,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import servicesData from "../data/servicesData.json";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  FaTshirt,
  FaFire,
  FaHandSparkles,
  FaCouch,
  FaGem,
  FaCrown,
};

function ServiceCard({ service, cardRef }) {
  const Icon = iconMap[service.icon] || FaTshirt;
  return (
    <article
      ref={cardRef}
      className="group bg-white/30 backdrop-blur-lg border border-white/80 rounded-3xl p-8 text-white shadow-2xl transition-all duration-500 hover:-translate-y-4"
    >
      <div className="flex justify-center mb-6">
        <div className="bg-gradient-to-br from-[#00A1E4] to-[#3EC4ED] p-5 rounded-full shadow-xl transition-transform duration-500 group-hover:scale-110">
          <Icon className="text-3xl text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
      <p className="text-gray-300 text-center text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="text-center">
        <Link
          to="/services"
          className="text-[#3EC4ED] hover:text-white font-medium transition"
        >
          Learn More →
        </Link>
      </div>
    </article>
  );
}

function ServicesPreview() {
  const sectionRef = useRef(null);
  const servicesCardsRef = useRef([]);
  const exclusiveCardsRef = useRef([]);

  const services = servicesData.services.slice(0, 2);
  const exclusiveServices = servicesData.exclusiveServices.slice(0, 2);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const allCards = [...servicesCardsRef.current, ...exclusiveCardsRef.current].filter(Boolean);
      gsap.fromTo(
        allCards,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/image/h1.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A1E4]/60 to-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Premium Care for Every Fabric
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Experience world-class laundry and dry cleaning services designed for
            elegance, hygiene, and ultimate convenience.
          </p>
        </div>

        {/* One row: 2 divs Services | 2 divs Exclusive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Services - 2 cards */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center lg:text-left">
              Services
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  cardRef={(el) => (servicesCardsRef.current[index] = el)}
                />
              ))}
            </div>
          </div>

          {/* Exclusive Services - 2 cards */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center lg:text-left">
              Exclusive Services
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {exclusiveServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  cardRef={(el) => (exclusiveCardsRef.current[index] = el)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-[#00A1E4] to-[#3EC4ED] text-white px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 font-semibold"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
