import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import Form from '../../../ui/Form/Form';
import Label from '../../../ui/Form/Label';
import Textarea from '../../../ui/Form/Textarea';
import FormGroup from '../../../ui/Form/FormGroup';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import styles from './Notes.css';
import NoNotes from './NoNotes';
import NotesList from './NotesList';
import NotesListModal from './NotesListModal';

class Notes extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleaddNoteModal = this._handleaddNoteModal.bind(this);
    this._handleallNotesModal = this._handleallNotesModal.bind(this);
    this.state = {
      addnotesModal: false,
      allnotesModal: false,
    };
  }

  _handleaddNoteModal() {
    this.setState({
      addnotesModal: !this.state.addnotesModal,
      allnotesModal: false,
    });
  }

  _handleallNotesModal() {
    this.setState({
      addnotesModal: false,
      allnotesModal: !this.state.allnotesModal,
    });
  }

  render() {
    const { id, type, name, notes } = this.props;
    const title = 'Highlighted Notes for ' + name;

    return (
      <Card
        title={title}
        helpText="Add Notes relevant to Supply Chain over here"
        id={id}
      >
        {notes.size > 0 ? <NotesList notes={notes} type={type} /> : <NoNotes />}
        <div className={styles.footer}>
          {notes.size > 0
            ? <Button size="medium" color="primary" onClick={this._handleallNotesModal}>
                View all Notes
              </Button>
            : null}

          <Button
            size="medium"
            color="secondary"
            onClick={this._handleaddNoteModal}
          >
            Add Note
          </Button>
        </div>
        <Modal
          isOpen={this.state.addnotesModal}
          toggle={this._handleaddNoteModal}
        >
          <ModalHeader toggle={this._handleaddNoteModal}>Add Notes to {name}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>
                  Add Note
                </Label>
                <Textarea />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handleaddNoteModal}>
              Add
            </Button>
            {' '}
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.allnotesModal}
          toggle={this._handleallNotesModal}
        >
          <ModalHeader toggle={this._handleallNotesModal}>
            All Notes for {name}
          </ModalHeader>
          <ModalBody>
            <NotesListModal notes={notes} type={type} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handleallNotesModal}>
              Close
            </Button>
            {' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.get('notes'),
  };
}

Notes.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Notes);
