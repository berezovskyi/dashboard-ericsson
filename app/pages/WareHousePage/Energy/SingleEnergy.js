import React from 'react';
import styles from './Energy.css';
import Progress from '../../../ui/Progress/Progress';

export default function SingleEnergy({ energy }) {
  return energy.valueSeq().map(row => (
    <div key={row.id}>
      <h4 className={styles.title}>{row.name}</h4>
      <Progress value={row.value} />
    </div>
  ));
}
