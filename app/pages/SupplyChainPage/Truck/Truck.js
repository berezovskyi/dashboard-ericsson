import React from 'react';

import Card from '../../../components/Card/Card';
import Progress from '../../../components/Progress/Progress';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import ModalHeader from '../../../components/Modal/ModalHeader';
import ModalFooter from '../../../components/Modal/ModalFooter';
import ModalBody from '../../../components/Modal/ModalBody';

import styles from './Truck.css';

class Truck extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    return (
      <Card title="Trucks" helpText="The data relevant to the trucks">
        <div>
          <h4 className={styles.trucktitle}>Time to reach warehouse for truck 1</h4>
          <Progress value="50" />
          <Button size="medium" color="secondary" onClick={this._handletruckinfoModal}>View more on Truck 1</Button>
        </div>
        <Button size="medium" color="primary">View all</Button>
        <Modal isOpen={this.state.truckModal} toggle={this._handletruckinfoModal}>
          <ModalHeader toggle={this._handletruckinfoModal}>Warehouse - Truck 1</ModalHeader>
          <ModalBody>
            <div>
              <h4 className={styles.trucktitle}>Time to reach warehouse for truck 1</h4>
              <Progress value="50" />
            </div>
            <div>
              <h4 className={styles.truckdata}>72%</h4>
              <h6 className={styles.truckdatadescription}>Completed</h6>
            </div>
            <div>
              <h4 className={styles.truckdata}>72%</h4>
              <h6 className={styles.truckdatadescription}>Total Hours</h6>
              <h4 className={styles.truckdata}>2%</h4>
              <h6 className={styles.truckdatadescription}>Under Average</h6>
            </div>
            <div>
              <h4 className={styles.truckdata}>72%</h4>
              <h6 className={styles.truckdatadescription}>Sustainability</h6>
              <h4 className={styles.truckdata}>2%</h4>
              <h6 className={styles.truckdatadescription}>Above Average</h6>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handletruckinfoModal}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Truck.propTypes = {

};

export default Truck;
