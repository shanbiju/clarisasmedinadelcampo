import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import sistersImage from "@/assets/sisters.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const WhoWeAre = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            {t("whoweare.hero.label")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            {t("whoweare.hero.title")}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            {t("whoweare.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img
                src={sistersImage}
                alt="Poor Clare Sisters"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                {t("whoweare.intro.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("whoweare.intro.text1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("whoweare.intro.text2")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("whoweare.intro.text3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vows */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("whoweare.clarissa.title")}
            subtitle={t("whoweare.clarissa.subtitle")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">🤲</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {t("whoweare.poverty.title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("whoweare.poverty.text")}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {t("whoweare.obedience.title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("whoweare.obedience.text")}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">💒</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {t("whoweare.virginity.title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("whoweare.virginity.text")}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {t("whoweare.enclosure.title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("whoweare.enclosure.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Community */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t("whoweare.today.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("whoweare.today.text")}
            </p>
            
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {t("whoweare.daily.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("whoweare.daily.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-heading text-2xl md:text-3xl text-primary-foreground italic max-w-3xl mx-auto">
            {t("quote.text")}
          </p>
          <p className="mt-6 text-gold-light">{t("quote.author")}</p>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
