import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, ArrowLeft, ArrowRight, Calendar, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onServicesClick }) => {
  const { lang, t, toggleLanguage, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.specialties, href: "#specialties" },
    { label: t.nav.doctors, href: "#doctors" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 md:top-6 inset-x-0 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-[1360px] z-50 transition-all duration-300 ${
          scrolled ? "top-3 md:top-4" : "top-4 md:top-6"
        }`}
      >
        {/*
          Glassy Black Smoked Capsule:
          bg-black/60 with backdrop-blur-2xl, subtle white/15 hairline border, and deep ambient shadow
        */}
        <div
          className="relative bg-black/65 backdrop-blur-2xl text-white rounded-full px-4 sm:px-6 md:px-8 h-[68px] sm:h-[74px] md:h-[78px] flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/15 ring-1 ring-white/10 overflow-hidden"
        >
          {/* Subtle Glass Sheen Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none rounded-full" />

          {/* Brand mark - Clean Display Wordmark (Selected circle icon removed per user request) */}
          <a
            href="#hero"
            className="flex items-center gap-2 group select-none shrink-0 relative z-10"
          >
            <div className="flex flex-col text-start">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-none group-hover:text-[#D8BFC2] transition-colors">
                {t.nav.brand}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#A8B6A0] tracking-wider mt-0.5 font-normal">
                {t.nav.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] xl:text-[15px] font-medium text-white/80 relative z-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#A8B6A0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons with Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5 md:gap-3 shrink-0 relative z-10">
            {/* Language Switch Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={toggleLanguage}
              className="h-[42px] px-3.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              aria-label="تغيير اللغة / Switch Language"
              title={t.nav.langName}
            >
              <Globe className="w-3.5 h-3.5 text-[#A8B6A0]" />
              <span className="tracking-wide">{t.nav.langSwitch}</span>
            </motion.button>

            {/* Explore Services */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onServicesClick}
              className="px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-medium bg-[#F4F0E9] text-[#151314] hover:bg-white transition-all duration-200 whitespace-nowrap cursor-pointer shadow-sm"
            >
              {t.nav.exploreServices}
            </motion.button>

            {/* Book Appointment */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="px-5 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold bg-[#68475E] text-white hover:bg-[#52354a] shadow-[0_4px_16px_rgba(104,71,94,0.45)] border border-[#855c7a]/40 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookAppointment}</span>
            </motion.button>
          </div>

          {/* Mobile Actions and Hamburger */}
          <div className="flex sm:hidden items-center gap-2 relative z-10">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="h-[36px] px-2.5 rounded-full text-[11px] font-semibold bg-white/10 text-white border border-white/15 flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-[#A8B6A0]" />
              <span>{t.nav.langSwitch}</span>
            </button>

            <button
              onClick={onBookClick}
              className="px-3 py-2 rounded-full text-xs font-semibold bg-[#68475E] text-white whitespace-nowrap"
            >
              {t.nav.bookShort}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md flex flex-col justify-end sm:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/90 text-white rounded-t-[32px] p-6 pb-10 border-t border-white/15 shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xl font-bold block">{t.nav.brand}</span>
                  <span className="text-xs text-[#A8B6A0] block">{t.nav.brandSubtitle}</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-2.5 mb-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white/90 font-medium flex items-center justify-between text-base"
                  >
                    <span>{link.label}</span>
                    <ArrowIcon className="w-4 h-4 text-[#A8B6A0]" />
                  </a>
                ))}
              </nav>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onServicesClick();
                  }}
                  className="w-full py-3 rounded-full text-sm font-medium bg-[#F4F0E9] text-[#151314] text-center"
                >
                  {t.nav.exploreServices}
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-3 rounded-full text-sm font-semibold bg-[#68475E] text-white text-center"
                >
                  {t.nav.bookAppointment}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
