import "./stylesheets/App.css";
import Header from "./components/Header";
import AboutArticle from "./components/About-article";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <!-- header component with links to the 4 main pages on my website --> */}
      <Header />
      {/* <!-- main component which contains information about me. It also links to about me and contact me --> */}
      <AboutArticle />
      {/* <!-- skills component which contains my school/work history and skills--> */}
      <Skills />
      {/* <!-- projects component which shows off projects I have created-->*/}
      <Projects />
      {/* <!-- contact component for people to get in touch with me-->*/}
      <Contact />
      {/* <!-- footer container which has three icons that link to my social accounts --> */}
      <Footer />
    </div>
  );
}

export default App;
