import React from "react";
import './Hero.css';
import { Icon } from 'semantic-ui-react'

var linkedin = () => {
  return (
  window.open("https://www.linkedin.com/in/arhee/")
)}

var github = () => {
  return (
  window.open("https://github.com/AlexRhee")
)}

const Hero = () => (
  <div className="ui container" id="heroContainer">
  <h1 id="myName" className="hero-item"> Alex Rhee </h1>
  <h2 className="hero-item"> Full Stack Web Developer </h2>
  <h2 className="hero-item"> Los Angeles, California </h2>

  <h4 className="hero-item"> alexsrhee@gmail.com </h4>
  <div className="hero-item emailItem">
    <Icon bordered link inverted size='large' color="blue" name="linkedin" onClick={linkedin}/>
    <Icon bordered link inverted size='large' name="github" onClick={github}/>
  </div>

  </div>
    
    
);

export default Hero;
