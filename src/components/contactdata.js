import React from "react";
import "./contactdata.css";
const ContactDataSection = () => {
  return (
    <section id="kontakt.data">
      <div id="kontakt.text">
        <div>
          Telefon
          <span id="data">456-987-998</span>
        </div>

        <div>
          E-mail
          <span id="data">royalgreencracow@gmail.com</span>
        </div>
      </div>
      <div id="kontakt.text">
        <div>
          Adres<span id="data">Salwatorska 25 Kraków</span>
        </div>
      </div>
    </section>
  );
};

export default ContactDataSection;
