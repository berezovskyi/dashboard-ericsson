import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import stakeholdersReducer from './entities/stakeholder/reducer';
import notesReducer from './shared/components/Notes/reducer';
import truckReducer from './entities/truck/reducer';
import robotReducer from './pages/IntelligentAgentPage/Robot/reducer';
import batteryReducer from './pages/WareHousePage/Battery/reducer';
import robotperformanceReducer
  from './pages/WareHousePage/RobotPerformanceChart/reducer';
import performanceriskReducer from './pages/SupplyChainPage/RPChart/reducer';
import interoperatabilityReducer
  from './pages/IntelligentAgentPage/IAChart/reducer';
import { MyRoute } from './records';
import warehouseReducer from './entities/warehouse/reducer';
import retailerReducer from './entities/retailer/reducer';

// Initial routing state
const routeInitialState = new MyRoute({
  location: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.setIn(['location'], action.payload);
    default:
      return state;
  }
}

export function requestFailed(type, response) {
  return {
    type,
    payload: {
      loading: false,
      status: response.status,
      statusText: response.statusText,
    },
  };
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    notes: notesReducer,
    stakeholders: stakeholdersReducer,
    trucks: truckReducer,
    robots: robotReducer,
    battery: batteryReducer,
    robotperformance: robotperformanceReducer,
    performancerisk: performanceriskReducer,
    interoperatability: interoperatabilityReducer,
    warehouse: warehouseReducer,
    retailer: retailerReducer,
    ...injectedReducers,
  });
}
