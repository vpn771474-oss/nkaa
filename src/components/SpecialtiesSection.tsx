import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Layers } from "lucide-react";
import { motion } from "motion/react";

export const SpecialtiesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="specialties"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-start"
      aria-labelledby="specialties-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#F4F0E9] border border-[#E7E1DA] rounded-[34px] sm:rounded-[40px] p-6 sm:p-10 md:p-14 lg:p-16"
      >
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
            {t.specialties.eyebrow}
          </span>
          <h2
            id="specialties-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight"
          >
            {t.specialties.title1}
            <br />
            {t.specialties.title2}
          </h2>
          <p className="text-sm sm:text-base text-[#6F6A69] mt-3 leading-relaxed">
            {t.specialties.subtitle}
          </p>
        </div>

        {/* 5 Specialty Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {t.specialties.items.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#68475E]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#A8B6A0]">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F4F0E9] flex items-center justify-center text-[#68475E]">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <span className="text-[11px] font-medium text-[#68475E] block mb-1">
                  {spec.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-[#151314] mb-2 leading-snug">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6A69] leading-relaxed mb-4">
                  {spec.description}
                </p>
              </div>

              {/* Tags without pill badges - clean unboxed typography */}
              <div className="pt-3 border-t border-[#E7E1DA] text-[11px] text-[#6F6A69] flex flex-wrap items-center gap-1.5">
                {spec.tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {i < spec.tags.length - 1 && <span className="text-[#A8B6A0]">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
