import React, { useState, useEffect } from "react";
import image1 from "./zdjecia/1a.jpg";
import image2 from "./zdjecia/office1.png";
import "./mainphoto.css";

const MainPhotoSection = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondImage(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="main-image">
      <div className="image-container">
        <img className="image first" src={image1} alt="Pierwsze zdjęcie" />
        {showSecondImage && (
          <img className="image second" src={image2} alt="Drugie zdjęcie" />
        )}
      </div>
    </section>
  );
};

export default MainPhotoSection;
