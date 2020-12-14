import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Presentational from './Presentational.js';
import * as selectPlanets from '../../actions/selectPlanets.js';
import * as selectVehicles from '../../actions/selectVehicles.js';

const mapStateToProps = state => ({
    planets: state.planetList.planetArray,
    vehicles: state.vehicleList.vehicleArray
});

const mapDispatchToProps = dispatch => ({
    selectPlanets: bindActionCreators(selectPlanets, dispatch),
    selectVehicles: bindActionCreators(selectVehicles, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);