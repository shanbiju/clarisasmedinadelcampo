import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import BakeryItemCard from "@/components/BakeryItemCard";
import { Clock, Phone, MapPin } from "lucide-react";

import amarguillos from "@/assets/amarguillos.jpg";
import hojaldres from "@/assets/hojaldres.jpg";
import rosconReyes from "@/assets/roscon-reyes.jpg";
import mantecados from "@/assets/mantecados.jpg";
import pastasAlmendra from "@/assets/pastas-almendra.jpg";
import bakerySweets from "@/assets/bakery-sweets.jpg";

const bakeryItems = [
  {
    name: "Amarguillos",
    description: "Our signature marzipan cookies made with ground almonds and a touch of bitterness. A centuries-old recipe passed down through generations of sisters.",
    image: amarguillos,
  },
  {
    name: "Hojaldres",
    description: "Crispy, flaky puff pastries with a delicate, buttery texture. Perfect with coffee or as a light afternoon treat.",
    image: hojaldres,
  },
  {
    name: "Roscón de Reyes",
    description: "Traditional Kings' Cake for Epiphany celebrations, adorned with candied fruits and optionally filled with cream. A festive favorite.",
    image: rosconReyes,
  },
  {
    name: "Mantecados de Viena",
    description: "Viennese-style shortbread cookies that melt in your mouth. Made with pure butter and dusted with powdered sugar.",
    image: mantecados,
  },
  {
    name: "Pastas de Almendra",
    description: "Traditional almond paste cookies with a tender, slightly chewy texture. A simple delight that showcases the quality of our almonds.",
    image: pastasAlmendra,
  },
  {
    name: "Palitos de París",
    description: "Elegant Parisian sticks — light, crispy pastries perfect for dipping in hot chocolate or enjoying on their own.",
    image: bakerySweets,
  },
];

const Bakery = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Artisanal Tradition
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold animate-fade-in">
            Convent Bakery
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
            Handmade sweets crafted with prayer and love since 1980
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Craft
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since 1980, our manual work has been the preparation of artisanal sweets. 
              Each treat is made by hand in our monastery kitchen, following traditional 
              recipes and using quality ingredients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our specialty is <strong>marzipan</strong>, especially our famous 
              <strong> Amarguillos</strong>, along with crispy <strong>Hojaldres</strong>, 
              <strong> Palitos de París</strong>, <strong>Pastas de Almendra</strong>, 
              <strong> Mantecados de Viena</strong>, seasonal <strong>Roscones de Reyes</strong>, 
              and much more.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Specialties"
            subtitle="Traditional recipes made with care"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {bakeryItems.map((item) => (
              <BakeryItemCard
                key={item.name}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Where to Buy"
            subtitle="Visit us in person to purchase our sweets"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                At the Monastery
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Purchase directly from our monastery through the traditional "torno" 
                (revolving window). Ring the bell and a sister will assist you.
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
                Our sweets are also available at this local pastry shop that supports 
                monastic communities.
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
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Morning</span>
                    <span className="font-medium text-foreground">9:30 – 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Afternoon</span>
                    <span className="font-medium text-foreground">16:30 – 18:45</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3 mt-3">
                    <span>Sundays & Holidays</span>
                    <span className="font-medium text-foreground">Until 19:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Order by Phone
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can place orders by phone or WhatsApp from anywhere in Spain:
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
                  Please avoid calling between 14:30–16:30 and 19:00–19:45
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
            Visit Our Bakery
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            Come taste the fruits of our prayer and labor. Every purchase supports our 
            contemplative community.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-parchment text-foreground px-6 py-3 rounded-md font-medium hover:bg-parchment/90 transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Bakery;
