import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import LegalPageLayout, { LegalSection } from "../components/LegalPageLayout";
import branchesData from "../data/branchesData.json";

const linkClass =
  "text-[#00A1E4] hover:text-[#3EC4ED] underline underline-offset-2 break-all sm:break-normal transition-colors";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "about-us", label: "2. About Us" },
  { id: "information-collect", label: "3. Information We Collect" },
  { id: "how-we-use", label: "4. How We Use Your Information" },
  { id: "protection", label: "5. Protection of Your Information" },
  { id: "third-party", label: "6. Third-Party Disclosure" },
  { id: "cookies", label: "7. Cookies & Tracking" },
  { id: "privacy-rights", label: "8. Your Privacy Rights" },
  { id: "data-retention", label: "9. Data Retention" },
  { id: "children-privacy", label: "10. Children's Privacy" },
  { id: "policy-changes", label: "11. Policy Changes" },
  { id: "contact-us", label: "12. Contact Us" },
];

function PolicyList({ items }) {
  return (
    <ul className="space-y-2 sm:space-y-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 sm:gap-3 text-sm sm:text-base">
          <span className="text-[#00A1E4] mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#00A1E4]" aria-hidden="true" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LocationGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {branchesData.map((branch, index) => (
        <div
          key={branch.name}
          className="flex gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#E4F4F9]/60 border border-[#00A1E4]/10"
        >
          <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00A1E4] text-white text-xs sm:text-sm font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-sm sm:text-base">{branch.name}</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed">{branch.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactCards() {
  const contacts = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 99520 50527",
      href: "tel:+919952050527",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@drycleanersbrandbox.com",
      href: "mailto:info@drycleanersbrandbox.com",
    },
    {
      icon: FaGlobe,
      label: "Website",
      value: "www.thebrandboxdrycleaners.com",
      href: "https://www.thebrandboxdrycleaners.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4">
      {contacts.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          target={label === "Website" ? "_blank" : undefined}
          rel={label === "Website" ? "noopener noreferrer" : undefined}
          className="flex items-start gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 hover:border-[#00A1E4]/30 hover:bg-[#E4F4F9]/40 transition-colors group"
        >
          <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00A1E4]/10 flex items-center justify-center group-hover:bg-[#00A1E4]/20 transition-colors">
            <Icon className="text-[#00A1E4] text-sm sm:text-base" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
            <p className="text-sm sm:text-base font-medium text-gray-900 mt-0.5 break-all sm:break-normal">{value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="The Brand Box Fabric Studio Dry Cleaners"
      description="Privacy Policy for The Brand Box Fabric Studio Dry Cleaners — how we collect, use, and protect your personal information when you use our dry cleaning services in Chennai."
      path="/privacy-policy"
      effectiveDate="July 06, 2026"
      toc={sections}
    >
      <LegalSection id="introduction" title="1. Introduction" index={0}>
        <p>
          At The Brand Box Fabric Studio Dry Cleaners, we respect your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website{" "}
          <a href="https://www.thebrandboxdrycleaners.com" className={linkClass}>
            www.thebrandboxdrycleaners.com
          </a>{" "}
          and use our dry cleaning, laundry, and fabric care services at our locations across Chennai, Tamil Nadu,
          India.
        </p>
        <p>
          Please read this Privacy Policy carefully. If you do not agree with our policies and practices,
          please do not use our services or website.
        </p>
      </LegalSection>

      <LegalSection id="about-us" title="2. About Us" index={1}>
        <p>
          The Brand Box Fabric Studio Dry Cleaners is a professional garment and fabric care service provider with
          six conveniently located branches across Chennai. We specialize in providing premium dry cleaning,
          laundry, bridal wear services, upholstery cleaning, and expert stain removal using modern cleaning
          technologies and skilled professionals.
        </p>
        <p className="font-semibold text-gray-900 flex items-center gap-2 mt-2">
          <FaMapMarkerAlt className="text-[#00A1E4] shrink-0" />
          Our Locations
        </p>
        <LocationGrid />
      </LegalSection>

      <LegalSection id="information-collect" title="3. Information We Collect" index={2}>
        <p>We may collect information about you in a variety of ways:</p>
        <PolicyList
          items={[
            <><strong>Personal Identification Information</strong> — Name, email address, phone number, and date of birth</>,
            <><strong>Delivery Address and Service Preferences</strong> — Complete address details for pick-up and drop-off services</>,
            <><strong>Service Details</strong> — Types of garments, fabric types, special handling instructions, and preferences</>,
            <><strong>Payment Information</strong> — Credit/debit card details, bank account information (processed securely through payment gateways)</>,
            <><strong>Communication</strong> — Messages, comments, feedback, or inquiries you send us</>,
            <><strong>Automatically Collected Data</strong> — IP address, browser type, device information, pages visited on our website, and usage patterns</>,
          ]}
        />
      </LegalSection>

      <LegalSection id="how-we-use" title="4. How We Use Your Information" index={3}>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and
          customized experience. We use information collected about you to:
        </p>
        <PolicyList
          items={[
            "Process your orders and deliver our dry cleaning and laundry services",
            "Send you order confirmations, delivery updates, and service notifications",
            "Respond to your inquiries, requests, and customer service questions",
            "Send promotional materials, discounts, and updates about new services (you can opt-out)",
            "Improve our website, services, and customer experience",
            "Prevent fraudulent transactions and maintain account security",
            "Comply with legal obligations and resolve disputes",
            "Conduct analytics and market research",
          ]}
        />
      </LegalSection>

      <LegalSection id="protection" title="5. Protection of Your Information" index={4}>
        <p>
          We adopt appropriate data collection, storage, and processing practices and implement security measures
          to protect against unauthorized access, alteration, disclosure, or destruction of your personal
          information. These measures include:
        </p>
        <PolicyList
          items={[
            "Encryption of sensitive data during transmission",
            "Secure password protection for online accounts",
            "Limited employee access to personal information (only on need-to-know basis)",
            "Regular security assessments and updates",
            "Compliance with data protection regulations",
          ]}
        />
        <p>
          However, no method of transmission over the internet or electronic storage is 100% secure. While we
          strive to use commercially acceptable means to protect your information, we cannot guarantee absolute
          security.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="6. Third-Party Disclosure" index={5}>
        <p>
          We do not sell, trade, or rent your personal information to third parties for their marketing
          purposes. However, we may share information with:
        </p>
        <PolicyList
          items={[
            <><strong>Service Providers</strong> — Companies that assist us in operating our website and conducting business (e.g., payment processors, delivery partners, hosting providers)</>,
            <><strong>Legal Requirements</strong> — When required by law or to protect our rights and safety</>,
            <><strong>Business Transfer</strong> — In the event of merger, acquisition, or sale of assets</>,
          ]}
        />
        <p>
          All service providers are required to keep your information confidential and use it only for the
          purposes we specify.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="7. Cookies and Tracking Technologies" index={6}>
        <p>
          Our website may use &quot;cookies&quot; to enhance your user experience. Cookies are small files stored on your
          device that help us remember your preferences and improve our services. Types of cookies include:
        </p>
        <PolicyList
          items={[
            <><strong>Essential Cookies</strong> — Required for website functionality</>,
            <><strong>Performance Cookies</strong> — Help us analyze how visitors use our website</>,
            <><strong>Preference Cookies</strong> — Remember your settings and preferences</>,
          ]}
        />
        <p>
          You may choose to set your web browser to refuse cookies or alert you when cookies are being sent.
          However, disabling cookies may affect your ability to use certain features of our website. We also use
          analytics tools to track website usage patterns.
        </p>
      </LegalSection>

      <LegalSection id="privacy-rights" title="8. Your Privacy Rights" index={7}>
        <p>You have the following rights regarding your personal information:</p>
        <PolicyList
          items={[
            <><strong>Right to Access</strong> — Request access to your personal information that we hold</>,
            <><strong>Right to Rectification</strong> — Request correction of inaccurate or incomplete information</>,
            <><strong>Right to Erasure</strong> — Request deletion of your personal information (subject to legal requirements)</>,
            <><strong>Right to Opt-Out</strong> — Opt-out of promotional communications and marketing emails</>,
            <><strong>Right to Data Portability</strong> — Request your information in a portable format</>,
            <><strong>Right to Withdraw Consent</strong> — Withdraw consent for data processing at any time</>,
          ]}
        />
        <p>
          To exercise these rights, please contact us using the information in the &quot;Contact Us&quot; section below.
        </p>
      </LegalSection>

      <LegalSection id="data-retention" title="9. Data Retention" index={8}>
        <p>
          We retain your personal information only as long as necessary to provide our services and fulfill the
          purposes outlined in this Privacy Policy. Generally:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            { title: "Service Records", detail: "Retained for 2-3 years for warranty and dispute resolution" },
            { title: "Payment Information", detail: "Retained as required by financial regulations (typically 5-7 years)" },
            { title: "Marketing Data", detail: "Retained until you opt-out or request deletion" },
            { title: "Website Analytics", detail: "Retained for up to 26 months" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100"
            >
              <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <p>
          You may request deletion of your information at any time, subject to legal and contractual
          obligations.
        </p>
      </LegalSection>

      <LegalSection id="children-privacy" title="10. Children's Privacy" index={9}>
        <p>
          Our services and website are not intended for children under the age of 18. We do not knowingly
          collect personal information from children. If we become aware that we have collected information from
          a child without parental consent, we will immediately take steps to delete such information and
          terminate the child&apos;s account if applicable.
        </p>
      </LegalSection>

      <LegalSection id="policy-changes" title="11. Changes to This Privacy Policy" index={10}>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal
          requirements. We will notify you of any material changes by posting the updated policy on our website
          with a new &quot;Effective Date.&quot; Your continued use of our services after such modifications constitutes
          your acceptance of the updated Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection id="contact-us" title="12. Contact Us" index={11}>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy, or wish to update your
          personal information, please contact us at:
        </p>
        <p className="font-semibold text-gray-900">The Brand Box Fabric Studio Dry Cleaners</p>
        <ContactCards />
        <div className="mt-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#E4F4F9]/50 border border-[#00A1E4]/15">
          <p className="text-sm sm:text-base">
            <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within{" "}
            <span className="text-[#00A1E4] font-semibold">7 business days</span>.
          </p>
        </div>
        <p className="font-semibold text-gray-900 flex items-center gap-2 mt-5 sm:mt-6">
          <FaMapMarkerAlt className="text-[#00A1E4] shrink-0" />
          Our Locations
        </p>
        <LocationGrid />
        <p className="mt-4 text-sm sm:text-base">
          All branches are committed to providing you with exceptional service and maintaining the highest
          standards of data protection.
        </p>
      </LegalSection>

      <p className="text-center text-xs sm:text-sm text-gray-500 py-4 sm:py-6 px-2">
        © 2026 The Brand Box Fabric Studio Dry Cleaners. All rights reserved.
      </p>
    </LegalPageLayout>
  );
}

export default PrivacyPolicy;
