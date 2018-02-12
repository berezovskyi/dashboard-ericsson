import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/supplychain">
              Supply Chain
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/warehouse">
              Warehouse
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/intellegentagent">
              Intelligent Agent
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
