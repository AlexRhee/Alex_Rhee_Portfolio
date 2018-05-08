import React from "react";
import { Link } from "react-router-dom";
import './About.css';
import { Grid, Header, Divider } from 'semantic-ui-react'

const About = () => (

  <Grid columns className='aboutC' id='aboutSection'>
    <Grid.Row>
      <Grid.Column width={4}>
      <Header className="who" size='huge' textAlign='center'>Who I am and What I do.</Header>
      </Grid.Column>
      <Grid.Column width={12}>
      <div className="aboutMe">
      I am an experienced full stack web and software engineer. With dozens of projects under my belt I am confident in leading any project from specs to production. One skill that I find very valuable is the ability to design and architect software while forseeing any possible issues we may face further down the line. Another skill set I value is the ability to jump into unfamiliar code or enviornments and be able to debug or add features with ease.
      <br/>
      <br/>
      The goal with every project is to deliver the best product with timeliness and quality.
      </div>
      </Grid.Column>
    </Grid.Row>

      <Divider fitted/>
  </Grid>
    
    
);

export default About;
