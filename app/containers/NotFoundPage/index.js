/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

class NotFound extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>This page was not found.</h1>
    );
  }
}

export default NotFound;
