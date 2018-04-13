/*
*
* TruckReducer
*
*/

import { Map } from 'immutable';

const INITIAL_STATE = Map({
  day: [
    {
      id: 'performance',
      data: [
        {
          x: '0000',
          y: 57,
        },
        {
          x: '0200',
          y: 58,
        },
        {
          x: '0400',
          y: 29,
        },
        {
          x: '0600',
          y: 18,
        },
        {
          x: '0800',
          y: 15,
        },
        {
          x: '1000',
          y: 14,
        },
        {
          x: '1200',
          y: 2,
        },
        {
          x: '1400',
          y: 20,
        },
        {
          x: '1600',
          y: 26,
        },
        {
          x: '1800',
          y: 26,
        },
        {
          x: '2000',
          y: 26,
        },
        {
          x: '2200',
          y: 26,
        },
        {
          x: '2359',
          y: 26,
        },
      ],
    },
    {
      id: 'risk',
      data: [
        {
          x: '0000',
          y: 56,
        },
        {
          x: '0200',
          y: 45,
        },
        {
          x: '0400',
          y: 56,
        },
        {
          x: '0600',
          y: 1,
        },
        {
          x: '0800',
          y: 32,
        },
        {
          x: '1000',
          y: 39,
        },
        {
          x: '1200',
          y: 26,
        },
        {
          x: '1400',
          y: 44,
        },
        {
          x: '1600',
          y: 9,
        },
        {
          x: '1800',
          y: 9,
        },
        {
          x: '2000',
          y: 9,
        },
        {
          x: '2200',
          y: 9,
        },
        {
          x: '2359',
          y: 9,
        },
      ],
    },
  ],
  week: [
    {
      id: 'performance',
      data: [
        {
          x: 'Monday',
          y: 57,
        },
        {
          x: 'Tuesday',
          y: 58,
        },
        {
          x: 'Wednesday',
          y: 29,
        },
        {
          x: 'Thursday',
          y: 18,
        },
        {
          x: 'Friday',
          y: 15,
        },
        {
          x: 'Saturday',
          y: 14,
        },
        {
          x: 'Sunday',
          y: 2,
        },
      ],
    },
    {
      id: 'risk',
      data: [
        {
          x: 'Monday',
          y: 56,
        },
        {
          x: 'Tuesday',
          y: 45,
        },
        {
          x: 'Wednesday',
          y: 56,
        },
        {
          x: 'Thursday',
          y: 1,
        },
        {
          x: 'Friday',
          y: 32,
        },
        {
          x: 'Saturday',
          y: 39,
        },
        {
          x: 'Sunday',
          y: 26,
        },
      ],
    },
  ],
  month: [
    {
      id: 'performance',
      data: [
        {
          x: 'January',
          y: 57,
        },
        {
          x: 'February',
          y: 58,
        },
        {
          x: 'March',
          y: 29,
        },
        {
          x: 'April',
          y: 18,
        },
        {
          x: 'May',
          y: 15,
        },
        {
          x: 'June',
          y: 14,
        },
        {
          x: 'July',
          y: 2,
        },
        {
          x: 'August',
          y: 20,
        },
        {
          x: 'September',
          y: 26,
        },
        {
          x: 'October',
          y: 26,
        },
        {
          x: 'November',
          y: 26,
        },
        {
          x: 'December',
          y: 26,
        },
      ],
    },
    {
      id: 'risk',
      data: [
        {
          x: 'January',
          y: 56,
        },
        {
          x: 'February',
          y: 45,
        },
        {
          x: 'March',
          y: 56,
        },
        {
          x: 'April',
          y: 1,
        },
        {
          x: 'May',
          y: 32,
        },
        {
          x: 'June',
          y: 39,
        },
        {
          x: 'July',
          y: 26,
        },
        {
          x: 'August',
          y: 44,
        },
        {
          x: 'September',
          y: 9,
        },
        {
          x: 'October',
          y: 9,
        },
        {
          x: 'November',
          y: 9,
        },
        {
          x: 'December',
          y: 9,
        },
      ],
    },
  ],
  year: [
    {
      id: 'performance',
      data: [
        {
          x: 2008,
          y: 57,
        },
        {
          x: 2009,
          y: 58,
        },
        {
          x: 2010,
          y: 29,
        },
        {
          x: 2011,
          y: 18,
        },
        {
          x: 2012,
          y: 15,
        },
        {
          x: 2013,
          y: 14,
        },
        {
          x: 2014,
          y: 2,
        },
        {
          x: 2015,
          y: 20,
        },
        {
          x: 2016,
          y: 26,
        },
        {
          x: 2017,
          y: 26,
        },
        {
          x: 2018,
          y: 26,
        },
      ],
    },
    {
      id: 'risk',
      data: [
        {
          x: 2008,
          y: 56,
        },
        {
          x: 2009,
          y: 45,
        },
        {
          x: 2010,
          y: 56,
        },
        {
          x: 2011,
          y: 1,
        },
        {
          x: 2012,
          y: 32,
        },
        {
          x: 2013,
          y: 39,
        },
        {
          x: 2014,
          y: 26,
        },
        {
          x: 2015,
          y: 44,
        },
        {
          x: 2016,
          y: 9,
        },
        {
          x: 2017,
          y: 9,
        },
        {
          x: 2018,
          y: 9,
        },
      ],
    },
  ],
});

export default function performanceriskReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SOME_ACTION':
      return state;
    default:
      return state;
  }
}
