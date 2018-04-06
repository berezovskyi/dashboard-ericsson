import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import SingleCapacity from './SingleCapacity';
import SingleCapacityModal from './SingleCapacityModal';

class Capacity extends Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handlealltrucksModal = this._handlealltrucksModal.bind(this);
    this.state = {
      capacityModal: false,
    };
  }

  _handlealltrucksModal() {
    this.setState({
      capacityModal: !this.state.capacityModal,
    });
  }

  render() {
    const { id, capacity } = this.props;
    return (
      <Card
        title="Highlighted Retailers and Warehouse Capacity"
        helpText="The section indicates how much the warehouses and the retailers are full. The get more information, click view all."
        id={id}
      >
        <SingleCapacity capacity={capacity} total={3} type="wh" />
        <SingleCapacity capacity={capacity} total={3} type="rt" />
        <Button
          size="medium"
          color="primary"
          onClick={this._handlealltrucksModal}
        >
          View all
        </Button>
        <Modal
          isOpen={this.state.capacityModal}
          toggle={this._handlealltrucksModal}
        >
          <ModalHeader toggle={this._handlealltrucksModal}>
            Capacity of all Trucks and Warehouses
          </ModalHeader>
          <ModalBody>
            <h4>All Warehouses</h4>
            <SingleCapacityModal capacity={capacity} type="wh" />
            <h4>All Retailers</h4>
            <SingleCapacityModal capacity={capacity} type="rt" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handlealltrucksModal}>
              Close
            </Button>
            {' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Capacity.propTypes = {
  id: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    capacity: state.get('capacity'),
  };
}

export default connect(mapStateToProps)(Capacity);
