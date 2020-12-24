//Presentational code for Main Section
import React, { useEffect, useState } from 'react';
import SelectionPanel from '../../../components/SelectionPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import fetch from 'node-fetch';
import './style.scss';
import PropTypes from 'prop-types';

const Presentational = ({ loading, error, selectionPanelVisibility, selectedOptions, fetchPlanets, fetchVehicles }) => {
    const [redirect, setRedirect] = useState();
    const [result, setResult] = useState();

    // ComponentDidMount() but for functional component.
    useEffect(() => {
        fetchPlanets();
        fetchVehicles();
    }, [fetchPlanets, fetchVehicles]);

    const onSubmit = () => {
        // Process user input and send to route for result.
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedOptions)
        };
        
        fetch('/api/getResult', requestOptions)
            .then(async response => {
                const data = await response.json();

                // Check for error response
                if(!response.ok) {
                    // Get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                console.log("In React Result = " + JSON.stringify(data));
                setResult(data);        // set data state to be provided when redirecting to result page
                setRedirect('/result'); // set local state to initiate rerender and redirect to result with above data.
                return data;
            })
            .catch(error => {
                setResult({ error: error.toString() });
                setRedirect('/result');
                console.log('Error = ' + error)
            });  // Display error.
    }

    // Display any Errors while fetching
    if (error) {
        return (
            <div id='error'>
                <span id='error-code'>{error.status}</span>
                Error! {error.message}
            </div>
        )
    }
    // Luxury: Display something while fetching, if wanted.
    if (loading) {
        return ( 
            <div id='loading'>
                <FontAwesomeIcon icon={faSun} color='orange' size='6x' spin />
            </div>
        )
    }
    // Redirect to result page with received result data.
    if (redirect) {
        return <Redirect to={{
            pathname: redirect,
            state: { result: result }
        }} />
    }

    // Display SectionalPanels one by one after checking from selector; Reverse display direction every alternate panel.
    return (
        <section className="main">
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
            <div className='button-container'>
                <button id='submit-button' type='submit' disabled={!selectionPanelVisibility.submitButton} onClick={onSubmit}>Launch</button>
            </div>
        </section>
    );
}

// PropType description to ensure structure.
Presentational.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    selectionPanelVisibility: PropTypes.object.isRequired,
    selectedOptions: PropTypes.exact({
        'planet_names': PropTypes.array,
        'vehicle_names': PropTypes.array
    }),
    fetchPlanets: PropTypes.func,
    fetchVehicles: PropTypes.func
};

export default Presentational;