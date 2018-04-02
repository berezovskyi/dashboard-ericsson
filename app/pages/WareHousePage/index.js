import React from 'react';
import Notes from '../../shared/components/Notes/Notes';
import Stakeholders from '../../shared/components/Stakeholders/Stakeholders';

import Battery from './Battery/Battery';
import styles from './WareHousePage.css';
import RobotPerformanceChart from './RobotPerformanceChart/RobotPerformanceChart';

class WareHousePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.fullPage}>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <RobotPerformanceChart />
          </div>
          <div className={styles.oneHalf}>
            <Battery id="battery" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull}>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Stakeholders id="stakeholder" type="wh" name="Warehouse Level" />
          </div>
          <div className={styles.oneHalf}>
            <Notes type="wh" name="Warehouse Level" />
          </div>
        </div>
      </div>
    );
  }
}

export default WareHousePage;
