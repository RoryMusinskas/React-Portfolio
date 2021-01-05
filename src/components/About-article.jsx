import React, { Component } from "react";
import "../stylesheets/about.css";
import image from "../Portfolio.jpg";

class AboutArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blurb: this.props.data.blurb,
      hobbies: this.props.data.hobbies,
      resume: this.props.data.resume,
    };
  }
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="row">
            <img className="profile-pic" src={image} alt="Profile Pic" />
          </div>
          <div className="row">
            <h2>About Me</h2>
            <p>{this.state.blurb}</p>
            <div className="hobbies">
              <h2>Hobbies & Interests</h2>
              <ul id="hobby-list">
                {this.state.hobbies.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div className="row download">
              <p>
                <a
                  href={this.state.resume}
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutArticle;
