/*
We just need to press "w" to activate watch mode then press "u" to update 
the snapshot.
*/

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';  // Smart Components

// Component to be tested
import MainSection from './index.js';

const mockStore = configureStore();
const initialState = {
    planetList: {
        planetArray: [
            { name: 'Mercury', selected: false },
            { name: 'Venus', selected: false },
            { name: 'Earth', selected: false },
            { name: 'Mars', selected: false }
        ],
        loading: false,
        error: null
    },
    vehicleList: {
        vehicleArray: [
            { name: 'Mercury Star Runner', selected: [], 'total_no': 3, 'max_distance': 500, speed: 20 },
            { name: 'Millenium Falcon', selected: [], 'total_no': 3, 'max_distance': 400, speed: 20 },
            { name: 'Normandy', selected: [], 'total_no': 3, 'max_distance': 300, speed: 20 },
            { name: 'Bumblebee', selected: [], 'total_no': 3, 'max_distance': 200, speed: 20 }
        ],
        loading: false,
        error: null
    }
}
const store = mockStore(initialState);

describe('Container <MainSection />', () => {

    describe('render()', () => {

        test('Renders the component', () => {

            const wrapper = shallow(<MainSection store={store} />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })
    })
})