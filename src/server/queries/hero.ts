import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (): string[] => {
  return ["Madrid"];
}

// Using React cache to memoize the query
export const getHeroProps = (): HeroProps | null => {
  return {
  "title": "Real Estate en Madrid",
  "subtitle": "Agencia inmobiliaria especializada en el mercado de vivienda prime y de lujo en Madrid, con un servicio integral y personalizado para comprar, vender, alquilar e invertir.",
  "contactButton": "Contáctanos",
  "backgroundType": "video",
  "backgroundImage": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/139/hero/background_interior_v2.jpg",
  "backgroundVideo": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/139/hero/background_interior_v2.mp4",
  "findPropertyButton": "Explorar Propiedades"
};
}
