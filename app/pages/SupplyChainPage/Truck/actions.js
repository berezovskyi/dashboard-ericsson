import 'whatwg-fetch';
import { Truck } from '../../../records';
import { requestFailed } from '../../../reducers';

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
      loading: true,
    },
  };
}

function requesthighlightedTrucks() {
  return {
    type: REQUEST_HIGHLIGHTED_TRUCKS,
    payload: {
      loading: true,
    },
  };
}

function receiveTrucks(json) {
  return {
    type: RECEIVE_ALL_TRUCKS,
    payload: {
      receivedAt: Date.now(),
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
      receivedAt: Date.now(),
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
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/trucks',
    )
      .then(response => {
        if (response.code >= 200 && response.code < 400) {
          response.json();
        } else {
          dispatch(requestFailed(FAILED_REQUEST_TRUCKS, response));
        }
      })
      .then(json => dispatch(receiveTrucks(json)));
  };
}

export function fetchHighlightedTrucks() {
  return dispatch => {
    dispatch(requesthighlightedTrucks());
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/trucks/highlighted',
    )
      .then(response => {
        if (response.code >= 200 && response.code < 400) {
          response.json();
        } else {
          dispatch(requestFailed(FAILED_REQUEST_TRUCKS, response));
        }
      })
      .then(json => dispatch(receiveHighlightedTrucks(json)));
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
