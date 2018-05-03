/*
*
* Stakeholders Reducer
*
*/

import { Map } from 'immutable';
import {
  UPDATE_STAKEHOLDERS_HIGHLIGHT,
  REQUEST_ALL_STAKEHOLDERS,
  RECEIVE_ALL_STAKEHOLDERS,
  REQUEST_HIGHLIGHTED_STAKEHOLDERS,
  RECEIVE_HIGHLIGHTED_STAKEHOLDERS,
  FAILED_REQUEST_STAKEHOLDERS,
} from './actions';

const INITIAL_STATE = new Map({
  status: null,
  statusText: '',
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
      return state.setIn(
        ['stakeholders', payload.id, 'highlighted'],
        payload.highlighted,
      );

    case REQUEST_ALL_STAKEHOLDERS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt);

    case REQUEST_HIGHLIGHTED_STAKEHOLDERS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt);

    case RECEIVE_HIGHLIGHTED_STAKEHOLDERS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['stakeholders'], data =>
          data.mergeDeep(payload.stakeholders),
        );

    case RECEIVE_ALL_STAKEHOLDERS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['receivedAt'], payload.receivedAt)
        .updateIn(['stakeholders'], data =>
          data.mergeDeep(payload.stakeholders),
        );

    case FAILED_REQUEST_STAKEHOLDERS:
      return state
        .setIn(['loading'], payload.loading)
        .setIn(['status'], payload.status)
        .setIn(['statusText'], payload.statusText);

    default:
      return state;
  }
}
