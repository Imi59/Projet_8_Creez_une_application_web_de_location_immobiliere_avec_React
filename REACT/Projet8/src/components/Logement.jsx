import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "./carousel.jsx"; // Importez le composant Carousel

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementID(id);

  return (
    <div>
      <Carousel images={logement.pictures} />{" "}
      {/* Utilisez le composant Carousel avec les images du logement */}
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <p>Host: {logement.host.name}</p>
      <img src={logement.host.picture} alt={logement.host.name} />
      <p>Rating: {logement.rating}</p>
      <p>Location: {logement.location}</p>
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
