/*
 * Message items for the HeaderBar.
 * {
 *   title: ''
 *   content: ''
 *   displayPicture: ''
 *   time: ''
 * }
 */

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const VIEW_ALL_MESSAGES = 'VIEW_ALL_MESSAGES'
export const VIEW_MESSAGE = 'VIEW_MESSAGE'

export const MESSAGES = [
  {
    title: 'Support Team',
    displayPicture: 'demo/img/user-160x160.jpg',
    content: 'Why not buy a new awesome theme?',
    time: '5 mins'
  }, {
    title: 'AdminLTE Design Team',
    displayPicture: 'demo/img/user-128x128.jpg',
    content: 'Why not buy a new awesome theme?',
    time: '2 hours'
  }
]

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export const viewAllMessages = () => {
  return {
    type: VIEW_ALL_MESSAGES
  }
}

export const viewMessage = (messageId) => {
  return {
    type: VIEW_MESSAGE,
    messageId
  }
}
