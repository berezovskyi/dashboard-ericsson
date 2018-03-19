import React from 'react';
import styles from './Notes.css';

export default function NotesList({ notes }) {
  return (
    <ul className={styles.notesContainer}>
      {notes.valueSeq().map(note => (
        <li key={note.id}>
          <div className={styles.text}>{note.text}</div>
          <div className={styles.meta}>
            <span className={styles.author}>{note.author}</span> { ' | '}
            <span className={styles.timestamp}>{note.timestamp}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
