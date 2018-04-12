/*
*
* TruckReducer
*
*/

import { Map } from 'immutable';

const INITIAL_STATE = Map({
  day: [
    [1345, 295, 103, 365, 75],
    [421, 129, 366, 350, 395],
    [421, 787, 591, 298, 329],
    [1492, 24, 217, 322, 478],
    [65, 1903, 313, 80, 205],
  ],
  week: [],
  month: [],
  year: [],
});

export default function interoperatabilityReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SOME_ACTION':
      return state;
    default:
      return state;
  }
}
