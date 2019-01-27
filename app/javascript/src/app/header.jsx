import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (~
  %nav(id="page-header")
    %NavLink(to="/" exact={ true } activeClassName="active-header-link")
      Home
    %NavLink(to="/people" exact={ true } activeClassName="active-header-link")
      People
~)

export default Header
