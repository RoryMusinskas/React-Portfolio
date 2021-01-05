import React, { Component } from "react";
import "../stylesheets/skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employment: this.props.employment,
      education: this.props.education,
      skills: this.props.skills,
    };
  }
  render() {
    return (
      <section id="skills">
        <div className="skills-wrapper">
          <div className="grid-container">
            <div className="title">
              <h1 className="section-header">Work</h1>
            </div>

            {this.state.employment.map((job) => {
              return (
                <div className={job.class}>
                  <h1>{job.employer}</h1>
                  <h5>
                    {job.title}: {job.years}
                  </h5>
                  <ul className="skills-list">
                    {job.description.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <hr />

          <div className="grid-container">
            <div className="title">
              <h1 className="section-header">Education</h1>
            </div>

            {this.state.education.map((education) => {
              return (
                <div className={education.class}>
                  <h1>{education.institute}</h1>
                  <h5>
                    {education.course}: {education.years}
                  </h5>
                  <p>{education.about}</p>
                </div>
              );
            })}
          </div>
          <hr />

          <div className="grid-container-single">
            <div className="title">
              <h1 className="section-header">Skills</h1>
            </div>

            <div className="first-item">
              <ul id="skills-icons">
                {this.state.skills.map((skill, index) => {
                  return (
                    <li key={index}>
                      <i className={skill.class}></i>
                      <p>{skill.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
