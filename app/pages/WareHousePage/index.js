import React from 'react';
import Notes from '../../shared/components/Notes/Notes';
import Stakeholders from '../../shared/components/Stakeholders/Stakeholders';

import styles from './WareHousePage.css';

class WareHousePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.row}>
        <div className={styles.oneHalf}>
          <Stakeholders id="stakeholder" type="wh" />
        </div>
        <div className={styles.oneHalf}>
          <Notes />
        </div>
      </div>
    );
  }
}

export default WareHousePage;
