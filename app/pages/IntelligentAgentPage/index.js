import React from 'react';

import Robot from './Robot/Robot';
import Notes from '../../shared/components/Notes/Notes';
import Stakeholders from '../../shared/components/Stakeholders/Stakeholders';

import styles from './IntellegentAgentPage.css';

class IntelligentAgentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fullPage}>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
          </div>
          <div className={styles.oneHalf}>
            <Robot id="robot" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull}>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Stakeholders id="stakeholder" type="ia" />
          </div>
          <div className={styles.oneHalf}>
            <Notes type="ia" />
          </div>
        </div>
      </div>
    );
  }
}


export default IntelligentAgentPage;
