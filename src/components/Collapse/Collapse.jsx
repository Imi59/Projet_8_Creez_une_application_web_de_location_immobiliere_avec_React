import React, { useState } from "react";
import arrowUp from "../../assets/images/arrow-up.png"; // Importez l'image de la flèche vers le haut
import arrowDown from "../../assets/images/arrow-down.png"; // Importez l'image de la flèche vers le bas

const Collapse = ({ title, isOpen, onToggle, children }) => {
  // Fonction pour basculer l'état du collapse
  const toggleCollapse = () => {
    onToggle(!isOpen);
  };

  return (
    // Conteneur principal du collapse avec une classe conditionnelle "open" si le collapse est ouvert
    <div className={`collapse-section ${isOpen ? "open" : ""}`}>
      {/* En-tête du collapse, cliquable pour basculer l'état */}
      <div className="collapse-header" onClick={toggleCollapse}>
        {/* Titre du collapse */}
        <h2>{title}</h2>
        {/* Affichage de la flèche vers le haut ou vers le bas en fonction de l'état */}
        <img src={isOpen ? arrowUp : arrowDown} alt={`Toggle ${title}`} />
      </div>
      {/* Contenu du collapse, affiché uniquement s'il est ouvert */}
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
