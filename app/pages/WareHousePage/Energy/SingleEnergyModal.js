import React from 'react';
import styles from './Energy.css';
import Progress from '../../../ui/Progress/Progress';

export default function SingleEnergyModal({ energy }) {
  return (
    <div className={styles.row}>
      {energy.valueSeq().map(row => {
        return (
          <div key={row.id}>
            <div>
              <h4 className={styles.title}>{row.name}</h4>
              <Progress value={row.value} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
