import React from "react";
import "./stylesheets/App.css";
import Header from "./components/Header";
import AboutArticle from "./components/About-article";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import data from "./information.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <div className="App">
        {/* <!-- header component with links to the 4 main pages on my website --> */}
        <Header data={this.state.data.header} />
        {/* <!-- main component which contains information about me. It also links to about me and contact me --> */}
        <AboutArticle data={this.state.data.about} />
        {/* <!-- skills component which contains my school/work history and skills--> */}
        <Skills
          employment={this.state.data.employment}
          education={this.state.data.education}
          skills={this.state.data.skills}
        />
        {/* <!-- projects component which shows off projects I have created-->*/}
        <Projects projects={this.state.data.projects} />
        {/* <!-- contact component for people to get in touch with me-->*/}
        <Contact />
        {/* <!-- footer container which has three icons that link to my social accounts --> */}
        <Footer />
      </div>
    );
  }
}

export default App;
