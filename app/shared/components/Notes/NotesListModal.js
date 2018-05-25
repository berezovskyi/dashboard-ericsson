import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from '../../../ui/Form/Checkbox';
import styles from './Notes.css';
import {fetchNotesIfNeeded, UPDATE_NOTES_HIGHLIGHT} from '../../../entities/note/actions';

class NotesListModal extends Component {
  constructor(props) {
    super(props);
    this._handlehighlight = this._handlehighlight.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNotesIfNeeded());
  }

  _handlehighlight(data) {
    const { dispatch } = this.props;
    dispatch({
      type: UPDATE_NOTES_HIGHLIGHT,
      payload: {
        highlighted: !data.highlighted,
        id: data.id,
      }
    });
  }

  render() {
    const { notes, type } = this.props;
    console.log(notes);
    return (
      <ul className={styles.notesContainer}>
        {notes.valueSeq().map(note => {
          if (note.type === type) {
            return (
              <li key={note.id}>
                <div className={styles.text}>{note.text}</div>
                <div className={styles.meta}>
                  <span className={styles.author}>{note.author}</span> {' | '}
                  <span className={styles.timestamp}>{note.timestamp}</span>
                </div>
                <Checkbox
                  className={styles.notescheckbox}
                  id={note.id}
                  checked={note.highlighted}
                  name="Highlight Entity"
                  onChange={() => this._handlehighlight(note)}
                />
              </li>
            );
          }
          return null;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const data = state.get('notes');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    notes: data.get('notes'),
  };
}

export default connect(mapStateToProps)(NotesListModal);
