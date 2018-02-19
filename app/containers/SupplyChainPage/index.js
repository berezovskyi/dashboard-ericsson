import React from 'react';
import Card from '../../ui/Card/Card';
import styles from './styles.css';

class SupplyChainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fullpage}>
        <Card title="This is the card title" helpText>
          <p>All the visualisations go in here.</p>
        </Card>
        <Card title="This is the card title" helpText>
          <p>All the visualisations go in here.</p>
        </Card>
      </div>
    );
  }
}

export default SupplyChainPage;
