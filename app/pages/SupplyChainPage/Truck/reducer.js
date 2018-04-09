/*
*
* TruckReducer
*
*/

import { Map } from 'immutable';
import { Truck } from '../../../records';

const INITIA_STATE = Map({
  ['12341-41230']: Truck({
    id: '12341-41230',
    to: 'Stockholm',
    from: 'Uppsala',
    name: 'Truck 1',
    value: 25,
    activity: {
      time: '5h 30m',
      diff: '3',
    },
    sustainability: {
      value: '65',
      diff: '2',
    },
  }),
  ['12341-41234']: Truck({
    id: '12341-41234',
    to: 'Goteberg',
    from: 'Malmo',
    name: 'Truck 2',
    value: 60,
    activity: {
      time: '5h 30m',
      diff: '2',
    },
    sustainability: {
      value: '51',
      diff: '3',
    },
  }),
  ['12341-41235']: Truck({
    id: '12341-41235',
    to: 'Copenhagen',
    from: 'Linkoping',
    name: 'Truck 3',
    value: 15,
    activity: {
      time: '5h 30m',
      diff: '1',
    },
    sustainability: {
      value: '45',
      diff: '1',
    },
  }),
  ['12341-41236']: Truck({
    id: '12341-41236',
    to: 'Arlanda',
    from: 'Stockholm',
    name: 'Truck 4',
    value: 52,
    activity: {
      time: '5h 30m',
      diff: '4',
    },
    sustainability: {
      value: '25',
      diff: '5',
    },
  }),
});

export default function truckReducer(state = INITIA_STATE, action) {
  switch (action.type) {
    case 'UPDATE_TRUCKS_HIGHLIGHT':
      return state.setIn([action.id, 'highlighted'], action.highlighted);
    default:
      return state;
  }
}
