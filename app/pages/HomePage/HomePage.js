import React, { Component } from 'react';
import styles from './HomePage.css';

import { Link } from 'react-router-dom';

import IntellegentAgent from '../../shared/media/images/icons/intellegentagent_home.png';
import SupplyChain from '../../shared/media/images/icons/supplychain_home.png';
import Warehouse from '../../shared/media/images/icons/warehouse_home.png';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.oneFull}>
              <h1 className={styles.title}>Welcome to the Ericsson SCOTT Dashboard</h1>
              <div className={styles.row}>
                <div className={styles.oneThird}>
                  <Link to="/warehouse?time=day" className={styles.thumbnail}>
                    <img src={Warehouse} className={styles.thumbnailimage} height={48} />
                    <h3 className={styles.heading}>Warehouse level</h3>
                    <p>The purpose of the Warehouse level is to visualise the movement and exchange of data inside the warehouse primarily by the robots.</p>
                  </Link>
                </div>
                <div className={styles.oneThird}>
                  <Link to="/supplychain?time=day" className={styles.thumbnail}>
                    <img src={SupplyChain} className={styles.thumbnailimage} height={48} />
                    <h3 className={styles.heading}>Supply Chain level</h3>
                    <p>The purpose of the supply chain level is to visualise data available outside  the warehouse scope and how the objects in the warehouse interact with the outside environment (retailers).</p>
                  </Link>
                </div>
                <div className={styles.oneThird}>
                  <Link to="/intellegentagent?time=day" className={styles.thumbnail}>
                    <img src={IntellegentAgent} className={styles.thumbnailimage} height={48} />
                    <h3 className={styles.heading}>Intelligent Agent level</h3>
                    <p>The purpose of the Intelligent Agent (IA) level is to visualise interdependence of different robots on one another.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
