import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Alert from '../../../ui/Alert/Alert';
import Loading from '../../../ui/Loading/Loading';
import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import Form from '../../../ui/Form/Form';
import Label from '../../../ui/Form/Label';
import Textarea from '../../../ui/Form/Textarea';
import FormGroup from '../../../ui/Form/FormGroup';

import { fetchNotesIfNeeded } from '../../../entities/note/actions';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import styles from './Notes.css';
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

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNotesIfNeeded());
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
    const {
      id,
      type,
      name,
      notes,
      loading,
      status,
      statusText,
      receivedAt,
    } = this.props;
    const title = 'Highlighted Notes for ' + name;

    return (
      <Card
        title={title}
        helpText="Add Notes relevant to Supply Chain over here"
        id={id}
        date={receivedAt}
      >
        {loading ? <Loading /> : <div />}
        {status > 400 && !loading
          ? <Alert color="error">
              <p>
                Error: {status}<br />Status Text: {statusText}
              </p>
            </Alert>
          : <div />}
        <NotesList notes={notes} type={type} />
        <div className={styles.footer}>
          <Button
            size="medium"
            color="primary"
            onClick={this._handleallNotesModal}
          >
            View all Notes
          </Button>
          {' '}
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
          <ModalHeader toggle={this._handleaddNoteModal}>
            Add Notes to {name}
          </ModalHeader>
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
            <NotesListModal type={type} />
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
  const data = state.get('notes');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    notes: data.get('notes'),
    status: data.get('status'),
    statusText: data.get('statusText'),
  };
}

Notes.propTypes = {
  notes: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Notes);
