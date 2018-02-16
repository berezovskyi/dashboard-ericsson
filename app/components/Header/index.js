import React, { Component } from 'react';
import styles from './styles.css';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.headerouter}>
        <div className={styles.headerinner}>
          <h4>Overview:</h4>
          <ul>
            <li>Daily</li>
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
