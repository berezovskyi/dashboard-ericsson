/*
*
* CapacityReducer
*
*/

import { Map } from 'immutable';
import {
  UPDATE_CAPACITY_HIGHLIGHT,
  REQUEST_ALL_CAPACITY,
  RECEIVE_ALL_CAPACITY,
  REQUEST_HIGHLIGHTED_CAPACITY,
  RECEIVE_HIGHLIGHTED_CAPACITY,
} from './actions';

const INITIAL_STATE = new Map({
  loading: false,
  receivedAt: null,
  capacity: new Map(),
});


export default function capacityReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case UPDATE_CAPACITY_HIGHLIGHT:
      return state.setIn(
        ['capacity', payload.id, 'highlighted'],
        payload.highlighted,
      );
    case REQUEST_ALL_CAPACITY:
      return state.setIn(['loading'], payload.loading);

    case REQUEST_HIGHLIGHTED_CAPACITY:
      return state.setIn(['loading'], payload.loading);

    case RECEIVE_HIGHLIGHTED_CAPACITY:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['capacity'], data =>
          data.mergeDeep(payload.capacity),
        );

    case RECEIVE_ALL_CAPACITY:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['capacity'], data =>
          data.mergeDeep(payload.capacity),
        );

    default:
      return state;
  }
}

