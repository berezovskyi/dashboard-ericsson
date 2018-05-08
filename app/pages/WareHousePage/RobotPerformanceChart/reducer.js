/*
*
* Robot Performance Chart Reducer
*
*/
import { Map } from 'immutable';

const INITIAL_STATE = new Map({
  available: [
    'arm1',
    'arm2',
    'arm1',
    'arm2',
    'arm3',
    'arm4',
    'arm5',
    'robot1',
    'robot2',
    'robot3',
  ],
  day: [
    {
      time: '00:00 AM',
      arm1: 34,
      arm2: 12,
      arm3: 11,
      arm4: 56,
      arm5: 11,
      robot1: 19,
      robot2: 29,
      robot3: 15,
    },
    {
      time: '4:00 AM',
      arm1: 20,
      arm2: 34,
      arm3: 4,
      arm4: 11,
      arm5: 15,
      robot1: 34,
      robot2: 11,
      robot3: 15,
    },
    {
      time: '8:00 AM',
      arm1: 11,
      arm2: 34,
      arm3: 34,
      arm4: 25,
      arm5: 11,
      robot1: 15,
      robot2: 29,
      robot3: 15,
    },
    {
      time: '12:00 PM',
      arm1: 20,
      arm2: 1,
      arm3: 4,
      arm4: 27,
      arm5: 11,
      robot1: 45,
      robot2: 34,
      robot3: 15,
    },
    {
      time: '4:00 PM',
      arm1: 20,
      arm2: 34,
      arm3: 4,
      arm4: 21,
      arm5: 11,
      robot1: 9,
      robot2: 29,
      robot3: 12,
    },
    {
      time: '8:00 PM',
      arm1: 0,
      arm2: 0,
      arm3: 0,
      arm4: 0,
      arm5: 0,
      robot1: 0,
      robot2: 0,
      robot3: 0,
    },
    {
      time: '11:59 PM',
      arm1: 0,
      arm2: 0,
      arm3: 0,
      arm4: 0,
      arm5: 0,
      robot1: 0,
      robot2: 0,
      robot3: 0,
    },
  ],

  week: [
    {
      time: 'Monday',
      arm1: 20,
      arm2: 34,
      arm3: 4,
      arm4: 56,
      arm5: 11,
      arm6: 14,
      robot1: 19,
      robot2: 29,
      robot3: 12,
      robot4: 18,
      robot5: 21,
    },
    {
      time: 'Tuesday',
      arm1: 24,
      arm2: 44,
      robot1: 17,
    },
    {
      time: 'Wednesday',
      arm1: 18,
      arm2: 51,
      robot1: 16,
    },
    {
      time: 'Thursday',
      arm1: 45,
      arm2: 37,
      robot1: 4,
    },
    {
      time: 'Friday',
      arm1: 11,
      arm2: 38,
      robot1: 21,
    },
    {
      time: 'Saturday',
      arm1: 0,
      arm2: 0,
      robot1: 0,
    },
    {
      time: 'Sunday',
      arm1: 0,
      arm2: 0,
      robot1: 0,
    },
  ],
  month: [
    {
      time: 'Monday',
      arm1: 20,
      arm2: 34,
      robot1: 19,
    },
    {
      time: 'Tuesday',
      arm1: 24,
      arm2: 44,
      robot1: 17,
    },
    {
      time: 'Wednesday',
      arm1: 18,
      arm2: 51,
      robot1: 16,
    },
    {
      time: 'Thursday',
      arm1: 45,
      arm2: 37,
      robot1: 4,
    },
    {
      time: 'Friday',
      arm1: 11,
      arm2: 38,
      robot1: 21,
    },
    {
      time: 'Saturday',
      arm1: 0,
      arm2: 0,
      robot1: 0,
    },
    {
      time: 'Sunday',
      arm1: 0,
      arm2: 0,
      robot1: 0,
    },
  ],
  year: [
    {
      time: '2013',
      arm1: 20,
      arm2: 34,
      robot1: 19,
    },
    {
      time: '2014',
      arm1: 24,
      arm2: 44,
      robot1: 17,
    },
    {
      time: '2015',
      arm1: 18,
      arm2: 51,
      robot1: 16,
    },
    {
      time: '2016',
      arm1: 45,
      arm2: 37,
      robot1: 4,
    },
    {
      time: '2017',
      arm1: 11,
      arm2: 38,
      robot1: 21,
    },
  ],
});

export default function robotperformanceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SOME_ACTION':
      return state;
    default:
      return state;
  }
}
