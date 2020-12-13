//Presentational code for Main Section

import React, { useEffect, useRef } from 'react';
import SelectionPanel from '../SelectionPanel';
import './style.scss';
import fetch from 'node-fetch';
//import PropTypes from 'prop-types';

const Presentational = ({ loading, error, selectionPanelVisibility, selectedOptions, fetchPlanets, fetchVehicles }) => {
    const resultRef = useRef(null);

    // ComponentDidMount() but for functional component.
    useEffect(() => {
        //console.log("Fetching...");
        fetchPlanets();
        fetchVehicles();
        //console.log('Done');
    }, [fetchPlanets, fetchVehicles]);

    const onSubmit = () => {
        // Process user input and send to route for result.
        // const token = importedTokenAPI()
        // Handle 4xx and 5xx errors for fetch.
        const handleErrors = (response) => {
            if(!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        };

        //console.log("Selected Options = " + JSON.stringify(selectedOptions));   // Convert object to JSON to display. 

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedOptions)
        }

        fetch('/api/getResult', requestOptions)
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                console.log("In React Result = " + JSON.stringify(data));
                if(data.error) {
                    resultRef.current.innerHTML = data.error;
                }
                else {
                    if((data.status === 'success') && data["planet_name"]) {
                        resultRef.current.innerHTML = `It's a success. Found Queen in <span style='color: red'>${data["planet_name"]}</span>.`;
                    }
                    else {
                        resultRef.current.innerHTML = `Mission failed. We'll get her next <span style='color: red'>time</span>.`;
                    }
                }
            })
            .catch(error => console.log('Error = ' + error))  // Display error.

        //console.log('Result in onSubmit = ' + JSON.stringify(result));
    }

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
            <div id='planet-four' className="selection-container" style={{ display: selectionPanelVisibility.fourth }} >
                <SelectionPanel direction="row-reverse" key='4' />
            </div>
            <button id='submit-button' type='submit' disabled={selectionPanelVisibility.submitButton} onClick={onSubmit}>Submit</button>
            <div ref={resultRef} className='result-container'></div>
        </section>
    );
}

export default Presentational;