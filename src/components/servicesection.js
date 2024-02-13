import React from "react";
import image6 from "../assets/images/4.png";
import "./servicesection.css";
const ServiceSection = () => {
  return (
    <div class="offer-item section">
      <div class="offer-image">
        <img src={image6} alt="Zdjęcie 6" />
      </div>
      <div class="offer-text">
        <h2> ... do codziennej pielegnacji</h2>
        <p></p>
        <p>
          Zapewniamy kompleksową opiekę nad roślinami już zainstalowanymi w
          Twojej przestrzeni . Nasza opieka nad roślinami to więcej niż tylko
          podstawowe czynności pielęgnacyjne. Nasz zespół specjalistów dba o
          każdy aspekt zdrowia i wyglądu roślin, zapewniając im optymalne
          warunki wzrostu i rozwoju. Ponadto, nasza troskliwa opieka obejmuje
          monitorowanie stanu roślin, aby zapobiegać wszelkim problemom
          zdrowotnym i reagować na nie natychmiast.
        </p>

        <p>
          Dzięki naszej opiece, zapobiegamy szkodnikom, przeprowadzamy okresowe
          przesadzanie i dosadzanie, aby Twoje rośliny zawsze były w jak
          najlepszej kondycji. Nasze podejście opiera się na zrozumieniu
          indywidualnych potrzeb każdej rośliny i dostosowaniu naszych działań
          do ich konkretnych wymagań. Skorzystaj z naszych usług, aby cieszyć
          się pięknymi i zdrowymi roślinami w swoim biurze, bez konieczności
          martwienia się o ich codzienną opiekę.
        </p>

        <p></p>
      </div>
    </div>
  );
};

export default ServiceSection;
