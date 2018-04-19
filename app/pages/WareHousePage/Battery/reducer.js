/*
*
* BatteryReducer
*
*/

import { Map } from 'immutable';
import { Battery } from '../../../records';

const INITIAL_STATE = Map({
  ['11111-41230']: Battery({
    id: '11111-41230',
    name: 'Robot Arm 1',
    from: {
      name: 'conveyor belt 1',
      id: '11111-22222',
    },
    to: {
      name: 'Charge Station 7',
      id: '11111-33333',
    },
    batterystatus: {
      value: 45,
      status: 'mid',
    },
    performance: {
      value: 98,
      diff: 1,
    },
    total: {
      hours: '',
      diff: 1,
    },
    timetoreturn: 34,
    highlighted: false,
  }),
  ['11111-41234']: Battery({
    id: '11111-41234',
    name: 'Robot Arm 2',
    from: {
      name: 'conveyor belt 2',
      id: '',
    },
    to: {
      name: 'Charge Station 1',
      id: '',
    },
    batterystatus: {
      value: 10,
      status: 'low',
    },
    performance: {
      value: 11,
      diff: -41,
    },
    total: {
      hours: '',
      diff: -4,
    },
    timetoreturn: 25,
    highlighted: false,
  }),
  ['11111-41235']: Battery({
    id: '11111-41235',
    name: 'Robot Arm 3',
    from: {
      name: 'Conveyor Belt 3',
      id: '11111-11111',
    },
    to: {
      name: 'Charge Station 2',
      id: '00000-33333',
    },
    batterystatus: {
      value: 90,
      status: 'high',
    },
    performance: {
      value: 67,
      diff: 5,
    },
    total: {
      hours: '',
      diff: -5,
    },
    timetoreturn: 45,
    highlighted: true,
  }),
  ['11111-41236']: Battery({
    id: '11111-41236',
    name: 'Robot Arm 4',
    from: {
      name: 'Conveyor Belt 4',
      id: '11111-43333',
    },
    to: {
      name: 'Charge Station 3',
      id: '11111-53333',
    },
    batterystatus: {
      value: 100,
      status: 'full',
    },
    performance: {
      value: 50,
      diff: -4,
    },
    total: {
      hours: '',
      diff: -7,
    },
    timetoreturn: 76,
    highlighted: true,
  }),
});

export default function batteryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_BATTERY_HIGHLIGHT':
      return state.setIn(
        [action.id, 'highlighted'],
        action.highlighted,
      );
    default:
      return state;
  }
}
