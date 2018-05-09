import React from "react";
import './About.css';
import { Grid, Header } from 'semantic-ui-react'

const About = () => (

  <Grid columns className='aboutC' id='aboutSection'>
    <Grid.Row>
      <Grid.Column width={4}>
      <Header size ="large" className="who" textAlign='center'>About Me</Header>
      </Grid.Column>
      <Grid.Column width={12}>
      <div className="aboutMe">
      I am an up and coming full stack web and software developer. With several varied projects under my belt I am confident in leading or collaborating on any project from specs to production. I pride myself on my ability to adapt to the situation around me and to learn quicky and on the fly if needed. Software Development is my passion.
      <br/>
      <br/>
      My goal is to always provide high quality work while meeting all given project timelines.
      </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    
    
);

export default About;
