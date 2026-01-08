import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import processionImage from "@/assets/santa-clara-procession.jpg";

const Events = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Celebrations
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            Events & Feast Days
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            Join us in celebrating our faith throughout the liturgical year
          </p>
        </div>
      </section>

      {/* Main Events */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Annual Celebrations"
            subtitle="Two major events mark our liturgical calendar"
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Holy Week */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <span className="text-6xl">✝️</span>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  Holy Week
                </p>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  The Christ of Santa Clara
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During Holy Week, we participate in two significant processions featuring 
                  our treasured <strong>Gothic Christ</strong> (13th–14th century):
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span>
                      <strong>Holy Thursday:</strong> The Procession of Charity, during which 
                      the image of the Christ of Santa Clara descends from the monastery and 
                      joins the procession through the town.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span>
                      <strong>Good Friday:</strong> The Procession of Sacrifice, from the 
                      Parish of San Miguel to the Monastery, where the image is solemnly 
                      returned and hung once more.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Triduum of Saint Clare */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img
                src={processionImage}
                alt="Procession of Saint Clare"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6 md:p-8">
                <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">
                  August 9–11
                </p>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Triduum in Honor of Saint Clare
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From August 9 to 11, we celebrate the Triduum in honor of our foundress, 
                  <strong> Saint Clare of Assisi</strong>, whose feast day is August 11.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The statue of Saint Clare is carried in procession through the 
                  "Barrio de las Claras" (Neighborhood of the Clares) — a beloved tradition 
                  that draws many faithful from across the region.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As the oldest monastery in the "Villa de los Trece Roeles," these 
                  celebrations are especially well-attended.
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
            title="Worship Schedule"
            subtitle="You are welcome to join us in prayer"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 md:p-8 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Daily Mass
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted-foreground">Weekdays</span>
                    <span className="font-medium text-foreground">19:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sundays & Feast Days</span>
                    <span className="font-medium text-foreground">08:30</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Exposition of the Blessed Sacrament
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Thursdays and Sundays</p>
                  <p>• First Fridays of the month</p>
                  <p>• The 18th of each month (Vocational Prayer)</p>
                  <p>• Marian Feast Days</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-card p-6 md:p-8 rounded-lg text-center">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Exposition Hours
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <span>Morning: 9:30 – 13:30</span>
                <span className="text-border">|</span>
                <span>Afternoon: 16:30 – 19:00</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Concluding with Benediction of the Blessed Sacrament
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
            Join Us in Prayer
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Whether you join us in person or remember us in your prayers, we are united in 
            the Lord. May God bless you with His peace.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
