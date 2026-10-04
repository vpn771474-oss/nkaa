import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onServicesClick }) => {
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative pt-[130px] sm:pt-[150px] md:pt-[170px] lg:pt-[180px] pb-16 md:pb-24 px-4 sm:px-6 md:px-8 max-w-[1450px] mx-auto overflow-hidden text-center"
      aria-labelledby="hero-heading"
    >
      {/*
        Selector 2 eyebrow badge removed per explicit user instruction ("اريدك تقوم بالغاء الي حددته لك")
        The hero now starts directly with generous editorial whitespace and the dominant headline!
      */}

      {/* Huge Centered Headline with Professional Motion Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1050px] mx-auto mb-6 sm:mb-8"
      >
        <h1
          id="hero-heading"
          className="text-[44px] sm:text-[60px] md:text-[76px] lg:text-[92px] leading-[1.08] sm:leading-[1.05] font-medium tracking-tight text-[#151314]"
          style={{ textWrap: "balance" }}
        >
          {t.hero.headlineLine1}
          <br />
          <span className="text-[#68475E] font-semibold">{t.hero.headlineLine2}</span>
        </h1>
      </motion.div>

      {/* Short Centered Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[700px] mx-auto mb-9 sm:mb-11"
      >
        <p className="text-base sm:text-lg md:text-xl text-[#6F6A69] leading-relaxed font-normal">
          {t.hero.description}
        </p>
      </motion.div>

      {/* Two Pill-Shaped CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-16 sm:mb-20"
      >
        <motion.button
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBookClick}
          className="w-full sm:w-auto min-w-[190px] h-[54px] sm:h-[58px] px-8 rounded-full text-base font-semibold bg-[#68475E] text-white hover:bg-[#3A293B] shadow-[0_12px_30px_rgba(104,71,94,0.3)] transition-colors flex items-center justify-center gap-2.5 cursor-pointer border border-[#68475E]"
        >
          <span>{t.hero.primaryCta}</span>
          <ArrowIcon className="w-4 h-4" />
        </motion.button>

        <motion.button
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={onServicesClick}
          className="w-full sm:w-auto min-w-[190px] h-[54px] sm:h-[58px] px-8 rounded-full text-base font-semibold bg-[#F4F0E9] text-[#151314] hover:bg-[#E7E1DA] transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#E7E1DA]"
        >
          <span>{t.hero.secondaryCta}</span>
        </motion.button>
      </motion.div>

      {/* Large Rounded Clinic Visuals with Professional Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 text-start"
      >
        {/* Main Large Visual Card */}
        <div className="lg:col-span-8 group relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[460px] md:min-h-[520px] bg-[#F4F0E9] border border-[#E7E1DA] shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
            alt="Contemporary dental suite with natural daylight"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            loading="eager"
          />

          {/* Measured Scrim Overlay for WCAG Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

          {/* Card Content Overlay */}
          <div className="absolute inset-0 p-6 sm:p-9 md:p-12 flex flex-col justify-end text-white">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#DCE3D8] mb-2">
              <Sparkles className="w-4 h-4 text-[#A8B6A0]" />
              <span>{t.hero.mainCardSmall}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight max-w-[500px]">
              {t.hero.mainCardTitle1}
              <br />
              {t.hero.mainCardTitle2}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 mt-3 max-w-[440px] leading-relaxed hidden sm:block">
              {t.hero.mainCardDesc}
            </p>
          </div>
        </div>

        {/* Supporting Secondary Visual Card */}
        <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
          {/* Visual subcard */}
          <div className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[260px] sm:min-h-[320px] lg:flex-1 bg-[#F4F0E9] border border-[#E7E1DA] shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Calm consultation room"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end text-white">
              <p className="text-lg sm:text-xl font-medium leading-snug">
                {t.hero.secondCardTitle1}
                <br />
                {t.hero.secondCardTitle2}
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-[#DCE3D8]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A8B6A0]" />
                <span>{t.hero.secondCardBadge}</span>
              </div>
            </div>
          </div>

          {/* Micro Brand Highlight Card */}
          <div className="rounded-[28px] sm:rounded-[32px] p-6 bg-[#F4F0E9] border border-[#E7E1DA] flex flex-col justify-between text-start">
            <div>
              <span className="text-xs font-semibold text-[#68475E] tracking-wider block mb-1">
                {t.hero.brandVisionLabel}
              </span>
              <p className="text-sm font-medium text-[#151314] leading-relaxed">
                {t.hero.brandVisionSubtitle}
              </p>
              <p className="text-xs text-[#6F6A69] mt-1 leading-relaxed">
                {t.hero.brandVisionDesc}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#E7E1DA] text-xs text-[#6F6A69]">
              <span className="w-2 h-2 rounded-full bg-[#A8B6A0]" />
              <span>{t.hero.brandVisionFoot}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
