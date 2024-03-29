import React, { useState } from "react"; 
import Collapse from "../components/Collapse/Collapse";
import Banner2 from "../components/Banner2/Banner2";
import AboutDatas from "../data/aboutArray.json";

function About() {

  const [collapseStates, setCollapseStates] = useState(
    Array(AboutDatas.length).fill(false)
  );

  const handleToggle = (index) => {
    const newCollapseStates = [...collapseStates];
    newCollapseStates[index] = !newCollapseStates[index];
    setCollapseStates(newCollapseStates);
  };

  return (
    <div className="about">
      <Banner2 />

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
  );
}

export default About;
