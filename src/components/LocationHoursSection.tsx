import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { clinicData } from "../data/clinicData";
import { MapPin, Clock, Phone, Car, Navigation } from "lucide-react";
import { motion } from "motion/react";

export const LocationHoursSection: React.FC = () => {
  const { t } = useLanguage();
  const hasAddress = Boolean(clinicData.address && clinicData.address.trim().length > 0);
  const hasHours = Boolean(
    clinicData.hours &&
      (typeof clinicData.hours === "object"
        ? Object.keys(clinicData.hours).length > 0
        : clinicData.hours.trim().length > 0)
  );

  return (
    <section
      id="location"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-start"
      aria-labelledby="location-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[34px] sm:rounded-[42px] p-6 sm:p-10 md:p-14 lg:p-16 shadow-[0_12px_36px_rgba(0,0,0,0.03)]"
      >
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
            {t.location.eyebrow}
          </span>
          <h2
            id="location-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight"
          >
            {t.location.title1}
            <br />
            {t.location.title2}
          </h2>
          <p className="text-sm sm:text-base text-[#6F6A69] mt-3 leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address & Practical Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-[28px] bg-[#F4F0E9] border border-[#E7E1DA]">
              <div className="flex items-center gap-3 text-[#68475E] mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#68475E]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#68475E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#151314]">{t.location.addressHeading}</h3>
              </div>

              {hasAddress ? (
                <div className="text-sm text-[#151314] leading-relaxed">
                  <p className="font-medium">{clinicData.address}</p>
                  <p className="text-[#6F6A69] mt-1">{clinicData.city}، {clinicData.country}</p>
                </div>
              ) : (
                <p className="text-sm text-[#6F6A69] leading-relaxed bg-[#FFFEFB] p-4 rounded-2xl border border-[#E7E1DA]">
                  {t.location.addressEmpty}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-[#E7E1DA] text-xs text-[#6F6A69]">
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#A8B6A0] shrink-0 mt-0.5" />
                  <span>{t.location.parkingText}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-[#A8B6A0] shrink-0 mt-0.5" />
                  <span>{t.location.accessText}</span>
                </div>
              </div>
            </div>

            {/* Contact quick links if available */}
            {clinicData.phone && (
              <div className="p-5 rounded-[24px] bg-[#FFFEFB] border border-[#E7E1DA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#68475E]" />
                  <span className="text-xs sm:text-sm font-medium text-[#151314]">{t.location.directContact}</span>
                </div>
                <a
                  href={`tel:${clinicData.phone}`}
                  dir="ltr"
                  className="text-xs sm:text-sm font-semibold text-[#68475E] hover:underline"
                >
                  {clinicData.phone}
                </a>
              </div>
            )}
          </div>

          {/* Opening Hours Schedule (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-[28px] bg-[#111111] text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#68475E] flex items-center justify-center text-white">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-white">{t.location.hoursHeading}</h3>
              </div>

              {hasHours ? (
                typeof clinicData.hours === "object" ? (
                  <div className="space-y-3 text-xs sm:text-sm">
                    {Object.entries(clinicData.hours).map(([day, time]) => (
                      <div
                        key={day}
                        className="flex items-center justify-between py-2 border-b border-white/10"
                      >
                        <span className="text-white/80">{day}</span>
                        <span className="font-medium text-[#A8B6A0]">{time}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-white/80 leading-relaxed py-2">
                    {clinicData.hours}
                  </p>
                )
              ) : (
                <div className="py-6 text-center text-xs text-white/60 bg-white/5 rounded-2xl border border-white/5">
                  <p>{t.location.hoursEmpty1}</p>
                  <p className="text-[11px] text-[#A8B6A0] mt-1">{t.location.hoursEmpty2}</p>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/60">
                <p>{t.location.hoursFooter}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
