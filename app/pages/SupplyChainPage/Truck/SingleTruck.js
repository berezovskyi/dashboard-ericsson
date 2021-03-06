import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import Progress from '../../../ui/Progress/Progress';
import Button from '../../../ui/Button/Button';
import Alert from '../../../ui/Alert/Alert';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import sustainabilityIcon
  from '../../../shared/media/images/icons/sustainability.png';
import activityIcon from '../../../shared/media/images/icons/activity.png';
import IncreaseIcon from '../../../shared/media/images/icons/increase.svg';
import DecreaseIcon from '../../../shared/media/images/icons/decrease.svg';
import styles from './Truck.css';
import { Truck } from '../../../records';
import Tooltip from '../../../ui/Tooltip/Tooltip';

class SingleTruck extends Component {
  render() {
    const { trucks } = this.props;

    return trucks.valueSeq().map(row => {
      if (row.highlighted) {
        return <SingleTruckItem row={row} key={row.id} />;
      }
      return <span key={row.id} />;
    });
  }
}

class SingleTruckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truckModal: false,
      tooltipOpen: false,
      data: Truck({}),
    };
    this._handletruckinfoModal = this._handletruckinfoModal.bind(this);
    this._handleTooltip = this._handleTooltip.bind(this);
  }

  setModal(data) {
    if (!this.state.truckModal) {
      this.setState({
        data: {
          value: data.get('value'),
          id: data.get('id'),
          name: data.get('name'),
          to: data.get('to'),
          from: data.get('from'),
          activity: data.get('activity'),
          sustainability: data.get('sustainability'),
          highlighted: data.get('highlighted'),
        },
      });
    }
    return;
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

  _handletruckinfoModal(data) {
    this.setState({
      truckModal: !this.state.truckModal,
    });
    this.setModal(data);
  }

  _handleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    const {
      name,
      value,
      id,
      to,
      from,
      activity,
      sustainability,
    } = this.state.data;

    const { row } = this.props;
    return (
      <div className={styles.singlecontainer}>
        <div>
          <div className={styles.row}>
            <h4 className={styles.title}>
              <span id={`Tooltip-${row.id}`} className={styles.truckname}>{row.name}</span>
              <Tooltip
                target={`Tooltip-${row.id}`}
                isOpen={this.state.tooltipOpen}
                placement="right"
                autohide={false}
                toggle={this._handleTooltip}
              >
                {' Going to '}{row.to.name}{' from '}{row.from.name}
              </Tooltip>
            </h4>
            <div className={styles.fiveSixth}>
              <Progress value={row.value} />
            </div>
            <div className={styles.oneSixth}>
              <span className={styles.text}>
                {row.value}{'% completed'}
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <Button
              size="medium"
              color="secondary"
              onClick={() => this._handletruckinfoModal(row)}
            >
              View more on {row.name}
            </Button>
          </div>
        </div>
        <Modal
          isOpen={this.state.truckModal}
          toggle={this._handletruckinfoModal}
        >
          <ModalHeader toggle={this._handletruckinfoModal}>
            More Info: {name}
          </ModalHeader>
          <ModalBody>
            <div className={styles.modalprogress}>
              <Alert color="primary">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Truck ID:</strong> {id}</p>
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
                Journey Status
              </h4>
              <div className={styles.row}>
                <div className={styles.fourFifth}>
                  <Progress value={value} />
                </div>
                <div className={styles.oneFifth}>
                  <span className={styles.text}>
                    {value}{'% completed'}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.oneHalf}>
                <h4 className={styles.modaltitle}>Sustainability</h4>
                <p className={styles.modaldescription}>
                  The sustainability index. This updates each time the truck completes a journey.
                </p>
                <div className={styles.modalbox}>
                  <img
                    src={sustainabilityIcon}
                    alt="The sustainability Index"
                    width={64}
                  />
                  <h1 className={styles.modalboxtitle}>
                    {sustainability.value}{'%'}
                  </h1>
                  {this.diffContainer(sustainability.diff)}
                </div>
              </div>
              <div className={styles.oneHalf}>
                <h4 className={styles.modaltitle}>Total Active Hours</h4>
                <p className={styles.modaldescription}>
                  Total continuous activity time for this truck. This updates each time the server updates.
                </p>
                <div className={styles.modalbox}>
                  <img
                    src={activityIcon}
                    alt="The total hours spent."
                    width={64}
                  />
                  <h1 className={styles.modalboxtitle}>
                    {activity.time}
                  </h1>
                  {this.diffContainer(activity.diff)}
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this._handletruckinfoModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

SingleTruck.proptypes = {
  total: PropTypes.number,
  trucks: PropTypes.any,
};
export default SingleTruck;
