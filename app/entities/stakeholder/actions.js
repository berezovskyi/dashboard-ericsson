import 'whatwg-fetch';
import { Stakeholder } from '../../records';

import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';

export const REQUEST_ALL_STAKEHOLDERS = 'REQUEST_ALL_STAKEHOLDERS';
export const RECEIVE_ALL_STAKEHOLDERS = 'RECEIVE_ALL_STAKEHOLDERS';
export const UPDATE_STAKEHOLDERS_HIGHLIGHT = 'UPDATE_STAKEHOLDERS_HIGHLIGHT';
export const FAILED_REQUEST_STAKEHOLDERS = 'FAILED_REQUEST_STAKEHOLDERS';

/* 2 different kinds of actions: one for highlighted, one for all.  */

function requestStakeholders() {
  return {
    type: REQUEST_ALL_STAKEHOLDERS,
    payload: {
      loading: true,
    },
  };
}

function receiveStakeholders(json) {
  if (json) {
    return {
      type: RECEIVE_ALL_STAKEHOLDERS,
      payload: {
        loading: false,
        receivedAt: Date.now(),
        stakeholders: json.data.map(item => {
          return [
            item.id,
            new Stakeholder({
              id: item.id,
              name: item.name,
              phone: item.phone,
              email: item.email,
              type: item.type,
              highlighted: item.highlighted,
              role: item.role,
            }),
          ];
        }),
      },
    };
  }
  return null;
}

export function fetchStakeholders() {
  return dispatch => {
    dispatch(requestStakeholders());
    return fetch(API_URL + 'stakeholders')
      .then(response => response.json())
      .then(json => dispatch(receiveStakeholders(json)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_STAKEHOLDERS, response)),
      );
  };
}

function shouldFetchStakeholders(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

export function fetchStakeholdersIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchStakeholders(getState())) {
      return dispatch(fetchStakeholders());
    }
    return null;
  };
}
