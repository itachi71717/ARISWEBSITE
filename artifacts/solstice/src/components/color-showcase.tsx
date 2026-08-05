import { motion } from "framer-motion";

const colors = [
  { hex: "#F5F0EA", name: "Ivory", desc: "Clean, Elegant", isLight: true },
  { hex: "#C9A87C", name: "Sandstone", desc: "Warm, Natural", isLight: false },
  { hex: "#A69C94", name: "Taupe", desc: "Balanced, Calm", isLight: false },
  { hex: "#C6A15B", name: "Solstice Gold", desc: "Creative, Confident", isLight: false },
  { hex: "#1A1A1A", name: "Charcoal", desc: "Strong, Impactful", isLight: false },
  { hex: "#6E7075", name: "Slate Grey", desc: "Modern, Reliable", isLight: false },
];

export function ColorShowcase() {
  return (
    <section className="py-24 bg-white border-t border-taupe/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif text-charcoal mb-4"
          >
            Our Colour Palette
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg font-sans text-slate max-w-2xl mx-auto"
          >
            Every colour has a purpose. Every shade tells a story.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 shadow-sm border border-charcoal/5 group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: color.hex }}
              />
              <h3 className="font-serif text-xl text-charcoal mb-1">
                {color.name}
              </h3>
              <p className="font-sans text-sm text-slate mb-1">{color.desc}</p>
              <p className="font-sans text-xs tracking-widest text-taupe uppercase">
                {color.hex}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
