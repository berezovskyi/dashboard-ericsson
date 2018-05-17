import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import Progress from '../../../ui/Progress/Progress';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';
import Alert from '../../../ui/Alert/Alert';

import performanceIcon
  from '../../../shared/media/images/icons/performance.png';
import lowBatteryIcon from '../../../shared/media/images/icons/lowbattery.png';
import highBatteryIcon
  from '../../../shared/media/images/icons/fullbattery.png';
import midBatteryIcon
  from '../../../shared/media/images/icons/averagebattery.png';
import DecreaseIcon from '../../../shared/media/images/icons/decrease.svg';
import IncreaseIcon from '../../../shared/media/images/icons/increase.svg';

import { Robot } from '../../../records';

import styles from './Battery.css';

class SingleBattery extends React.Component {
  constructor() {
    super();
    this.state = {
      batteryModal: false,
      data: Robot({}),
    };
    this._handlebatteryinfoModal = this._handlebatteryinfoModal.bind(this);
  }

  setModal(data) {
    if (!this.state.batteryModal) {
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
          highlightedBattery: data.get('highlightedBattery'),
          battery: data.get('battery'),
        },
      });
    }
  }

  _handlebatteryinfoModal(data) {
    this.setState({
      batteryModal: !this.state.batteryModal,
    });
    this.setModal(data);
  }

  batteryContainer(battery) {
    switch (battery.status) {
      case 'low':
        return <img src={lowBatteryIcon} width={28} />;
      case 'high':
        return <img src={highBatteryIcon} width={28} />;
      default:
        return <img src={midBatteryIcon} width={28} />;
    }
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
    const { id, name, value, from, to, battery, performance } = this.state.data;
    return robots.valueSeq().map(row => {
      if (row.highlightedBattery) {
        return (
          <div className={styles.singlecontainer} key={row.id}>
            <div>
              <div className={styles.row}>
                <h4 className={styles.title}>
                  {row.name}
                </h4>
                <div className={styles.fiveSixth}>
                  <Progress value={row.timetoreturn} reverse />
                </div>
                <div className={styles.oneSixth}>
                  <span className={styles.text}>
                    {row.timetoreturn}{'% consumed'}
                  </span>
                </div>
              </div>
              <div className={styles.row}>
                <Button
                  size="medium"
                  color="secondary"
                  onClick={() => this._handlebatteryinfoModal(row)}
                >
                  View more on {row.name}
                </Button>
              </div>
            </div>
            <Modal
              isOpen={this.state.batteryModal}
              toggle={this._handlebatteryinfoModal}
            >
              <ModalHeader toggle={this._handlebatteryinfoModal}>
                Battery Details
              </ModalHeader>
              <ModalBody>
                <div className={styles.modalprogress}>
                  <h3 className={styles.progresstitle}>
                    Robot Info : {name}
                  </h3>
                  <Alert color="primary">
                    <p>
                      <strong>Name: </strong><span>{name}</span>
                    </p>
                    <p>
                      <strong>Robot ID: </strong><span>{id}</span>
                    </p>
                    <p>
                      <strong>From: </strong><span>{from.name}</span>
                    </p>
                    <p>
                      <strong>To: </strong><span>{to.name}</span>
                    </p>
                  </Alert>
                  <h4 className={styles.progresstitle}>
                    Time to Return
                  </h4>
                  <div className={styles.row}>
                    <div className={styles.fiveSixth}>
                      <Progress value={value} />
                    </div>
                    <div className={styles.oneSixth}>
                      <span className={styles.text}>
                        {value}{' min left'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.oneHalf}>
                    <h4 className={styles.modaltitle}>Battery Remaining</h4>
                    <p className={styles.modaldescription}>
                      Signifies the power remaining in the robot. If the battery is low, it is highly recommended to send the robot to the charging station.
                    </p>
                    <div className={styles.modalbox}>
                      {this.batteryContainer(battery)}
                      <h1 className={styles.modalboxtitle}>
                        {battery.value}
                      </h1>
                      <p>
                        {this.diffContainer(battery.diff)}
                      </p>
                    </div>
                  </div>
                  <div className={styles.oneHalf}>
                    <h4 className={styles.modaltitle}>Performance</h4>
                    <p className={styles.modaldescription}>
                      Signifies how performant the robot it compared to it's full potential. More performance % hogs in more memory and battery power.
                    </p>
                    <div className={styles.modalbox}>
                      <img
                        src={performanceIcon}
                        alt="The performance index"
                        width={64}
                      />
                      <h1 className={styles.modalboxtitle}>
                        {performance.value}{'%'}
                      </h1>
                      <p>
                        {this.diffContainer(performance.diff)}
                      </p>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  onClick={this._handlebatteryinfoModal}
                >
                  Close
                </Button>
                <Button color="primary" onClick={this._handlebatteryinfoModal}>
                  Update
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
      return null;
    });
  }
}

SingleBattery.proptypes = {
  total: PropTypes.number,
  battery: PropTypes.any,
};

export default SingleBattery;
