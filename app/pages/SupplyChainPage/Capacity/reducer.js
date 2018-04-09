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
    highlighted: true,
  }),
  ['12341-45124']: Capacity({
    id: '12341-45124',
    name: 'Retailer 2',
    value: 51,
    type: 'rt',
    highlighted: false,
  }),
  ['12341-45125']: Capacity({
    id: '12341-45125',
    name: 'Retailer 3',
    value: 72,
    type: 'rt',
    highlighted: true,
  }),
  ['12341-35125']: Capacity({
    id: '12341-35125',
    name: 'Retailer 4',
    value: 45,
    type: 'rt',
    highlighted: true,
  }),
  ['12341-45126']: Capacity({
    id: '12341-45126',
    name: 'Warehouse 1',
    value: 23,
    type: 'wh',
    highlighted: false,
  }),
  ['12341-45127']: Capacity({
    id: '12341-45127',
    name: 'Warehouse 2',
    value: 23,
    type: 'wh',
    highlighted: true,
  }),
  ['12341-45128']: Capacity({
    id: '12341-45128',
    name: 'Warehouse 3',
    value: 23,
    type: 'wh',
    highlighted: true,
  }),
  ['12341-45129']: Capacity({
    id: '12341-45129',
    name: 'Warehouse 4',
    value: 23,
    type: 'wh',
  }),  ['12341-45110']: Capacity({
    id: '12341-45110',
    name: 'Warehouse 5',
    value: 23,
    type: 'wh',
    highlighted: false,
  }),  ['12341-45111']: Capacity({
    id: '12341-45111',
    name: 'Warehouse 6',
    value: 23,
    type: 'wh',
    highlighted: false,
  }),


});

export default capacityReducer;
