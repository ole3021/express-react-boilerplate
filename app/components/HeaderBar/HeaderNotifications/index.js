import React from 'react'

import NotificationItem from './NotificationItem'

class HeaderNotifications extends React.Component {
  render () {
    let props = this.props

    const notificationList = props.notifications.map(function (notificationDetails, iterator) {
      return (
        <NotificationItem key={iterator} theme={notificationDetails.theme} content={notificationDetails.content} />
      )
    })

    return (
      <li className='dropdown notifications-menu'>
        <a href='#' className='dropdown-toggle' data-toggle='dropdown'><i className='fa fa-bell-o' /><span className='label label-warning'>{props.notifications.length}</span></a>
        <ul className='dropdown-menu'>
          <li className='header'>
            You have
            {props.notifications.length} notifications
          </li>
          <li>
            <div className='slimScrollDiv'>
              <ul className='menu'>
                {notificationList}
              </ul>
              <div className='slimScrollBar' />
              <div className='slimScrollRail' />
            </div>
          </li>
          <li className='footer'>
            <a href='#'>View all</a>
          </li>
        </ul>
      </li>
    )
  }
}

export default HeaderNotifications
