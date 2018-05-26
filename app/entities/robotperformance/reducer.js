/*
*
* Notes Reducer
*
*/

import { Map } from 'immutable';

import {
  REQUEST_PERF_DATA,
  RECEIVE_PERF_DATA,
  FAILED_REQUEST_PERF_DATA,
} from './actions';

const INITIAL_STATE = new Map({
  status: null,
  statusText: '',
  loading: false,
  receivedAt: null,
  data: {
    available: [],
    value: [],
  },
});

export default function robotperformanceReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case REQUEST_PERF_DATA:
      return state.setIn(['loading'], payload.loading);

    case RECEIVE_PERF_DATA:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .setIn(['data'], payload.perfdata);

    case FAILED_REQUEST_PERF_DATA:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['status'], payload.status)
        .setIn(['statusText'], payload.statusText);
    default:
      return state;
  }
}
