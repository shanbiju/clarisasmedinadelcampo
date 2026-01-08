import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import monasteryExterior from "@/assets/monastery-exterior.jpg";

const History = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Our Story
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            History of the Monastery
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            Nearly eight centuries of faith, prayer, and perseverance
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Medina del Campo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Medina del Campo is one of the most illustrious cities of Castile. With Roman and 
                Visigothic roots, its name is clearly Arabic in origin. The city was frequently a 
                royal residence, and Queen Isabella the Catholic, who died here, held it in 
                special affection.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                During the 15th and 16th centuries, its fairs and markets were among the most 
                important in Europe. It was here that Saint Teresa of Ávila made her first 
                foundation outside her homeland, and here she forged the reform of the Carmelite 
                friars with Saint John of the Cross.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In this historic town stands the Convent of Santa Clara, originally named 
                "Santa Eufemia," then "Santa Catalina," and finally acquiring its current name 
                after the death and canonization of Saint Clare.
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
            title="Foundation"
            subtitle="Established during the lifetime of Saint Clare herself"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-sm mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Although there are different opinions regarding the foundation, what is certain 
                is that it took place during the lifetime of Saint Clare. This is confirmed by:
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">1.</span>
                  <span>
                    The Bull "Cum sicut vestra" that Pope Innocent IV sent to the Convent from 
                    Lyon, dated June 2, 1246.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">2.</span>
                  <span>
                    A Royal Charter from King Sancho IV of Castile, which references privileges 
                    granted by Pope Alexander IV (who reigned 1254–1261), suggesting the convent 
                    had already existed for some years.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              According to the Venerable Gonzaga and common tradition, the monastery was founded 
              by King Ferdinand III, the Saint, who continued the foundation already begun by 
              his predecessor King Henry I.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tradition tells us that for the foundation, the kings brought two disciples of 
              Saint Clare from San Damiano, who lived in this monastery and are buried in the 
              church, at the foot of the choir grate.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Evolution */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Through the Centuries"
            subtitle="A history marked by trials and royal protection"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">1246</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Papal Recognition
                </h3>
                <p className="text-muted-foreground">
                  Pope Innocent IV sends the Bull "Cum sicut vestra" from Lyon, formally 
                  recognizing the monastery.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">1268–1290</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  First Destruction & Royal Support
                </h3>
                <p className="text-muted-foreground">
                  King Alfonso X the Wise writes to the sisters from Seville, reassuring them 
                  amid pressures to leave the monastery. His son Sancho IV later encourages them 
                  to return and confirms papal privileges.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">15th–16th Centuries</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  The Golden Age
                </h3>
                <p className="text-muted-foreground">
                  The monastery flourishes alongside Medina del Campo's famous fairs. Royal 
                  protection continues as the city becomes a hub of European commerce.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">1960</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  The Last Fire
                </h3>
                <p className="text-muted-foreground">
                  A fire devastates part of the monastery. With faith and perseverance, the 
                  community rebuilds and continues its contemplative life.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <p className="text-sm text-accent font-medium mb-2">1980–Present</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Artisanal Bakery
                </h3>
                <p className="text-muted-foreground">
                  The sisters begin crafting traditional sweets, combining contemplative life 
                  with the work of their hands — a living Franciscan tradition.
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
            "The history of our Monastery has been marked by collapses, fires, and invasions, 
            but also by the protection, accompaniment, and privileges of the Kings."
          </p>
          <p className="mt-6 text-gold-light">— From the Monastery Archives</p>
        </div>
      </section>
    </Layout>
  );
};

export default History;
