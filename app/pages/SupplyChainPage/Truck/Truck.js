import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';

import SingleTruck from './SingleTruck';

class Truck extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      truckModal: false,
    };
  }

  _handletruckinfoModal() {
    this.setState({
      truckModal: !this.state.truckModal,
    });
  }

  render() {
    const { truck } = this.props;

    return (
      <Card title="Trucks" helpText="The data relevant to the trucks">
        <SingleTruck trucks={truck} total={3} />
        <Button size="medium" color="primary">View all</Button>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    truck: state.get('truck'),
  };
}

Truck.propTypes = {
  truck: PropTypes.any,
};

export default connect(mapStateToProps)(Truck);
