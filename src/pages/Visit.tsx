import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import gothicChrist from "@/assets/gothic-christ.jpg";

const Visit = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Discover
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            What to See
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            Sacred art and treasures of our monastery
          </p>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Sacred Treasures"
            subtitle="Art and faith united through centuries"
          />

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* The Church */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  The Church
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Our Historic Chapel
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The church of the Monastery of Santa Clara invites you into centuries of 
                  prayer. Its simple yet beautiful architecture reflects the Franciscan 
                  charism of poverty and humility.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Visitors are welcome to attend Mass or spend time in quiet prayer. 
                  The sisters pray the Liturgy of the Hours behind the choir grate, 
                  continuing an unbroken tradition of praise.
                </p>
              </div>
              <div className="bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center">
                <span className="text-8xl text-stone/40">⛪</span>
              </div>
            </div>

            {/* Gothic Christ */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={gothicChrist}
                  alt="Gothic Christ of Santa Clara"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  13th–14th Century
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  The Gothic Christ
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  One of the most treasured pieces of the monastery is the <strong>Gothic 
                  Christ</strong>, dating from the 13th to 14th century. This ancient 
                  crucifix has been venerated by the faithful for over 700 years.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Each Holy Week, the Christ descends from the monastery to join the 
                  Procession of Charity on Holy Thursday, returning on Good Friday in the 
                  Procession of Sacrifice — a deeply moving tradition cherished by the 
                  people of Medina del Campo.
                </p>
              </div>
            </div>

            {/* Virgen de la Antigua */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  1540 · Hernando de Esturmio
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Virgen de la Antigua
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A monumental painting of the <strong>Virgin of the Antigua</strong> by 
                  <strong> Hernando de Esturmio</strong>, dated 1540. This magnificent work 
                  is the only painting created by this artist on canvas — all his other 
                  works were on wood panels.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The painting reflects the devotion of the Renaissance period and remains 
                  a significant piece of Spanish religious art, treasured by the monastery 
                  and admired by art historians.
                </p>
              </div>
              <div className="bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center">
                <span className="text-8xl text-stone/40">🖼️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Info */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Visiting the Monastery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The church is open to visitors during bakery hours and for scheduled Masses. 
              As a cloistered community, the interior of the monastery is not open to the 
              public, but we welcome all to pray in our church and visit our bakery.
            </p>
            
            <div className="bg-card p-6 md:p-8 rounded-lg">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Visitor Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Morning: 9:30 – 14:00</p>
                <p>Afternoon: 16:30 – 18:45</p>
                <p className="text-sm pt-2">Sundays & Holidays: Open until 19:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Visit;
