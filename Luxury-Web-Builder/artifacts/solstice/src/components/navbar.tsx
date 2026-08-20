import * as React from "react";

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", id: "top", className: "reference-hotspot--home" },
    { name: "About", id: "about", className: "reference-hotspot--about" },
    { name: "Services", id: "services", className: "reference-hotspot--services" },
    { name: "Contact", id: "contact", className: "reference-hotspot--contact" },
  ];

  return (
    <nav className="reference-exact-nav" aria-label="Primary navigation">
      {navLinks.map((link) => (
        <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className={`reference-hotspot ${link.className}`} aria-label={link.name} />
      ))}
      <a href="https://www.instagram.com/sols.ticedesigns" target="_blank" rel="noopener noreferrer" className="reference-hotspot reference-hotspot--instagram" aria-label="Instagram" />
      <a href="https://wa.me/27604097325?text=Hi%20Ariella%2C%20I%27d%20love%20to%20chat%20about%20a%20branding%20project!" target="_blank" rel="noopener noreferrer" className="reference-hotspot reference-hotspot--whatsapp" aria-label="WhatsApp" />
      <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="reference-hotspot reference-hotspot--work" aria-label="Work with us" />
    </nav>
  );
}
