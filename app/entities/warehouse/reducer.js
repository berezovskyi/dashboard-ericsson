/*
*
* CapacityReducer
*
*/

import { Map } from 'immutable';
import {
  UPDATE_WAREHOUSE_HIGHLIGHT,
  REQUEST_ALL_WAREHOUSE,
  RECEIVE_ALL_WAREHOUSE,
  REQUEST_HIGHLIGHTED_WAREHOUSE,
  RECEIVE_HIGHLIGHTED_WAREHOUSE,
  FAILED_REQUEST_WAREHOUSE,
} from './actions';

const INITIAL_STATE = new Map({
  status: null,
  statusText: '',
  loading: false,
  receivedAt: null,
  data: new Map(),
});

export default function warehouseReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case UPDATE_WAREHOUSE_HIGHLIGHT:
      return state.setIn(
        ['data', payload.id, 'highlighted'],
        payload.highlighted,
      );
    case REQUEST_ALL_WAREHOUSE:
      return state
        .setIn(['loading'], payload.loading);

    case REQUEST_HIGHLIGHTED_WAREHOUSE:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt);

    case RECEIVE_HIGHLIGHTED_WAREHOUSE:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['data'], data => data.mergeDeep(payload.warehouse));

    case RECEIVE_ALL_WAREHOUSE:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['data'], data => data.mergeDeep(payload.warehouse));

    case FAILED_REQUEST_WAREHOUSE:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['status'], payload.status)
        .setIn(['data'], payload.statusText);
    default:
      return state;
  }
}
