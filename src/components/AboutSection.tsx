import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { clinicData } from "../data/clinicData";
import { MapPin, Heart, Shield } from "lucide-react";
import { motion } from "motion/react";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-start"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 order-2 lg:order-1"
        >
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-[#E7E1DA] aspect-[4/3] sm:aspect-[16/11] bg-[#F4F0E9] shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
              alt="Naqaa dental clinic architectural space"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 text-start">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#68475E] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#68475E]" />
                <span>{t.about.locationBadge}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#151314] font-medium">
                {t.about.locationDesc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 order-1 lg:order-2"
        >
          <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
            {t.about.eyebrow}
          </span>

          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight mb-6"
          >
            {t.about.title1}
            <br />
            <span className="text-[#68475E] font-semibold">{t.about.title2}</span>
          </h2>

          <div className="space-y-4 text-base text-[#6F6A69] leading-relaxed font-normal mb-8">
            <p>{t.about.body1}</p>
            <p className="text-sm">{t.about.body2}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E7E1DA]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#DCE3D8] text-[#3A293B] flex items-center justify-center shrink-0 mt-0.5">
                <Heart className="w-4 h-4 text-[#68475E]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#151314] mb-0.5">{t.about.feature1Title}</h3>
                <p className="text-xs text-[#6F6A69] leading-relaxed">
                  {t.about.feature1Desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D8BFC2]/40 text-[#3A293B] flex items-center justify-center shrink-0 mt-0.5">
                <Shield className="w-4 h-4 text-[#68475E]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#151314] mb-0.5">{t.about.feature2Title}</h3>
                <p className="text-xs text-[#6F6A69] leading-relaxed">
                  {t.about.feature2Desc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
