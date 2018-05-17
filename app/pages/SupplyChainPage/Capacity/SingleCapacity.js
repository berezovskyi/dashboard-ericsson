import React from 'react';
import styles from './Capacity.css';
import Knob from '../../../ui/Knob/Knob';

export default function SingleCapacity({ data }) {
  return (
    <div className={styles.row}>
      {data.valueSeq().map(row => {
        if (row.highlighted) {
          return (
            <div key={row.id} className={styles.knobsingleouter}>
              <div className={styles.knobsingleinner}>
                <Knob
                  value={row.capacity}
                  height={100}
                  width={100}
                  bgColor="#E9EFF4"
                  inputColor="#474F58"
                />
                <h4 className={styles.title}>{row.name}</h4>
                <p className={styles.subtitle}>{row.id}</p>
              </div>
            </div>
          );
        }
        return <span key={row.id} />
      })}
    </div>
  );
}
