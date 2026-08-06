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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* Founder portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] overflow-hidden">
              <img
                src="/solstice-founder.jpg"
                alt="Ariella Sadie, founder of Solstice Design Studio"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.94) sepia(0.06) contrast(1.02)" }}
              />

              {/* Outer fine border */}
              <div className="absolute inset-4 border border-solstice-gold/40 pointer-events-none" />

              {/* Corner ornaments */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-5 h-5 pointer-events-none`}>
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d={i === 0 ? "M0 12 L0 0 L12 0" : i === 1 ? "M20 12 L20 0 L8 0" : i === 2 ? "M0 8 L0 20 L12 20" : "M20 8 L20 20 L8 20"}
                      stroke="#C6A15B"
                      strokeWidth="1.5"
                      strokeOpacity="0.85"
                    />
                  </svg>
                </div>
              ))}
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
