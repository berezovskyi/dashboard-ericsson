import 'whatwg-fetch';
import { Robot } from '../../../records';
import { requestFailed } from '../../../reducers';
import { API_URL } from '../../../constants';

export const REQUEST_ALL_ROBOTS = 'REQUEST_ALL_ROBOTS';
export const REQUEST_HIGHLIGHTED_ROBOTS = 'REQUEST_HIGHLIGHTED_ROBOTS';
export const RECEIVE_ALL_ROBOTS = 'RECEIVE_ALL_ROBOTS';
export const RECEIVE_HIGHLIGHTED_ROBOTS = 'RECEIVE_HIGHLIGHTED_ROBOTS';
export const UPDATE_ROBOTS_HIGHLIGHT = 'UPDATE_ROBOTS_HIGHLIGHT';
export const FAILED_REQUEST_ROBOTS = 'FAILED_REQUEST_ROBOTS';

function requestRobots() {
  return {
    type: REQUEST_ALL_ROBOTS,
    payload: {
      receivedAt: Date.now(),
      loading: true,
    },
  };
}

function requesthighlightedRobots() {
  return {
    type: REQUEST_HIGHLIGHTED_ROBOTS,
    payload: {
      receivedAt: Date.now(),
      loading: true,
    },
  };
}

function receiveRobots(json) {
  return {
    type: RECEIVE_ALL_ROBOTS,
    payload: {
      loading: false,
      robots: json.data.map(item => {
        return [
          item.id,
          new Robot({
            id: item.id,
            name: item.name,
            value: item.value,
            performance: {
              value: item.performance.value,
              diff: item.performance.diff,
            },
            secpertask: {
              time: item.secpertask.time,
              diff: item.secpertask.diff,
            },
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

function receiveHighlightedRobots(json) {
  return {
    type: RECEIVE_HIGHLIGHTED_ROBOTS,
    payload: {
      loading: false,
      robots: json.data.map(item => {
        return [
          item.id,
          new Robot({
            id: item.id,
            name: item.name,
            value: item.value,
            performance: {
              value: item.performance.value,
              diff: item.performance.diff,
            },
            secpertask: {
              time: item.secpertask.time,
              diff: item.secpertask.diff,
            },
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

export function fetchRobots() {
  return dispatch => {
    dispatch(requestRobots());
    return fetch(API_URL + 'robots')
      .then(response => response.json())
      .then(json => dispatch(receiveRobots(json)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_ROBOTS, response)),
      );
  };
}

export function fetchHighlightedRobots() {
  return dispatch => {
    dispatch(requesthighlightedRobots());
    return fetch(API_URL + 'robots/highlighted')
      .then(response => response.json())
      .then(json => dispatch(receiveHighlightedRobots(json)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_ROBOTS, response)),
      );
  };
}

function shouldFetchRobots(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

function shouldFetchHighlightedRobots(state) {
  const data = state.get('robots');
  if (!data.get('loading') && data.get('robots').size === 0) {
    return true;
  }
  return false;
}

export function fetchRobotsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchRobots(getState())) {
      return dispatch(fetchRobots());
    }
    return null;
  };
}

export function fetchHighlightedRobotsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchHighlightedRobots(getState())) {
      return dispatch(fetchHighlightedRobots());
    }
    return null;
  };
}
