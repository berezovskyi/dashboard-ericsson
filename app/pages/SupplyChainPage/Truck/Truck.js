import React from 'react';

import Card from '../../../components/Card/Card';
import Progress from '../../../components/Progress/Progress';
import Button from '../../../components/Button/Button';

class Truck extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card title="Trucks" helpText="The data relevant to the trucks">
        <div>
          <h4>Time to reach warehouse for truck 1</h4>
          <Progress value="50" />
          <Button size="medium" color="secondary">View more on Truck 1</Button>
        </div>
        <div>
          <h4>Time to reach warehouse for truck 2</h4>
          <Progress value="50" />
          <Button color="secondary">View more on Truck 1</Button>
        </div>
        <Button size="medium" color="primary">View all</Button>
      </Card>
    );
  }
}

Truck.propTypes = {

};

export default Truck;
