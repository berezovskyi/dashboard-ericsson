/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


/* Import Layout */
import Sidebar from 'components/Sidebar';

/* Import all the Pages */

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import IntelligentAgentPage from 'containers/IntelligentAgentPage/Loadable';
import SupplyChainPage from 'containers/SupplyChainPage/Loadable';
import WareHousePage from 'containers/WareHousePage/Loadable';


/* TODO: Move the sidebar to Main layout */

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/supplychain" component={SupplyChainPage} />
          <Route path="/warehouse" component={WareHousePage} />
          <Route path="/intellegentagent" component={IntelligentAgentPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

