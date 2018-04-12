
import React from 'react';
import { NavLink } from 'react-router-dom';
import WarehouseIcon from '../../shared/media/images/icons/warehouse.svg';
import SupplyChainIcon from '../../shared/media/images/icons/supplychian.svg';
import IntellegentAgentIcon from '../../shared/media/images/icons/intellegent.svg';

import styles from './Sidebar.css';

class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.sidebarpanel}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/supplychain">
              <SupplyChainIcon width={50} />
              <span>Supply Chain Level</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/warehouse">
              <WarehouseIcon width={50} />
              <span>Warehouse Level</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/intellegentagent">
              <IntellegentAgentIcon width={50} />
              <span>Intelligent Agent Level</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
