import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import PlanetList from './index.js';

const testSelect = {
    addPlanet: (planet) => console.log(planet),
    replacePlanet: (planetOne, planetTwo) => console.log('New Planet = ' + planetOne, 'Previous Planet = ' + planetTwo),
    resetPlanet: () => console.log('Reset')
};

const testChangeImage = (name) => console.log(name)

describe('<PlanetList />', () => {

    test('Renders the component', () => {
        
        const testPlanets = [
            { name: 'Mercury', selected: false },
            { name: 'Venus', selected: false },
            { name: 'Earth', selected: false },
            { name: 'Mars', selected: false }
        ];
        const component = shallow(<PlanetList planets={testPlanets} select={testSelect} changeImage={testChangeImage} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    describe('Datalist', () => {
        
        test('Validate Datalist with 3 Planets', () => {

            const testPlanets = [
                { name: 'Mercury', selected: false },
                { name: 'Venus', selected: false },
                { name: 'Earth', selected: false }
            ];
            const component = shallow(<PlanetList planets={testPlanets} select={testSelect} changeImage={testChangeImage} />);

            const datalist = component.find('#available-planets');
            expect(datalist.children().length).toEqual(testPlanets.length);
        });

        
        test('Validate Datalist with 4 Planets', () => {

            const testPlanets = [
                { name: 'Mercury', selected: false },
                { name: 'Venus', selected: false },
                { name: 'Earth', selected: false },
                { name: 'Mars', selected: false }
            ];
            const component = shallow(<PlanetList planets={testPlanets} select={testSelect} changeImage={testChangeImage} />);

            const datalist = component.find('#available-planets');
            expect(datalist.children().length).toEqual(testPlanets.length);
        });
    });
});