import { Link } from "react-router-dom";
import { ArrowRight, Church, Heart, Cookie } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import BakeryItemCard from "@/components/BakeryItemCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-cloister.jpg";
import monasteryExterior from "@/assets/monastery-exterior.jpg";

interface BakeryProduct {
  id: string;
  name_es: string;
  name_en: string;
  description_es: string | null;
  description_en: string | null;
  image_url: string | null;
}

const Index = () => {
  const { language, t } = useLanguage();
  const [featuredProducts, setFeaturedProducts] = useState<BakeryProduct[]>([]);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    const { data } = await supabase
      .from("bakery_products")
      .select("id, name_es, name_en, description_es, description_en, image_url")
      .eq("available", true)
      .order("display_order")
      .limit(3);
    
    if (data) setFeaturedProducts(data);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={language === "es" ? "Claustro del monasterio" : "Monastery cloister garden"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-gold-light text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              {t("hero.since")}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-parchment font-semibold leading-tight mb-6">
              {language === "es" ? (
                <>Monasterio de<br />Santa Clara</>
              ) : (
                <>Monastery of<br />Santa Clara</>
              )}
            </h1>
            <p className="text-lg md:text-xl text-parchment/90 leading-relaxed mb-8 max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/history"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                {t("hero.discover")}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/bakery"
                className="inline-flex items-center gap-2 bg-parchment/20 text-parchment border border-parchment/40 px-6 py-3 rounded-md font-medium hover:bg-parchment/30 transition-colors"
              >
                {t("hero.bakery")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">
                {t("welcome.label")}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                {t("welcome.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("welcome.text1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("welcome.text2")}
              </p>
              <Link
                to="/who-we-are"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                {t("welcome.learn")}
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={monasteryExterior}
                alt={language === "es" ? "Exterior del Monasterio de Santa Clara" : "Monastery of Santa Clara exterior"}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-heading text-4xl font-bold">778</p>
                <p className="text-sm text-primary-foreground/80">{t("welcome.years")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("features.title")}
            subtitle={t("features.subtitle")}
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Church}
              title={t("features.heritage.title")}
              description={t("features.heritage.desc")}
            />
            <FeatureCard
              icon={Heart}
              title={t("features.community.title")}
              description={t("features.community.desc")}
            />
            <FeatureCard
              icon={Cookie}
              title={t("features.bakery.title")}
              description={t("features.bakery.desc")}
            />
          </div>
        </div>
      </section>

      {/* Bakery Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("bakery.title")}
            subtitle={t("bakery.subtitle")}
          />
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <BakeryItemCard
                key={product.id}
                name={language === "es" ? product.name_es : product.name_en}
                description={(language === "es" ? product.description_es : product.description_en) || ""}
                image={product.image_url || ""}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/bakery"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              {t("bakery.view-all")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground italic leading-relaxed">
              "{t("quote.text")}"
            </p>
            <footer className="mt-6 text-gold-light text-lg">
              {t("quote.author")}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {t("cta.plan-visit")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("cta.visit-desc")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                {t("cta.what-to-see")}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
              >
                {t("cta.contact-hours")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
