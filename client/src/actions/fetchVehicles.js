import { FETCH_VEHICLES } from '../constants/ActionTypes.js';
import { vehiclesAPI } from '../constants/ApiUrls.js';   // Contains the URL to the API

export const fetchVehiclesBegin = () => ({
    type: FETCH_VEHICLES.BEGIN
});

export const fetchVehiclesSuccess = vehicleArray => ({
    type: FETCH_VEHICLES.SUCCESS,
    payload: { vehicleArray }
});

export const fetchVehiclesFailure = error => ({
    type: FETCH_VEHICLES.FAILURE,
    payload: { error }
});

export function fetchVehicles() {
    return dispatch => {
        dispatch(fetchVehiclesBegin());

        return fetch(vehiclesAPI)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                json = json.map((obj) => ({ ...obj, selected: false }))
                dispatch(fetchVehiclesSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchVehiclesFailure(error)));
    }
}

// Handle 4xx and 5xx errors for fetch.
function handleErrors(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}