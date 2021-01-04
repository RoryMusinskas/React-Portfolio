import React from "react";
import "../stylesheets/skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-wrapper">
        <div className="grid-container">
          <div className="title">
            <h1 className="section-header">Work</h1>
          </div>
          <div className="first-item">
            <h1>Parks Victoria</h1>
            <h5>Field Service Officer: 2016 - Current</h5>
            <ul className="skills-list">
              <li>
                Respond to all classifications of bushfires on public land in
                Victoria and on occasion around Australia as my trained roles as
                Fireline crewleader, Unimog Operator and Tree feller.
              </li>
              <li>
                Operate Plant and Equipment in accordance with training and
                capability to ensure maintenance of strategic fire management
                zones
              </li>
              <li>
                Ensure individual and divisional goals are achieved and services
                are provided in an effective and timely manner.
              </li>
              <li>
                Seek to understand stakeholder and customer needs to ensure fit
                for purpose solutions can be implemented.
              </li>
            </ul>
          </div>
          <div className="second-item">
            <h1>Parks Victoria</h1>
            <h5>Project Fire Fighter: 2012-2016</h5>
            <ul className="skills-list">
              <li>
                Participation in bushfire suppression and planned burning
                operations via deployments for lengthy periods of time in remote
                bush locations.
              </li>
              <li>
                Participation as a team member to ensure program objectives are
                met and that the tasks are carried out safely.
              </li>
              <li>
                Maintaining a high level of OH&S standards within the workplace.
              </li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="grid-container">
          <div className="title">
            <h1 className="section-header">Education</h1>
          </div>
          <div className="first-item">
            <h1>Coder Academy</h1>
            <h5>Full Stack Fast Track Bootcamp: 2020 - 2021</h5>
            <p>HTML, CSS, Ruby, Ruby on Rails, MERN stack</p>
          </div>
          <div className="second-item">
            <h1>South Gippsland Secondary College</h1>
            <h5>VCE: 2007 - 2012</h5>
            <p>
              Specialist Math, Math Methods, Further Math, Physics, English,
              Accounting
            </p>
          </div>
        </div>
        <hr />

        <div className="grid-container-single">
          <div className="title">
            <h1 className="section-header">Skills</h1>
          </div>
          <div className="first-item">
            <ul id="skills-icons">
              <li>
                <i className="fab fa-js fa-4x"></i>
                <p>Javascript</p>
              </li>
              <li>
                <i className="fab fa-react fa-4x"></i>
                <p>React</p>
              </li>
              <li>
                <i className="fas fa-gem fa-4x"></i>
                <p>Ruby + Rails</p>
              </li>
              <li>
                <i className="fab fa-html5 fa-4x"></i>
                <p>HTML</p>
              </li>
              <li>
                <i className="fab fa-css3-alt fa-4x"></i>
                <p>CSS</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
