import React from 'react';

import Robot from './Robot/Robot';
import Notes from '../../shared/components/Notes/Notes';
import Stakeholders from '../../shared/components/Stakeholders/Stakeholders';

import styles from './IntellegentAgentPage.css';
import IAChart from './IAChart/IAChart';

class IntelligentAgentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fullPage}>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <IAChart />
          </div>
          <div className={styles.oneHalf}>
            <Robot id="robot" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull} />
        </div>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Stakeholders
              id="intelligentagent"
              type="ia"
              name="Intelligent Agent Level"
            />
          </div>
          <div className={styles.oneHalf}>
            <Notes type="ia" name="Intelligent Agent Level" />
          </div>
        </div>
      </div>
    );
  }
}

export default IntelligentAgentPage;
