import React from 'react';
import styles from './Capacity.css';
import Knob from '../../../ui/Knob/Knob';

export default function SingleCapacityModal({ capacity, type }) {
  return (
    <div className={styles.row}>
      {capacity.valueSeq().map(row => {
        if (row.type === type) {
          return (
            <div key={row.id} className={styles.knobsingleouter}>
              <div className={styles.knobsingleinner}>
                <Knob
                  value={row.value}
                  height={100}
                  width={100}
                  bgColor="#E9EFF4"
                  fgColor="#4D5AFF"
                  inputColor="#474F58"
                />
                <h4 className={styles.title}>{row.name}</h4>
                <p className={styles.subtitle}>{row.id}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
