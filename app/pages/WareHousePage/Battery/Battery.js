import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import SingleBattery from './SingleBattery';
import SingleBatteryModal from './SingleBatteryModal';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

class Battery extends Component {
  constructor(props) {
    super(props);
    this._handlebatteryModal = this._handlebatteryModal.bind(this);
    this.state = {
      batteryModal: false,
    }
  }

  _handlebatteryModal() {
    this.setState({
      batteryModal: !this.state.batteryModal,
    });
  }

  render() {
    const { battery, id } = this.props;
    return (
      <Card title="Highlighted Robot State" helpText="The data relevant to the Robot Batteries" id={id}>
        <SingleBattery battery={battery} />
        <Button size="medium" color="primary" onClick={this._handlebatteryModal}>View all</Button>
        <Modal
          isOpen={this.state.batteryModal}
          toggle={this._handlebatteryModal}
        >
          <ModalHeader toggle={this._handlebatteryModal}>
            Battery in the Robots
          </ModalHeader>
          <ModalBody>
            <SingleBatteryModal battery={battery} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handlebatteryModal}>
              Close
            </Button>
            {' '}
          </ModalFooter>
        </Modal>
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
