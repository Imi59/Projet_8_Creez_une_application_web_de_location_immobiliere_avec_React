import React, { useState } from "react";
import arrowUp from "../../assets/images/arrow-up.png";
import arrowDown from "../../assets/images/arrow-down.png";

const Collapse = ({ title, defaultOpen, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
//fonction de basculement
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-section ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img src={isOpen ? arrowUp : arrowDown} alt={`Toggle ${title}`} />
      </div>

      {isOpen && children && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
