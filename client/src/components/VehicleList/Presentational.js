import React, { useEffect, useState } from 'react';
import './style.scss';

const Presentational = ({ vehicles, select, distance }) => {
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
          </option>;
          tempOptions.push(option);
        }  
      });
      setOptions([...tempOptions]);
    }, [distance, vehicles]);

    // Apply if local state selected planet is changed(second argument)
    useEffect(() => {
        //console.log("Current Vehicle: ", selectedVehicle);
        //console.log("Previous Vehicle: ", previousSelection);
        //console.log("Vehicle array: ", localVehicles);

        if(selectedVehicle !== previousSelection) {
            // If there was a previous selection, replace it with new one use redux action
            if(previousSelection) {
                console.log('Replace action!');
                select.replaceVehicle(selectedVehicle, previousSelection);
                setPrevious(selectedVehicle);
            }
            // Else, no previous selection. Merely use add action.
            else {
                console.log('Add action!')
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
        <div key={distance} className="vehicle-list">
            <label htmlFor="vehicle-selector" className="sr-only">
            Choose a Vehicle from this list:
            </label>
            <input
            type="text"
            list={distance}
            name="vehicle-selector"
            placeholder="Pick a vehicle."
            onChange={inputValidation}
            autoCorrect="off"
            spellCheck="false"
            />
            <datalist id={distance}>{options}</datalist>
        </div>
    );
}

export default Presentational;