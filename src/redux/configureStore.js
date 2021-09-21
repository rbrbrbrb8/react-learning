import { combineReducers,createStore } from "redux";
import currentEventReducer from './ducks/currentEvent';

const reducer = combineReducers({
  currentEvent:currentEventReducer
});

const store = createStore(reducer);

export default store;