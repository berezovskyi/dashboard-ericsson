import React from 'react';

import Card from '../../../components/Card/Card';
import Progress from '../../../components/Progress/Progress';
import Button from '../../../components/Button/Button';

import Modal from '../../../components/Modal/Modal';
import ModalHeader from '../../../components/Modal/ModalHeader';
import ModalFooter from '../../../components/Modal/ModalFooter';
import ModalBody from '../../../components/Modal/ModalBody';

import styles from './Capacity.css';

class Capacity extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handlealltrucksModal = this._handlealltrucksModal.bind(this);
    this.state = {
      capacityModal: false,
    };
  }

  _handlealltrucksModal() {
    this.setState({
      capacityModal: !this.state.capacityModal,
    });
  }

  render() {
    const { id } = this.props;
    return (
      <Card
        title="Capacity"
        helpText="This explains the meaning of this section."
        id={id}
      >
        <div>
          <h4 className={styles.capacitytitle}>Warehouse</h4>
          <Progress value="50" />
        </div>
        <div>
          <h4 className={styles.capacitytitle}>Retailer 1</h4>
          <Progress value="50" />
        </div>
        <div>
          <h4 className={styles.capacitytitle}>Retailer 2</h4>
          <Progress value="60" />
        </div>
        <Button
          size="medium"
          color="primary"
          onClick={this._handlealltrucksModal}
        >
          View all
        </Button>
        <Modal
          isOpen={this.state.capacityModal}
          toggle={this._handlealltrucksModal}
        >
          <ModalHeader toggle={this._handlealltrucksModal}>
            Capacity of all Trucks and Warehouses
          </ModalHeader>
          <ModalBody>
            <div>
              <h4 className={styles.capacitytitle}>Warehouse</h4>
              <Progress value="50" />
            </div>
            <div>
              <h4 className={styles.capacitytitle}>Truck 1</h4>
              <Progress value="24" />
            </div>
            <div>
              <h4 className={styles.capacitytitle}>Truck 2</h4>
              <Progress value="7" />
            </div>
            <div>
              <h4 className={styles.capacitytitle}>Truck 3</h4>
              <Progress value="92" />
            </div>
            <div>
              <h4 className={styles.capacitytitle}>Truck 4</h4>
              <Progress value="85" />
            </div>
            <div>
              <h4 className={styles.capacitytitle}>Truck 5</h4>
              <Progress value="100" />
            </div>
            <div>
              <h4 className={styles.capacitytitle}>Truck 6</h4>
              <Progress value="70" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handlealltrucksModal}>
              Close
            </Button>
            {' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Capacity.propTypes = {};

export default Capacity;
