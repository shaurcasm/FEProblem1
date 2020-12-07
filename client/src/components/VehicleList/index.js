import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectVehicles from '../../actions/selectVehicles.js';
import Presentational from './Presentational.js';

// Make selector
const mapStateToProps = (state, ownProps) => ({
    vehicles: state.vehicleList.vehicleArray,
    distance: ownProps.distanceToPlanet
});

const mapDispatchToProps = dispatch => ({
    select: bindActionCreators(selectVehicles, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);