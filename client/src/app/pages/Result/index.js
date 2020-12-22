import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Result extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: {}
        }
    }

    handleResult(result) {
        if(result.error) {
            return <p><span id='error'>Error: </span> <span id='error-message'>{result.error}</span></p>
        }

        else if(result.status === 'success') {
            return <p>It's a <span id='success'>success</span>! Found Queen in <span id='planet-name'>{result["planet_name"]}</span>.</p>
        }

        else {
            return <p>Mission <span id='fail'>failed</span>! We'll get her next time.</p>
        }
    }

    render() {
        const result = this.props.location.state.result;

        return(
            <div className='result-container'>
                We're in the endgame now.{this.handleResult(result)}
                Thank you for playing this Demo.
            </div>
        )
    }
}

Result.propTypes = {
    location: PropTypes.object.isRequired
};

export default Result;