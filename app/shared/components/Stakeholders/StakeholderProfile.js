import React from 'react';
import className from 'classnames';
import styles from './Stakeholders.css';

export default function StakeholderProfile({ stakeholders }) {
  const profile = className(styles.profile, styles.oneThird);
  return stakeholders.valueSeq().map(stakeholder => (
    <div className={profile} key={stakeholder.id}>
      <img src="http://placehold.it/120x120" alt={stakeholder.name} />
      <h4>{stakeholder.name}</h4>
    </div>
  ));
}
