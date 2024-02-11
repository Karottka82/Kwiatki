import React from "react";
import "./contact.css";
import image7 from "./zdjecia/7.png";

import EmailForm from "./mail.js";
import ContactDataSection from "./contactdata.js";

const ContactSection = () => {
  return (
    <section id="kontakt">
      <img src={image7} alt="Kontakt" className="contact-image" />
      <div id="kontakt-uklad">
        <ContactDataSection />
        <EmailForm />
      </div>
    </section>
  );
};

export default ContactSection;
