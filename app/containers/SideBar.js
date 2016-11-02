import { connect } from 'react-redux'

import SideBar from '../components/SideBar'

import { setCurrentMenu, setCurrentSubMenu, clearCurrentSubMenu } from '../actions/menus'

const mapStateToProps = ({menus}) => ({
  menus
})

const mapDispatchToProps = dispatch => ({
  setCurrentMenu: menuItem => dispatch(setCurrentMenu(menuItem)),
  setCurrentSubMenu: menuItem => dispatch(setCurrentSubMenu(menuItem)),
  clearCurrentSubMenu: () => dispatch(clearCurrentSubMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
