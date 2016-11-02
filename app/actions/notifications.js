/*
 * Message items for the HeaderBar.
 * {
 *   theme: ''
 *   content: ''
 * }
 */

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const VIEW_ALL_NOTIFICATIONS = 'VIEW_ALL_NOTIFICATIONS'
export const VIEW_NOTIFICATION = 'VIEW_NOTIFICATION'

export const NOTIFICATIONS = [
  {
    content: '5 new members joined today',
    theme: 'fa fa-users text-aqua'
  }, {
    content: '5 new members joined',
    theme: 'fa fa-users text-red'
  }, {
    content: 'You changed your username',
    className: 'fa fa-user text-red'
  }
]

export const addNotification = (notification) => {
  return {
    type: ADD_NOTIFICATION,
    notification
  }
}

export const viewAllNotifications = () => {
  return {
    type: VIEW_ALL_NOTIFICATIONS
  }
}

export const viewNotification = (notificationId) => {
  return {
    type: VIEW_NOTIFICATION,
    notificationId
  }
}
