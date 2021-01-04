import React from "react";
import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div id="to-top">
        <a href="#header" title="Back to top">
          <i id="up-arrow" className="fas fa-chevron-circle-up fa-4x"></i>
        </a>
      </div>
      <div className="icon-wrapper">
        <a
          href="https://github.com/RoryMusinskas"
          title="Rory Musinskas Github"
        >
          <i className="footer-fab fab fa-github fa-3x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rory-musinskas-940828ab/"
          title="Rory Musinskas LinkedIn"
        >
          <i className="footer-fab fab fa-linkedin fa-3x"></i>
        </a>
        <a href="https://twitter.com/RMusinskas" title="Rory Musinskas Twitter">
          <i className="footer-fab fab fa-twitter fa-3x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
