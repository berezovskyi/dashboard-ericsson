import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.headerouter}>
        <div className={styles.headerinner}>
          <ul className={styles.tabs}>
            <li className={styles.active}>
              <NavLink activeClassName={styles.active} to="?type=day">
                Daily
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="?type=week">
                Weekly
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="?type=month">
                Monthly
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="?type=year">
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
