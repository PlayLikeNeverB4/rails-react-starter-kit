import { NotificationManager } from 'react-notifications'

export const showNotification = (message, duration = 5000) => {
  NotificationManager.success(message, '', duration)
}

export const showErrorNotification = (message, duration = 10000) => {
  NotificationManager.error(message, '', duration)
}
