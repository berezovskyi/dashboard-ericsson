import React from 'react';
import className from 'classnames';
import styles from './Stakeholders.css';

export default function StakeholderModalProfile({ stakeholders }) {
  const modalprofileList = className(styles.row, styles.profilelist);
  return stakeholders.valueSeq().map(stakeholder => (
    <div className={modalprofileList}>
      <div className={styles.oneFifth}>
        <img
          className={styles.stakeholderphoto}
          src="http://placehold.it/100x100"
        />
      </div>
      <div className={styles.fourFifth}>
        <h5 className={styles.stakeholdername}>{stakeholder.name}</h5>
        <p className={styles.stakeholderemail}>{stakeholder.email}</p>
        <p className={styles.stakeholderphone}>{stakeholder.phone}</p>
      </div>
    </div>
  ));
}
