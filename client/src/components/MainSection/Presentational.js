//Presentational code for Main Section

import React, { useEffect } from 'react';
import SelectionPanel from '../SelectionPanel';
import './style.scss';
//import PropTypes from 'prop-types';

// ToDO: Submit button. Process selected values into passable object.
const Presentational = ({ loading, error, selectionPanelVisibility, fetchPlanets, fetchVehicles }) => {

    // ComponentDidMount() but for functional component.
    useEffect(() => {
        console.log("Fetching...");
        fetchPlanets();
        fetchVehicles();
        console.log('Done');
    }, [fetchPlanets, fetchVehicles]);

    // Display any Errors while fetching
    if (error) {
        return <div id='error'>Error! {error.message}</div>
    }
    // Luxury: Display something while fetching, if wanted.
    if (loading) {
        return <div id='loading'>Loading...</div>
    }

    // Display each latter SectionalPanel after checking from selector.
    return (
        <section className="main">
            <h2>Choose 4 planets and vehicles: Find Queen Al Falcone.</h2>
            <div id='planet-one' className="selection-container" style={{ display: "flex" }} >
                <SelectionPanel key='1' />
            </div>
            <div id='planet-two' className="selection-container" style={{ display: selectionPanelVisibility.second }} >
                <SelectionPanel direction="row-reverse" key='2' />
            </div>
            <div id='planet-three' className="selection-container" style={{ display: selectionPanelVisibility.third }} >
                <SelectionPanel key='3' />
            </div>
            <div id='planet-four' className="selection-container" style={{ display: selectionPanelVisibility.fourth, flexDirection: "row-reverse" }} >
                <SelectionPanel direction="row-reverse" key='4' />
            </div>
        </section>
    )
}

/*
const Presentational = ({ listCount, planet_names, vehicle_names }) => {
    
    var selection = planetListing(listCount);

    return (
        <section className="main">
            <div className="selection-panel" style={{display: "flex"}} >
                <SelectionPanel planetsAndDistance={planetsAndDistance} />
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.second}} >
                <SelectionPanel />
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.third}} >
                <SelectionPanel />
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.fourth}} >
                <SelectionPanel />
            </div>
            <button onClick="send planet_names and vehicle_names to route" className="disable if 4 planets not selected">Submit</button> 
        </section>
    )
}
*/

export default Presentational