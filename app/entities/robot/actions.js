import 'whatwg-fetch';
import { Robot } from '../../records';
import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';

export const REQUEST_ALL_ROBOTS = 'REQUEST_ALL_ROBOTS';
export const REQUEST_ROBOT = 'REQUEST_ROBOT';
export const RECEIVE_ROBOT = 'RECEIVE_ROBOT';
export const RECEIVE_ALL_ROBOTS = 'RECEIVE_ALL_ROBOTS';
export const UPDATE_ROBOTS_HIGHLIGHT = 'UPDATE_ROBOTS_HIGHLIGHT';
export const FAILED_REQUEST_ROBOTS = 'FAILED_REQUEST_ROBOTS';
export const UPDATE_BATTERY_HIGHLIGHT = 'UPDATE_BATTERY_HIGHLIGHT';

function requestRobots() {
  return {
    type: REQUEST_ALL_ROBOTS,
    payload: {
      loading: true,
    },
  };
}

function requestRobot() {
  return {
    type: REQUEST_ROBOT,
    payload: {
      loading: true,
    },
  };
}

function receiveRobot(json) {
  return {
    type: RECEIVE_ROBOT,
    payload: {
      robot: new Robot(json),
    }
  }
}

function receiveRobots(json) {
  return {
    type: RECEIVE_ALL_ROBOTS,
    payload: {
      receivedAt: Date.now(),
      loading: false,
      robots: json.data.map(item => {
        return [
          item.id,
          new Robot({
            id: item.id,
            name: item.name,
            value: item.value,
            timetoreturn: item.timetoreturn,
            type: item.type,
            from: {
              name: item.from.name,
              id: item.from.id,
              location: {
                x: item.from.location.x,
                y: item.from.location.y,
              },
            },
            to: {
              name: item.to.name,
              id: item.to.id,
              location: {
                x: item.to.location.x,
                y: item.to.location.y,
              },
            },
            performance: {
              value: item.performance.value,
              diff: item.performance.diff,
            },
            secpertask: {
              value: item.secpertask.time,
              diff: item.secpertask.diff,
            },
            battery: {
              value: item.battery.value,
              diff: item.battery.diff,
              status: item.battery.status,
            },
            highlightedRobot: item.highlightedRobot,
            highlightedBattery: item.highlightedBattery,
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

export function fetchRobot(id) {
  return dispatch => {
    dispatch(requestRobot());
    return fetch(API_URL + 'robots/' + id)
      .then(response => response.json())
      .then(json => dispatch(receiveRobot(json)))
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

export function fetchRobotsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchRobots(getState())) {
      return dispatch(fetchRobots());
    }
    return null;
  };
}
