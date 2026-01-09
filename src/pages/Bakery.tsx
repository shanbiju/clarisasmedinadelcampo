import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import BakeryItemCard from "@/components/BakeryItemCard";
import { Clock, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface BakeryProduct {
  id: string;
  name_es: string;
  name_en: string;
  description_es: string | null;
  description_en: string | null;
  price: number | null;
  image_url: string | null;
  available: boolean;
}

const Bakery = () => {
  const { language, t } = useLanguage();
  const [products, setProducts] = useState<BakeryProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("bakery_products")
      .select("*")
      .eq("available", true)
      .order("display_order");
    
    if (data) setProducts(data);
    setLoading(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            {t("bakery.tradition")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            {t("bakery.title")}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            {t("bakery.hero-subtitle")}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t("bakery.our-craft")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === "es"
                ? "Desde 1980, nuestro trabajo manual ha sido la elaboración de dulces artesanales. Cada dulce se elabora a mano en la cocina de nuestro monasterio, siguiendo recetas tradicionales y utilizando ingredientes de calidad."
                : "Since 1980, our manual work has been the preparation of artisanal sweets. Each treat is made by hand in our monastery kitchen, following traditional recipes and using quality ingredients."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === "es"
                ? "Nuestra especialidad es el mazapán, especialmente nuestros famosos Amarguillos, junto con crujientes Hojaldres, Palitos de París, Pastas de Almendra, Mantecados de Viena, Roscones de Reyes de temporada, y mucho más."
                : "Our specialty is marzipan, especially our famous Amarguillos, along with crispy Hojaldres, Palitos de París, Pastas de Almendra, Mantecados de Viena, seasonal Roscones de Reyes, and much more."}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("bakery.our-specialties")}
            subtitle={t("bakery.traditional-recipes")}
          />

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-lg overflow-hidden animate-pulse">
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="p-6">
                    <div className="h-5 bg-muted rounded w-2/3 mb-3" />
                    <div className="h-4 bg-muted rounded w-full mb-2" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              {language === "es" ? "No hay productos disponibles aún." : "No products available yet."}
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product) => (
                <BakeryItemCard
                  key={product.id}
                  name={language === "es" ? product.name_es : product.name_en}
                  description={(language === "es" ? product.description_es : product.description_en) || ""}
                  image={product.image_url || ""}
                  price={product.price || undefined}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Where to Buy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("bakery.where-to-buy")}
            subtitle={t("bakery.visit-us")}
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {language === "es" ? "En el Monasterio" : "At the Monastery"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {language === "es"
                  ? 'Compre directamente en nuestro monasterio a través del tradicional "torno" (ventana giratoria). Toque el timbre y una hermana le atenderá.'
                  : 'Purchase directly from our monastery through the traditional "torno" (revolving window). Ring the bell and a sister will assist you.'}
              </p>
              <p className="text-sm text-foreground font-medium">
                Duque de Ahumada, 49<br />
                47400 Medina del Campo
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <span className="text-xl">🏪</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                El Torno del Carmen
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {language === "es"
                  ? "Nuestros dulces también están disponibles en esta pastelería local que apoya a las comunidades monásticas."
                  : "Our sweets are also available at this local pastry shop that supports monastic communities."}
              </p>
              <p className="text-sm text-foreground font-medium">
                Calle Claudio Moyano, 10<br />
                Medina del Campo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 md:p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {t("bakery.hours")}
                  </h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{t("bakery.morning")}</span>
                    <span className="font-medium text-foreground">9:30 – 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("bakery.afternoon")}</span>
                    <span className="font-medium text-foreground">16:30 – 18:45</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3 mt-3">
                    <span>{t("bakery.sundays")}</span>
                    <span className="font-medium text-foreground">{language === "es" ? "Hasta 19:00" : "Until 19:00"}</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {t("bakery.order-phone")}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("bakery.phone-info")}
                </p>
                <div className="space-y-2">
                  <a href="tel:+34983800593" className="block text-foreground font-medium hover:text-primary transition-colors">
                    +34 983 800 593
                  </a>
                  <a href="tel:+34603850576" className="block text-foreground font-medium hover:text-primary transition-colors">
                    +34 603 850 576
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {t("bakery.avoid-calling")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
            {language === "es" ? "Visita Nuestra Repostería" : "Visit Our Bakery"}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            {language === "es"
              ? "Ven a probar los frutos de nuestra oración y trabajo. Cada compra apoya a nuestra comunidad contemplativa."
              : "Come taste the fruits of our prayer and labor. Every purchase supports our contemplative community."}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-parchment text-foreground px-6 py-3 rounded-md font-medium hover:bg-parchment/90 transition-colors"
          >
            {t("cta.get-directions")}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Bakery;
