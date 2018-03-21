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
        },
      });
    }
    return;
  }

  _handlerobotinfoModal(data) {
    this.setState({
      robotModal: !this.state.robotModal,
    });
    this.setModal(data);
  }

  render() {
    const { robots } = this.props;
    const {
      name,
      secpertask,
      value,
      performance,
      id,
    } = this.state.data;

    console.log(robots);

    const differenceClass = className(styles.modaldiff, styles.modalincrease);

    return (
      <div className={styles.singlecontainer}>
        {robots.valueSeq().map(row => (
          <div key={row.id}>
            <div className={styles.row}>
              <h4 className={styles.title}>
                {'Memory for '}{row.name}
              </h4>
              <div className={styles.fiveSixth}>
                <Progress value={row.value} />
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
        ))}
        <Modal
          isOpen={this.state.robotModal}
          toggle={this._handlerobotinfoModal}
        >
          <ModalHeader toggle={this._handlerobotinfoModal}>
            {name}
          </ModalHeader>
          <ModalBody>
            <div className={styles.modalprogress}>
              <h4 className={styles.progresstitle}>
                {'Memory for '}{name}{' - '}{id}
              </h4>
              <Progress value={value} />
            </div>
            <div className={styles.row}>
              <div className={styles.oneHalf}>
                <h4 className={styles.modaltitle}>Performance</h4>
                <p className={styles.modaldescription}>
                  This is what the fuzz is about. This is some really cool description about the truck.
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
                  <p>
                    <span className={differenceClass}>
                      <IncreaseIcon />{performance.diff}{'%'}
                    </span>
                    <span className={styles.modaltime}>14:45</span>
                  </p>
                </div>
              </div>
              <div className={styles.oneHalf}>
                <h4 className={styles.modaltitle}>Total Active Hours</h4>
                <p className={styles.modaldescription}>
                  This is what the fuzz is about. This is some really cool description about the truck.
                </p>
                <div className={styles.modalbox}>
                  <img
                    src={secpertaskIcon}
                    alt="Seconds spent per task"
                    width={90}
                  />
                  <h1 className={styles.modalboxtitle}>{secpertask.time}</h1>
                  <p>
                    <span className={differenceClass}>
                      <DecreaseIcon />{secpertask.diff}{'%'}
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
      </div>
    );
  }
}

export default SingleRobot;
