import React from "react";
import image5 from "../assets/images/10.jpg";
import "./projectsection.css";

const ProjektSection = () => {
  return (
    <div className="offer-item2 section">
      <div className="offer-text2">
        <h2>Od pomysłu...</h2>
        <p>
          Oferujemy kompleksowe rozwiązania w zakresie instalacji kwiatowych dla
          biur, zapewniając harmonię i estetykę w przestrzeniach pracy. Nasz
          zespół nie tylko posiada wysoką wiedzę w zakresie doboru roślin do
          różnych pomieszczeń biurowych, ale również wykazuje się kreatywnością
          i umiejętnością tworzenia unikalnych aranżacji. Dzięki naszemu
          doświadczeniu i znajomości roślin, jesteśmy w stanie stworzyć
          projekty, które nie tylko estetycznie uzupełnią Twoją przestrzeń
          biurową, ale także będą odzwierciedlać charakter Twojej firmy i
          tworzyć niepowtarzalną atmosferę.
        </p>

        <p>
          Nasze podejście opiera się na indywidualnym podejściu do każdego
          klienta oraz na szukaniu inspiracji w naturze i nowoczesnych trendach
          projektowania. Dlatego nasze projekty są nie tylko funkcjonalne, ale
          również inspirujące i wyjątkowe.
        </p>

        <p>
          Skontaktuj się z nami już dziś, abyśmy mogli wspólnie opracować
          kreatywne i unikatowe aranżacje roślin, które wzbogacą Twoją
          przestrzeń biurową i zainspirują wszystkich, którzy będą mieli
          przyjemność w niej pracować.
        </p>
      </div>
      <div className="offer-image2">
        <img src={image5} alt="Zdjęcie 5" />
      </div>
    </div>
  );
};

export default ProjektSection;
