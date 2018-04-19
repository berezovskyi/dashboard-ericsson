import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';

import SingleTruck from './SingleTruck';
import SingleTruckModal from './SingleTruckModal';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

class Truck extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      alltrucksModal: false,
    };
    this._handlealltruckModal = this._handlealltruckModal.bind(this);
  }

  _handlealltruckModal() {
    this.setState({
      alltrucksModal: !this.state.alltrucksModal,
    });
  }

  render() {
    const { truck, id } = this.props;

    return (
      <Card title="Trucks" helpText="The data relevant to the trucks" id={id}>
        <SingleTruck trucks={truck} total={3} />
        <Button size="medium" color="primary" onClick={this._handlealltruckModal}>View all</Button>
        <Modal
          isOpen={this.state.alltrucksModal}
          toggle={this._handlealltruckModal}
        >
          <ModalHeader toggle={this._handlealltruckModal}>
            Energy of all Trucks and Warehouses
          </ModalHeader>
          <ModalBody>
            <SingleTruckModal trucks={truck} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handlealltruckModal}>
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
    truck: state.get('truck'),
  };
}

Truck.propTypes = {
  truck: PropTypes.any,
};

export default connect(mapStateToProps)(Truck);
