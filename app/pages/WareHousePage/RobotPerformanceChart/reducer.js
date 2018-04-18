/*
*
* Robot Performance Chart Reducer
*
*/
import { Map } from 'immutable';
import { Robot } from '../../../records';

const INITIAL_STATE = new Map({
  ['12345-12345']: new Robot({
    id: '12345-12345',
    name: 'Arm 1',
    performance: {
      day: [
        {
          time: '0000',
          value: 20,
        },
        {
          time: '0400',
          value: 24,
        },
        {
          time: '0800',
          value: 18,
        },
        {
          time: '1200',
          value: 45,
        },
        {
          time: '1600',
          value: 11,
        },
        {
          time: '2000',
          value: 0,
        },
        {
          time: '2359',
          value: 0,
        },
      ],
      week: [
        {
          time: 'Monday',
          value: 20,
        },
        {
          time: 'Tuesday',
          value: 24,
        },
        {
          time: 'Wednesday',
          value: 18,
        },
        {
          time: 'Thursday',
          value: 45,
        },
        {
          time: 'Friday',
          value: 11,
        },
        {
          time: 'Saturday',
          value: 0,
        },
        {
          time: 'Sunday',
          value: 0,
        },
      ],
      month: [
        {
          time: 'Jan',
          value: 20,
        },
        {
          time: 'Feb',
          value: 24,
        },
        {
          time: 'Mar',
          value: 18,
        },
        {
          time: 'Apr',
          value: 45,
        },
        {
          time: 'May',
          value: 11,
        },
        {
          time: 'Jun',
          value: 0,
        },
        {
          time: 'Jul',
          value: 0,
        },
        {
          time: 'Aug',
          value: 0,
        },
        {
          time: 'Sep',
          value: 0,
        },
        {
          time: 'Oct',
          value: 0,
        },
        {
          time: 'Nov',
          value: 0,
        },
        {
          time: 'Dec',
          value: 0,
        },
      ],
      year: [
        {
          time: '2013',
          value: 20,
        },
        {
          time: '2014',
          value: 24,
        },
        {
          time: '2015',
          value: 18,
        },
        {
          time: '2016',
          value: 45,
        },
        {
          time: '2017',
          value: 11,
        },
      ],
    },
  }),
  ['12345-12346']: new Robot({
    id: '12345-12346',
    name: 'Arm 2',
    performance: {
      day: [
        {
          time: '0000',
          value: 34,
        },
        {
          time: '0400',
          value: 10,
        },
        {
          time: '0800',
          value: 9,
        },
        {
          time: '1200',
          value: 11,
        },
        {
          time: '1600',
          value: 23,
        },
        {
          time: '2000',
          value: 0,
        },
        {
          time: '2359',
          value: 0,
        },
      ],
      week: [
        {
          time: 'Monday',
          value: 20,
        },
        {
          time: 'Tuesday',
          value: 24,
        },
        {
          time: 'Wednesday',
          value: 18,
        },
        {
          time: 'Thursday',
          value: 45,
        },
        {
          time: 'Friday',
          value: 11,
        },
        {
          time: 'Saturday',
          value: 0,
        },
        {
          time: 'Sunday',
          value: 0,
        },
      ],
      month: [
        {
          time: 'Jan',
          value: 20,
        },
        {
          time: 'Feb',
          value: 24,
        },
        {
          time: 'Mar',
          value: 18,
        },
        {
          time: 'Apr',
          value: 45,
        },
        {
          time: 'May',
          value: 11,
        },
        {
          time: 'Jun',
          value: 0,
        },
        {
          time: 'Jul',
          value: 0,
        },
        {
          time: 'Aug',
          value: 0,
        },
        {
          time: 'Sep',
          value: 0,
        },
        {
          time: 'Oct',
          value: 0,
        },
        {
          time: 'Nov',
          value: 0,
        },
        {
          time: 'Dec',
          value: 0,
        },
      ],
      year: [
        {
          time: '2013',
          value: 7,
        },
        {
          time: '2014',
          value: 14,
        },
        {
          time: '2015',
          value: 45,
        },
        {
          time: '2016',
          value: 34,
        },
        {
          time: '2017',
          value: 18,
        },
      ],
    },
  }),
  ['12345-12367']: new Robot({
    id: '12345-12367',
    name: 'Robot 1',
    performance: {
      day: [
        {
          time: '0000',
          value: 34,
        },
        {
          time: '0400',
          value: 10,
        },
        {
          time: '0800',
          value: 9,
        },
        {
          time: '1200',
          value: 11,
        },
        {
          time: '1600',
          value: 23,
        },
        {
          time: '2000',
          value: 0,
        },
        {
          time: '2359',
          value: 0,
        },
      ],
      week: [
        {
          time: 'Monday',
          value: 20,
        },
        {
          time: 'Tuesday',
          value: 24,
        },
        {
          time: 'Wednesday',
          value: 18,
        },
        {
          time: 'Thursday',
          value: 45,
        },
        {
          time: 'Friday',
          value: 11,
        },
        {
          time: 'Saturday',
          value: 0,
        },
        {
          time: 'Sunday',
          value: 0,
        },
      ],
      month: [
        {
          time: 'Jan',
          value: 20,
        },
        {
          time: 'Feb',
          value: 24,
        },
        {
          time: 'Mar',
          value: 18,
        },
        {
          time: 'Apr',
          value: 45,
        },
        {
          time: 'May',
          value: 11,
        },
        {
          time: 'Jun',
          value: 0,
        },
        {
          time: 'Jul',
          value: 0,
        },
        {
          time: 'Aug',
          value: 0,
        },
        {
          time: 'Sep',
          value: 0,
        },
        {
          time: 'Oct',
          value: 0,
        },
        {
          time: 'Nov',
          value: 0,
        },
        {
          time: 'Dec',
          value: 0,
        },
      ],
      year: [
        {
          time: '2013',
          value: 7,
        },
        {
          time: '2014',
          value: 14,
        },
        {
          time: '2015',
          value: 45,
        },
        {
          time: '2016',
          value: 34,
        },
        {
          time: '2017',
          value: 18,
        },
      ],
    },
  }),
});

export default function robotperformanceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SOME_ACTION':
      return state;
    default:
      return state;
  }
}
