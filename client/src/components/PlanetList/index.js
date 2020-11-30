import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as selectPlanets from '../../actions/selectPlanets.js'
import Presentational from './Presentational.js'

const mapStateToProps = state => ({
    planets: state.planetList.planetArray
});

const mapDispatchToProps = dispatch => ({
    select: bindActionCreators(selectPlanets, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);