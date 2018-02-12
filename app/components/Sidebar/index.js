import React from 'react';
import { NavLink } from 'react-router-dom';

import { SidebarPanel } from './styles';

export default class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SidebarPanel>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <img src="http://via.placeholder.com/50x50" alt="" />
              <span>Home Page</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/supplychain">
              <img src="http://via.placeholder.com/50x50" alt="" />
              <span>Supply Chain</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/warehouse">
              <img src="http://via.placeholder.com/50x50" alt="" />
              <span>Warehouse</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/intellegentagent">
              <img src="http://via.placeholder.com/50x50" alt="" />
              <span>Intelligent Agent</span>
            </NavLink>
          </li>
        </ul>
      </SidebarPanel>
    );
  }
}
