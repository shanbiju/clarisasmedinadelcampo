import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import sistersImage from "@/assets/sisters.jpg";

const WhoWeAre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Our Community
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            The Poor Clare Sisters
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            Living the Gospel in prayer, poverty, and sisterly love
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
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are a community of Poor Clare Sisters, living in enclosure as a special way 
                of expressing our belonging to Jesus Christ and our service and dedication to 
                the Church and all people — lived as a gift and a free response of love.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our founders are Francis and Clare of Assisi, who more than 800 years ago in 
                the Umbrian Valley of Italy, began a life according to the Gospel, living in 
                poverty and minority (Francis), and in enclosure (Clare).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Their message is as relevant today as ever: living the Gospel with the observance 
                of four vows — <strong>chastity</strong>, <strong>poverty</strong>, 
                <strong> obedience</strong>, and <strong>enclosure</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vows */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="A Clarissa Is..."
            subtitle="Following the counsels of Saint Clare"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">🤲</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                In Poverty
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As a special element of the Clarian charism, to participate in the poverty 
                of Christ — leaving all to follow Him.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                In Obedience
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Offering to God the total surrender of our own will, seeking in all things 
                the will of God.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">💒</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                In Virginity
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As an expression of spousal love for the Redeemer Himself — giving our hearts 
                entirely to Christ.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                In Enclosure
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A space of silence and prayer, where we live wholly dedicated to contemplation 
                and intercession for the world.
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
              Our Community Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Currently, the community is formed by <strong>10 sisters</strong> who, 
              alternating prayer with work, strive to be a reference of evangelical life and 
              joy, in the purest Franciscan style, for the world.
            </p>
            
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Our Daily Life
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Following the Rule of the Poor Sisters of Saint Clare, we live each day in 
                rhythm with the Liturgy of the Hours, Eucharist, personal prayer, and manual 
                work. Filled with the spirit of the Lord, we give witness to God's world: 
                His goodness, faithfulness, patience, and mercy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-heading text-2xl md:text-3xl text-primary-foreground italic max-w-3xl mx-auto">
            "Love Him totally, who gave Himself totally for your love."
          </p>
          <p className="mt-6 text-gold-light">— Saint Clare of Assisi</p>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
