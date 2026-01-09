import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.history": { es: "Historia", en: "History" },
  "nav.who-we-are": { es: "Quiénes Somos", en: "Who We Are" },
  "nav.events": { es: "Eventos", en: "Events" },
  "nav.visit": { es: "Visitar", en: "Visit" },
  "nav.bakery": { es: "Repostería", en: "Bakery" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.gallery": { es: "Galería", en: "Gallery" },
  
  // Hero Section
  "hero.since": { es: "Desde 1246", en: "Since 1246" },
  "hero.title": { es: "Monasterio de Santa Clara", en: "Monastery of Santa Clara" },
  "hero.subtitle": { es: "Un lugar de oración, paz y contemplación en el corazón de Medina del Campo, Castilla.", en: "A place of prayer, peace, and contemplation in the heart of Medina del Campo, Castile." },
  "hero.discover": { es: "Descubre Nuestra Historia", en: "Discover Our Story" },
  "hero.bakery": { es: "Visita Nuestra Repostería", en: "Visit Our Bakery" },
  
  // Welcome Section
  "welcome.label": { es: "Bienvenidos", en: "Welcome" },
  "welcome.title": { es: "Un Lugar de Paz y Oración", en: "A Place of Peace & Prayer" },
  "welcome.text1": { es: "En la histórica villa de Medina del Campo, el Monasterio de Santa Clara ha sido un faro de vida espiritual durante casi ocho siglos. Nuestra comunidad de Hermanas Clarisas continúa la tradición contemplativa iniciada por los Santos Francisco y Clara de Asís.", en: "Nestled in the historic town of Medina del Campo, the Monastery of Santa Clara has been a beacon of spiritual life for nearly eight centuries. Our community of Poor Clare Sisters continues the contemplative tradition begun by Saints Francis and Clare of Assisi." },
  "welcome.text2": { es: "Te invitamos a descubrir nuestra historia, unirte a nosotras en oración y disfrutar de los dulces artesanales elaborados con amor por nuestras hermanas.", en: "We invite you to discover our history, join us in prayer, and experience the artisanal sweets lovingly prepared by our sisters." },
  "welcome.learn": { es: "Conoce nuestra comunidad", en: "Learn about our community" },
  "welcome.years": { es: "Años de Oración", en: "Years of Prayer" },
  
  // Features
  "features.title": { es: "Descubre Santa Clara", en: "Discover Santa Clara" },
  "features.subtitle": { es: "Explora el rico patrimonio de nuestro monasterio, su vibrante comunidad y tradiciones artesanales", en: "Explore our monastery's rich heritage, vibrant community, and artisanal traditions" },
  "features.heritage.title": { es: "Patrimonio Sagrado", en: "Sacred Heritage" },
  "features.heritage.desc": { es: "Visita nuestra iglesia gótica, venera la antigua figura de Cristo y admira la notable pintura de la Virgen de la Antigua de 1540.", en: "Visit our Gothic church, venerate the ancient Christ figure, and see the remarkable Virgen de la Antigua painting from 1540." },
  "features.community.title": { es: "Comunidad de Oración", en: "Community of Prayer" },
  "features.community.desc": { es: "Diez hermanas viven en oración contemplativa, siguiendo la Regla de Santa Clara, intercediendo por la Iglesia y el mundo.", en: "Ten sisters live in contemplative prayer, following the Rule of Saint Clare, interceding for the Church and the world." },
  "features.bakery.title": { es: "Repostería Artesanal", en: "Artisanal Bakery" },
  "features.bakery.desc": { es: "Desde 1980, elaboramos dulces tradicionales con amor — mazapán, pastas de almendra y especialidades de temporada.", en: "Since 1980, we craft traditional sweets with love — marzipan, almond pastries, and seasonal specialties." },
  
  // Bakery
  "bakery.title": { es: "Repostería del Convento", en: "Convent Bakery" },
  "bakery.subtitle": { es: "Hecho a mano con oración y tradición", en: "Handmade with prayer and tradition" },
  "bakery.view-all": { es: "Ver Todos los Productos", en: "View All Products" },
  "bakery.tradition": { es: "Tradición Artesanal", en: "Artisanal Tradition" },
  "bakery.hero-subtitle": { es: "Dulces artesanales elaborados con oración y amor desde 1980", en: "Handmade sweets crafted with prayer and love since 1980" },
  "bakery.our-craft": { es: "Nuestro Oficio", en: "Our Craft" },
  "bakery.our-specialties": { es: "Nuestras Especialidades", en: "Our Specialties" },
  "bakery.traditional-recipes": { es: "Recetas tradicionales elaboradas con esmero", en: "Traditional recipes made with care" },
  "bakery.where-to-buy": { es: "Dónde Comprar", en: "Where to Buy" },
  "bakery.visit-us": { es: "Visítenos en persona para adquirir nuestros dulces", en: "Visit us in person to purchase our sweets" },
  "bakery.hours": { es: "Horario", en: "Opening Hours" },
  "bakery.morning": { es: "Mañana", en: "Morning" },
  "bakery.afternoon": { es: "Tarde", en: "Afternoon" },
  "bakery.sundays": { es: "Domingos y Festivos", en: "Sundays & Holidays" },
  "bakery.order-phone": { es: "Pedidos por Teléfono", en: "Order by Phone" },
  "bakery.phone-info": { es: "Puede realizar pedidos por teléfono o WhatsApp desde cualquier lugar de España:", en: "You can place orders by phone or WhatsApp from anywhere in Spain:" },
  "bakery.avoid-calling": { es: "Por favor, evite llamar entre 14:30–16:30 y 19:00–19:45", en: "Please avoid calling between 14:30–16:30 and 19:00–19:45" },
  
  // Quote
  "quote.text": { es: "Amadle totalmente, a Él que se entregó totalmente por vuestro amor.", en: "Love Him totally, who gave Himself totally for your love." },
  "quote.author": { es: "— Santa Clara de Asís", en: "— Saint Clare of Assisi" },
  
  // CTA
  "cta.plan-visit": { es: "Planifica tu Visita", en: "Plan Your Visit" },
  "cta.visit-desc": { es: "Únete a nosotras para la Misa, explora nuestra histórica iglesia o visita nuestra repostería. Recibimos a peregrinos y visitantes con el corazón abierto.", en: "Join us for Mass, explore our historic church, or visit our bakery. We welcome pilgrims and visitors with open hearts." },
  "cta.what-to-see": { es: "Qué Ver", en: "What to See" },
  "cta.contact-hours": { es: "Contacto y Horarios", en: "Contact & Hours" },
  "cta.get-directions": { es: "Cómo Llegar", en: "Get Directions" },
  
  // Gallery
  "gallery.title": { es: "Galería de Imágenes", en: "Photo Gallery" },
  "gallery.subtitle": { es: "Momentos y espacios de nuestro monasterio", en: "Moments and spaces of our monastery" },
  "gallery.empty": { es: "No hay imágenes disponibles aún.", en: "No images available yet." },
  
  // Admin
  "admin.login": { es: "Acceso Administrador", en: "Admin Login" },
  "admin.email": { es: "Correo electrónico", en: "Email" },
  "admin.password": { es: "Contraseña", en: "Password" },
  "admin.signin": { es: "Iniciar Sesión", en: "Sign In" },
  "admin.dashboard": { es: "Panel de Administración", en: "Admin Dashboard" },
  "admin.products": { es: "Productos", en: "Products" },
  "admin.gallery": { es: "Galería", en: "Gallery" },
  "admin.logout": { es: "Cerrar Sesión", en: "Logout" },
  "admin.add-product": { es: "Añadir Producto", en: "Add Product" },
  "admin.edit-product": { es: "Editar Producto", en: "Edit Product" },
  "admin.add-image": { es: "Añadir Imagen", en: "Add Image" },
  "admin.edit-image": { es: "Editar Imagen", en: "Edit Image" },
  "admin.save": { es: "Guardar", en: "Save" },
  "admin.cancel": { es: "Cancelar", en: "Cancel" },
  "admin.delete": { es: "Eliminar", en: "Delete" },
  "admin.available": { es: "Disponible", en: "Available" },
  "admin.not-available": { es: "No Disponible", en: "Not Available" },
  "admin.name-es": { es: "Nombre (Español)", en: "Name (Spanish)" },
  "admin.name-en": { es: "Nombre (Inglés)", en: "Name (English)" },
  "admin.desc-es": { es: "Descripción (Español)", en: "Description (Spanish)" },
  "admin.desc-en": { es: "Descripción (Inglés)", en: "Description (English)" },
  "admin.price": { es: "Precio (€)", en: "Price (€)" },
  "admin.image": { es: "Imagen", en: "Image" },
  "admin.title-es": { es: "Título (Español)", en: "Title (Spanish)" },
  "admin.title-en": { es: "Título (Inglés)", en: "Title (English)" },
  "admin.category": { es: "Categoría", en: "Category" },
  "admin.no-access": { es: "No tienes permisos de administrador", en: "You don't have admin permissions" },
  
  // Footer
  "footer.spiritual": { es: "Vida Espiritual", en: "Spiritual Life" },
  "footer.bakery": { es: "Repostería", en: "Bakery" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.rights": { es: "Todos los derechos reservados", en: "All rights reserved" },
  "footer.monastery-name": { es: "Monasterio de Santa Clara", en: "Monastery of Santa Clara" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "es";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
