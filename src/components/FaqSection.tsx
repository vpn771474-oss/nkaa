import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1050px] mx-auto text-start"
      aria-labelledby="faq-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
          {t.faq.eyebrow}
        </span>
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight"
        >
          {t.faq.title1}
          <br />
          {t.faq.title2}
        </h2>
        <p className="text-sm sm:text-base text-[#6F6A69] mt-3 leading-relaxed">
          {t.faq.subtitle}
        </p>
      </motion.div>

      <div className="space-y-4">
        {t.faq.items.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`bg-[#FFFEFB] border rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-[#68475E]/30 shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
                  : "border-[#E7E1DA] hover:border-[#68475E]/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#68475E]"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#68475E] text-white" : "bg-[#F4F0E9] text-[#6F6A69]"
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-[#151314]">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#68475E]/10 text-[#68475E] rotate-180"
                      : "bg-[#F4F0E9] text-[#6F6A69]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#6F6A69] leading-relaxed border-t border-[#E7E1DA]/50">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
