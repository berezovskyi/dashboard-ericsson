import React, { Component } from 'react';
import styles from './Loading.css';

export default class Loading extends Component {
  render() {
    return (
      <div className={styles.row}>
        <div className={styles.oneFull}>
          <div className={styles['loading-spinner']} />
        </div>
      </div>
    );
  }
}
