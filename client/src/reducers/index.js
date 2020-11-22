import { combineReducers } from 'redux'
import planetListing from './planetListing'
import vehicleListing from './vehicleListing'

const rootReducer = combineReducers({
    planetListing,
    vehicleListing
});

export default rootReducer