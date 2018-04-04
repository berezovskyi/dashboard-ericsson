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

const INITIAL_STATE = new Map({});

export default function(state = INITIAL_STATE, action) {
  return Map({
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
}
