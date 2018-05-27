import 'whatwg-fetch';
import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';

export const REQUEST_PERF_DATA = 'REQUEST_PERF_DATA';
export const RECEIVE_PERF_DATA = 'RECEIVE_PERF_DATA';
export const FAILED_REQUEST_PERF_DATA = 'FAILED_REQUEST_PERF_DATA';

function requestPerfData() {
  return {
    type: REQUEST_PERF_DATA,
    payload: {
      loading: true,
    },
  };
}

function receivePerfData(json) {
  return {
    type: RECEIVE_PERF_DATA,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      perfdata: {
        available: json.data.available,
        value: json.data.value,
      },
    },
  };
}

export function fetchPerfData(type) {
  return dispatch => {
    dispatch(requestPerfData());
    return fetch(API_URL + 'robotperformance/' + type)
      .then(response => response.json())
      .then(json => dispatch(receivePerfData(json, type)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_PERF_DATA, response)),
      );
  };
}

function shouldFetchPerfData(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

export function fetchPerfDataIfNeeded(type) {
  return (dispatch, getState) => {
    if (shouldFetchPerfData(getState())) {
      return dispatch(fetchPerfData(type));
    }
    return null;
  };
}

