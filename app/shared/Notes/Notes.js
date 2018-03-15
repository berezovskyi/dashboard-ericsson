import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalFooter from '../../components/Modal/ModalFooter';
import ModalBody from '../../components/Modal/ModalBody';

import styles from './Notes.css';

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
    const { id } = this.props;
    return (
      <Card title="Notes" helpText="Add Notes relevant to Supply Chain over here" id={id}>
        <div className={styles.noNotesContainer}>
          <h4>No Notes so far</h4>
        </div>
        <Button size="medium" color="primary" onClick={this._handlenotesModal}>Add Note</Button>
        <Modal isOpen={this.state.notesModal} toggle={this._handlenotesModal}>
          <ModalHeader toggle={this._handlenotesModal}>Modal title</ModalHeader>
          <ModalBody>
            <form>
              <label>
                Note
              </label>
              <textarea />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handlenotesModal}>Add</Button>{' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Notes.propTypes = {
  id: PropTypes.string,
};

export default Notes;
