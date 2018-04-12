import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.css';
import { getCurrentRoute } from '../../utils/utils';

class Header extends Component {
  render() {
    const { navigation } = this.props;
    const search = getCurrentRoute(navigation);
    return (
      <div className={styles.headerouter}>
        <div className={styles.headerinner}>
          <ul className={styles.tabs}>
            <li className={search.time === 'day' ? styles.active : ''}>
              Daily
            </li>
            <li className={search.time === 'week' ? styles.active : ''}>Weekly</li>
            <li className={search.time === 'month' ? styles.active : ''}>Monthly</li>
            <li className={search.time === 'year' ? styles.active : ''}>Yearly</li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    navigation: state.get('route'),
  };
}

export default connect(mapStateToProps)(Header);
