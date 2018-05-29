import { Record } from 'immutable';

const MyRoute = new Record({
  location: '',
});

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
  role: '',
  url: '',
});

const Truck = new Record({
  id: '00000-00000',
  name: '',
  value: 0,
  to: {
    name: '',
    id: '',
    location: {
      x: 0,
      y: 0,
    },
  },
  from: {
    name: '',
    id: '',
    location: {
      x: 0,
      y: 0,
    },
  },
  activity: {
    time: 0,
    diff: 0,
  },
  sustainability: {
    value: 0,
    diff: 0,
  },
  highlighted: false,
});

const Warehouse = new Record({
  id: '00000-00000',
  name: '',
  capacity: 0,
  location: {
    x: 0,
    y: 0,
    name: '',
  },
  highlighted: false,
  current: false,
});

const Retailer = new Record({
  id: '00000-00000',
  name: '',
  capacity: 0,
  location: {
    x: 0,
    y: 0,
    name: '',
  },
  highlighted: false,
});

const Robot = new Record({
  id: '00000-00000',
  name: '',
  value: 0,
  to: {
    name: '',
    id: '',
    location: {
      x: 0,
      y: 0,
    },
  },
  from: {
    name: '',
    id: '',
    location: {
      x: 0,
      y: 0,
    },
  },
  type: '',
  performance: {
    value: '',
    diff: 0,
  },
  secpertask: {
    value: '',
    diff: 0,
  },
  battery: {
    value: '',
    diff: 0,
    status: '',
  },
  timetoreturn: 0,
  highlightedRobot: false,
  highlightedBattery: false,
  securityGrade: 0,
  privacyGrade: '',
});

export { MyRoute, Note, Stakeholder, Truck, Robot, Warehouse, Retailer };
