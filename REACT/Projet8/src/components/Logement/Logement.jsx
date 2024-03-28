import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json"; // Importer les données des logements fournies par OC
import Carousel from "./carousel.jsx"; // Importer le composant Carousel
import Collapse from "./Collapse"; // Importer le composant Collapse
import Host_Rating from "./Host_Rating.jsx";

// Fonction pour trouver le logement en fonction de son ID
const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams(); // Obtenez l'ID du logement à partir des paramètres de l'URL
  const logement = findLogementID(id); // Recherchez le logement correspondant à l'ID

  // Déclaration de l'état local pour suivre si la description est visible ou cachée
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  // Déclaration de l'état local pour suivre si les équipements sont visibles ou cachés
  const [equipmentsVisible, setEquipmentsVisible] = useState(false);

  // Fonction pour basculer la visibilité de la description
  const toggleDescriptionVisibility = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  // Fonction pour basculer la visibilité des équipements
  const toggleEquipmentsVisibility = () => {
    setEquipmentsVisible(!equipmentsVisible);
  };

  return (
    <div className="all">
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

        <Host_Rating></Host_Rating>
      </div>

      <div className="collapse-part">
        <Collapse
          title="Description"
          defaultOpen={false}
          isOpen={descriptionVisible}
          onToggle={toggleDescriptionVisibility}
        >
          <p>{logement.description}</p>
        </Collapse>
        <Collapse
          title="Equipments"
          defaultOpen={false}
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
