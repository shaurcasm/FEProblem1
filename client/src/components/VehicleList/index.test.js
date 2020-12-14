import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import VehicleList from './index.js';

const testSelect = {
    addVehicle: (vehicle) => console.log(vehicle),
    replaceVehicle: (vehicleOne, vehicleTwo) => console.log('New vehicle = ' + vehicleOne, 'Previous vehicle = ' + vehicleTwo),
    resetVehicle: () => console.log('Reset')
};

const testChangeTime = (time) => console.log(time)

describe('<VehicleList />', () => {

    describe('render()', () => {

        test('Renders the component', () => {

            var testVehicles = [
                { name: 'Mercury Star Runner', selected: [], 'total_no': 3, 'max_distance': 500, speed: 20 },
                { name: 'Millenium Falcon', selected: [], 'total_no': 3, 'max_distance': 400, speed: 20 },
                { name: 'Normandy', selected: [], 'total_no': 3, 'max_distance': 300, speed: 20 }
            ];
            let testDistance = 300;
            var component = shallow(<VehicleList vehicles={testVehicles} select={testSelect} distance={testDistance} changeTime={testChangeTime} />);

            expect(toJson(component)).toMatchSnapshot();
        });
    });

    describe('Datalist', () => {
        
        test('Validate Datalist with 3 Vehicles', () => {
            
            let testDistance = 300;
            var testVehicles = [
                { name: 'Mercury Star Runner', selected: [], 'total_no': 3, 'max_distance': 500, speed: 20 },
                { name: 'Millenium Falcon', selected: [], 'total_no': 3, 'max_distance': 400, speed: 20 },
                { name: 'Normandy', selected: [], 'total_no': 3, 'max_distance': 300, speed: 20 }
            ];
            // Use mount for UseEffect() to take place (Or componentDidMount)
            var component = mount(<VehicleList vehicles={testVehicles} select={testSelect} distance={testDistance} changeTime={testChangeTime} />);

            var datalist = component.find(`#range-${testDistance}`);
            expect(datalist.children().length).toEqual(testVehicles.length);
        });

        
        test('Validate Datalist with 4 Planets', () => {

            let testDistance = 100;
            var testVehicles = [
                { name: 'Mercury Star Runner', selected: [], 'total_no': 3, 'max_distance': 500, speed: 20 },
                { name: 'Millenium Falcon', selected: [], 'total_no': 3, 'max_distance': 400, speed: 20 },
                { name: 'Normandy', selected: [], 'total_no': 3, 'max_distance': 300, speed: 20 },
                { name: 'Bumblebee', selected: [], 'total_no': 3, 'max_distance': 200, speed: 20 }
            ];
            // Use mount for UseEffect() to take place (Or componentDidMount)
            var component = mount(<VehicleList vehicles={testVehicles} select={testSelect} distance={testDistance} changeTime={testChangeTime} />);

            var datalist = component.find(`#range-${testDistance}`);
            expect(datalist.children().length).toEqual(testVehicles.length);
        });

        test('Validate Datalist with 1 Planet out of range', () => {

            let testDistance = 300;
            var testVehicles = [
                { name: 'Mercury Star Runner', selected: [], 'total_no': 3, 'max_distance': 500, speed: 20 },
                { name: 'Millenium Falcon', selected: [], 'total_no': 3, 'max_distance': 400, speed: 20 },
                { name: 'Normandy', selected: [], 'total_no': 3, 'max_distance': 300, speed: 20 },
                { name: 'Bumblebee', selected: [], 'total_no': 3, 'max_distance': 200, speed: 20 }
            ];
            // Use mount for UseEffect() to take place (Or componentDidMount)
            var component = mount(<VehicleList vehicles={testVehicles} select={testSelect} distance={testDistance} changeTime={testChangeTime} />);

            var datalist = component.find(`#range-${testDistance}`);
            expect(datalist.children().length).toEqual(testVehicles.length - 1);
        });

        test('Validate Datalist with 2 Planets out of range', () => {

            let testDistance = 400;
            var testVehicles = [
                { name: 'Mercury Star Runner', selected: [], 'total_no': 3, 'max_distance': 500, speed: 20 },
                { name: 'Millenium Falcon', selected: [], 'total_no': 3, 'max_distance': 400, speed: 20 },
                { name: 'Normandy', selected: [], 'total_no': 3, 'max_distance': 300, speed: 20 },
                { name: 'Bumblebee', selected: [], 'total_no': 3, 'max_distance': 200, speed: 20 }
            ];
            // Use mount for UseEffect() to take place (Or componentDidMount)
            var component = mount(<VehicleList vehicles={testVehicles} select={testSelect} distance={testDistance} changeTime={testChangeTime} />);

            var datalist = component.find(`#range-${testDistance}`);
            expect(datalist.children().length).toEqual(testVehicles.length - 2);
        });
    });
});