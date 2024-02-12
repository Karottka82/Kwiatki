import React from "react";
import "./App.css"; // Import your CSS file

import HeaderSection from "./components/headersection.js";
import MainPhotoSection from "./components/mainphoto.js";
import AboutSection from "./components/about.js";
import OfferSection from "./components/offersection.js";
import ContactSection from "./components/contact.js";
import LastSection from "./components/lastsection.js";

const App = () => {
  return (
    <div>
      <HeaderSection />
      <MainPhotoSection />
      <AboutSection />
      <OfferSection />
      <ContactSection />
      <LastSection />
    </div>
  );
};

export default App;
