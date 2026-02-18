import { FaStar } from "react-icons/fa";

function TestimonialCard({ quote, author, role }) {
  return (
    <div>
      {/* Stars */}
      <div className="flex justify-center mb-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="text-gray-700 text-base sm:text-lg lg:text-xl italic leading-relaxed mb-6">
        "{quote}"
      </p>

      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
        {author}
      </h4>

      <span className="text-sm text-gray-500">{role}</span>
    </div>
  );
}

export default TestimonialCard;
