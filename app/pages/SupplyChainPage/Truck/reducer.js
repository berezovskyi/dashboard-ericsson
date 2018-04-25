/*
*
* TruckReducer
*
*/

import { Map } from 'immutable';
import {
  UPDATE_TRUCKS_HIGHLIGHT,
  REQUEST_ALL_TRUCKS,
  REQUEST_HIGHLIGHTED_TRUCKS,
  RECEIVE_HIGHLIGHTED_TRUCKS,
  RECEIVE_ALL_TRUCKS,
} from './actions';

const INITIAL_STATE = new Map({
  loading: false,
  receivedAt: null,
  trucks: new Map(),
});

export default function truckReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case UPDATE_TRUCKS_HIGHLIGHT:
      return state.setIn(
        ['trucks', payload.id, 'highlighted'],
        payload.highlighted,
      );
    case REQUEST_ALL_TRUCKS:
      return state.setIn(['loading'], payload.loading);

    case REQUEST_HIGHLIGHTED_TRUCKS:
      return state.setIn(['loading'], payload.loading);

    case RECEIVE_HIGHLIGHTED_TRUCKS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['trucks'], data => data.mergeDeep(payload.trucks));

    case RECEIVE_ALL_TRUCKS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['trucks'], data => data.mergeDeep(payload.trucks));

    default:
      return state;
  }
}
