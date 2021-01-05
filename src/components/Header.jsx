import React from "react";
import Navbar from "./Nav-bar";
import ParticlesBg from "particles-bg";

import "../stylesheets/header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    return (
      <>
        <ParticlesBg type="fountain" num={2} bg={true} />
        <header id="header">
          <Navbar />
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{this.state.data.name}</h1>
              <hr />
              <a
                href={this.state.data.github}
                className="button btn github-btn"
                id="github"
              >
                <i className="fa fa-github"></i>Github
              </a>
            </div>
            <div id="to-about">
              <a href="#about">
                <i className="fas fa-chevron-circle-down fa-4x"></i>
              </a>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
