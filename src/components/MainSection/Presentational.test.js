import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import Presentational from './Presentational.js';

describe('Presentational <MainSection />', () => {

    const mockFetchPlanets = jest.fn();
    const mockFetchVehicles = jest.fn();
    const mockOptions = {
        'planet_names': [],
        'vehicle_names': []
    }

    describe('render()', () => {

        test('Renders one Panel at default', () => {

            var testVisibility = {
                second: 'none',
                third: 'none',
                fourth: 'none',
                submitButton: false
            };
            const component = shallow(<Presentational loading={false} error={null} selectionPanelVisibility={testVisibility} selectedOptions={mockOptions} fetchPlanets={mockFetchPlanets} fetchVehicle={mockFetchVehicles} />);
            
            expect(toJson(component)).toMatchSnapshot();
        });

        test('Renders two panels when one planets selected', () => {

            var testVisibility = {
                second: 'flex',
                third: 'none',
                fourth: 'none',
                submitButton: false
            };
            const component = shallow(<Presentational loading={false} error={null} selectionPanelVisibility={testVisibility} selectedOptions={mockOptions} fetchPlanets={mockFetchPlanets} fetchVehicle={mockFetchVehicles} />);

            expect(toJson(component)).toMatchSnapshot();
        });

        test('Renders three panels when two planets selected', () => {

            var testVisibility = {
                second: 'flex',
                third: 'flex',
                fourth: 'none',
                submitButton: false
            };
            const component = shallow(<Presentational loading={false} error={null} selectionPanelVisibility={testVisibility} selectedOptions={mockOptions} fetchPlanets={mockFetchPlanets} fetchVehicle={mockFetchVehicles} />);

            expect(toJson(component)).toMatchSnapshot();
        });

        test('Renders four panels when three planets selected', () => {

            var testVisibility = {
                second: 'flex',
                third: 'flex',
                fourth: 'flex',
                submitButton: false
            };
            const component = shallow(<Presentational loading={false} error={null} selectionPanelVisibility={testVisibility} selectedOptions={mockOptions} fetchPlanets={mockFetchPlanets} fetchVehicle={mockFetchVehicles} />);

            expect(toJson(component)).toMatchSnapshot();
        });

        test('Renders all panels and enables submit Button when four planets selected', () => {

            var testVisibility = {
                second: 'flex',
                third: 'flex',
                fourth: 'flex',
                submitButton: true
            };
            const component = shallow(<Presentational loading={false} error={null} selectionPanelVisibility={testVisibility} selectedOptions={mockOptions} fetchPlanets={mockFetchPlanets} fetchVehicle={mockFetchVehicles} />);

            expect(toJson(component)).toMatchSnapshot();
        });
    });
});