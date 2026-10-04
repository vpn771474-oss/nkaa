import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface PatientComfortSectionProps {
  onBookClick: () => void;
}

export const PatientComfortSection: React.FC<PatientComfortSectionProps> = ({ onBookClick }) => {
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-start"
      aria-labelledby="comfort-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#111111] text-white rounded-[34px] sm:rounded-[42px] overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20 relative shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
      >
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#68475E]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#A8B6A0]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#A8B6A0] mb-4">
              <Sparkles className="w-4 h-4 text-[#A8B6A0]" />
              <span>{t.comfort.eyebrow}</span>
            </div>

            <h2
              id="comfort-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6"
            >
              {t.comfort.title1}
              <br />
              <span className="text-[#D8BFC2] font-semibold">{t.comfort.title2}</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl font-normal">
              {t.comfort.description}
            </p>

            {/* Three Patient Experience Pillars - Clean, spacious cards */}
            <div className="space-y-3.5 mb-9">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors">
                <h3 className="text-sm font-semibold text-white mb-1">{t.comfort.pillar1Title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {t.comfort.pillar1Desc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors">
                <h3 className="text-sm font-semibold text-white mb-1">{t.comfort.pillar2Title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {t.comfort.pillar2Desc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors">
                <h3 className="text-sm font-semibold text-white mb-1">{t.comfort.pillar3Title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {t.comfort.pillar3Desc}
                </p>
              </div>
            </div>

            <div>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookClick}
                className="h-[54px] px-8 rounded-full text-sm font-semibold bg-[#68475E] text-white hover:bg-[#52354a] shadow-[0_8px_25px_rgba(104,71,94,0.4)] transition-all inline-flex items-center gap-2.5 cursor-pointer border border-[#68475E]"
              >
                <span>{t.comfort.cta}</span>
                <ArrowIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 aspect-[4/3] sm:aspect-[16/11] bg-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                alt="Modern calming dental clinic interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-start">
                <span className="text-[11px] text-[#A8B6A0] font-semibold block mb-0.5">
                  {t.comfort.photoTag}
                </span>
                <p className="text-xs sm:text-sm text-white/90">
                  {t.comfort.photoDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
