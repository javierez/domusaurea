

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": false,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Oficina Velázquez",
  "address": {
  "street": "Calle Velázquez 14, 2º Derecha",
  "city": "Madrid",
  "state": "Madrid",
  "country": "España",
  "postalCode": "28001"
},
  "phoneNumbers": {
  "main": "913 19 57 09",
  "sales": "681181432"
},
  "emailAddresses": {
  "info": "info@domusaureacapital.com"
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: 9:00 - 19:00",
  "saturday": "Sábado: 10:00 - 14:00",
  "sunday": "Domingo: Cerrado"
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Calle%20Vel%C3%A1zquez%2014%2C%202%C2%BA%20Derecha%2C%20Madrid%2C%20Madrid%2C%2028001",
  "isDefault": true
}]
};
}

