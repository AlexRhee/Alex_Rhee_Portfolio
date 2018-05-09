import React from "react";
import './Footer.css';
import { Grid, Icon } from 'semantic-ui-react'


var linkedin = () => {
  return (
    window.open("https://www.linkedin.com/in/arhee/")
  )
}

var github = () => {
  return (
    window.open("https://github.com/AlexRhee")
  )
}

const Footer = () => (

  <Grid columns className='aboutC footer' id="portfolioSection">
    <Grid.Row>
      <Grid.Column width={4}>
        <div className="footerSection"><center>
          <h2 className="footerEmail">alexsrhee@gmail.com</h2>
        </center>
        </div>
      </Grid.Column>
      <Grid.Column width={8}>

      </Grid.Column>
      <Grid.Column width={4}>
        <div className="footerSection">
          <div className="footerEmail">
            <Icon bordered link inverted size='large' color="blue" name="linkedin" onClick={linkedin} />
            <Icon bordered link inverted size='large' name="github" onClick={github} />
          </div>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>


);

export default Footer;
