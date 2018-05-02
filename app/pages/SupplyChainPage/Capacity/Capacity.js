import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../../../ui/Loading/Loading';
import Alert from '../../../ui/Alert/Alert';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import RefreshImage from '../../../shared/media/images/icons/refresh.svg';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import SingleCapacity from './SingleCapacity';
import SingleCapacityModal from './SingleCapacityModal';
import { fetchHighlightedCapacityIfNeeded } from './actions';

class Capacity extends Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handlealltrucksModal = this._handlealltrucksModal.bind(this);
    this._handleRefresh = this._handleRefresh.bind(this);
    this.state = {
      capacityModal: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHighlightedCapacityIfNeeded());
  }

  _handlealltrucksModal() {
    this.setState({
      capacityModal: !this.state.capacityModal,
    });
  }

  _handleRefresh(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchHighlightedCapacityIfNeeded());
  }

  render() {
    const { id, capacity, loading, status, statusText } = this.props;
    return (
      <Card
        title="Highlighted Retailers and Warehouse Capacity"
        helpText="The section indicates how much the warehouses and the retailers are full. The get more information, click view all."
        id={id}
      >
        {loading ? <Loading /> : <div />}
        {status > 400 && !loading
          ? <Alert color="error">
            <p>
              Error: {status}<br />Status Text: {statusText}
            </p>
          </Alert>
          : <div />}
        <SingleCapacity capacity={capacity} total={3} type="wh" />
        <SingleCapacity capacity={capacity} total={3} type="rt" />
        <Button
          size="medium"
          color="primary"
          onClick={this._handlealltrucksModal}
        >
          View all
        </Button>
        {' '}
        <Button color="primary" onClick={this._handleRefresh}>
          <RefreshImage height={14} width={14} /> Refresh Capacity
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
            <SingleCapacityModal type="wh" />
            <h4>All Retailers</h4>
            <SingleCapacityModal type="rt" />
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
  const data = state.get('capacity');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    capacity: data.get('capacity'),
    status: data.get('status'),
    statusText: data.get('statusText'),
  };
}

export default connect(mapStateToProps)(Capacity);
