import { Link } from 'react-router-dom'

function ServiceCard({ icon: Icon, title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="text-blue-600 text-4xl mb-4">{Icon && <Icon />}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <Link
          to={link}
          className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Learn more →
        </Link>
      )}
    </div>
  )
}

export default ServiceCard
