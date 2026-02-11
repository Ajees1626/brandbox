function TestimonialCard({ quote, author, role }) {
  return (
    <div className="text-center">
      <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl italic leading-relaxed mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
        "{quote}"
      </p>
      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">
        {author}
      </h4>
      <span className="text-xs sm:text-sm md:text-base text-gray-500">{role}</span>
    </div>
  );
}

export default TestimonialCard;
