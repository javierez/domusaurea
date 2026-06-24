import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (): AboutProps | null => {
  return {
  "image": "/placeholder-about.jpg",
  "title": "Sobre Nosotros",
  "values": [{
  "icon": "Layers",
  "title": "Servicio integral 360 + 1",
  "description": "Cubrimos cada fase de la operación: búsqueda, rehabilitación, property management y asesoramiento legal y fiscal."
}, {
  "icon": "ShieldCheck",
  "title": "Discreción y profesionalidad",
  "description": "Atención personalizada con la máxima discreción, propia del mercado de lujo."
}, {
  "icon": "Award",
  "title": "Compromiso con la excelencia",
  "description": "Acompañamos y asesoramos al cliente durante todo el proceso de inversión."
}],
  "content": "En Domus Aurea Capital somos especialistas en el mercado de vivienda prime y de lujo en Madrid. Desde nuestra sede en el barrio de Salamanca, acompañamos a nuestros clientes en cada paso del proceso inmobiliario, ofreciendo un servicio integral que combina profesionalidad, discreción y un profundo conocimiento del sector.",
  "showKPI": false,
  "content2": "Nuestro enfoque \"360 + 1\" nos permite cubrir todas las fases de la operación: desde la búsqueda de la vivienda ideal hasta la rehabilitación, property management y asesoramiento legal y fiscal. Garantizamos una experiencia segura, personalizada y orientada a maximizar la rentabilidad de cada inversión.",
  "kpi2Data": "241+",
  "kpi2Name": "Clientes satisfechos",
  "kpi3Data": "3",
  "kpi3Name": "Zonas de actuación",
  "kpi4Data": "4.8/5",
  "kpi4Name": "Valoración media",
  "services": [{
  "icon": "Home",
  "title": "Compra y venta"
}, {
  "icon": "Key",
  "title": "Alquiler"
}, {
  "icon": "Search",
  "title": "Búsqueda de vivienda"
}, {
  "icon": "Hammer",
  "title": "Rehabilitación del inmueble"
}, {
  "icon": "Building",
  "title": "Property Management"
}, {
  "icon": "Scale",
  "title": "Asesoramiento legal y fiscal"
}],
  "subtitle": "Real Estate en Madrid",
  "buttonName": "Contacta a Nuestro Equipo",
  "originsTitle": "De dónde venimos",
  "originsContent": "Fundada en 2019, Domus Aurea Capital ha consolidado su presencia en el segmento de vivienda de lujo de Madrid. Desde nuestros inicios, nos hemos distinguido por nuestra profesionalidad, discreción y compromiso inquebrantable con la excelencia, valores que nos han permitido ganarnos la confianza de clientes que buscan un servicio diferencial en el mercado prime.",
  "extendedServices": [{
  "icon": "Home",
  "title": "Compra y venta",
  "description": "Comercialización de viviendas en venta en las zonas prime de Madrid, buscando constantemente la mejor opción de compraventa para cada cliente.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/servicios/svc-compra-venta.jpg"
}, {
  "icon": "Key",
  "title": "Alquiler",
  "description": "Gestión de alquileres residenciales y soluciones de alquiler corporativo y de larga estancia.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/servicios/svc-alquiler.jpg"
}, {
  "icon": "Search",
  "title": "Búsqueda de vivienda",
  "description": "Localización personalizada del inmueble que mejor se ajusta a las necesidades y objetivos de inversión del cliente.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/servicios/svc-busqueda.jpg"
}, {
  "icon": "Hammer",
  "title": "Rehabilitación del inmueble",
  "description": "Reforma y puesta en valor de la propiedad para maximizar su atractivo y rentabilidad.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/servicios/svc-rehabilitacion.jpg"
}, {
  "icon": "Building",
  "title": "Property Management",
  "description": "Gestión integral de la propiedad, optimizando la rentabilidad mediante alquileres corporativos o de larga estancia.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/servicios/svc-property-management.jpg"
}, {
  "icon": "Scale",
  "title": "Asesoramiento legal y fiscal",
  "description": "Acompañamiento jurídico y fiscal durante todo el proceso de inversión.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/servicios/svc-legal-fiscal.jpg"
}],
  "aboutSectionTitle": "Nuestra Misión",
  "nosotrosPageTitle": "Sobre Nosotros",
  "servicesPageTitle": "Nuestros Servicios",
  "maxServicesDisplayed": 6,
  "nosotrosPageSubtitle": "Excelencia y discreción en el mercado inmobiliario de lujo madrileño",
  "servicesPageSubtitle": "Soluciones integrales para cada fase de tu inversión inmobiliaria",
  "servicesSectionTitle": "Nuestros Servicios",
  "nosotrosHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/nosotros/nosotros-hero.jpg",
  "servicesHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/servicios/servicios-hero.jpg",
  "team": [{
  "name": "Jesús Romero",
  "role": "CEO & Founder",
  "userId": "4a5f45a2-c3a7-4a67-a92e-2917ec2150e3"
}, {
  "name": "Sofía Trancón",
  "role": "Real Estate Rentals Director",
  "userId": "03020de8-afa3-4549-ae72-4466f2b9321b"
}, {
  "name": "Alejandra Sanz",
  "role": "Office Manager",
  "userId": "4cd85109-af80-40b0-8651-7d5be473a80d"
}, {
  "name": "Sergio Sánchez",
  "role": "Real Estate Consultant",
  "userId": "1a6ee1f9-d2a3-47df-895b-0511fd36a7d9"
}, {
  "name": "Nicolás Gutiérrez-Colomer",
  "role": "Real Estate Consultant",
  "userId": "278317c9-85af-47ef-aff9-f8e3f88ae491"
}, {
  "name": "Alejandra Galiana",
  "role": "Property Manager & Investment Analyst",
  "userId": "1a3992cf-edf8-4d5c-b3b8-01503fe9f685"
}]
};
}
