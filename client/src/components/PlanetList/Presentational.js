import React, { useEffect, useState } from 'react';
import './style.scss';

// Any datalist styling; 
const Presentational = ({ planets, select, changeImage }) => {
    const [selectedPlanet, setSelection] = useState('');
    const [previousSelection, setPrevious] = useState('');

    // Valuable code. Validating Datalist input.
    // When the value of the input changes...
    const inputValidation = event => {
        var optionFound = false,
            input = event.target,
            datalist = input.list;
        
        // Determine whether an option exists with the current value of the input.
        for (let j = 0; j < datalist.options.length; j++) {
            let optionValue = datalist.options[j].value;
            if(input.value.toUpperCase() === optionValue.toUpperCase()) {
                optionFound = true;
                setSelection(optionValue);
                changeImage(optionValue);
                break;
            }
        }
        // Use the setCustomValidity function of the validation API
        // to provide a user feedback if the value does not exist in the datalist.
        if(optionFound) {
            input.setCustomValidity('');
        } else {
            input.setCustomValidity('Please select a valid Planet');
        }
        input.reportValidity();
    }

    // Apply if local state selected planet is changed(second argument)
    useEffect(() => {
        //console.log("Current Planet: ", selectedPlanet);
        //console.log("Previous Planet: ", previousSelection);

        if(selectedPlanet !== previousSelection) {
            // If there was a previous selection, replace it with new one use redux action
            if(previousSelection) {
                //console.log('Replace action!');
                select.replacePlanet(selectedPlanet, previousSelection);
                setPrevious(selectedPlanet);
            }
            // Else, no previous selection. Merely use add action.
            else {
                //console.log('Add action!')
                select.addPlanet(selectedPlanet);
                setPrevious(selectedPlanet);
            }
        }
    }, [previousSelection, select, selectedPlanet]);

    // Gets updated everytime planets state is changed.
    const planetOptions = planets.filter(planet => planet.selected === false).map((planet, index) => {
        return (
            <option key={index} value={planet.name}>{planet.name}</option>
        )        
    });
    
    // Comment: PlanetList component's datalist didn't need dynamic ID to function properly, for currently unknown reason.
    // Unlike VehicleList, yet they both were applied once by multiple sectional components.
    return (
        <div className='planet-list'>
            <label htmlFor='planet-selector' className='sr-only'>Choose a Planet from this list:</label>
            <input type='text' list='available-planets' name='planet-selector' onChange={inputValidation} placeholder="Pick a Planet." autoCorrect='off' spellCheck='false' autoFocus />
            <datalist id='available-planets'>
                {planetOptions}
            </datalist>
        </div>
    );
}

export default Presentational;