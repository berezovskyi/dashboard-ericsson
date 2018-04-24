/*
*
* Stakeholders Reducer
*
*/

import { Map } from 'immutable';
import {
  UPDATE_STAKEHOLDERS_HIGHLIGHT,
  REQUEST_STAKEHOLDERS,
  RECEIVE_STAKEHOLDERS,
} from './actions';

const INITIAL_STATE = new Map({
  loading: false,
  receivedAt: null,
  stakeholders: new Map(),
});

export default function stakeholderReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
  switch (type) {
    case UPDATE_STAKEHOLDERS_HIGHLIGHT:
      console.log(payload);
      return state.setIn(['stakeholders', payload.id, 'highlighted'], payload.highlighted);
    case REQUEST_STAKEHOLDERS:
      return state.setIn(['loading'], payload.loading);
    case RECEIVE_STAKEHOLDERS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['stakeholders'], data => data.mergeDeep(payload.stakeholders));
    default:
      return state;
  }
}
