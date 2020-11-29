import { FETCH_PLANETS } from '../constants/ActionTypes.js'
import { planetsAPI } from '../constants/ApiUrls.js'   // Contains the URL to the API

export const fetchPlanetsBegin = () => ({
    type: FETCH_PLANETS.BEGIN
});

export const fetchPlanetsSuccess = planetArray => ({
    type: FETCH_PLANETS.SUCCESS,
    payload: { planetArray }
});

export const fetchPlanetsFailure = error => ({
    type: FETCH_PLANETS.FAILURE,
    payload: { error }
});

export function fetchPlanets() {
    return dispatch => {
        dispatch(fetchPlanetsBegin());

        return fetch(planetsAPI)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                json = json.map((obj) => ({ ...obj, selected: false }))
                dispatch(fetchPlanetsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchPlanetsFailure(error)));
    }
}

// Handle 4xx and 5xx errors for fetch.
function handleErrors(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
