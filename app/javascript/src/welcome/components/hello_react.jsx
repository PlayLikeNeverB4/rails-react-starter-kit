import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Hello extends Component {
  render() {
    return (~
      %div
        Hello { this.props.name }!
    ~)
  }
}

Hello.propTypes = {
  name: PropTypes.string,
}

Hello.defaultProps = {
  name: 'David',
}

export default Hello
