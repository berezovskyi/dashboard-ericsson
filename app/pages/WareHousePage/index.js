import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Notes from '../../shared/components/Notes/Notes';
import Stakeholders from '../../shared/components/Stakeholders/Stakeholders';

import Battery from './Battery/Battery';
import styles from './WareHousePage.css';
import RobotPerformanceChart
  from './RobotPerformanceChart/RobotPerformanceChart';

class WareHousePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { graphdata } = this.props;
    return (
      <div className={styles.fullPage}>
        <Helmet title="Warehouse - SCOTT Dashboard" />
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <RobotPerformanceChart
              graphdata={graphdata}
              id="robotperformanceChart"
            />
          </div>
          <div className={styles.oneHalf}>
            <Battery id="battery" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull} />
        </div>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Stakeholders id="stakeholder" type="wh" name="Warehouse Level" />
          </div>
          <div className={styles.oneHalf}>
            <Notes type="wh" name="Warehouse Level" id="wh" />
          </div>
        </div>
      </div>
    );
  }
}

export default WareHousePage;
