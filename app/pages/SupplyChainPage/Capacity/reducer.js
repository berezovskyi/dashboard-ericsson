/*
*
* CapacityReducer
*
*/

import { Map } from 'immutable';
import { Capacity } from '../../../records';


const capacityReducer = Map({
  ['12341-45123']: Capacity({
    id: '12341-45123',
    name: 'Retailer 1',
    value: 23,
    type: 'rt',
  }),
  ['12341-45124']: Capacity({
    id: '12341-45124',
    name: 'Retailer 2',
    value: 51,
    type: 'rt',
  }),
  ['12341-45125']: Capacity({
    id: '12341-45125',
    name: 'Retailer 3',
    value: 72,
    type: 'rt',
  }),
  ['12341-45126']: Capacity({
    id: '12341-45126',
    name: 'Warehouse 1',
    value: 23,
    type: 'wh',
  }),
});

export default capacityReducer;
