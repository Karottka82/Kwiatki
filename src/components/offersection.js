import React from "react";
import image4 from "../assets/images/5.png";

import "./offersection.css";
const OfferSection = () => {
  return (
    <section id="pricing" class="offer-section section">
      <div class="offer-item">
        <div class="offer-image">
          <img src={image4} alt="Zdjęcie 4" />
        </div>
        <div class="offer-text">
          <h2>Oferta</h2>
          <p>
            Rośliny w przestrzeniach biurowych mają niezwykle pozytywny wpływ na
            atmosferę pracy. Poprawiają jakość powietrza, redukują stres i
            zwiększają ogólną harmonię w miejscu pracy.
          </p>

          <p>
            Dlatego też nasza firma oferuje kompleksowe usługi związane z
            roślinami, zapewniając pełną opiekę od instalacji po regularną
            pielęgnację. Dzięki naszym usługom, możesz cieszyć się pięknem
            roślin w swoim biurze, bez konieczności martwienia się o ich
            codzienną troskę.
          </p>
          <p>
            Nasz zespół zadba o wszystko, co niezbędne, aby Twoje rośliny zawsze
            prezentowały się zdrowo, świeżo i atrakcyjnie. Skorzystaj z naszych
            usług, aby stworzyć przyjazne i inspirujące środowisko pracy, które
            dodatkowo ozdobi zielona roślinność.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
