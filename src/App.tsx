import React from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AppointmentSection } from "./components/AppointmentSection";
import { ServicesSection } from "./components/ServicesSection";
import { SpecialtiesSection } from "./components/SpecialtiesSection";
import { DoctorsSection } from "./components/DoctorsSection";
import { PatientComfortSection } from "./components/PatientComfortSection";
import { EmergencyDentalSection } from "./components/EmergencyDentalSection";
import { PatientResourcesSection } from "./components/PatientResourcesSection";
import { TreatmentJourneySection } from "./components/TreatmentJourneySection";
import { AboutSection } from "./components/AboutSection";
import { LocationHoursSection } from "./components/LocationHoursSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function MainContent() {
  const { isRtl } = useLanguage();

  const scrollToAppointment = () => {
    const el = document.getElementById("appointment");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#FFFEFB] text-[#151314] selection:bg-[#D8BFC2] selection:text-[#3A293B] ${
        isRtl ? "font-sans" : "font-sans"
      }`}
    >
      {/* 01. Floating Glassy Smoked Capsule Navbar */}
      <Navbar
        onBookClick={scrollToAppointment}
        onServicesClick={scrollToServices}
      />

      {/* Main Content Sections */}
      <main>
        {/* 02 & 03. Hero and Rounded Visuals */}
        <Hero
          onBookClick={scrollToAppointment}
          onServicesClick={scrollToServices}
        />

        {/* 04. Appointment Booking Section */}
        <AppointmentSection />

        {/* 05. Services Grid Section */}
        <ServicesSection
          onSelectServiceForBooking={(_serviceTitle) => {
            const appointmentEl = document.getElementById("appointment");
            if (appointmentEl) {
              appointmentEl.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />

        {/* 06. Specialties Organization Section */}
        <SpecialtiesSection />

        {/* 07. Doctors / Team Section */}
        <DoctorsSection onBookClick={scrollToAppointment} />

        {/* 08. Patient Comfort & Experience Section */}
        <PatientComfortSection onBookClick={scrollToAppointment} />

        {/* 09. Emergency Dental Care Section */}
        <EmergencyDentalSection
          onContactClick={scrollToContact}
          onEmergencyBooking={scrollToAppointment}
        />

        {/* 10. Patient Resources Guide */}
        <PatientResourcesSection />

        {/* 11. Treatment Journey 4-Step Process */}
        <TreatmentJourneySection onBookClick={scrollToAppointment} />

        {/* Note: Selector 3 (BeforeAfterSection) removed per user request */}

        {/* 12. About Section */}
        <AboutSection />

        {/* 13. Location & Opening Hours Section */}
        <LocationHoursSection />

        {/* 14. FAQ Accordion Section */}
        <FaqSection />

        {/* 15. Contact Section */}
        <ContactSection onBookClick={scrollToAppointment} />
      </main>

      {/* 16. Deep Black Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
