import React from "react";
import Navbar from './Nav-bar'
import ParticlesBg from 'particles-bg';

import '../header.css'

const Header = () => {
  return (
    <>
      <ParticlesBg type="fountain" bg={true} />
      <header className="main-header">
        <Navbar />
        <h1 id="header-text">Rory</h1>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Rory Musinskas</h1>
            <h3>I've spent the last 8 years as a Bushfire Fighter around Australia. I'm now making the transition to be a full stack developer with Coder Academy in Melbourne. I will be learning HTML, CSS, Ruby, Rails and the MERN stack.</h3>
            <hr />
            <ul className="social">
              <a href={'https://github.com/RoryMusinskas'} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
