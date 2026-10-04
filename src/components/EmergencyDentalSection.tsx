import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { clinicData } from "../data/clinicData";
import { AlertCircle, PhoneCall, MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface EmergencyDentalSectionProps {
  onContactClick: () => void;
  onEmergencyBooking: () => void;
}

export const EmergencyDentalSection: React.FC<EmergencyDentalSectionProps> = ({
  onContactClick,
  onEmergencyBooking,
}) => {
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className="py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-[1360px] mx-auto text-start"
      aria-labelledby="emergency-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#FFFEFB] border-2 border-[#D8BFC2] rounded-[32px] sm:rounded-[38px] p-6 sm:p-10 md:p-12 shadow-[0_12px_36px_rgba(216,191,194,0.2)] flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#68475E] bg-[#D8BFC2]/30 px-3.5 py-1 rounded-full mb-3">
            <AlertCircle className="w-4 h-4 text-[#68475E]" />
            <span>{t.emergency.eyebrow}</span>
          </div>

          <h2
            id="emergency-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#151314] leading-snug mb-3"
          >
            {t.emergency.title}
          </h2>

          <p className="text-sm sm:text-base text-[#6F6A69] leading-relaxed">
            {t.emergency.description}
          </p>

          <p className="text-xs text-[#6F6A69]/80 mt-2">
            {t.emergency.disclaimer}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          {clinicData.phone ? (
            <a
              href={`tel:${clinicData.phone}`}
              className="w-full sm:w-auto h-[50px] px-6 rounded-full text-sm font-semibold bg-[#111111] text-white hover:bg-[#3A293B] transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#A8B6A0]" />
              <span>{t.emergency.callNow}</span>
            </a>
          ) : null}

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onEmergencyBooking}
            className="w-full sm:w-auto h-[50px] px-7 rounded-full text-sm font-semibold bg-[#68475E] text-white hover:bg-[#3A293B] shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer border border-[#68475E]"
          >
            <span>{t.emergency.urgentCta}</span>
            <ArrowIcon className="w-4 h-4" />
          </motion.button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto h-[50px] px-5 rounded-full text-sm font-medium bg-[#F4F0E9] text-[#151314] hover:bg-[#E7E1DA] border border-[#E7E1DA] transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#6F6A69]" />
            <span>{t.emergency.contactCta}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
