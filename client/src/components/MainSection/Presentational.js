import React, { useEffect } from 'react'
//import PropTypes from 'prop-types'
//import SelectionPanel from '../SelectionPanel'

const Presentational = ({ planets, loading, error, selectionPanelVisibility, select, fetch }) => {
    const addPlanet = (event) => select.addPlanet(event.target.value);
    const replacePlanet = (newPlanet, oldPlanet) => select.replacePlanet(newPlanet, oldPlanet);
    const resetPlanetList = () => select.resetPlanetList();

    // ComponentDidMount() but for functional component.
    useEffect(() => {
        console.log("Fetching...");
        fetch();
        console.log('Done');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetch]);

    if(error) {
        return <div>Error! {error.message}</div>
    }
    if(loading) {
        return <div>Loading...</div>
    }
    /*
    return (
        <section className="main">
            <div className="selection-panel" style={{display: "flex"}} >
                <h2>Planet 1</h2>
                <SelectionPanel planets={planetArray} select={select} />
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.second}} >
                <h2>Planet 2</h2>
                <SelectionPanel planets={planetArray} select={select} />
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.third}} >
                <h2>Planet 3</h2>
                <SelectionPanel planets={planetArray} select={select} />
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.fourth}} >
                <h2>Planet 3</h2>
                <SelectionPanel planets={planetArray} select={select} />
            </div>
        </section>
    )
    */

    return (
        <section className="main">
            <ul>
                {planets.map((planet, index) => <li key={index}>{planet.name} : {planet.distance} : {planet.selected.toString()}</li>)}
            </ul>
            <h1>{selectionPanelVisibility.second}</h1>
            <div className="selection-panel" style={{display: "flex"}} >
                <h2>Planet 1</h2>
                <button id="planet-one" value="Donlon" style={{width:"100px", height:"30px"}} onClick={addPlanet}>Add Donlon</button>
                <button onClick={resetPlanetList}>Reset</button> 
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.second}} >
                <h2>Planet 2</h2>
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.third}} >
            </div>
            <div className="selection-panel" style={{display: selectionPanelVisibility.fourth}} >
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

// Display: flex and none;
export default Presentational