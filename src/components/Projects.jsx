import React, { Component } from "react";
import "../stylesheets/projects.css";
// Import images for projects
import flogItOff from "../home-page.png";
import symbolHolic from "../terminal-app.png";
import firstPortfolio from "../first-portfolio.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
      images: [flogItOff, symbolHolic, firstPortfolio],
    };
  }

  render() {
    return (
      <section id="projects">
        <div className="projects-wrapper">
          <h1 id="projects-heading">Completed Projects</h1>

          {this.state.projects.map((project, index) => {
            return (
              <div className="image-wrapper">
                <a href={project.gitUrl} target="_blank" rel="noreferrer">
                  <img
                    className="project-image"
                    src={this.state.images[index]}
                    alt={project.name}
                  />
                </a>
                <div className="overlay">
                  <h1>{project.name}</h1>
                  <ul>
                    <li>{project.about}</li>
                    <li>{project.tech}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Projects;
