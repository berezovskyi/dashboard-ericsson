import React from 'react';
import className from 'classnames';
import Progress from '../../../ui/Progress/Progress';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import sustainabilityIcon from '../../../shared/media/images/icons/sustainability.png';
import activityIcon from '../../../shared/media/images/icons/activity.png';
import IncreaseIcon from '../../../shared/media/images/icons/increase.svg';
import DecreaseIcon from '../../../shared/media/images/icons/decrease.svg';

import styles from './Truck.css';

class SingleTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truckModal: false,
    };
    this._handletruckinfoModal = this._handletruckinfoModal.bind(this);
  }

  _handletruckinfoModal() {
    this.setState({
      truckModal: !this.state.truckModal,
    });
  }

  render() {
    const { trucks } = this.props;

    const differenceClass = className(
      styles.modaldiff, styles.modalincrease
    );

    return (
      <div className={styles.singlecontainer}>
        {trucks.valueSeq().map(row => (
          <div key={row.id}>
            <div className={styles.row}>
              <h4 className={styles.title}>
                {row.name}{' - '}{row.id}{' - '}{row.to}{' from '}{row.from}
              </h4>
              <div className={styles.fiveSixth}>
                <Progress value={row.value} />
              </div>
              <div className={styles.oneSixth}>
                <span className={styles.text}>{row.value}{'% completed'}</span>
              </div>
            </div>
            <div className={styles.row}>
              <Button size="medium" color="secondary" onClick={this._handletruckinfoModal}>
                View more on {row.name}
              </Button>
            </div>
          </div>
        ))}
        <Modal
          isOpen={this.state.truckModal}
          toggle={this._handletruckinfoModal}
        >
          <ModalHeader toggle={this._handletruckinfoModal}>
            Warehouse - Truck 1
          </ModalHeader>
          <ModalBody>
            <div className={styles.modalprogress}>
              <h4 className={styles.progresstitle}>
                Time to reach warehouse for truck 1
              </h4>
              <Progress value={50} />
            </div>
            <div className={styles.row}>
              <div className={styles.oneHalf}>
                <h4 className={styles.modaltitle}>Sustainability</h4>
                <p className={styles.modaldescription}>
                  This is what the fuzz is about. This is some really cool description about the truck.
                </p>
                <div className={styles.modalbox}>
                  <img src={sustainabilityIcon} alt="The sustainability Index" width={64} />
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
                <h4 className={styles.modaltitle}>Total Active Hours</h4>
                <p className={styles.modaldescription}>
                  This is what the fuzz is about. This is some really cool description about the truck.
                </p>
                <div className={styles.modalbox}>
                  <img src={activityIcon} alt="The total hours spent." width={64} />
                  <h1 className={styles.modalboxtitle}>5h 30m</h1>
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
            <Button color="secondary" onClick={this._handletruckinfoModal}>
              Close
            </Button>
            {' '}
            <Button color="primary" onClick={this._handletruckinfoModal}>
              Update
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SingleTruck;
