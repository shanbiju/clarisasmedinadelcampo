import { Link } from "react-router-dom";
import { ArrowRight, Church, Heart, Cookie } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import BakeryItemCard from "@/components/BakeryItemCard";
import heroImage from "@/assets/hero-cloister.jpg";
import monasteryExterior from "@/assets/monastery-exterior.jpg";
import amarguillos from "@/assets/amarguillos.jpg";
import hojaldres from "@/assets/hojaldres.jpg";
import rosconReyes from "@/assets/roscon-reyes.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Monastery cloister garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-gold-light text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              Since 1246
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-parchment font-semibold leading-tight mb-6">
              Monastery of<br />Santa Clara
            </h1>
            <p className="text-lg md:text-xl text-parchment/90 leading-relaxed mb-8 max-w-lg">
              A place of prayer, peace, and contemplation in the heart of 
              Medina del Campo, Castile.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/history"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Discover Our Story
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/bakery"
                className="inline-flex items-center gap-2 bg-parchment/20 text-parchment border border-parchment/40 px-6 py-3 rounded-md font-medium hover:bg-parchment/30 transition-colors"
              >
                Visit Our Bakery
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
                Welcome
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                A Place of Peace & Prayer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nestled in the historic town of Medina del Campo, the Monastery of Santa Clara 
                has been a beacon of spiritual life for nearly eight centuries. Our community 
                of Poor Clare Sisters continues the contemplative tradition begun by Saints 
                Francis and Clare of Assisi.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We invite you to discover our history, join us in prayer, and experience the 
                artisanal sweets lovingly prepared by our sisters.
              </p>
              <Link
                to="/who-we-are"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn about our community
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={monasteryExterior}
                alt="Monastery of Santa Clara exterior"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-heading text-4xl font-bold">778</p>
                <p className="text-sm text-primary-foreground/80">Years of Prayer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Discover Santa Clara"
            subtitle="Explore our monastery's rich heritage, vibrant community, and artisanal traditions"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Church}
              title="Sacred Heritage"
              description="Visit our Gothic church, venerate the ancient Christ figure, and see the remarkable Virgen de la Antigua painting from 1540."
            />
            <FeatureCard
              icon={Heart}
              title="Community of Prayer"
              description="Ten sisters live in contemplative prayer, following the Rule of Saint Clare, interceding for the Church and the world."
            />
            <FeatureCard
              icon={Cookie}
              title="Artisanal Bakery"
              description="Since 1980, we craft traditional sweets with love — marzipan, almond pastries, and seasonal specialties."
            />
          </div>
        </div>
      </section>

      {/* Bakery Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Convent Bakery"
            subtitle="Handmade with prayer and tradition"
          />
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <BakeryItemCard
              name="Amarguillos"
              description="Our signature marzipan cookies, made with almonds and love — a centuries-old recipe passed down through generations."
              image={amarguillos}
            />
            <BakeryItemCard
              name="Hojaldres"
              description="Crispy puff pastries with a delicate, buttery texture. Perfect with coffee or as a sweet afternoon treat."
              image={hojaldres}
            />
            <BakeryItemCard
              name="Roscón de Reyes"
              description="Traditional Kings' Cake for Epiphany celebrations, topped with candied fruits and filled with cream."
              image={rosconReyes}
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/bakery"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              View All Products
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
              "Love Him totally, who gave Himself totally for your love."
            </p>
            <footer className="mt-6 text-gold-light text-lg">
              — Saint Clare of Assisi
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Plan Your Visit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join us for Mass, explore our historic church, or visit our bakery. 
              We welcome pilgrims and visitors with open hearts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                What to See
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
              >
                Contact & Hours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
