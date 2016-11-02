/*
 * Notifications use to show in header
 */

import {ADD_NOTIFICATION, VIEW_ALL_NOTIFICATIONS, VIEW_NOTIFICATION, NOTIFICATIONS} from '../actions/notifications'

const notification = (state = NOTIFICATIONS, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return state
    case VIEW_ALL_NOTIFICATIONS:
      return state
    case VIEW_NOTIFICATION:
      return state
    default:
      return state
  }
}

export default notification
