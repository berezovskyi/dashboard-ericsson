import { Retailer } from '../../records';
import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';
export const UPDATE_RETAILER_HIGHLIGHT = 'UPDATE_RETAILER_HIGHLIGHT';
export const REQUEST_ALL_RETAILER = 'REQUEST_ALL_RETAILER';
export const RECEIVE_ALL_RETAILER = 'RECEIVE_ALL_RETAILER';
export const FAILED_REQUEST_RETAILER = 'FAILED_REQUEST_RETAILER';

/* 2 different kinds of actions: one for highlighted, one for all.  */

function requestRetailer() {
  return {
    type: REQUEST_ALL_RETAILER,
    payload: {
      receivedAt: Date.now(),
      loading: true,
    },
  };
}

function receiveRetailer(json) {
  return {
    type: RECEIVE_ALL_RETAILER,
    payload: {
      loading: false,
      retailer: json.data.map(item => {
        return [
          item.id,
          new Retailer({
            id: item.id,
            name: item.name,
            capacity: item.capacity,
            location: {
              x: item.location.x,
              y: item.location.y,
              name: item.location.name,
            },
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

export function fetchRetailer() {
  return dispatch => {
    dispatch(requestRetailer());
    return fetch(API_URL + 'retailers')
      .then(response => response.json())
      .then(json => dispatch(receiveRetailer(json)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_RETAILER, response)),
      );
  };
}

function shouldFetchRetailer(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

export function fetchRetailerIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchRetailer(getState())) {
      return dispatch(fetchRetailer());
    }
    return null;
  };
}
