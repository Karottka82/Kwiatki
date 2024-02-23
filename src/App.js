import React from "react";
import "./App.css"; // Import your CSS file

import { CarouselSection } from "./components/mainphoto/CarouselSection.jsx";
import AboutSection from "./components/about/about.js";
import OfferSection from "./components/offersection.js";
import { ContactSection } from "./components/ContactSection/ContactSection.jsx";
import LastSection from "./components/lastsection.js";
import ServiceSection from "./components/servicesection.js";
import ProjektSection from "./components/projektsection.js";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <CarouselSection />
      <AboutSection />
      <OfferSection />
      <ProjektSection />
      <ServiceSection />
      <ContactSection />
      <LastSection />
    </>
  );
};
