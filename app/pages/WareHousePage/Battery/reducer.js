/*
*
* BatteryReducer
*
*/

import { Map } from 'immutable';
import {
  UPDATE_BATTERY_HIGHLIGHT,
  REQUEST_ALL_BATTERY,
  REQUEST_HIGHLIGHTED_BATTERY,
  RECEIVE_HIGHLIGHTED_BATTERY,
  RECEIVE_ALL_BATTERY,
} from './actions';

const INITIAL_STATE = new Map({
  loading: false,
  receivedAt: null,
  battery: new Map(),
});

export default function batteryReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case UPDATE_BATTERY_HIGHLIGHT:
      return state.setIn([payload.id, 'highlighted'], payload.highlighted);
    case REQUEST_ALL_BATTERY:
      return state.setIn(['loading'], payload.loading);

    case REQUEST_HIGHLIGHTED_BATTERY:
      return state.setIn(['loading'], payload.loading);

    case RECEIVE_HIGHLIGHTED_BATTERY:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['battery'], data => data.mergeDeep(payload.battery));

    case RECEIVE_ALL_BATTERY:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['battery'], data => data.mergeDeep(payload.battery));
    default:
      return state;
  }
}
