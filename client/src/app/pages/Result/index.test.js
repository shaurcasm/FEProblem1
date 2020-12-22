import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Result from './index.js';

describe('<Result /> Page', () => {

    test('Renders with a success result', () => {

        var mockLocation = {
            state: {
                result: {
                    status: 'success',
                    'planet_name': 'FooBar'
                }
            }
        };
        const component = shallow(<Result location={mockLocation} />)
        expect(toJson(component)).toMatchSnapshot();
    });

    test('Renders with a fail result', () => {

        var mockLocation = {
            state: {
                result: {
                    status: 'false'
                }
            }
        };
        const component = shallow(<Result location={mockLocation} />)
        expect(toJson(component)).toMatchSnapshot();
    });

    test('Renders with a error result', () => {
        var errorMessage = 'Token is a satirical character in South Park.';
        var mockLocation = {
            state: {
                result: {
                    error: errorMessage
                }
            }
        };
        const component = shallow(<Result location={mockLocation} />)
        expect(toJson(component)).toMatchSnapshot();
    });
});