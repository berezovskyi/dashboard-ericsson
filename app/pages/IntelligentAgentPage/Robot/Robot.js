import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../../../ui/Loading/Loading';
import Alert from '../../../ui/Alert/Alert';
import RefreshImage from '../../../shared/media/images/icons/refresh.svg';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import SingleRobot from './SingleRobot';
import SingleRobotModal from './SingleRobotModal';
import { fetchRobotsIfNeeded } from '../../../entities/robot/actions';

class Robot extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleallrobotsModal = this._handleallrobotsModal.bind(this);
    this._handleRefresh = this._handleRefresh.bind(this);
    this.state = {
      allrobotModal: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRobotsIfNeeded());
  }

  _handleallrobotsModal() {
    this.setState({
      allrobotModal: !this.state.allrobotModal,
    });
  }

  _handleRefresh(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchRobotsIfNeeded());
  }

  render() {
    const { robots, id, loading, status, statusText, receivedAt } = this.props;
    return (
      <Card
        title="Activity Monitor for Robots"
        helpText="The card signifies the activity monitor for all the robots in the warehouse out of which you can highlight the ones relevant to you. To know more about one robot click View More."
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
        <SingleRobot robots={robots} />
        <Button
          size="medium"
          color="primary"
          onClick={this._handleallrobotsModal}
        >
          View all
        </Button>
        {' '}
        <Button color="primary" onClick={this._handleRefresh}>
          <RefreshImage height={14} width={14} /> Refresh Robots
        </Button>
        <Modal
          isOpen={this.state.allrobotModal}
          toggle={this._handleallrobotsModal}
        >
          <ModalHeader toggle={this._handleallrobotsModal}>
            Activity Monitor for all Robots in the warehouse.
          </ModalHeader>
          <ModalBody>
            <SingleRobotModal robots={robots} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handleallrobotsModal}>
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
  const data = state.get('robots');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    robots: data.get('data'),
    status: data.get('status'),
    statusText: data.get('statusText'),
  };
}

Robot.propTypes = {
  robots: PropTypes.any,
};

export default connect(mapStateToProps)(Robot);
