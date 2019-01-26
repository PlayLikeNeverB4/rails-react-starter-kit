import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NotificationContainer } from 'react-notifications'
import { EZSelect } from 'react-ez-components'

class HelloComponent extends Component {
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
        %EZSelect(items={[]})
        %NotificationContainer
    ~)
  }
}

HelloComponent.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingData: PropTypes.bool.isRequired,
  fetchInitialData: PropTypes.func.isRequired,
}

HelloComponent.defaultProps = {
}

export default HelloComponent
