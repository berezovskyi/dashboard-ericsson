import 'whatwg-fetch';
import { Note } from '../../../records';

export const REQUEST_ALL_NOTES = 'REQUEST_ALL_NOTES';
export const REQUEST_HIGHLIGHTED_NOTES = 'REQUEST_HIGHLIGHTED_NOTES';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_HIGHLIGHTED_NOTES = 'RECEIVE_HIGHLIGHTED_NOTES';
export const UPDATE_NOTES_HIGHLIGHT = 'UPDATE_NOTES_HIGHLIGHT';

/* 2 different kinds of actions: one for highlighted, one for all.  */

function requestNotes() {
  return {
    type: REQUEST_ALL_NOTES,
    payload: {
      loading: true,
    },
  };
}

function requesthighlightedNotes() {
  return {
    type: REQUEST_HIGHLIGHTED_NOTES,
    payload: {
      loading: true,
    },
  };
}

function receiveNotes(json) {
  return {
    type: RECEIVE_ALL_NOTES,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      notes: json.data.map(item => {
        return [
          item.id,
          new Note({
            id: item.id,
            text: item.text,
            timestamp: item.timestamp,
            author: item.author,
            type: item.type,
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

function receiveHighlightedNotes(json) {
  return {
    type: RECEIVE_HIGHLIGHTED_NOTES,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      notes: json.data.map(item => {
        return [
          item.id,
          new Note({
            id: item.id,
            text: item.text,
            timestamp: item.timestamp,
            author: item.author,
            type: item.type,
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

export function fetchNotes() {
  return dispatch => {
    dispatch(requestNotes());
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/notes',
    )
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)));
  };
}

export function fetchHighlightedNotes() {
  return dispatch => {
    dispatch(requesthighlightedNotes());
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/notes/highlighted',
    )
      .then(response => response.json())
      .then(json => dispatch(receiveHighlightedNotes(json)));
  };
}

function shouldFetchNotes(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

function shouldFetchHighlightedNotes(state) {
  const data = state.get('notes');
  if (!data.get('loading') && data.get('notes').size === 0) {
    return true;
  }
  return false;
}

export function fetchNotesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNotes(getState())) {
      return dispatch(fetchNotes());
    }
    return null;
  };
}

export function fetchHighlightedNotesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchHighlightedNotes(getState())) {
      return dispatch(fetchHighlightedNotes());
    }
    return null;
  };
}
