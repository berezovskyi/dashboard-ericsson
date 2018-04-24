import 'whatwg-fetch';
import { Stakeholder } from '../../../records';

export const REQUEST_STAKEHOLDERS = 'REQUEST_STAKEHOLDERS';
export const RECEIVE_STAKEHOLDERS = 'RECEIVE_STAKEHOLDERS';
export const UPDATE_STAKEHOLDERS_HIGHLIGHT = 'UPDATE_STAKEHOLDERS_HIGHLIGHT';

function requestStakeholders() {
  return {
    type: REQUEST_STAKEHOLDERS,
    payload: {
      loading: false,
    },
  };
}

function receiveStakeholders(json) {
  return {
    type: RECEIVE_STAKEHOLDERS,
    payload: {
      receivedAt: Date.now(),
      loading: true,
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
          }),
        ];
      }),
    },
  };
}

export function fetchStakeholders() {
  return dispatch => {
    dispatch(requestStakeholders());
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/stakeholders',
    )
      .then(response => response.json())
      .then(json => dispatch(receiveStakeholders(json)));
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
