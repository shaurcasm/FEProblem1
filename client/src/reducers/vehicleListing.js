import { VEHICLES } from '../constants/Nouns';
import { VEHICLE } from '../constants/ActionTypes';

const INITIAL_VEHICLE_STATE = {
    [VEHICLES.SPACE_POD]: { quantity: 2, selected: false },
    [VEHICLES.SPACE_ROCKET]: { quantity: 1, selected: false },
    [VEHICLES.SPACE_SHIP]: { quantity: 2, selected: false },
    [VEHICLES.SPACE_SHUTTLE]: { quantity: 1, selected: false }
};

export default function vehicleListing(state = INITIAL_VEHICLE_STATE, action) {
    var newState = {
        ...state
    };

    switch(action.type) {
        case VEHICLE.ADD:
            if(!newState.hasOwnProperty(action.vehicleName)) {
                console.log("That vehincle name is not in system");
                return state;
            }
            newState[action.vehicleName].quantity--;
            newState[action.vehicleName].selected = true;

            return newState;

        case VEHICLE.REPLACE:
            if(!(newState.hasOwnProperty(action.newVehicleName) && newState.hasOwnProperty(action.previousVehicleName))) {
                console.log("One or the other vehicles isn't in the system.");
                return state;
            }
            // Dangerous. Possible errors here.
            newState[action.previousVehicleName].quantity++;
            newState[action.previousVehicleName].selected = false;
            newState[action.newVehicleName].quantity--;
            newState[action.newVehicleName].selected = true;

            return newState;

        case VEHICLE.RESET:
            return INITIAL_VEHICLE_STATE;

        default:
            return state;
    }
}