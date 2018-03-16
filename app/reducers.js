import { Map } from 'immutable';

import stakeholdersReducer from './shared/components/Stakeholders/reducer';
import notesReducer from './shared/components/Notes/reducer';
import capacityReducer from './pages/SupplyChainPage/Capacity/reducer';

const INITIAL_STATE = new Map({});

export default function (state = INITIAL_STATE, action) {
  return Map({
    notes: notesReducer,
    stakeholders: stakeholdersReducer,
    capacity: capacityReducer,
  });
}
