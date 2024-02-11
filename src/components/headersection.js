import React from "react";
import "./headersection.css";

const HeaderSection = () => {
  const handleScrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Przesunięcie o 30px nad sekcję
        behavior: "smooth", // Płynne przewijanie
      });
    }
  };

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
              <a href="#o_nas" onClick={handleScrollToSection("o_nas")}>
                O nas
              </a>
            </li>
            <li>
              <a href="#oferta" onClick={handleScrollToSection("oferta")}>
                Oferta
              </a>
            </li>
            <li>
              <a href="#kontakt" onClick={handleScrollToSection("kontakt")}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default HeaderSection;
