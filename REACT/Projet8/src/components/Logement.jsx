import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json"; // Importez les données des logements
import Carousel from "./carousel.jsx"; // Importez le composant Carousel
import filledStar from "../assets/images/filled-star.png"; // Importez l'image d'étoile remplie
import emptyStar from "../assets/images/empty-star.png"; // Importez l'image d'étoile vide
import Collapse from "./Collapse"; // Importez le nouveau composant Collapse

// Fonction pour trouver le logement en fonction de son ID
const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams(); // Obtenez l'ID du logement à partir des paramètres de l'URL
  const logement = findLogementID(id); // Recherchez le logement correspondant à l'ID

  // Séparer le nom complet de l'hôte en prénom et nom de famille
  const hostNameParts = logement.host.name.split(" ");
  const hostFirstName = hostNameParts[0];
  const hostLastName = hostNameParts.slice(1).join(" ");

  // Fonction pour générer les étoiles de notation en fonction du rating
  const renderRatingStars = (rating) => {
    const filledStarsCount = Math.round(rating);
    const emptyStarsCount = 5 - filledStarsCount;

    const stars = [];

    // Ajout des étoiles pleines
    for (let i = 0; i < filledStarsCount; i++) {
      stars.push(<img key={i} src={filledStar} alt="Filled star" />);
    }

    // Ajout des étoiles vides
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <img key={filledStarsCount + i} src={emptyStar} alt="Empty star" />
      );
    }

    return stars;
  };

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

  return (
    <div>
      {/* Carousel pour afficher les images du logement */}
      <Carousel images={logement.pictures} />
      <div className="part1">
        <div className="title">
          {/* Titre et emplacement du logement */}
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          {/* Tags associés au logement */}
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="host-rating">
          <div className="host">
            <p>
              {hostFirstName} <p>{hostLastName}</p>
            </p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          {/* Affichage de la notation de l'hôte */}
          <p className="stars">{renderRatingStars(logement.rating)}</p>
        </div>
      </div>
      <div className="collapse-part">
        {/* Utilisation du composant Collapse pour afficher la description */}
        <Collapse
          title="Description"
          defaultOpen={true}
          isOpen={descriptionVisible}
          onToggle={toggleDescriptionVisibility}
        >
          <p>{logement.description}</p>
        </Collapse>
        {/* Utilisation du composant Collapse pour afficher les équipements */}
        <Collapse
          title="Equipments"
          defaultOpen={true}
          isOpen={equipmentsVisible}
          onToggle={toggleEquipmentsVisibility}
        >
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Logement;
