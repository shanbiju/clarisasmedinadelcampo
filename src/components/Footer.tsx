import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language, t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">
              {t("footer.monastery-name")}
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {language === "es" 
                ? "Una comunidad de Hermanas Clarisas en Medina del Campo, España, viviendo una vida contemplativa desde 1246."
                : "A community of Poor Clare Sisters in Medina del Campo, Spain, living a contemplative life since 1246."}
            </p>
            <p className="mt-4 text-sm italic text-primary-foreground/70">
              {language === "es" ? '"Paz y Bien"' : '"Peace and Good"'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              {language === "es" ? "Explorar" : "Explore"}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/history" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("nav.history")}
              </Link>
              <Link to="/who-we-are" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("nav.who-we-are")}
              </Link>
              <Link to="/bakery" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("nav.bakery")}
              </Link>
              <Link to="/gallery" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("nav.gallery")}
              </Link>
              <Link to="/visit" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("nav.visit")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-gold-light" />
                <span className="text-primary-foreground/80">
                  Duque de Ahumada, 49<br />
                  47400 Medina del Campo<br />
                  Valladolid, Spain
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-gold-light" />
                <a href="tel:+34983800593" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +34 983 800 593
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-gold-light" />
                <a href="mailto:contact@santaclara.es" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  contact@santaclara.es
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              {language === "es" ? "Horario Repostería" : "Bakery Hours"}
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <Clock size={18} className="flex-shrink-0 mt-0.5 text-gold-light" />
              <div className="text-primary-foreground/80">
                <p>{language === "es" ? "Mañana" : "Morning"}: 9:30 – 14:00</p>
                <p>{language === "es" ? "Tarde" : "Afternoon"}: 16:30 – 18:45</p>
                <p className="mt-2 text-xs">
                  {language === "es" ? "Domingos y Festivos: hasta 19:00" : "Sundays & Holidays: until 19:00"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {t("footer.monastery-name")}. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
