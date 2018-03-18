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
    to: '',
    from: '',
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
    to: '',
    from: '',
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
    to: '',
    from: '',
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
    to: '',
    from: '',
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
