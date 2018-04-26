import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import Loading from '../../../ui/Loading/Loading';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import SingleRobot from './SingleRobot';
import SingleRobotModal from './SingleRobotModal';
import { fetchHighlightedRobotsIfNeeded } from './actions';

class Robot extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleallrobotsModal = this._handleallrobotsModal.bind(this);
    this.state = {
      allrobotModal: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHighlightedRobotsIfNeeded());
  }

  _handleallrobotsModal() {
    this.setState({
      allrobotModal: !this.state.allrobotModal,
    });
  }

  render() {
    const { robots, id, loading } = this.props;
    if (loading) {
      return (
        <Card
          title="Intelligent Agents"
          helpText="The data relevant to the robots"
          id={id}
        >
          <Loading />
        </Card>
      );
    }
    return (
      <Card
        title="Intelligent Agents"
        helpText="The data relevant to the robots"
        id={id}
      >
        <SingleRobot robots={robots} />
        <Button
          size="medium"
          color="primary"
          onClick={this._handleallrobotsModal}
        >
          View all
        </Button>
        <Modal
          isOpen={this.state.allrobotModal}
          toggle={this._handleallrobotsModal}
        >
          <ModalHeader toggle={this._handleallrobotsModal}>
            All the available Robots
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

Robot.propTypes = {
  id: PropTypes.string,
};

function mapStateToProps(state) {
  const data = state.get('robots');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    robots: data.get('robots'),
  };
}

Robot.propTypes = {
  robots: PropTypes.any,
};

export default connect(mapStateToProps)(Robot);
