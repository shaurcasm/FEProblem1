import { PLANET, VEHICLE } from '../constants/ActionTypes';

// Planet List
export const addPlanet = planetName => ({ type: PLANET.ADD, planetName }),
    replacePlanet = (newPlanetName, previousPlanetName) => ({ type: PLANET.REPLACE, newPlanetName, previousPlanetName }),
    resetPlanetList = () => ({ type: PLANET.RESET });

// Vehicle List
export const addVehicle = vehicleName => ({ type: VEHICLE.ADD, vehicleName }),
    replaceVehicle = (newVehicleName, previousVehicleName) => ({ type: VEHICLE.REPLACE, newVehicleName, previousVehicleName }),
    resetVehicleList = () => ({ type: VEHICLE.RESET });
