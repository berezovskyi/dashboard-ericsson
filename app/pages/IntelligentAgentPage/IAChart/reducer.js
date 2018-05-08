/*
*
* IA Chart Reducer
*
*/

import { Map } from 'immutable';

const INITIAL_STATE = Map({
  available: ['arm1', 'arm2', 'arm3', 'arm4', 'arm5'],
  day: [
    [135, 29, 103, 365, 75],
    [421, 129, 366, 350, 395],
    [421, 787, 591, 8, 329],
    [1492, 2, 217, 322, 478],
    [65, 194, 313, 80, 205],
  ],
  week: [
    [15, 295, 103, 365, 75],
    [421, 129, 366, 350, 395],
    [41, 787, 591, 298, 329],
    [1492, 24, 217, 322, 478],
    [65, 19, 313, 80, 25],
  ],
  month: [
    [15, 295, 103, 36, 75],
    [421, 129, 366, 350, 395],
    [421, 787, 59, 298, 329],
    [1492, 24, 217, 3, 478],
    [65, 1903, 313, 80, 205],
  ],
  year: [
    [15, 295, 103, 365, 75],
    [421, 129, 36, 350, 395],
    [42, 787, 51, 298, 329],
    [192, 24, 217, 322, 478],
    [652, 190, 313, 80, 205],
  ],
});

export default function interoperatabilityReducer(
  state = INITIAL_STATE,
  action,
) {
  switch (action.type) {
    case 'SOME_ACTION':
      return state;
    default:
      return state;
  }
}
