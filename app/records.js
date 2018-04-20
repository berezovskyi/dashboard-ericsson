import { Record } from 'immutable';

const MyRoute = new Record({
  location: '',
})

const Note = new Record({
  id: '00000-00000',
  text: '',
  timestamp: '0000-00-00',
  author: '',
  type: '',
  highlighted: false,
});

const Stakeholder = new Record({
  id: '00000-00000',
  name: '',
  phone: '',
  email: '',
  type: '',
  highlighted: false,
});

const Capacity = new Record({
  id: '00000-00000',
  name: '',
  value: 0,
  type: '',
  highlighted: false,
});

const Truck = new Record({
  to: '',
  from: '',
  id: '00000-00000',
  name: '',
  value: 0,
  activity: {
    time: '',
    diff: '',
  },
  sustainability: {
    value: '',
    diff: '',
  },
  highlighted: false,
});

const Robot = new Record({
  id: '00000-00000',
  name: '',
  value: 0,
  performance: {
    value: '',
    diff: '',
  },
  secpertask: {
    time: '',
    diff: '',
  },
  highlighted: false,
});

const Battery = new Record({
  id: '00000-00000',
  name: '',
  from: {
    name: '',
    id: '00000-00000',
  },
  to: {
    name: '',
    id: '00000-00000',
  },
  batterystatus: {
    value: '',
    status: '',
  },
  performance: {
    value: '',
    diff: '',
  },
  total: {
    hours: '',
    diff: '',
  },
  timetoreturn: 0,
  highlighted: false,
});

export { MyRoute, Note, Stakeholder, Capacity, Truck, Robot, Battery };
