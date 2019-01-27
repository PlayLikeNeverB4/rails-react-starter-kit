import _ from 'lodash'
import { createSelector } from 'reselect'

const getPeopleById = state => state.people

const getPeople = createSelector(
  [ getPeopleById ],
  peopleById => {
    return _.values(peopleById)
  }
)

export default getPeople
