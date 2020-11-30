import React, { useEffect, useState } from 'react'
import PlanetList from '../PlanetList'
//import VehicleList from '../VehicleList'

// ToDo: Vehicles; Image Styling; Panel Styling.
const DEFAULT_SRC = "/images/misc/al-falcone.png";
const DEFAULT_ALT = "Target Queen Al Falcone";

const planetToImageSrcMatrix = {
    'Donlon': "/images/planets/donlon.png",
    'Enchai': "/images/planets/enchai.png",
    'Jebing': "/images/planets/jebing.png",
    'Lerbin': "/images/planets/lerbin.png",
    'Pingasor': "/images/planets/pingasor.png",
    'Sapir': "/images/planets/sapir.png"
}

// Might not need container if redux state not used.
const Presentational =  ({ planets, select }) => {
    // Any maintenance when component renders.
    useEffect(() => {

    });

    const [imageSource, setSource] = useState(DEFAULT_SRC);
    const [planetName, setName] = useState(DEFAULT_ALT);

    // Set image of the planet if available, else set default if no planet or no image.
    const changePlanetImage = (planet) => {
        var src = planetToImageSrcMatrix[planet];
        var imageNameRE = /(?<=\/)\w+(?=\.png$)/;
        var name = src.match(imageNameRE);

        if(imageNameRE.test(src)) {
            setSource(src);
            setName(name);
        }
        else {
            setSource(DEFAULT_SRC);
            setName(DEFAULT_ALT);
        }
    }
    // Add vehicle - ToDo.
    // Change image when a planet is selected. Function to change (this) Local state sent as prop to PlanetList.
    return (
        <div className="selection-panel">
            <img className="planet-image" src={imageSource} alt={planetName}></img>
            <div className="selectors-container">
                <PlanetList changeImage={changePlanetImage}/>
            </div>
        </div>
    )
}

export default Presentational;