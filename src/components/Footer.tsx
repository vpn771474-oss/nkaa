import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { clinicData } from "../data/clinicData";
import { MapPin, Mail, Phone, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.specialties, href: "#specialties" },
    { label: t.nav.doctors, href: "#doctors" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-6 md:px-8 border-t border-white/10 text-start">
      <div className="max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <span className="text-2xl font-bold tracking-tight text-white block">
                    {t.nav.brand}
                  </span>
                  <span className="text-xs text-[#A8B6A0] tracking-wide block">
                    {t.nav.brandSubtitle} • {clinicData.city}
                  </span>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-6">
                {t.footer.tagline}
              </p>

              {/* Location info */}
              <div className="space-y-2 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A8B6A0]" />
                  <span>
                    {clinicData.city}، {clinicData.region}، {clinicData.country}
                  </span>
                </div>
                {clinicData.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#A8B6A0]" />
                    <span dir="ltr">{clinicData.email}</span>
                  </div>
                )}
                {clinicData.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#A8B6A0]" />
                    <span dir="ltr">{clinicData.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Fictional demo notice */}
            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-white/40 leading-relaxed max-w-sm">
              {t.footer.demoNote}
            </div>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-[#A8B6A0] tracking-wider uppercase mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Care paths (4 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold text-[#A8B6A0] tracking-wider uppercase mb-5">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              {t.services.items.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#68475E] text-white hover:bg-[#3A293B] transition-colors"
              >
                <span>{t.footer.bookPre}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            <p>{t.footer.copyright}</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
