import React, { useEffect, useState } from 'react'
import PlanetList from '../PlanetList'
import VehicleList from '../VehicleList'
import './style.scss'

// ToDo: Image Styling; Panel Styling.
const DEFAULT_SRC = "/images/misc/al-falcone.png";
const DEFAULT_ALT = "Target Queen Al Falcone";
const DEFAULT_RANGE = 3000; // Should be high enough to keep vehicles disabled by default.

const planetToImageSrcMatrix = {
    'Donlon': "/images/planets/donlon.png",
    'Enchai': "/images/planets/enchai.png",
    'Jebing': "/images/planets/jebing.png",
    'Lerbin': "/images/planets/lerbin.png",
    'Pingasor': "/images/planets/pingasor.png",
    'Sapir': "/images/planets/sapir.png"
}

// Might not need container if redux state not used.
const Presentational =  ({ planets, direction }) => {
    const [imageSource, setSource] = useState(DEFAULT_SRC);
    const [planetName, setName] = useState(DEFAULT_ALT);
    const [distanceToPlanet, setRange] = useState(DEFAULT_RANGE);
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

    useEffect(() => {
        setRange(() => {
            let selectedPlanet = planets.filter(planet => planet.name === planetName);
            return selectedPlanet.length === 1 ? selectedPlanet[0].distance : DEFAULT_RANGE;
        });
        //console.log(distanceToPlanet);
    }, [planetName, planets]);

    return (
        <div style={{flexDirection: reverseOrNot}} className="selection-panel">
            <img className="planet-image" src={imageSource} alt={planetName}></img>
            <div className="selectors-container">
                <PlanetList changeImage={changePlanetImage} />
                <VehicleList distanceToPlanet={distanceToPlanet} />
            </div>
        </div>
    )
}

export default Presentational;