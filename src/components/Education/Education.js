import React from "react";
import './Education.css';
import { Grid, Header} from 'semantic-ui-react'

const Education = () => (

  <Grid columns  className='aboutC' id="educationSection">

    <Grid.Row>

      <Grid.Column width={4}>
      <Header className="workXP" size ="large" textAlign='center'>Education</Header>
      </Grid.Column>
      <Grid.Column width={3}>
      <h4 className="dateRange">Certified May 2018</h4>
      </Grid.Column>
      <Grid.Column width={9}>
      <div className="jobDetails">
      <h4>University of California, Los Angeles
        <br/>
        Full Stack Web Development
      </h4>
      </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={3}>
      <h4 className="dateRange">Graduated Sept 2014</h4>
      </Grid.Column>
      <Grid.Column width={9}>
      <div className="jobDetails">
      <h4 className="lastItem">University of California, San Diego
        <br/>
        Economics
      </h4>
      </div>
      </Grid.Column>
    </Grid.Row>


  </Grid>
    
    
);

export default Education;
