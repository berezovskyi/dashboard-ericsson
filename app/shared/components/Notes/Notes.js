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

import NoNotes from './NoNotes';

class Notes extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handlenotesModal = this._handlenotesModal.bind(this);
    this.state = {
      notesModal: false,
      notes: [],
    };
  }

  componentWillMount() {
    const { type, notes } = this.props;
    const filterednotes = notes.filter(note => type === note.type);
    this.setState({
      notes: filterednotes,
    });
  }

  _handlenotesModal() {
    this.setState({
      notesModal: !this.state.notesModal,
    });
  }

  render() {
    const { id, type } = this.props;
    const { notes } = this.state;

    console.log(notes);
    return (
      <Card
        title="Notes"
        helpText="Add Notes relevant to Supply Chain over here"
        id={id}
      >
        <NoNotes />
        <Button size="medium" color="primary" onClick={this._handlenotesModal}>
          Add Note
        </Button>
        <Modal isOpen={this.state.notesModal} toggle={this._handlenotesModal}>
          <ModalHeader toggle={this._handlenotesModal}>All Notes</ModalHeader>
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
            <Button color="primary" onClick={this._handlenotesModal}>
              Add
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
};

export default connect(mapStateToProps)(Notes);
