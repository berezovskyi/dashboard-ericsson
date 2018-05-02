import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../ui/Button/Button';
import styles from './Header.css';
import RefreshImage from '../../shared/media/images/icons/refresh.svg';
import { getCurrentRoute } from '../../utils/utils';

class Header extends Component {
  render() {
    const { navigation } = this.props;
    const search = getCurrentRoute(navigation);
    const subroute = search.subroute.time;
    const location = search.url;
    return (
      <div className={styles.headerouter}>
        <div className={styles.headerinner}>
          <ul className={styles.tabs}>
            <li className={subroute === 'day' ? styles.active : ''}>
              <NavLink to={location + '?time=day'}>Daily</NavLink>
            </li>
            <li className={subroute === 'week' ? styles.active : ''}>
              <NavLink to={location + '?time=week'}>Weekly</NavLink>
            </li>
            <li className={subroute === 'month' ? styles.active : ''}>
              <NavLink to={location + '?time=month'}>Monthly</NavLink>
            </li>
            <li className={subroute === 'year' ? styles.active : ''}>
              <NavLink to={location + '?time=year'}>Yearly</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.get('route'),
  };
}

export default connect(mapStateToProps)(Header);
