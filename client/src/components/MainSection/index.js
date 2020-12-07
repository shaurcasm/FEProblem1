// Container code for Main Section
import { connect } from 'react-redux';
import { fetchPlanets } from '../../actions/fetchPlanets.js';
import { fetchVehicles } from '../../actions/fetchVehicles.js';
import { selectionPanelVisibility } from '../../selectors';
import Presentational from './Presentational';

const mapStateToProps = state => ({
    loading: state.planetList.loading,
    error: state.planetList.error,
    selectionPanelVisibility: selectionPanelVisibility(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPlanets: () => dispatch(fetchPlanets()),
    fetchVehicles: () => dispatch(fetchVehicles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);

