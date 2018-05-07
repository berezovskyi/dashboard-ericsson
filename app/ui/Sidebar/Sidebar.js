import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import WarehouseIcon from '../../shared/media/images/icons/warehouse.svg';
import SupplyChainIcon from '../../shared/media/images/icons/supplychian.svg';
import IntellegentAgentIcon
  from '../../shared/media/images/icons/intellegent.svg';

import styles from './Sidebar.css';

class Sidebar extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <div className={styles.sidebarpanel}>
        <ul>
          <li
            className={
              navigation.location.pathname === '/supplychain'
                ? styles.active
                : ''
            }
          >
            <NavLink to="/supplychain?time=day">
              <SupplyChainIcon width={50} />
              <span>Supply Chain Level</span>
            </NavLink>
          </li>
          <li
            className={
              navigation.location.pathname === '/warehouse' ? styles.active : ''
            }
          >
            <NavLink to="/warehouse?time=day">
              <WarehouseIcon width={50} />
              <span>Warehouse Level</span>
            </NavLink>
          </li>
          <li
            className={
              navigation.location.pathname === '/intellegentagent'
                ? styles.active
                : ''
            }
          >
            <NavLink to="/intellegentagent?time=day">
              <IntellegentAgentIcon width={50} />
              <span>Intelligent Agent Level</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.get('route'),
  };
}

export default connect(mapStateToProps)(Sidebar);
