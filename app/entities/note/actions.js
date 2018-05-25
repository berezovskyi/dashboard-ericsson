import 'whatwg-fetch';
import { Note } from '../../records';
import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';

export const REQUEST_ALL_NOTES = 'REQUEST_ALL_NOTES';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const UPDATE_NOTES_HIGHLIGHT = 'UPDATE_NOTES_HIGHLIGHT';
export const FAILED_REQUEST_NOTES = 'FAILED_REQUEST_NOTES';

/* 2 different kinds of actions: one for highlighted, one for all.  */

function requestNotes() {
  return {
    type: REQUEST_ALL_NOTES,
    payload: {
      receivedAt: Date.now(),
      loading: true,
    },
  };
}

function receiveNotes(json) {
  return {
    type: RECEIVE_ALL_NOTES,
    payload: {
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
    return fetch(API_URL + 'notes')
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(json)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_NOTES, response)),
      );
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

export function fetchNotesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNotes(getState())) {
      return dispatch(fetchNotes());
    }
    return null;
  };
}
