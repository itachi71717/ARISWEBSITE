import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center space-y-10">

        {/* Logo — on dark background, multiply blend makes ivory transparent; use a light-on-dark treatment instead */}
        <img
          src="/solstice-logo.jpeg"
          alt="Solstice Design Studio"
          className="h-[64px] w-auto object-contain rounded-full"
          style={{ mixBlendMode: "luminosity", opacity: 0.85 }}
        />

        <div className="space-y-3">
          <p className="font-serif italic text-xl md:text-2xl text-sandstone">
            Timeless Design. Lasting Impact.
          </p>
          <p className="font-sans text-sm tracking-widest uppercase text-taupe">
            Founded by Ariella Sadie
          </p>
        </div>

        <a
          href="mailto:Solisticedesigns@gmail.com"
          className="font-sans text-lg hover:text-solstice-gold transition-colors duration-200 border-b border-transparent hover:border-solstice-gold"
          data-testid="link-footer-email"
        >
          Solisticedesigns@gmail.com
        </a>

        <div className="flex items-center gap-6 pt-4">
          {/* Instagram — gradient */}
          <a
            href="https://www.instagram.com/sols.ticedesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110 hover:opacity-80"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ig-grad-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <path fill="url(#ig-grad-footer)" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>

          {/* WhatsApp — brand green */}
          <a
            href="https://wa.me/27604097325?text=Hi%20Ariella%2C%20I%27d%20love%20to%20chat%20about%20a%20branding%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110 hover:opacity-80"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" style={{ color: "#25D366" }} />
          </a>
        </div>

        <div className="pt-8 border-t border-taupe/20 w-full text-center">
          <p className="font-sans text-xs text-taupe tracking-wider uppercase">
            © 2026 Solstice Design Studio
          </p>
        </div>

      </div>
    </footer>
  );
}
