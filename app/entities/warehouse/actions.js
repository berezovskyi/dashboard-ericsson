import { Warehouse } from '../../records';
import { requestFailed } from '../../reducers';
import { API_URL } from '../../constants';
export const UPDATE_WAREHOUSE_HIGHLIGHT = 'UPDATE_WAREHOUSE_HIGHLIGHT';
export const REQUEST_ALL_WAREHOUSE = 'REQUEST_ALL_WAREHOUSE';
export const RECEIVE_ALL_WAREHOUSE = 'RECEIVE_ALL_WAREHOUSE';
export const FAILED_REQUEST_WAREHOUSE = 'FAILED_REQUEST_WAREHOUSE';

/* 2 different kinds of actions: one for highlighted, one for all.  */

function requestWarehouse() {
  return {
    type: REQUEST_ALL_WAREHOUSE,
    payload: {
      loading: true,
    },
  };
}

function receiveWarehouse(json) {
  return {
    type: RECEIVE_ALL_WAREHOUSE,
    payload: {
      loading: false,
      receivedAt: Date.now(),
      warehouse: json.data.map(item => {
        return [
          item.id,
          new Warehouse({
            id: item.id,
            name: item.name,
            capacity: item.capacity,
            location: {
              x: item.location.x,
              y: item.location.y,
            },
            highlighted: item.highlighted,
          }),
        ];
      }),
    },
  };
}

export function fetchWarehouse() {
  return dispatch => {
    dispatch(requestWarehouse());
    return fetch(API_URL + 'warehouses')
      .then(response => response.json())
      .then(json => dispatch(receiveWarehouse(json)))
      .catch(response =>
        dispatch(requestFailed(FAILED_REQUEST_WAREHOUSE, response)),
      );
  };
}

function shouldFetchWarehouse(state) {
  const { data } = state;
  if (!data) {
    return true;
  } else if (data.loading) {
    return false;
  }
  return null;
}

export function fetchWarehouseIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchWarehouse(getState())) {
      return dispatch(fetchWarehouse());
    }
    return null;
  };
}
