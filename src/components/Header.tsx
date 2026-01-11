import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/history", label: t("nav.history") },
    { href: "/who-we-are", label: t("nav.who-we-are") },
    { href: "/events", label: t("nav.events") },
    { href: "/visit", label: t("nav.visit") },
    { href: "/bakery", label: t("nav.bakery") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-xl md:text-2xl font-semibold text-primary tracking-wide">
              Santa Clara
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Monasterio · Medina del Campo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary font-medium"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base py-2 transition-colors hover:text-primary ${
                    location.pathname === link.href
                      ? "text-primary font-medium"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
