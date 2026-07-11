import { motion } from "framer-motion";
import SEO from "./SEO";
import { SITE_URL, buildKeywords } from "../utils/seoConfig";

function LegalPageLayout({ title, subtitle, description, path, effectiveDate, toc, children }) {
  return (
    <div className="overflow-hidden font-sans bg-gray-50">
      <SEO
        title={title}
        description={description}
        path={path}
        keywords={buildKeywords(`${title.toLowerCase()} The Brand Box`)}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${title} — The Brand Box Fabric Studio Dry Cleaners`,
          url: `${SITE_URL}${path}`,
          description,
          isPartOf: { "@type": "WebSite", name: "The Brand Box", url: SITE_URL },
          inLanguage: "en-IN",
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#00A1E4] via-[#3EC4ED] to-[#00A1E4] pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28 text-white text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 blur-[80px] sm:blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 blur-[80px] sm:blur-[100px] rounded-full" />

        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 leading-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white/95 mb-2 px-1 leading-snug"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs sm:text-sm md:text-base text-white/90"
          >
            Effective Date: {effectiveDate}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-full h-[50px] sm:h-[70px] md:h-[90px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#f9fafb"
              d="M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,160C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {toc && toc.length > 0 && (
              <aside className="lg:w-72 xl:w-80 shrink-0">
                <nav
                  aria-label="Table of contents"
                  className="lg:sticky lg:top-24 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5"
                >
                  <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4">
                    Quick Navigation
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 sm:gap-1.5 max-h-[280px] sm:max-h-none overflow-y-auto lg:overflow-visible pr-1">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block text-xs sm:text-sm text-gray-600 hover:text-[#00A1E4] hover:bg-[#E4F4F9] rounded-lg px-2.5 py-2 transition-colors leading-snug"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            <div className="flex-1 min-w-0 space-y-4 sm:space-y-5 md:space-y-6">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function LegalSection({ id, title, children, index }) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index ? Math.min(index * 0.04, 0.2) : 0 }}
      className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 md:p-6 lg:p-8 scroll-mt-24 sm:scroll-mt-28"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-100 leading-snug">
        {title}
      </h2>
      <div className="text-sm sm:text-base text-gray-700 leading-relaxed sm:leading-7 space-y-3 sm:space-y-4">
        {children}
      </div>
    </motion.article>
  );
}

export default LegalPageLayout;
