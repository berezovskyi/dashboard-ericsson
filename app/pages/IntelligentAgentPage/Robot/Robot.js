import React from 'react';
import { connect } from 'react-redux';
import className from 'classnames';
import Card from '../../../ui/Card/Card';
import Progress from '../../../ui/Progress/Progress';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import performanceIcon from '../../../shared/media/images/icons/performance.png';
import secpertaskIcon from '../../../shared/media/images/icons/secpertask.png';
import IncreaseIcon from '../../../shared/media/images/icons/increase.svg';
import DecreaseIcon from '../../../shared/media/images/icons/decrease.svg';

import styles from './Robot.css';
import SingleRobot from './SingleRobot';

class Robot extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handlerobotinfoModal = this._handlerobotinfoModal.bind(this);
    this.state = {
      robotModal: false,
    };
  }

  _handlerobotinfoModal() {
    this.setState({
      robotModal: !this.state.robotModal,
    });
  }

  render() {
    const { robot } = this.props;
    return (
      <Card title="Intelligent Agents" helpText="The data relevant to the robots">
        <SingleRobot robots={robot} />
        <Button size="medium" color="primary">View all</Button>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    robot: state.get('robot'),
  };
}

Robot.propTypes = {};

export default connect(mapStateToProps)(Robot);
