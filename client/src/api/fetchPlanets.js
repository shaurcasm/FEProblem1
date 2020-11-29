import  { planetsAPI } from '../constants/ApiUrls.js'
import fetch from 'node-fetch'

export var planetList = [];

export const fetchPlanetList = () => {

    fetch(planetsAPI)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            json = json.map((obj) => ({ ...obj, selected: false }));
            console.log(json);
        })
        .then(array => {
            planetList = array;
        })
        .catch(error => console.log(error));
}

// Handle 4xx and 5xx errors for fetch.
function handleErrors(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}