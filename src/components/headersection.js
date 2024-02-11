import React from "react";
import "./headersection.css";
const HeaderSection = () => {
  return (
    <section id="top">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#top" className="logo">
                Royal Green
              </a>
            </li>
            <li>
              <a href="#o_nas">O nas</a>
            </li>
            <li>
              <a href="#oferta">Oferta</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default HeaderSection;
