import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { clinicData } from "../data/clinicData";
import { ArrowLeft, ArrowRight, Check, Sparkles, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesSectionProps {
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const { t, isRtl } = useLanguage();
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Pair service translation items with clinicData images & accents
  const serviceItems = t.services.items.map((item, idx) => {
    const raw = clinicData.services.find((s) => s.id === item.id) || clinicData.services[idx];
    return {
      ...item,
      image: raw?.image || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
      accentColor: raw?.accentColor || "#68475E",
    };
  });

  const activeModalService = serviceItems.find((s) => s.id === activeModalId);

  const handleBookService = (serviceTitle: string) => {
    setActiveModalId(null);
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(serviceTitle);
    }
    const appointmentEl = document.getElementById("appointment");
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-start"
      aria-labelledby="services-heading"
    >
      {/* Eyebrow & Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
          {t.services.eyebrow}
        </span>
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight"
        >
          {t.services.title1}
          <br />
          {t.services.title2}
        </h2>
        <p className="text-sm sm:text-base text-[#6F6A69] mt-3 leading-relaxed">
          {t.services.subtitle}
        </p>
      </motion.div>

      {/* Editorial Service Grid - 6 Large Rounded Photography Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {serviceItems.map((service, index) => {
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group bg-[#FFFEFB] border border-[#E7E1DA] rounded-[30px] sm:rounded-[34px] overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F0E9]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-75" />

                {/* Numbering badge */}
                <div className="absolute top-4 end-4 flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 text-[#151314] shadow-sm backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-3 inset-x-4">
                  <span className="text-xs text-white/95 font-medium drop-shadow-sm">
                    {service.accentBadge}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#151314] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6F6A69] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#151314]/85">
                    {service.details.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#68475E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#E7E1DA] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalId(service.id)}
                    className="text-xs sm:text-sm font-semibold text-[#68475E] hover:text-[#3A293B] flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                  >
                    <span>{t.services.detailsCta}</span>
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => handleBookService(service.title)}
                    className="px-4 py-2 rounded-full text-xs font-medium bg-[#F4F0E9] text-[#151314] hover:bg-[#E7E1DA] transition-colors cursor-pointer"
                  >
                    {t.services.consultationCta}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Service Details Modal with AnimatePresence */}
      <AnimatePresence>
        {activeModalService && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalId(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-service-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[32px] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-start"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E1DA] mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"
                    style={{ backgroundColor: activeModalService.accentColor }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 id="modal-service-title" className="text-xl sm:text-2xl font-bold text-[#151314]">
                      {activeModalService.title}
                    </h3>
                    <span className="text-xs text-[#6F6A69]">{activeModalService.accentBadge}</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalId(null)}
                  className="w-8 h-8 rounded-full bg-[#F4F0E9] hover:bg-[#E7E1DA] flex items-center justify-center text-[#151314] cursor-pointer"
                  aria-label={t.services.modalClose}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-[#6F6A69] leading-relaxed mb-6">
                {activeModalService.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[#68475E] tracking-wider uppercase mb-3">
                  {t.services.modalPillarsLabel}
                </h4>
                <ul className="space-y-2.5">
                  {activeModalService.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#151314]">
                      <div className="w-5 h-5 rounded-full bg-[#DCE3D8] text-[#3A293B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#3A293B]" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F4F0E9] text-xs text-[#6F6A69] leading-relaxed mb-6">
                {t.services.modalDisclaimer}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E1DA]">
                <button
                  type="button"
                  onClick={() => setActiveModalId(null)}
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#F4F0E9] text-[#151314] hover:bg-[#E7E1DA] cursor-pointer"
                >
                  {t.services.modalClose}
                </button>
                <button
                  type="button"
                  onClick={() => handleBookService(activeModalService.title)}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#68475E] text-white hover:bg-[#3A293B] shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.services.modalBookService}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
