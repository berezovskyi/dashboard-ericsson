import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRobot } from '../../../entities/robot/actions';

import Alert from '../../../ui/Alert/Alert';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';
import { Robot } from '../../../records';
import styles from './WareHouseMap.css';

import SafetyIcon from '../../../shared/media/images/icons/safety.svg';
import JourneyIcon from '../../../shared/media/images/icons/journey.svg';

class WarehouseModal extends Component {
  constructor(props) {
    super(props);
    this._handleUpdate = this._handleUpdate.bind(this);
  }

  componentDidMount() {
    const { isOpen } = this.props;
    this._handleUpdate(isOpen);
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props;
    if (this.props.isOpen !== nextProps.isOpen) {
      this._handleUpdate(nextProps.isOpen, id);
    }
  }

  _handleUpdate(isOpen, id) {
    const { dispatch } = this.props;
    if (isOpen) {
      dispatch(fetchRobot(id));
    }
  }

  diffContainer(diff) {
    if (diff) {
      return (
        <div>
          <h1>
            {`${diff.value}`}
          </h1>
        </div>
      );
    }
    return <span />;
  }

  render() {
    const { isOpen, handleClick, robot } = this.props;
    if (robot) {
      return (
        <Modal isOpen={isOpen} toggle={handleClick}>
          <ModalHeader toggle={handleClick}>
            More Info: {robot.name}
          </ModalHeader>
          <ModalBody>
            <div className={styles.modalprogress}>
              <h4 className={styles.progresstitle}>
                Journey Status : Active
              </h4>
              <div className={styles.row}>
                <div className={styles.oneFourth}>
                  <div className={styles.grade}>
                    <h4>Privacy Grade</h4>
                    <h1>B</h1>
                  </div>
                </div>
                <div className={styles.threeFourth}>
                  <Alert color="primary">
                    <p><strong>Name:</strong> {robot.name}</p>
                    <p><strong>Robot ID:</strong>{robot.id}</p>
                    <p>
                      <strong>Going to: </strong>
                      Line 1 - Y2
                    </p>
                    <p>
                      <strong>Coming from: </strong>
                      Line 3 - Y1
                    </p>
                  </Alert>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.oneHalf}>
                  <h4 className={styles.modaltitle}>Time to Completion</h4>
                  <p className={styles.modaldescription}>
                    The total time needed by
                    {' '}
                    {robot.name}
                    {' '}
                    to complete this task (also found in the list of Robots)
                  </p>
                  <div className={styles.modalbox}>
                    <JourneyIcon width={96} height={96} />
                    {this.diffContainer(robot.battery)}
                  </div>
                </div>
                <div className={styles.oneHalf}>
                  <h4 className={styles.modaltitle}>Danger Zone</h4>
                  <p className={styles.modaldescription}>
                    Danger Zone is the minimum distance from the robot that should be maintained for smooth functioning.
                  </p>
                  <div className={styles.modalbox}>
                    <SafetyIcon width={96} height={96} />
                    {this.diffContainer(robot.battery)}
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={handleClick}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      );
    }
  }
}

WarehouseModal.defaultProps = {
  robot: new Robot(),
};

function mapStateToProps(state) {
  const robots = state.get('robots');
  return {
    robot: robots.get('open'),
  };
}

export default connect(mapStateToProps)(WarehouseModal);
