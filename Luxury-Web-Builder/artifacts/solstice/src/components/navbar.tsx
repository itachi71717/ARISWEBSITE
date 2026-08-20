import * as React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navLinks = [
    { name: "Home", id: "top" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="interactive-nav" aria-label="Primary navigation">
      <a href="#top" onClick={(e) => scrollToSection(e, "top")} className="interactive-wordmark" aria-label="Solstice home"><strong>Solstice</strong><span>Design Studio</span></a>
      <div className="interactive-nav__links">
        {navLinks.map((link, index) => <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className={index === 0 ? "is-active" : ""}>{link.name}</a>)}
      </div>
      <div className="interactive-nav__actions">
        <a href="https://www.instagram.com/sols.ticedesigns" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://wa.me/27604097325?text=Hi%20Ariella%2C%20I%27d%20love%20to%20chat%20about%20a%20branding%20project!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        <span />
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="interactive-work">Work With Us</a>
      </div>
      <button className="interactive-menu-toggle" onClick={() => setIsMobileMenuOpen((open) => !open)} aria-expanded={isMobileMenuOpen} aria-label="Toggle navigation menu">{isMobileMenuOpen ? <X /> : <Menu />}</button>
      <div className={`interactive-mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)}>{link.name}</a>)}
        <div className="interactive-mobile-socials"><a href="https://www.instagram.com/sols.ticedesigns" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a><a href="https://wa.me/27604097325?text=Hi%20Ariella%2C%20I%27d%20love%20to%20chat%20about%20a%20branding%20project!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a></div>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="interactive-work">Work With Us</a>
      </div>
    </nav>
  );
}
