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
    name: 'Tushar Goyal',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'wh',
  }),
  ['12345-45676']: Stakeholder({
    id: '12345-45676',
    name: 'Didem Gurdur',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'wh',
  }),
  ['12345-45677']: Stakeholder({
    id: '12345-45677',
    name: 'Arnav Goel',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'sc',
  }),
  ['12345-45678']: Stakeholder({
    id: '12345-45678',
    name: 'Deepika Khurana',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'sc',
  }),
  ['12345-45679']: Stakeholder({
    id: '12345-45679',
    name: 'Ish Khurana',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'wh',
  }),
  ['12345-45680']: Stakeholder({
    id: '12345-45680',
    name: 'Pawan nayyar',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'sc',
  }),
  ['12345-45681']: Stakeholder({
    id: '12345-45681',
    name: 'Arnav Goel',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'sc',
  }),
  ['12345-45682']: Stakeholder({
    id: '12345-45682',
    name: 'Pierce Brosnan',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'wh',
  }),
  ['12345-45683']: Stakeholder({
    id: '12345-45683',
    name: 'James Bond',
    phone: '12 345 5678',
    email: 'sebastian@codingthesmartway.com',
    type: 'ia',
  }),
  ['12345-45684']: Stakeholder({
    id: '12345-45684',
    name: 'Denise Richards',
    phone: '12 345 5678',
    email: 'sebastian@yolo.com',
    type: 'wh',
  }),
});

export default stakeholdersReducer;
