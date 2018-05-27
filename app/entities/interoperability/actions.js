import 'whatwg-fetch';
import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';

export const REQUEST_IO_DATA = 'REQUEST_IO_DATA';
export const RECEIVE_IO_DATA = 'RECEIVE_IO_DATA';
export const FAILED_REQUEST_IO_DATA = 'FAILED_REQUEST_IO_DATA';

function requestIOData() {
  return {
    type: REQUEST_IO_DATA,
    payload: {
      loading: true,
    },
  };
}

function receiveIOData(json) {
  return {
    type: RECEIVE_IO_DATA,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      iodata: {
        available: json.data.available,
        value: json.data.value,
      },
    },
  };
}

export function fetchIOData(type) {
  return dispatch => {
    dispatch(requestIOData());
    return fetch(API_URL + 'interoperability/' + type)
      .then(response => response.json())
      .then(json => dispatch(receiveIOData(json, type)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_IO_DATA, response)),
      );
  };
}

function shouldFetchIOData(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

export function fetchIODataIfNeeded(type) {
  return (dispatch, getState) => {
    if (shouldFetchIOData(getState())) {
      return dispatch(fetchIOData(type));
    }
    return null;
  };
}
