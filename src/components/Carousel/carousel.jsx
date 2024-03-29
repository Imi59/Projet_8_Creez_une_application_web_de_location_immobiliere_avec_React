import React, { useState } from "react";
import arrowLeft from "../../assets/images/arrow-left.png"; // Importer l'image de la flèche gauche
import arrowRight from "../../assets/images/arrow-right.png"; // Importer l'image de la flèche droite

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

  // Vérifier s'il n'y a qu'un seul slide
  const isSingleSlide = images.length === 1;

  return (
    <div className="carrousel-container">
      {/* Conditionner l'affichage de la flèche gauche */}
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
      {/* Conditionner l'affichage de la flèche droite */}
      {!isSingleSlide && (
        <div className="right" onClick={nextSlide}>
          <img src={arrowRight} alt="Next" />
        </div>
      )}
      {/* Conditionner l'affichage de la pagination */}
      {!isSingleSlide && (
        <div className="pagination">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
