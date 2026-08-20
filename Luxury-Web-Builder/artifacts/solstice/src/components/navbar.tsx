import * as React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "top" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`reference-nav ${isScrolled ? "reference-nav--scrolled" : ""}`}>
      <a href="#top" onClick={(e) => scrollToSection(e, "top")} className="reference-wordmark" aria-label="Solstice home">
        <strong>Solstice</strong><span>Design Studio</span>
      </a>

      <div className="reference-nav__links">
        {navLinks.map((link, index) => (
          <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className={index === 0 ? "is-active" : ""}>
            {link.name}
          </a>
        ))}
      </div>

      <div className="reference-nav__actions">
        <a href="https://www.instagram.com/sols.ticedesigns" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://wa.me/27604097325?text=Hi%20Ariella%2C%20I%27d%20love%20to%20chat%20about%20a%20branding%20project!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        <span className="reference-divider" />
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="reference-nav__cta">Work With Us</a>
      </div>

      <button className="reference-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>
      <div className={`reference-mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)}>{link.name}</a>)}
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="reference-nav__cta">Work With Us</a>
      </div>
    </nav>
  );
}
