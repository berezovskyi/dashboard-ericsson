import React from 'react';
import styles from './Robot.css';
import Progress from '../../../ui/Progress/Progress';

export default function SingleRobotModal({ robots, type }) {
  return (
    <div className={styles.row}>
      {robots.valueSeq().map(row => {
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
