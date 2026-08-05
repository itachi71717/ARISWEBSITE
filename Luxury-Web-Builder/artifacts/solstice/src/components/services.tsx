import { motion } from "framer-motion";
import { PenTool, Layers, Palette, Mail, Share2 } from "lucide-react";

const services = [
  {
    title: "Logo Design",
    description: "Crafting distinctive marks that capture your brand's essence.",
    icon: PenTool,
    image: "/service-logo.jpg",
  },
  {
    title: "Brand Identity",
    description: "Building a cohesive visual system your business can grow into.",
    icon: Layers,
    image: "/service-identity.jpg",
  },
  {
    title: "Colour Palettes",
    description: "Intentional color stories that create trust and recognition.",
    icon: Palette,
    image: "/service-colors.jpg",
  },
  {
    title: "Email Signatures",
    description: "Polished, professional touches for everyday communication.",
    icon: Mail,
    image: "/service-email.jpg",
  },
  {
    title: "Social Media Graphics",
    description: "Scroll-stopping visuals designed to elevate your feed.",
    icon: Share2,
    image: "/service-social.jpg",
  },
];

export const PREFILL_CONTACT_EVENT = "solstice:prefill-contact";

function requestContactForService(serviceTitle: string) {
  window.dispatchEvent(
    new CustomEvent(PREFILL_CONTACT_EVENT, {
      detail: { message: `I need help with ${serviceTitle}.` },
    })
  );
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            What I Offer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg font-sans text-slate max-w-2xl mx-auto"
          >
            Every memorable business starts with a strong identity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSecondToLastInDanglingRow =
              services.length % 3 === 2 && index === services.length - 2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => requestContactForService(service.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    requestContactForService(service.title);
                  }
                }}
                aria-label={`Enquire about ${service.title}`}
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group flex flex-col bg-ivory border border-transparent hover:border-solstice-gold/30 hover:shadow-[0_8px_30px_rgba(198,161,91,0.15)] transition-all duration-300 cursor-pointer lg:col-span-2 ${
                  isSecondToLastInDanglingRow ? "lg:col-start-2" : ""
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden p-3 pb-0">
                  <div className="w-full h-full relative overflow-hidden shadow-sm">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4 text-solstice-gold">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
