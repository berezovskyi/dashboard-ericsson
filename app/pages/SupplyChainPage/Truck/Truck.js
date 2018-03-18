import React from 'react';
import { connect } from 'react-redux';
import className from 'classnames';
import Card from '../../../components/Card/Card';
import Progress from '../../../components/Progress/Progress';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import ModalHeader from '../../../components/Modal/ModalHeader';
import ModalFooter from '../../../components/Modal/ModalFooter';
import ModalBody from '../../../components/Modal/ModalBody';

import sustainabilityIcon from '../../../shared/media/images/icons/sustainability.png';
import activityIcon from '../../../shared/media/images/icons/activity.png';
import IncreaseIcon from '../../../shared/media/images/icons/increase.svg';
import DecreaseIcon from '../../../shared/media/images/icons/decrease.svg';

import styles from './Truck.css';

class Truck extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handletruckinfoModal = this._handletruckinfoModal.bind(this);
    this.state = {
      truckModal: false,
    };
  }

  _handletruckinfoModal() {
    this.setState({
      truckModal: !this.state.truckModal,
    });
  }

  render() {

    const differenceClass = className(
      styles.modaldiff, styles.modalincrease
    );
    return (
      <Card title="Trucks" helpText="The data relevant to the trucks">
        <div>
          <h4 className={styles.trucktitle}>
            Time to reach warehouse for truck 1
          </h4>
          <Progress value={50} />
          <Button
            size="medium"
            color="secondary"
            onClick={this._handletruckinfoModal}
          >
            View more on Truck 1
          </Button>
        </div>
        <Button size="medium" color="primary">View all</Button>
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
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    truck: state.get('truck'),
  };
}

Truck.propTypes = {};

export default connect(mapStateToProps)(Truck);
