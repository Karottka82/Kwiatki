import React from "react";
import "./contact.css";
import image7 from "../assets/images/7.png";

import EmailForm from "../mail.js";
import ContactDataSection from "./contactdata.js";

export const ContactSection = () => {
  return (
    <section id="contact">
      <img src={image7} alt="Kontakt" className="contact-image" />
      <div className="kontakt-uklad">
        <ContactDataSection />
        <EmailForm />
      </div>
    </section>
  );
};
