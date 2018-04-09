import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
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

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    notes: notesReducer,
    stakeholders: stakeholdersReducer,
    capacity: capacityReducer,
    truck: truckReducer,
    robot: robotReducer,
    battery: batteryReducer,
    robotperformance: robotperformanceReducer,
    performancerisk: performanceriskReducer,
    interoperatability: interoperatabilityReducer,
    ...injectedReducers,
  });
}
