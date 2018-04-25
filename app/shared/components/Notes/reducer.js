/*
*
* Notes Reducer
*
*/

import { Map } from 'immutable';

import {
  UPDATE_NOTES_HIGHLIGHT,
  REQUEST_ALL_NOTES,
  RECEIVE_ALL_NOTES,
  REQUEST_HIGHLIGHTED_NOTES,
  RECEIVE_HIGHLIGHTED_NOTES,

} from './actions';

const INITIAL_STATE = new Map({
  loading: false,
  receivedAt: null,
  notes: new Map(),
});

export default function notesReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case REQUEST_ALL_NOTES:
      return state.setIn(['loading'], payload.loading);

    case REQUEST_HIGHLIGHTED_NOTES:
      return state.setIn(['loading'], payload.loading);

    case RECEIVE_ALL_NOTES:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['notes'], data =>
          data.mergeDeep(payload.notes),
        );

    case RECEIVE_HIGHLIGHTED_NOTES:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['notes'], data =>
          data.mergeDeep(payload.notes),
        );

    case UPDATE_NOTES_HIGHLIGHT:
      return state.setIn(
        ['notes', payload.id, 'highlighted'],
        payload.highlighted,
      );
    default:
      return state;
  }
}
