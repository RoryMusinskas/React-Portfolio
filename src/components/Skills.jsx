import React from "react";
import "../skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-wrapper">
        <div className="grid-container">
          <div className="title">
            <h1>Work</h1>
          </div>
          <div className="first-item">
            <h1>Parks Victoria</h1>
            <h5>Field service officer - 2012 - Current</h5>
            <p>Fire fighter blah blah blsah</p>
          </div>
          <div className="second-item">
            <h1>Asclear</h1>
            <h5>Asbestos Removalist - 2014 - 2014</h5>
            <p>Removing asbestos</p>
          </div>
        </div>
        <hr />

        <div className="grid-container">
          <div className="title">
            <h1>Education</h1>
          </div>
          <div className="first-item">
            <h1>Coder Academy</h1>
            <h5>Full Stack Fast Track Bootcamp - 2020 - 2021</h5>
            <p>MERN stack</p>
          </div>
          <div className="second-item">
            <h1>South Gippsland Secondary College</h1>
            <h5>VCE - 2007 - 2012</h5>
            <p>
              Specialist Math, Math Methods, Further Math, Physics, English,
              Accounting
            </p>
          </div>
        </div>
        <hr />

        <div className="grid-container-single">
          <div className="title">
            <h1>Skills</h1>
          </div>
          <div className="first-item">
            <ul id="skills-list">
              <li>
                <i className="fab fa-js fa-4x"></i>
              </li>
              <li>
                <i className="fab fa-react fa-4x"></i>
              </li>
              <li>
                <i className="fas fa-gem fa-4x"></i>
              </li>
              <li>
                <i className="fab fa-html5 fa-4x"></i>
              </li>
              <li>
                <i className="fab fa-css3-alt fa-4x"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
