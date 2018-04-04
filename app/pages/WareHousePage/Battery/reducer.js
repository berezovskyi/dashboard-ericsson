/*
*
* BatteryReducer
*
*/

import { Map } from 'immutable';
import { Battery } from '../../../records';

const batteryReducer = Map({
  ['11111-41230']: Battery({
    id: '11111-41230',
    name: 'Robot Arm 1',
    from: {
      name: 'conveyor belt 1',
      id: '',
    },
    to: {
      name: 'Charge Station 7',
      id: '',
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
  }),
  ['11111-41235']: Battery({
    id: '11111-41235',
    name: 'Robot Arm 3',
    from: {
      name: 'Conveyor Belt 3',
      id: '',
    },
    to: {
      name: 'Charge Station 2',
      id: '',
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
  }),
  ['11111-41236']: Battery({
    id: '11111-41236',
    name: 'Robot Arm 4',
    from: {
      name: 'Conveyor Belt 4',
      id: '',
    },
    to: {
      name: 'Charge Station 3',
      id: '',
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
  }),
});

export default batteryReducer;
