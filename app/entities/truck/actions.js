import 'whatwg-fetch';
import { Truck } from '../../records';
import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';

export const REQUEST_ALL_TRUCKS = 'REQUEST_ALL_TRUCKS';
export const RECEIVE_ALL_TRUCKS = 'RECEIVE_ALL_TRUCKS';
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
              diff: item.activity.diff,
            },
            sustainability: {
              value: item.sustainability.value,
              diff: item.sustainability.diff,
            },
            highlighted: item.highlighted,
            from: {
              name: item.from.name,
              id: item.from.id,
            },
            to: {
              name: item.to.name,
              id: item.to.id,
            },
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

function shouldFetchTrucks(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

export function fetchTrucksIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTrucks(getState())) {
      return dispatch(fetchTrucks());
    }
    return null;
  };
}
