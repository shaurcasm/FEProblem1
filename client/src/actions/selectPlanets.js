import { SELECT_PLANET } from '../constants/ActionTypes';

// Planet List
export const addPlanet = planetName => ({
    type: SELECT_PLANET.ADD,
    planetName
});

export const replacePlanet = (newPlanetName, previousPlanetName) => ({
    type: SELECT_PLANET.REPLACE,
    newPlanetName,
    previousPlanetName
});

export const resetPlanetList = () => ({
    type: SELECT_PLANET.RESET
});