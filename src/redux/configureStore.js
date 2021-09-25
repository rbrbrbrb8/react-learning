import { combineReducers,createStore } from "redux";
import currentEventReducer from './ducks/currentEvent';
import dateEventsReducer from './ducks/dateEvents';

const reducer = combineReducers({
  currentEvent:currentEventReducer,
  dateEvents:dateEventsReducer
});

const store = createStore(reducer);

export default store;