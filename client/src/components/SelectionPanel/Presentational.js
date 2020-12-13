import React, { useEffect, useState } from 'react';
import PlanetList from '../PlanetList';
import VehicleList from '../VehicleList';
import { DEFAULT_SRC, DEFAULT_ALT, DEFAULT_RANGE, planetToImageSrcMatrix } from '../../constants/Misc.js';
import './style.scss';

// ToDo: Image Styling; Panel Styling.

// Might not need container if redux state not used.
const Presentational =  ({ planets, direction }) => {
    const [imageSource, setSource] = useState(DEFAULT_SRC);
    const [planetName, setName] = useState(DEFAULT_ALT);
    const [distanceToPlanet, setDistance] = useState(DEFAULT_RANGE);
    const [timeToPlanet, setTime] = useState(null);
    const reverseOrNot = direction || 'row';

    // Set image of the planet if available, else set default if no planet or no image.
    const changePlanetImage = (planet) => {
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

    const changeTime = (time) => {
        setTime(time);
    }

    useEffect(() => {
        setDistance(() => {
            let selectedPlanet = planets.filter(planet => planet.name === planetName);
            return selectedPlanet.length === 1 ? selectedPlanet[0].distance : DEFAULT_RANGE;
        });
        //console.log(distanceToPlanet);
    }, [planetName, planets]);

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
                <PlanetList changeImage={changePlanetImage} />
                <VehicleList distanceToPlanet={distanceToPlanet} changeTime={changeTime} />
            </div>
        </div>
    )
}

export default Presentational;