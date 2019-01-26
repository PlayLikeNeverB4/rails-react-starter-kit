import { connect } from 'react-redux'
import _ from 'lodash'

import HelloComponent from '../components/hello_component'

import {
  fetchInitialData,
} from '../actions'

const mapStateToProps = state => ({
  people: _.values(state.people),
  loadingData: state.misc.loadingData,
})

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => dispatch(fetchInitialData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloComponent)
