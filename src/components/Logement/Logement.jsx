import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../Carousel/carousel.jsx";
import Collapse from "../Collapse/Collapse.jsx";
import Host_Rating from "../HostRAting/Host_Rating.jsx";

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementID(id);

  return (
    <div className="all">
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
        <Host_Rating />
      </div>
      <div className="collapse-part">
        <Collapse title="Description" defaultOpen={false}>
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Equipments" defaultOpen={false}>
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
