import React from "react";
import image1 from "./zdjecia/office1.png";
import "./mainphoto.css";

const MainPhotoSection = () => {
  return (
    <section className="main-image">
      <div>
        <img src={image1} alt="Zdjęcie 1" />
      </div>
    </section>
  );
};

export default MainPhotoSection;
