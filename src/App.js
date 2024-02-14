import React from "react";
import "./App.css"; // Import your CSS file

import MainPhotoSection from "./components/mainphoto.js";
import AboutSection from "./components/about.js";
import OfferSection from "./components/offersection.js";
import ContactSection from "./components/contact.js";
import LastSection from "./components/lastsection.js";
import ServiceSection from "./components/servicesection.js";
import ProjektSection from "./components/projektsection.js";
import { Header } from "./components/Header";
import { CarouselComponent } from "./components/CarouselComponent/CarouselComponent.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
      {/* <MainPhotoSection /> */}
      <AboutSection />
      <OfferSection />
      <ProjektSection />
      <ServiceSection />
      <ContactSection />
      <LastSection />
    </>
  );
};
