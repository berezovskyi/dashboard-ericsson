import React, { Component } from 'react';
import styles from './Notes.css';

class NotesList extends Component {
  render() {
    const { notes, type } = this.props;
    return (
      <ul className={styles.notesContainer}>
        {notes.valueSeq().map(note => {
          if (note.type === type) {
            if (note.highlighted) {
              return (
                <li key={note.id}>
                  <div className={styles.text}>{note.text}</div>
                  <div className={styles.meta}>
                    <span className={styles.author}>{note.author}</span> {' | '}
                    <span className={styles.timestamp}>{note.timestamp}</span>
                  </div>
                </li>
              );
            }
          }
        })}
      </ul>
    );
  }
}

export default NotesList;
