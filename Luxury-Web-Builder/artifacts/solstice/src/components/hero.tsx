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
    <section id="top" className="reference-hero">
      <div className="reference-hero__content">
        <div className="reference-hero__copy">
          <p className="reference-eyebrow">
            <span>Timeless Design.</span>
            <span>Lasting <em>Impact.</em></span>
          </p>
          <div className="reference-rule"><span>✦</span></div>
          <h1>Solstice</h1>
          <div className="reference-subtitle"><span /> <span>Design Studio</span> <span /></div>
          <p className="reference-description">
            Thoughtful brand identities and timeless designs<br className="hidden sm:block" />
            that elevate your business and leave a lasting<br className="hidden sm:block" />
            impression.
          </p>
          <a href="#contact" onClick={scrollToContact} className="reference-button" data-testid="link-hero-cta">
            Let&apos;s Create Something Timeless <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>

        <div className="reference-hero__visual" aria-label="Solstice Design Studio logo and botanical composition">
          <div className="reference-arch" />
          <img src="/solstice-logo.jpeg" alt="Solstice Design Studio mark" className="reference-mark" />
          <div className="reference-botanical" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} style={{ ["--stem-angle" as string]: `${-28 + i * 7}deg`, ["--stem-height" as string]: `${145 + (i % 4) * 30}px` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="reference-benefits">
        {benefits.map(({ icon: Icon, title, subtitle }, index) => (
          <div key={subtitle} className="reference-benefit">
            <Icon size={25} strokeWidth={1.1} className="text-solstice-gold" />
            <p><span>{title}</span><span>{subtitle}</span></p>
            {index < benefits.length - 1 && <i aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
