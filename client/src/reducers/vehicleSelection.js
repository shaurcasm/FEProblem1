import { VEHICLES } from '../constants/Nouns';
import { VEHICLE } from '../constants/ActionTypes';

const INITIAL_STATE = [
    { name: VEHICLES.SPACE_POD, quantity: 2, selected: false },
    { name: VEHICLES.SPACE_ROCKET, quantity: 1, selected: false },
    { name: VEHICLES.SPACE_SHIP, quantity: 2, selected: false },
    { name: VEHICLES.SPACE_SHUTTLE, quantity: 1, selected: false }
];

export default function vehicleSelection(state = INITIAL_STATE, action) {
    var newState = {
        ...state
    };

    switch(action.type) {
        case VEHICLE.ADD:
            newState = newState.map(function(vehicle) {
                if(vehicle.name === action.vehicleName) {
                    vehicle.quantity--;
                    vehicle.selected = true;
                }
                return vehicle;
            });

            return newState;

        case VEHICLE.REPLACE:
            if(action.previousVehicleName !== action.newVehicleName) {
                newState = newState.map(function(vehicle) {
                    if(vehicle.name === action.newVehicleName) {
                        vehicle.quantity--;
                        vehicle.selected = true;
                    }
                    else if(vehicle.name === action.previousVehicleName) {
                        vehicle.quantity++;
                        vehicle.selected = false;
                    }
                    return vehicle;
                });
            }
            // Dangerous. Possible errors here.
            
            return newState;

        case VEHICLE.RESET:
            return INITIAL_STATE;

        default:
            return state;
    }
}