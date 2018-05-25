/*
*
* Notes Reducer
*
*/

import { Map } from 'immutable';

import { REQUEST_RP_DATA, RECEIVE_RP_DATA } from './actions';

const INITIAL_STATE = new Map({
  receivedAt: null,
  rpdata: new Map(),
});

export default function riskperformanceReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case REQUEST_RP_DATA:
      return state;

    case RECEIVE_RP_DATA:
      return state
        .setIn(['receivedAt'], payload.receivedAt)
        .setIn(['rpdata'], payload.rpdata);
    default:
      return state;
  }
}
