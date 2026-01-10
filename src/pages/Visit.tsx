import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

// ✅ Image imports (THIS FIXES THE ERROR)
import chapelImage from "@/assets/iglesia-capilla.jpg";
import gothicChrist from "@/assets/gothic-christ.jpg";
import virgenAntiguaImage from "@/assets/virgen-antigua.jpg";

const Visit = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            {t("visit.hero.label")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            {t("visit.hero.title")}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            {t("visit.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("visit.treasures.title")}
            subtitle={t("visit.treasures.subtitle")}
          />

          <div className="space-y-16 max-w-5xl mx-auto">

            {/* Our Historic Chapel */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  {t("visit.church.label")}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {t("visit.church.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("visit.church.text1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("visit.church.text2")}
                </p>
              </div>

              <img
                src={chapelImage}
                alt="Capilla histórica del Monasterio de Santa Clara"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>

            {/* Gothic Christ */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={gothicChrist}
                  alt="Cristo gótico del Monasterio de Santa Clara"
                  className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  {t("visit.christ.label")}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {t("visit.christ.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("visit.christ.text1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("visit.christ.text2")}
                </p>
              </div>
            </div>

            {/* Virgen de la Antigua */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  {t("visit.virgin.label")}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {t("visit.virgin.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("visit.virgin.text1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("visit.virgin.text2")}
                </p>
              </div>

              <img
                src={virgenAntiguaImage}
                alt="Virgen de la Antigua del Monasterio de Santa Clara"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Visitor Info */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t("visit.info.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("visit.info.text")}
            </p>

            <div className="bg-card p-6 md:p-8 rounded-lg">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {t("visit.hours.title")}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{t("visit.hours.morning")}</p>
                <p>{t("visit.hours.afternoon")}</p>
                <p className="text-sm pt-2">
                  {t("visit.hours.sundays")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Visit;
