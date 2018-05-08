import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
// import Home from "./components/pages/Home";

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
  </div>
    );
  }
}

export default App;
