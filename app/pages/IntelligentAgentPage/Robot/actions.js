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

function receiveRobots(json) {
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
            timetoreturn: item.timetoreturn,
            performance: {
              value: item.performance.value,
              diff: item.performance.diff,
            },
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
            secpertask: {
              value: item.secpertask.time,
              diff: item.secpertask.diff,
            },
            type: item.type,
            battery: {
              value: item.battery.value,
              diff: item.battery.diff,
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

function shouldFetchRobots(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

