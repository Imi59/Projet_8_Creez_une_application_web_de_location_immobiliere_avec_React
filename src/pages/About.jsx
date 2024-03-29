import React from "react";
import Collapse from "../components/Collapse/Collapse";
import Banner2 from "../components/Banner2/Banner2";
import AboutDatas from "../data/aboutArray.json";

function About() {
  return (
    <div className="about">
      <Banner2 />
      <div className="collapseAbout">
        {AboutDatas.map((item, index) => (
          <Collapse
            className="collapse"
            key={index}
            title={item.aboutTitle}
            defaultOpen={false}
          >
            <p>{item.aboutText}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default About;
