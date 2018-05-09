import React from "react";
import './Experience.css';
import { Grid, Header} from 'semantic-ui-react'

const Experience = () => (

  <Grid columns id="experienceSection">



    <Grid.Row>

      

      <Grid.Column width={4}>
      <Header className="workXP" size='huge' textAlign='center'>Work and Experience</Header>
      </Grid.Column>
      <Grid.Column width={3}>
      <h3 className="dateRange">May 2016 - January 2018</h3>
      </Grid.Column>
      <Grid.Column width={9}>
      <div className="jobDetails">
      <h4>Scheduling Coordinator at NBCUniversal</h4>
      <p> - Forecasting labor needs and budget for USH Restaurants</p>
      <p> - Creating weekly schedules based on forecasted needs</p>
      </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={3}>
      <h3 className="dateRange">April 2015 - May 2016</h3>
      </Grid.Column>
      <Grid.Column width={9}>
      <div className="jobDetails">
      <h4>Underwriting Technician at ICW Group</h4>
      <p> - Managing new business pipeline</p>
      <p> - Processing business financials and risks to calculate insurance premiums (Workers Compensation)</p>
      </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={3}>
      <h3 className="dateRange">January 2014 - February 2015</h3>
      </Grid.Column>
      <Grid.Column width={9}>
      <div className="jobDetails">
      <h4>Loan Processor at Global Equity Finance</h4>
      <p> - Calculate mortgage premiums using client financial records</p>
      </div>
      </Grid.Column>
    </Grid.Row>


  </Grid>
    
    
);

export default Experience;
