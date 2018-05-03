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

import { Battery } from '../../../records';

import styles from './Battery.css';

class SingleBattery extends React.Component {
  constructor() {
    super();
    this.state = {
      batteryModal: false,
      data: Battery({}),
    };
    this._handlebatteryinfoModal = this._handlebatteryinfoModal.bind(this);
  }

  setModal(data) {
    if (!this.state.batteryModal) {
      this.setState({
        data: {
          value: data.get('timetoreturn'),
          id: data.get('id'),
          name: data.get('name'),
          to: data.get('to'),
          from: data.get('from'),
          performance: data.get('performance'),
          batterystatus: data.get('batterystatus'),
          total: data.get('total'),
        },
      });
    }
    return;
  }

  _handlebatteryinfoModal(data) {
    this.setState({
      batteryModal: !this.state.batteryModal,
    });
    this.setModal(data);
  }

  batteryContainer(data) {
    switch (data.status) {
      case 'low':
        return <img src={lowBatteryIcon} width={44} />;
      case 'high':
        return <img src={highBatteryIcon} width={44} />;
      default:
        return <img src={midBatteryIcon} width={44} />;
    }
  }

  diffContainer(diff) {
    let differenceClass;
    if (diff > 0) {
      differenceClass = className(styles.modaldiff, styles.modalincrease);
      return (
        <span className={differenceClass}>
          <IncreaseIcon />
          {`${diff} %`}
        </span>
      );
    }
    differenceClass = className(styles.modaldiff, styles.modaldecrease);
    return (
      <span className={differenceClass}>
        <DecreaseIcon />{`${Math.abs(diff)} %`}
      </span>
    );
  }

  render() {
    const { battery } = this.props;

    console.log(battery);

    const {
      value,
      id,
      name,
      to,
      from,
      performance,
      total,
      batterystatus,
    } = this.state.data;

    return battery.valueSeq().map(row => {
      if (row.highlighted) {
        return (
          <div className={styles.singlecontainer} key={row.id}>
            <div>
              <div className={styles.row}>
                <h4 className={styles.title}>
                  {row.name}
                </h4>
                <div className={styles.fiveSixth}>
                  <Progress value={row.timetoreturn} />
                </div>
                <div className={styles.oneSixth}>
                  <span className={styles.text}>
                    {row.timetoreturn}{' min left'}
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
                    Robot Info
                  </h3>
                  <Alert color="primary">
                    <p>
                      <strong>Name: </strong><span>{name}</span>
                    </p>
                    <p>
                      <strong>ID: </strong><span>{id}</span>
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
                      This is what the fuzz is about. This is some really cool description about the battery.
                    </p>
                    <div className={styles.modalbox}>
                      {this.batteryContainer(batterystatus)}
                      <h1 className={styles.modalboxtitle}>
                        {batterystatus.value}{'%'}
                      </h1>
                    </div>
                  </div>
                  <div className={styles.oneHalf}>
                    <h4 className={styles.modaltitle}>Performance</h4>
                    <p className={styles.modaldescription}>
                      This is what the fuzz is about. This is some really cool description about the truck.
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
                        {this.diffContainer(total.diff)}
                        <span className={styles.modaltime}>14:45</span>
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
                {' '}
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
