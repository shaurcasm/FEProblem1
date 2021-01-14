import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import inputValidation from '../../utilities/inputValidation.js';
import './style.scss';

// Any datalist styling; 
const PlanetList = ({ planets, select, changeImage }) => {
    const [selectedPlanet, setSelection] = useState('');
    const [previousSelection, setPrevious] = useState('');

    // Apply if local state selected planet is changed(second argument)
    useEffect(() => {
        if (selectedPlanet === previousSelection)
            return;

        // If there was a previous selection, replace it with new one use redux action
        if (previousSelection) {
            select.replacePlanet(selectedPlanet, previousSelection);
            setPrevious(selectedPlanet);
        }
        // Else, no previous selection. Merely use add action.
        else {
            select.addPlanet(selectedPlanet);
            setPrevious(selectedPlanet);
        }
    }, [previousSelection, select, selectedPlanet]);

    const validate = event => inputValidation(event, planets, setSelection, changeImage, null);

    // Gets updated everytime planets state is changed.
    const planetOptions = planets.filter(planet => planet.selected === false).map((planet, index) => {
        return (
            <option key={index} value={planet.name}>
                {planet.name}
            </option>
        )
    });

    return (
        <div className='planet-list'>
            <label htmlFor='planet-selector' className='sr-only'>
                Choose a Planet from this list:
            </label>
            <input 
                type='text'
                list='available-planets'
                name='planet-selector'
                onChange={validate}
                placeholder="Pick a Planet"
                autoCorrect='off'
                spellCheck='false'
                autoFocus
            />
            <datalist id='available-planets'>
                {planetOptions}
            </datalist>
        </div>
    );
}

PlanetList.propTypes = {
    planets: PropTypes.array,
    select: PropTypes.objectOf(PropTypes.func),
    changeImage: PropTypes.func
}

export default PlanetList;