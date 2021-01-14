import React, { useEffect, useState } from 'react';
import PlanetList from '../PlanetList';
import VehicleList from '../VehicleList';
import { DEFAULT_SRC, DEFAULT_ALT, DEFAULT_RANGE, planetToImageSrcMatrix } from '../../constants/misc.js';
import PropTypes from 'prop-types';
import './style.scss';

const Presentational =  ({ planets, vehicles, selectPlanets, selectVehicles, direction }) => {
    const [imageSource, setSource] = useState(DEFAULT_SRC);
    const [planetName, setName] = useState(DEFAULT_ALT);
    const [distanceToPlanet, setDistance] = useState(DEFAULT_RANGE);
    const [timeToPlanet, setTime] = useState(null);
    const reverseOrNot = direction || 'row';

    // Set image of the planet if available, else set default if no planet or no image.
    const changePlanetImage = planet => {
        var src = planetToImageSrcMatrix[planet];
        var imageNameRE = /(?<=\/)\w+(?=\.png$)/;

        if(imageNameRE.test(src)) {
            setSource(src);
            setName(planet);
        }
        else {
            setSource(DEFAULT_SRC);
            setName(DEFAULT_ALT);
        }
    }

    useEffect(() => {
        setDistance(() => {
            let selectedPlanet = planets.filter(planet => planet.name === planetName);
            return selectedPlanet.length === 1 ? selectedPlanet[0].distance : DEFAULT_RANGE;
        });
    }, [planetName, planets]);

    // Reverse flex-direction for alternate panels. Display time to reach planet when both planet, vehicle selected
    // and time-to-reach is calculated.
    return (
        <div style={{flexDirection: reverseOrNot}} className="selection-panel">
            <div className="image-container">
                <img className="planet-image" src={imageSource} alt={planetName}></img>
            </div>
            { timeToPlanet &&
                <div className="time-container">
                    Touchdown in ...
                    <p className="time">{timeToPlanet} units</p>
                </div>
            }
            <div className="selectors-container">
                <PlanetList planets={planets} select={selectPlanets} changeImage={changePlanetImage} />
                <VehicleList vehicles={vehicles} select={selectVehicles} distance={distanceToPlanet} changeTime={setTime} />
            </div>
        </div>
    )
}

Presentational.propTypes = {
    planets: PropTypes.array,
    vehicles: PropTypes.array,
    selectPlanets: PropTypes.objectOf(PropTypes.func),
    selectVehicles: PropTypes.objectOf(PropTypes.func),
    direction: PropTypes.string
};

export default Presentational;