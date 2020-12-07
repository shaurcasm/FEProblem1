import { combineReducers } from 'redux';
import planetList from './planetList.js';
import vehicleList from './vehicleList.js';

const rootReducer = combineReducers({
    planetList,
    vehicleList
});

export default rootReducer