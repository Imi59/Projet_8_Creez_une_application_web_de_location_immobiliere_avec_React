import React, { useState } from "react"; // Importer useState si nécessaire
import Collapse from "../Collapse";
import Banner2 from "../Banner2";
import AboutDatas from "../../data/aboutArray.json";

function About() {
  // Définir l'état local pour suivre l'état de chaque Collapse
  const [collapseStates, setCollapseStates] = useState(
    Array(AboutDatas.length).fill(false) // Initialiser tous les Collapse ouverts
  );

  // Fonction pour basculer l'état d'un Collapse spécifique à un index donné
  const handleToggle = (index) => {
    const newCollapseStates = [...collapseStates];
    newCollapseStates[index] = !newCollapseStates[index];
    setCollapseStates(newCollapseStates);
  };

  return (
    <div>
      <Banner2 />
      <div className="about">
        <div className="collapseAbout">
          {AboutDatas.map((item, index) => (
            <Collapse
              className="collapse"
              key={index}
              title={item.aboutTitle}
              defaultOpen={true}
              isOpen={collapseStates[index]} // Utiliser l'état local pour isOpen
              onToggle={() => handleToggle(index)} // Passer la fonction de bascule
            >
              <p>{item.aboutText}</p>
            </Collapse>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
