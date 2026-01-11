import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import monasteryExterior from "@/assets/monastery-exterior.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const History = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            {t("history.hero.label")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            {t("history.hero.title")}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            {t("history.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                {t("history.medina.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("history.medina.text1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("history.medina.text2")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("history.medina.text3")}
              </p>
            </div>
            <div>
              <img
                src={monasteryExterior}
                alt="Monastery of Santa Clara"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("history.foundation.title")}
            subtitle={t("history.foundation.subtitle")}
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-sm mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("history.foundation.text1")}
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">1.</span>
                  <span>{t("history.foundation.point1")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">2.</span>
                  <span>{t("history.foundation.point2")}</span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("history.foundation.text2")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("history.foundation.text3")}
            </p>
          </div>
        </div>
      </section>

      {/* Historical Evolution */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("history.centuries.title")}
            subtitle={t("history.centuries.subtitle")}
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">1246</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {t("history.timeline.1246.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("history.timeline.1246.text")}
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">1268–1290</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {t("history.timeline.1268.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("history.timeline.1268.text")}
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">
                  {t("history.timeline.15th.title") === "La Edad de Oro" ? "Siglos XV–XVI" : "15th–16th Centuries"}
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {t("history.timeline.15th.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("history.timeline.15th.text")}
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">1960</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {t("history.timeline.1960.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("history.timeline.1960.text")}
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">
                  {t("history.timeline.1980.title") === "Repostería Artesanal" ? "1980–Presente" : "1980–Present"}
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {t("history.timeline.1980.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("history.timeline.1980.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-heading text-2xl md:text-3xl text-primary-foreground italic max-w-3xl mx-auto">
            {t("history.quote")}
          </p>
          <p className="mt-6 text-gold-light">{t("history.quote.author")}</p>
        </div>
      </section>
    </Layout>
  );
};

export default History;
