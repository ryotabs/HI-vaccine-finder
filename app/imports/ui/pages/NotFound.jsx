import React from 'react';
import { Grid, Header } from "semantic-ui-react";

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class NotFound extends React.Component {
  render() {
    return (
      <Header as="h2" textAlign="center">
        <div className="title">
          <p>Page not found</p>
        </div>
      </Header>
    );
  }
}

export default NotFound;
