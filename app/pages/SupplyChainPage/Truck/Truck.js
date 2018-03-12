import React from 'react';

import Card from '../../../components/Card/Card';
import Progress from '../../../components/Progress/Progress';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import ModalHeader from '../../../components/Modal/ModalHeader';
import ModalFooter from '../../../components/Modal/ModalFooter';
import ModalBody from '../../../components/Modal/ModalBody';

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
          <h4>Time to reach warehouse for truck 1</h4>
          <Progress value="50" />
          <Button size="medium" color="secondary" onClick={this._handletruckinfoModal}>View more on Truck 1</Button>
        </div>
        <div>
          <h4>Time to reach warehouse for truck 2</h4>
          <Progress value="50" />
          <Button color="secondary">View more on Truck 1</Button>
        </div>
        <Button size="medium" color="primary">View all</Button>
        <Modal isOpen={this.state.truckModal} toggle={this._handletruckinfoModal}>
          <ModalHeader toggle={this._handletruckinfoModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handletruckinfoModal}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Truck.propTypes = {

};

export default Truck;
