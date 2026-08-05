import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Deterministic star positions — more stars, more variety
  const stars = React.useMemo(() => {
    const positions = [
      { top: "12%", left: "18%", size: "2px", delay: "0s" },
      { top: "22%", left: "72%", size: "3px", delay: "1.2s" },
      { top: "35%", left: "88%", size: "2px", delay: "2.4s" },
      { top: "55%", left: "8%",  size: "3px", delay: "0.6s" },
      { top: "68%", left: "55%", size: "2px", delay: "1.8s" },
      { top: "78%", left: "82%", size: "3px", delay: "3.0s" },
      { top: "15%", left: "45%", size: "2px", delay: "0.9s" },
      { top: "48%", left: "30%", size: "2px", delay: "2.1s" },
      { top: "88%", left: "22%", size: "3px", delay: "1.5s" },
      { top: "42%", left: "65%", size: "2px", delay: "0.3s" },
      { top: "72%", left: "38%", size: "3px", delay: "2.7s" },
      { top: "28%", left: "92%", size: "2px", delay: "1.1s" },
      { top: "60%", left: "18%", size: "2px", delay: "3.3s" },
      { top: "18%", left: "60%", size: "3px", delay: "0.7s" },
      { top: "82%", left: "60%", size: "2px", delay: "2.0s" },
      { top: "50%", left: "78%", size: "2px", delay: "1.4s" },
      { top: "35%", left: "12%", size: "3px", delay: "0.5s" },
      { top: "90%", left: "45%", size: "2px", delay: "2.6s" },
    ];
    return positions;
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden animate-luxury-gradient"
    >
      {/* === BACKGROUND DEPTH LAYERS === */}

      {/* Large ambient radial glow — warm gold bloom, centre-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", left: "-5%",
          width: "60vw", height: "60vw",
          background: "radial-gradient(ellipse at center, rgba(198,161,91,0.18) 0%, rgba(201,168,124,0.10) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Soft right-side glow — cooler ivory shimmer */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%", right: "-10%",
          width: "55vw", height: "55vw",
          background: "radial-gradient(ellipse at center, rgba(245,240,234,0.6) 0%, rgba(201,168,124,0.12) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Bottom-centre warm fill */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%", left: "20%",
          width: "60vw", height: "40vw",
          background: "radial-gradient(ellipse at center, rgba(166,156,148,0.15) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      {/* Diagonal light ray — top-right to centre */}
      <div
        className="absolute pointer-events-none animate-light-ray"
        style={{
          top: "-10%", right: "10%",
          width: "2px", height: "70vh",
          background: "linear-gradient(to bottom, transparent, rgba(198,161,91,0.25), transparent)",
          transform: "rotate(-25deg)",
          transformOrigin: "top center",
          filter: "blur(3px)",
        }}
      />

      {/* Second light ray */}
      <div
        className="absolute pointer-events-none animate-light-ray-2"
        style={{
          top: "-5%", right: "30%",
          width: "1px", height: "50vh",
          background: "linear-gradient(to bottom, transparent, rgba(201,168,124,0.2), transparent)",
          transform: "rotate(-15deg)",
          transformOrigin: "top center",
          filter: "blur(2px)",
        }}
      />

      {/* Third light ray — left side */}
      <div
        className="absolute pointer-events-none animate-light-ray"
        style={{
          top: "-5%", left: "35%",
          width: "1px", height: "45vh",
          background: "linear-gradient(to bottom, transparent, rgba(198,161,91,0.15), transparent)",
          transform: "rotate(10deg)",
          transformOrigin: "top center",
          filter: "blur(2px)",
        }}
      />

      {/* Grain/texture overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.4,
        }}
      />

      {/* === CRESCENT MOON — top left, large and atmospheric === */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "-2%", left: "-4%", width: "clamp(220px, 28vw, 400px)", opacity: 0.13 }}
      >
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Crescent moon shape */}
          <path
            d="M220 150C220 216.274 166.274 270 100 270C78.5 270 58.5 264 41.5 253.5C71 248 96 232 113.5 209C131 186 140 157 140 126C140 95 131 66 113.5 43C96 20 71 4 41.5 -1.5C58.5 -11 78.5 -18 100 -18C166.274 -18 220 83.726 220 150Z"
            fill="#C9A87C"
          />
          {/* Star sparkles near the moon */}
          <path
            d="M240 60 L243 68 L251 71 L243 74 L240 82 L237 74 L229 71 L237 68Z"
            fill="#C6A15B"
            opacity="0.8"
          />
          <path
            d="M265 110 L267 115 L272 117 L267 119 L265 124 L263 119 L258 117 L263 115Z"
            fill="#C6A15B"
            opacity="0.6"
          />
          <path
            d="M250 30 L251.5 34 L255.5 35.5 L251.5 37 L250 41 L248.5 37 L244.5 35.5 L248.5 34Z"
            fill="#C9A87C"
            opacity="0.7"
          />
          {/* Subtle sunburst lines */}
          <line x1="235" y1="150" x2="270" y2="140" stroke="#C6A15B" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <line x1="238" y1="165" x2="274" y2="165" stroke="#C6A15B" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          <line x1="235" y1="180" x2="268" y2="192" stroke="#C6A15B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          <line x1="232" y1="130" x2="264" y2="116" stroke="#C6A15B" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>

      {/* === STARFIELD === */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="star-dot"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* === HERO CONTENT === */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-16 md:mt-0">
        {/* Hero logo — clip-path makes it circular (no rectangular corners),
            mix-blend-mode:multiply dissolves the ivory JPEG background into
            the warm gradient so the mark appears to float on the background */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/solstice-logo.jpeg"
          alt="Solstice Design Studio logo"
          className="h-40 md:h-[180px] w-auto object-contain mb-8 md:mb-12"
          style={{
            mixBlendMode: "multiply",
            clipPath: "circle(46%)",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-widest text-charcoal mb-4 md:mb-6"
        >
          SOLSTICE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
          className="text-sm md:text-lg font-sans tracking-[0.3em] md:tracking-[0.5em] text-slate uppercase mb-8 md:mb-10"
        >
          Design Studio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
          className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-charcoal mb-12 md:mb-16"
        >
          Timeless Design. Lasting Impact.
        </motion.p>

        <motion.a
          href="#contact"
          onClick={scrollToContact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.85 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 bg-transparent border border-solstice-gold text-charcoal hover:bg-solstice-gold hover:text-ivory hover:shadow-[0_4px_24px_rgba(198,161,91,0.35)]"
          data-testid="link-hero-cta"
        >
          Let's Create Something Timeless
        </motion.a>
      </div>
    </section>
  );
}
