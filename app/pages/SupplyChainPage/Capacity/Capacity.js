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
        <Button size="medium" color="primary" onClick={this._handlealltrucksModal}>View all</Button>
        <Modal isOpen={this.state.capacityModal} toggle={this._handlealltrucksModal}>
          <ModalHeader toggle={this._handlealltrucksModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handlealltrucksModal}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Capacity.propTypes = {};

export default Capacity;
