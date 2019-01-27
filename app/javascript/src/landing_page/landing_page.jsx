import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => (~
  #landing-page
    This is the home page. Click
    { ' ' }

    %Link(to="/people")
      this link

    { ' ' }
    to greet everyone!
~)

export default LandingPage
