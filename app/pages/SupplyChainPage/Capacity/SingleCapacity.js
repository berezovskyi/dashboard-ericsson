import React from 'react';
import styles from './Capacity.css';
import Progress from '../../../ui/Progress/Progress';

export default function SingleCapacity({ capacity }) {
  return capacity.valueSeq().map(row => (
    <div key={row.id}>
      <h4 className={styles.capacitytitle}>{row.name}</h4>
      <Progress value={row.value} />
    </div>
  ));
}
