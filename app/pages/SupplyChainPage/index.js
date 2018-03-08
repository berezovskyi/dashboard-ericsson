import React from 'react';

import Capacity from './Capacity/Capacity';
import Truck from './Truck/Truck';
import Stakeholders from './Stakeholders/Stakeholders';
import Notes from './Notes/Notes';

import styles from './styles.css';

class SupplyChainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fullpage}>
        <Capacity />
        <Truck />
        <Stakeholders />
        <Notes />
      </div>
    );
  }
}

export default SupplyChainPage;
