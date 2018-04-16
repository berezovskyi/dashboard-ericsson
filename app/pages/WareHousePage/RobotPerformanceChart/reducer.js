/*
*
* Robot Performance Chart Reducer
*
*/
import { Map } from 'immutable';

const INITIAL_STATE = new Map({
  day: [
    {
      time: '0000',
      arm1: 20,
      arm2: 34,
      robot1: 19,
    },
    {
      time: '0400',
      arm1: 24,
      arm2: 44,
      robot1: 17,
    },
    {
      time: '0800',
      arm1: 18,
      arm2: 51,
      robot1: 16,
    },
    {
      time: '1200',
      arm1: 45,
      arm2: 37,
      robot1: 4,
    },
    {
      time: '1600',
      arm1: 11,
      arm2: 38,
      robot1: 21,
    },
    {
      time: '2000',
      arm1: 0,
      arm2: 0,
      robot1: 0,
    },
    {
      time: '2359',
      arm1: 0,
      arm2: 0,
      robot1: 0,
    },
  ],

  week: [
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
      time: 2013,
      arm1: 20,
      arm2: 34,
      robot1: 19,
    },
    {
      time: 2014,
      arm1: 24,
      arm2: 44,
      robot1: 17,
    },
    {
      time: 2015,
      arm1: 18,
      arm2: 51,
      robot1: 16,
    },
    {
      time: 2016,
      arm1: 45,
      arm2: 37,
      robot1: 4,
    },
    {
      time: 2017,
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
