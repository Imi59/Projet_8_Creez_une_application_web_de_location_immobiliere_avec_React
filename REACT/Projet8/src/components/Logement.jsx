import React, { useState } from "react"; // Importez useState depuis React
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "./carousel.jsx"; // Importez le composant Carousel
import emptyStar from "../assets/images/empty-star.png"; // Importez l'image de l'étoile vide
import filledStar from "../assets/images/filled-star.png"; // Importez l'image de l'étoile remplie
import arrowDown from "../assets/images/arrow-down.png"; // Importez l'image de la flèche vers le bas
import arrowUp from "../assets/images/arrow-up.png"; // Importez l'image de la flèche vers le haut

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementID(id);

  // Déclaration de l'état local pour suivre si la description est visible ou cachée
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  // Déclaration de l'état local pour suivre si les équipements sont visibles ou cachés
  const [equipmentsVisible, setEquipmentsVisible] = useState(true);

  // Fonction pour basculer la visibilité de la description
  const toggleDescriptionVisibility = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  // Fonction pour basculer la visibilité des équipements
  const toggleEquipmentsVisibility = () => {
    setEquipmentsVisible(!equipmentsVisible);
  };

  // Séparer le nom complet de l'hôte en nom et prénom
  const hostNameParts = logement.host.name.split(" ");
  const hostFirstName = hostNameParts[0];
  const hostLastName = hostNameParts.slice(1).join(" "); // Le reste après le premier mot est considéré comme le nom de famille

  // Fonction pour générer les étoiles en fonction du rating
  const renderRatingStars = (rating) => {
    const filledStarsCount = Math.round(rating); // Nombre d'étoiles pleines
    const emptyStarsCount = 5 - filledStarsCount; // Nombre d'étoiles vides

    const stars = [];

    // Ajouter les étoiles pleines
    for (let i = 0; i < filledStarsCount; i++) {
      stars.push(<img key={i} src={filledStar} alt="Filled star" />);
    }
    // Ajouter les étoiles vides
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <img key={filledStarsCount + i} src={emptyStar} alt="Empty star" />
      );
    }

    return stars;
  };

  return (
    <div>
      <Carousel images={logement.pictures} />
      <div className="part1">
        <div className="title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="host-rating">
          <div className="host">
            <p>
              {hostFirstName} <br /> {hostLastName}
            </p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <p className="stars">{renderRatingStars(logement.rating)}</p>
        </div>
      </div>
      <div className="collapse-section">
        <div className="collapse1">
          <div className="description">
            <h2>Description </h2>
            {/* Bouton pour basculer la visibilité de la description */}
            <div className="btn-collapse" onClick={toggleDescriptionVisibility}>
              {/* Affichage de la flèche vers le haut ou vers le bas en fonction de l'état de la visibilité */}
              <img
                src={descriptionVisible ? arrowUp : arrowDown}
                alt="Toggle description"
              />
            </div>
          </div>

          {/* Affichage de la description uniquement si elle est visible */}
          {descriptionVisible && <p>{logement.description}</p>}
        </div>
        <div className="collapse2">
          {/* Section pour les équipements */}
          <div className="equipements">
            <h2>Equipments</h2>
            {/* Bouton pour basculer la visibilité des équipements */}
            <div className="btn-collapse" onClick={toggleEquipmentsVisibility}>
              {/* Affichage de la flèche vers le haut ou vers le bas en fonction de l'état de la visibilité */}
              <img
                src={equipmentsVisible ? arrowUp : arrowDown}
                alt="Toggle equipments"
              />
            </div>
          </div>
          {/* Affichage des équipements uniquement s'ils sont visibles */}
          {equipmentsVisible && (
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logement;
