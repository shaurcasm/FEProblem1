/*
import selector from './selectedOptions';

const testState = {
    planetList: {
        planetArray: [
            { name: 'Mercury', selected: false },
            { name: 'Venus', selected: false },
            { name: 'Earth', selected: false },
            { name: 'Mars', selected: false }
        ]
    },
    vehicleList: {
        vehicleArray: [
            { name: 'Millenium Falcon', selected: [] },
            { name: 'Starship', selected: [] },
            { name: 'Normandy', selected: [] }
        ]
    }
};

const selectForMe = (thisManyPlanets, thisManyVehicles, thisState) => {
    for(let i = 0; i < thisManyPlanets; i++) {
        thisState.planetList.planetArray[i].selected = true;
    }

    for(let i, j = 0; i < thisManyVehicles; i++) {
        thisState.vehicleList.vehicleArray[j].selected.push(true);
        j += 1;
        if((thisManyVehicles > 3) && (j >= 3)) {
            j = 0;
        }
    }
}

describe('Options Selector', () => {

    test('No Options selected', () => {

        var expectedOptions = {
            'planet_names': [],
            'vehicle_names': []
        };
        expect(selector(testState)).toEqual(expectedOptions);
    });

    test('One Planet; One Vehicle selected', () => {

        var expectedOptions = {
            'planet_names': ['Mercury'],
            'vehicle_names': ['Millenium Falcon']
        };
        expect(selector(selectForMe(1, 1, testState))).toEqual(expectedOptions);
    });

    test('Two Planets; Two Vehicles selected', () => {

        var expectedOptions = {
            'planet_names': ['Mercury', 'Venus'],
            'vehicle_names': ['Millenium Falcon', 'Starship']
        };
        expect(selector(selectForMe(2, 2, testState))).toEqual(expectedOptions);
    });

    test('Three Planets; Three Vehicles selected', () => {

        var expectedOptions = {
            'planet_names': ['Mercury', 'Venus', 'Earth'],
            'vehicle_names': ['Millenium Falcon', 'Starship', 'Normandy']
        };
        expect(selector(selectForMe(3, 3, testState))).toEqual(expectedOptions);
    });

    test('Four Planets; Four Vehicles selected', () => {

        var expectedOptions = {
            'planet_names': ['Mercury', 'Venus', 'Earth', 'Mars'],
            'vehicle_names': ['Millenium Falcon', 'Starship', 'Normandy', 'Millenium Falcon']
        };
        expect(selector(selectForMe(4, 4, testState))).toEqual(expectedOptions);
    })
})
*/