import { SELECT_VEHICLE } from '../constants/ActionTypes.js';

// Vehicle List
export const addVehicle = vehicleName => ({
    type: SELECT_VEHICLE.ADD,
    vehicleName
});

export const replaceVehicle = (newVehicleName, previousVehicleName) => ({
    type: SELECT_VEHICLE.REPLACE,
    newVehicleName,
    previousVehicleName
});

export const resetVehicleList = () => ({
    type: SELECT_VEHICLE.RESET
});