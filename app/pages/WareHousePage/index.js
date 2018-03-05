import React from 'react';

import Button from '../../components/Button';
import Popover from '../../components/Popover/Popover';
import PopoverBody from '../../components/Popover/PopoverBody';

import Modal from '../../components/Modal/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalBody from '../../components/Modal/ModalBody';
import ModalFooter from '../../components/Modal/ModalFooter';


class WareHousePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.togglePopover = this.togglePopover.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      popoverOpen: false,
      modalOpen: false,
    };
  }

  togglePopover() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.togglePopover}>
          Launch Popover
        </Button>
        <Popover
          placement="left"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.togglePopover}
        >
          <PopoverBody>
            <p>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
          </PopoverBody>
        </Popover>
        <Button id="Modal1" onClick={this.toggleModal}>Please open the Modal</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WareHousePage;
