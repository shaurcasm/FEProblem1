import { FETCH_PLANETS, SELECT_PLANET } from '../constants/ActionTypes';
import produce from 'immer';

const INITIAL_STATE = {
    planetArray: [],
    loading: false,
    error: null
};

const planetList = (state = INITIAL_STATE, action) => produce(state, draft => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case FETCH_PLANETS.BEGIN:
            // Flag loading to show something while waiting if wanted.
            draft.loading = true;
            draft.error = null;
            break;
        
        case FETCH_PLANETS.SUCCESS:
            draft.loading = false;
            draft.planetArray = action.payload.planetArray;
            draft.error = null;
            break;

        case FETCH_PLANETS.FAILURE:
            draft.loading = false;
            draft.error = action.payload.error;
            draft.planetArray = [];
            break;

        case SELECT_PLANET.ADD:
            const { planetName } = action;
            if(planetName) {    
                draft.planetArray = draft.planetArray.map((planet) => {
                    if(planet.name === planetName) {
                        planet.selected = true;
                    }
                    return planet;
                });
            }
            break;
        
        case SELECT_PLANET.REPLACE:
            const { newPlanetName, previousPlanetName } = action;
            if(newPlanetName && previousPlanetName) {
                draft.planetArray = draft.planetArray.map((planet) => {
                    if(planet.name === previousPlanetName) {
                        planet.selected = false;
                    }
                    else if(planet.name === newPlanetName) {
                        planet.selected = true;
                    }
                    return planet;
                })
            }
            break;

        case SELECT_PLANET.RESET:
            draft.planetArray = draft.planetArray.map(planet => {
                planet.selected = false;
                return planet;
            });
            break;
    }
});

export default planetList;