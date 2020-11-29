import { SELECT_PLANET } from '../constants/ActionTypes'

const INITIAL_STATE = []

export default function planetSelection(state = INITIAL_STATE, action) {
    var newState = [
        ...state
    ]

    // !!! Needs rework !!!
    switch(action.type) {
        case SELECT_PLANET.ADD:
            return [...state, action.planetName];
        
        case SELECT_PLANET.REPLACE:
            newState = newState.filter(planet => planet === action.previousPlanetName);
            return [...newState, action.newPlanetName];

        case SELECT_PLANET.RESET:
            return INITIAL_STATE;

        default:
            return state
    }
}