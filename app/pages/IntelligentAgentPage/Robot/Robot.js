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
    const differenceClass = className(
      styles.modaldiff, styles.modalincrease
    );
    return (
      <Card title="Intelligent Agents" helpText="The data relevant to the robots">
        <div>
          <h4 className={styles.trucktitle}>
            Memory for Robot 1
          </h4>
          <Progress value={20} />
          <h4 className={styles.trucktitle}>
            Memory for Robot 2
          </h4>
          <Progress value={90} />
          <Button
            size="medium"
            color="secondary"
            onClick={this._handlerobotinfoModal}
          >
            View more on Robot 1
          </Button>
        </div>
        <Button size="medium" color="primary">View all</Button>
        <Modal
          isOpen={this.state.robotModal}
          toggle={this._handlerobotinfoModal}
        >
          <ModalHeader toggle={this._handlerobotinfoModal}>
            Warehouse - Truck 1
          </ModalHeader>
          <ModalBody>
            <div className={styles.modalprogress}>
              <h4 className={styles.progresstitle}>
                Operational Memory for Robot 1
              </h4>
              <Progress value={50} />
            </div>
            <div className={styles.row}>
              <div className={styles.oneHalf}>
                <h4 className={styles.modaltitle}>Performance</h4>
                <p className={styles.modaldescription}>
                  This is what the fuzz is about. This is some really cool description about the robot.
                </p>
                <div className={styles.modalbox}>
                  <img src={performanceIcon} alt="The sustainability Index" width={64} />
                  <h1 className={styles.modalboxtitle}>56%</h1>
                  <p>
                    <span className={differenceClass}>
                      <IncreaseIcon />2%
                    </span>
                    <span className={styles.modaltime}>14:45</span>
                  </p>
                </div>
              </div>
              <div className={styles.oneHalf}>
                <h4 className={styles.modaltitle}>Sec / task</h4>
                <p className={styles.modaldescription}>
                  This is what the fuzz is about. This is some really cool description about the robot.
                </p>
                <div className={styles.modalbox}>
                  <img src={secpertaskIcon} alt="Performance" width={90} />
                  <h1 className={styles.modalboxtitle}>6s</h1>
                  <p>
                    <span className={differenceClass}>
                      <DecreaseIcon />2%
                    </span>
                    <span className={styles.modaltime}>14:45</span>
                  </p>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this._handlerobotinfoModal}>
              Close
            </Button>
            {' '}
            <Button color="primary" onClick={this._handlerobotinfoModal}>
              Update
            </Button>
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    truck: state.get('robot'),
  };
}

Robot.propTypes = {};

export default connect(mapStateToProps)(Robot);
