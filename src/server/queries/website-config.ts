
import {
  type CardDisplayConfig,
  DEFAULT_CARD_DISPLAY,
  resolveCardDisplay,
} from "~/lib/card-display";
import {
  isAccount139,
  ACCOUNT_139_DESCRIPTION_ALIGN,
} from "~/lib/account-overrides/139";

export type LinkItem = {
  title: string;
  url: string;
};

export type LinkCategory = {
  name: string;
  links: LinkItem[];
};

export const getLinksProps = (): LinkCategory[] => {
  return [];
}

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  questions: FaqItem[];
};

export const getFaqsProps = (): FaqCategory[] => {
  return [];
}

/**
 * Per-account website feature flags + light config. Stored as a JSON string in
 * `website_config.features_props`. Every field is optional; when undefined the
 * caller falls back to the historical default, so a null column = today's behavior.
 */
export type FeaturesProps = {
  pages?: {
    promociones?: boolean;
    servicios?: boolean;
    nosotros?: boolean;
  };
  sections?: {
    socialFamily?: boolean;
  };
  menuLabels?: {
    segundaMano?: string;
    alquilar?: string;
    inversion?: string;
    inversionSubtitle?: string;
    inversionHref?: string;
    vender?: string;
    /** Label for the contact CTA / titles (e.g. "Contacto"). Default "Contáctanos". */
    contacto?: string;
  };
  /** Hero shows direct Venta/Alquiler access buttons instead of the search bar. */
  heroDirectAccess?: boolean;
  /** Navbar Venta/Alquiler are direct links (no property-type mega-menu). */
  navDirectLinks?: boolean;
  /** Show the "Buscar por referencia" search in the navbar. Default true. */
  referenceSearch?: boolean;
  /** Show the bottom call-to-action on the /servicios page. Default true. */
  serviciosCta?: boolean;
  /** Contact CTA shows only the button (no heading/blurb). Default false. */
  contactCtaMinimal?: boolean;
  logoSize?: "standard" | "large" | "xlarge";
  /** Hero section height: "standard" (~88vh) or "full" (fills the screen). */
  heroSize?: "standard" | "full";
  /**
   * Hero banner height on the inner pages (/servicios, /nosotros):
   * "short" (~50vh) | "standard" (~75vh, default) | "full" (fills the screen).
   */
  pageHeroSize?: "short" | "standard" | "full";
  /**
   * "minimal" hides the small uppercase kicker above section titles and the
   * subtitle below them, site-wide, for a cleaner look. Defaults to "standard".
   */
  headerStyle?: "standard" | "minimal";
  /** When true, footer navigation renders as cards and the property-types column is hidden. */
  footerCards?: boolean;
  /**
   * /nosotros page layout. "default" (centered origins → values grid → team
   * grid) | "split" (origins left, values cards right, compact team below).
   * Unset → "default". Both variants render entirely from about_props.
   */
  nosotrosLayout?: "default" | "split";
  /**
   * Text alignment for description/paragraph blocks (service-card descriptions,
   * About/Nosotros body, property descriptions). Unset → keep each block's
   * existing alignment; "justify"/"center" override it site-wide.
   */
  descriptionAlign?: "justify" | "center";
  /**
   * Property-detail "Características" section layout.
   * "sections" (default) → grouped with section titles and the
   * "Ver más características" toggle. "flat" → every detail row in one block
   * and every feature chip in another, with no section titles or toggle.
   */
  characteristicsLayout?: "sections" | "flat";
  /**
   * Visual style of the property-detail characteristics.
   * "default" (today) | "boxed" (stat cards) | "emphasized" (stacked rows with
   * stronger hierarchy) | "twotone" (filled panel with alternating row shading).
   */
  characteristicsStyle?: "default" | "boxed" | "emphasized" | "twotone";
};

/** Read the legacy `metadata.modules.promotions` flag (older accounts gated /promociones here). */
function readLegacyPromotions(metadata: string | null | undefined): boolean | undefined {
  if (!metadata) return undefined;
  try {
    const raw =
      typeof metadata === "string" ? (JSON.parse(metadata) as unknown) : metadata;
    const modules =
      raw && typeof raw === "object" && "modules" in raw
        ? (raw as { modules?: { promotions?: unknown } }).modules
        : undefined;
    return modules?.promotions === true ? true : undefined;
  } catch {
    return undefined;
  }
}

export const getFeaturesProps = (): FeaturesProps => {
  return {
  "pages": {
  "nosotros": true,
  "servicios": true
},
  "heroSize": "full",
  "logoSize": "xlarge",
  "menuLabels": {
  "vender": "",
  "contacto": "Contacto",
  "inversion": "",
  "segundaMano": "Venta",
  "inversionHref": "/venta-propiedades/todas-ubicaciones",
  "inversionSubtitle": "Nuestra selección de propiedades",
  "alquilar": "Alquiler"
},
  "footerCards": true,
  "headerStyle": "minimal",
  "pageHeroSize": "short",
  "serviciosCta": false,
  "navDirectLinks": true,
  "referenceSearch": false,
  "descriptionAlign": "justify",
  "heroDirectAccess": true,
  "contactCtaMinimal": true,
  "characteristicsStyle": "emphasized",
  "characteristicsLayout": "sections",
  "nosotrosLayout": "split"
};
}

export type ModulesConfig = {
  promotionsEnabled: boolean;
};

// Thin wrapper kept for existing callers; promotions now lives in features_props
// (with legacy metadata.modules.promotions folded in by getFeaturesProps).
export const getModulesConfig = (): ModulesConfig => {
  return {
  "promotionsEnabled": false
};
}

export type PropertiesConfig = {
  title: string;
  subtitle: string;
  buttonText: string;
  itemsPerPage?: number;
  defaultSort?: string;
  showDescription?: boolean;
  showReference?: boolean;
  cardDisplay: CardDisplayConfig;
};

export const getPropertiesConfig = (): PropertiesConfig => {
  return {
  "title": "Nuestras Propiedades",
  "subtitle": "",
  "buttonText": "Ver Todas las Propiedades",
  "cardDisplay": {
  "cardTitle": "location",
  "cardEyebrow": "none",
  "cardLocationField": "neighborhood"
},
  "itemsPerPage": 12,
  "showDescription": false,
  "showReference": false,
  "defaultSort": "date-desc"
};
}

export type SEOConfig = {
  title: string;
  description: string;
  name?: string;
  image?: string;
  url?: string;
  telephone?: string;
  email?: string;
  keywords?: string[] | string; // Support both array and string formats
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  /** Per-account Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX"). */
  gaMeasurementId?: string;
};

export const getSEOConfig = (): SEOConfig => {
  return {
  "title": "Domus Aurea Capital | Inmobiliaria en Madrid",
  "description": "Domus Aurea Capital: agencia inmobiliaria de lujo en Madrid. Especialistas en compra, venta, alquiler e inversión en vivienda prime con servicio integral 360.",
  "keywords": "Vivienda de lujo, Mercado prime, Inversión inmobiliaria, Alquiler corporativo, Madrid, Barrio de Salamanca, Centro",
  "name": "Domus Aurea Capital",
  "email": "info@domusaureacapital.com",
  "telephone": "913 19 57 09",
  "url": "https://www.domusaureacapital.com/",
  "ogTitle": "Domus Aurea Capital",
  "ogDescription": "Domus Aurea Capital: agencia inmobiliaria de lujo en Madrid. Especialistas en compra, venta, alquiler e inversión en vivienda prime con servicio integral 360.",
  "ogType": "website",
  "ogLocale": "es_ES",
  "ogSiteName": "Domus Aurea Capital"
};
}
