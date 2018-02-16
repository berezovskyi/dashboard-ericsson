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

/* Import Layout */
import Sidebar from 'components/Sidebar';

/* Import all the Pages */

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import IntelligentAgentPage from 'containers/IntelligentAgentPage/Loadable';
import SupplyChainPage from 'containers/SupplyChainPage/Loadable';
import WareHousePage from 'containers/WareHousePage/Loadable';

import styles from './styles.css';

/* TODO: Move the sidebar to Main layout */

export default function App() {
  return (
    <main>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.innercontent}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/supplychain" component={SupplyChainPage} />
            <Route path="/warehouse" component={WareHousePage} />
            <Route path="/intellegentagent" component={IntelligentAgentPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </main>
  );
}
