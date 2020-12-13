import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';  // Smart Components

// Component to be tested
import App from './App';

describe('<App />', () => {

    describe('render()', () => {

        test('Renders the component', () => {

            const wrapper = shallow(<App />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })
    })
})