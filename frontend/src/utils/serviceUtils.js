import servicesData from '../data/servicesData.json'

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function getServiceBySlug(slug) {
  const all = [...servicesData.services, ...servicesData.exclusiveServices]
  return all.find((s) => slugify(s.title) === slug)
}

export function getAllServicesWithSlugs() {
  const services = servicesData.services.map((s) => ({ ...s, slug: slugify(s.title), type: 'services' }))
  const exclusive = servicesData.exclusiveServices.map((s) => ({ ...s, slug: slugify(s.title), type: 'exclusive' }))
  return [...services, ...exclusive]
}
