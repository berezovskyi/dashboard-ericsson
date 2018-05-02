import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../../../ui/Loading/Loading';
import Alert from '../../../ui/Alert/Alert';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import SingleBattery from './SingleBattery';
import SingleBatteryModal from './SingleBatteryModal';
import RefreshImage from '../../../shared/media/images/icons/refresh.svg';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';
import { fetchHighlightedBatteryIfNeeded } from './actions';

class Battery extends Component {
  constructor(props) {
    super(props);
    this._handlebatteryModal = this._handlebatteryModal.bind(this);
    this._handleRefresh = this._handleRefresh.bind(this);
    this.state = {
      batteryModal: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHighlightedBatteryIfNeeded());
  }

  _handlebatteryModal() {
    this.setState({
      batteryModal: !this.state.batteryModal,
    });
  }

  _handleRefresh(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchHighlightedBatteryIfNeeded());
  }

  render() {
    const { battery, id, loading, status, statusText } = this.props;
    return (
      <Card title="Highlighted Robot State" helpText="The data relevant to the Robot Batteries" id={id}>
        {loading ? <Loading /> : <div />}
        {status > 400 && !loading
          ? <Alert color="error">
            <p>
              Error: {status}<br />Status Text: {statusText}
            </p>
          </Alert>
          : <div />}
        <SingleBattery battery={battery} />
        <Button size="medium" color="primary" onClick={this._handlebatteryModal}>View all</Button>
        {' '}
        <Button color="primary" onClick={this._handleRefresh}>
          <RefreshImage height={14} width={14} /> Refresh Battery
        </Button>
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
  const data = state.get('battery');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    battery: data.get('battery'),
    status: data.get('status'),
    statusText: data.get('statusText'),
  };
}

Battery.propTypes = {
  trucks: PropTypes.any,
};

export default connect(mapStateToProps)(Battery);
