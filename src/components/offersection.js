import React from "react";
import image4 from "./zdjecia/5.png";
import image5 from "./zdjecia/10.jpg";
import image6 from "./zdjecia/4.png";
import "./offersection.css";
const OfferSection = () => {
  return (
    <section id="oferta" class="offer-section">
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
      <div class="offer-item2">
        <div class="offer-text2">
          <h2>Od pomysłu...</h2>
          <p>
            Oferujemy kompleksowe rozwiązania w zakresie instalacji kwiatowych
            dla biur, zapewniając harmonię i estetykę w przestrzeniach pracy.
            Nasz zespół nie tylko posiada wysoką wiedzę w zakresie doboru roślin
            do różnych pomieszczeń biurowych, ale również wykazuje się
            kreatywnością i umiejętnością tworzenia unikalnych aranżacji. Dzięki
            naszemu doświadczeniu i znajomości roślin, jesteśmy w stanie
            stworzyć projekty, które nie tylko estetycznie uzupełnią Twoją
            przestrzeń biurową, ale także będą odzwierciedlać charakter Twojej
            firmy i tworzyć niepowtarzalną atmosferę.
          </p>

          <p>
            Nasze podejście opiera się na indywidualnym podejściu do każdego
            klienta oraz na szukaniu inspiracji w naturze i nowoczesnych
            trendach projektowania. Dlatego nasze projekty są nie tylko
            funkcjonalne, ale również inspirujące i wyjątkowe.
          </p>

          <p>
            Skontaktuj się z nami już dziś, abyśmy mogli wspólnie opracować
            kreatywne i unikatowe aranżacje roślin, które wzbogacą Twoją
            przestrzeń biurową i zainspirują wszystkich, którzy będą mieli
            przyjemność w niej pracować.
          </p>
        </div>
        <div class="offer-image2">
          <img src={image5} alt="Zdjęcie 5" />
        </div>
      </div>
      <div class="offer-item">
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
            Dzięki naszej opiece, zapobiegamy szkodnikom, przeprowadzamy
            okresowe przesadzanie i dosadzanie, aby Twoje rośliny zawsze były w
            jak najlepszej kondycji. Nasze podejście opiera się na zrozumieniu
            indywidualnych potrzeb każdej rośliny i dostosowaniu naszych działań
            do ich konkretnych wymagań. Skorzystaj z naszych usług, aby cieszyć
            się pięknymi i zdrowymi roślinami w swoim biurze, bez konieczności
            martwienia się o ich codzienną opiekę.
          </p>

          <p></p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
