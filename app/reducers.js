import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import stakeholdersReducer from './entities/stakeholder/reducer';
import notesReducer from './entities/note/reducer';
import truckReducer from './entities/truck/reducer';
import robotReducer from './entities/robot/reducer';
import riskperformanceReducer
  from './entities/riskperformance/reducer';
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
    performancerisk: riskperformanceReducer,
    interoperatability: interoperatabilityReducer,
    warehouse: warehouseReducer,
    retailer: retailerReducer,
    ...injectedReducers,
  });
}
