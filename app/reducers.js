import { Map } from 'immutable';

import stakeholdersReducer from './shared/components/Stakeholders/reducer';
import notesReducer from './shared/components/Notes/reducer';
import capacityReducer from './pages/SupplyChainPage/Capacity/reducer';
import truckReducer from './pages/SupplyChainPage/Truck/reducer';
import robotReducer from './pages/IntelligentAgentPage/Robot/reducer';
import batteryReducer from './pages/WareHousePage/Battery/reducer';
import robotperformanceReducer
  from './pages/WareHousePage/RobotPerformanceChart/reducer';
import performanceriskReducer from './pages/SupplyChainPage/RPChart/reducer';
import interoperatabilityReducer
  from './pages/IntelligentAgentPage/IAChart/reducer';

const INITIAL_STATE = Map({
  notes: notesReducer,
  stakeholders: stakeholdersReducer,
  capacity: capacityReducer,
  truck: truckReducer,
  robot: robotReducer,
  battery: batteryReducer,
  robotperformance: robotperformanceReducer,
  performancerisk: performanceriskReducer,
  interoperatability: interoperatabilityReducer,
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_CAPACITY_HIGHLIGHT':
      return state.setIn(
        ['capacity', action.id, 'highlighted'],
        action.highlighted,
      );
    case 'UPDATE_NOTES_HIGHLIGHT':
      return state.setIn(
        ['notes', action.id, 'highlighted'],
        action.highlighted,
      );
    case 'UPDATE_STAKEHOLDERS_HIGHLIGHT':
      return state.setIn(
        ['stakeholders', action.id, 'highlighted'],
        action.highlighted,
      );
    case 'UPDATE_TRUCKS_HIGHLIGHT':
      return state.setIn(
        ['truck', action.id, 'highlighted'],
        action.highlighted,
      );
    case 'UPDATE_ROBOT_HIGHLIGHT':
      return state.setIn(
        ['robot', action.id, 'highlighted'],
        action.highlighted,
      );
    case 'UPDATE_BATTERY_HIGHLIGHT':
      return state.setIn(
        ['robot', action.id, 'highlighted'],
        action.highlighted,
      );
    default:
      return state;
  }
}
