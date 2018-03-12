import React from 'react';

import Capacity from './Capacity/Capacity';
import Truck from './Truck/Truck';
import Stakeholders from '../../shared/Stakeholders/Stakeholders';
import Notes from '../../shared/Notes/Notes';

import styles from './SupplyChainPage.css';
import RPChart from "./RPChart/RPChart";

class SupplyChainPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fullPage}>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Capacity id="capactiy" />
          </div>
          <div className={styles.oneHalf}>
            <Truck id="truck" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <RPChart id="rpchrt" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Stakeholders id="stakholder" />
          </div>
          <div className={styles.oneHalf}>
            <Notes id="notes" />
          </div>
        </div>
      </div>
    );
  }
}

export default SupplyChainPage;
