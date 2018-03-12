import React from 'react';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalFooter from '../../components/Modal/ModalFooter';
import ModalBody from '../../components/Modal/ModalBody';

class Notes extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handlenotesModal = this._handlenotesModal.bind(this);
    this.state = {
      notesModal: false,
    };
  }

  _handlenotesModal() {
    this.setState({
      notesModal: !this.state.notesModal,
    });
  }

  render() {
    return (
      <Card title="Notes" helpText="Add Notes relevant to Supply Chain over here">
        <div>
          <h4>No Notes so far</h4>
        </div>
        <Button size="medium" color="primary" onClick={this._handlenotesModal}>Add Note</Button>
        <Modal isOpen={this.state.notesModal} toggle={this._handlenotesModal}>
          <ModalHeader toggle={this._handlenotesModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handlenotesModal}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Notes.propTypes = {

};

export default Notes;
