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
                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it.</p>
                  </Link>
                </div>
                <div className={styles.oneThird}>
                  <Link to="/supplychain?time=day" className={styles.thumbnail}>
                    <img src={SupplyChain} className={styles.thumbnailimage} height={48} />
                    <h3 className={styles.heading}>Supply Chain level</h3>
                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it.</p>
                  </Link>
                </div>
                <div className={styles.oneThird}>
                  <Link to="/intellegentagent?time=day" className={styles.thumbnail}>
                    <img src={IntellegentAgent} className={styles.thumbnailimage} height={48} />
                    <h3 className={styles.heading}>Intelligent Agent level</h3>
                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it.</p>
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
