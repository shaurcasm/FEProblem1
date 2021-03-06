/*
Notes:
    1.  We just need to press "w" to activate watch mode then press "u" to update 
        the snapshot.
    2. Further React-redux testing research/practices: https://www.freecodecamp.org/news/testing-react-hooks/
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

describe('Container <MainSection />', () => {
    let store;

    describe('render()', () => {

        beforeEach(() => {
            store = mockStore(initialState);
        })

        test('Renders the component', () => {

            const wrapper = shallow(<MainSection store={store} />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })
    })
})