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
  FAILED_REQUEST_TRUCKS,
} from './actions';

const INITIAL_STATE = new Map({
  status: null,
  statusText: '',
  loading: false,
  receivedAt: null,
  data: new Map(),
});

export default function truckReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case UPDATE_TRUCKS_HIGHLIGHT:
      return state.setIn(
        ['data', payload.id, 'highlighted'],
        payload.highlighted,
      );

    case REQUEST_ALL_TRUCKS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt);

    case RECEIVE_ALL_TRUCKS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['data'], data => data.mergeDeep(payload.trucks));

    case FAILED_REQUEST_TRUCKS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['status'], payload.status)
        .setIn(['statusText'], payload.statusText);
    default:
      return state;
  }
}
