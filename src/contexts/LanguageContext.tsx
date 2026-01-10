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

  // History Page
  "history.hero.label": { es: "Nuestra Historia", en: "Our Story" },
  "history.hero.title": { es: "Historia del Monasterio", en: "History of the Monastery" },
  "history.hero.subtitle": { es: "Casi ocho siglos de fe, oración y perseverancia", en: "Nearly eight centuries of faith, prayer, and perseverance" },
  "history.medina.title": { es: "Medina del Campo", en: "Medina del Campo" },
  "history.medina.text1": { es: "Medina del Campo es una de las ciudades más ilustres de Castilla. Con raíces romanas y visigodas, su nombre es claramente de origen árabe. La ciudad fue frecuentemente residencia real, y la Reina Isabel la Católica, que murió aquí, le tuvo especial afecto.", en: "Medina del Campo is one of the most illustrious cities of Castile. With Roman and Visigothic roots, its name is clearly Arabic in origin. The city was frequently a royal residence, and Queen Isabella the Catholic, who died here, held it in special affection." },
  "history.medina.text2": { es: "Durante los siglos XV y XVI, sus ferias y mercados fueron de los más importantes de Europa. Fue aquí donde Santa Teresa de Ávila hizo su primera fundación fuera de su tierra natal, y aquí forjó la reforma de los frailes carmelitas con San Juan de la Cruz.", en: "During the 15th and 16th centuries, its fairs and markets were among the most important in Europe. It was here that Saint Teresa of Ávila made her first foundation outside her homeland, and here she forged the reform of the Carmelite friars with Saint John of the Cross." },
  "history.medina.text3": { es: "En esta histórica villa se encuentra el Convento de Santa Clara, originalmente llamado \"Santa Eufemia\", luego \"Santa Catalina\", y finalmente adquiriendo su nombre actual tras la muerte y canonización de Santa Clara.", en: "In this historic town stands the Convent of Santa Clara, originally named \"Santa Eufemia,\" then \"Santa Catalina,\" and finally acquiring its current name after the death and canonization of Saint Clare." },
  "history.foundation.title": { es: "Fundación", en: "Foundation" },
  "history.foundation.subtitle": { es: "Establecido durante la vida de la propia Santa Clara", en: "Established during the lifetime of Saint Clare herself" },
  "history.foundation.text1": { es: "Aunque existen diferentes opiniones sobre la fundación, lo cierto es que tuvo lugar durante la vida de Santa Clara. Esto se confirma por:", en: "Although there are different opinions regarding the foundation, what is certain is that it took place during the lifetime of Saint Clare. This is confirmed by:" },
  "history.foundation.point1": { es: "La Bula \"Cum sicut vestra\" que el Papa Inocencio IV envió al Convento desde Lyon, fechada el 2 de junio de 1246.", en: "The Bull \"Cum sicut vestra\" that Pope Innocent IV sent to the Convent from Lyon, dated June 2, 1246." },
  "history.foundation.point2": { es: "Una Carta Real del Rey Sancho IV de Castilla, que hace referencia a privilegios concedidos por el Papa Alejandro IV (que reinó 1254–1261), lo que sugiere que el convento ya existía desde hacía algunos años.", en: "A Royal Charter from King Sancho IV of Castile, which references privileges granted by Pope Alexander IV (who reigned 1254–1261), suggesting the convent had already existed for some years." },
  "history.foundation.text2": { es: "Según el Venerable Gonzaga y la tradición común, el monasterio fue fundado por el Rey Fernando III, el Santo, quien continuó la fundación ya iniciada por su predecesor el Rey Enrique I.", en: "According to the Venerable Gonzaga and common tradition, the monastery was founded by King Ferdinand III, the Saint, who continued the foundation already begun by his predecessor King Henry I." },
  "history.foundation.text3": { es: "La tradición nos cuenta que para la fundación, los reyes trajeron dos discípulas de Santa Clara de San Damián, quienes vivieron en este monasterio y están enterradas en la iglesia, al pie de la reja del coro.", en: "Tradition tells us that for the foundation, the kings brought two disciples of Saint Clare from San Damiano, who lived in this monastery and are buried in the church, at the foot of the choir grate." },
  "history.centuries.title": { es: "A Través de los Siglos", en: "Through the Centuries" },
  "history.centuries.subtitle": { es: "Una historia marcada por pruebas y protección real", en: "A history marked by trials and royal protection" },
  "history.timeline.1246.title": { es: "Reconocimiento Papal", en: "Papal Recognition" },
  "history.timeline.1246.text": { es: "El Papa Inocencio IV envía la Bula \"Cum sicut vestra\" desde Lyon, reconociendo formalmente el monasterio.", en: "Pope Innocent IV sends the Bull \"Cum sicut vestra\" from Lyon, formally recognizing the monastery." },
  "history.timeline.1268.title": { es: "Primera Destrucción y Apoyo Real", en: "First Destruction & Royal Support" },
  "history.timeline.1268.text": { es: "El Rey Alfonso X el Sabio escribe a las hermanas desde Sevilla, tranquilizándolas ante las presiones para abandonar el monasterio. Su hijo Sancho IV las anima más tarde a regresar y confirma los privilegios papales.", en: "King Alfonso X the Wise writes to the sisters from Seville, reassuring them amid pressures to leave the monastery. His son Sancho IV later encourages them to return and confirms papal privileges." },
  "history.timeline.15th.title": { es: "La Edad de Oro", en: "The Golden Age" },
  "history.timeline.15th.text": { es: "El monasterio florece junto con las famosas ferias de Medina del Campo. La protección real continúa mientras la ciudad se convierte en un centro del comercio europeo.", en: "The monastery flourishes alongside Medina del Campo's famous fairs. Royal protection continues as the city becomes a hub of European commerce." },
  "history.timeline.1960.title": { es: "El Último Incendio", en: "The Last Fire" },
  "history.timeline.1960.text": { es: "Un incendio devasta parte del monasterio. Con fe y perseverancia, la comunidad reconstruye y continúa su vida contemplativa.", en: "A fire devastates part of the monastery. With faith and perseverance, the community rebuilds and continues its contemplative life." },
  "history.timeline.1980.title": { es: "Repostería Artesanal", en: "Artisanal Bakery" },
  "history.timeline.1980.text": { es: "Las hermanas comienzan a elaborar dulces tradicionales, combinando la vida contemplativa con el trabajo de sus manos — una tradición franciscana viva.", en: "The sisters begin crafting traditional sweets, combining contemplative life with the work of their hands — a living Franciscan tradition." },
  "history.quote": { es: "\"La historia de nuestro Monasterio ha estado marcada por derrumbes, incendios e invasiones, pero también por la protección, el acompañamiento y los privilegios de los Reyes.\"", en: "\"The history of our Monastery has been marked by collapses, fires, and invasions, but also by the protection, accompaniment, and privileges of the Kings.\"" },
  "history.quote.author": { es: "— De los Archivos del Monasterio", en: "— From the Monastery Archives" },

  // Events Page
  "events.hero.label": { es: "Celebraciones", en: "Celebrations" },
  "events.hero.title": { es: "Eventos y Festividades", en: "Events & Feast Days" },
  "events.hero.subtitle": { es: "Únete a nosotras para celebrar nuestra fe a lo largo del año litúrgico", en: "Join us in celebrating our faith throughout the liturgical year" },
  "events.annual.title": { es: "Celebraciones Anuales", en: "Annual Celebrations" },
  "events.annual.subtitle": { es: "Dos eventos principales marcan nuestro calendario litúrgico", en: "Two major events mark our liturgical calendar" },
  "events.holyweek.label": { es: "Semana Santa", en: "Holy Week" },
  "events.holyweek.title": { es: "El Cristo de Santa Clara", en: "The Christ of Santa Clara" },
  "events.holyweek.text": { es: "Durante la Semana Santa, participamos en dos procesiones significativas con nuestro preciado Cristo Gótico (siglos XIII–XIV):", en: "During Holy Week, we participate in two significant processions featuring our treasured Gothic Christ (13th–14th century):" },
  "events.holyweek.thursday": { es: "Jueves Santo:", en: "Holy Thursday:" },
  "events.holyweek.thursday.text": { es: "La Procesión de la Caridad, durante la cual la imagen del Cristo de Santa Clara desciende del monasterio y se une a la procesión por la villa.", en: "The Procession of Charity, during which the image of the Christ of Santa Clara descends from the monastery and joins the procession through the town." },
  "events.holyweek.friday": { es: "Viernes Santo:", en: "Good Friday:" },
  "events.holyweek.friday.text": { es: "La Procesión del Sacrificio, desde la Parroquia de San Miguel hasta el Monasterio, donde la imagen es solemnemente devuelta y colgada una vez más.", en: "The Procession of Sacrifice, from the Parish of San Miguel to the Monastery, where the image is solemnly returned and hung once more." },
  "events.triduum.label": { es: "9–11 de Agosto", en: "August 9–11" },
  "events.triduum.title": { es: "Triduo en Honor a Santa Clara", en: "Triduum in Honor of Saint Clare" },
  "events.triduum.text1": { es: "Del 9 al 11 de agosto, celebramos el Triduo en honor a nuestra fundadora, Santa Clara de Asís, cuya fiesta es el 11 de agosto.", en: "From August 9 to 11, we celebrate the Triduum in honor of our foundress, Saint Clare of Assisi, whose feast day is August 11." },
  "events.triduum.text2": { es: "La estatua de Santa Clara es llevada en procesión por el \"Barrio de las Claras\" — una querida tradición que atrae a muchos fieles de toda la región.", en: "The statue of Saint Clare is carried in procession through the \"Barrio de las Claras\" (Neighborhood of the Clares) — a beloved tradition that draws many faithful from across the region." },
  "events.triduum.text3": { es: "Como el monasterio más antiguo de la \"Villa de los Trece Roeles\", estas celebraciones son especialmente concurridas.", en: "As the oldest monastery in the \"Villa de los Trece Roeles,\" these celebrations are especially well-attended." },
  "events.worship.title": { es: "Horario de Culto", en: "Worship Schedule" },
  "events.worship.subtitle": { es: "Te invitamos a unirte a nosotras en oración", en: "You are welcome to join us in prayer" },
  "events.mass.title": { es: "Misa Diaria", en: "Daily Mass" },
  "events.mass.weekdays": { es: "Días Laborables", en: "Weekdays" },
  "events.mass.sundays": { es: "Domingos y Fiestas", en: "Sundays & Feast Days" },
  "events.exposition.title": { es: "Exposición del Santísimo Sacramento", en: "Exposition of the Blessed Sacrament" },
  "events.exposition.thursdays": { es: "Jueves y Domingos", en: "Thursdays and Sundays" },
  "events.exposition.fridays": { es: "Primeros Viernes de mes", en: "First Fridays of the month" },
  "events.exposition.18th": { es: "El día 18 de cada mes (Oración Vocacional)", en: "The 18th of each month (Vocational Prayer)" },
  "events.exposition.marian": { es: "Fiestas Marianas", en: "Marian Feast Days" },
  "events.exposition.hours": { es: "Horario de Exposición", en: "Exposition Hours" },
  "events.exposition.morning": { es: "Mañana: 9:30 – 13:30", en: "Morning: 9:30 – 13:30" },
  "events.exposition.afternoon": { es: "Tarde: 16:30 – 19:00", en: "Afternoon: 16:30 – 19:00" },
  "events.exposition.benediction": { es: "Concluyendo con la Bendición del Santísimo Sacramento", en: "Concluding with Benediction of the Blessed Sacrament" },
  "events.cta.title": { es: "Únete a Nosotras en Oración", en: "Join Us in Prayer" },
  "events.cta.text": { es: "Ya sea que te unas a nosotras en persona o nos recuerdes en tus oraciones, estamos unidas en el Señor. Que Dios te bendiga con Su paz.", en: "Whether you join us in person or remember us in your prayers, we are united in the Lord. May God bless you with His peace." },

  // Visit Page
  "visit.hero.label": { es: "Descubre", en: "Discover" },
  "visit.hero.title": { es: "Qué Ver", en: "What to See" },
  "visit.hero.subtitle": { es: "Arte sacro y tesoros de nuestro monasterio", en: "Sacred art and treasures of our monastery" },
  "visit.treasures.title": { es: "Tesoros Sagrados", en: "Sacred Treasures" },
  "visit.treasures.subtitle": { es: "Arte y fe unidos a través de los siglos", en: "Art and faith united through centuries" },
  "visit.church.label": { es: "La Iglesia", en: "The Church" },
  "visit.church.title": { es: "Nuestra Capilla Histórica", en: "Our Historic Chapel" },
  "visit.church.text1": { es: "La iglesia del Monasterio de Santa Clara te invita a adentrarte en siglos de oración. Su arquitectura sencilla pero hermosa refleja el carisma franciscano de pobreza y humildad.", en: "The church of the Monastery of Santa Clara invites you into centuries of prayer. Its simple yet beautiful architecture reflects the Franciscan charism of poverty and humility." },
  "visit.church.text2": { es: "Los visitantes son bienvenidos a asistir a Misa o pasar tiempo en oración silenciosa. Las hermanas rezan la Liturgia de las Horas detrás de la reja del coro, continuando una tradición ininterrumpida de alabanza.", en: "Visitors are welcome to attend Mass or spend time in quiet prayer. The sisters pray the Liturgy of the Hours behind the choir grate, continuing an unbroken tradition of praise." },
  "visit.christ.label": { es: "Siglos XIII–XIV", en: "13th–14th Century" },
  "visit.christ.title": { es: "El Cristo Gótico", en: "The Gothic Christ" },
  "visit.christ.text1": { es: "Una de las piezas más preciadas del monasterio es el Cristo Gótico, que data de los siglos XIII al XIV. Este antiguo crucifijo ha sido venerado por los fieles durante más de 700 años.", en: "One of the most treasured pieces of the monastery is the Gothic Christ, dating from the 13th to 14th century. This ancient crucifix has been venerated by the faithful for over 700 years." },
  "visit.christ.text2": { es: "Cada Semana Santa, el Cristo desciende del monasterio para unirse a la Procesión de la Caridad el Jueves Santo, regresando el Viernes Santo en la Procesión del Sacrificio — una tradición profundamente conmovedora y querida por el pueblo de Medina del Campo.", en: "Each Holy Week, the Christ descends from the monastery to join the Procession of Charity on Holy Thursday, returning on Good Friday in the Procession of Sacrifice — a deeply moving tradition cherished by the people of Medina del Campo." },
  "visit.virgin.label": { es: "1540 · Hernando de Esturmio", en: "1540 · Hernando de Esturmio" },
  "visit.virgin.title": { es: "Virgen de la Antigua", en: "Virgen de la Antigua" },
  "visit.virgin.text1": { es: "Una pintura monumental de la Virgen de la Antigua de Hernando de Esturmio, fechada en 1540. Esta magnífica obra es la única pintura creada por este artista sobre lienzo — todas sus demás obras fueron sobre tabla.", en: "A monumental painting of the Virgin of the Antigua by Hernando de Esturmio, dated 1540. This magnificent work is the only painting created by this artist on canvas — all his other works were on wood panels." },
  "visit.virgin.text2": { es: "La pintura refleja la devoción del período renacentista y sigue siendo una pieza significativa del arte religioso español, atesorada por el monasterio y admirada por los historiadores del arte.", en: "The painting reflects the devotion of the Renaissance period and remains a significant piece of Spanish religious art, treasured by the monastery and admired by art historians." },
  "visit.info.title": { es: "Visitando el Monasterio", en: "Visiting the Monastery" },
  "visit.info.text": { es: "La iglesia está abierta a visitantes durante el horario de la repostería y para las Misas programadas. Como comunidad de clausura, el interior del monasterio no está abierto al público, pero damos la bienvenida a todos a rezar en nuestra iglesia y visitar nuestra repostería.", en: "The church is open to visitors during bakery hours and for scheduled Masses. As a cloistered community, the interior of the monastery is not open to the public, but we welcome all to pray in our church and visit our bakery." },
  "visit.hours.title": { es: "Horario de Visita", en: "Visitor Hours" },
  "visit.hours.morning": { es: "Mañana: 9:30 – 14:00", en: "Morning: 9:30 – 14:00" },
  "visit.hours.afternoon": { es: "Tarde: 16:30 – 18:45", en: "Afternoon: 16:30 – 18:45" },
  "visit.hours.sundays": { es: "Domingos y Festivos: Abierto hasta las 19:00", en: "Sundays & Holidays: Open until 19:00" },

  // Contact Page
  "contact.hero.label": { es: "Encuéntranos", en: "Find Us" },
  "contact.hero.title": { es: "Contacto y Ubicación", en: "Contact & Location" },
  "contact.hero.subtitle": { es: "Damos la bienvenida a visitantes, peregrinos y clientes", en: "We welcome visitors, pilgrims, and customers" },
  "contact.address": { es: "Dirección", en: "Address" },
  "contact.phone": { es: "Teléfono", en: "Phone" },
  "contact.email": { es: "Email", en: "Email" },
  "contact.hours": { es: "Horario", en: "Hours" },
  "contact.sundays-note": { es: "(Domingos hasta las 19:00)", en: "(Sundays until 19:00)" },
  "contact.map.title": { es: "Cómo Llegar", en: "How to Reach Us" },
  "contact.map.subtitle": { es: "Ubicados en el corazón del histórico Medina del Campo", en: "Located in the heart of historic Medina del Campo" },
  "contact.directions.title": { es: "Indicaciones para Llegar", en: "Driving Directions" },
  "contact.directions.text": { es: "Viajando por la Autovía del Noroeste (A-6) desde Madrid, estamos a 200 metros al entrar por la 2ª entrada a Medina del Campo. Viniendo desde dirección Coruña-Madrid, tome la 3ª entrada a Medina del Campo.", en: "Traveling on the Northwest Highway (A-6) from Madrid, we are 200 meters away when entering through the 2nd entrance to Medina del Campo. Coming from Coruña-Madrid direction, take the 3rd entrance to Medina del Campo." },
  "contact.bakery-hours": { es: "Horario de Repostería", en: "Bakery Hours" },
  "contact.daily": { es: "Diario", en: "Daily" },
  "contact.sundays-holidays": { es: "Domingos y Festivos", en: "Sundays & Holidays" },
  "contact.sundays-hours": { es: "Mismo horario, pero abierto hasta las 19:00 por la tarde", en: "Same hours, but open until 19:00 in the afternoon" },
  "contact.special-orders": { es: "Para pedidos especiales, puede acordar horarios de recogida llamando con antelación. Por favor, evite llamar entre 14:30–16:30 y 19:00–19:45.", en: "For special orders, you can arrange pickup times by calling in advance. Please avoid calling between 14:30–16:30 and 19:00–19:45." },
  "contact.mass-schedule": { es: "Horario de Misas", en: "Mass Schedule" },
  "contact.weekdays": { es: "Días Laborables", en: "Weekdays" },
  "contact.sundays-feast": { es: "Domingos y Fiestas", en: "Sundays & Feast Days" },
  "contact.exposition-note": { es: "Exposición del Santísimo Sacramento los jueves, domingos, primeros viernes y fiestas marianas.", en: "Exposition of the Blessed Sacrament on Thursdays, Sundays, First Fridays, and Marian Feast Days." },
  "contact.peace": { es: "Paz y Bien", en: "Peace and Good" },
  "contact.peace.text": { es: "Esperamos darle la bienvenida a nuestro monasterio. Que Dios bendiga su camino.", en: "We look forward to welcoming you to our monastery. May God bless your journey." },

  // Who We Are Page
  "whoweare.hero.label": { es: "Nuestra Comunidad", en: "Our Community" },
  "whoweare.hero.title": { es: "Las Hermanas Clarisas", en: "The Poor Clare Sisters" },
  "whoweare.hero.subtitle": { es: "Viviendo el Evangelio en oración, pobreza y amor fraterno", en: "Living the Gospel in prayer, poverty, and sisterly love" },
  "whoweare.intro.title": { es: "Quiénes Somos", en: "Who We Are" },
  "whoweare.intro.text1": { es: "Somos una comunidad de Hermanas Clarisas, viviendo en clausura como una forma especial de expresar nuestra pertenencia a Jesucristo y nuestro servicio y dedicación a la Iglesia y a todas las personas — vivido como un don y una respuesta libre de amor.", en: "We are a community of Poor Clare Sisters, living in enclosure as a special way of expressing our belonging to Jesus Christ and our service and dedication to the Church and all people — lived as a gift and a free response of love." },
  "whoweare.intro.text2": { es: "Nuestros fundadores son Francisco y Clara de Asís, quienes hace más de 800 años en el Valle de Umbría en Italia, comenzaron una vida según el Evangelio, viviendo en pobreza y minoridad (Francisco), y en clausura (Clara).", en: "Our founders are Francis and Clare of Assisi, who more than 800 years ago in the Umbrian Valley of Italy, began a life according to the Gospel, living in poverty and minority (Francis), and in enclosure (Clare)." },
  "whoweare.intro.text3": { es: "Su mensaje es tan relevante hoy como siempre: vivir el Evangelio con la observancia de cuatro votos — castidad, pobreza, obediencia y clausura.", en: "Their message is as relevant today as ever: living the Gospel with the observance of four vows — chastity, poverty, obedience, and enclosure." },
  "whoweare.clarissa.title": { es: "Una Clarisa Es...", en: "A Clarissa Is..." },
  "whoweare.clarissa.subtitle": { es: "Siguiendo los consejos de Santa Clara", en: "Following the counsels of Saint Clare" },
  "whoweare.poverty.title": { es: "En Pobreza", en: "In Poverty" },
  "whoweare.poverty.text": { es: "Como elemento especial del carisma clariano, participar en la pobreza de Cristo — dejando todo para seguirle.", en: "As a special element of the Clarian charism, to participate in the poverty of Christ — leaving all to follow Him." },
  "whoweare.obedience.title": { es: "En Obediencia", en: "In Obedience" },
  "whoweare.obedience.text": { es: "Ofreciendo a Dios la entrega total de nuestra propia voluntad, buscando en todo la voluntad de Dios.", en: "Offering to God the total surrender of our own will, seeking in all things the will of God." },
  "whoweare.virginity.title": { es: "En Virginidad", en: "In Virginity" },
  "whoweare.virginity.text": { es: "Como expresión de amor esponsal al Redentor mismo — entregando nuestros corazones enteramente a Cristo.", en: "As an expression of spousal love for the Redeemer Himself — giving our hearts entirely to Christ." },
  "whoweare.enclosure.title": { es: "En Clausura", en: "In Enclosure" },
  "whoweare.enclosure.text": { es: "Un espacio de silencio y oración, donde vivimos totalmente dedicadas a la contemplación e intercesión por el mundo.", en: "A space of silence and prayer, where we live wholly dedicated to contemplation and intercession for the world." },
  "whoweare.today.title": { es: "Nuestra Comunidad Hoy", en: "Our Community Today" },
  "whoweare.today.text": { es: "Actualmente, la comunidad está formada por 10 hermanas que, alternando la oración con el trabajo, se esfuerzan por ser una referencia de vida evangélica y alegría, en el más puro estilo franciscano, para el mundo.", en: "Currently, the community is formed by 10 sisters who, alternating prayer with work, strive to be a reference of evangelical life and joy, in the purest Franciscan style, for the world." },
  "whoweare.daily.title": { es: "Nuestra Vida Diaria", en: "Our Daily Life" },
  "whoweare.daily.text": { es: "Siguiendo la Regla de las Hermanas Pobres de Santa Clara, vivimos cada día al ritmo de la Liturgia de las Horas, la Eucaristía, la oración personal y el trabajo manual. Llenas del espíritu del Señor, damos testimonio al mundo de Dios: Su bondad, fidelidad, paciencia y misericordia.", en: "Following the Rule of the Poor Sisters of Saint Clare, we live each day in rhythm with the Liturgy of the Hours, Eucharist, personal prayer, and manual work. Filled with the spirit of the Lord, we give witness to God's world: His goodness, faithfulness, patience, and mercy." },
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
