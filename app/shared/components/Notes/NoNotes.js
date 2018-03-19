import React from 'react';
import styles from './Notes.css';

export default function NoNotes() {
  return (
    <div className={styles.noNotesContainer}>
      <h4>No Notes so far</h4>
    </div>
  );
}
