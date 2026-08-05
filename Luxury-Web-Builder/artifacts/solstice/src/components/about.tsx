import { motion } from "framer-motion";
import { User, Heart, Sparkles } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Decorative left panel — artistic brand identity composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div
              className="relative w-full max-w-md mx-auto aspect-[3/4] flex items-center justify-center overflow-hidden"
              style={{ background: "linear-gradient(145deg, #F0E8DC 0%, #E8DDD0 40%, #DDD0BE 100%)" }}
            >
              {/* Ambient inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 40% 40%, rgba(198,161,91,0.15) 0%, transparent 65%)",
                }}
              />

              {/* Outer fine border */}
              <div className="absolute inset-4 border border-solstice-gold/25 pointer-events-none" />
              {/* Inner fine border */}
              <div className="absolute inset-7 border border-solstice-gold/12 pointer-events-none" />

              {/* Corner ornaments */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-5 h-5 pointer-events-none`}>
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d={i === 0 ? "M0 12 L0 0 L12 0" : i === 1 ? "M20 12 L20 0 L8 0" : i === 2 ? "M0 8 L0 20 L12 20" : "M20 8 L20 20 L8 20"}
                      stroke="#C6A15B"
                      strokeWidth="1"
                      strokeOpacity="0.6"
                    />
                  </svg>
                </div>
              ))}

              {/* Central content */}
              <div className="flex flex-col items-center text-center px-10 z-10">
                {/* Solstice mark — large, centred */}
                <div className="mb-8 opacity-90">
                  <img
                    src="/solstice-logo.jpeg"
                    alt="Solstice Design Studio mark"
                    className="w-36 h-36 object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>

                {/* Studio name in editorial style */}
                <p className="font-serif text-2xl tracking-[0.25em] text-charcoal mb-1" style={{ fontStyle: "normal" }}>
                  SOLSTICE
                </p>
                <p className="font-sans text-[10px] tracking-[0.35em] text-taupe uppercase mb-8">
                  Design Studio
                </p>

                {/* Divider with star */}
                <div className="flex items-center gap-3 mb-8 w-full">
                  <div className="flex-1 h-px bg-solstice-gold/30" />
                  <svg viewBox="0 0 12 12" className="w-3 h-3 text-solstice-gold" fill="currentColor">
                    <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8Z" />
                  </svg>
                  <div className="flex-1 h-px bg-solstice-gold/30" />
                </div>

                {/* Tagline */}
                <p className="font-serif italic text-base text-charcoal/70 leading-relaxed mb-6">
                  "Timeless Design.<br />Lasting Impact."
                </p>

                {/* Bottom ornament — three dots */}
                <div className="flex gap-3">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-solstice-gold/50" />
                  ))}
                </div>
              </div>

              {/* Decorative crescent arc — bottom right */}
              <div className="absolute bottom-8 right-8 opacity-15 pointer-events-none">
                <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
                  <path
                    d="M60 40C60 51.046 51.046 60 40 60C34 60 28.5 57.4 24.7 53.2C28.5 52 31.8 49.5 34.1 46.1C36.4 42.8 37.8 38.6 37.8 34C37.8 29.4 36.4 25.2 34.1 21.9C31.8 18.5 28.5 16 24.7 14.8C28.5 10.6 34 8 40 8C51.046 8 60 28.954 60 40Z"
                    fill="#C6A15B"
                  />
                </svg>
              </div>

              {/* Sunburst lines — top left */}
              <div className="absolute top-12 left-10 opacity-12 pointer-events-none">
                <svg viewBox="0 0 60 60" className="w-16 h-16" fill="none">
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                    <line
                      key={i}
                      x1="30" y1="30"
                      x2={30 + 25 * Math.cos(angle * Math.PI / 180)}
                      y2={30 + 25 * Math.sin(angle * Math.PI / 180)}
                      stroke="#C6A15B"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.span variants={itemVariants} className="font-sans text-xs font-semibold tracking-[0.2em] text-sandstone uppercase mb-4">
              Meet The Designer
            </motion.span>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-2">
              Hi, I'm Ariella Sadie
            </motion.h2>

            <motion.h3 variants={itemVariants} className="text-lg font-sans text-slate mb-12">
              Founder & Brand Identity Designer
            </motion.h3>

            <div className="space-y-8 mb-12">
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <User className="w-6 h-6 text-solstice-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-xl text-charcoal mb-2">My Story</h4>
                  <p className="font-sans text-slate leading-relaxed">
                    I'm the designer behind Solstice Design Studio. I help businesses build timeless, strategic brands that stand out and leave a lasting impression.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-solstice-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-xl text-charcoal mb-2">Why I Started</h4>
                  <p className="font-sans text-slate leading-relaxed">
                    I started Solstice with one goal: to help businesses turn their ideas into brands that connect, inspire, and create impact.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-solstice-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-xl text-charcoal mb-2">My Design Philosophy</h4>
                  <p className="font-sans text-slate leading-relaxed">
                    Great design isn't just about how it looks — it's about how it works and how it makes people feel. I believe in thoughtful, intentional design that tells your story, builds trust, and stands the test of time.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="p-8 border border-solstice-gold/40 bg-solstice-gold/5 relative"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-solstice-gold" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-solstice-gold" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-solstice-gold" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-solstice-gold" />
              <h4 className="font-serif text-2xl text-charcoal mb-3">Why 'Solstice'?</h4>
              <p className="font-sans text-slate leading-relaxed">
                A solstice marks a turning point — a time of change, alignment, and new possibilities. That's exactly what I hope to create for every client: a brand that marks the beginning of something meaningful.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
