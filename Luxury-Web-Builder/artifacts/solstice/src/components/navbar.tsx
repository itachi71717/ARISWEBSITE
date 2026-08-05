import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "top" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? "bg-ivory shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center relative">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="font-sans text-sm tracking-widest text-charcoal hover:text-solstice-gold transition-colors duration-200 uppercase"
                  data-testid={`link-nav-${link.id}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-5">
              <a
                href="https://www.instagram.com/sols.ticedesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-solstice-gold transition-colors duration-200"
                aria-label="Instagram"
                data-testid="link-nav-instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/27604097325?text=Hi%20Ariella%2C%20I%27d%20love%20to%20chat%20about%20a%20branding%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-solstice-gold transition-colors duration-200"
                aria-label="WhatsApp"
                data-testid="link-nav-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-charcoal p-2 absolute right-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-ivory z-40 transition-opacity duration-300 md:hidden flex items-center justify-center ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="font-sans text-xl tracking-widest text-charcoal hover:text-solstice-gold transition-colors duration-200 uppercase"
              data-testid={`link-mobile-nav-${link.id}`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-8 pt-8">
            <a
              href="https://www.instagram.com/sols.ticedesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-solstice-gold transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/27604097325?text=Hi%20Ariella%2C%20I%27d%20love%20to%20chat%20about%20a%20branding%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-solstice-gold transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
