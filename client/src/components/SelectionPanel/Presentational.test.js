import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import Presentational from './Presentational.js';

const testPlanets = [
    { name: 'Mercury', selected: false },
    { name: 'Venus', selected: false },
    { name: 'Earth', selected: false },
    { name: 'Mars', selected: false }
];

describe('Presentational <SelectionPanel />', () => {

    describe('render()', () => {

        test('Renders the default Selection Panel', () => {
            const component = shallow(<Presentational planets={testPlanets} />);

            expect(toJson(component)).toMatchSnapshot();
        });

        test('Renders the reversed Selection Panel', () => {
            const component = shallow(<Presentational planets={testPlanets} direction='row-reverse' />);

            expect(toJson(component)).toMatchSnapshot();
        });
    });
});