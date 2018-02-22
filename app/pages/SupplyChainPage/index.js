import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Progress from '../../components/Progress';
import styles from './styles.css';

class SupplyChainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fullpage}>
        <Card title="Capacity" helpText="This explains the meaning of this section.">
          <div>
            <h4>Warehouse</h4>
            <Progress value="50" />
          </div>
          <div>
            <h4>Retailer 1</h4>
            <Progress value="50" />
          </div>
          <div>
            <h4>Retailer 2</h4>
            <Progress value="60" />
          </div>
          <Button size="medium" color="primary">View all</Button>
        </Card>
      </div>
    );
  }
}

export default SupplyChainPage;
