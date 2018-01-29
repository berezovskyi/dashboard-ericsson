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

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';


/* Import all the Pages */

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import IntelligentAgentPage from 'containers/IntelligentAgentPage/Loadable';
import SupplyChainPage from 'containers/SupplyChainPage/Loadable';
import WareHousePage from 'containers/WareHousePage/Loadable';


/* Import all the Components */

import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/supplychain" component={SupplyChainPage} />
        <Route path="/warehouse" component={WareHousePage} />\
        <Route path="/intellegentagent" component={IntelligentAgentPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
