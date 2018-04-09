import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import SingleBattery from './SingleBattery';

class Battery extends Component {
  constructor(props) {
    super(props);
    this._handlebatteryModal = this._handlebatteryModal.bind(this);
  }

  _handlebatteryModal() {

  }

  render() {
    const { battery } = this.props;

    console.log(battery);
    return (
      <Card title="Highlighted Robot State" helpText="The data relevant to the Robot Batteries">
        <SingleBattery battery={battery} total={3} />
        <Button size="medium" color="primary">View all</Button>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    battery: state.get('battery'),
  };
}

export default connect(mapStateToProps)(Battery);
