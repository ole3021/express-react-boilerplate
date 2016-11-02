/*
 * Messages use to show in header
 */

import {ADD_MESSAGE, VIEW_ALL_MESSAGES, VIEW_MESSAGE, MESSAGES} from '../actions/messages'

const message = (state = MESSAGES, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state
    case VIEW_ALL_MESSAGES:
      return state
    case VIEW_MESSAGE:
      return state
    default:
      return state
  }
}

export default message
