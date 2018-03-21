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
        title="Capacity"
        helpText="This explains the meaning of this section."
        id={id}
      >
        <SingleCapacity capacity={capacity} total={3} />
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
            <SingleCapacity capacity={capacity} />
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
