import React from 'react';
import className from 'classnames';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

import styles from '../../pages/SupplyChainPage/SupplyChainPage.css';

class Notes extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const profile = className(
      styles.profile, styles.oneThird
    );
    return (
      <Card title="Stakeholders" helpText="All the people involved in the Supply Chain area.">
        <div className={styles.row}>
          <div className={profile}>
            <img src="http://placehold.it/150x150" alt="John Doe" />
            <h4>Raghu Nayyar</h4>
          </div>
          <div className={profile}>
            <img src="http://placehold.it/150x150" alt="John Doe" />
            <h4>Raghu Nayyar</h4>
          </div>
          <div className={profile}>
            <img src="http://placehold.it/150x150" alt="John Doe" />
            <h4>Raghu Nayyar</h4>
          </div>
        </div>
        <Button size="medium" color="primary">View all</Button>
      </Card>
    );
  }
}

Notes.propTypes = {

};

export default Notes;
