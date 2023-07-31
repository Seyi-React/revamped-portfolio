import React from "react";
import Best from "../../assets/best.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about-me-div" id="about">
      <div className="about">
        <div>
          <img src={Best} alt="" className="best" />
        </div>
        <div >
          <h1 className="h1">About Me</h1>
          <p className="dev">
            As a dedicated and passionate software developer, I am committed to
            crafting innovative <br /> solutions that drive technological advancements
            and solve real-world challenges. <br />With a strong foundation in
            frontend development and extensive hands-on experience, I thrive in
            fast-paced <br /> environments and excel at collaborating with
            cross-functional teams to deliver high-quality products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
