import React from "react";
import "./contactdata.css";
const ContactDataSection = () => {
  return (
    <div className="footer section">
      <div className="kontakt-text">
        <div>
          Telefon:
          <span className="data">456-987-998</span>
        </div>
        <div>
          E-mail:
          <span className="data">royalgreencracow@gmail.com</span>
        </div>
        <div>
          Adres:<span className="data">Salwatorska 25 Kraków</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDataSection;
