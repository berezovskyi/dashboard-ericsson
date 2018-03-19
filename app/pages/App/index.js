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

/* Import Layout */
import Sidebar from '../../ui/Sidebar/Sidebar';

/* Import all the Pages */

import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import IntelligentAgentPage from '../../pages/IntelligentAgentPage';
import SupplyChainPage from '../../pages/SupplyChainPage';
import WareHousePage from '../../pages/WareHousePage';

import styles from './App.css';
import Header from '../../ui/Header/Header';


export default function App() {
  return (
    <main>
      <Header />
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
