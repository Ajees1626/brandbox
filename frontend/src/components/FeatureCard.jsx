function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="text-center">
      <div className="text-blue-600 text-5xl mb-4 flex justify-center">
        {Icon && <Icon />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard
