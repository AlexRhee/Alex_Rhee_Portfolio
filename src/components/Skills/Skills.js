import React from "react";
import './Skills.css';
import { Grid, Header } from 'semantic-ui-react'

const Skills = () => (

  <Grid columns className='aboutC' id="skillsSection">

    <Grid.Row >

      <Grid.Column width={4}>
      <Header className="workXP" size ="large" textAlign='center'>Skills</Header>
      </Grid.Column>
      <Grid.Column width={4}>
      <div className="jobDetails">
      <h4 className="dateRange">Frontend</h4>
      <br/>
      <p> • HTML</p>
      <p> • CSS</p>
      <p> • React.js</p>
      <p> • JQuery</p>
      <p> • AJAX</p>
      </div>
      </Grid.Column>
      <Grid.Column width={4}>
      <div className="jobDetails">
      <h4 className="dateRange">Backend</h4>
      <br/>
      <p> • JavaScript</p>
      <p> • Node.js</p>
      <p> • API Impemention</p>
      <p> • API Development</p>
      <p> • Wordpress</p>

      </div>
      </Grid.Column>
      <Grid.Column width={4}>
      <div className="jobDetails">
      <h4 className="dateRange">Database</h4>
      <br/>
      <p> • MySQL</p>
      <p> • MongoDB</p>
      <p> • Database Design</p>
      <p> • Database Integration</p>
      <p> • Database Management</p>
      </div>
      </Grid.Column>
    </Grid.Row>

  </Grid>
    
    
);

export default Skills;
