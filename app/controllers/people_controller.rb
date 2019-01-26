class PeopleController < ApplicationController
  def fetch_initial_data
    people_data = {
      '1': {
        id: '1',
        name: 'George',
      },
      '2': {
        id: '2',
        name: 'David',
      },
    }
    render json: {
      people: people_data,
    }
  end
end
