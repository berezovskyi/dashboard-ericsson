/*
*
* Stakeholders Reducer
*
*/

import { Map } from 'immutable';
import { Stakeholder } from '../../../records';


const stakeholdersReducer = Map({
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
});

export default stakeholdersReducer;
