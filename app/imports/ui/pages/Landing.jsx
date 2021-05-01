import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="landing-text-style">
            <h1 className='header-landing'>Vaccine Finder</h1>
            <p>Welcome to HI vaccine finder, the fastest and easiest way to find a legible vaccine!</p>
            <Button size='huge' color='green' as={NavLink}exact to="/signin">Get Started</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Landing;
