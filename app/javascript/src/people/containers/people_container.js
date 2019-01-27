import { connect } from 'react-redux'

import PeopleComponent from '../components/people_component'

import { getPeople } from '../selectors'

import {
  fetchInitialData,
} from '../actions'

const mapStateToProps = state => ({
  people: getPeople(state),
  loadingData: state.misc.loadingData,
})

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => dispatch(fetchInitialData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleComponent)
