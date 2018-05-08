import React from "react";
import { Link } from "react-router-dom";
import './Education.css';
import { Grid, Header, Divider, Segment } from 'semantic-ui-react'

const Education = () => (

  <Grid columns className='aboutC' id="educationSection">

    <Grid.Row>

      <Grid.Column width={4}>
      <Header className="workXP" size='huge' textAlign='center'>Education</Header>
      </Grid.Column>
      <Grid.Column width={3}>
      <h3 className="dateRange">Cohort Completed May 2018</h3>
      </Grid.Column>
      <Grid.Column width={9}>
      <div className="jobDetails">
      <h4>University of California, Los Angeles
        <br/>
        Full Stack Web Development
      </h4>
      <p> - Forecasting labor needs and budget for USH Restaurants</p>
      <p> - Creating weekly schedules based on forecasted needs</p>
      </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={3}>
      <h3 className="dateRange">Graduated September 2014</h3>
      </Grid.Column>
      <Grid.Column width={9}>
      <div className="jobDetails">
      <h4>University of California, San Diego
        <br/>
        Economics
      </h4>
      </div>
      </Grid.Column>
    </Grid.Row>

    <Divider fitted/>
  </Grid>
    
    
);

export default Education;
