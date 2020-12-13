// Container code for Main Section
import { connect } from 'react-redux';
import { fetchPlanets } from '../../actions/fetchPlanets.js';
import { fetchVehicles } from '../../actions/fetchVehicles.js';
import selectionPanelVisibility from '../../selectors/selectionPanelVisibility.js';
import selectedOptions from '../../selectors/selectedOptions.js';
import Presentational from './Presentational';

const mapStateToProps = state => ({
    loading: state.planetList.loading,
    error: state.planetList.error,
    selectionPanelVisibility: selectionPanelVisibility(state),
    selectedOptions: selectedOptions(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPlanets: () => dispatch(fetchPlanets()),
    fetchVehicles: () => dispatch(fetchVehicles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);

