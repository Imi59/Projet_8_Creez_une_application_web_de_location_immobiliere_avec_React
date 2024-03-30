import React, { useState } from "react";
import arrowLeft from "../../assets/images/arrow-left.png";
import arrowRight from "../../assets/images/arrow-right.png";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const isSingleSlide = images.length === 1;

  return (
    <div className="carrousel-container">
      {!isSingleSlide && (
        <div className="left" onClick={prevSlide}>
          <img src={arrowLeft} alt="Previous" />
        </div>
      )}
      <img
        className="slide"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      {!isSingleSlide && (
        <div className="right" onClick={nextSlide}>
          <img src={arrowRight} alt="Next" />
        </div>
      )}

      {!isSingleSlide && (
        <div className="pagination">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
