import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            {t("contact.hero.label")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            {t("contact.hero.title")}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {t("contact.address")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Duque de Ahumada, 49<br />
                47400 Medina del Campo<br />
                Valladolid, Spain
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {t("contact.phone")}
              </h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <a href="tel:+34983800593" className="block hover:text-primary transition-colors">
                  +34 983 800 593
                </a>
                <a href="tel:+34603850576" className="block hover:text-primary transition-colors">
                  +34 603 850 576
                </a>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {t("contact.email")}
              </h3>
              <a 
                href="mailto:clarisasmedinadelcampo@gmail.com" 
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                clarisasmedinadelcampo@gmail.com
              </a>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {t("contact.hours")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                9:30 – 14:00<br />
                16:30 – 18:45<br />
                <span className="text-xs">{t("contact.sundays-note")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("contact.map.title")}
            subtitle={t("contact.map.subtitle")}
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              {/* Map embed placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.123456789!2d-4.912!3d41.312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQzLjIiTiA0wrA1NCc0My4yIlc!5e0!3m2!1sen!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Monastery location"
                  className="w-full h-full min-h-[300px]"
                ></iframe>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Navigation className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {t("contact.directions.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("contact.directions.text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Detail */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  {t("contact.bakery-hours")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">{t("contact.daily")}</p>
                    <p className="text-muted-foreground">
                      {t("bakery.morning")}: 9:30 – 14:00<br />
                      {t("bakery.afternoon")}: 16:30 – 18:45
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">{t("contact.sundays-holidays")}</p>
                    <p className="text-muted-foreground">
                      {t("contact.sundays-hours")}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      {t("contact.special-orders")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  {t("contact.mass-schedule")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">{t("contact.weekdays")}</p>
                    <p className="text-muted-foreground">19:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">{t("contact.sundays-feast")}</p>
                    <p className="text-muted-foreground">08:30</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      {t("contact.exposition-note")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
            {t("contact.peace")}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t("contact.peace.text")}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
