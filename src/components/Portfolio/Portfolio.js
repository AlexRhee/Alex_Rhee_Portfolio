import React from "react";
import './Portfolio.css';
import { Grid, Header, Button, Image, Modal } from 'semantic-ui-react'

const Portfolio = () => (

  <Grid columns className='aboutC' id="portfolioSection">



    <Grid.Row>



      <Grid.Column width={4}>
        <Header className="workXP" size='huge' textAlign='center'>Portfolio</Header>
      </Grid.Column>
      <Grid.Column width={4}>
        <div className="jobDetails">
          <center>
            <h1 className="dateRange">TripShare</h1>
          <br />
          <Modal trigger={<Button>Learn More</Button>}>
            <Modal.Header>TripShare</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='' />
              <Modal.Description>
                <Header>Vacation Application/Blog Utilizing React and MongoDB</Header>
                <p>TripShare allows the users to sign up and create and share a blog that saves the cities they have visited as well as individual places/venues within those cities and any pictures they would like to include.</p>
                <p>The application was made using React.js and react-materialize as the UI framework. MongoDB and Mongoose were used to store all of blog information that the user adds. Mapbox GL JS API was used to implement the world map and city search function of the application.</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          </center>
        </div>
      </Grid.Column>
      <Grid.Column width={4}>
        <div className="jobDetails">
        <center>
            <h1 className="dateRange">The List</h1>
          <br />
          <Modal trigger={<Button>Learn More</Button>}>
            <Modal.Header>The List</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='' />
              <Modal.Description>
                <Header>Product List Blog</Header>
                <p>This application allows user to create shareable lists of items using the Amazon Product Search API.</p>
                <p>Aside from using the Amazon Product Search API, the application also utilizes MySQL create a database that stores user lists.</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          </center>
        </div>
      </Grid.Column>
      <Grid.Column width={4}>
        <div className="jobDetails">
        <center>
            <h1 className="dateRange">Pair-It</h1>
          <br />
          <Modal trigger={<Button>Learn More</Button>}>
            <Modal.Header>Pair-It</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='' />
              <Modal.Description>
                <Header>Fun Web App Utilizing Third Party APIs</Header>
                <p>This was a very simple an fun application that allows the user to find matching movies, beer or food based on their initial selection.</p>
                <p>The application utilizes several API's to retrieve the "paired" information.</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          </center>
        </div>
      </Grid.Column>
    </Grid.Row>

  </Grid>


);

export default Portfolio;
