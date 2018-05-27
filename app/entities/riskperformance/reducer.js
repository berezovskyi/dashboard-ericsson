/*
*
* Notes Reducer
*
*/

import { Map } from 'immutable';

import {
  REQUEST_RP_DATA,
  RECEIVE_RP_DATA,
  FAILED_REQUEST_RP_DATA,
} from './actions';

const INITIAL_STATE = new Map({
  status: null,
  statusText: '',
  loading: false,
  receivedAt: null,
  data: [],
});

export default function riskperformanceReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case REQUEST_RP_DATA:
      return state.setIn(['loading'], payload.loading);

    case RECEIVE_RP_DATA:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .setIn(['data'], payload.rpdata);

    case FAILED_REQUEST_RP_DATA:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['status'], payload.status)
        .setIn(['statusText'], payload.statusText);
    default:
      return state;
  }
}
