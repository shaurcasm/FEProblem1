/*
We just need to press "w" to activate watch mode then press "u" to update 
the snapshot.
*/

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';  // Smart Components

// Component to be tested
import SelectionPanel from './index.js';

const mockStore = configureStore();
const initialState = {
    planetList: {
        planetArray: [
            {},
            {},
            {},
            {},
            {}
        ],
        loading: false,
        error: null
    },
    vehicleList: {
        vehicleArray: [
            {},
            {},
            {},
            {}
        ],
        loading: false,
        error: null
    }
}
const store = mockStore(initialState);

describe('Container <SelectionPanel />', () => {

    describe('render()', () => {

        test('Renders the component', () => {

            const wrapper = shallow(<SelectionPanel store={store} />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })
    })
})