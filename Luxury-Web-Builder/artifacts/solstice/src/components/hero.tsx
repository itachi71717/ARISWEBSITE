import * as React from "react";
import { ArrowUpRight, Moon, Sparkles, SunMedium } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Strategic &", subtitle: "Timeless Design" },
  { icon: SunMedium, title: "Tailored To Your", subtitle: "Brand & Audience" },
  { icon: Moon, title: "Thoughtful Process", subtitle: "Collaborative Approach" },
  { icon: Sparkles, title: "Elevated Brands", subtitle: "Lasting Impact" },
];

export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="interactive-hero" aria-labelledby="hero-title">
      <div className="interactive-hero__main">
        <div className="interactive-hero__copy">
          <p className="interactive-eyebrow"><span>Timeless Design.</span><span>Lasting <em>Impact.</em></span></p>
          <div className="interactive-rule"><span>✦</span></div>
          <h1 id="hero-title">Solstice</h1>
          <div className="interactive-subtitle"><i /><span>Design Studio</span><i /></div>
          <p className="interactive-description">Thoughtful brand identities and timeless designs<br className="desktop-only" /> that elevate your business and leave a lasting<br className="desktop-only" /> impression.</p>
          <a href="#contact" onClick={scrollToContact} className="interactive-hero-cta" data-testid="link-hero-cta">Let&apos;s Create Something Timeless <ArrowUpRight size={16} /></a>
        </div>
        <div className="interactive-hero__visual" role="img" aria-label="Solstice logo with a warm botanical studio arrangement" />
      </div>
      <div className="interactive-benefits">
        {benefits.map(({ icon: Icon, title, subtitle }, index) => (
          <div key={subtitle} className="interactive-benefit">
            <Icon size={25} strokeWidth={1.1} />
            <p><span>{title}</span><span>{subtitle}</span></p>
            {index < benefits.length - 1 && <i aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
