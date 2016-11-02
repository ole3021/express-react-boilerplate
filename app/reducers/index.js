import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import languages from './languages'
import {menus, currentMenu, currentSubMenu} from './menus'
import messages from './messages'
import notifications from './notifications'

const reducers = combineReducers({
  languages,
  menus,
  messages,
  currentMenu,
  currentSubMenu,
  notifications,
  routing: routerReducer
})

export default reducers
