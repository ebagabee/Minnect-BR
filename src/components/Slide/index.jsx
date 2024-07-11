import React, { useState } from 'react';
import './slide.css';
import Slide1 from '../../assets/FirstMobile.png';
import Slide2 from '../../assets/SecondMobile.png';
import Slide3 from '../../assets/ThirthMobile.png';

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    Slide1,
    Slide2,
    Slide3,
    // adicione mais URLs de imagens conforme necessário
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slide-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>
    </div>
  );
};

export default Slide;