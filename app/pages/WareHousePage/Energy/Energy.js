import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import SingleEnergy from './SingleEnergy';

class Energy extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleallenergyModal = this._handleallenergyModal.bind(this);
    this.state = {
      energyModal: false,
    };
  }

  _handleallenergyModal() {
    this.setState({
      energyModal: !this.state.energyModal,
    });
  }

  render() {
    const { id, energy } = this.props;
    return (
      <Card
        title="Energy"
        helpText="This explains the meaning of this section."
        id={id}
      >
        <SingleEnergy energy={energy} />
        <Button
          size="medium"
          color="primary"
          onClick={this._handleallenergyModal}
        >
          View all
        </Button>
        <Modal
          isOpen={this.state.capacityModal}
          toggle={this._handleallenergyModal}
        >
          <ModalHeader toggle={this._handleallenergyModal}>
            Energy of all Trucks and Warehouses
          </ModalHeader>
          <ModalBody>
            <SingleEnergy energy={energy} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handleallenergyModal}>
              Close
            </Button>
            {' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Energy.propTypes = {
  id: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    capacity: state.get('energy'),
  };
}

export default connect(mapStateToProps)(Energy);
