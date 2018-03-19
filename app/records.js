import { Record } from 'immutable';


const Note = new Record({
  id: '00000-00000',
  text: '',
  timestamp: '0000-00-00',
  author: '',
  type: '',
});

const Stakeholder = new Record({
  id: '00000-00000',
  name: '',
  phone: '',
  email: '',
  type: '',
});

const Capacity = new Record({
  id: '00000-00000',
  name: '',
  value: 0,
  type: '',
});

const Truck = new Record({
  to: '',
  from: '',
  id: '0000-0000',
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
});
export { Note, Stakeholder, Capacity, Truck }
