import React from 'react'

class NotificationItem extends React.Component {
  render () {
    return (
      <li key={"header-notification-item"}>
        <a href='#'><i className={this.props.theme} />{this.props.content}</a>
      </li>
    )
  }
}

export default NotificationItem
