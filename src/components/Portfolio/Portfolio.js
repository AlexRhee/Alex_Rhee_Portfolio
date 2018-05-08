import React from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';
import { Grid, Header, Divider, Segment } from 'semantic-ui-react'

const Portfolio = () => (

  <Grid columns id="portfolioSection">



    <Grid.Row>

      

      <Grid.Column width={4}>
      <Header className="workXP" size='huge' textAlign='center'>Portfolio</Header>
      </Grid.Column>
      <Grid.Column width={3}>
      <div className="jobDetails">
      <h1 className="dateRange">Frontend</h1>
      <br/>
      <p> - HTML</p>
      <p> - CSS</p>
      <p> - React.js</p>
      <p> - JQuery</p>
      <p> - AJAX</p>
      </div>
      </Grid.Column>
      <Grid.Column width={3}>
      <div className="jobDetails">
      <h1 className="dateRange">Backend</h1>
      <br/>
      <p> - JavaScript</p>
      <p> - Node.js</p>
      <p> - API Impemention</p>
      <p> - API Development</p>
      <p> - Wordpress</p>

      </div>
      </Grid.Column>
      <Grid.Column width={3}>
      <div className="jobDetails">
      <h1 className="dateRange">Database</h1>
      <br/>
      <p> - MySQL</p>
      <p> - MongoDB</p>
      <p> - Database Design</p>
      <p> - Database Integration</p>
      <p> - Database Management</p>
      </div>
      </Grid.Column>
      <Grid.Column width={3}>
      <div className="jobDetails">
      <h1 className="dateRange">General</h1>
      <br/>
      <p> - Microsoft Suite</p>
      <p> - Advanced Excel</p>
      <p> - Communication</p>
      <p> - Adapting/Learning</p>
      <p> - Scrum</p>
      </div>
      </Grid.Column>
    </Grid.Row>

    <Divider fitted/>
  </Grid>
    
    
);

export default Skills;
