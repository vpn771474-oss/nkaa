import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { clinicData } from "../data/clinicData";
import { Send, CheckCircle2, MessageCircle, Phone, Mail, User, PhoneCall, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactSectionProps {
  onBookClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookClick }) => {
  const { t, isRtl } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: t.contact.inquiryOptions[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg(isRtl ? "يرجى إدخال اسمك الكريم." : "Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg(isRtl ? "يرجى إدخال رقم هاتف صالح للتواصل." : "Please enter a valid phone number.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg(isRtl ? "يرجى كتابة رسالتك أو استفسارك." : "Please enter your message.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1360px] mx-auto text-start"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#F4F0E9] border border-[#E7E1DA] rounded-[34px] sm:rounded-[42px] p-6 sm:p-10 md:p-14 lg:p-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Header & Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
                {t.contact.eyebrow}
              </span>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight mb-4"
              >
                {t.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-[#6F6A69] leading-relaxed mb-8">
                {t.contact.subtitle}
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                {clinicData.email && (
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FFFEFB] border border-[#E7E1DA]">
                    <div className="w-10 h-10 rounded-xl bg-[#68475E]/10 flex items-center justify-center text-[#68475E] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#6F6A69] block">{t.contact.emailLabel}</span>
                      <a
                        href={`mailto:${clinicData.email}`}
                        dir="ltr"
                        className="text-sm font-semibold text-[#151314] hover:text-[#68475E] transition-colors"
                      >
                        {clinicData.email}
                      </a>
                    </div>
                  </div>
                )}

                {clinicData.phone && (
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FFFEFB] border border-[#E7E1DA]">
                    <div className="w-10 h-10 rounded-xl bg-[#A8B6A0]/20 flex items-center justify-center text-[#3A293B] shrink-0">
                      <Phone className="w-5 h-5 text-[#68475E]" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#6F6A69] block">{t.contact.phoneLabel}</span>
                      <a
                        href={`tel:${clinicData.phone}`}
                        dir="ltr"
                        className="text-sm font-semibold text-[#151314] hover:text-[#68475E] transition-colors"
                      >
                        {clinicData.phone}
                      </a>
                    </div>
                  </div>
                )}

                {clinicData.whatsapp && (
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FFFEFB] border border-[#E7E1DA]">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#6F6A69] block">{t.contact.whatsappLabel}</span>
                      <a
                        href={`https://wa.me/${clinicData.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-800 hover:underline"
                      >
                        {t.contact.whatsappCta}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-[#E7E1DA]/80">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#111111] text-white hover:bg-[#3A293B] transition-all cursor-pointer shadow-sm"
              >
                {t.contact.bookDirectCta}
              </button>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FFFEFB] border border-[#E7E1DA] rounded-[30px] p-6 sm:p-9 shadow-sm">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="inquiry-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#A8B6A0]/25 text-[#68475E] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#151314] mb-2">{t.contact.successTitle}</h3>
                  <p className="text-sm text-[#6F6A69] leading-relaxed max-w-md mx-auto mb-6">
                    {t.contact.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        name: "",
                        phone: "",
                        inquiryType: t.contact.inquiryOptions[0],
                        message: "",
                      });
                      setSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#68475E] text-white hover:bg-[#3A293B] cursor-pointer"
                  >
                    {t.contact.anotherInquiryCta}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#151314] mb-3">{t.contact.formTitle}</h3>

                  {errorMsg && (
                    <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-[#151314] mb-1.5">
                      {t.contact.nameLabel} <span className="text-[#68475E]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder=""
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-[50px] px-4 rounded-[18px] bg-[#F4F0E9] border border-[#E7E1DA] text-sm text-[#151314] placeholder-[#6F6A69]/60 focus:outline-none focus:border-[#68475E] focus:bg-white transition-all"
                      />
                      <User className={`w-4 h-4 text-[#6F6A69] absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? "left-4" : "right-4"}`} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#151314] mb-1.5">
                      {t.contact.phoneLabelField} <span className="text-[#68475E]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        placeholder="05XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full h-[50px] px-4 rounded-[18px] bg-[#F4F0E9] border border-[#E7E1DA] text-sm text-[#151314] placeholder-[#6F6A69]/60 focus:outline-none focus:border-[#68475E] focus:bg-white transition-all ${isRtl ? "text-right" : "text-left"}`}
                      />
                      <PhoneCall className={`w-4 h-4 text-[#6F6A69] absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? "right-4" : "right-4"}`} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#151314] mb-1.5">
                      {t.contact.typeLabel}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full h-[50px] px-4 rounded-[18px] bg-[#F4F0E9] border border-[#E7E1DA] text-sm text-[#151314] focus:outline-none focus:border-[#68475E] focus:bg-white transition-all cursor-pointer"
                    >
                      {t.contact.inquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#151314] mb-1.5">
                      {t.contact.msgLabel} <span className="text-[#68475E]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder=""
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-[18px] bg-[#F4F0E9] border border-[#E7E1DA] text-sm text-[#151314] placeholder-[#6F6A69]/60 focus:outline-none focus:border-[#68475E] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full h-[52px] rounded-full text-sm font-semibold bg-[#68475E] text-white hover:bg-[#3A293B] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#68475E]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.contact.submitCta}</span>
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
