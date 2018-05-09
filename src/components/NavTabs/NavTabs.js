import React from "react";
import './NavTabs.css';

var scrollAbout = () => (
  document.getElementById("aboutSection").scrollIntoView()
)

var scrollExperience = () => (
  document.getElementById("experienceSection").scrollIntoView()
)

var scrollEducation = () => (
  document.getElementById("educationSection").scrollIntoView()
)

var scrollSkills = () => (
  document.getElementById("skillsSection").scrollIntoView()
)

var scrollPortfolio = () => (
  document.getElementById("portfolioSection").scrollIntoView()
)


const NavTabs = () => (
  <div className="ui menu borderless inverted" id="navBar">
  <span className="item">
  Alex Rhee Portfolio
  </span>
    <a className="item" onClick={scrollAbout}>
    About
    </a>
    <a className="item" onClick={scrollExperience}>
    Experience
    </a>
    <a className="item" onClick={scrollEducation}>
    Education
    </a>
    <a className="item" onClick={scrollSkills}>
    Skills
    </a>
    <a className="item" onClick={scrollPortfolio}>
    Portfolio
    </a>
    {/* <button className="item ui primary basic button">
    Download CV
    </button> */}
  </div>
    
    
);

export default NavTabs;
