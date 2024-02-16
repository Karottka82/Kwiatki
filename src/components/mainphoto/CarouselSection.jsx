import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/images/1a.jpg";
import image2 from "../../assets/images/office1.png";

export const CarouselSection = () => {
  return (
    <section id="about1">
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" alt="First slide" src={image2} />
          <Carousel.Caption>
            <h5>Green Royal</h5>
            <p>Stwórz harmonię w biurze dzięki naszym zielonym rozwiązaniom!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Second slide" />
          <Carousel.Caption>
            <h5>Green Royal</h5>
            <p>Ożyw swoje biuro zielenią z naszą pomocą!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Third slide" />
          <Carousel.Caption>
            <h5>Green Royal</h5>
            <p>Odkryj potencjał zieleni w Twoim miejscu pracy już dziś!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
