import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { clinicData } from "../data/clinicData";
import { Stethoscope, UserCheck } from "lucide-react";
import { motion } from "motion/react";

interface DoctorsSectionProps {
  onBookClick?: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookClick }) => {
  const { t } = useLanguage();
  const activeDoctors = clinicData.doctors.filter((d) => d.enabled);

  return (
    <section
      id="doctors"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-start"
      aria-labelledby="doctors-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
          {t.doctors.eyebrow}
        </span>
        <h2
          id="doctors-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight"
        >
          {t.doctors.title1}
          <br />
          {t.doctors.title2}
        </h2>
        <p className="text-sm sm:text-base text-[#6F6A69] mt-3 leading-relaxed">
          {t.doctors.subtitle}
        </p>
      </motion.div>

      {activeDoctors.length === 0 ? (
        /* Tasteful Editorial Placeholder State per strict instructions */
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 md:p-16 max-w-3xl mx-auto text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
        >
          <div className="w-16 h-16 rounded-full bg-[#F4F0E9] border border-[#E7E1DA] flex items-center justify-center mx-auto mb-5 text-[#68475E]">
            <Stethoscope className="w-7 h-7" />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#151314] mb-3">
            {t.doctors.placeholderTitle}
          </h3>

          <p className="text-sm text-[#6F6A69] leading-relaxed max-w-lg mx-auto mb-6">
            {t.doctors.placeholderDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E7E1DA] text-start">
            <div className="p-4 rounded-2xl bg-[#F4F0E9]/60">
              <span className="text-xs font-semibold text-[#68475E] block mb-1">
                {t.doctors.feature1Title}
              </span>
              <p className="text-xs text-[#6F6A69] leading-relaxed">
                {t.doctors.feature1Desc}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F4F0E9]/60">
              <span className="text-xs font-semibold text-[#68475E] block mb-1">
                {t.doctors.feature2Title}
              </span>
              <p className="text-xs text-[#6F6A69] leading-relaxed">
                {t.doctors.feature2Desc}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F4F0E9]/60">
              <span className="text-xs font-semibold text-[#68475E] block mb-1">
                {t.doctors.feature3Title}
              </span>
              <p className="text-xs text-[#6F6A69] leading-relaxed">
                {t.doctors.feature3Desc}
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activeDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[30px] p-6 flex flex-col justify-between"
            >
              <div>
                {doc.photo ? (
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-64 object-cover rounded-2xl mb-4"
                  />
                ) : (
                  <div className="w-full h-64 bg-[#F4F0E9] rounded-2xl mb-4 flex items-center justify-center text-[#68475E]">
                    <UserCheck className="w-12 h-12" />
                  </div>
                )}
                <span className="text-xs text-[#68475E] font-medium block mb-1">{doc.role}</span>
                <h3 className="text-xl font-bold text-[#151314] mb-2">{doc.name}</h3>
                <p className="text-xs text-[#6F6A69] mb-3">{doc.specialty}</p>
                {doc.bio && <p className="text-sm text-[#6F6A69] leading-relaxed">{doc.bio}</p>}
              </div>

              {onBookClick && (
                <button
                  onClick={onBookClick}
                  className="mt-6 w-full py-2.5 rounded-full text-xs font-semibold bg-[#68475E] text-white hover:bg-[#3A293B] transition-colors"
                >
                  {doc.appointmentCTA || "حجز موعد"}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
