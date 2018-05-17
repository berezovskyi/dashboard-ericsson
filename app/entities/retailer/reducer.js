/*
*
* retailerReducer
*
*/

import { Map } from 'immutable';
import {
  UPDATE_RETAILER_HIGHLIGHT,
  REQUEST_ALL_RETAILER,
  RECEIVE_ALL_RETAILER,
  REQUEST_HIGHLIGHTED_RETAILER,
  RECEIVE_HIGHLIGHTED_RETAILER,
  FAILED_REQUEST_RETAILER,
} from './actions';

const INITIAL_STATE = new Map({
  status: null,
  statusText: '',
  loading: false,
  receivedAt: null,
  data: new Map(),
});

export default function retailerReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case UPDATE_RETAILER_HIGHLIGHT:
      return state.setIn(
        ['data', payload.id, 'highlighted'],
        payload.highlighted,
      );
    case REQUEST_ALL_RETAILER:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt);

    case REQUEST_HIGHLIGHTED_RETAILER:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt);

    case RECEIVE_HIGHLIGHTED_RETAILER:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['data'], data => data.mergeDeep(payload.retailer));

    case RECEIVE_ALL_RETAILER:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['data'], data => data.mergeDeep(payload.retailer));

    case FAILED_REQUEST_RETAILER:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['status'], payload.status)
        .setIn(['data'], payload.statusText);
    default:
      return state;
  }
}
