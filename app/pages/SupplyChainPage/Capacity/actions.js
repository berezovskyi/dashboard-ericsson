import { Capacity } from '../../../records';
import { requestFailed } from '../../../reducers';
export const UPDATE_CAPACITY_HIGHLIGHT = 'UPDATE_CAPACITY_HIGHLIGHT';
export const REQUEST_ALL_CAPACITY = 'REQUEST_ALL_CAPACITY';
export const RECEIVE_ALL_CAPACITY = 'RECEIVE_ALL_CAPACITY';
export const REQUEST_HIGHLIGHTED_CAPACITY = 'REQUEST_HIGHLIGHTED_CAPACITY';
export const RECEIVE_HIGHLIGHTED_CAPACITY = 'RECEIVE_HIGHLIGHTED_CAPACITY';
export const FAILED_REQUEST_CAPACITY = 'FAILED_REQUEST_CAPACITY';

/* 2 different kinds of actions: one for highlighted, one for all.  */

function requestCapacity() {
  return {
    type: REQUEST_ALL_CAPACITY,
    payload: {
      loading: true,
    },
  };
}

function requesthighlightedCapacity() {
  return {
    type: REQUEST_HIGHLIGHTED_CAPACITY,
    payload: {
      loading: true,
    },
  };
}

function receiveCapacity(json) {
  return {
    type: RECEIVE_ALL_CAPACITY,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      capacity: json.data.map(item => {
        return [
          item.id,
          new Capacity({
            id: item.id,
            name: item.name,
            value: item.value,
            type: item.type,
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

function receiveHighlightedCapacity(json) {
  return {
    type: RECEIVE_HIGHLIGHTED_CAPACITY,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      capacity: json.data.map(item => {
        return [
          item.id,
          new Capacity({
            id: item.id,
            name: item.name,
            value: item.value,
            type: item.type,
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

export function fetchCapacity() {
  return dispatch => {
    dispatch(requestCapacity());
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/capacity',
    )
      .then(response => {
        if (response.code >= 200 && response.code < 400) {
          response.json();
        } else {
          dispatch(requestFailed(FAILED_REQUEST_CAPACITY, response));
        }
      })
      .then(json => dispatch(receiveCapacity(json)));
  };
}

export function fetchHighlightedCapacity() {
  return dispatch => {
    dispatch(requesthighlightedCapacity());
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/capacity/highlighted',
    )
      .then(response => {
        if (response.code >= 200 && response.code < 400) {
          response.json();
        } else {
          dispatch(requestFailed(FAILED_REQUEST_CAPACITY, response));
        }
      })
      .then(json => dispatch(receiveHighlightedCapacity(json)));
  };
}

function shouldFetchCapacity(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

function shouldFetchHighlightedCapacity(state) {
  const data = state.get('capacity');
  if (!data.get('loading') && data.get('capacity').size === 0) {
    return true;
  }
  return false;
}

export function fetchCapacityIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCapacity(getState())) {
      return dispatch(fetchCapacity());
    }
    return null;
  };
}

export function fetchHighlightedCapacityIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchHighlightedCapacity(getState())) {
      return dispatch(fetchHighlightedCapacity());
    }
    return null;
  };
}
