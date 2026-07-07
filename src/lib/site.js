export const site = {
  name: "Dr. Janofilo",
  owner: "Alejandro Frey",
  role: "Ingeniero en Informática",
  phoneDisplay: "+56 9 5396 3048",
  phoneRaw: "56953963048",
  email: "contacto@drjanofilo.cl",
  address: "Echeñique con Bremen, Ñuñoa",
  addressShort: "Ñuñoa, Santiago",
  mapsQuery: "Echeñique con Bremen, Ñuñoa, Santiago, Chile",
  priceFrom: "$20.000",
};

const waMessage = encodeURIComponent(
  "Hola Dr. Janofilo 👋, quiero mejorar el rendimiento de mi computador. ¿Me puedes ayudar?"
);

export const whatsappUrl = `https://wa.me/${site.phoneRaw}?text=${waMessage}`;
export const telUrl = `tel:+${site.phoneRaw}`;
export const mailUrl = `mailto:${site.email}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapsQuery
)}`;
