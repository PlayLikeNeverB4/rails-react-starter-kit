import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PeopleComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchInitialData()
  }

  render() {
    return (~
      #hello-root
        {this.props.loadingData && (~
          %div
            { '(...loading)' }
        ~)}
        Hello
        {this.props.people.map(person => (~
          %span(class="person-name" key={ person.id })
            { person.name }
        ~))}
    ~)
  }
}

PeopleComponent.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingData: PropTypes.bool.isRequired,
  fetchInitialData: PropTypes.func.isRequired,
}

PeopleComponent.defaultProps = {
}

export default PeopleComponent
