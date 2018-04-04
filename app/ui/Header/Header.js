import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.headerouter}>
        <div className={styles.headerinner}>
          <ul className={styles.tabs}>
            <li className={styles.active}>
              <NavLink activeClassName={styles.active} to="/day">
                Daily
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/week">
                Weekly
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/month">
                Monthly
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/year">
                Yearly
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
