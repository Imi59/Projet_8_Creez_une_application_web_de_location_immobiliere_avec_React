import React, { useState } from "react";
import arrowUp from "../../assets/images/arrow-up.png";
import arrowDown from "../../assets/images/arrow-down.png";

const Collapse = ({ title, isOpen, onToggle, children }) => {
  const toggleCollapse = () => {
    onToggle(!isOpen);
  };

  return (
    <div className={`collapse-section ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>

        <img src={isOpen ? arrowUp : arrowDown} alt={`Toggle ${title}`} />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
