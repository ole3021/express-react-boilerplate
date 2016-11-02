import React from 'react'
import { Link } from 'react-router'

import HeaderLanguages from '../../containers/HeaderBar/HeaderLanguages'
import HeaderMessages from '../../containers/HeaderBar/HeaderMessages'
import HeaderNotifications from '../../containers/HeaderBar/HeaderNotifications'

class HeaderBar extends React.Component {
  pushMenu () {
    let body = document.body
    if (body.clientWidth > 768) {
      if (body.className.indexOf('sidebar-collapse') === -1) {
        body.className += ' sidebar-collapse'
      } else {
        body.className = body.className.replace(' sidebar-collapse', '')
      }
    } else {
      if (body.className.indexOf('sidebar-open') === -1) {
        body.className += ' sidebar-open'
      } else {
        body.className = body.className.replace(' sidebar-open', '')
      }
    }
  }
  render () {
    return (
      <header className='main-header'>
        <Link to='/' className='logo'>
          <span className='logo-mini'><b>WC</b>N</span>{/* mini logo for sidebar mini 50x50 pixels */}
          <span className='logo-lg'><b>WeChat</b>NOW</span>{/* logo for regular state and mobile devices */}
        </Link>
        {/* Header Navbar: style can be found in header.less */}
        <nav className='navbar navbar-static-top' role='navigation'>
          {/* Sidebar toggle button */}
          <a
            className='sidebar-toggle'
            data-toggle='offcanvas'
            role='button'
            onClick={this.pushMenu}><span className='sr-only'>Toggle navigation</span></a>
          <div className='navbar-custom-menu'>
            <ul className='nav navbar-nav'>
              <HeaderLanguages />
              {/* Messages: style can be found in dropdown.less */}
              <HeaderMessages />
              {/* Notifications: style can be found in dropdown.less */}
              <HeaderNotifications />
              {/* User Account: style can be found in dropdown.less */}
              <li className='dropdown user user-menu'>
                <a className='dropdown-toggle' data-toggle='dropdown'><img src='demo/img/user-160x160.jpg' className='user-image' alt='User Image' /> <span className='hidden-xs'>Alexander Pierce</span></a>
                <ul className='dropdown-menu'>
                  {/* User image */}
                  <li className='user-header'>
                    <img src='demo/img/user-160x160.jpg' className='img-circle' alt='User Image' />
                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  {/* Menu Body */}
                  <li className='user-body'>
                    <div className='col-xs-4 text-center'>
                      <a href='#'>Followers</a>
                    </div>
                    <div className='col-xs-4 text-center'>
                      <a href='#'>Sales</a>
                    </div>
                    <div className='col-xs-4 text-center'>
                      <a href='#'>Friends</a>
                    </div>
                  </li>
                  {/* Menu Footer */}
                  <li className='user-footer'>
                    <div className='pull-left'>
                      <a href='#' className='btn btn-default btn-flat'>Profile</a>
                    </div>
                    <div className='pull-right'>
                      <a href='#' className='btn btn-default btn-flat'>Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* ontrol Sidebar Toggle Button */}
              <li>
                <a data-toggle='control-sidebar'><i className='fa fa-gears' /></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default HeaderBar
