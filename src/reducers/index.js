import { combineReducers } from 'redux';
import GetCounterReducer from './counter';
const Reducers = combineReducers({ getCountDataMain: GetCounterReducer });
export default Reducers;