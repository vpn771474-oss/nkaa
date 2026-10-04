import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { clinicData } from "../data/clinicData";
import { Calendar, Clock, User, Phone, CheckCircle2, PhoneCall, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const AppointmentSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: t.appointment.types[0],
    preferredDate: "",
    preferredTime: t.appointment.timeSlots[0],
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg(isRtl ? "يرجى كتابة الاسم الكريم للمتابعة." : "Please enter your name to proceed.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg(isRtl ? "يرجى إدخال رقم هاتف صالح لنتمكن من التواصل معك." : "Please enter a valid phone number.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      type: t.appointment.types[0],
      preferredDate: "",
      preferredTime: t.appointment.timeSlots[0],
      notes: "",
    });
    setSubmitted(false);
  };

  return (
    <section
      id="appointment"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1360px] mx-auto text-start"
      aria-labelledby="appointment-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[32px] sm:rounded-[38px] p-6 sm:p-10 md:p-14 lg:p-16 shadow-[0_16px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
      >
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#DCE3D8]/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D8BFC2]/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
              {t.appointment.eyebrow}
            </span>
            <h2
              id="appointment-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight"
            >
              {t.appointment.title1}
              <br />
              {t.appointment.title2}
            </h2>
            <p className="text-sm sm:text-base text-[#6F6A69] mt-3 leading-relaxed">
              {t.appointment.subtitle}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              /* Submission Reassurance State */
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="bg-[#F4F0E9] border border-[#E7E1DA] rounded-[28px] p-8 sm:p-12 text-center max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[#A8B6A0]/25 text-[#3A293B] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-[#68475E]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#151314] mb-3">
                  {t.appointment.successTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#6F6A69] leading-relaxed mb-6">
                  {t.appointment.successMsg}
                </p>

                <div className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-2xl p-4 text-xs sm:text-sm text-[#6F6A69] max-w-md mx-auto mb-6 text-start">
                  <div className="flex justify-between py-1 border-b border-[#E7E1DA]/60">
                    <span className="text-[#151314] font-medium">{t.appointment.typeField}</span>
                    <span>{formData.type}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E7E1DA]/60">
                    <span className="text-[#151314] font-medium">{t.appointment.timeField}</span>
                    <span>{formData.preferredTime}</span>
                  </div>
                  {formData.preferredDate && (
                    <div className="flex justify-between py-1">
                      <span className="text-[#151314] font-medium">{t.appointment.dateField}</span>
                      <span>{formData.preferredDate}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full text-sm font-medium bg-[#111111] text-white hover:bg-[#3A293B] transition-colors cursor-pointer"
                  >
                    {t.appointment.newBookingCta}
                  </button>
                  <a
                    href="#services"
                    className="px-6 py-2.5 rounded-full text-sm font-medium bg-transparent text-[#68475E] hover:underline"
                  >
                    {t.appointment.browseServicesCta}
                  </a>
                </div>
              </motion.div>
            ) : (
              /* Booking Form */
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {errorMsg && (
                  <div className="flex items-center gap-2.5 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#151314] mb-2">
                      {t.appointment.nameLabel} <span className="text-[#68475E]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder={t.appointment.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-[52px] px-4 rounded-[20px] bg-[#F4F0E9] border border-[#E7E1DA] text-[#151314] placeholder-[#6F6A69]/60 text-sm focus:outline-none focus:border-[#68475E] focus:bg-white transition-all"
                      />
                      <User className={`w-4 h-4 text-[#6F6A69] absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? "left-4" : "right-4"}`} />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#151314] mb-2">
                      {t.appointment.phoneLabel} <span className="text-[#68475E]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        dir={isRtl ? "ltr" : "ltr"}
                        placeholder={t.appointment.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full h-[52px] px-4 rounded-[20px] bg-[#F4F0E9] border border-[#E7E1DA] text-[#151314] placeholder-[#6F6A69]/60 text-sm focus:outline-none focus:border-[#68475E] focus:bg-white transition-all ${isRtl ? "text-right" : "text-left"}`}
                      />
                      <Phone className={`w-4 h-4 text-[#6F6A69] absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? "right-4" : "right-4"}`} />
                    </div>
                  </div>

                  {/* Appointment Type */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#151314] mb-2">
                      {t.appointment.typeLabel} <span className="text-[#68475E]">*</span>
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full h-[52px] px-4 rounded-[20px] bg-[#F4F0E9] border border-[#E7E1DA] text-[#151314] text-sm focus:outline-none focus:border-[#68475E] focus:bg-white transition-all cursor-pointer"
                    >
                      {t.appointment.types.map((typeOption) => (
                        <option key={typeOption} value={typeOption}>
                          {typeOption}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#151314] mb-2">
                      {t.appointment.dateLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full h-[52px] px-4 rounded-[20px] bg-[#F4F0E9] border border-[#E7E1DA] text-[#151314] text-sm focus:outline-none focus:border-[#68475E] focus:bg-white transition-all"
                      />
                      <Calendar className={`w-4 h-4 text-[#6F6A69] absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? "left-4" : "right-4"}`} />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-[#151314] mb-2">
                      {t.appointment.timeLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {t.appointment.timeSlots.map((slot) => {
                        const isSelected = formData.preferredTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredTime: slot })}
                            className={`h-[48px] px-3.5 rounded-[18px] text-xs font-medium border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                              isSelected
                                ? "bg-[#3A293B] text-white border-[#3A293B] shadow-sm"
                                : "bg-[#F4F0E9] text-[#151314] border-[#E7E1DA] hover:bg-[#E7E1DA]"
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{slot}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-[#151314] mb-2">
                      {t.appointment.notesLabel}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t.appointment.notesPlaceholder}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-4 rounded-[20px] bg-[#F4F0E9] border border-[#E7E1DA] text-[#151314] placeholder-[#6F6A69]/60 text-sm focus:outline-none focus:border-[#68475E] focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E7E1DA]">
                  <p className="text-xs text-[#6F6A69] leading-relaxed">
                    {t.appointment.disclaimer}
                  </p>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {clinicData.phone ? (
                      <a
                        href={`tel:${clinicData.phone}`}
                        className="h-[52px] px-6 rounded-full text-sm font-medium bg-[#F4F0E9] text-[#151314] hover:bg-[#E7E1DA] border border-[#E7E1DA] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <PhoneCall className="w-4 h-4 text-[#68475E]" />
                        <span>{t.appointment.callCta}</span>
                      </a>
                    ) : null}

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 sm:flex-none h-[52px] px-8 rounded-full text-sm font-semibold bg-[#68475E] text-white hover:bg-[#3A293B] shadow-[0_6px_20px_rgba(104,71,94,0.28)] transition-all whitespace-nowrap cursor-pointer border border-[#68475E]"
                    >
                      {t.appointment.submitCta}
                    </motion.button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
