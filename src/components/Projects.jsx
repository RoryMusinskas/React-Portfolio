import React from "react";
import "../stylesheets/projects.css";
// Import images for projects
import flogItOff from "../home-page.png";
import symbolHolic from "../terminal-app.png";
import firstPortfolio from "../first-portfolio.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-wrapper">
        <h1 id="projects-heading">Completed Projects</h1>
        <div className="image-wrapper">
          <a
            href="https://github.com/RoryMusinskas/flog-it-off"
            target="_blank"
          >
            <img className="project-image" src={flogItOff} alt="Flog-it-off" />
          </a>
          <div className="overlay">
            <h1>Flog-it-off</h1>
            <ul>
              <li>A war on tradies waste</li>
              <li>Written with Ruby on Rails</li>
            </ul>
          </div>
        </div>
        <div className="image-wrapper">
          <a
            href="https://github.com/RoryMusinskas/symbol-holic"
            target="_blank"
          >
            <img
              className="project-image"
              src={symbolHolic}
              alt="Flog-it-off"
            />
          </a>
          <div className="overlay">
            <h1>Symbolholic</h1>
            <ul>
              <li>Improve symbol typing speed</li>
              <li>A Ruby terminal app</li>
            </ul>
          </div>
        </div>
        <div className="image-wrapper">
          <a
            href="https://github.com/RoryMusinskas/portfolio-website"
            target="_blank"
          >
            <img
              className="project-image"
              src={firstPortfolio}
              alt="Flog-it-off"
            />
          </a>
          <div className="overlay">
            <h1>First Portfolio</h1>
            <ul>
              <li>First HTML/CSS portfolio</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
