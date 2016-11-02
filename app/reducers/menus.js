/*
 * Menu items for the SideBar.
 */

import {SET_MENUS, SET_CURRENT_MENU, SET_CURRENT_SUB_MENU, CLEAR_CURRENT_SUB_MENU, MENUS} from '../actions/menus'

export const menus = (state = MENUS, action) => {
  switch (action.type) {
    case SET_MENUS:
      return action.menus
    default:
      return state
  }
}

export const currentMenu = (state = MENUS[0], action) => {
  switch (action.type) {
    case SET_CURRENT_MENU:
      return Object.assign({}, action.menuItem)
    default:
      return state
  }
}

export const currentSubMenu = (state = MENUS[0].subMenus ? MENUS[0].subMenus[0] : null, action) => {
  switch (action.type) {
    case SET_CURRENT_SUB_MENU:
      return Object.assign({}, action.menuItem)
    case CLEAR_CURRENT_SUB_MENU:
      return null
    default:
      return state
  }
}
