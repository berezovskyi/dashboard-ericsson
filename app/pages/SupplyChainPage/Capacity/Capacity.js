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
import { fetchWarehouseIfNeeded } from '../../../entities/warehouse/actions';
import { fetchRetailerIfNeeded } from '../../../entities/retailer/actions';

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
    dispatch(fetchWarehouseIfNeeded());
    dispatch(fetchRetailerIfNeeded());
  }

  _handlealltrucksModal() {
    this.setState({
      capacityModal: !this.state.capacityModal,
    });
  }

  _handleRefresh(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchWarehouseIfNeeded());
    dispatch(fetchRetailerIfNeeded());
  }

  render() {
    const {
      id,
      warehouse,
      retailer,
      loading,
      status,
      statusText,
      receivedAt,
    } = this.props;

    console.log(warehouse);

    return (
      <Card
        title="Capacity of Retailers and Warehouses"
        helpText="The card indicates how much the warehouses and the retailers are full. The get more information, click view all."
        id={id}
        date={receivedAt}
      >
        {loading ? <Loading /> : <div />}
        {status > 400 && !loading
          ? <Alert color="error">
              <p>
                Error: {status}<br />Status Text: {statusText}
              </p>
            </Alert>
          : <div />}
        <SingleCapacity data={warehouse} />
        <SingleCapacity data={retailer} />
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
            <SingleCapacityModal warehouse={warehouse} retailer={retailer} />
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
  const warehouse = state.get('warehouse');
  const retailer = state.get('retailer');
  return {
    loading: warehouse.get('loading'),
    receivedAt: warehouse.get('receivedAt'),
    warehouse: warehouse.get('data'),
    retailer: retailer.get('data'),
    status: warehouse.get('status'),
    statusText: warehouse.get('statusText'),
  };
}

export default connect(mapStateToProps)(Capacity);
