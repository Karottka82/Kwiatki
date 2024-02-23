import React from "react";
import image3 from "../../assets/images/3.png";
import "./about.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section section">
      <div className="about-text">
        {" "}
        <h2>Witajcie w świecie zieleni!</h2>
        <>
          Jesteśmy firmą rodzinną z pasją do natury i zielonych przestrzeni
          biurowych. Z ogromnym doświadczeniem i radością zajmujemy się
          instalacją i pielęgnacją roślin, tworząc przyjazne i harmonijne
          miejsca pracy.
        </>
        <>
          Ponadto, jesteśmy zaangażowani w poszukiwanie nowych technologicznych
          rozwiązań i kreatywnych pomysłów. Nasze podejście opiera się na
          dostosowaniu projektu do indywidualnych potrzeb klienta oraz
          wykorzystaniu innowacyjnych technologii, aby stworzyć wyjątkowe i
          funkcjonalne rozwiązania. Ty masz pomysł my zrobimy wszystko żeby je
          spełnić. A jak nie masz pomysły my zaprojektujemy kilka rozwiązań tak
          byś miał wybór
        </>
        <>
          Cieszymy się, że możemy być częścią Waszej drogi ku lepszemu miejscu
          pracy. Dołączcie do naszej społeczności zieleni i razem stwórzmy
          środowisko, w którym praca to nie tylko obowiązek, ale również
          przyjemność!
        </>
      </div>
      <div className="about-image">
        <img src={image3} alt="Zdjęcie sekcji" />
      </div>
    </section>
  );
};

export default AboutSection;
