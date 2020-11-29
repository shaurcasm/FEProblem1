import { FETCH_PLANETS, SELECT_PLANET } from '../constants/ActionTypes'

const INITIAL_STATE = {
    planetArray: [],
    loading: false,
    error: null
};

export default function planetListReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PLANETS.BEGIN:
            // Flag loading to show something while waiting if wanted.
            return {
                ...state,
                loading: true,
                error: null
            };
        
        case FETCH_PLANETS.SUCCESS:
            return {
                ...state,
                loading: false,
                planetArray: action.payload.planetArray
            };

        case FETCH_PLANETS.FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                planetArray: []
            };

        case SELECT_PLANET.ADD:
            return {
                ...state,
                planetArray: state.planetArray.map((planet) => {
                    if(planet.name === action.planetName) {
                        planet.selected = true;
                    }
                    return planet;
                })
            }
        
        case SELECT_PLANET.REPLACE:
            return {
                ...state,
                planetArray: state.planetArray.map((planet) => {
                    if(planet.name === action.previousPlanetName) {
                        planet.selected = false;
                    }
                    else if(planet.name === action.newPlanetName) {
                        planet.selected = true;
                    }
                    return planet;
                })
            }

        case SELECT_PLANET.RESET:
            return {
                ...state,
                planetArray: state.planetArray.map((planet) => {
                    planet.selected = false;
                    return planet;
                })
            }
            
        default:
            return state;
    }
}