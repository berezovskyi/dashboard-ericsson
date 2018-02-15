import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.css';

class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.sidebarpanel}>
        <ul>
          <li>
            <NavLink exact activeClassName={styles.active} to="/">
              <img src="http://via.placeholder.com/50x50" alt="" />
              <span>Home Page</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/supplychain">
              <img src="http://via.placeholder.com/50x50" alt="" />
              <span>Supply Chain</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/warehouse">
              <img src="http://via.placeholder.com/50x50" alt="" />
              <span>Warehouse</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/intellegentagent">
              <img src="http://via.placeholder.com/50x50" alt="" />
              <span>Intelligent Agent</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
