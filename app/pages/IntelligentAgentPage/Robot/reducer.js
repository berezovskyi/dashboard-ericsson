/*
*
* CapacityReducer
*
*/

import { Map } from 'immutable';
import {
  UPDATE_ROBOTS_HIGHLIGHT,
  REQUEST_ALL_ROBOTS,
  REQUEST_HIGHLIGHTED_ROBOTS,
  RECEIVE_HIGHLIGHTED_ROBOTS,
  RECEIVE_ALL_ROBOTS, FAILED_REQUEST_ROBOTS,
} from './actions';

const INITIAL_STATE = new Map({
  status: null,
  statusText: '',
  loading: false,
  receivedAt: null,
  robots: new Map(),
});

export default function robotReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case UPDATE_ROBOTS_HIGHLIGHT:
      return state.setIn([payload.id, 'highlighted'], payload.highlighted);
    case REQUEST_ALL_ROBOTS:
      return state.setIn(['loading'], payload.loading);

    case REQUEST_HIGHLIGHTED_ROBOTS:
      return state.setIn(['loading'], payload.loading);

    case RECEIVE_HIGHLIGHTED_ROBOTS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['robots'], data => data.mergeDeep(payload.robots));

    case RECEIVE_ALL_ROBOTS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['robots'], data => data.mergeDeep(payload.robots));

    case FAILED_REQUEST_ROBOTS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['status'], payload.status)
        .setIn(['statusText'], payload.statusText);
    default:
      return state;
  }
}
