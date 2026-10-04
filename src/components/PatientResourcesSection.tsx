import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { BookOpen, Check, X, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const PatientResourcesSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const selectedResource = t.resources.items.find((r) => r.id === selectedResourceId);

  return (
    <section
      id="patient-resources"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto text-start"
      aria-labelledby="resources-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-12 sm:mb-16"
      >
        <span className="text-xs sm:text-sm font-semibold text-[#68475E] tracking-wider block mb-2">
          {t.resources.eyebrow}
        </span>
        <h2
          id="resources-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#151314] leading-tight"
        >
          {t.resources.title}
        </h2>
        <p className="text-sm sm:text-base text-[#6F6A69] mt-3 leading-relaxed">
          {t.resources.subtitle}
        </p>
      </motion.div>

      {/* Grid of resource cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.resources.items.map((res, index) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[30px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#68475E]/40 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#68475E]">{res.category}</span>
                <div className="w-8 h-8 rounded-full bg-[#F4F0E9] flex items-center justify-center text-[#68475E]">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#151314] mb-2.5">{res.title}</h3>
              <p className="text-xs sm:text-sm text-[#6F6A69] leading-relaxed mb-6">
                {res.description}
              </p>
            </div>

            <button
              onClick={() => setSelectedResourceId(res.id)}
              className="w-full py-2.5 rounded-full text-xs font-semibold bg-[#F4F0E9] text-[#151314] hover:bg-[#68475E] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{t.resources.viewGuide}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Resource Details Modal */}
      <AnimatePresence>
        {selectedResource && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedResourceId(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FFFEFB] border border-[#E7E1DA] rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-start"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E1DA] mb-5">
                <div>
                  <span className="text-xs font-semibold text-[#68475E] block mb-1">
                    {selectedResource.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#151314]">{selectedResource.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedResourceId(null)}
                  className="w-8 h-8 rounded-full bg-[#F4F0E9] hover:bg-[#E7E1DA] flex items-center justify-center text-[#151314] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-[#6F6A69] leading-relaxed mb-6">
                {selectedResource.description}
              </p>

              <div className="space-y-3 mb-8">
                {selectedResource.content.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F4F0E9]/70">
                    <div className="w-5 h-5 rounded-full bg-[#DCE3D8] text-[#3A293B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#3A293B]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#151314] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-3 border-t border-[#E7E1DA]">
                <button
                  onClick={() => setSelectedResourceId(null)}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#111111] text-white hover:bg-[#3A293B] cursor-pointer"
                >
                  {t.resources.modalClose}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
