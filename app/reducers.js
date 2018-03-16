import { Map } from 'immutable';
import { Note, Stakeholder, Capacity } from './records';

const INITIAL_STATE = new Map({
  stakeholders: Map({
    ['12345-45678']: Stakeholder({
      id: '12345-45678',
      name: 'Raghu Nayyar',
      phone: '12 345 5678',
      email: 'sebastian@codingthesmartway.com',
      type: 'sc',
    }),
    ['12345-45677']: Stakeholder({
      id: '12345-45677',
      name: 'Kushal Khand',
      phone: '12 345 5678',
      email: 'sebastian@codingthesmartway.com',
      type: 'sc',
    }),
    ['12345-45676']: Stakeholder({
      id: '12345-45676',
      name: 'Aniket pant',
      phone: '12 345 5678',
      email: 'sebastian@codingthesmartway.com',
      type: 'ia',
    }),
    ['12345-45675']: Stakeholder({
      id: '12345-45675',
      name: 'Tushar Gayal',
      phone: '12 345 5678',
      email: 'sebastian@codingthesmartway.com',
      type: 'warehouselevel',
    }),
    ['12345-45674']: Stakeholder({
      id: '12345-45674',
      name: 'Arnav Goel',
      phone: '12 345 5678',
      email: 'sebastian@codingthesmartway.com',
      type: 'sc',
    }),
  }),
  notes: Map({
    ['12341-45674']: Note({
      id: '12341-45674',
      text: 'Note 1',
      timestamp: '2015-10-11',
      author: 'Raghu Nayyar',
      type: 'sc',
    }),
    ['12341-45675']: Note({
      id: '12341-45675',
      text: 'Note 2',
      timestamp: '2015-10-11',
      author: 'Raghu Nayyar',
      type: 'sc',
    }),
    ['12341-45676']: Note({
      id: '12341-45676',
      text: 'Note 3',
      timestamp: '2015-10-11',
      author: 'Raghu Nayyar',
      type: 'warehouselevel',
    }),
    ['12341-45677']: Note({
      id: '12341-45677',
      text: 'Note 4',
      timestamp: '2015-10-11',
      author: 'Raghu Nayyar',
      type: 'ia',
    }),
  }),
  capacity: Map({
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

  }),
});

export default function(state = INITIAL_STATE, action) {
  console.log(state);
  return state;
}
