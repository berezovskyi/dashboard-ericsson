import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

/* Import Layout */
import Sidebar from '../../ui/Sidebar/Sidebar';

/* Import all the Pages */

import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import IntelligentAgentPage from '../../pages/IntelligentAgentPage';
import SupplyChainPage from '../../pages/SupplyChainPage';
import WareHousePage from '../../pages/WareHousePage';

import styles from './App.css';
import Header from '../../ui/Header/Header';

class App extends Component {
  render() {
    return (
      <main>
        <Helmet title="Home Page - SCOTT Dashboard" />
        <Header />
        <Sidebar />
        <div className={styles.content}>
          <div className={styles.innercontent}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                path="/supplychain/"
                component={SupplyChainPage}
              />
              <Route
                path="/warehouse/"
                component={WareHousePage}
              />
              <Route
                path="/intellegentagent/"
                component={IntelligentAgentPage}
              />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
