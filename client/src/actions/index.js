import * as type from '../constants/ActionTypes';
//import { planetsAPI, vehiclesAPI, tokenAPI, findAPI } from '../constants/API'

// Vehicle List
export const addVehicle = vehicleName => ({ type: type.VEHICLE.ADD, vehicleName }),
    replaceVehicle = (newVehicleName, previousVehicleName) => ({ type: type.VEHICLE.REPLACE, newVehicleName, previousVehicleName }),
    resetVehicleList = () => ({ type: type.VEHICLE.RESET });

