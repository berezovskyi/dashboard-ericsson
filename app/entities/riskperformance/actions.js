import 'whatwg-fetch';
import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';

export const REQUEST_RP_DATA = 'REQUEST_RP_DATA';
export const RECEIVE_RP_DATA = 'RECEIVE_RP_DATA';
export const FAILED_REQUEST_RP_DATA = 'FAILED_REQUEST_RP_DATA';

function requestRPData() {
  return {
    type: REQUEST_RP_DATA,
    payload: {
      loading: true,
    },
  };
}

function receiveRPData(json) {
  return {
    type: RECEIVE_RP_DATA,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      rpdata: json.data.map(item => {
        return {
          data: item.data,
          id: item.id,
        };
      }),
    },
  };
}

export function fetchRPData(type, timestamp = '') {
  return dispatch => {
    dispatch(requestRPData());
    if (timestamp === 'year') {
      return fetch(API_URL + 'riskperformance/' + type)
        .then(response => response.json())
        .then(json => dispatch(receiveRPData(json, type)))
        .catch(response =>
          dispatch(requestFailed(FAILED_REQUEST_RP_DATA, response)),
        );
    } else {
      return fetch(API_URL + 'riskperformance/' + type + '/' + timestamp)
        .then(response => response.json())
        .then(json => dispatch(receiveRPData(json, type)))
        .catch(response =>
          dispatch(requestFailed(FAILED_REQUEST_RP_DATA, response)),
        );
    }
  };
}

function shouldFetchRPData(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

export function fetchRPDataIfNeeded(type, timestamp) {
  return (dispatch, getState) => {
    if (shouldFetchRPData(getState())) {
      return dispatch(fetchRPData(type, timestamp));
    }
    return null;
  };
}
