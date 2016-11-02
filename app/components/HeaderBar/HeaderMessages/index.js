import React from 'react'

import MessageItem from './MessageItem'

class HeaderMessages extends React.Component {
  render () {
    let props = this.props

    const messageList = props.messages.map(function (messageDetails, iterator) {
      return (
        <MessageItem
          key={iterator}
          title={messageDetails.title}
          displayPicture={messageDetails.displayPicture}
          time={messageDetails.time}
          content={messageDetails.content} />
      )
    })

    return (
      <li className='dropdown messages-menu'>
        <a href='#' className='dropdown-toggle' data-toggle='dropdown'><i className='fa fa-envelope-o' /><span className='label label-primary'>{props.messages.length}</span></a>
        <ul className='dropdown-menu'>
          <li className='header'>
            You have
            {props.messages.length} messages
          </li>
          <li>
            <div className='slimScrollDiv'>
              <ul className='menu'>
                {messageList}
              </ul>
              <div className='slimScrollBar' />
              <div className='slimScrollRail' />
            </div>
          </li>
          <li className='footer'>
            <a href='#'>See All Messages</a>
          </li>
        </ul>
      </li>
    )
  }
}

export default HeaderMessages
