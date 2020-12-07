import { connect } from 'react-redux'
import Presentational from './Presentational.js'

const mapStateToProps = state => ({
    planets: state.planetList.planetArray
});

export default connect(mapStateToProps, null)(Presentational);