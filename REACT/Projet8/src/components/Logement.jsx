import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "./carousel.jsx"; // Importez le composant Carousel
import emptyStar from "../assets/images/empty-star.png"; // Importez l'image de l'étoile vide
import filledStar from "../assets/images/filled-star.png"; // Importez l'image de l'étoile remplie

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementID(id);

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
      <div>
        <div className="title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="host">
          <p>
            {hostFirstName} <br /> {hostLastName}
          </p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <p>{logement.description}</p>
      <p>{renderRatingStars(logement.rating)}</p>
      <h2>Equipments:</h2>
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h2>Tags:</h2>
      <ul>
        {logement.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logement;
