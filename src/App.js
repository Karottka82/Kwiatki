import React from "react";
import "./App.css"; // Import your CSS file

import HeaderSection from "./components/headersection.js";
import MainPhotoSection from "./components/mainphoto.js";
import AboutSection from "./components/about.js";
import OfferSection from "./components/offersection.js";
import ContactSection from "./components/contact.js";
import LastSection from "./components/lastsection.js";
import ServiceSection from "./components/servicesection.js";
import ProjektSection from "./components/projektsection.js";

const App = () => {
  return (
    <div>
      <HeaderSection />
      <MainPhotoSection />
      <AboutSection />
      <OfferSection />
      <ProjektSection />
      <ServiceSection />
      <ContactSection />
      <LastSection />
    </div>
  );
};

export default App;
