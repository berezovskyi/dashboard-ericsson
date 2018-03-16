import React from 'react';
import PropTypes from 'prop-types';

import Notes from '../../shared/components/Notes/Notes';
import Stakeholders from '../../shared/components/Stakeholders/Stakeholders';

import styles from './IntellegentAgentPage.css';

class IntelligentAgentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.row}>
        <div className={styles.oneHalf}>
          <Stakeholders />
        </div>
        <div className={styles.oneHalf}>
          <Notes />
        </div>
      </div>
    );
  }
}


export default IntelligentAgentPage;
