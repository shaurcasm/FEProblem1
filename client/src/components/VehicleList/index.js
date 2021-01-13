import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import inputValidation from '../../utilities/inputValidation.js';
import './style.scss';

const VehicleList = ({ vehicles, select, distance, changeTime }) => {
    const [selectedVehicle, setSelection] = useState('');
    const [previousSelection, setPrevious] = useState('');

    // Redux state management for Vehicles. 
    useEffect(() => {
        if(selectedVehicle === previousSelection)
            return;

        // If there was a previous selection, replace it with new one use redux action
        if(previousSelection) {
            select.replaceVehicle(selectedVehicle, previousSelection);
            setPrevious(selectedVehicle);
        }
        // Else, no previous selection. Merely use add action.
        else {
            select.addVehicle(selectedVehicle);
            setPrevious(selectedVehicle);
        }
    }, [previousSelection, select, selectedVehicle]);

    const validate = event => inputValidation(event, vehicles, setSelection, changeTime, distance);

    const options = vehicles.filter(vehicle => (
        (vehicle['total_no'] > 0 && vehicle['max_distance'] >= distance) ? true : false
    )).map(vehicle => (
        <option key={vehicle['max_distance']} value={vehicle.name}>
            {vehicle.name} X {vehicle['total_no']}
        </option>
    ))

    // Datalists must be given dynamic ID, even though in separate components. 
    return (
        <div key={distance} className='vehicles-container'>
            <label htmlFor='vehicle-selector' className='sr-only'>
                Choose a Vehicle from this list:
            </label>
            <input
                type='text'
                list={`range-${distance}`}
                name='vehicle-selector'
                placeholder="Pick a vehicle"
                onChange={validate}
                autoCorrect='off'
                spellCheck='false'
            />
            <datalist id={`range-${distance}`} className='vehicle-list'>{options            }</datalist>
        </div>
    );
}

VehicleList.propTypes = {
    vehicles: PropTypes.array,
    select: PropTypes.objectOf(PropTypes.func),
    distance: PropTypes.number.isRequired,
    changeTime: PropTypes.func
}

export default VehicleList;