/*
*
* Notes Reducer
*
*/

import { Map } from 'immutable';
import { Note } from '../../../records';


const notesReducer = Map({
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
    type: 'wh',
  }),
  ['12341-45677']: Note({
    id: '12341-45677',
    text: 'Note 4',
    timestamp: '2015-10-11',
    author: 'Raghu Nayyar',
    type: 'ia',
  }),
});


export default notesReducer;
