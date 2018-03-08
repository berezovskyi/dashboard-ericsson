import React from 'react';

import Card from '../../../components/Card/Card';
import Progress from '../../../components/Progress/Progress';
import Button from '../../../components/Button/Button';

class Capacity extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card
        title="Capacity"
        helpText="This explains the meaning of this section."
      >
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
    );
  }
}

Capacity.propTypes = {};

export default Capacity;
