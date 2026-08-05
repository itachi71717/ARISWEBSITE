import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Deterministic scattered crescent moons — small, varied, spread across the whole hero
  const moons = React.useMemo(() => {
    const positions = [
      { top: "8%",  left: "10%", size: 60,  rotate: -8,  opacity: 0.18 },
      { top: "16%", left: "82%", size: 90,  rotate: 15,  opacity: 0.15 },
      { top: "38%", left: "4%",  size: 50,  rotate: 22,  opacity: 0.14 },
      { top: "30%", left: "48%", size: 70,  rotate: -12, opacity: 0.13 },
      { top: "58%", left: "88%", size: 65,  rotate: 30,  opacity: 0.16 },
      { top: "72%", left: "20%", size: 100, rotate: -18, opacity: 0.15 },
      { top: "82%", left: "62%", size: 55,  rotate: 10,  opacity: 0.14 },
      { top: "10%", left: "58%", size: 45,  rotate: -25, opacity: 0.13 },
      { top: "50%", left: "68%", size: 48,  rotate: 5,   opacity: 0.12 },
      { top: "88%", left: "40%", size: 62,  rotate: -6,  opacity: 0.14 },
      { top: "4%",  left: "35%", size: 40,  rotate: 18,  opacity: 0.13 },
      { top: "24%", left: "20%", size: 55,  rotate: -30, opacity: 0.12 },
      { top: "44%", left: "92%", size: 48,  rotate: 12,  opacity: 0.15 },
      { top: "62%", left: "6%",  size: 70,  rotate: -15, opacity: 0.13 },
      { top: "94%", left: "78%", size: 58,  rotate: 24,  opacity: 0.14 },
      { top: "20%", left: "68%", size: 42,  rotate: -20, opacity: 0.12 },
      { top: "78%", left: "48%", size: 50,  rotate: 8,   opacity: 0.13 },
      { top: "2%",  left: "88%", size: 46,  rotate: -10, opacity: 0.14 },
    ];
    return positions;
  }, []);

  // Deterministic scattered suns — small radiating marks, spread across the whole hero
  const suns = React.useMemo(() => {
    const positions = [
      { top: "12%", left: "28%", size: 34, rotate: 0,   opacity: 0.15 },
      { top: "6%",  left: "68%", size: 26, rotate: 12,  opacity: 0.14 },
      { top: "28%", left: "90%", size: 30, rotate: -8,  opacity: 0.13 },
      { top: "34%", left: "36%", size: 22, rotate: 20,  opacity: 0.12 },
      { top: "46%", left: "14%", size: 28, rotate: -15, opacity: 0.14 },
      { top: "54%", left: "58%", size: 32, rotate: 6,   opacity: 0.13 },
      { top: "64%", left: "80%", size: 24, rotate: -22, opacity: 0.14 },
      { top: "68%", left: "32%", size: 30, rotate: 14,  opacity: 0.12 },
      { top: "76%", left: "8%",  size: 26, rotate: -5,  opacity: 0.13 },
      { top: "84%", left: "56%", size: 34, rotate: 10,  opacity: 0.14 },
      { top: "90%", left: "88%", size: 24, rotate: -18, opacity: 0.12 },
      { top: "18%", left: "48%", size: 20, rotate: 25,  opacity: 0.11 },
      { top: "40%", left: "76%", size: 28, rotate: -12, opacity: 0.13 },
      { top: "58%", left: "4%",  size: 26, rotate: 8,   opacity: 0.12 },
      { top: "96%", left: "24%", size: 30, rotate: -6,  opacity: 0.13 },
      { top: "2%",  left: "12%", size: 22, rotate: 16,  opacity: 0.12 },
    ];
    return positions;
  }, []);

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

      {/* === SCATTERED CRESCENT MOONS — small and spread across the whole background === */}
      {moons.map((moon, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: moon.top,
            left: moon.left,
            width: `${moon.size}px`,
            opacity: moon.opacity,
            transform: `rotate(${moon.rotate}deg)`,
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M73.3 50C73.3 72.1 55.4 90 33.3 90C26.2 90 19.5 88 13.8 84.5C23.7 82.7 32 77.3 37.8 69.7C43.7 62 47 52.3 47 42C47 31.7 43.7 22 37.8 14.3C32 6.7 23.7 1.3 13.8 -0.5C19.5 -4 26.2 -6 33.3 -6C55.4 -6 73.3 27.9 73.3 50Z"
              fill="#C9A87C"
            />
          </svg>
        </div>
      ))}

      {/* === SCATTERED SUNS — small radiating marks, spread across the whole background === */}
      {suns.map((sun, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: sun.top,
            left: sun.left,
            width: `${sun.size}px`,
            opacity: sun.opacity,
            transform: `rotate(${sun.rotate}deg)`,
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="16" fill="#C6A15B" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1={50 + 22 * Math.cos((angle * Math.PI) / 180)}
                y1={50 + 22 * Math.sin((angle * Math.PI) / 180)}
                x2={50 + 42 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 42 * Math.sin((angle * Math.PI) / 180)}
                stroke="#C6A15B"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
          </svg>
        </div>
      ))}

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
