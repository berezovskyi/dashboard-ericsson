import 'whatwg-fetch';
import { Battery } from '../../../records';

export const REQUEST_ALL_BATTERY = 'REQUEST_ALL_BATTERY';
export const REQUEST_HIGHLIGHTED_BATTERY = 'REQUEST_HIGHLIGHTED_BATTERY';
export const RECEIVE_ALL_BATTERY = 'RECEIVE_ALL_BATTERY';
export const RECEIVE_HIGHLIGHTED_BATTERY = 'RECEIVE_HIGHLIGHTED_BATTERY';
export const UPDATE_BATTERY_HIGHLIGHT = 'UPDATE_BATTERY_HIGHLIGHT';
export const FAILED_REQUEST_BATTERY = 'FAILED_REQUEST_BATTERY';

function requestBattery() {
  return {
    type: REQUEST_ALL_BATTERY,
    payload: {
      loading: true,
    },
  };
}

function requesthighlightedBattery() {
  return {
    type: REQUEST_HIGHLIGHTED_BATTERY,
    payload: {
      loading: true,
    },
  };
}

function receiveBattery(json) {
  return {
    type: RECEIVE_ALL_BATTERY,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      battery: json.data.map(item => {
        return [
          item.id,
          new Battery({
            id: item.id,
            name: item.name,
            from: {
              name: item.from.name,
              id: item.from.id,
            },
            to: {
              name: item.to.name,
              id: item.to.id,
            },
            batterystatus: {
              value: item.batterystatus.value,
              status: item.batterystatus.status,
            },
            performance: {
              value: item.performance.value,
              diff: item.performance.diff,
            },
            total: {
              hours: item.total.hours,
              diff: item.total.diff,
            },
            timetoreturn: item.timetoreturn,
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

function receiveHighlightedBattery(json) {
  return {
    type: RECEIVE_HIGHLIGHTED_BATTERY,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      battery: json.data.map(item => {
        return [
          item.id,
          new Battery({
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

export function fetchBattery() {
  return dispatch => {
    dispatch(requestBattery());
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/battery',
    )
      .then(response => {
        if (response.code >= 200 && response.code < 400) {
          response.json();
        } else {
          dispatch(requestFailed(response));
        }
      })
      .then(json => dispatch(receiveBattery(json)));
  };
}


function requestFailed(response) {
  return {
    type: FAILED_REQUEST_BATTERY,
    payload: {
      status: response.status,
      statusText: response.statusText,
    },
  };
}


export function fetchHighlightedBattery() {
  return dispatch => {
    dispatch(requesthighlightedBattery());
    return fetch(
      'https://582fa7de-1c91-4294-91b8-e721fe00a1f6.mock.pstmn.io/battery/highlighted',
    )
      .then(response => {
        if (response.code >= 200 && response.code < 400) {
          response.json();
        } else {
          dispatch(requestFailed(response));
        }
      })
      .then(json => dispatch(receiveHighlightedBattery(json)));
  };
}

function shouldFetchBattery(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

function shouldFetchHighlightedBattery(state) {
  const data = state.get('battery');
  if (!data.get('loading') && data.get('battery').size === 0) {
    return true;
  }
  return false;
}

export function fetchBatteryIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBattery(getState())) {
      return dispatch(fetchBattery());
    }
    return null;
  };
}

export function fetchHighlightedBatteryIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchHighlightedBattery(getState())) {
      return dispatch(fetchHighlightedBattery());
    }
    return null;
  };
}
