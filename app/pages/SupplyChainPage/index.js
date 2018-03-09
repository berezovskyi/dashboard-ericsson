import React from 'react';

import Capacity from './Capacity/Capacity';
import Truck from './Truck/Truck';
import Stakeholders from '../../shared/Stakeholders/Stakeholders';
import Notes from '../../shared/Notes/Notes';

import styles from './SupplyChainPage.css';

class SupplyChainPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fullPage}>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Capacity />
          </div>
          <div className={styles.oneHalf}>
            <Truck />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Stakeholders />
          </div>
          <div className={styles.oneHalf}>
            <Notes />
          </div>
        </div>
      </div>
    );
  }
}

export default SupplyChainPage;
