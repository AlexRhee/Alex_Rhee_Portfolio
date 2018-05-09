import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <div>
            <NavTabs />
            <Hero />
          </div>
        </Wrapper>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
