import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.headerouter}>
        <div className={styles.headerinner}>
          <ul className={styles.tabs}>
            <li className={styles.active}>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
            <li>Yearly</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
