import React from "react";
import './NavTabs.css';
import { Menu } from 'semantic-ui-react'

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
  <Menu ui menu borderless inverted id="navBar">
    <a className="item" onClick={scrollAbout}>
    About
    </a>
    <a className="item" onClick={scrollPortfolio}>
    Portfolio
    </a>
    <a className="item" onClick={scrollSkills}>
    Skills
    </a>
    <a className="item" onClick={scrollEducation}>
    Education
    </a>
    <a className="item" onClick={scrollExperience}>
    Experience
    </a>
    {/* <button className="item ui primary basic button">
    Download CV
    </button> */}
  </Menu>
    
    
);

export default NavTabs;
