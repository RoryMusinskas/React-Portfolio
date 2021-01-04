import React from "react";

const Navbar = () => {
  const toggleHamburger = () => {
    // target the nav ul element
    const navUL = document.querySelector("#nav-ul");
    // toggle the show class on click
    navUL.classList.toggle("show");
  };

  return (
    <nav className="main-nav">
      <button className="hamburger" id="hamburger" onClick={toggleHamburger}>
        <i className="fas fa-bars fa-3x"></i>
      </button>
      <ul className="nav-ul" id="nav-ul">
        <li>
          <a href={"#home"}>Home</a>
        </li>
        <li>
          <a href={"#about"}>About</a>
        </li>
        <li>
          <a href={"#projects"}>Projects</a>
        </li>
        <li>
          <a href={"#contact"}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

