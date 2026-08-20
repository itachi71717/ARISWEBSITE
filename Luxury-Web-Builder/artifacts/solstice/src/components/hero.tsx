export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="reference-hero reference-hero--exact" aria-label="Solstice Design Studio introduction">
      <img src="/reference-landing.jpg" alt="Solstice Design Studio landing page" className="reference-hero__exact-image" />
      <a href="#contact" onClick={scrollToContact} className="reference-hotspot reference-hotspot--hero-cta" aria-label="Let’s create something timeless" />
      <div className="reference-hero__exact-benefit-links" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
    </section>
  );
}
