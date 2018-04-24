import React, { Component } from 'react';
import className from 'classnames';
import styles from './Stakeholders.css';

class StakeholderProfile extends Component {
  render() {
    const { stakeholders, type } = this.props;
    const profile = className(styles.profile, styles.oneThird);
    return stakeholders.valueSeq().map(stakeholder => {
      if (stakeholder.type === type) {
        if (stakeholder.highlighted) {
          return (
            <div className={profile} key={stakeholder.id}>
              <img src="http://placehold.it/120x120" alt={stakeholder.name} />
              <h4 className={styles.title}>{stakeholder.name}</h4>
              <p className={styles.subtitle}>{stakeholder.id}</p>
            </div>
          );
        }
      }
    });
  }
}
export default StakeholderProfile;
