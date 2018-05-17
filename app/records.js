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
  },
  highlighted: false,
});

const Retailer = new Record({
  id: '00000-00000',
  name: '',
  capacity: 0,
  location: {
    x: 0,
    y: 0,
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

export {
  MyRoute,
  Note,
  Stakeholder,
  Truck,
  Robot,
  Battery,
  Warehouse,
  Retailer,
};
