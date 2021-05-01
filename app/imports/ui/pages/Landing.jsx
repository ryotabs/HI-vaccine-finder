import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Landing extends React.Component {

  constructor(props) {
    super(props)
  this.state = {
      isLoggedIn: false
  }
}
  componentDidMount() {
    if (Meteor.user()) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })

    }
  }

/** A simple static component to render some text for the landing page. */
  render() {
    if (this.state.isLoggedIn) {
      return (
          <div>
            <Container>
              <div className="landing-text-style">
                <h1 className='header-landing'>Vaccine Finder</h1>
                <p>Welcome to HI vaccine finder, the fastest and easiest way to find a legible vaccine!</p>
                <Button size='huge' color='green' as={NavLink} exact to="/vaccine-form">Get Started</Button>
              </div>
            </Container>
          </div>
      );
    } else {
      return (
          <div>
            <Container>
              <div className="landing-text-style">
                <h1 className='header-landing'>Vaccine Finder</h1>
                <p>Welcome to HI vaccine finder, the fastest and easiest way to find a legible vaccine!</p>
                <Button size='huge' color='green' as={NavLink} exact to="/signin">Get Started</Button>
              </div>
            </Container>
          </div>
      );
    }
  }
}

export default Landing;
