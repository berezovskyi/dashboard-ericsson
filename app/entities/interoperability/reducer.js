/*
*
* Notes Reducer
*
*/

import { Map } from 'immutable';

import {
  REQUEST_IO_DATA,
  RECEIVE_IO_DATA,
  FAILED_REQUEST_IO_DATA,
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

export default function interoperabilityReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case REQUEST_IO_DATA:
      return state.setIn(['loading'], payload.loading);

    case RECEIVE_IO_DATA:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .setIn(['data'], payload.iodata);

    case FAILED_REQUEST_IO_DATA:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['status'], payload.status)
        .setIn(['statusText'], payload.statusText);
    default:
      return state;
  }
}
