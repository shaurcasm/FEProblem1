import { PLANET } from '../constants/ActionTypes'
import { PLANETS } from '../constants/Nouns'

const INITIAL_PLANET_STATE = {
    [PLANETS.DONLON]: false,
    [PLANETS.ENCHAI]: false,
    [PLANETS.JEBING]: false,
    [PLANETS.LERBIN]: false,
    [PLANETS.PINGASOR]: false,
    [PLANETS.SAPIR]: false
};

export default function planetListing(state = INITIAL_PLANET_STATE, action) {
    var newState = {
        ...state
    };

    switch(action.type) {
        case PLANET.ADD:
            if(!newState.hasOwnProperty(action.planetName)) {
                console.log("The planet name given, doesn't match a planet name in system.");
                return state;
            }
            newState[action.planetName] = true;
            return newState;
        
        case PLANET.REPLACE:
            if(!(newState.hasOwnProperty(action.newPlanetName) && newState.hasOwnProperty(action.previousPlanetName))) {
                console.log("The new or previous or both planets don't match with system.");
                return state;
            }
            newState[action.previousPlanetName] = false;
            newState[action.newPlanetName] = true;
            return newState;

        case PLANET.RESET:
            return INITIAL_PLANET_STATE;

        default:
            return state
    }
}