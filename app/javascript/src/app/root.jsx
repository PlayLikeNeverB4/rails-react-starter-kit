import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { NotificationContainer } from 'react-notifications'

import Header from './header'
import Footer from './footer'
import PeopleRoot from '../people/containers/people_root'
import LandingPage from '../landing_page/landing_page'

const Root = () => (~
  %Router
    %div
      %Header
      #page-content
        %Switch
          %Route(exact={ true } path="/" component={ LandingPage })
          %Route(exact={ true } path="/people" component={ PeopleRoot })
      %Footer
      %NotificationContainer
~)
export default Root
