// Container code for the component.
import { connect } from 'react-redux'
import { fetchPlanets } from '../../actions/fetchPlanets.js'
import * as selectPlanets from '../../actions/selectPlanets.js'
import { bindActionCreators } from 'redux'
import Presentational from './Presentational'
import { selectionPanelVisibility } from '../../selectors'

const mapStateToProps = state => ({
    planets: state.planetList.planetArray,
    loading: state.planetList.loading,
    error: state.planetList.error,
    selectionPanelVisibility: selectionPanelVisibility(state)
});

const mapDispatchToProps = dispatch => ({
    select: bindActionCreators(selectPlanets, dispatch),
    fetch: () => dispatch(fetchPlanets())
})

/*
const mapStateToProps = (state) => ({
    listCount: getListNumber(state),
    "planet_names": state.planetList.filter(planet => planet.selected === false).map(planet => planet.name),
    "vehicle_names": state.vehicleList.filter(vehicle => vehicle.selected === false).map(vehicle => vehicle.name)   // Will need to make a selector for multiple uses of saem vehicle.
});
*/

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);

