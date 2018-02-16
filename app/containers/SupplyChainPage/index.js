import React from 'react';
import styles from './styles.css';

class SupplyChainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1 className={styles.h1}>This is the supply chain page.</h1>
    );
  }
}

export default SupplyChainPage;
