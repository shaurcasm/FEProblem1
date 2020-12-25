import React, { useEffect, useState } from 'react';
import { DEFAULT_RANGE } from '../../constants/misc.js';
import PropTypes from 'prop-types';
import './style.scss';

const timeManagement = (distance, speed) => {
    if((distance > 0) && (distance < DEFAULT_RANGE)) {
        //console.log('Distance = ' + distance, 'Speed = ' + speed);
        return Math.round((distance / speed) * 100) / 100;  // Limiting precision to limit decimal calculation errors.
    }

    else {
        // Out of range error
    }
}

const VehicleList = ({ vehicles, select, distance, changeTime }) => {
    const [selectedVehicle, setSelection] = useState('');
    const [previousSelection, setPrevious] = useState('');
    const [options, setOptions] = useState([]); // To Keep track of options even after re-renders.

    // Update/Re-render options everytime the distance Props or Redux state Vehicles are changed.
    useEffect(() => {
        //console.log("Distance to Planet: ", distance);
        setOptions([])
        var tempOptions = [];
        vehicles.forEach(vehicle => {
            if((vehicle['total_no'] > 0) && (vehicle['max_distance'] >= distance)) {
                let option = 
                <option key={vehicle["max_distance"]} value={vehicle.name}>
                    {vehicle.name} X {vehicle["total_no"]}
                </option>
                tempOptions.push(option);
            }  
        });
        setOptions([...tempOptions]);
    }, [distance, vehicles]);

    // Redux state management for Vehicles. 
    useEffect(() => {
        //console.log("Current Vehicle: ", selectedVehicle);
        //console.log("Previous Vehicle: ", previousSelection);

        if(selectedVehicle !== previousSelection) {
            // If there was a previous selection, replace it with new one use redux action
            if(previousSelection) {
                //console.log('Replace action!');
                select.replaceVehicle(selectedVehicle, previousSelection);
                setPrevious(selectedVehicle);
            }
            // Else, no previous selection. Merely use add action.
            else {
                //console.log('Add action!')
                select.addVehicle(selectedVehicle);
                setPrevious(selectedVehicle);
            }
        }
    }, [previousSelection, select, selectedVehicle]);

    // Valuable code. Validating Datalist input.
    // When the value of the input changes...
    const inputValidation = (event) => {
        var optionFound = false,
            input = event.target,
            datalist = input.list;
        
        // Determine whether an option exists with the current value of the input.
        for (let j = 0; j < datalist.options.length; j++) {
            let optionValue = datalist.options[j].value;
            if(input.value.toUpperCase() === optionValue.toUpperCase()) {
                optionFound = true;
                setSelection(optionValue);
                let vehicleSpeed = vehicles.filter(vehicle => vehicle.name === optionValue)[0].speed;
                let time = timeManagement(distance, vehicleSpeed);
                changeTime(time);
                break;
            }
        }
        // Use the setCustomValidity function of the validation API
        // to provide a user feedback if the value does not exist in the datalist.
        
        if(optionFound) {
            input.setCustomValidity('');
        } else {
            input.setCustomValidity('Please select a valid Vehicle');
        }
        input.reportValidity();
    }

    // Datalists must be given dynamic ID, even though in separate components. 
    return (
        <div key={distance} className="vehicles-container">
            <label htmlFor="vehicle-selector" className="sr-only">
            Choose a Vehicle from this list:
            </label>
            <input
                type="text"
                list={`range-${distance}`}
                name="vehicle-selector"
                placeholder="Pick a vehicle"
                onChange={inputValidation}
                autoCorrect="off"
                spellCheck="false"
            />
            <datalist id={`range-${distance}`} className='vehicle-list'>{options}</datalist>
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