import React from 'react';
import className from 'classnames';
import Progress from '../../../ui/Progress/Progress';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import performanceIcon
  from '../../../shared/media/images/icons/performance.png';
import secpertaskIcon from '../../../shared/media/images/icons/secpertask.png';
import IncreaseIcon from '../../../shared/media/images/icons/increase.svg';
import DecreaseIcon from '../../../shared/media/images/icons/decrease.svg';

import { Robot } from '../../../records';

import styles from './Robot.css';
import Alert from '../../../ui/Alert/Alert';

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robotModal: false,
      data: Robot({}),
    };
    this._handlerobotinfoModal = this._handlerobotinfoModal.bind(this);
  }

  setModal(data) {
    if (!this.state.robotModal) {
      this.setState({
        data: {
          value: data.get('value'),
          id: data.get('id'),
          name: data.get('name'),
          to: data.get('to'),
          from: data.get('from'),
          performance: data.get('performance'),
          secpertask: data.get('secpertask'),
          timetoreturn: data.get('timetoreturn'),
          highlightedRobot: data.get('highlightedRobot'),
        },
      });
    }
  }

  _handlerobotinfoModal(data) {
    this.setState({
      robotModal: !this.state.robotModal,
    });

    this.setModal(data);
  }

  diffContainer(diff) {
    let differenceClass;
    if (diff > 0) {
      differenceClass = className(styles.modaldiff, styles.modalincrease);
      return (
        <p>
          <span className={differenceClass}>
            <IncreaseIcon />
            {`${diff} %`}
          </span>
          <span className={styles.diffdetail}>compared to overall average</span>
        </p>
      );
    }
    differenceClass = className(styles.modaldiff, styles.modaldecrease);
    return (
      <p>
        <span className={differenceClass}>
          <DecreaseIcon />{`${Math.abs(diff)} %`}
        </span>
        <span className={styles.diffdetail}>compared to overall average</span>
      </p>
    );
  }

  render() {
    const { robots } = this.props;
    const {
      id,
      value,
      to,
      from,
      performance,
      secpertask,
      name,
    } = this.state.data;

    return robots.valueSeq().map(row => {
      if (row.highlightedRobot) {
        return (
          <div className={styles.singlecontainer} key={row.id}>
            <div>
              <div className={styles.row}>
                <h4 className={styles.title}>
                  {'Memory for '}{row.name}
                </h4>
                <div className={styles.fiveSixth}>
                  <Progress value={row.value} reverse />
                </div>
                <div className={styles.oneSixth}>
                  <span className={styles.text}>{row.value}{'% over'}</span>
                </div>
              </div>
              <div className={styles.row}>
                <Button
                  size="medium"
                  color="secondary"
                  onClick={() => this._handlerobotinfoModal(row)}
                >
                  View more on {row.name}
                </Button>
              </div>
            </div>
            <Modal
              isOpen={this.state.robotModal}
              toggle={this._handlerobotinfoModal}
            >
              <ModalHeader toggle={this._handlerobotinfoModal}>
                More Info: {name}
              </ModalHeader>
              <ModalBody>
                <div className={styles.modalprogress}>
                  <Alert color="primary">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Robot ID:</strong> {id}</p>
                    <p>
                      <strong>Going to: </strong>
                      {to.name}
                      {' ('}
                      {to.id}
                      {') '}
                    </p>
                    <p>
                      <strong>Coming from: </strong>
                      {from.name}
                      {' ('}
                      {from.id}
                      {') '}
                    </p>
                  </Alert>
                  <h4 className={styles.progresstitle}>
                    Current Activity
                  </h4>
                  <div className={styles.fourFifth}>
                    <Progress value={value} reverse />
                  </div>
                  <div className={styles.oneFifth}>
                    <span className={styles.text}>
                      {value}{'% over'}
                    </span>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.oneHalf}>
                    <h4 className={styles.modaltitle}>Performance</h4>
                    <p className={styles.modaldescription}>
                      Signifies how performant the robot it compared to it's full potential. More performance % hogs in more memory and battery power.
                    </p>
                    <div className={styles.modalbox}>
                      <img
                        src={performanceIcon}
                        alt="The Performance Index"
                        width={64}
                      />
                      <h1 className={styles.modalboxtitle}>
                        {performance.value}{'%'}
                      </h1>
                      {this.diffContainer(performance.diff)}
                    </div>
                  </div>
                  <div className={styles.oneHalf}>
                    <h4 className={styles.modaltitle}>Total Active Hours</h4>
                    <p className={styles.modaldescription}>
                      Signifies how long has been the robot working continuously. The longer the robot works, the less efficient it is.
                    </p>
                    <div className={styles.modalbox}>
                      <img
                        src={secpertaskIcon}
                        alt="Seconds spent per task"
                        width={90}
                      />
                      <h1 className={styles.modalboxtitle}>
                        {secpertask.value}{'h'}
                      </h1>
                      {this.diffContainer(secpertask.diff)}
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
          </div>
        );
      }
    });
  }
}

export default SingleRobot;
