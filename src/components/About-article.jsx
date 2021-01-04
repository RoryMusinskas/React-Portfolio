import React from "react";
import "../stylesheets/about.css";
import image from "../Portfolio.jpg";

const AboutArticle = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="row">
          <img className="profile-pic" src={image} alt="Profile Pic" />
        </div>
        <div className="row">
          <h2>About Me</h2>
          <p>
            I've spent the last 8 years as a Bushfire Fighter around Australia.
            I'm now making the transition to be a full stack developer with
            Coder Academy in Melbourne. I will be learning HTML, CSS, Ruby,
            Rails and the MERN stack.
          </p>
          <div className="hobbies">
            <h2>Hobbies & Interests</h2>
            <ul id="hobby-list">
              <li>Fire-fighting</li>
              <li>Kite-boarding</li>
              <li>Camping</li>
              <li>Hiking</li>
            </ul>
          </div>
          <div className="row download">
            <p>
              <a
                href={
                  "https://drive.google.com/file/d/1asWCuamdyeveuia0bAjxUJLnHsdCF2KR/view?usp=sharing"
                }
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
};

export default AboutArticle;
