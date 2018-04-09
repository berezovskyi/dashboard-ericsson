/*
*
* CapacityReducer
*
*/

import { Map } from 'immutable';
import { Robot } from '../../../records';

const INITIAL_STATE = Map({
  ['12341-41230']: Robot({
    id: '12341-41230',
    name: 'Robot 1',
    value: 25,
    performance: {
      value: '45',
      diff: '1',
    },
    secpertask: {
      time: '5',
      diff: '1',
    },
  }),
  ['12341-41234']: Robot({
    id: '12341-41234',
    name: 'Robot 2',
    value: 60,
    performance: {
      value: '11',
      diff: '1',
    },
    secpertask: {
      time: '1',
      diff: '1',
    },
  }),
  ['12341-41235']: Robot({
    id: '12341-41235',
    name: 'Robot 3',
    value: 15,
    performance: {
      value: '51',
      diff: '1',
    },
    secpertask: {
      time: '8',
      diff: '1',
    },
  }),
  ['12341-41236']: Robot({
    id: '12341-41236',
    name: 'Robot 4',
    value: 52,
    performance: {
      value: '17',
      diff: '1',
    },
    secpertask: {
      time: '6',
      diff: '1',
    },
  }),
});

export default function robotReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_ROBOT_HIGHLIGHT':
      return state.setIn([action.id, 'highlighted'], action.highlighted);
    default:
      return state;
  }
}
