import React from "react";
import './Portfolio.css';
import { Grid, Header, Button, Image, Modal } from 'semantic-ui-react'

var tripshare = () => {
  return (
  window.open("https://tripshareapp.herokuapp.com/")
)}

var thelist = () => {
  return (
  window.open("https://intense-bayou-67369.herokuapp.com/")
)}

var pairit = () => {
  return (
  window.open("https://alexrhee.github.io/Pair-It/")
)}



const Portfolio = () => (

  <Grid columns id="portfolioSection">



    <Grid.Row>



      <Grid.Column width={4}>
        <Header className="workXP" size ="large" textAlign='center'>Portfolio</Header>
      </Grid.Column>
      <Grid.Column width={4}>
        <div className="jobDetails">         
            <h4 onClick={tripshare} className="dateRange links">TripShare</h4>
          <br />
          <img alt="tripshare" onClick={tripshare} className="projectImage links" wrapped size='large' src={require('./tripsharefront.png')} />
          <br />
          <Modal size="fullscreen" trigger={<Button>Info</Button>}>
            <Modal.Header>TripShare</Modal.Header>        
            <Modal.Content image>
              <Image wrapped size='large' src={require('./tripshare2.png')} />
              <Modal.Description>
                <Header>Vacation Application/Blog Utilizing React and MongoDB</Header>
                <p>TripShare allows the users to sign up and create and share a blog that saves the cities they have visited as well as individual places/venues within those cities and any pictures they would like to include.</p>
                <p>The application was made using React.js and react-materialize as the UI framework. MongoDB and Mongoose were used to store all of blog information that the user adds. Mapbox GL JS API was used to implement the world map and city search function of the application.</p>
                <p onClick={tripshare} className="directions">Click here to redirect to project page.</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          
        </div>
      </Grid.Column>
      <Grid.Column width={4}>
        <div className="jobDetails">
        
            <h4 onClick={thelist} className="dateRange links">The List</h4>
          <br />
          <img alt="thelist" onClick={thelist} className="projectImage links" wrapped size='medium' src={require('./thelistlogo.png')} />
          <br />
          <Modal size="fullscreen" trigger={<Button>Info</Button>}>
            <Modal.Header>The List</Modal.Header>           
            <Modal.Content image>
              <Image wrapped size='medium' src={require('./thelistfront.png')} />
              <Modal.Description>
                <Header>Product List Blog Using MySQL</Header>
                <p>This application allows user to create shareable lists of items using the Amazon Product Search API.</p>
                <p>Aside from using the Amazon Product Search API, the application also utilizes MySQL create a database that stores user lists.</p>
                <p onClick={thelist} className="directions">Click here to redirect to project page.</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          
        </div>
      </Grid.Column>
      <Grid.Column width={4} className="lastItem">
        <div className="jobDetails">
        
            <h4 onClick={pairit} className="dateRange links">Pair-It</h4>
          <br />
          <img alt="pairit" onClick={pairit} className="projectImage links" size='medium' src={require('./Pairit.jpg')} />
          <br />
          <Modal size="fullscreen" trigger={<Button>Info</Button>}>
            <Modal.Header>Pair-It</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={require('./Pairit.jpg')} />
              <Modal.Description>
                <Header>Fun Web App Utilizing Third Party APIs</Header>
                <p>This was a very simple an fun application that allows the user to find matching movies, beer or food based on their initial selection.</p>
                <p>The application utilizes several API's to retrieve the "paired" information.</p>
                <p onClick={pairit} className="directions">Click here to redirect to project page.</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          
        </div>
      </Grid.Column>
    </Grid.Row>

  </Grid>


);

export default Portfolio;
