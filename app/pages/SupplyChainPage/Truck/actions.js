import 'whatwg-fetch';
import { Truck } from '../../../records';
import { requestFailed } from '../../../reducers';
import { API_URL } from '../../../constants';

export const REQUEST_ALL_TRUCKS = 'REQUEST_ALL_TRUCKS';
export const REQUEST_HIGHLIGHTED_TRUCKS = 'REQUEST_HIGHLIGHTED_TRUCKS';
export const RECEIVE_ALL_TRUCKS = 'RECEIVE_ALL_TRUCKS';
export const RECEIVE_HIGHLIGHTED_TRUCKS = 'RECEIVE_HIGHLIGHTED_TRUCKS';
export const UPDATE_TRUCKS_HIGHLIGHT = 'UPDATE_TRUCKS_HIGHLIGHT';
export const FAILED_REQUEST_TRUCKS = 'FAILED_REQUEST_TRUCKS';

function requestTrucks() {
  return {
    type: REQUEST_ALL_TRUCKS,
    payload: {
      receivedAt: Date.now(),
      loading: true,
    },
  };
}

function requesthighlightedTrucks() {
  return {
    type: REQUEST_HIGHLIGHTED_TRUCKS,
    payload: {
      receivedAt: Date.now(),
      loading: true,
    },
  };
}

function receiveTrucks(json) {
  return {
    type: RECEIVE_ALL_TRUCKS,
    payload: {
      loading: false,
      trucks: json.data.map(item => {
        return [
          item.id,
          new Truck({
            id: item.id,
            name: item.name,
            value: item.value,
            activity: {
              time: item.activity.time,
              diff: item.activity.value,
            },
            sustainability: {
              value: item.sustainability.value,
              diff: item.sustainability.diff,
            },
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

function receiveHighlightedTrucks(json) {
  return {
    type: RECEIVE_HIGHLIGHTED_TRUCKS,
    payload: {
      loading: false,
      trucks: json.data.map(item => {
        return [
          item.id,
          new Truck({
            id: item.id,
            name: item.name,
            value: item.value,
            activity: {
              time: item.activity.time,
              diff: item.activity.value,
            },
            sustainability: {
              value: item.sustainability.value,
              diff: item.sustainability.diff,
            },
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

export function fetchTrucks() {
  return dispatch => {
    dispatch(requestTrucks());
    return fetch(API_URL + 'trucks')
      .then(response => response.json())
      .then(json => dispatch(receiveTrucks(json)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_TRUCKS, response)),
      );
  };
}

export function fetchHighlightedTrucks() {
  return dispatch => {
    dispatch(requesthighlightedTrucks());
    return fetch(API_URL + 'trucks/highlighted')
      .then(response => response.json())
      .then(json => dispatch(receiveHighlightedTrucks(json)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_TRUCKS, response)),
      );
  };
}

function shouldFetchTrucks(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

function shouldFetchHighlightedTrucks(state) {
  const data = state.get('trucks');
  if (!data.get('loading') && data.get('trucks').size === 0) {
    return true;
  }
  return false;
}

export function fetchTrucksIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTrucks(getState())) {
      return dispatch(fetchTrucks());
    }
    return null;
  };
}

export function fetchHighlightedTrucksIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchHighlightedTrucks(getState())) {
      return dispatch(fetchHighlightedTrucks());
    }
    return null;
  };
}