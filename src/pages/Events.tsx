import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import processionImage from "@/assets/santa-clara-procession.jpg";
import holyWeekImage from "@/assets/semana-santa.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Events = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4">
            {t("events.hero.label")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold">
            {t("events.hero.title")}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t("events.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Events */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("events.annual.title")}
            subtitle={t("events.annual.subtitle")}
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Holy Week */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img
                src={holyWeekImage}
                alt="Semana Santa en el Monasterio de Santa Clara"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />

              <div className="p-6 md:p-8">
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  {t("events.holyweek.label")}
                </p>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  {t("events.holyweek.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("events.holyweek.text")}
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span>
                      <strong>{t("events.holyweek.thursday")}</strong>{" "}
                      {t("events.holyweek.thursday.text")}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span>
                      <strong>{t("events.holyweek.friday")}</strong>{" "}
                      {t("events.holyweek.friday.text")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Triduum of Saint Clare */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img
                src={processionImage}
                alt="Procesión de Santa Clara"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />

              <div className="p-6 md:p-8">
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  {t("events.triduum.label")}
                </p>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  {t("events.triduum.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("events.triduum.text1")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("events.triduum.text2")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("events.triduum.text3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Schedule */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("events.worship.title")}
            subtitle={t("events.worship.subtitle")}
          />

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 md:p-8 rounded-lg">
              <h3 className="font-heading text-xl font-semibold mb-4">
                {t("events.mass.title")}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-3">
                  <span>{t("events.mass.weekdays")}</span>
                  <span className="font-medium">19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("events.mass.sundays")}</span>
                  <span className="font-medium">08:30</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg">
              <h3 className="font-heading text-xl font-semibold mb-4">
                {t("events.exposition.title")}
              </h3>
              <div className="space-y-3">
                <p>• {t("events.exposition.thursdays")}</p>
                <p>• {t("events.exposition.fridays")}</p>
                <p>• {t("events.exposition.18th")}</p>
                <p>• {t("events.exposition.marian")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
