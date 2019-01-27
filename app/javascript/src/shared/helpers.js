import _ from 'lodash'
import queryString from 'query-string'
import { NotificationManager } from 'react-notifications'

export const showNotification = (message, duration = 5000) => {
  NotificationManager.success(message, '', duration)
}

export const showErrorNotification = (message, duration = 10000) => {
  NotificationManager.error(message, '', duration)
}

export const callApi = (url, params) => {
  if (!_.isEmpty(params)) {
    url += url.includes('?') ? '&' : '?'
    url += queryString(params)
  }
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(response => Promise.all([ response, response.json() ]))
    .then(([ response, json ]) => {
      if (response.status === 200) {
        resolve(json)
      } else {
        reject()
      }
    })
    .catch(() => {
      reject()
    })
  })
}
