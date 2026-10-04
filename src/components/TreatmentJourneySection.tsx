import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Calendar, Stethoscope, MessagesSquare, ClipboardCheck, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface TreatmentJourneyProps {
  onBookClick: () => void;
}

export const TreatmentJourneySection: React.FC<TreatmentJourneyProps> = ({ onBookClick }) => {
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const icons = [Calendar, Stethoscope, MessagesSquare, ClipboardCheck];
  const accents = ["#68475E", "#A8B6A0", "#D8BFC2", "#3A293B"];

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-start"
      aria-labelledby="journey-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
          {t.journey.eyebrow}
        </span>
        <h2
          id="journey-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight"
        >
          {t.journey.title1}
          <br />
          {t.journey.title2}
        </h2>
        <p className="text-sm sm:text-base text-[#6F6A69] mt-3 leading-relaxed">
          {t.journey.subtitle}
        </p>
      </motion.div>

      {/* 4 Steps Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.journey.steps.map((step, index) => {
          const Icon = icons[index % icons.length];
          const accentColor = accents[index % accents.length];
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[30px] p-6 sm:p-8 relative flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#68475E]/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-[#6F6A69]/40 font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#151314] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#6F6A69] leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E7E1DA]/80 text-[11px] text-[#A8B6A0] font-medium">
                {step.tag}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Clinical Evaluation Reassurance Disclaimer */}
      <div className="mt-8 p-4 sm:p-5 rounded-[24px] bg-[#F4F0E9] border border-[#E7E1DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#6F6A69]">
        <span>
          {t.journey.disclaimerIntro} <strong className="text-[#151314]">{t.journey.disclaimerHighlight}</strong> {t.journey.disclaimerBody}
        </span>

        <button
          onClick={onBookClick}
          className="text-xs font-semibold text-[#68475E] hover:text-[#3A293B] shrink-0 flex items-center gap-1.5 underline cursor-pointer"
        >
          <span>{t.journey.startCta}</span>
          <ArrowIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
