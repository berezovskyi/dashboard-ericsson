/*
*
* CapacityReducer
*
*/

import { Map } from 'immutable';
import { Truck } from '../../../records';


const truckReducer = Map({
  ['12341-41230']: Truck({
    id: '12341-41230',
    to: 'Stockholm',
    from: 'Uppsala',
    name: 'Truck 1',
    value: 25,
    activity: {
      time: 0,
      diff: 0,
    },
    sustainability: {
      value: 0,
      diff: 0,
    },
  }),
  ['12341-41234']: Truck({
    id: '12341-41234',
    to: 'Goteberg',
    from: 'Malmo',
    name: 'Truck 2',
    value: 60,
    activity: {
      time: 0,
      diff: 0,
    },
    sustainability: {
      value: 0,
      diff: 0,
    },
  }),
  ['12341-41235']: Truck({
    id: '12341-41235',
    to: 'Copenhagen',
    from: 'Linkoping',
    name: 'Truck 3',
    value: 15,
    activity: {
      time: 0,
      diff: 0,
    },
    sustainability: {
      value: 0,
      diff: 0,
    },
  }),
  ['12341-41236']: Truck({
    id: '12341-41236',
    to: 'Arlanda',
    from: 'Stockholm',
    name: 'Truck 4',
    value: 52,
    activity: {
      time: 0,
      diff: 0,
    },
    sustainability: {
      value: 0,
      diff: 0,
    },
  }),
});

export default truckReducer;
