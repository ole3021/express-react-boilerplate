import React from 'react'
import { Link } from 'react-router'

class SideBar extends React.Component {
  constructor () {
    super()

    this.state = {
      selectItem: 0,
      selectSubItem: null
    }
  }

  toggleMenu (index, menuItem, event) {
    const setCurrentMenu = this.props.setCurrentMenu
    const clearCurrentSubMenu = this.props.clearCurrentSubMenu
    const containSubItems = menuItem.subMenus && menuItem.subMenus.length > 0

    if (containSubItems) {
      event.preventDefault()
    }
    this.setState({ selectItem: index, selectSubItem: null })
    setCurrentMenu(menuItem)
    clearCurrentSubMenu()
  }

  toggleSubMenu (index, menuItem, event) {
    const setCurrentSubMenu = this.props.setCurrentSubMenu

    this.setState({ selectSubItem: index })
    setCurrentSubMenu(menuItem)
  }

  render () {
    const state = this.state
    const props = this.props

    return (
      <aside className='main-sidebar'>
        <section className='sidebar'>
          <ul className='sidebar-menu'>
            {props.menus.map((menu, i) =>
              <li key={i} className={(state.selectItem === i) ? 'active treeview' : 'treeview'}>
                <Link to={menu.href} onClick={this.toggleMenu.bind(this, i, menu)}>
                  <i className={menu.iconClass} />
                  <span>{menu.name}</span>
                  { menu.subMenus ? <i className='fa fa-angle-left pull-right' /> : null}
                </Link>
                <ul className={(state.selectSItem === i) ? 'treeview-menu menu-open' : 'treeview-menu'}>
                  { menu.subMenus ? menu.subMenus.map((subMenu, i) =>
                    <li key={i} className={(state.selectSubItem === i) ? 'active' : ''}>
                      <Link to={subMenu.href} onClick={this.toggleSubMenu.bind(this, i, subMenu)}>
                        <i className={subMenu.iconClass} />
                        <span>{subMenu.name}</span>
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </li>
            )}
          </ul>
        </section>
      </aside>
    )
  }
}

export default SideBar
