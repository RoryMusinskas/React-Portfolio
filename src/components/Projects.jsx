import React from 'react'
import '../projects.css'
// Import images for projects
import flogItOff from '../home-page.png'
import symbolHolic from '../terminal-app.png'
import firstPortfolio from '../first-portfolio.png'

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-wrapper">
        <h1 id='projects-heading'>Completed Projects</h1>
        <div>
          <a href="https://github.com/RoryMusinskas/flog-it-off"><img className='project-image' src={flogItOff} alt="Flog-it-off"/></a>
        </div>
        <div>
          <a href="https://github.com/RoryMusinskas/symbol-holic"><img className='project-image' src={symbolHolic} alt="Flog-it-off"/></a>
        </div>
        <div>
          <a href="https://github.com/RoryMusinskas/portfolio-website"><img className='project-image' src={firstPortfolio} alt="Flog-it-off"/></a>
        </div>
      </div>
    </section>
  );
}

export default Projects