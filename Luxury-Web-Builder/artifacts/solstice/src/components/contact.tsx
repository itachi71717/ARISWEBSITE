import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useSubmitContact } from "@workspace/api-client-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Please tell me a bit about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const submitContact = useSubmitContact();
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setIsError(false);
    submitContact.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSuccess(true);
          reset();
        },
        onError: () => {
          setIsError(true);
        },
      }
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            Let's Create Something Timeless Together
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {isSuccess ? (
            <div className="bg-white p-12 text-center border border-solstice-gold/30">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Thank you!</h3>
              <p className="font-sans text-slate text-lg">
                Your message has been sent — I'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {isError && (
                <div className="p-4 bg-red-50 text-red-600 border border-red-100 text-sm font-sans text-center">
                  Something went wrong. Please try again or reach out via WhatsApp or Instagram below.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    className="w-full bg-white border-b border-taupe px-4 py-4 text-charcoal font-sans focus:outline-none focus:border-solstice-gold transition-colors placeholder:text-taupe"
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 px-4">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone")}
                    className="w-full bg-white border-b border-taupe px-4 py-4 text-charcoal font-sans focus:outline-none focus:border-solstice-gold transition-colors placeholder:text-taupe"
                    data-testid="input-phone"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 px-4">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project... e.g. I have a business and I'd love help managing my social media graphics..."
                  rows={6}
                  {...register("message")}
                  className="w-full bg-white border-b border-taupe px-4 py-4 text-charcoal font-sans focus:outline-none focus:border-solstice-gold transition-colors resize-none placeholder:text-taupe"
                  data-testid="input-message"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 px-4">{errors.message.message}</p>
                )}
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={submitContact.isPending}
                  className="w-full md:w-auto px-12 py-4 bg-charcoal text-ivory font-sans tracking-widest uppercase text-sm hover:bg-solstice-gold transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  data-testid="button-submit"
                >
                  {submitContact.isPending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}

          {/* Social icon buttons */}
          <div className="mt-16 pt-16 border-t border-taupe/20 flex justify-center items-center gap-8">
            {/* WhatsApp — brand green */}
            <a
              href="https://wa.me/27604097325?text=Hi%20Ariella%2C%20I%27d%20love%20to%20chat%20about%20a%20branding%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              aria-label="Chat on WhatsApp"
              data-testid="link-contact-whatsapp"
            >
              <FaWhatsapp className="w-7 h-7 transition-colors duration-200" style={{ color: "#25D366" }} />
            </a>

            {/* Instagram — brand gradient */}
            <a
              href="https://www.instagram.com/sols.ticedesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(193,53,132,0.3)]"
              aria-label="Visit Instagram"
              data-testid="link-contact-instagram"
            >
              {/* Instagram gradient applied via SVG linearGradient on the icon */}
              <svg width="28" height="28" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ig-grad-contact" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path fill="url(#ig-grad-contact)" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
