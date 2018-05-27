import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../../ui/Loading/Loading';
import Alert from '../../../ui/Alert/Alert';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import RefreshImage from '../../../shared/media/images/icons/refresh.svg';

import SingleTruck from './SingleTruck';
import SingleTruckModal from './SingleTruckModal';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';
import { fetchTrucksIfNeeded } from '../../../entities/truck/actions';

class Truck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alltrucksModal: false,
    };
    this._handlealltruckModal = this._handlealltruckModal.bind(this);
    this._handleRefresh = this._handleRefresh.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTrucksIfNeeded());
  }

  _handlealltruckModal() {
    this.setState({
      alltrucksModal: !this.state.alltrucksModal,
    });
  }

  _handleRefresh(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchTrucksIfNeeded());
  }

  render() {
    const { trucks, id, loading, status, statusText, receivedAt } = this.props;

    return (
      <Card
        title="Ongoing Truck Journeys"
        helpText="This card talks about all the truck and related data. The highlighted data is on the card home. To see all trucks and highlight trucks of your choice click View All. You can also see more truck info in the View More for that truck."
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
        <SingleTruck trucks={trucks} total={3} />
        <Button
          size="medium"
          color="primary"
          onClick={this._handlealltruckModal}
        >
          View all
        </Button>
        {' '}
        <Button color="primary" onClick={this._handleRefresh}>
          <RefreshImage height={14} width={14} /> Refresh Trucks
        </Button>
        <Modal
          isOpen={this.state.alltrucksModal}
          toggle={this._handlealltruckModal}
        >
          <ModalHeader toggle={this._handlealltruckModal}>
            All Truck Journeys
          </ModalHeader>
          <ModalBody>
            <SingleTruckModal />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handlealltruckModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const data = state.get('trucks');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    trucks: data.get('data'),
    status: data.get('status'),
    statusText: data.get('statusText'),
  };
}

Truck.propTypes = {
  trucks: PropTypes.any,
};

export default connect(mapStateToProps)(Truck);
