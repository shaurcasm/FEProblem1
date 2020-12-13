import { FETCH_VEHICLES, SELECT_VEHICLE } from '../constants/ActionTypes';
//import deepFreeze from 'deep-freeze';
import produce from 'immer';

const INITIAL_STATE = {
    vehicleArray: [],
    initialVehicleArray: [],
    loading: false,
    error: null
};
// DON'T TOUCH initialVehicleArray after the fetch success. It's for Bookkeeping and reset.

const vehicleList = (state = INITIAL_STATE, action) => 
    produce(state, draft => {
        //deepFreeze(state);
        // eslint-disable-next-line default-case
        switch(action.type) {
            case FETCH_VEHICLES.BEGIN: 
                //Flag loading to show something while waiting if wanted.
                draft.loading = true;
                draft.error = null;
                break;
            
            case FETCH_VEHICLES.SUCCESS:
                draft.loading = false;
                draft.error = null;
                draft.vehicleArray = action.payload.vehicleArray;
                draft.initialVehicleArray = action.payload.vehicleArray;
                break;

            case FETCH_VEHICLES.FAILURE:
                draft.loading = false;
                draft.error = action.payload.error;
                draft.vehicleArray = [];
                break;

            case SELECT_VEHICLE.ADD:
                const { vehicleName } = action;
                if(vehicleName) {
                    draft.vehicleArray = draft.vehicleArray.map((vehicle) => {
                        if(vehicle.name === action.vehicleName) {
                            vehicle['total_no'] -= 1;
                            vehicle.selected.push(true);
                        }
                        return vehicle;
                    })
                }
                break;

            case SELECT_VEHICLE.REPLACE:
                const { newVehicleName, previousVehicleName } = action;
                if(!(newVehicleName || previousVehicleName)) {
                    break;
                }
                const comparativeArray = draft.initialVehicleArray;
                draft.vehicleArray = draft.vehicleArray.map((vehicle, index) => {
                    if(vehicle.name === action.previousVehicleName) {
                        if(vehicle['total_no'] >= comparativeArray[index]['total_no']) {
                            return vehicle;
                        }
                        vehicle['total_no'] += 1;
                        vehicle.selected.pop();
                    }
                    else if(vehicle.name === action.newVehicleName) {
                        vehicle['total_no'] -= 1;
                        vehicle.selected.push(true);
                    }
                    return vehicle;
                })
                break;      
                
            case SELECT_VEHICLE.RESET:
                draft.vehicleArray = draft.initialVehicleArray;
                break;
        }
    })

export default vehicleList;